import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { ArrowRight } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import {
  createSubscriptionOrder,
  verifySubscriptionPayment,
} from "@/lib/billing.functions";
import { PLAN_LABELS, type PlanId } from "@/lib/plans";

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => { open: () => void };
  }
}

function loadRazorpay(): Promise<boolean> {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export function SubscribeButton({
  plan,
  className,
  label = "Become Elite",
}: {
  plan: PlanId;
  className?: string;
  label?: string;
}) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const createOrder = useServerFn(createSubscriptionOrder);
  const verify = useServerFn(verifySubscriptionPayment);

  async function start() {
    setError(null);
    if (!user) {
      navigate({ to: "/account" });
      return;
    }
    setBusy(true);
    try {
      const ready = await loadRazorpay();
      if (!ready) throw new Error("Could not load the payment window.");

      const order = await createOrder({ data: { plan } });

      const rzp = new window.Razorpay!({
        key: order.keyId,
        amount: order.amount,
        currency: order.currency,
        name: "SonarEV Elite",
        description: `${PLAN_LABELS[plan]} membership — monthly`,
        order_id: order.orderId,
        prefill: { email: user.email ?? "" },
        theme: { color: "#000000" },
        handler: async (response: {
          razorpay_order_id: string;
          razorpay_payment_id: string;
          razorpay_signature: string;
        }) => {
          try {
            await verify({ data: response });
            setDone(true);
            navigate({ to: "/elite/dashboard" });
          } catch (err) {
            setError(
              err instanceof Error ? err.message : "Payment verification failed.",
            );
          }
        },
        modal: { ondismiss: () => setBusy(false) },
      });
      rzp.open();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={start}
        disabled={busy}
        className={`${className ?? ""} w-full disabled:opacity-60`}
      >
        {busy ? "Opening…" : done ? "Activated" : label}{" "}
        <ArrowRight className="h-4 w-4" />
      </button>
      {error && (
        <p className="mt-2 text-center text-[11px] text-red-300">{error}</p>
      )}
      {!user && (
        <p className="mt-2 text-center text-[11px] text-white/40">
          Sign in required to subscribe.
        </p>
      )}
    </div>
  );
}
