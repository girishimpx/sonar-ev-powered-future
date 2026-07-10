import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, type ReactNode } from "react";
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
  MessageCircle,
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
      <Configurator />
      <FeaturesGrid />
      <ContactStrip>Need a custom power configuration? Talk to our engineering team.</ContactStrip>
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
              <a href="#configurator" className={btnPrimary}>Start Configuring <ArrowRight className="h-4 w-4" /></a>
              <Link to="/contact" className={btnSecondary}>Talk to an expert</Link>
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

/* ------------------------------ Configurator ----------------------------- */

type UseCase = {
  id: string;
  label: string;
  icon: typeof Building2;
  recommend: string; // recommended kW
};

const USE_CASES: UseCase[] = [
  { id: "hotel", label: "Hotel / Resort", icon: Hotel, recommend: "60" },
  { id: "highway", label: "Highway / Fuel", icon: Fuel, recommend: "240" },
  { id: "fleet", label: "Fleet Depot", icon: Truck, recommend: "120" },
  { id: "mall", label: "Mall / Retail", icon: ShoppingBag, recommend: "120" },
  { id: "dealer", label: "Dealership", icon: Car, recommend: "30" },
  { id: "office", label: "Office / Commercial", icon: Building2, recommend: "60" },
  { id: "residential", label: "Residential", icon: Home, recommend: "30" },
];

const POWERS = CHARGERS.map((c) => c.power); // ["30","60","120","180","240"]

function Configurator() {
  const [useCaseId, setUseCaseId] = useState<string>("hotel");
  const [power, setPower] = useState<string>("60");
  const [guns, setGuns] = useState<"dual" | "single">("dual");
  const [deployment, setDeployment] = useState<"outdoor" | "indoor">("outdoor");
  const [connectors, setConnectors] = useState<string[]>(["CCS2"]);

  const charger = useMemo(() => CHARGERS.find((c) => c.power === power)!, [power]);
  const useCase = USE_CASES.find((u) => u.id === useCaseId)!;
  const recommended = useCase.recommend === power;

  const whatsappHref = useMemo(() => {
    const lines = [
      "Hi Sonar EV, I'd like to enquire about a DC fast charger with the following configuration:",
      "",
      `• Use case: ${useCase.label}`,
      `• Power: ${charger.power}kW (${charger.headline})`,
      `• Guns: ${guns === "dual" ? "Dual Gun" : "Single Gun"}`,
      `• Connectors: ${connectors.length ? connectors.join(", ") : "—"}`,
      `• Deployment: ${deployment === "outdoor" ? "Outdoor / IP55" : "Indoor"}`,
      "",
      "Please share pricing, timeline and next steps.",
    ];
    return `https://wa.me/917019721320?text=${encodeURIComponent(lines.join("\n"))}`;
  }, [useCase, charger, guns, connectors, deployment]);

  const applyRecommendation = () => setPower(useCase.recommend);

  const toggleConnector = (c: string) => {
    setConnectors((prev) => (prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]));
  };

  return (
    <section id="configurator" className="scroll-mt-20 border-b border-white/10 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
              <Sparkles className="h-3.5 w-3.5" /> Interactive Configurator
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Build your charger.<br />
              <span className="text-white/50">See specs update in real time.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/60">
            Tell us where you're deploying and how much power you need — we'll assemble the right Sonar EV configuration and route your enquiry to the engineering team.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
          {/* CONTROLS */}
          <div className="space-y-8">
            {/* Step 1 */}
            <StepCard step="01" title="Where will it be deployed?">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {USE_CASES.map(({ id, label, icon: Icon }) => {
                  const active = id === useCaseId;
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setUseCaseId(id)}
                      className={`group flex flex-col items-start gap-2 rounded-xl border p-3 text-left transition-all ${
                        active
                          ? "border-white bg-white text-black"
                          : "border-white/10 bg-white/[0.02] text-white/80 hover:border-white/30 hover:bg-white/[0.06]"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-xs font-medium">{label}</span>
                    </button>
                  );
                })}
              </div>
              {!recommended && (
                <button
                  type="button"
                  onClick={applyRecommendation}
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-white/80 transition-colors hover:border-white/40 hover:bg-white/10"
                >
                  <Sparkles className="h-3 w-3" />
                  We recommend <span className="font-semibold text-white">{useCase.recommend}kW</span> for {useCase.label} — apply
                </button>
              )}
            </StepCard>

            {/* Step 2 */}
            <StepCard step="02" title="Choose power capacity">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-semibold tracking-tight md:text-6xl">{power}</span>
                <span className="text-lg text-white/50">kW</span>
                {recommended && (
                  <span className="ml-3 inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest text-white/80">
                    <Check className="h-3 w-3" /> Recommended
                  </span>
                )}
              </div>
              <input
                type="range"
                min={0}
                max={POWERS.length - 1}
                step={1}
                value={POWERS.indexOf(power)}
                onChange={(e) => setPower(POWERS[Number(e.target.value)])}
                className="mt-5 w-full accent-white"
                aria-label="Charger power capacity"
              />
              <div className="mt-2 flex justify-between text-[10px] uppercase tracking-widest text-white/40">
                {POWERS.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPower(p)}
                    className={`transition-colors ${p === power ? "text-white" : "hover:text-white/70"}`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </StepCard>

            {/* Step 3 */}
            <StepCard step="03" title="Connector setup">
              <div className="mb-4 text-xs uppercase tracking-widest text-white/40">Guns</div>
              <div className="flex gap-2">
                {(["dual", "single"] as const).map((g) => (
                  <Segmented
                    key={g}
                    active={g === guns}
                    onClick={() => setGuns(g)}
                    label={g === "dual" ? "Dual Gun" : "Single Gun"}
                  />
                ))}
              </div>
              <div className="mb-3 mt-6 text-xs uppercase tracking-widest text-white/40">Connector types</div>
              <div className="flex flex-wrap gap-2">
                {["CCS2", "CHAdeMO", "GB/T", "Type 2 AC"].map((c) => {
                  const active = connectors.includes(c);
                  return (
                    <button
                      key={c}
                      type="button"
                      onClick={() => toggleConnector(c)}
                      className={`rounded-full border px-3 py-1.5 text-xs transition-all ${
                        active
                          ? "border-white bg-white text-black"
                          : "border-white/15 bg-white/[0.03] text-white/70 hover:border-white/40 hover:text-white"
                      }`}
                    >
                      {active && <Check className="mr-1 inline h-3 w-3" />}
                      {c}
                    </button>
                  );
                })}
              </div>
            </StepCard>

            {/* Step 4 */}
            <StepCard step="04" title="Deployment environment">
              <div className="flex gap-2">
                {(["outdoor", "indoor"] as const).map((d) => (
                  <Segmented
                    key={d}
                    active={d === deployment}
                    onClick={() => setDeployment(d)}
                    label={d === "outdoor" ? "Outdoor (IP55)" : "Indoor"}
                  />
                ))}
              </div>
            </StepCard>
          </div>

          {/* LIVE PREVIEW */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent">
              <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-white/5 blur-3xl" />

              <div className="grid grid-cols-[0.9fr_1.1fr] gap-6 p-6 md:p-8">
                <div className="relative flex items-center justify-center rounded-2xl border border-white/10 bg-black/50 p-4">
                  <img
                    src={chargerImg}
                    alt={`Sonar EV ${charger.power}kW`}
                    className="h-full max-h-72 w-auto object-contain transition-transform duration-500"
                    style={{ transform: `scale(${0.85 + (POWERS.indexOf(power) * 0.05)})` }}
                    width={1024}
                    height={1408}
                  />
                  <div className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/70 px-2 py-1 text-[10px] font-medium uppercase tracking-widest text-white/80 backdrop-blur">
                    Live
                  </div>
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-widest text-white/40">Your configuration</div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-4xl font-semibold tracking-tight md:text-5xl">{charger.power}</span>
                    <span className="text-white/50">kW</span>
                  </div>
                  <div className="mt-1 text-sm text-white/70">{charger.headline}</div>
                  <p className="mt-3 text-xs text-white/50">{charger.tagline}</p>

                  <dl className="mt-5 space-y-2 text-xs">
                    <SummaryRow label="Use case" value={useCase.label} />
                    <SummaryRow label="Guns" value={guns === "dual" ? "Dual Gun" : "Single Gun"} />
                    <SummaryRow
                      label="Connectors"
                      value={connectors.length ? connectors.join(", ") : "—"}
                    />
                    <SummaryRow label="Deployment" value={deployment === "outdoor" ? "Outdoor / IP55" : "Indoor"} />
                  </dl>
                </div>
              </div>

              <div className="border-t border-white/10 p-6 md:p-8">
                <div className="text-xs font-medium uppercase tracking-widest text-white/40">Full specifications</div>
                <div className="mt-4 max-h-72 overflow-y-auto rounded-xl border border-white/10">
                  <table className="w-full text-sm">
                    <tbody>
                      {charger.specs.map((s, i) => (
                        <tr key={s.label} className={i % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"}>
                          <td className="w-1/2 border-b border-white/5 px-4 py-2.5 text-white/60">{s.label}</td>
                          <td className="border-b border-white/5 px-4 py-2.5 font-medium text-white">{s.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 border-t border-white/10 bg-black/40 p-6 md:p-8">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className={btnPrimary}
                >
                  <MessageCircle className="h-4 w-4" /> Connect <ArrowRight className="h-4 w-4" />
                </a>
                <Link to="/contact" className={btnSecondary}>
                  Enquire via form
                </Link>
                <a href="tel:+917019721320" className={btnSecondary}>Call our team</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, title, children }: { step: string; title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-7">
      <div className="flex items-baseline gap-3">
        <span className="text-xs font-mono text-white/40">{step}</span>
        <h3 className="text-base font-semibold text-white md:text-lg">{title}</h3>
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function Segmented({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-xs font-medium transition-all ${
        active
          ? "border-white bg-white text-black"
          : "border-white/15 bg-white/[0.03] text-white/70 hover:border-white/40 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-white/5 pb-2 last:border-b-0">
      <dt className="text-white/50">{label}</dt>
      <dd className="text-right font-medium text-white">{value}</dd>
    </div>
  );
}

function FeaturesGrid() {
  const items = [
    { icon: ShieldCheck, t: "IP55 Rated" },
    { icon: Cpu, t: "OCPP 1.6J" },
    { icon: Wifi, t: "GSM / Wi-Fi / BT" },
    { icon: Monitor, t: "7\" Touch Display" },
    { icon: Fingerprint, t: "RFID / QR / App" },
    { icon: Thermometer, t: "-35 to +55°C" },
    { icon: Zap, t: "Up to 96% Efficient" },
    { icon: ShieldCheck, t: "IEC & CE Certified" },
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