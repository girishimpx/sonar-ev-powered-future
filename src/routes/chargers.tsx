import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Zap, ShieldCheck, Cpu, Smartphone, BarChart3, Wrench,
  CheckCircle2, MapPin, Users, Building2, Bolt, Activity, Layers,
  Handshake, LineChart, HeartHandshake,
} from "lucide-react";
import { Nav, Footer, FloatingCTAs, ContactStrip, btnPrimary, btnSecondary } from "@/components/site";
import lineupImg from "@/assets/charger-lineup.jpg";

export const Route = createFileRoute("/chargers")({
  component: FranchiseModel,
  head: () => ({
    meta: [
      { title: "Franchise Model | SONAR.EV" },
      { name: "description", content: "How the SONAR.EV franchise works: 5-step model, 95/5 revenue share, chargers from 30kW to 240kW, software and AMC included." },
      { property: "og:title", content: "Franchise Model | SONAR.EV" },
      { property: "og:description", content: "SONAR.EV supplies chargers, software, and support. You own the site and earn 95% of net revenue." },
      { property: "og:type", content: "website" },
    ],
  }),
});

const capacities = [
  { power: "30", fit: "Dealerships, hotels, residential clubs", tag: "Compact" },
  { power: "60", fit: "Offices, malls, retail, community sites", tag: "Commercial" },
  { power: "120", fit: "Public stations, fleet depots, hospitals", tag: "High-power" },
  { power: "180", fit: "Highways, transit corridors, EV plazas", tag: "Highway-grade" },
  { power: "240", fit: "Highway hubs, ultra-fast destinations", tag: "Ultra-fast" },
];

const provides = [
  { icon: Zap, t: "Fast DC & AC Chargers", d: "30 kW to 240 kW commercial-grade hardware, OCPP-compliant." },
  { icon: Cpu, t: "Charging Management Software", d: "Live monitoring, pricing, sessions, and payments in one dashboard." },
  { icon: Smartphone, t: "Driver Mobile App", d: "QR charging, RFID, wallet, and network discovery for EV drivers." },
  { icon: Activity, t: "Remote Monitoring", d: "24/7 remote diagnostics and health monitoring across the network." },
  { icon: Wrench, t: "Preventive + Corrective AMC", d: "Scheduled visits, spare parts, and emergency support." },
  { icon: BarChart3, t: "Business Analytics", d: "Revenue, utilization, and performance analytics per station." },
  { icon: HeartHandshake, t: "Installation & Training", d: "Site assessment, commissioning, and staff training." },
  { icon: LineChart, t: "Marketing & Network Listing", d: "Discoverable on the SONAR.EV network and driver app." },
];

const partnerDoes = [
  { icon: MapPin, t: "Suitable Land" },
  { icon: Zap, t: "Electrical Connection" },
  { icon: Bolt, t: "Transformer (if required)" },
  { icon: Building2, t: "Civil Work" },
  { icon: ShieldCheck, t: "Security" },
  { icon: Users, t: "Daily Operations" },
  { icon: Layers, t: "Local Permissions" },
  { icon: Activity, t: "Electricity & Internet" },
];

function FranchiseModel() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Nav />
      <Hero />
      <SplitSection />
      <StepsSection />
      <ProvidesSection />
      <PartnerSection />
      <CapacitiesSection />
      <ContactStrip>Explore the SONAR.EV franchise for your city.</ContactStrip>
      <Footer />
      <FloatingCTAs />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(255,255,255,0.08),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
              <Handshake className="h-3.5 w-3.5" /> The SONAR.EV Franchise
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Build India's EV charging future.<br />
              <span className="text-white/50">We power it. You profit.</span>
            </h1>
            <p className="mt-6 max-w-xl text-white/60">
              SONAR.EV supplies the chargers, software, installation, and support. You own the station and
              earn 95% of net revenue — a partner-first franchise model designed to scale.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className={btnPrimary}>Become a Partner <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/calculator" className={btnSecondary}>Estimate Earnings</Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-white/5 blur-3xl" />
            <img src={lineupImg} alt="SONAR.EV charger lineup" width={1600} height={1200} className="w-full rounded-2xl border border-white/10 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SplitSection() {
  return (
    <section className="border-b border-white/10 py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2 lg:items-center">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <div className="text-xs font-semibold uppercase tracking-widest text-white/50">Net revenue split</div>
          <div className="mt-6 h-4 w-full overflow-hidden rounded-full border border-white/10 bg-white/5">
            <div className="flex h-full">
              <div className="flex h-full items-center justify-end bg-white pr-3 text-[10px] font-semibold text-black" style={{ width: "95%" }}>95%</div>
              <div className="flex h-full items-center justify-center bg-white/25 text-[10px] font-semibold text-white" style={{ width: "5%" }}>5%</div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white p-5 text-black">
              <div className="text-xs font-semibold uppercase tracking-widest text-black/60">Franchise Partner</div>
              <div className="mt-2 text-4xl font-semibold">95%</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-white/50">SONAR.EV</div>
              <div className="mt-2 text-4xl font-semibold">5%</div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">The most partner-first split in India.</h2>
          <p className="mt-4 text-white/60">
            Revenue share is calculated on <span className="text-white">net revenue</span> — after electricity
            charges, payment gateway fees, applicable taxes, and other approved operating expenses. Transparent,
            monthly, auditable.
          </p>
          <Link to="/calculator" className={`${btnSecondary} mt-6`}>Open the earnings calculator <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}

function StepsSection() {
  const steps = [
    { n: "01", t: "You invest", d: "Franchise partner invests in the station and secures a suitable site." },
    { n: "02", t: "We supply", d: "SONAR.EV supplies chargers, software, and driver app." },
    { n: "03", t: "We install", d: "Turnkey installation, commissioning, and network onboarding." },
    { n: "04", t: "Drivers charge", d: "EV drivers charge — payments captured automatically." },
    { n: "05", t: "Revenue shared", d: "95% to partner, 5% to SONAR.EV, monthly." },
  ];
  return (
    <section className="border-b border-white/10 bg-white/[0.02] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">The 5-Step Model</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">From investment to recurring revenue</h2>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-5">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-white/10 bg-black p-6">
              <div className="text-xs font-mono text-white/40">{s.n}</div>
              <div className="mt-3 text-sm font-semibold">{s.t}</div>
              <p className="mt-2 text-xs leading-relaxed text-white/60">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProvidesSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">What SONAR.EV Provides</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">A full-stack charging platform</h2>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {provides.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 bg-white/5">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <div className="mt-4 text-sm font-semibold">{t}</div>
              <p className="mt-2 text-xs leading-relaxed text-white/60">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerSection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">Partner Responsibilities</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">Your role in the partnership</h2>
        </div>
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {partnerDoes.map(({ icon: Icon, t }) => (
            <div key={t} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black p-5">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/15 bg-white/5">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-medium">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CapacitiesSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">Investment Ranges</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">Charger capacities to fit your site</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Final pricing depends on location, electrical infrastructure, civil work, and charger configuration. Share your site and we'll build a proposal.
          </p>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {capacities.map((c) => (
            <div key={c.power} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:-translate-y-1 hover:border-white/30">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">{c.power}</span>
                <span className="text-sm text-white/50">kW</span>
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-white/50">{c.tag}</div>
              <p className="mt-3 text-sm text-white/60">{c.fit}</p>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-white">
                Request proposal <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link to="/contact" className={btnPrimary}>Become a Franchise Partner <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _icons = { CheckCircle2 };