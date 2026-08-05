import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { CalendarDays, IndianRupee, TrendingUp } from "lucide-react";
import { EliteAppShell, glass, eliteBtn } from "@/components/elite";

export const Route = createFileRoute("/elite/projects")({
  head: () => ({
    meta: [
      { title: "Projects — SonarEV Elite" },
      { name: "description", content: "Track every project across planning, funding, construction and completion on a live Kanban board." },
      { property: "og:title", content: "Project Board — SonarEV Elite" },
      { property: "og:description", content: "Budgets, timelines, ROI and team members for every project stage." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

type Card = { n: string; budget: string; timeline: string; roi: string; status: string; members: string[] };

const COLUMNS: { title: string; cards: Card[] }[] = [
  {
    title: "Planning",
    cards: [
      { n: "Chitradurga Solar Farm", budget: "₹14 Cr", timeline: "Q3 2026", roi: "24%", status: "Feasibility", members: ["RM", "AI"] },
      { n: "Mysuru Retail Block", budget: "₹5.2 Cr", timeline: "Q4 2026", roi: "16%", status: "Land shortlisting", members: ["SD"] },
    ],
  },
  {
    title: "Funding",
    cards: [
      { n: "Nelamangala Warehouse", budget: "₹8.1 Cr", timeline: "Q1 2027", roi: "18%", status: "Term sheet", members: ["RM", "SI", "ND"] },
    ],
  },
  {
    title: "Construction",
    cards: [
      { n: "Hubli Highway EV Plaza", budget: "₹2.4 Cr", timeline: "Nov 2026", roi: "21%", status: "Civil works 68%", members: ["RM", "AD"] },
      { n: "Hoskote Fleet Depot", budget: "₹3.7 Cr", timeline: "Dec 2026", roi: "19%", status: "Electricals", members: ["AD", "KV"] },
    ],
  },
  {
    title: "Completed",
    cards: [
      { n: "Belagavi Charging Hub", budget: "₹1.8 Cr", timeline: "Mar 2026", roi: "23%", status: "Operational", members: ["RM"] },
    ],
  },
];

function ProjectsPage() {
  return (
    <EliteAppShell
      title="Projects"
      subtitle="6 projects · ₹35.2 Cr committed capital"
      action={<button type="button" className={eliteBtn}>New Project</button>}
    >
      <div className="-mx-1 flex gap-4 overflow-x-auto pb-4">
        {COLUMNS.map((col, ci) => (
          <div key={col.title} className="w-[19rem] shrink-0 px-1">
            <div className="mb-3 flex items-center justify-between px-1">
              <h2 className="text-sm font-semibold tracking-tight">{col.title}</h2>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[11px] text-white/45">
                {col.cards.length}
              </span>
            </div>
            <div className="space-y-3">
              {col.cards.map((c, i) => (
                <motion.article
                  key={c.n}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: ci * 0.06 + i * 0.05 }}
                  whileHover={{ y: -4 }}
                  className={`${glass} cursor-grab p-4 transition-colors hover:border-elite-accent/40 active:cursor-grabbing`}
                >
                  <div className="text-sm font-semibold">{c.n}</div>
                  <div className="mt-1 text-[11px] text-white/45">{c.status}</div>
                  <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                    <Mini icon={IndianRupee} v={c.budget} />
                    <Mini icon={CalendarDays} v={c.timeline} />
                    <Mini icon={TrendingUp} v={c.roi} accent />
                  </div>
                  <div className="mt-4 flex -space-x-2">
                    {c.members.map((m) => (
                      <span key={m} className="grid h-7 w-7 place-items-center rounded-full border border-elite-bg bg-white/10 text-[10px] font-bold text-white/80">
                        {m}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </EliteAppShell>
  );
}

function Mini({ icon: Icon, v, accent }: { icon: typeof IndianRupee; v: string; accent?: boolean }) {
  return (
    <div className="rounded-lg border border-white/8 bg-white/[0.03] px-1 py-2">
      <Icon className={`mx-auto h-3 w-3 ${accent ? "text-elite-accent" : "text-white/35"}`} />
      <div className={`mt-1 text-[11px] font-semibold ${accent ? "text-elite-accent" : "text-white/75"}`}>{v}</div>
    </div>
  );
}