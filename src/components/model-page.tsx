import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, CheckCircle2, Building2, Handshake, Store, PieChart, type LucideIcon } from "lucide-react";
import { Nav, Footer, FloatingCTAs, EnquiryForm, btnPrimary, btnSecondary } from "@/components/site";
import cocoImg from "@/assets/model-coco.jpg";
import focoImg from "@/assets/model-foco.jpg";
import fofoImg from "@/assets/model-fofo.jpg";
import capitalImg from "@/assets/model-capital-circle.jpg";

export type ModelPath =
  | "/models/coco"
  | "/models/foco"
  | "/models/fofo"
  | "/models/capital-circle";

export type BusinessModel = {
  slug: string;
  path: ModelPath;
  code: string;
  name: string;
  tagline: string;
  intro: string;
  image: string;
  icon: LucideIcon;
  bestFor: string[];
  you: string[];
  we: string[];
  steps: { n: string; t: string; d: string }[];
  earn: { label: string; value: string; note: string }[];
  pros: string[];
  considerations: string[];
};

export const MODELS: BusinessModel[] = [
  {
    slug: "coco",
    path: "/models/coco",
    code: "COCO",
    name: "Company Owned, Company Operated",
    tagline: "We invest. We operate. You earn rent on your land.",
    intro:
      "In the COCO model, SONAR.EV puts in the capital, installs the chargers, and runs the station end to end. If you own a well-located property, you simply lease the space and earn a fixed monthly rental - with zero investment and zero operational work.",
    image: cocoImg,
    icon: Building2,
    bestFor: ["Landowners on highways or main roads", "Malls, hotels and fuel stations", "Owners who want income with no risk", "Strategic, high-traffic locations"],
    you: ["Provide suitable land or parking space", "Allow electrical connection access", "Sign a long-term lease agreement"],
    we: ["100% of the capital investment", "Chargers, software and installation", "Full day-to-day operations and staffing", "Maintenance, AMC and marketing"],
    steps: [
      { n: "01", t: "Share your site", d: "Send location, area and power availability details." },
      { n: "02", t: "Site survey", d: "Our team scores the location for traffic and feasibility." },
      { n: "03", t: "Lease agreement", d: "Fixed monthly rental agreed and documented." },
      { n: "04", t: "We build it", d: "SONAR.EV installs and commissions the station." },
      { n: "05", t: "You earn rent", d: "Monthly rental credited - we handle everything else." },
    ],
    earn: [
      { label: "Your investment", value: "Zero", note: "SONAR.EV funds the station" },
      { label: "Your income", value: "Fixed rent", note: "Monthly lease payment" },
      { label: "Your effort", value: "None", note: "We operate the site" },
    ],
    pros: ["No capital required", "Completely passive income", "Zero operational responsibility", "Property value uplift"],
    considerations: ["Income is fixed rent, not revenue share", "Location must qualify on traffic and power", "Long-term lease commitment required"],
  },
  {
    slug: "foco",
    path: "/models/foco",
    code: "FOCO",
    name: "Franchise Owned, Company Operated",
    tagline: "You invest. We operate. You earn without running it.",
    intro:
      "In FOCO, you fund the station and own the asset, while SONAR.EV manages operations, staffing, monitoring and maintenance. It is the middle path - ownership economics with professional, hands-off management.",
    image: focoImg,
    icon: Handshake,
    bestFor: ["Investors who want ownership without daily work", "Busy professionals and NRIs", "Businesses adding a new revenue line", "First-time EV entrants"],
    you: ["Invest in the station and hardware", "Provide or arrange the site", "Approve pricing and expansion decisions"],
    we: ["Operate the station day to day", "Staffing, monitoring and customer support", "Preventive and corrective maintenance", "Reporting, payments and analytics"],
    steps: [
      { n: "01", t: "Feasibility", d: "We assess site, demand and expected utilization." },
      { n: "02", t: "Investment plan", d: "Capacity, cost and projected earnings finalised." },
      { n: "03", t: "Installation", d: "Turnkey build, commissioning and network onboarding." },
      { n: "04", t: "We operate", d: "SONAR.EV runs the station under an operations agreement." },
      { n: "05", t: "Monthly payout", d: "Revenue share settled monthly with full reporting." },
    ],
    earn: [
      { label: "Your investment", value: "Full station", note: "You own the asset" },
      { label: "Your income", value: "Revenue share", note: "Settled monthly" },
      { label: "Your effort", value: "Minimal", note: "We run operations" },
    ],
    pros: ["You own a real, appreciating asset", "Professional operations from day one", "Transparent monthly reporting", "Scales easily to multiple sites"],
    considerations: ["Capital investment required upfront", "Earnings vary with utilization", "Operations fee applies to the managed service"],
  },
  {
    slug: "fofo",
    path: "/models/fofo",
    code: "FOFO",
    name: "Franchise Owned, Franchise Operated",
    tagline: "You own it. You run it. You keep 95% of net revenue.",
    intro:
      "FOFO is our highest-earning model. You invest in and operate the station yourself, backed by SONAR.EV hardware, software, training, AMC and 24/7 technical support - and you retain 95% of net revenue.",
    image: fofoImg,
    icon: Store,
    bestFor: ["Entrepreneurs who want maximum returns", "Fuel station and dealership owners", "Hotels, malls and fleet depots", "Partners with local operating capability"],
    you: ["Invest in the station and site readiness", "Run day-to-day operations and staffing", "Handle electricity, security and upkeep"],
    we: ["Supply chargers, software and driver app", "Installation, commissioning and training", "AMC, spares and 24/7 remote support", "Network listing and marketing"],
    steps: [
      { n: "01", t: "Site and model fit", d: "We confirm your location suits a FOFO station." },
      { n: "02", t: "Proposal", d: "Charger capacity, cost and earnings estimate shared." },
      { n: "03", t: "Build and train", d: "We install, commission and train your team." },
      { n: "04", t: "You operate", d: "You run the station with our platform behind you." },
      { n: "05", t: "95% to you", d: "Net revenue settled monthly - 95% partner, 5% SONAR.EV." },
    ],
    earn: [
      { label: "Your investment", value: "Full station", note: "Highest capital, highest upside" },
      { label: "Your income", value: "95% net", note: "Of net revenue" },
      { label: "Your effort", value: "Active", note: "You operate the site" },
    ],
    pros: ["Highest earning potential of all models", "Full control over operations and pricing", "Enterprise tech, AMC and support included", "Brand and network demand from day one"],
    considerations: ["Requires hands-on daily involvement", "You bear electricity and running costs", "Returns depend on local EV traffic"],
  },
  {
    slug: "capital-circle",
    path: "/models/capital-circle",
    code: "Capital Circle",
    name: "Investor Capital Model",
    tagline: "Invest capital. No land. No operations.",
    intro:
      "Capital Circle lets you participate in EV charging growth purely as an investor. Your capital is deployed into SONAR.EV-managed charging assets across locations - you own no land, hire nobody, and hold a structured, agreement-backed position in a managed portfolio.",
    image: capitalImg,
    icon: PieChart,
    bestFor: ["Investors without land or time", "Diversifying into clean-energy assets", "Groups pooling capital", "Anyone wanting exposure, not operations"],
    you: ["Commit capital under a formal agreement", "Choose your participation tenure", "Review periodic performance reports"],
    we: ["Select and develop the station locations", "Own the operational responsibility end to end", "Report performance transparently", "Manage compliance and asset upkeep"],
    steps: [
      { n: "01", t: "Introductory call", d: "We explain structure, tenure and risk clearly." },
      { n: "02", t: "Portfolio briefing", d: "You see the locations capital will be deployed into." },
      { n: "03", t: "Agreement", d: "Terms documented and signed before any transfer." },
      { n: "04", t: "Deployment", d: "Capital funds station build-out and rollout." },
      { n: "05", t: "Reporting", d: "Periodic statements on performance and returns." },
    ],
    earn: [
      { label: "Your investment", value: "Capital only", note: "No land, no staff" },
      { label: "Your income", value: "Structured", note: "Per agreement terms" },
      { label: "Your effort", value: "None", note: "Fully managed" },
    ],
    pros: ["Lowest involvement of any model", "Exposure across multiple stations", "No land, staffing or licences needed", "Documented, agreement-backed terms"],
    considerations: ["Returns are not guaranteed", "Capital is committed for a fixed tenure", "You do not control site-level decisions"],
  },
];

export function ModelPage({ model }: { model: BusinessModel }) {
  const others = MODELS.filter((m) => m.slug !== model.slug);
  const Icon = model.icon;
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Nav />

      <nav aria-label="Breadcrumb" className="border-b border-white/10">
        <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-1 px-6 py-3 text-xs text-white/40">
          <li><Link to="/" className="hover:text-white">Home</Link></li>
          <ChevronRight className="h-3 w-3" />
          <li><Link to="/" hash="business-models" className="hover:text-white">Business Models</Link></li>
          <ChevronRight className="h-3 w-3" />
          <li className="text-white/70">{model.code}</li>
        </ol>
      </nav>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(255,255,255,0.08),transparent_70%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
              <Icon className="h-3.5 w-3.5" /> Business Model
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">{model.code}</h1>
            <div className="mt-3 text-sm font-medium uppercase tracking-widest text-white/40">{model.name}</div>
            <p className="mt-5 text-lg text-white/80">{model.tagline}</p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60">{model.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className={btnPrimary}>Talk to us about {model.code} <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/calculator" className={btnSecondary}>Estimate earnings</Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-white/5 blur-3xl" />
            <img src={model.image} alt={`${model.code} model - ${model.name}`} width={1200} height={800} className="w-full rounded-2xl border border-white/10 object-cover" />
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.02] py-14">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 sm:grid-cols-3">
          {model.earn.map((e) => (
            <div key={e.label} className="rounded-2xl border border-white/10 bg-black p-6">
              <div className="text-xs font-medium uppercase tracking-widest text-white/40">{e.label}</div>
              <div className="mt-3 text-3xl font-semibold tracking-tight">{e.value}</div>
              <div className="mt-1 text-xs text-white/50">{e.note}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-white/10 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">How it works, simply</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {model.steps.map((s) => (
              <div key={s.n} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="font-mono text-xs text-white/40">{s.n}</div>
                <div className="mt-3 text-sm font-semibold">{s.t}</div>
                <p className="mt-2 text-xs leading-relaxed text-white/60">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.02] py-20">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-black p-8">
            <div className="text-xs font-semibold uppercase tracking-widest text-white/50">What you do</div>
            <ul className="mt-5 space-y-3">
              {model.you.map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/75"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-white" />{i}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white p-8 text-black">
            <div className="text-xs font-semibold uppercase tracking-widest text-black/50">What SONAR.EV does</div>
            <ul className="mt-5 space-y-3">
              {model.we.map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-black/80"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-black" />{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Is this model right for you?</h2>
              <p className="mt-4 text-sm text-white/60">A quick, honest view - the upside and the things to weigh before you commit.</p>
              <Link to="/contact" className={`${btnSecondary} mt-6`}>Ask a specialist <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <div className="text-xs font-semibold uppercase tracking-widest text-white/50">Best suited for</div>
              <ul className="mt-5 space-y-2.5 text-sm text-white/70">
                {model.bestFor.map((b) => <li key={b} className="flex gap-2"><span className="text-white">-</span>{b}</li>)}
              </ul>
            </div>
            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                <div className="text-xs font-semibold uppercase tracking-widest text-white/50">Advantages</div>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  {model.pros.map((p) => <li key={p} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-white" />{p}</li>)}
                </ul>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black p-7">
                <div className="text-xs font-semibold uppercase tracking-widest text-white/50">Things to consider</div>
                <ul className="mt-4 space-y-2 text-sm text-white/60">
                  {model.considerations.map((c) => <li key={c} className="flex gap-2"><span className="text-white/40">*</span>{c}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.02] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-semibold tracking-tight">Compare other models</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {others.map((m) => (
              <Link key={m.slug} to={m.path} className="group rounded-2xl border border-white/10 bg-black p-6 transition-all hover:-translate-y-1 hover:border-white/30">
                <div className="text-xl font-bold tracking-tight">{m.code}</div>
                <div className="mt-1 text-[11px] uppercase tracking-widest text-white/40">{m.name}</div>
                <p className="mt-3 text-xs text-white/60">{m.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-white">View model <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-3xl font-semibold tracking-tight">Start with {model.code}</h2>
          <p className="mt-3 text-center text-sm text-white/60">Share your details and a franchise specialist will walk you through the numbers.</p>
          <div className="mt-8"><EnquiryForm /></div>
        </div>
      </section>

      <Footer />
      <FloatingCTAs />
    </div>
  );
}
