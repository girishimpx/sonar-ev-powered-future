import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight, MapPinned, Users, TrendingUp, Handshake, Sparkles, Hammer,
  Landmark, Scale, Banknote, HardHat, Truck, Package, Plug, LayoutDashboard,
  Crown, Gem, Check, Quote,
} from "lucide-react";
import {
  EliteTopNav, EliteFooter, MeshBackground, Reveal, EliteBadge,
  eliteBtn, eliteBtnGhost, glass, glassHover,
} from "@/components/elite";
import aiDashboard from "@/assets/elite-ai-dashboard.jpg";
import { SubscribeButton } from "@/components/elite-subscribe";
import type { PlanId } from "@/lib/plans";

export const Route = createFileRoute("/elite/")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://sonar-ev-powered-future.lovable.app/elite" }],
    meta: [
      { property: "og:url", content: "https://sonar-ev-powered-future.lovable.app/elite" },
      { title: "SonarEV Elite — The Business OS for Land, Investment & Growth" },
      { name: "description", content: "One membership for verified land, investors, business partners, legal experts, contractors, AI advisors and everything needed to build your next project." },
      { property: "og:title", content: "SonarEV Elite — The Business Operating System" },
      { property: "og:description", content: "Verified land, capital, partners, AI advisory and execution tools in one premium membership." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EliteLanding,
});

const FEATURES = [
  { icon: MapPinned, t: "Verified Land Marketplace", d: "Buy, lease or partner on verified commercial, industrial and agricultural land." },
  { icon: Users, t: "Investor Network", d: "Connect with HNIs, angel investors, venture capital firms, lenders and family offices." },
  { icon: TrendingUp, t: "Raise Capital", d: "Raise equity, debt or joint venture funding directly from investors." },
  { icon: Handshake, t: "Business Partner Matchmaking", d: "Find co-founders, developers, operators and strategic partners." },
  { icon: Sparkles, t: "AI Business Advisor", d: "Your AI consultant helps with project planning, ROI, funding options, legal guidance and business ideas." },
  { icon: Hammer, t: "Project Builder", d: "Launch EV charging stations, warehouses, hotels, resorts, logistics parks, factories and solar farms." },
  { icon: Landmark, t: "Government Schemes", d: "Discover subsidies, grants and incentives automatically." },
  { icon: Scale, t: "Legal Assistance", d: "Property verification, due diligence, contracts and approvals." },
  { icon: Banknote, t: "Funding Hub", d: "Construction finance, business loans and equipment financing." },
  { icon: HardHat, t: "Contractor Marketplace", d: "Hire verified architects, engineers, contractors and project managers." },
  { icon: Truck, t: "Equipment Marketplace", d: "Rent construction equipment, agricultural machinery and EV charging hardware." },
  { icon: Package, t: "Material Marketplace", d: "Source cement, steel, electrical equipment, solar panels and building materials." },
  { icon: Plug, t: "Utility Connections", d: "Electricity, water, internet and infrastructure support." },
  { icon: LayoutDashboard, t: "Project Dashboard", d: "Manage documents, investors, budgets, contractors and milestones." },
  { icon: Crown, t: "Exclusive Community", d: "Private networking with investors, founders, developers and landowners." },
  { icon: Gem, t: "Exclusive Deals", d: "Early access to premium land deals and investment opportunities." },
];

const STEPS = [
  { n: "01", t: "Find Land", d: "Browse verified opportunities." },
  { n: "02", t: "Find Investors", d: "Raise funding." },
  { n: "03", t: "Build Your Team", d: "Architects, contractors and partners." },
  { n: "04", t: "Launch", d: "Track everything from one dashboard." },
];

const AI_CAPS = [
  "Land analysis", "ROI calculation", "Project feasibility", "Investment recommendations",
  "Cost estimation", "Government subsidy finder", "Legal guidance", "Business planning",
  "Document generation",
];

const PLANS = [
  {
    id: "starter" as PlanId, name: "Starter", price: "₹999", tag: "Basic access.", highlight: false,
    features: ["Land marketplace browsing", "Community read access", "Basic ROI calculator", "2 project drafts", "Email support"],
  },
  {
    id: "professional" as PlanId, name: "Professional", price: "₹4,999", tag: "Everything needed for professionals.", highlight: false,
    features: ["Unlimited land access", "Verified investor network", "10 projects", "AI Business Advisor", "Funding Hub", "Government Schemes", "Project Dashboard"],
  },
  {
    id: "elite" as PlanId, name: "Elite", price: "₹9,999", tag: "The full ecosystem.", highlight: true,
    features: [
      "Unlimited land access", "Verified investor network", "Unlimited project creation",
      "AI Business Advisor", "Funding Hub", "Legal Assistance", "Government Schemes",
      "Project Dashboard", "Exclusive Community", "Priority Support", "Premium Opportunities",
      "Verified Elite Badge", "Exclusive Networking Events", "Everything Included",
    ],
  },
];

const TESTIMONIALS = [
  { q: "We closed a 4-acre highway plot and the funding for it inside the same platform. That has never happened to us before.", n: "Rohit Malhotra", r: "Founder, Axis Mobility" },
  { q: "Deal flow quality is the differentiator. Verified landowners, real numbers, no brokers in the middle.", n: "Sneha Iyer", r: "Investor, Kalpa Family Office" },
  { q: "The AI advisor produced a feasibility report in minutes that our consultants took three weeks to draft.", n: "Arjun Deshmukh", r: "Developer, Northline Estates" },
  { q: "I had land sitting idle for nine years. Elite matched me with an operator in eleven days.", n: "Vikram Shetty", r: "Landowner, Hubli" },
];

function EliteLanding() {
  return (
    <div className="min-h-screen bg-elite-bg text-white antialiased">
      <EliteTopNav />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <MeshBackground />
        <div className="relative mx-auto max-w-5xl px-6 pb-24 pt-20 text-center sm:pt-28">
          <Reveal>
            <EliteBadge>Membership by application</EliteBadge>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-7 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              The Business Operating System for{" "}
              <span className="bg-gradient-to-r from-white via-white to-elite-accent bg-clip-text text-transparent">
                Land, Investment &amp; Growth.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
              One membership gives you access to verified land, investors, business partners, legal
              experts, contractors, AI advisors and everything needed to build your next project.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href="#pricing" className={eliteBtn}>
                Become Elite <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <Link to="/elite/land" className={eliteBtnGhost}>Explore Opportunities</Link>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
              {[["₹1,840 Cr", "Deals listed"], ["2,600+", "Verified investors"], ["14", "States covered"], ["96%", "Member renewal"]].map(([v, l]) => (
                <div key={l} className={`${glass} p-4`}>
                  <div className="text-xl font-semibold tracking-tight text-elite-accent">{v}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-widest text-white/40">{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY ELITE */}
      <section id="why" className="relative border-t border-white/5 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <EliteBadge>Why Elite</EliteBadge>
            <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
              Sixteen systems. One membership.
            </h2>
            <p className="mt-4 max-w-xl text-sm text-white/50">
              Everything an entrepreneur, investor, developer or landowner needs to move from idea to
              operating asset — without leaving the platform.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f, i) => (
              <Reveal key={f.t} delay={(i % 4) * 0.06}>
                <div className={`${glass} ${glassHover} group h-full p-6`}>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-elite-accent/25 bg-elite-accent-soft text-elite-accent transition-transform duration-300 group-hover:scale-110">
                    <f.icon className="h-4.5 w-4.5" />
                  </div>
                  <div className="mt-5 text-sm font-semibold">{f.t}</div>
                  <p className="mt-2 text-xs leading-relaxed text-white/50">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="relative border-t border-white/5 bg-white/[0.015] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <EliteBadge>How it works</EliteBadge>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">Four moves to launch.</h2>
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className={`${glass} ${glassHover} relative h-full p-7`}>
                  <div className="font-mono text-xs text-elite-accent">{s.n}</div>
                  <div className="mt-4 text-lg font-semibold tracking-tight">{s.t}</div>
                  <p className="mt-2 text-xs text-white/50">{s.d}</p>
                  <div className="absolute -bottom-3 left-1/2 hidden h-6 w-px -translate-x-1/2 bg-gradient-to-b from-elite-accent/60 to-transparent md:block" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI */}
      <section id="ai" className="relative overflow-hidden border-t border-white/5 py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(255,255,255,0.10),transparent_70%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <Reveal>
            <EliteBadge>Sonar AI</EliteBadge>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">Meet Sonar AI</h2>
            <p className="mt-4 text-lg text-white/70">Your intelligent business partner.</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {AI_CAPS.map((c) => (
                <span key={c} className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs text-white/65 transition-colors hover:border-elite-accent/40 hover:text-white">
                  {c}
                </span>
              ))}
            </div>
            <Link to="/elite/ai" className={`${eliteBtn} mt-9`}>
              Talk to Sonar AI <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.12}>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className={`${glass} overflow-hidden p-2 shadow-[0_40px_120px_-40px_rgba(255,255,255,0.25)]`}
            >
              <img src={aiDashboard} alt="Sonar AI dashboard interface" loading="lazy" width={1440} height={960} className="w-full rounded-[18px]" />
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="border-t border-white/5 bg-white/[0.015] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-center">
              <EliteBadge>Membership</EliteBadge>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">Pick your level of access.</h2>
            </div>
          </Reveal>
          <div className="mt-14 grid items-start gap-5 lg:grid-cols-3">
            {PLANS.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <div
                  className={`relative h-full rounded-[24px] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${
                    p.highlight
                      ? "border border-elite-accent/50 bg-elite-accent-soft shadow-[0_0_70px_-20px_var(--color-elite-accent)]"
                      : "border border-white/10 bg-white/[0.04]"
                  }`}
                >
                  {p.highlight && (
                    <span className="absolute -top-3 left-8 rounded-full bg-elite-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black">
                      Most exclusive
                    </span>
                  )}
                  <div className="text-sm font-semibold uppercase tracking-widest text-white/60">{p.name}</div>
                  <div className="mt-4 flex items-end gap-1">
                    <span className="text-4xl font-semibold tracking-tight">{p.price}</span>
                    <span className="pb-1 text-sm text-white/40">/month</span>
                  </div>
                  <p className="mt-2 text-xs text-white/50">{p.tag}</p>
                  <ul className="mt-7 space-y-2.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-white/70">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-elite-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <SubscribeButton
                      plan={p.id}
                      className={p.highlight ? eliteBtn : eliteBtnGhost}
                      label={`Get ${p.name}`}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t border-white/5 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Founders, investors, developers, landowners.</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.n} delay={i * 0.07}>
                <figure className={`${glass} ${glassHover} h-full p-6`}>
                  <Quote className="h-5 w-5 text-elite-accent" />
                  <blockquote className="mt-4 text-sm leading-relaxed text-white/75">{t.q}</blockquote>
                  <figcaption className="mt-5 border-t border-white/10 pt-4">
                    <div className="text-sm font-semibold">{t.n}</div>
                    <div className="text-[11px] uppercase tracking-widest text-white/40">{t.r}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-white/5 py-24">
        <MeshBackground />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Build your next project inside Elite.</h2>
          <p className="mt-4 text-sm text-white/55">Land, capital, partners, execution and AI — one subscription.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href="#pricing" className={eliteBtn}>Become Elite <ArrowRight className="h-4 w-4" /></a>
            <Link to="/elite/dashboard" className={eliteBtnGhost}>Preview the platform</Link>
          </div>
        </div>
      </section>

      <EliteFooter />
    </div>
  );
}