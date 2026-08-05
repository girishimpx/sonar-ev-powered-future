import { createFileRoute } from "@tanstack/react-router";
import { EliteAppShell, Reveal, glass, glassHover, eliteBtn } from "@/components/elite";

export const Route = createFileRoute("/elite/funding")({
  head: () => ({
    meta: [
      { title: "Funding — SonarEV Elite" },
      { name: "description", content: "Track funding requests, term sheets and disbursements across your infrastructure portfolio." },
      { property: "og:title", content: "Funding Desk — SonarEV Elite" },
      { property: "og:description", content: "Requests, term sheets, disbursements and lender options in one place." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FundingPage,
});

const REQUESTS = [
  { p: "Nelamangala Warehouse", ask: "₹8.1 Cr", raised: 62, stage: "Term sheet", rate: "11.4%" },
  { p: "Chitradurga Solar Farm", ask: "₹14 Cr", raised: 28, stage: "Investor outreach", rate: "12.1%" },
  { p: "Hoskote Fleet Depot", ask: "₹3.7 Cr", raised: 95, stage: "Disbursement", rate: "10.8%" },
];

function FundingPage() {
  return (
    <EliteAppShell
      title="Funding"
      subtitle="₹25.8 Cr in active requests · 3 live mandates"
      action={<button type="button" className={eliteBtn}>New request</button>}
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { l: "Total requested", v: "₹25.8 Cr" },
          { l: "Committed", v: "₹14.2 Cr" },
          { l: "Avg. cost of capital", v: "11.4%" },
        ].map((s) => (
          <div key={s.l} className={`${glass} p-6`}>
            <div className="text-[10px] uppercase tracking-widest text-white/35">{s.l}</div>
            <div className="mt-2 text-2xl font-semibold text-elite-accent">{s.v}</div>
          </div>
        ))}
      </div>

      <div className="mt-5 space-y-4">
        {REQUESTS.map((r, i) => (
          <Reveal key={r.p} delay={i * 0.05}>
            <article className={`${glass} ${glassHover} p-6`}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-semibold">{r.p}</h3>
                  <div className="text-[11px] text-white/45">{r.stage} · indicative {r.rate}</div>
                </div>
                <div className="shrink-0 text-sm font-semibold text-elite-accent">{r.ask}</div>
              </div>
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full rounded-full bg-elite-accent" style={{ width: `${r.raised}%` }} />
              </div>
              <div className="mt-2 text-[11px] text-white/45">{r.raised}% committed</div>
            </article>
          </Reveal>
        ))}
      </div>
    </EliteAppShell>
  );
}