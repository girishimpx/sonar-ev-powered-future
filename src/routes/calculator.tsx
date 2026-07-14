import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Zap, Plug, Battery, IndianRupee, TrendingUp, Percent, Clock } from "lucide-react";
import { Nav, Footer, FloatingCTAs, btnPrimary, btnSecondary } from "@/components/site";

export const Route = createFileRoute("/calculator")({
  component: CalculatorPage,
  head: () => ({
    meta: [
      { title: "Franchise Earnings Calculator | SONAR.EV" },
      {
        name: "description",
        content:
          "Estimate monthly revenue, net revenue, franchise earnings (95%), ROI, and payback period for your SONAR.EV charging station. Illustrative — actual results vary by location and utilization.",
      },
      { property: "og:title", content: "Franchise Earnings Calculator | SONAR.EV" },
      { property: "og:description", content: "Model your SONAR.EV franchise earnings — 95% partner / 5% SONAR.EV." },
      { property: "og:type", content: "website" },
    ],
  }),
});

const SONAR_SHARE = 0.05;
const PARTNER_SHARE = 0.95;

function CalculatorPage() {
  const [chargers, setChargers] = useState(2);
  const [sessions, setSessions] = useState(6); // sessions per charger per day
  const [kwhPerSession, setKwhPerSession] = useState(24);
  const [tariff, setTariff] = useState(24); // ₹/kWh selling price
  const [electricity, setElectricity] = useState(8); // ₹/kWh cost
  const [opex, setOpex] = useState(40000); // monthly opex (staff, rent, internet, misc)
  const [investment, setInvestment] = useState(2500000); // total station investment

  const stats = useMemo(() => {
    const kwhPerDay = chargers * sessions * kwhPerSession;
    const revenueDay = kwhPerDay * tariff;
    const revenueMonth = revenueDay * 30;

    const electricityCostMonth = kwhPerDay * electricity * 30;
    const gatewayFeesMonth = revenueMonth * 0.02; // ~2%
    const totalExpensesMonth = electricityCostMonth + gatewayFeesMonth + opex;

    const netRevenueMonth = Math.max(revenueMonth - totalExpensesMonth, 0);
    const sonarShare = netRevenueMonth * SONAR_SHARE;
    const partnerShare = netRevenueMonth * PARTNER_SHARE;
    const partnerAnnual = partnerShare * 12;
    const roi = investment > 0 ? (partnerAnnual / investment) * 100 : 0;
    const paybackMonths = partnerShare > 0 ? investment / partnerShare : Infinity;

    return {
      kwhPerDay,
      revenueDay,
      revenueMonth,
      electricityCostMonth,
      gatewayFeesMonth,
      totalExpensesMonth,
      netRevenueMonth,
      sonarShare,
      partnerShare,
      partnerAnnual,
      roi,
      paybackMonths,
    };
  }, [chargers, sessions, kwhPerSession, tariff, electricity, opex, investment]);

  const inr = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Nav />
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(255,255,255,0.08),transparent_70%)]" />
        <div className="relative mx-auto max-w-4xl px-6 pt-20 pb-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
            Franchise Earnings Calculator
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Model your{" "}
            <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
              franchise earnings
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-white/60">
            Adjust the inputs to estimate monthly revenue, net revenue, your 95% partner share, ROI, and payback period.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1.1fr]">
          {/* Inputs */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">Configure your station</div>
            <div className="mt-8 space-y-8">
              <SliderInput icon={<Plug className="h-4 w-4" />} label="Number of chargers" value={chargers} onChange={setChargers} min={1} max={20} step={1} display={`${chargers}`} />
              <SliderInput icon={<Clock className="h-4 w-4" />} label="Sessions per charger / day" value={sessions} onChange={setSessions} min={1} max={20} step={1} display={`${sessions}`} />
              <SliderInput icon={<Battery className="h-4 w-4" />} label="Average kWh per session" value={kwhPerSession} onChange={setKwhPerSession} min={5} max={80} step={1} display={`${kwhPerSession} kWh`} />
              <SliderInput icon={<IndianRupee className="h-4 w-4" />} label="Selling price (tariff)" value={tariff} onChange={setTariff} min={12} max={40} step={0.5} display={`₹${tariff}/kWh`} />
              <SliderInput icon={<Zap className="h-4 w-4" />} label="Electricity cost" value={electricity} onChange={setElectricity} min={4} max={15} step={0.5} display={`₹${electricity}/kWh`} />
              <SliderInput icon={<TrendingUp className="h-4 w-4" />} label="Monthly operating expenses" value={opex} onChange={setOpex} min={0} max={300000} step={5000} display={inr(opex)} hint="Rent, staff, internet, and misc" />
              <SliderInput icon={<IndianRupee className="h-4 w-4" />} label="Total station investment" value={investment} onChange={setInvestment} min={500000} max={20000000} step={100000} display={inr(investment)} hint="Chargers, civil work, electrical setup" />
            </div>
          </div>

          {/* Outputs */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <StatCard icon={<Zap className="h-4 w-4" />} label="Units delivered / day" value={`${Math.round(stats.kwhPerDay)} kWh`} />
              <StatCard icon={<IndianRupee className="h-4 w-4" />} label="Revenue / day" value={inr(stats.revenueDay)} />
              <StatCard icon={<IndianRupee className="h-4 w-4" />} label="Monthly revenue" value={inr(stats.revenueMonth)} />
              <StatCard icon={<TrendingUp className="h-4 w-4" />} label="Monthly expenses" value={inr(stats.totalExpensesMonth)} />
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-6 sm:p-8">
              <div className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">Net revenue split</div>
              <div className="mt-4 text-3xl font-semibold">{inr(stats.netRevenueMonth)}<span className="ml-2 text-sm text-white/50">/ month</span></div>
              <div className="mt-6 h-4 w-full overflow-hidden rounded-full border border-white/10 bg-white/5">
                <div className="flex h-full">
                  <div className="flex h-full items-center justify-end bg-white pr-2 text-[10px] font-semibold text-black" style={{ width: "95%" }}>95%</div>
                  <div className="flex h-full items-center justify-center bg-white/25 text-[10px] font-semibold text-white" style={{ width: "5%" }}>5%</div>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white p-5 text-black">
                  <div className="text-xs font-semibold uppercase tracking-widest text-black/60">Franchise partner (95%)</div>
                  <div className="mt-2 text-2xl font-semibold">{inr(stats.partnerShare)}<span className="ml-1 text-xs text-black/60">/mo</span></div>
                  <div className="mt-1 text-xs text-black/60">{inr(stats.partnerAnnual)} / year</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black p-5">
                  <div className="text-xs font-semibold uppercase tracking-widest text-white/50">SONAR.EV (5%)</div>
                  <div className="mt-2 text-2xl font-semibold">{inr(stats.sonarShare)}<span className="ml-1 text-xs text-white/50">/mo</span></div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <StatCard icon={<Percent className="h-4 w-4" />} label="Annual ROI" value={`${stats.roi.toFixed(1)}%`} highlight />
                <StatCard
                  icon={<Clock className="h-4 w-4" />}
                  label="Payback period"
                  value={isFinite(stats.paybackMonths) ? `${(stats.paybackMonths / 12).toFixed(1)} yrs` : "—"}
                />
              </div>

              <p className="mt-6 text-xs text-white/40">
                Illustrative estimate based on your inputs. Actual results depend on utilization, tariffs, local demand, and operating costs.
                Net revenue is calculated after electricity, payment gateway fees (~2%), and approved operating expenses.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className={btnPrimary}>
                Become a Partner <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`https://wa.me/917019721320?text=${encodeURIComponent(
                  `Hi SONAR.EV, I ran the franchise earnings calculator:\n• Chargers: ${chargers}\n• Sessions/charger/day: ${sessions}\n• Avg kWh/session: ${kwhPerSession}\n• Tariff: ₹${tariff}/kWh\n• Electricity: ₹${electricity}/kWh\n• Monthly opex: ${inr(opex)}\n• Investment: ${inr(investment)}\n\nEstimated partner earnings: ${inr(stats.partnerShare)}/mo (${inr(stats.partnerAnnual)}/yr)\nROI: ${stats.roi.toFixed(1)}%\n\nPlease share a franchise proposal.`,
                )}`}
                target="_blank"
                rel="noreferrer"
                className={btnSecondary}
              >
                Connect on WhatsApp <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTAs />
    </div>
  );
}

function SliderInput({
  icon, label, value, onChange, min, max, step, display, hint,
}: {
  icon: React.ReactNode; label: string; value: number; onChange: (n: number) => void;
  min: number; max: number; step: number; display: string; hint?: string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm font-medium text-white">
          <span className="grid h-7 w-7 place-items-center rounded-md border border-white/15 bg-white/5">{icon}</span>
          {label}
        </div>
        <div className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white">{display}</div>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-4 w-full appearance-none bg-transparent [&::-webkit-slider-thumb]:mt-[-7px] [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-white/30 [&::-webkit-slider-thumb]:bg-white [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-white"
        style={{
          background: `linear-gradient(to right, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.9) ${pct}%, rgba(255,255,255,0.1) ${pct}%, rgba(255,255,255,0.1) 100%)`,
          borderRadius: 999, height: 6,
        }}
      />
      {hint && <div className="mt-2 text-xs text-white/40">{hint}</div>}
    </div>
  );
}

function StatCard({
  icon, label, value, highlight = false,
}: {
  icon: React.ReactNode; label: string; value: string; highlight?: boolean;
}) {
  return (
    <div className={`rounded-2xl border p-5 ${highlight ? "border-white/30 bg-white text-black" : "border-white/10 bg-white/[0.03] text-white"}`}>
      <div className={`flex items-center gap-2 text-xs uppercase tracking-wider ${highlight ? "text-black/60" : "text-white/50"}`}>
        {icon} {label}
      </div>
      <div className="mt-3 text-2xl font-semibold tracking-tight">{value}</div>
    </div>
  );
}