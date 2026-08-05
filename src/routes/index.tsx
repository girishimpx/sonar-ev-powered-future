import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Zap, Cpu, Wrench, TrendingUp, CheckCircle2, Layers,
  HeartHandshake, LineChart, Sparkles, Calculator, Handshake, PlugZap,
} from "lucide-react";
import heroImg from "@/assets/hero-charger.jpg";
import chargerLineupImg from "@/assets/charger-lineup.jpg";
import eliteImg from "@/assets/elite-ai-dashboard.jpg";
import {
  Nav, Footer, FloatingCTAs, ContactStrip, EnquiryForm,
  btnPrimary, btnSecondary,
} from "@/components/site";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "SONAR.EV — EV Charging Infrastructure, Franchise & Elite Platform" },
      {
        name: "description",
        content:
          "SONAR.EV builds India's EV charging network: enterprise DC fast chargers, franchise ownership models, and SonarEV Elite — the business operating system for land, investment and growth.",
      },
      { property: "og:title", content: "SONAR.EV — EV Charging Infrastructure, Franchise & Elite Platform" },
      { property: "og:description", content: "Chargers, franchise models and the SonarEV Elite platform — one partner for the EV charging economy." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Nav />
      <Hero />
      <TrustStrip />
      <PillarsSection />
      <BusinessModelsSection />
      <EliteSpotlight />
      <WhySection />
      <ContactStrip>Not sure where to start? Talk to a SONAR.EV specialist.</ContactStrip>
      <LeadSection />
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
            EV Charging Infrastructure • India
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Powering India's{" "}
            <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
              EV charging economy.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
            Enterprise-grade chargers, franchise ownership models, and SonarEV Elite — the platform
            connecting land, capital and operators. One partner, end to end.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/elite" className={btnPrimary}>
              <Sparkles className="h-4 w-4" /> Explore SonarEV Elite
            </Link>
            <Link to="/franchise" className={btnSecondary}>
              Franchise Models <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { n: "99.9%", t: "Uptime target" },
              { n: "24/7", t: "Technical support" },
              { n: "95%", t: "Revenue to partner" },
              { n: "PAN India", t: "Expansion" },
            ].map((s) => (
              <div key={s.t} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <div className="text-xl font-semibold">{s.n}</div>
                <div className="mt-0.5 text-[11px] text-white/50">{s.t}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-white/5 blur-3xl" />
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)]">
            <img
              src={heroImg}
              alt="SONAR.EV DC fast charging station"
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
  const items = ["Enterprise Hardware", "Software Included", "24/7 Support", "AMC Included", "95% Revenue Share"];
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

const pillars = [
  {
    icon: PlugZap,
    title: "DC Fast Chargers",
    body: "30kW to 240kW enterprise chargers. Configure guns, connectors and site type in the interactive configurator.",
    to: "/chargers" as const,
    cta: "Configure a charger",
  },
  {
    icon: Handshake,
    title: "Franchise Ownership",
    body: "Own a station with 95% of net revenue, software, installation and AMC included. Five ways to partner.",
    to: "/franchise" as const,
    cta: "See the franchise",
  },
  {
    icon: Sparkles,
    title: "SonarEV Elite",
    body: "The business operating system for land, investment and growth — marketplace, investors, AI advisor and projects.",
    to: "/elite" as const,
    cta: "Explore Elite",
  },
];

function PillarsSection() {
  return (
    <section className="py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="What we do"
          title="Three ways SONAR.EV powers your business"
          sub="Hardware, ownership models, and the platform that ties the ecosystem together."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, body, to, cta }) => (
            <Link
              key={title}
              to={to}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.05]"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/5">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{body}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-white">
                {cta} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const businessModels = [
  {
    code: "COCO",
    to: "/models/coco" as const,
    name: "Company Owned, Company Operated",
    body: "SONAR.EV invests, owns and operates the station end to end.",
    points: ["100% SONAR.EV capital", "Site owner earns lease/rental"],
  },
  {
    code: "FOCO",
    to: "/models/foco" as const,
    name: "Franchise Owned, Company Operated",
    body: "You invest in the station, SONAR.EV runs day-to-day operations.",
    points: ["Partner capital, SONAR.EV operations", "Predictable, passive earnings"],
  },
  {
    code: "FOFO",
    to: "/models/fofo" as const,
    name: "Franchise Owned, Franchise Operated",
    body: "You own and operate the station and keep 95% of net revenue.",
    points: ["Highest earning potential", "Full operational control"],
  },
  {
    code: "Capital Circle",
    to: "/models/capital-circle" as const,
    name: "Investor Capital Model",
    body: "Invest into SONAR.EV-managed charging assets without land or operations.",
    points: ["No land or staffing needed", "Portfolio of managed stations"],
  },
  {
    code: "Elite",
    to: "/elite" as const,
    name: "Platform Membership Model",
    body: "Subscribe to SonarEV Elite and run land, capital and projects on one operating system.",
    points: ["Land & investor marketplace", "AI advisor + project tracking"],
    featured: true,
  },
];

function BusinessModelsSection() {
  return (
    <section id="business-models" className="relative overflow-hidden border-y border-white/10 bg-white/[0.02] py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
              Business Models
            </div>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Five ways to <span className="text-white/40">partner.</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/55">
              Choose the ownership, investment or platform structure that matches your capital, land
              and appetite for day-to-day involvement.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link to="/elite" className={btnPrimary}>
                <Sparkles className="h-4 w-4" /> Explore SonarEV Elite
              </Link>
              <Link to="/franchise" className={btnSecondary}>
                Full franchise details <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 hidden overflow-hidden rounded-2xl border border-white/10 lg:block">
              <img
                src={chargerLineupImg}
                alt="SONAR.EV charging station lineup"
                width={1200}
                height={800}
                className="h-60 w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {businessModels.map((m, i) => (
              <Link
                key={m.code}
                to={m.to}
                className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.06] sm:min-h-[240px] ${
                  m.featured
                    ? "border-white/30 bg-white/[0.06] sm:col-span-2"
                    : "border-white/10 bg-black"
                }`}
              >
                <div className="absolute top-0 right-0 -mt-3 -mr-3 h-20 w-20 rounded-full bg-white/5 blur-2xl transition-opacity group-hover:bg-white/10" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-3">
                    <div className="text-3xl font-bold tracking-tighter text-white">{m.code}</div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/60">
                      {m.featured ? "New" : `0${i + 1}`}
                    </span>
                  </div>
                  <div className="mt-3 text-xs font-medium uppercase tracking-widest text-white/40">{m.name}</div>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{m.body}</p>
                  <ul className="mt-5 space-y-1.5">
                    {m.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-xs text-white/70">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-white" /> {p}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-white">
                    Explore {m.code} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EliteSpotlight() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
            <Sparkles className="h-3.5 w-3.5" /> SonarEV Elite
          </div>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            The business operating system for land, investment & growth.
          </h2>
          <p className="mt-5 max-w-xl text-white/60">
            Elite is our membership platform: a verified land marketplace, an investor network, project
            tracking, a private community, and Sonar AI for feasibility and ROI analysis — all in one workspace.
          </p>
          <ul className="mt-7 grid gap-2 sm:grid-cols-2">
            {["Verified land marketplace", "Investor & partner network", "Project kanban tracking", "Sonar AI advisor"].map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm text-white/75">
                <CheckCircle2 className="h-4 w-4 text-white" /> {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/elite" className={btnPrimary}>
              <Sparkles className="h-4 w-4" /> Explore SonarEV Elite
            </Link>
            <Link to="/calculator" className={btnSecondary}>
              <Calculator className="h-4 w-4" /> Estimate your earnings
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-white/5 blur-2xl" />
          <img
            src={eliteImg}
            alt="SonarEV Elite dashboard"
            loading="lazy"
            width={1600}
            height={1000}
            className="w-full rounded-2xl border border-white/10 object-cover"
          />
        </div>
      </div>
    </section>
  );
}

const whyCards = [
  { icon: TrendingUp, title: "Lowest Revenue Share", body: "Keep 95% of net revenue — one of the most partner-friendly splits in India." },
  { icon: Cpu, title: "Enterprise Software Included", body: "Charging management platform, analytics, and driver app — all included, free." },
  { icon: Wrench, title: "AMC Included", body: "Preventive and corrective maintenance handled by SONAR.EV engineers." },
  { icon: LineChart, title: "AI Business Dashboard", body: "Real-time revenue, utilization, and health metrics for every station." },
  { icon: HeartHandshake, title: "Dedicated Account Manager", body: "A single point of contact for operations, support, and expansion." },
  { icon: Layers, title: "Scalable & Future-Ready", body: "Start with one site. Scale to a network with a national brand behind you." },
];

function WhySection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Why SONAR.EV" title="Built to make partners win" />
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyCards.map(({ icon: Icon, title, body }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-black p-7 transition-colors hover:border-white/25">
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

function LeadSection() {
  return (
    <section id="apply" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-8 sm:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">Get in touch</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Let's build your charging business.
              </h2>
              <p className="mt-4 max-w-md text-white/60">
                Share a few details and a SONAR.EV specialist will reach out within 24 hours with the
                right model, hardware and numbers for your site.
              </p>
              <ul className="mt-8 space-y-3 text-sm">
                {["Free site & feasibility consultation", "ROI model tailored to your site", "Hardware + software + AMC included", "Elite platform walkthrough"].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-white/70">
                    <CheckCircle2 className="h-4 w-4 text-white" /> {t}
                  </li>
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _icons = { Zap };
