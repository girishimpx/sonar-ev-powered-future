import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Zap,
  ShieldCheck,
  Cpu,
  Wifi,
  Monitor,
  Fingerprint,
  Thermometer,
  Building2,
  Hotel,
  Fuel,
  Truck,
  ShoppingBag,
  Car,
  Home,
  Sparkles,
  Check,
} from "lucide-react";
import { Nav, Footer, FloatingCTAs, ContactStrip, btnPrimary, btnSecondary } from "@/components/site";
import chargerImg from "@/assets/charger-product.jpg";
import lineupImg from "@/assets/charger-lineup.jpg";

export const Route = createFileRoute("/chargers")({
  component: ChargersPage,
  head: () => ({
    meta: [
      { title: "Configure Your Charger | Sonar EV" },
      { name: "description", content: "Design your perfect Sonar EV DC fast charger. Pick your use case, power, connectors and deployment — see live specs from 30kW to 240kW." },
    ],
  }),
});

type Charger = {
  power: string;
  tagline: string;
  headline: string;
  description: string;
  ideal: string[];
  specs: Array<{ label: string; value: string }>;
};

const CHARGERS: Charger[] = [
  {
    power: "30",
    tagline: "Compact. Efficient. Everyday commercial.",
    headline: "30kW DC Fast Charger",
    description: "A compact DC fast charger built for dealerships, hotels and everyday commercial deployments where footprint matters.",
    ideal: ["Dealerships", "Boutique Hotels", "Small Commercial", "Residential Clubs"],
    specs: [
      { label: "Model", value: "Sonar.EV 30kW DC Fast Charger" },
      { label: "Max DC Output Power", value: "30 kW" },
      { label: "DC Output Voltage", value: "150 – 1000 V" },
      { label: "Max DC Output Current", value: "100 A" },
      { label: "Number of Output", value: "Dual Gun" },
      { label: "Efficiency", value: "Up to 96% (Peak)" },
      { label: "Communication Protocol", value: "OCPP 1.6J" },
      { label: "Network Connectivity", value: "GSM (3G/4G), Wi-Fi, Bluetooth" },
      { label: "User Authentication", value: "RFID / QR Code / Mobile App" },
      { label: "Display", value: "7\" LCD Touch Panel" },
      { label: "IP Rating", value: "IP55" },
      { label: "Compliance", value: "IEC 61851-1, IEC 61851-23, IEC 62196, CE" },
    ],
  },
  {
    power: "60",
    tagline: "Compact. Powerful. Built for Performance.",
    headline: "60kW DC Fast Charger",
    description: "The smart choice for compact and commercial spaces — high power output in a rugged, IP55-rated commercial package.",
    ideal: ["Apartments", "Hotels", "Offices", "Fleet Operators", "Commercial Spaces"],
    specs: [
      { label: "Model", value: "Sonar.EV 60kW DC Fast Charger" },
      { label: "Max DC Output Power", value: "60 kW" },
      { label: "DC Output Voltage", value: "150 – 1000 V" },
      { label: "Max DC Output Current", value: "200 A" },
      { label: "Number of Output", value: "Dual Gun" },
      { label: "EVs Supported", value: "2 × 30 kW each  OR  1 × 60 kW" },
      { label: "Efficiency", value: "Up to 96% (Peak)" },
      { label: "Power Factor", value: "≥ 0.99 at full load" },
      { label: "THDi", value: "≤ 5%" },
      { label: "Communication Protocol", value: "OCPP 1.6J" },
      { label: "Network Connectivity", value: "GSM (3G/4G), Wi-Fi, Bluetooth" },
      { label: "User Authentication", value: "RFID / QR Code / Mobile App" },
      { label: "Display", value: "7\" LCD Touch Panel" },
      { label: "Protection", value: "Overcurrent, Overvoltage, Undervoltage, Ground Fault, Short Circuit, Surge Protection, DC Leakage" },
      { label: "Operating Temperature", value: "-35°C to +55°C" },
      { label: "Storage Temperature", value: "-40°C to +70°C" },
      { label: "Humidity", value: "≤ 95% RH, Non-condensing" },
      { label: "Altitude", value: "Up to 2,000 m (Derating above 2,000 m)" },
      { label: "Cooling", value: "Forced Air Cooling" },
      { label: "IP Rating", value: "IP55" },
      { label: "Dimensions (W×D×H)", value: "620 × 260 × 1500 mm" },
      { label: "Weight", value: "≤ 150 kg" },
      { label: "Compliance", value: "IEC 61851-1, IEC 61851-23, IEC 62196, CE" },
    ],
  },
  {
    power: "120",
    tagline: "High Power. Unmatched Reliability. Built for Commercial Excellence.",
    headline: "120kW DC Fast Charger",
    description: "Ultra-fast charging power for public and commercial stations — deliver up to 120kW for faster turnaround and happier customers.",
    ideal: ["Fuel Stations", "Shopping Malls", "Fleet Depots", "Hospitals", "Public Charging Hubs"],
    specs: [
      { label: "Model", value: "Sonar.EV 120kW DC Fast Charger" },
      { label: "Max DC Output Power", value: "120 kW" },
      { label: "DC Output Voltage", value: "150 – 1000 V" },
      { label: "Max DC Output Current", value: "300 A" },
      { label: "Number of Output", value: "Dual Gun" },
      { label: "EVs Supported", value: "2 × 60 kW each  OR  1 × 120 kW" },
      { label: "Efficiency", value: "Up to 96% (Peak)" },
      { label: "Power Factor", value: "≥ 0.99 at full load" },
      { label: "THDi", value: "≤ 5%" },
      { label: "Communication Protocol", value: "OCPP 1.6J" },
      { label: "Network Connectivity", value: "GSM (3G/4G), Wi-Fi, Bluetooth" },
      { label: "User Authentication", value: "RFID / QR Code / Mobile App" },
      { label: "Display", value: "7\" LCD Touch Panel" },
      { label: "Protection", value: "Overcurrent, Overvoltage, Undervoltage, Ground Fault, Short Circuit, Surge Protection, DC Leakage" },
      { label: "Operating Temperature", value: "-35°C to +55°C" },
      { label: "Storage Temperature", value: "-40°C to +70°C" },
      { label: "Humidity", value: "≤ 95% RH, Non-condensing" },
      { label: "Altitude", value: "Up to 2,000 m (Derating above 2,000 m)" },
      { label: "Cooling", value: "Forced Air Cooling" },
      { label: "IP Rating", value: "IP55" },
      { label: "Dimensions (W×D×H)", value: "720 × 280 × 1700 mm" },
      { label: "Weight", value: "≤ 180 kg" },
      { label: "Compliance", value: "IEC 61851-1, IEC 61851-23, IEC 62196, CE" },
    ],
  },
  {
    power: "180",
    tagline: "Highway-grade power. Uninterrupted flow.",
    headline: "180kW DC Fast Charger",
    description: "Built for high-throughput corridors — 180kW of ultra-fast power for highways, transit routes and premium EV plazas.",
    ideal: ["Highways", "Transit Corridors", "EV Plazas", "Fleet Hubs"],
    specs: [
      { label: "Model", value: "Sonar.EV 180kW DC Fast Charger" },
      { label: "Max DC Output Power", value: "180 kW" },
      { label: "DC Output Voltage", value: "150 – 1000 V" },
      { label: "Max DC Output Current", value: "400 A" },
      { label: "Number of Output", value: "Dual Gun" },
      { label: "EVs Supported", value: "2 × 90 kW each  OR  1 × 180 kW" },
      { label: "Efficiency", value: "Up to 96% (Peak)" },
      { label: "Communication Protocol", value: "OCPP 1.6J" },
      { label: "Network Connectivity", value: "GSM (3G/4G), Wi-Fi, Bluetooth" },
      { label: "Cooling", value: "Forced Air Cooling / Liquid-Cooled Cable" },
      { label: "IP Rating", value: "IP55" },
      { label: "Compliance", value: "IEC 61851-1, IEC 61851-23, IEC 62196, CE" },
    ],
  },
  {
    power: "240",
    tagline: "Ultra-fast. Modular. Future-ready.",
    headline: "240kW Ultra-Fast Charger",
    description: "Flagship ultra-fast charging platform for highway hubs and premium destinations — modular power blocks, dynamic load balancing, 24/7 uptime.",
    ideal: ["Highway Hubs", "EV Destinations", "Premium Retail", "OEM Networks"],
    specs: [
      { label: "Model", value: "Sonar.EV 240kW Ultra-Fast Charger" },
      { label: "Max DC Output Power", value: "240 kW" },
      { label: "DC Output Voltage", value: "150 – 1000 V" },
      { label: "Max DC Output Current", value: "500 A" },
      { label: "Number of Output", value: "Dual Gun" },
      { label: "EVs Supported", value: "2 × 120 kW each  OR  1 × 240 kW" },
      { label: "Efficiency", value: "Up to 96% (Peak)" },
      { label: "Communication Protocol", value: "OCPP 1.6J" },
      { label: "Network Connectivity", value: "GSM (3G/4G), Wi-Fi, Bluetooth" },
      { label: "Cooling", value: "Liquid-Cooled Cable" },
      { label: "IP Rating", value: "IP55" },
      { label: "Compliance", value: "IEC 61851-1, IEC 61851-23, IEC 62196, CE" },
    ],
  },
];

function ChargersPage() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Nav />
      <ChargersHero />
      <ChargerNavBar />
      <div className="mx-auto max-w-7xl px-6 py-8">
        {CHARGERS.map((c, i) => (
          <ChargerBlock key={c.power} c={c} reverse={i % 2 === 1} />
        ))}
      </div>
      <ContactStrip>Need a custom power configuration? Talk to our engineering team.</ContactStrip>
      <CtaFooter />
      <Footer />
      <FloatingCTAs />
    </div>
  );
}

function ChargersHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(255,255,255,0.08),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
              <Zap className="h-3.5 w-3.5" /> DC Fast & Ultra-Fast Chargers
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              From 30kW to 240kW.<br />
              <span className="text-white/50">Built for today. Ready for tomorrow.</span>
            </h1>
            <p className="mt-6 max-w-xl text-white/60">
              Our DC fast chargers deliver high power, unmatched reliability, and intelligent performance for every commercial and public charging need.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className={btnPrimary}>Enquire about Chargers <ArrowRight className="h-4 w-4" /></Link>
              <a href="#60" className={btnSecondary}>View Specifications</a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-white/5 blur-3xl" />
            <img src={lineupImg} alt="Sonar EV DC fast charger" width={1600} height={1200} className="w-full rounded-2xl border border-white/10 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ChargerNavBar() {
  return (
    <div className="sticky top-16 z-40 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-6 py-3">
        <span className="mr-2 shrink-0 text-xs uppercase tracking-widest text-white/40">Jump to</span>
        {CHARGERS.map((c) => (
          <a
            key={c.power}
            href={`#${c.power}`}
            className="shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white/80 transition-colors hover:border-white/30 hover:bg-white/10"
          >
            {c.power} kW
          </a>
        ))}
      </div>
    </div>
  );
}

function ChargerBlock({ c, reverse }: { c: Charger; reverse: boolean }) {
  return (
    <section id={c.power} className="scroll-mt-32 border-b border-white/10 py-20 last:border-b-0 md:py-28">
      <div className={`grid gap-12 lg:grid-cols-2 lg:items-start ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div className="relative">
          <div className="sticky top-40">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-8">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-white/5 blur-3xl" />
              <img src={chargerImg} alt={`Sonar EV ${c.power}kW charger`} loading="lazy" width={1024} height={1408} className="mx-auto h-auto w-full max-w-sm object-contain" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-6xl font-semibold tracking-tight md:text-7xl">{c.power}</span>
            <span className="text-2xl text-white/50">kW</span>
          </div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">{c.headline}</h2>
          <p className="mt-2 text-sm font-medium uppercase tracking-widest text-white/50">{c.tagline}</p>
          <p className="mt-6 max-w-xl text-white/70">{c.description}</p>

          <div className="mt-8">
            <div className="text-xs font-medium uppercase tracking-widest text-white/50">Ideal for</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {c.ideal.map((i) => (
                <span key={i} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/80">{i}</span>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <div className="text-xs font-medium uppercase tracking-widest text-white/50">Technical Specifications</div>
            <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full text-sm">
                <tbody>
                  {c.specs.map((s, i) => (
                    <tr key={s.label} className={i % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"}>
                      <td className="w-1/2 border-b border-white/5 px-4 py-3 text-white/60">{s.label}</td>
                      <td className="border-b border-white/5 px-4 py-3 font-medium text-white">{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className={btnPrimary}>Enquire about {c.power}kW <ArrowRight className="h-4 w-4" /></Link>
            <a href="tel:+919000000000" className={btnSecondary}>Call our team</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaFooter() {
  const items = [
    { icon: ShieldCheck, t: "IP55 Rated" },
    { icon: Cpu, t: "OCPP 1.6J" },
    { icon: Wifi, t: "GSM / Wi-Fi / BT" },
    { icon: Monitor, t: "7\" Touch Display" },
    { icon: Fingerprint, t: "RFID / QR / App" },
    { icon: Thermometer, t: "-35 to +55°C" },
    { icon: Ruler, t: "Compact Footprint" },
    { icon: Weight, t: "Rugged Build" },
  ];
  return (
    <section className="border-t border-white/10 bg-white/[0.02] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">Every Sonar EV Charger</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Engineered for uptime, safety, and scale</h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {items.map(({ icon: Icon, t }) => (
            <div key={t} className="flex items-center gap-3 rounded-xl border border-white/10 bg-black px-4 py-4">
              <Icon className="h-5 w-5 text-white/80" />
              <span className="text-sm text-white/80">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}