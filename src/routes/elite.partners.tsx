import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, Star } from "lucide-react";
import { EliteAppShell, Reveal, glass, glassHover, eliteBtn } from "@/components/elite";

export const Route = createFileRoute("/elite/partners")({
  head: () => ({
    meta: [
      { title: "Partner Network — SonarEV Elite" },
      { name: "description", content: "Vetted architects, EPC contractors, legal advisors, surveyors and consultants for infrastructure projects." },
      { property: "og:title", content: "Partner Network — SonarEV Elite" },
      { property: "og:description", content: "Hire verified execution partners with ratings and specialisations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PartnersPage,
});

const PARTNERS = [
  { n: "Suhas EPC Contractors", role: "EPC & Civil", loc: "Bengaluru", r: 4.9, jobs: 41 },
  { n: "Kavya Rao Architects", role: "Architecture", loc: "Mysuru", r: 4.8, jobs: 27 },
  { n: "Vidhi Legal LLP", role: "Title & Compliance", loc: "Hyderabad", r: 4.7, jobs: 63 },
  { n: "Terra Survey Co.", role: "Land Survey", loc: "Hubli", r: 4.9, jobs: 88 },
  { n: "GridWorks Electricals", role: "HT/LT & DISCOM", loc: "Chennai", r: 4.6, jobs: 35 },
  { n: "Anvay Consulting", role: "Feasibility & DPR", loc: "Pune", r: 4.8, jobs: 52 },
];

function PartnersPage() {
  return (
    <EliteAppShell title="Partner Network" subtitle="Vetted execution partners across design, legal, survey and construction">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {PARTNERS.map((p, i) => (
          <Reveal key={p.n} delay={(i % 3) * 0.05}>
            <article className={`${glass} ${glassHover} h-full p-6`}>
              <div className="flex items-start justify-between gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.05] text-sm font-bold">
                  {p.n.slice(0, 2).toUpperCase()}
                </div>
                <span className="inline-flex items-center gap-1 rounded-full border border-elite-accent/40 bg-elite-accent-soft px-2.5 py-1 text-[10px] font-semibold text-elite-accent">
                  <BadgeCheck className="h-3 w-3" /> Vetted
                </span>
              </div>
              <h3 className="mt-4 text-sm font-semibold">{p.n}</h3>
              <div className="text-[11px] text-white/45">{p.role} · {p.loc}</div>
              <div className="mt-4 flex items-center gap-2 text-xs text-white/60">
                <Star className="h-3.5 w-3.5 fill-elite-accent text-elite-accent" /> {p.r}
                <span className="text-white/25">·</span> {p.jobs} projects
              </div>
              <button type="button" className={`${eliteBtn} mt-6 w-full px-4 py-2.5 text-xs`}>Request quote</button>
            </article>
          </Reveal>
        ))}
      </div>
    </EliteAppShell>
  );
}