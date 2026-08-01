import { createElement } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight, ChevronRight, Briefcase, MapPinned, FileBarChart2,
  Wrench, ShieldCheck, CheckCircle2, type LucideIcon,
} from "lucide-react";
import { Nav, Footer, FloatingCTAs, EnquiryForm, btnPrimary, btnSecondary } from "@/components/site";

export type SolutionGroup = { title: string; items: string[] };
export type SolutionStep = { n: string; t: string; d: string };
export type SolutionFaq = { q: string; a: string };

export type Solution = {
  slug: string;
  path: string;
  title: string;
  short: string;
  intro: string;
  icon: LucideIcon;
  cta: string;
  groups: SolutionGroup[];
  process?: SolutionStep[];
  deliverables?: string[];
  timeline?: SolutionStep[];
  faqs?: SolutionFaq[];
};

export const SOLUTIONS: Solution[] = [
  {
    slug: "business-consultancy",
    path: "/solutions/business-consultancy",
    title: "EV Business Consultancy",
    short: "EV Business Consultancy",
    intro:
      "We help investors, businesses, hotels, fuel stations, fleet operators and entrepreneurs understand every aspect of starting an EV charging business — before a single rupee is committed.",
    icon: Briefcase,
    cta: "Book Consultation",
    groups: [
      {
        title: "What we advise on",
        items: [
          "Business feasibility", "Market analysis", "ROI calculations",
          "Revenue projections", "Business model selection", "Charger recommendations",
          "Government approvals", "Investment planning", "Risk assessment",
          "Growth strategy", "Franchise guidance", "Commercial planning",
        ],
      },
    ],
    process: [
      { n: "01", t: "Discovery call", d: "We understand your goals, capital, and location profile." },
      { n: "02", t: "Market study", d: "EV density, traffic, competitor and demand mapping for your area." },
      { n: "03", t: "Model selection", d: "COCO, FOCO, FOFO or Capital Circle — matched to your risk appetite." },
      { n: "04", t: "Financial modelling", d: "Illustrative revenue, OPEX, ROI and break-even scenarios." },
      { n: "05", t: "Roadmap", d: "Approvals, timelines, and a phased expansion plan." },
    ],
    deliverables: [
      "Written feasibility summary",
      "Illustrative financial model",
      "Recommended charger configuration",
      "Approvals and compliance checklist",
      "12–36 month growth roadmap",
    ],
    faqs: [
      { q: "Who is this consultancy for?", a: "Property owners, hotels, fuel stations, dealerships, fleet operators and first-time investors evaluating an EV charging business." },
      { q: "Do you guarantee returns?", a: "No. All financials are illustrative estimates. Actual results depend on utilization, electricity tariffs, local demand and operating costs." },
      { q: "Can you help with government approvals?", a: "Yes — we guide you through DISCOM applications, load sanction, and applicable state EV policy incentives." },
      { q: "How long does the engagement take?", a: "A typical consultancy cycle runs one to three weeks depending on site complexity." },
    ],
  },
  {
    slug: "land-survey",
    path: "/solutions/land-survey",
    title: "Land Survey & Site Assessment",
    short: "Land Survey & Site Assessment",
    intro:
      "A complete A-to-Z site assessment before installation — technical and commercial — so your station is engineered right and located right.",
    icon: MapPinned,
    cta: "Request Site Survey",
    groups: [
      {
        title: "Technical assessment",
        items: [
          "Existing electrical connection", "Load availability", "Transformer requirement",
          "Dedicated feeder requirement", "Cable routing", "Earthing",
          "Lightning protection", "Foundation planning", "Civil work",
          "Parking layout", "Vehicle movement", "Internet connectivity",
          "CCTV planning", "Fire safety", "Accessibility", "Future expansion",
        ],
      },
      {
        title: "Commercial assessment",
        items: [
          "Daily traffic analysis", "Competitor mapping", "Revenue potential",
          "Charger capacity recommendation", "Parking optimization", "ROI estimation",
          "Location scoring", "Customer demand analysis",
        ],
      },
    ],
    process: [
      { n: "01", t: "Site visit scheduled", d: "Our engineers plan a visit within days of your request." },
      { n: "02", t: "Electrical audit", d: "Load, feeder, transformer, earthing and cable routing verified on site." },
      { n: "03", t: "Civil & layout survey", d: "Foundation, canopy, parking and vehicle movement mapped." },
      { n: "04", t: "Commercial study", d: "Traffic counts, competitor mapping and demand scoring." },
      { n: "05", t: "Report handover", d: "A scored survey report with capacity recommendation." },
    ],
    deliverables: [
      "Location score with rationale",
      "Recommended charger capacity and gun count",
      "Electrical scope of work",
      "Civil and layout drawings",
      "Illustrative revenue potential",
      "Risk and compliance notes",
    ],
  },
  {
    slug: "project-report",
    path: "/solutions/project-report",
    title: "Project Report & Cost Estimation",
    short: "Project Report & Cost Estimation",
    intro:
      "A comprehensive, bank-ready investment report covering every line item of capital and operating cost — plus illustrative revenue and payback analysis.",
    icon: FileBarChart2,
    cta: "Request Project Report",
    groups: [
      {
        title: "Capital cost breakdown",
        items: [
          "Charger cost", "Electrical connection cost", "Transformer cost",
          "Civil work estimate", "Foundation estimate", "Canopy estimate",
          "Electrical infrastructure", "Cable cost", "Earthing cost",
          "Installation estimate",
        ],
      },
      {
        title: "Operating & financial analysis",
        items: [
          "Software costs", "AMC & maintenance", "Operating expenses (OPEX)",
          "Estimated revenue", "Estimated profit", "ROI analysis",
          "Break-even analysis", "Future expansion recommendations",
        ],
      },
    ],
    timeline: [
      { n: "Day 1–2", t: "Inputs collected", d: "Site data, survey report and tariff details compiled." },
      { n: "Day 3–5", t: "Costing", d: "Vendor-verified CAPEX and OPEX line items prepared." },
      { n: "Day 6–7", t: "Modelling", d: "Revenue, ROI, break-even and sensitivity scenarios." },
      { n: "Day 8", t: "Report delivered", d: "Final PDF report walked through on a call." },
    ],
    deliverables: [
      "Itemised CAPEX schedule",
      "Monthly OPEX schedule",
      "Illustrative revenue and profit projections",
      "ROI and break-even analysis",
      "Phase-2 expansion recommendation",
    ],
  },
  {
    slug: "installation",
    path: "/solutions/installation",
    title: "Installation & Commissioning",
    short: "Installation & Commissioning",
    intro:
      "Turnkey execution — from site preparation to go-live. Our engineers handle civil supervision, electrical works, charger installation, software and testing.",
    icon: Wrench,
    cta: "Schedule Installation",
    groups: [
      {
        title: "Scope of work",
        items: [
          "Site preparation", "Civil work supervision", "Electrical installation",
          "Charger installation", "Software setup", "Network configuration",
          "Payment gateway setup", "Testing & commissioning", "Safety compliance",
          "Staff training", "Go-live support",
        ],
      },
    ],
    process: [
      { n: "01", t: "Mobilisation", d: "Materials, manpower and schedule locked with your site team." },
      { n: "02", t: "Civil & electrical", d: "Foundation, canopy, cabling, earthing and panel works." },
      { n: "03", t: "Charger install", d: "Units mounted, terminated and powered under supervision." },
      { n: "04", t: "Software & payments", d: "OCPP onboarding, tariffs, app listing and gateway setup." },
      { n: "05", t: "Commissioning", d: "Load testing, safety checks, staff training and go-live." },
    ],
    deliverables: [
      "Commissioning test report",
      "Safety and compliance certificates",
      "As-built electrical drawings",
      "Operator training session",
      "Live listing on the SONAR.EV network",
    ],
  },
  {
    slug: "post-installation-inspection",
    path: "/solutions/post-installation-inspection",
    title: "Post Installation Inspection",
    short: "Post Installation Inspection",
    intro:
      "Scheduled audits that keep your station safe, compliant and earning — covering hardware health, electrical safety and software diagnostics.",
    icon: ShieldCheck,
    cta: "Book Inspection",
    groups: [
      {
        title: "Inspection checklist",
        items: [
          "Charger health inspection", "Electrical inspection", "Thermal scanning",
          "Earthing verification", "Cable inspection", "Safety audit",
          "Software diagnostics", "Charging performance testing",
          "Preventive maintenance recommendations", "Compliance verification",
        ],
      },
    ],
    process: [
      { n: "01", t: "Schedule", d: "Inspection booked around your lowest-utilisation window." },
      { n: "02", t: "Hardware audit", d: "Connectors, cables, enclosure, cooling and thermal scan." },
      { n: "03", t: "Electrical audit", d: "Earthing, insulation, protection devices and panel checks." },
      { n: "04", t: "Software diagnostics", d: "Session logs, error codes, firmware and network health." },
      { n: "05", t: "Report & actions", d: "Findings, severity ranking and preventive maintenance plan." },
    ],
    deliverables: [
      "Detailed inspection report",
      "Thermal scan imagery",
      "Severity-ranked findings list",
      "Preventive maintenance schedule",
      "Compliance verification statement",
    ],
  },
];

export function getSolution(slug: string) {
  return SOLUTIONS.find((s) => s.slug === slug)!;
}

export function solutionHead(s: Solution, description: string) {
  const title = `${s.title} | SONAR.EV Solutions`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `https://sonar-ev-powered-future.lovable.app${s.path}` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `https://sonar-ev-powered-future.lovable.app${s.path}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.title,
          description,
          provider: { "@type": "Organization", name: "SONAR.EV" },
          areaServed: "IN",
        }),
      },
    ],
  };
}

export function SolutionPage({ slug }: { slug: string }) {
  const s = getSolution(slug);
  const related = SOLUTIONS.filter((x) => x.slug !== slug);

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Nav />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(255,255,255,0.08),transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-white/50">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span>Solutions</span>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/80">{s.title}</span>
          </nav>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <div className="grid h-12 w-12 place-items-center rounded-xl border border-white/15 bg-white/5">
                {createElement(s.icon, { className: "h-6 w-6 text-white" })}
              </div>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
                {s.title}
              </h1>
              <p className="mt-5 max-w-xl text-white/60">{s.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#enquire" className={btnPrimary}>
                  {s.cta} <ArrowRight className="h-4 w-4" />
                </a>
                <Link to="/calculator" className={btnSecondary}>Estimate Earnings</Link>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="text-xs font-semibold uppercase tracking-widest text-white/50">
                Why partners choose us
              </div>
              <ul className="mt-5 space-y-3 text-sm text-white/70">
                {["Engineer-led, on-ground execution across India",
                  "Transparent, itemised and illustrative costing",
                  "OCPP-compliant hardware and software stack",
                  "Ongoing AMC and 24/7 remote monitoring"].map((x) => (
                  <li key={x} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-white" /> {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {s.groups.map((g) => (
        <section key={g.title} className="border-b border-white/10 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{g.title}</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {g.items.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.06]"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-white" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {s.process && (
        <section className="border-b border-white/10 bg-white/[0.02] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">How it works</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-5">
              {s.process.map((p) => (
                <div key={p.n} className="rounded-2xl border border-white/10 bg-black p-6">
                  <div className="font-mono text-xs text-white/40">{p.n}</div>
                  <div className="mt-3 text-sm font-semibold">{p.t}</div>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {s.timeline && (
        <section className="border-b border-white/10 bg-white/[0.02] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Timeline</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {s.timeline.map((p) => (
                <div key={p.n} className="rounded-2xl border border-white/10 bg-black p-6">
                  <div className="font-mono text-xs text-white/40">{p.n}</div>
                  <div className="mt-3 text-sm font-semibold">{p.t}</div>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {s.deliverables && (
        <section className="border-b border-white/10 py-16 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">What you receive</h2>
              <p className="mt-4 text-sm text-white/60">
                Every engagement ends with documentation you can act on — and share with lenders,
                partners or your board. All financials are illustrative estimates.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {s.deliverables.map((d) => (
                <li key={d} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/80">
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {s.faqs && (
        <section className="border-b border-white/10 bg-white/[0.02] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Frequently asked</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {s.faqs.map((f) => (
                <div key={f.q} className="rounded-2xl border border-white/10 bg-black p-6">
                  <div className="text-sm font-semibold">{f.q}</div>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="enquire" className="border-b border-white/10 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{s.cta}</h2>
            <p className="mt-4 text-white/60">
              Share a few details and a SONAR.EV specialist will get back within 24 hours.
            </p>
            <p className="mt-6 text-xs text-white/40">
              Note: all figures shared are illustrative estimates. Actual results depend on
              utilization, electricity tariffs, local demand and operating costs.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <EnquiryForm />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Related solutions</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                to={r.path}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/30"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 bg-white/5">
                  {createElement(r.icon, { className: "h-5 w-5 text-white" })}
                </div>
                <div className="mt-4 text-sm font-semibold">{r.title}</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-white/60 group-hover:text-white">
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTAs />
    </div>
  );
}