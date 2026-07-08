import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Zap, Gauge, Cpu, Wrench, ShieldCheck, TrendingUp,
  BarChart3, Smartphone, MapPin, Building2, Hotel, Car,
  Factory, ShoppingBag, Home as HomeIcon, ArrowRight,
  CheckCircle2, Plug, Activity, Layers,
} from "lucide-react";
import heroImg from "@/assets/hero-charger.jpg";
import chargerImg from "@/assets/charger-product.jpg";
import dashboardImg from "@/assets/dashboard.jpg";
import plazaImg from "@/assets/plaza.jpg";
import {
  Nav, Footer, FloatingCTAs, ContactStrip, EnquiryForm,
  btnPrimary, btnSecondary,
} from "@/components/site";

export const Route = createFileRoute("/")({ component: Index });

const chargers = [
  { power: "30", tag: "Compact DC Fast", use: "Retail, hotels, dealerships", features: ["Dual gun CCS2", "Compact footprint", "Entry commercial"] },
  { power: "60", tag: "Commercial DC Fast", use: "Offices, malls, residential", features: ["200A output", "Dual gun", "IP55 rated"] },
  { power: "120", tag: "Public Fast Charging", use: "Public stations, fleet depots", features: ["300A output", "OCPP 1.6J", "Dual 60kW split"] },
  { power: "180", tag: "Highway Fast Charging", use: "Highways, transit corridors", features: ["High throughput", "Liquid-cooled cable", "Multi-vehicle"] },
  { power: "240", tag: "Ultra-Fast Hub", use: "Highway hubs, EV plazas", features: ["Ultra-fast", "Modular power", "24/7 uptime"] },
];

const whyCards = [
  { icon: Layers, title: "Complete Infrastructure Setup", body: "From site survey to grid, civil, hardware and go-live — one accountable partner." },
  { icon: Zap, title: "Fast & Reliable DC Charging", body: "Commercial-grade 30kW to 240kW+ chargers engineered for Indian conditions." },
  { icon: Cpu, title: "Software + App Included", body: "Free charging management platform and driver app with every deployment." },
  { icon: Wrench, title: "Installation + Free AMC", body: "Turnkey installation, remote monitoring, and annual maintenance included." },
  { icon: ShieldCheck, title: "Commercial-Grade Hardware", body: "OCPP-compliant, IP55-rated, safety-certified chargers built to scale." },
  { icon: TrendingUp, title: "Scalable Business Model", body: "Start with one charger, expand to a network — infrastructure that grows with you." },
];

const useCases = [
  { icon: MapPin, title: "Highways & Fuel Stations" },
  { icon: Hotel, title: "Hotels & Resorts" },
  { icon: Building2, title: "Apartments & Communities" },
  { icon: Factory, title: "Offices & Tech Parks" },
  { icon: Car, title: "Fleet Depots" },
  { icon: ShoppingBag, title: "Malls & Retail" },
  { icon: HomeIcon, title: "Real Estate Projects" },
  { icon: Plug, title: "Auto Dealerships" },
];

const processSteps = [
  { n: "01", title: "Consultation & Site Assessment", body: "Load study, footfall, ROI model and site plan." },
  { n: "02", title: "Charger Recommendation & Proposal", body: "Right-sized hardware mix with commercial terms." },
  { n: "03", title: "Installation & Deployment", body: "Civil, electrical, grid coordination and commissioning." },
  { n: "04", title: "Software Onboarding", body: "Dashboard, app, pricing, payments and go-live." },
  { n: "05", title: "Support, AMC & Scale-up", body: "24/7 monitoring, uptime SLA, and expansion planning." },
];

const faqs = [
  { q: "How much does an EV charging station cost to set up?", a: "It depends on charger capacity, site conditions and grid readiness. A 60kW station typically starts from a few lakhs including installation. We share a detailed proposal after a site assessment." },
  { q: "What is the ROI on an EV charger?", a: "Most commercial DC fast chargers achieve payback in 18–36 months depending on utilization, tariff, and location. We share ROI projections for your specific site." },
  { q: "Do you provide software and app?", a: "Yes — a charging management dashboard, driver mobile app, and payment integration are included free with every Sonar EV deployment." },
  { q: "Is AMC and support included?", a: "Free AMC, remote monitoring, and priority support are included. Our engineers respond to critical alerts round the clock." },
  { q: "Can I white-label the app and station?", a: "Yes. We offer custom branding and white-label options for operators building their own EV charging brand." },
];

function Index() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Nav />
      <Hero />
      <TrustStrip />
      <WhySection />
      <ContactStrip />
      <ChargerSection />
      <UseCasesSection />
      <ProcessSection />
      <RoiSection />
      <SoftwareSection />
      <TrustSection />
      <PartnersSection />
      <ContactStrip>Ready to power your property? Talk to Sonar EV today.</ContactStrip>
      <LeadSection />
      <FaqSection />
      <Footer />
      <FloatingCTAs />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(255,255,255,0.08),transparent_70%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pt-16 pb-24 md:pt-24 md:pb-32 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
            End-to-end EV charging infrastructure • India
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Build the Future of{" "}
            <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
              EV Charging
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
            Sonar EV is India's end-to-end EV charging infrastructure partner —
            fast DC chargers, software, installation, and lifetime support built
            for serious businesses, properties, and fleets.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className={btnPrimary}>
              Get a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/chargers" className={btnSecondary}>
              Explore Chargers
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-white/5 blur-3xl" />
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)]">
            <img
              src={heroImg}
              alt="Premium Sonar EV DC fast charger charging a modern electric SUV"
              width={1920}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = ["Fast Charger Solutions", "End-to-End Setup", "Free Software & App", "Free AMC Support", "Built for Commercial Scale"];
  return (
    <section className="border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-5 text-xs text-white/60 sm:text-sm">
        {items.map((t) => (
          <div key={t} className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-white/80" /> <span>{t}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">{eyebrow}</div>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
      {sub && <p className="mx-auto mt-4 max-w-2xl text-white/60">{sub}</p>}
    </div>
  );
}

function WhySection() {
  return (
    <section id="solutions" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Why Sonar EV"
          title="Infrastructure-grade EV charging, built for scale"
          sub="One accountable partner across hardware, software, installation, and support."
        />
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyCards.map(({ icon: Icon, title, body }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-white/25">
              <div className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 bg-white/5">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChargerSection() {
  return (
    <section id="chargers" className="relative border-y border-white/10 bg-white/[0.02] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <SectionHeader eyebrow="Product Line" title="From 30kW to 240kW — DC fast chargers for every site" />
            <p className="mt-6 text-white/60">
              Commercial-grade, OCPP-compliant, engineered for Indian grid conditions. Custom power configurations available on request.
            </p>
            <Link to="/chargers" className={`${btnSecondary} mt-6`}>
              View full specifications <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-8 -z-10 rounded-full bg-white/5 blur-3xl" />
            <img src={chargerImg} alt="Sonar EV DC fast charger" loading="lazy" width={1024} height={1408} className="mx-auto h-auto w-full object-contain" />
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {chargers.map((c) => (
            <div key={c.power} className="group flex flex-col rounded-2xl border border-white/10 bg-black p-6 transition-all hover:-translate-y-1 hover:border-white/30">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">{c.power}</span>
                <span className="text-sm text-white/50">kW</span>
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-white/50">{c.tag}</div>
              <p className="mt-3 text-sm text-white/60">{c.use}</p>
              <ul className="mt-4 space-y-1.5 text-xs text-white/60">
                {c.features.map((f) => (
                  <li key={f} className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-white/80" /> {f}
                  </li>
                ))}
              </ul>
              <Link to="/chargers" hash={c.power} className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-white transition-transform group-hover:translate-x-0.5">
                View details <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  return (
    <section id="industries" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Industries Served"
          title="Where Sonar EV chargers get deployed"
          sub="If your property has parking, footfall, or fleet movement — it's a charging opportunity."
        />
        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {useCases.map(({ icon: Icon, title }) => (
            <div key={title} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-5 transition-colors hover:border-white/25 hover:bg-white/[0.06]">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/15 bg-white/5">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-medium">{title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="relative border-y border-white/10 bg-white/[0.02] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="How It Works" title="From site to station — a simple, premium journey" />
        <div className="mt-16 grid gap-4 md:grid-cols-5">
          {processSteps.map((p) => (
            <div key={p.n} className="rounded-2xl border border-white/10 bg-black p-6">
              <div className="text-xs font-mono text-white/40">{p.n}</div>
              <div className="mt-3 text-sm font-semibold">{p.title}</div>
              <p className="mt-2 text-xs leading-relaxed text-white/60">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RoiSection() {
  const stats = [
    { n: "18–36", u: "months", t: "Typical payback window" },
    { n: "99.9%", u: "", t: "Target charger uptime" },
    { n: "24/7", u: "", t: "Remote monitoring & support" },
  ];
  return (
    <section id="roi" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-white/5 blur-2xl" />
          <img src={plazaImg} alt="Premium EV charging plaza" loading="lazy" width={1600} height={912} className="w-full rounded-2xl border border-white/10 object-cover" />
        </div>
        <div className="order-1 lg:order-2">
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">Business Opportunity</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">Turn idle parking into recurring revenue</h2>
          <p className="mt-5 text-white/60">
            EV adoption in India is scaling fast. Property owners, fuel retailers, and fleet operators who deploy charging infrastructure today capture location, brand, and revenue advantage.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.t} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-semibold">{s.n}</span>
                  {s.u && <span className="text-xs text-white/50">{s.u}</span>}
                </div>
                <div className="mt-1 text-xs text-white/50">{s.t}</div>
              </div>
            ))}
          </div>
          <Link to="/contact" className={`${btnPrimary} mt-8`}>
            Request a Proposal <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function SoftwareSection() {
  const feats = [
    { icon: BarChart3, t: "Revenue & usage analytics" },
    { icon: Activity, t: "Charger health & uptime" },
    { icon: Gauge, t: "Live session tracking" },
    { icon: Smartphone, t: "Free driver mobile app" },
  ];
  return (
    <section id="software" className="border-y border-white/10 bg-white/[0.02] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Software" title="Not just hardware. A complete platform." sub="Every Sonar EV deployment includes our management dashboard and mobile app — free, forever." />
        <div className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-white/5 blur-3xl" />
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <img src={dashboardImg} alt="Sonar EV charging management dashboard" loading="lazy" width={1600} height={1000} className="w-full" />
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {feats.map(({ icon: Icon, t }) => (
              <div key={t} className="flex items-start gap-3 rounded-xl border border-white/10 bg-black p-4">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/15 bg-white/5">
                  <Icon className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold">{t}</div>
                  <div className="mt-0.5 text-xs text-white/50">Enterprise-grade tooling included with every station.</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  const items = [
    { icon: ShieldCheck, t: "Certified & compliant", d: "OCPP 1.6J, IEC 61851-1/-23, IEC 62196, CE." },
    { icon: Wrench, t: "Engineering depth", d: "In-house deployment and service network." },
    { icon: Activity, t: "Uptime SLA", d: "Targeted 99.9%+ uptime across the fleet." },
    { icon: Cpu, t: "Modern architecture", d: "Cloud-native, secure, remotely upgradable." },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Trust & Quality" title="Built to power infrastructure for decades" />
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <Icon className="h-6 w-6 text-white" />
              <div className="mt-4 text-base font-semibold">{t}</div>
              <p className="mt-1.5 text-sm text-white/60">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  const logos = ["Signature Hotels", "Metro Fleet", "Urban Malls", "Highway 6", "GreenPark", "EcoStay"];
  return (
    <section className="border-y border-white/10 bg-white/[0.02] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center text-xs font-medium uppercase tracking-[0.2em] text-white/40">
          Trusted by forward-thinking operators
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6 opacity-60 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((l) => (
            <div key={l} className="text-center text-sm font-semibold tracking-tight text-white/70">{l}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadSection() {
  return (
    <section id="enquire" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-8 sm:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">Talk to Sonar EV</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Ready to build your EV charging business?
              </h2>
              <p className="mt-4 max-w-md text-white/60">
                Share a few details and our team will get back within 24 hours with a site plan and proposal.
              </p>
              <ul className="mt-8 space-y-3 text-sm">
                {["Free site consultation", "Custom hardware + ROI proposal", "Software, app & AMC included"].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-white/70">
                    <CheckCircle2 className="h-4 w-4 text-white" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="border-t border-white/10 bg-white/[0.02] py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader eyebrow="FAQ" title="Answers to common questions" />
        <div className="mt-14 divide-y divide-white/10 rounded-2xl border border-white/10 bg-black">
          {faqs.map((f) => (
            <details key={f.q} className="group px-6 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium">
                {f.q}
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-white/15 text-white/60 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}