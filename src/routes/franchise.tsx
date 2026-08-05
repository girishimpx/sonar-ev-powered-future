import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Zap, ShieldCheck, Users, Layers, Activity, Building2, Bolt, MapPin, CheckCircle2 } from "lucide-react";
import plazaImg from "@/assets/plaza.jpg";
import { Nav, Footer, FloatingCTAs, ContactStrip, EnquiryForm, btnPrimary, btnSecondary } from "@/components/site";

export const Route = createFileRoute("/franchise")({
  component: FranchisePage,
  head: () => ({
    links: [{ rel: "canonical", href: "https://sonar-ev-powered-future.lovable.app/franchise" }],
    meta: [
      { property: "og:url", content: "https://sonar-ev-powered-future.lovable.app/franchise" },
      { title: "EV Charging Franchise in India — SONAR.EV Partner Program" },
      { name: "description", content: "Full details of the SONAR.EV franchise: 95% revenue share, hardware, software, installation, AMC, contract terms and partner responsibilities." },
      { property: "og:title", content: "EV Charging Franchise in India — SONAR.EV Partner Program" },
      { property: "og:description", content: "95% revenue share, enterprise chargers, software and AMC included. Everything you need to run a profitable charging station." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const steps = [
  { n: "01", title: "You invest", body: "You invest in the charging station and secure a suitable site." },
  { n: "02", title: "We supply", body: "SONAR.EV supplies chargers, software, and driver app." },
  { n: "03", title: "We install", body: "We install, commission, and connect the station to our network." },
  { n: "04", title: "EVs charge", body: "Customers charge their EVs — payments captured automatically." },
  { n: "05", title: "You earn", body: "Revenue is shared transparently, monthly." },
];

const provides = [
  "Fast DC Chargers", "AC Chargers", "Charging Management Software", "Mobile App",
  "Remote Monitoring", "Payment Collection", "QR Charging", "Fleet Integration",
  "Installation Support", "Preventive Maintenance", "Corrective Maintenance", "Spare Parts Support",
  "Warranty Management", "Firmware Updates", "Technical Helpdesk", "Marketing Support",
  "Business Analytics Dashboard", "Site Assessment", "Staff Training", "Network Listing",
];

const responsibilities = [
  { icon: MapPin, t: "Suitable Land" },
  { icon: Zap, t: "Electrical Connection" },
  { icon: Bolt, t: "Transformer (if required)" },
  { icon: Building2, t: "Civil Work" },
  { icon: ShieldCheck, t: "Site Security" },
  { icon: Users, t: "Daily Site Operations" },
  { icon: Layers, t: "Local Permissions" },
  { icon: Activity, t: "Internet & Utilities" },
];

const faqs = [
  { q: "Who owns the charger?", a: "The franchise partner owns the charger and the station assets. SONAR.EV owns the software platform, brand, and network integration." },
  { q: "Who pays the electricity bills?", a: "The franchise partner is responsible for electricity, internet, and day-to-day utilities. These are treated as approved operating expenses in the revenue-share calculation." },
  { q: "How is revenue calculated?", a: "Revenue share is calculated on net revenue — after electricity, payment-gateway fees, applicable taxes, and other approved operating expenses. Partners receive 95%, SONAR.EV retains 5%." },
  { q: "Can I own multiple stations?", a: "Yes. Partners in good standing can expand to additional sites with priority rights on new territories." },
  { q: "Who maintains the charger?", a: "SONAR.EV provides preventive maintenance, remote monitoring, spare parts, and emergency support under the AMC." },
  { q: "How long is the franchise agreement?", a: "The standard franchise agreement is 5 years, renewable, subject to performance and brand-guideline compliance." },
  { q: "What happens if the charger fails?", a: "Our 24/7 technical helpdesk and field engineers respond under a defined SLA, with remote diagnostics and spare-parts support." },
  { q: "Can I exit the agreement?", a: "The agreement includes clear termination clauses and exit procedures. A specialist will walk you through the terms during consultation." },
];

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">{eyebrow}</div>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
      {sub && <p className="mx-auto mt-4 max-w-2xl text-white/60">{sub}</p>}
    </div>
  );
}

function FranchisePage() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Nav />
      <FranchiseHero />
      <ModelSection />
      <RevenueSplitSection />
      <ProvidesSection />
      <ResponsibilitiesSection />
      <AmcSection />
      <ContractSection />
      <ContactStrip>Ready to power a station? Talk to a SONAR.EV franchise specialist.</ContactStrip>
      <LeadSection />
      <FaqSection />
      <Footer />
      <FloatingCTAs />
    </div>
  );
}

function FranchiseHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(255,255,255,0.08),transparent_70%)]" />
      <div className="relative mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
        <nav className="mb-6 text-xs text-white/40">
          <Link to="/" className="hover:text-white">Home</Link> <span className="mx-1">/</span> Franchise
        </nav>
        <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          The SONAR.EV franchise, <span className="text-white/40">in full detail.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-white/60">
          Everything a partner needs to know: how the model works, what we provide, what you bring,
          the revenue split, maintenance, and the contract terms.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/contact" className={btnPrimary}>Become a Partner <ArrowRight className="h-4 w-4" /></Link>
          <Link to="/calculator" className={btnSecondary}>Estimate your earnings</Link>
        </div>
      </div>
    </section>
  );
}

function ModelSection() {
  return (
    <section id="model" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Business Model"
          title="How the SONAR.EV franchise works"
          sub="Five steps from investment to recurring revenue — with SONAR.EV accountable for the tech and operations spine."
        />
        <div className="mt-16 grid gap-4 md:grid-cols-5">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-xs font-mono text-white/40">{s.n}</div>
              <div className="mt-3 text-sm font-semibold">{s.title}</div>
              <p className="mt-2 text-xs leading-relaxed text-white/60">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RevenueSplitSection() {
  return (
    <section id="revenue" className="border-y border-white/10 bg-white/[0.02] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Revenue Sharing" title="Transparent revenue sharing" />
        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="rounded-3xl border border-white/10 bg-black p-8">
            <div className="text-xs font-medium uppercase tracking-widest text-white/50">Net revenue split</div>
            <div className="mt-6 h-4 w-full overflow-hidden rounded-full border border-white/10 bg-white/5">
              <div className="flex h-full">
                <div className="flex h-full items-center justify-end bg-white pr-3 text-[10px] font-semibold text-black" style={{ width: "95%" }}>95%</div>
                <div className="flex h-full items-center justify-center bg-white/25 text-[10px] font-semibold text-white" style={{ width: "5%" }}>5%</div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white p-5 text-black">
                <div className="text-xs font-semibold uppercase tracking-widest text-black/60">Franchise Partner</div>
                <div className="mt-3 text-4xl font-semibold">95%</div>
                <div className="mt-1 text-xs text-black/60">of net revenue</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="text-xs font-semibold uppercase tracking-widest text-white/50">SONAR.EV</div>
                <div className="mt-3 text-4xl font-semibold">5%</div>
                <div className="mt-1 text-xs text-white/50">of net revenue</div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">Net revenue means net — nothing hidden.</h3>
            <p className="mt-4 text-white/60">
              The revenue share is calculated <span className="text-white">after</span> electricity charges,
              payment gateway fees, applicable taxes, and other approved operating expenses — ensuring a
              transparent and sustainable partnership for both sides.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              {["Automated monthly reconciliation", "Live revenue dashboard, per station", "Payments directly to your bank account", "Full audit trail on every session"].map((t) => (
                <li key={t} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white" /> {t}</li>
              ))}
            </ul>
            <Link to="/calculator" className={`${btnSecondary} mt-8`}>Model your earnings <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProvidesSection() {
  return (
    <section id="provides" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="What SONAR.EV Provides"
          title="Everything except the land and the local ops"
          sub="One accountable partner across hardware, software, installation, support, and marketing."
        />
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {provides.map((t) => (
            <div key={t} className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-white" />
              <span className="text-sm text-white/85">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResponsibilitiesSection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Franchise Partner Responsibilities"
          title="What you bring to the table"
          sub="Your role is site, ownership, and local presence. Everything else is on us."
        />
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {responsibilities.map(({ icon: Icon, t }) => (
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

function AmcSection() {
  const items = [
    "Scheduled Preventive Maintenance", "Emergency Breakdown Support", "Software Updates & Firmware",
    "Remote Diagnostics", "Performance Monitoring", "Technical Hotline", "Spare Parts Supply",
    "Charger Availability Monitoring", "Fault Resolution SLAs", "Annual Maintenance Contracts",
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-white/5 blur-2xl" />
          <img src={plazaImg} alt="SONAR.EV field service" loading="lazy" width={1600} height={912} className="w-full rounded-2xl border border-white/10 object-cover" />
        </div>
        <div>
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">Operations & Maintenance</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">Complete AMC & technical support</h2>
          <p className="mt-4 text-white/60">
            SONAR.EV keeps the tech running so you can focus on running the site. Our engineering
            network delivers proactive maintenance, remote diagnostics, and rapid on-ground response.
          </p>
          <ul className="mt-8 grid gap-2 sm:grid-cols-2">
            {items.map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm text-white/75"><CheckCircle2 className="h-4 w-4 text-white" /> {t}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ContractSection() {
  const cards = [
    { title: "Franchise Agreement", items: ["Duration: 5 years, renewable", "Revenue share: 95% partner / 5% SONAR.EV", "Termination clauses", "Performance requirements", "Brand guidelines", "Expansion rights"] },
    { title: "Warranty", items: ["Standard hardware warranty", "Extended warranty options", "Replacement policy", "Defined support response times"] },
    { title: "AMC", items: ["Scheduled preventive visits", "Emergency support", "Remote monitoring", "Software & firmware maintenance", "Spare-parts coverage"] },
    { title: "Service Level Agreement", items: ["99.9% uptime target", "Issue priority levels", "Defined response times", "Escalation matrix", "Multi-channel support"] },
  ];
  return (
    <section id="contract" className="border-y border-white/10 bg-white/[0.02] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Contract Overview" title="Clear, professional, partner-first agreements" />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <details key={c.title} className="group rounded-2xl border border-white/10 bg-black p-6 open:border-white/25">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
                <span className="text-base font-semibold">{c.title}</span>
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-white/15 text-white/60 transition-transform group-open:rotate-45">+</span>
              </summary>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {c.items.map((it) => (
                  <li key={it} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-white/80" /> {it}</li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadSection() {
  return (
    <section id="apply" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-8 sm:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">Become a Franchise Partner</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">Apply for a SONAR.EV franchise.</h2>
              <p className="mt-4 max-w-md text-white/60">
                Share a few details and a franchise specialist will reach out within 24 hours with a
                tailored proposal for your city and site.
              </p>
              <ul className="mt-8 space-y-3 text-sm">
                {["Free site & feasibility consultation", "ROI model tailored to your site", "Hardware + software + AMC included", "5-year renewable agreement"].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-white/70"><CheckCircle2 className="h-4 w-4 text-white" /> {t}</li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-xs text-white/50">
                Note: Financial examples anywhere on this site are illustrative estimates based on your
                inputs. Actual results depend on utilization, tariffs, local demand, and operating costs.
              </div>
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
        <SectionHeader eyebrow="FAQ" title="Franchise questions, answered" />
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
