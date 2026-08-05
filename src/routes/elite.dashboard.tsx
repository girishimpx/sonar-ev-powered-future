import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight, Plus, Users, MapPinned, HardHat, Sparkles, TrendingUp,
  CircleDot, Clock, MessageSquare,
} from "lucide-react";
import { EliteAppShell, Reveal, Skeleton, glass, glassHover, eliteBtn } from "@/components/elite";

export const Route = createFileRoute("/elite/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — SonarEV Elite" },
      { name: "description", content: "Track projects, investment requests, land opportunities and ROI from one Elite command center." },
      { property: "og:title", content: "Elite Dashboard — SonarEV Elite" },
      { property: "og:description", content: "Your projects, investors, land and tasks in one premium workspace." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DashboardPage,
});

const QUICK = [
  { label: "New Project", icon: Plus, to: "/elite/projects" as const },
  { label: "Find Investors", icon: Users, to: "/elite/investors" as const },
  { label: "List Land", icon: MapPinned, to: "/elite/land" as const },
  { label: "Hire Contractor", icon: HardHat, to: "/elite/marketplace" as const },
  { label: "Talk to AI", icon: Sparkles, to: "/elite/ai" as const },
];

const PROJECTS = [
  { n: "Hubli Highway EV Plaza", s: "Construction", p: 68, b: "₹2.4 Cr" },
  { n: "Nelamangala Warehouse", s: "Funding", p: 34, b: "₹8.1 Cr" },
  { n: "Chitradurga Solar Farm", s: "Planning", p: 12, b: "₹14 Cr" },
];

const REQUESTS = [
  { n: "Kalpa Family Office", a: "₹3.5 Cr", s: "Reviewing" },
  { n: "Northline Capital", a: "₹1.2 Cr", s: "Term sheet" },
  { n: "Sundar Angels", a: "₹80 L", s: "New" },
];

const LAND = [
  { n: "4.2 acres · NH-48, Hubli", p: "₹3.1 Cr", roi: "21%" },
  { n: "2.6 acres · Hoskote", p: "₹1.9 Cr", roi: "18%" },
  { n: "11 acres · Chitradurga", p: "₹4.4 Cr", roi: "24%" },
];

const TASKS = [
  { t: "Upload RTC + encumbrance certificate", d: "Today" },
  { t: "Sign EPC contractor agreement", d: "Tomorrow" },
  { t: "Investor call — Kalpa Family Office", d: "Fri, 4:00 PM" },
  { t: "Apply for FAME-II subsidy", d: "Next week" },
];

const MESSAGES = [
  { n: "Sneha Iyer", m: "Sharing the revised term sheet tonight.", t: "12m" },
  { n: "Arjun Deshmukh", m: "Site survey report is uploaded.", t: "2h" },
  { n: "Sonar AI", m: "Your Hubli ROI model was updated.", t: "5h" },
];

function DashboardPage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const id = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(id);
  }, []);

  return (
    <EliteAppShell
      title="Welcome back, Rohit"
      subtitle="Elite membership · 3 active projects · ₹24.5 Cr pipeline"
      action={<Link to="/elite/ai" className={eliteBtn}><Sparkles className="h-4 w-4" /> Ask AI</Link>}
    >
      <div className="flex flex-wrap gap-2">
        {QUICK.map((q) => (
          <Link key={q.label} to={q.to} className={`${glass} ${glassHover} inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold`}>
            <q.icon className="h-3.5 w-3.5 text-elite-accent" /> {q.label}
          </Link>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { l: "Active Projects", v: "3", s: "+1 this month" },
          { l: "Investment Requests", v: "7", s: "₹5.5 Cr requested" },
          { l: "Blended Project ROI", v: "21.4%", s: "+2.1% vs plan" },
          { l: "Nearby Land", v: "18", s: "within 60 km" },
        ].map((k, i) => (
          <Reveal key={k.l} delay={i * 0.05}>
            <div className={`${glass} ${glassHover} p-5`}>
              <div className="text-[11px] uppercase tracking-widest text-white/40">{k.l}</div>
              {loading ? (
                <Skeleton className="mt-3 h-8 w-24" />
              ) : (
                <div className="mt-3 text-3xl font-semibold tracking-tight">{k.v}</div>
              )}
              <div className="mt-1 inline-flex items-center gap-1 text-[11px] text-elite-accent">
                <TrendingUp className="h-3 w-3" /> {k.s}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <Panel title="Active Projects" to="/elite/projects">
            <div className="space-y-3">
              {loading
                ? [0, 1, 2].map((i) => <Skeleton key={i} className="h-16 w-full" />)
                : PROJECTS.map((p) => (
                    <div key={p.n} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition-colors hover:border-elite-accent/30">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="min-w-0">
                          <div className="truncate text-sm font-semibold">{p.n}</div>
                          <div className="text-[11px] text-white/45">{p.s} · Budget {p.b}</div>
                        </div>
                        <span className="shrink-0 text-xs font-semibold text-elite-accent">{p.p}%</span>
                      </div>
                      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                        <div className="h-full rounded-full bg-elite-accent transition-all duration-700" style={{ width: `${p.p}%` }} />
                      </div>
                    </div>
                  ))}
            </div>
          </Panel>
        </Reveal>

        <Reveal delay={0.05}>
          <Panel title="Investment Requests" to="/elite/investors">
            <ul className="space-y-3">
              {REQUESTS.map((r) => (
                <li key={r.n} className="flex items-center justify-between gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3">
                  <div className="min-w-0">
                    <div className="truncate text-sm font-medium">{r.n}</div>
                    <div className="text-[11px] text-white/45">{r.s}</div>
                  </div>
                  <span className="shrink-0 text-sm font-semibold text-elite-accent">{r.a}</span>
                </li>
              ))}
            </ul>
          </Panel>
        </Reveal>

        <Reveal delay={0.1}>
          <Panel title="Nearby Land" to="/elite/land">
            <ul className="space-y-3">
              {LAND.map((l) => (
                <li key={l.n} className="rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3">
                  <div className="text-sm font-medium">{l.n}</div>
                  <div className="mt-1 flex gap-3 text-[11px] text-white/45">
                    <span>{l.p}</span>
                    <span className="text-elite-accent">ROI {l.roi}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Panel>
        </Reveal>

        <Reveal delay={0.15}>
          <Panel title="Upcoming Tasks">
            <ul className="space-y-3">
              {TASKS.map((t) => (
                <li key={t.t} className="flex items-start gap-3 text-sm text-white/75">
                  <CircleDot className="mt-0.5 h-4 w-4 shrink-0 text-elite-accent" />
                  <span className="min-w-0">
                    <span className="block">{t.t}</span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-white/40"><Clock className="h-3 w-3" />{t.d}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Panel>
        </Reveal>

        <Reveal delay={0.2}>
          <Panel title="Recent Messages" to="/elite/community">
            <ul className="space-y-3">
              {MESSAGES.map((m) => (
                <li key={m.n} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-elite-accent/25 bg-elite-accent-soft text-[11px] font-bold text-elite-accent">
                    {m.n.slice(0, 1)}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center justify-between gap-2">
                      <span className="truncate text-sm font-medium">{m.n}</span>
                      <span className="shrink-0 text-[11px] text-white/35">{m.t}</span>
                    </span>
                    <span className="block truncate text-xs text-white/50">{m.m}</span>
                  </span>
                </li>
              ))}
            </ul>
            <Link to="/elite/community" className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-elite-accent">
              <MessageSquare className="h-3.5 w-3.5" /> Open community
            </Link>
          </Panel>
        </Reveal>
      </div>
    </EliteAppShell>
  );
}

function Panel({
  title,
  to,
  children,
}: {
  title: string;
  to?: "/elite/projects" | "/elite/investors" | "/elite/land" | "/elite/community";
  children: React.ReactNode;
}) {
  return (
    <section className={`${glass} h-full p-5`}>
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-sm font-semibold tracking-tight">{title}</h2>
        {to && (
          <Link to={to} className="inline-flex items-center gap-1 text-[11px] text-white/45 transition-colors hover:text-elite-accent">
            View all <ArrowUpRight className="h-3 w-3" />
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}