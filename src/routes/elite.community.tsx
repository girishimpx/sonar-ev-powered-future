import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, MessageCircle, Share2, CalendarDays, TrendingUp, Handshake, HelpCircle } from "lucide-react";
import { EliteAppShell, Reveal, glass, glassHover, eliteBtn } from "@/components/elite";

export const Route = createFileRoute("/elite/community")({
  head: () => ({
    meta: [
      { title: "Community — SonarEV Elite" },
      { name: "description", content: "Private networking feed for investors, founders, developers and landowners: posts, questions, events and deal flow." },
      { property: "og:title", content: "Elite Community — SonarEV Elite" },
      { property: "og:description", content: "Deal flow, partnership requests, questions and events from verified members." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CommunityPage,
});

const TABS = [
  { k: "All", icon: TrendingUp },
  { k: "Questions", icon: HelpCircle },
  { k: "Events", icon: CalendarDays },
  { k: "Opportunities", icon: TrendingUp },
  { k: "Partnerships", icon: Handshake },
] as const;

const POSTS = [
  { kind: "Opportunities", n: "Sneha Iyer", r: "Kalpa Family Office", t: "2h", c: "Deploying ₹15 Cr into highway EV plazas in North Karnataka this quarter. Looking for sites with 500 kVA sanctioned load.", likes: 42, cm: 12 },
  { kind: "Questions", n: "Arjun Deshmukh", r: "Northline Estates", t: "5h", c: "Anyone dealt with DISCOM load augmentation delays in Tumakuru? What timeline did you actually get?", likes: 18, cm: 27 },
  { kind: "Events", n: "Elite Team", r: "SonarEV Elite", t: "1d", c: "Members-only roundtable: Financing infrastructure assets in 2026. Bengaluru, 21 Aug, 18 seats.", likes: 96, cm: 8 },
  { kind: "Partnerships", n: "Vikram Shetty", r: "Landowner, Hubli", t: "1d", c: "4.2 acres on NH-48 available for revenue-share partnership. Prefer operators with EV or logistics track record.", likes: 63, cm: 21 },
  { kind: "Opportunities", n: "Meridian Debt Fund", r: "Lender", t: "2d", c: "Construction finance at 11.4% for verified Elite projects with clear title and approvals in place.", likes: 51, cm: 14 },
];

function CommunityPage() {
  const [tab, setTab] = useState<string>("All");
  const [liked, setLiked] = useState<string[]>([]);
  const posts = tab === "All" ? POSTS : POSTS.filter((p) => p.kind === tab);

  return (
    <EliteAppShell title="Community" subtitle="Private network of verified investors, founders, developers and landowners">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div>
          <div className={`${glass} p-4`}>
            <textarea
              rows={2}
              placeholder="Share an opportunity, ask a question, find a partner…"
              className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] p-3 text-sm outline-none placeholder:text-white/30 focus:border-elite-accent/50"
            />
            <div className="mt-3 flex justify-end">
              <button type="button" className={`${eliteBtn} px-5 py-2.5 text-xs`}>Post</button>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {TABS.map((t) => (
              <button
                key={t.k}
                type="button"
                onClick={() => setTab(t.k)}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all ${
                  tab === t.k ? "border-elite-accent/60 bg-elite-accent-soft text-elite-accent" : "border-white/10 bg-white/[0.03] text-white/55 hover:text-white"
                }`}
              >
                <t.icon className="h-3.5 w-3.5" /> {t.k}
              </button>
            ))}
          </div>

          <div className="mt-4 space-y-4">
            {posts.map((p, i) => (
              <Reveal key={p.c} delay={i * 0.05}>
                <article className={`${glass} ${glassHover} p-5`}>
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-elite-accent/25 bg-elite-accent-soft text-xs font-bold text-elite-accent">
                      {p.n.slice(0, 2).toUpperCase()}
                    </span>
                    <div className="min-w-0">
                      <div className="truncate text-sm font-semibold">{p.n}</div>
                      <div className="truncate text-[11px] text-white/40">{p.r} · {p.t}</div>
                    </div>
                    <span className="ml-auto shrink-0 rounded-full border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-widest text-white/45">{p.kind}</span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-white/75">{p.c}</p>
                  <div className="mt-4 flex items-center gap-5 text-xs text-white/45">
                    <button
                      type="button"
                      onClick={() => setLiked((l) => (l.includes(p.c) ? l.filter((x) => x !== p.c) : [...l, p.c]))}
                      className={`inline-flex items-center gap-1.5 transition-colors hover:text-elite-accent ${liked.includes(p.c) ? "text-elite-accent" : ""}`}
                    >
                      <Heart className="h-3.5 w-3.5" /> {p.likes + (liked.includes(p.c) ? 1 : 0)}
                    </button>
                    <span className="inline-flex items-center gap-1.5"><MessageCircle className="h-3.5 w-3.5" /> {p.cm}</span>
                    <span className="inline-flex items-center gap-1.5"><Share2 className="h-3.5 w-3.5" /> Share</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <aside className="space-y-4">
          <div className={`${glass} p-5`}>
            <div className="text-sm font-semibold">Upcoming events</div>
            <ul className="mt-4 space-y-3 text-xs text-white/60">
              <li><span className="text-elite-accent">21 Aug</span> · Infra financing roundtable, Bengaluru</li>
              <li><span className="text-elite-accent">03 Sep</span> · Landowner–operator matchmaking</li>
              <li><span className="text-elite-accent">17 Sep</span> · Solar &amp; storage deal day</li>
            </ul>
          </div>
          <div className={`${glass} p-5`}>
            <div className="text-sm font-semibold">Suggested members</div>
            <ul className="mt-4 space-y-3">
              {["Deccan Growth Partners", "Kavya Rao — Architect", "Suhas EPC Contractors"].map((m) => (
                <li key={m} className="flex items-center justify-between gap-2 text-xs">
                  <span className="truncate text-white/70">{m}</span>
                  <button type="button" className="shrink-0 text-[11px] font-semibold text-elite-accent">Connect</button>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </EliteAppShell>
  );
}