import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { BadgeCheck, Search, Send, MapPin } from "lucide-react";
import { EliteAppShell, Reveal, glass, glassHover, eliteBtn } from "@/components/elite";

export const Route = createFileRoute("/elite/investors")({
  head: () => ({
    meta: [
      { title: "Investor Network — SonarEV Elite" },
      { name: "description", content: "Connect with verified HNIs, angel investors, VC firms, lenders and family offices and send proposals directly." },
      { property: "og:title", content: "Investor Marketplace — SonarEV Elite" },
      { property: "og:description", content: "Verified capital partners with ticket sizes, sectors and locations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InvestorsPage,
});

const INVESTORS = [
  { n: "Kalpa Family Office", size: "₹2 Cr – ₹15 Cr", ind: ["EV Infra", "Warehousing"], loc: "Bengaluru", v: true },
  { n: "Northline Capital", size: "₹50 L – ₹5 Cr", ind: ["Real Estate", "Solar"], loc: "Mumbai", v: true },
  { n: "Sundar Angels", size: "₹25 L – ₹1 Cr", ind: ["Mobility", "Retail"], loc: "Chennai", v: false },
  { n: "Deccan Growth Partners", size: "₹5 Cr – ₹40 Cr", ind: ["Industrial", "Logistics"], loc: "Hyderabad", v: true },
  { n: "Meridian Debt Fund", size: "₹1 Cr – ₹20 Cr", ind: ["Construction Finance"], loc: "Delhi NCR", v: true },
  { n: "Aravind HNI Syndicate", size: "₹40 L – ₹3 Cr", ind: ["Hospitality", "EV Infra"], loc: "Coimbatore", v: false },
];

function InvestorsPage() {
  const [q, setQ] = useState("");
  const [sent, setSent] = useState<string[]>([]);
  const list = useMemo(
    () => INVESTORS.filter((i) => `${i.n} ${i.loc} ${i.ind.join(" ")}`.toLowerCase().includes(q.toLowerCase())),
    [q],
  );

  return (
    <EliteAppShell title="Investor Network" subtitle="Verified HNIs, angels, VC firms, lenders and family offices">
      <div className={`${glass} relative p-4`}>
        <Search className="pointer-events-none absolute left-8 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search by name, sector or city…"
          className="w-full rounded-full border border-white/10 bg-white/[0.04] py-3 pl-11 pr-4 text-sm outline-none placeholder:text-white/30 focus:border-elite-accent/50"
        />
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {list.map((inv, i) => (
          <Reveal key={inv.n} delay={(i % 3) * 0.05}>
            <article className={`${glass} ${glassHover} h-full p-6`}>
              <div className="flex items-start justify-between gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-elite-accent/25 bg-elite-accent-soft text-sm font-bold text-elite-accent">
                  {inv.n.slice(0, 2).toUpperCase()}
                </div>
                {inv.v && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-elite-accent/40 bg-elite-accent-soft px-2.5 py-1 text-[10px] font-semibold text-elite-accent">
                    <BadgeCheck className="h-3 w-3" /> Verified
                  </span>
                )}
              </div>
              <h3 className="mt-4 text-sm font-semibold">{inv.n}</h3>
              <div className="mt-1 inline-flex items-center gap-1 text-[11px] text-white/45">
                <MapPin className="h-3 w-3" /> {inv.loc}
              </div>
              <div className="mt-4 text-[10px] uppercase tracking-widest text-white/35">Ticket size</div>
              <div className="text-sm font-semibold text-elite-accent">{inv.size}</div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {inv.ind.map((x) => (
                  <span key={x} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/60">{x}</span>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setSent((s) => (s.includes(inv.n) ? s : [...s, inv.n]))}
                className={`${eliteBtn} mt-6 w-full px-4 py-2.5 text-xs`}
                disabled={sent.includes(inv.n)}
              >
                <Send className="h-3.5 w-3.5" /> {sent.includes(inv.n) ? "Proposal sent" : "Send Proposal"}
              </button>
            </article>
          </Reveal>
        ))}
      </div>
    </EliteAppShell>
  );
}