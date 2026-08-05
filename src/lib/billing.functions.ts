import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { PLAN_PRICES, type PlanId } from "@/lib/plans";

function parsePlan(input: { plan: string }): { plan: PlanId } {
  const plan = input.plan as PlanId;
  if (!(plan in PLAN_PRICES)) throw new Error("Unknown plan");
  return { plan };
}

export const createSubscriptionOrder = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator(parsePlan)
  .handler(async ({ data, context }) => {
    const keyId = process.env["RAZORPAY_KEY_ID"];
    const keySecret = process.env["RAZORPAY_KEY_SECRET"];
    if (!keyId || !keySecret) throw new Error("Payments are not configured yet.");

    const amount = PLAN_PRICES[data.plan];
    const res = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa(`${keyId}:${keySecret}`)}`,
      },
      body: JSON.stringify({
        amount: amount * 100,
        currency: "INR",
        receipt: `elite_${data.plan}_${Date.now()}`,
        notes: { plan: data.plan, user_id: context.userId },
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error(`Razorpay order failed [${res.status}]: ${body}`);
      throw new Error("Could not start the payment. Please try again.");
    }

    const order = (await res.json()) as { id: string; amount: number; currency: string };

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("payments").insert({
      user_id: context.userId,
      plan: data.plan,
      amount,
      currency: "INR",
      status: "created",
      razorpay_order_id: order.id,
    });
    if (error) throw error;

    return { orderId: order.id, amount: order.amount, currency: order.currency, keyId, plan: data.plan };
  });

export const verifySubscriptionPayment = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: {
    razorpay_order_id: string;
    razorpay_payment_id: string;
    razorpay_signature: string;
  }) => input)
  .handler(async ({ data, context }) => {
    const keySecret = process.env["RAZORPAY_KEY_SECRET"];
    if (!keySecret) throw new Error("Payments are not configured yet.");

    const { createHmac, timingSafeEqual } = await import("node:crypto");
    const expected = createHmac("sha256", keySecret)
      .update(`${data.razorpay_order_id}|${data.razorpay_payment_id}`)
      .digest("hex");
    const given = Buffer.from(data.razorpay_signature);
    const exp = Buffer.from(expected);
    if (given.length !== exp.length || !timingSafeEqual(given, exp)) {
      throw new Error("Payment verification failed.");
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: payment, error: paymentError } = await supabaseAdmin
      .from("payments")
      .select("plan, amount, user_id")
      .eq("razorpay_order_id", data.razorpay_order_id)
      .maybeSingle();
    if (paymentError) throw paymentError;
    if (!payment || payment.user_id !== context.userId) {
      throw new Error("Order not found for this account.");
    }

    await supabaseAdmin
      .from("payments")
      .update({
        status: "paid",
        razorpay_payment_id: data.razorpay_payment_id,
        razorpay_signature: data.razorpay_signature,
      })
      .eq("razorpay_order_id", data.razorpay_order_id);

    const periodEnd = new Date();
    periodEnd.setMonth(periodEnd.getMonth() + 1);

    const { data: existing } = await supabaseAdmin
      .from("subscriptions")
      .select("id")
      .eq("user_id", context.userId)
      .maybeSingle();

    const record = {
      user_id: context.userId,
      plan: payment.plan,
      status: "active",
      amount: payment.amount,
      current_period_end: periodEnd.toISOString(),
      razorpay_order_id: data.razorpay_order_id,
      razorpay_payment_id: data.razorpay_payment_id,
    };

    if (existing) {
      const { error } = await supabaseAdmin
        .from("subscriptions")
        .update(record)
        .eq("id", existing.id);
      if (error) throw error;
    } else {
      const { error } = await supabaseAdmin.from("subscriptions").insert(record);
      if (error) throw error;
    }

    return { plan: payment.plan as PlanId, status: "active" as const };
  });

export const getMySubscription = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("subscriptions")
      .select("plan, status, current_period_end")
      .eq("user_id", context.userId)
      .maybeSingle();
    if (error) throw error;
    return data;
  });
