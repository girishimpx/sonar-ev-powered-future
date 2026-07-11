import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Battery, Zap, IndianRupee, TrendingUp, Car, Plug } from "lucide-react";
import { Nav, Footer, FloatingCTAs, btnPrimary, btnSecondary } from "@/components/site";

export const Route = createFileRoute("/calculator")({
  component: CalculatorPage,
  head: () => ({
    meta: [
      { title: "EV Charging Profit Calculator | Sonar EV" },
      {
        name: "description",
        content:
          "Estimate daily, monthly and yearly revenue and profit for your EV charging station. Adjust chargers, tariff, electricity cost and traffic to model your ROI.",
      },
      { property: "og:title", content: "EV Charging Profit Calculator | Sonar EV" },
      {
        property: "og:description",
        content: "Model your EV charging station profit with Sonar EV's interactive calculator.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

// Assumptions
const AVG_BATTERY_PACK_KWH = 60; // avg EV battery size
const ADMIN_FEE_PER_KWH = 2; // ₹/kWh platform + admin
const UTILIZATION_FACTOR = 0.35; // % of nearby EVs that actually charge here per day

function CalculatorPage() {
  const [chargers, setChargers] = useState(2);
  const [electricityCost, setElectricityCost] = useState(8); // ₹/kWh from board
  const [tariff, setTariff] = useState(24); // ₹/kWh charged to user
  const [evTraffic, setEvTraffic] = useState(60); // EVs moving around per day
  const [avgChargePercent, setAvgChargePercent] = useState(40); // % of 60kWh battery charged per session

  const stats = useMemo(() => {
    const avgKwhPerSession = AVG_BATTERY_PACK_KWH * (avgChargePercent / 100);
    const grossPerKwh = tariff;
    const profitPerKwh = Math.max(tariff - electricityCost - ADMIN_FEE_PER_KWH, 0);

    // sessions per day per charger, capped by traffic share
    const potentialSessions = (evTraffic * UTILIZATION_FACTOR) / Math.max(chargers, 1);
    const sessionsPerChargerDay = Math.min(Math.max(potentialSessions, 0), 10); // cap 10/day
    const kwhPerChargerDay = sessionsPerChargerDay * avgKwhPerSession;

    const revenuePerChargerDay = kwhPerChargerDay * grossPerKwh;
    const profitPerChargerDay = kwhPerChargerDay * profitPerKwh;

    const revenueDay = revenuePerChargerDay * chargers;
    const profitDay = profitPerChargerDay * chargers;

    return {
      profitPerKwh,
      sessionsPerChargerDay,
      kwhPerChargerDay,
      revenuePerChargerDay,
      profitPerChargerDay,
      revenueDay,
      profitDay,
      revenueMonth: revenueDay * 30,
      profitMonth: profitDay * 30,
      revenueYear: revenueDay * 365,
      profitYear: profitDay * 365,
    };
  }, [chargers, electricityCost, tariff, evTraffic, avgChargePercent]);

  const inr = (n: number) =>
    "₹" + Math.round(n).toLocaleString("en-IN");

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Nav />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(255,255,255,0.08),transparent_70%)]" />
        <div className="relative mx-auto max-w-4xl px-6 pt-20 pb-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
            Interactive ROI Calculator
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Estimate your EV charging{" "}
            <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
              profit
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-white/60">
            Move the sliders to model daily, monthly and yearly revenue and profit for your site.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1.1fr]">
          {/* Inputs */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
              Configure your site
            </div>
            <div className="mt-8 space-y-8">
              <SliderInput
                icon={<Plug className="h-4 w-4" />}
                label="Number of charging points"
                value={chargers}
                onChange={setChargers}
                min={1}
                max={20}
                step={1}
                display={`${chargers}`}
                hint="How many chargers you plan to install"
              />
              <SliderInput
                icon={<Zap className="h-4 w-4" />}
                label="Local electricity cost"
                value={electricityCost}
                onChange={setElectricityCost}
                min={4}
                max={15}
                step={0.5}
                display={`₹${electricityCost}/kWh`}
                hint="What your electricity board charges you per unit"
              />
              <SliderInput
                icon={<IndianRupee className="h-4 w-4" />}
                label="Your charging tariff"
                value={tariff}
                onChange={setTariff}
                min={15}
                max={35}
                step={1}
                display={`₹${tariff}/kWh`}
                hint="What you charge EV drivers per unit (avg ₹24)"
              />
              <SliderInput
                icon={<Car className="h-4 w-4" />}
                label="EVs moving around your area"
                value={evTraffic}
                onChange={setEvTraffic}
                min={10}
                max={500}
                step={10}
                display={`${evTraffic} / day`}
                hint="Estimated EVs in your catchment daily"
              />
              <SliderInput
                icon={<Battery className="h-4 w-4" />}
                label="Average charge per car"
                value={avgChargePercent}
                onChange={setAvgChargePercent}
                min={10}
                max={100}
                step={5}
                display={`${avgChargePercent}%`}
                hint={`Assuming a ${AVG_BATTERY_PACK_KWH} kWh battery pack`}
              />
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-black p-5 text-sm text-white/60">
              <div className="mb-2 text-xs font-medium uppercase tracking-wider text-white/50">
                Profit math
              </div>
              <div className="flex items-center justify-between py-1">
                <span>Tariff</span><span className="text-white">₹{tariff}/kWh</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span>− Electricity</span><span className="text-white">₹{electricityCost}/kWh</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span>− Admin fee</span><span className="text-white">₹{ADMIN_FEE_PER_KWH}/kWh</span>
              </div>
              <div className="mt-2 flex items-center justify-between border-t border-white/10 pt-2 font-semibold">
                <span className="text-white">Profit per kWh</span>
                <span className="text-white">₹{stats.profitPerKwh.toFixed(1)}</span>
              </div>
            </div>
          </div>

          {/* Outputs */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <StatCard
                icon={<Battery className="h-4 w-4" />}
                label="Sessions / charger / day"
                value={stats.sessionsPerChargerDay.toFixed(1)}
              />
              <StatCard
                icon={<Zap className="h-4 w-4" />}
                label="Units / charger / day"
                value={`${Math.round(stats.kwhPerChargerDay)} kWh`}
              />
              <StatCard
                icon={<IndianRupee className="h-4 w-4" />}
                label="Revenue / charger / day"
                value={inr(stats.revenuePerChargerDay)}
              />
              <StatCard
                icon={<TrendingUp className="h-4 w-4" />}
                label="Profit / charger / day"
                value={inr(stats.profitPerChargerDay)}
                highlight
              />
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-6 sm:p-8">
              <div className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                Total site earnings
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <BigStat label="Per day" revenue={stats.revenueDay} profit={stats.profitDay} inr={inr} />
                <BigStat label="Per month" revenue={stats.revenueMonth} profit={stats.profitMonth} inr={inr} />
                <BigStat label="Per year" revenue={stats.revenueYear} profit={stats.profitYear} inr={inr} />
              </div>
              <p className="mt-6 text-xs text-white/40">
                Estimates assume {AVG_BATTERY_PACK_KWH} kWh battery packs charged at {avgChargePercent}% per session and typical utilization. Actual returns depend on site, tariff, and grid conditions.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={`https://wa.me/917019721320?text=${encodeURIComponent(
                  `Hi Sonar EV, I ran the profit calculator:\n• Chargers: ${chargers}\n• Electricity: ₹${electricityCost}/kWh\n• Tariff: ₹${tariff}/kWh\n• EV traffic: ${evTraffic}/day\n\nEstimated monthly profit: ${inr(stats.profitMonth)}\n\nPlease share a detailed proposal.`,
                )}`}
                target="_blank"
                rel="noreferrer"
                className={btnPrimary}
              >
                Connect on WhatsApp <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/contact" className={btnSecondary}>
                Request full proposal
              </Link>
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
  icon,
  label,
  value,
  onChange,
  min,
  max,
  step,
  display,
  hint,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  onChange: (n: number) => void;
  min: number;
  max: number;
  step: number;
  display: string;
  hint?: string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm font-medium text-white">
          <span className="grid h-7 w-7 place-items-center rounded-md border border-white/15 bg-white/5">
            {icon}
          </span>
          {label}
        </div>
        <div className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white">
          {display}
        </div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-4 w-full appearance-none bg-transparent [&::-webkit-slider-runnable-track]:h-1.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-thumb]:mt-[-7px] [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-white/30 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(255,255,255,0.08)] [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-white"
        style={{
          background: `linear-gradient(to right, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.9) ${pct}%, rgba(255,255,255,0.1) ${pct}%, rgba(255,255,255,0.1) 100%)`,
          borderRadius: 999,
          height: 6,
        }}
      />
      {hint && <div className="mt-2 text-xs text-white/40">{hint}</div>}
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  highlight = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-5 ${
        highlight
          ? "border-white/30 bg-white text-black"
          : "border-white/10 bg-white/[0.03] text-white"
      }`}
    >
      <div className={`flex items-center gap-2 text-xs uppercase tracking-wider ${highlight ? "text-black/60" : "text-white/50"}`}>
        {icon}
        {label}
      </div>
      <div className="mt-3 text-2xl font-semibold tracking-tight">{value}</div>
    </div>
  );
}

function BigStat({
  label,
  revenue,
  profit,
  inr,
}: {
  label: string;
  revenue: number;
  profit: number;
  inr: (n: number) => string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black p-5">
      <div className="text-xs font-medium uppercase tracking-wider text-white/50">{label}</div>
      <div className="mt-3 text-xl font-semibold">{inr(revenue)}</div>
      <div className="text-xs text-white/50">Revenue</div>
      <div className="mt-3 border-t border-white/10 pt-3">
        <div className="text-xl font-semibold text-white">{inr(profit)}</div>
        <div className="text-xs text-white/50">Profit</div>
      </div>
    </div>
  );
}