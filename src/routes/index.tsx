import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Zap,
  Gauge,
  Cpu,
  Wrench,
  ShieldCheck,
  TrendingUp,
  BarChart3,
  Smartphone,
  MapPin,
  Building2,
  Hotel,
  Car,
  Factory,
  ShoppingBag,
  Home as HomeIcon,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  MessageCircle,
  Plug,
  Activity,
  Layers,
} from "lucide-react";
import heroImg from "@/assets/hero-charger.jpg";
import chargerImg from "@/assets/charger-product.jpg";
import dashboardImg from "@/assets/dashboard.jpg";
import plazaImg from "@/assets/plaza.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const chargers = [
  {
    power: "30",
    tag: "Compact DC Fast",
    use: "Retail, hotels, dealerships, small commercial",
    features: ["Dual gun CCS2", "Compact footprint", "Ideal for entry commercial"],
  },
  {
    power: "60",
    tag: "Commercial DC Fast",
    use: "Offices, malls, residential complexes",
    features: ["Dual gun", "Balanced load", "High utilization"],
  },
  {
    power: "120",
    tag: "Public Fast Charging",
    use: "Public stations, fleet depots",
    features: ["Ultra-fast sessions", "Dynamic load", "OCPP 1.6/2.0"],
  },
  {
    power: "180",
    tag: "Highway Fast Charging",
    use: "Highways, transit corridors",
    features: ["High throughput", "Liquid-cooled cable", "Multi-vehicle"],
  },
  {
    power: "240",
    tag: "Ultra-Fast Hub",
    use: "Highway hubs, EV plazas",
    features: ["Ultra-fast charging", "Modular power", "24/7 uptime"],
  },
];

const whyCards = [
  { icon: Layers, title: "Complete Infrastructure Setup", body: "From site survey to grid, civil, hardware and go-live — one accountable partner." },
  { icon: Zap, title: "Fast & Reliable DC Charging", body: "Commercial-grade 30kW to 240kW+ chargers engineered for Indian conditions." },
  { icon: Cpu, title: "Software + App Included", body: "Free charging management platform and driver app with every deployment." },
  { icon: Wrench, title: "Installation + Free AMC", body: "Turnkey installation, remote monitoring, and annual maintenance included." },
  { icon: ShieldCheck, title: "Commercial-Grade Hardware", body: "OCPP-compliant, IP-rated, safety-certified chargers built to scale." },
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

const process = [
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
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <TrustStrip />
      <WhySection />
      <ChargerSection />
      <UseCasesSection />
      <ProcessSection />
      <RoiSection />
      <SoftwareSection />
      <TrustSection />
      <PartnersSection />
      <LeadForm />
      <FaqSection />
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

/* ------------------------------- Components ------------------------------- */

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2 group">
      <span className="relative grid h-8 w-8 place-items-center rounded-md bg-primary/10 ring-1 ring-primary/30">
        <Zap className="h-4 w-4 text-primary" strokeWidth={2.5} />
      </span>
      <span className="text-lg font-semibold tracking-tight">
        Sonar<span className="text-primary">EV</span>
      </span>
    </a>
  );
}

function Nav() {
  const links = [
    ["Solutions", "#solutions"],
    ["Chargers", "#chargers"],
    ["Industries", "#industries"],
    ["Process", "#process"],
    ["Software", "#software"],
    ["FAQ", "#faq"],
  ];
  return (
    <header id="top" className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([l, h]) => (
            <a key={l} href={h} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {l}
            </a>
          ))}
        </nav>
        <a
          href="#enquire"
          className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[0_0_30px_-8px_var(--primary)] transition-transform hover:scale-[1.02]"
        >
          Get Consultation <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,transparent,var(--background)_80%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pt-16 pb-24 md:pt-24 md:pb-32 lg:grid-cols-2 lg:items-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            End-to-end EV charging infrastructure • India
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Build the Future of{" "}
            <span className="bg-gradient-to-r from-primary to-[oklch(0.78_0.22_150)] bg-clip-text text-transparent">
              EV Charging
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Sonar EV is India's end-to-end EV charging infrastructure partner —
            fast DC chargers, software, installation, and lifetime support built
            for serious businesses, properties, and fleets.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#enquire"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-8px_var(--primary)] transition-transform hover:scale-[1.02]"
            >
              Get a Consultation <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#roi"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-secondary/40 px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Start Your EV Charging Business
            </a>
          </div>
        </div>
        <div className="relative animate-fade-in">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-primary/10 blur-3xl" />
          <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-elegant)]">
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
  const items = [
    "Fast Charger Solutions",
    "End-to-End Setup",
    "Free Software & App",
    "Free AMC Support",
    "Built for Commercial Scale",
  ];
  return (
    <section className="border-y border-border/60 bg-[var(--surface-1)]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-5 text-xs text-muted-foreground sm:text-sm">
        {items.map((t) => (
          <div key={t} className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            <span>{t}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="text-xs font-medium uppercase tracking-[0.2em] text-primary">{eyebrow}</div>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
      {sub && <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{sub}</p>}
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
          sub="One accountable partner across hardware, software, installation, and support — designed for businesses that plan to grow."
        />
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyCards.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/40"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 ring-1 ring-primary/25">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChargerSection() {
  return (
    <section id="chargers" className="relative border-y border-border/60 bg-[var(--surface-1)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Product Line"
              title="From 30kW to 240kW — DC fast chargers for every site"
            />
            <p className="mt-6 text-muted-foreground">
              Commercial-grade, OCPP-compliant, and engineered for Indian grid
              conditions. Custom power configurations available on request.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-8 -z-10 rounded-full bg-primary/20 blur-3xl" />
            <img
              src={chargerImg}
              alt="Sonar EV premium DC fast charger product"
              loading="lazy"
              width={1024}
              height={1408}
              className="mx-auto h-auto w-full object-contain"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {chargers.map((c) => (
            <div
              key={c.power}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight text-foreground">{c.power}</span>
                <span className="text-sm text-muted-foreground">kW</span>
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-primary">{c.tag}</div>
              <p className="mt-3 text-sm text-muted-foreground">{c.use}</p>
              <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                {c.features.map((f) => (
                  <li key={f} className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#enquire"
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary transition-transform group-hover:translate-x-0.5"
              >
                Enquire Now <ArrowRight className="h-3.5 w-3.5" />
              </a>
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
            <div
              key={title}
              className="group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-5 transition-colors hover:border-primary/40 hover:bg-secondary/40"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/25">
                <Icon className="h-5 w-5" />
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
    <section id="process" className="relative border-y border-border/60 bg-[var(--surface-1)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="How It Works"
          title="From site to station — a simple, premium journey"
        />
        <div className="mt-16 grid gap-4 md:grid-cols-5">
          {process.map((p, i) => (
            <div
              key={p.n}
              className="relative rounded-2xl border border-border bg-card p-6"
            >
              <div className="text-xs font-mono text-primary">{p.n}</div>
              <div className="mt-3 text-sm font-semibold">{p.title}</div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.body}</p>
              {i < process.length - 1 && (
                <div className="absolute right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-gradient-to-r from-primary/60 to-transparent md:block" />
              )}
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
    { n: "99.5%", u: "", t: "Target charger uptime" },
    { n: "24/7", u: "", t: "Remote monitoring & support" },
  ];
  return (
    <section id="roi" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-primary/10 blur-2xl" />
          <img
            src={plazaImg}
            alt="Premium EV charging plaza deployed by Sonar EV"
            loading="lazy"
            width={1600}
            height={912}
            className="w-full rounded-2xl border border-border object-cover shadow-[var(--shadow-elegant)]"
          />
        </div>
        <div className="order-1 lg:order-2">
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Business Opportunity</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Turn idle parking into recurring revenue
          </h2>
          <p className="mt-5 text-muted-foreground">
            EV adoption in India is scaling fast. Property owners, fuel retailers,
            and fleet operators who deploy charging infrastructure today capture
            location, brand, and revenue advantage. Sonar EV makes it the easiest
            move you'll make this year.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.t} className="rounded-xl border border-border bg-card p-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-semibold">{s.n}</span>
                  {s.u && <span className="text-xs text-muted-foreground">{s.u}</span>}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{s.t}</div>
              </div>
            ))}
          </div>
          <a
            href="#enquire"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_-10px_var(--primary)] transition-transform hover:scale-[1.02]"
          >
            Request a Proposal <ArrowRight className="h-4 w-4" />
          </a>
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
    <section id="software" className="relative overflow-hidden border-y border-border/60 bg-[var(--surface-1)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Software"
          title="Not just hardware. A complete platform."
          sub="Every Sonar EV deployment includes our management dashboard and mobile app — free, forever."
        />
        <div className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-primary/10 blur-3xl" />
            <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-elegant)]">
              <img
                src={dashboardImg}
                alt="Sonar EV charging management dashboard"
                loading="lazy"
                width={1600}
                height={1000}
                className="w-full"
              />
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {feats.map(({ icon: Icon, t }) => (
              <div key={t} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/25">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold">{t}</div>
                  <div className="mt-0.5 text-xs text-muted-foreground">
                    Enterprise-grade tooling included with every station.
                  </div>
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
    { icon: ShieldCheck, t: "Certified & compliant", d: "OCPP, IEC and Indian safety standards." },
    { icon: Wrench, t: "Engineering depth", d: "In-house deployment and service network." },
    { icon: Activity, t: "Uptime SLA", d: "Targeted 99.5%+ uptime across the fleet." },
    { icon: Cpu, t: "Modern architecture", d: "Cloud-native, secure, remotely upgradable." },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Trust & Quality" title="Built to power infrastructure for decades" />
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-6">
              <Icon className="h-6 w-6 text-primary" />
              <div className="mt-4 text-base font-semibold">{t}</div>
              <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
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
    <section className="border-y border-border/60 bg-[var(--surface-1)] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by forward-thinking operators
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6 opacity-70 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((l) => (
            <div key={l} className="text-center text-sm font-semibold tracking-tight text-muted-foreground">
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sent");
  };
  return (
    <section id="enquire" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-br from-card to-[var(--surface-1)] p-8 sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Talk to Sonar EV</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Ready to build your EV charging business?
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                Share a few details and our team will get back within 24 hours
                with a site plan and proposal.
              </p>
              <ul className="mt-8 space-y-3 text-sm">
                {["Free site consultation", "Custom hardware + ROI proposal", "Software, app & AMC included"].map(
                  (t) => (
                    <li key={t} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary" /> {t}
                    </li>
                  ),
                )}
              </ul>
            </div>

            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-background/40 p-10 text-center">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-primary/15 ring-1 ring-primary/40">
                  <CheckCircle2 className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">Thanks — request received</h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  A Sonar EV specialist will reach out within 24 hours with a
                  tailored proposal.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" name="name" placeholder="Your name" required />
                <Field label="Phone" name="phone" type="tel" placeholder="+91" required />
                <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
                <Field label="City" name="city" placeholder="City" required />
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    Business / Property type
                  </label>
                  <select
                    required
                    name="business"
                    className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60"
                  >
                    <option>Hotel / Resort</option>
                    <option>Highway / Fuel Station</option>
                    <option>Apartment / Residential</option>
                    <option>Office / Commercial</option>
                    <option>Mall / Retail</option>
                    <option>Fleet Operator</option>
                    <option>Dealership</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    Project requirement
                  </label>
                  <textarea
                    name="req"
                    rows={3}
                    placeholder="Tell us about your site, expected usage, or goals..."
                    className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60"
                  />
                </div>
                <button
                  type="submit"
                  className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-10px_var(--primary)] transition-transform hover:scale-[1.01]"
                >
                  Get My Consultation <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-medium text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60"
      />
    </div>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="border-t border-border/60 bg-[var(--surface-1)] py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader eyebrow="FAQ" title="Answers to common questions" />
        <div className="mt-14 divide-y divide-border rounded-2xl border border-border bg-card">
          {faqs.map((f) => (
            <details key={f.q} className="group px-6 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium">
                {f.q}
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Sonar EV builds end-to-end EV charging infrastructure for India's
              businesses, properties, and fleets.
            </p>
            <a
              href="#enquire"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/15"
            >
              Enquire now <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <div>
            <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Explore</div>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["Solutions", "#solutions"],
                ["Chargers", "#chargers"],
                ["Industries", "#industries"],
                ["Software", "#software"],
                ["FAQ", "#faq"],
              ].map(([l, h]) => (
                <li key={l}>
                  <a href={h} className="text-muted-foreground hover:text-foreground">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Contact</div>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" /> hello@sonarev.in
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" /> +91 90000 00000
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp support
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Sonar EV. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/919000000000"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-8px_var(--primary)] transition-transform hover:scale-105"
    >
      <MessageCircle className="h-4 w-4" />
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
}
