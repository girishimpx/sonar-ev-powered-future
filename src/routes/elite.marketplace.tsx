import { createFileRoute } from "@tanstack/react-router";
import { EliteAppShell, Reveal, glass, glassHover, eliteBtn } from "@/components/elite";

export const Route = createFileRoute("/elite/marketplace")({
  head: () => ({
    meta: [
      { title: "Marketplace — SonarEV Elite" },
      { name: "description", content: "Buy chargers, equipment, services and ready-to-run business setups from vetted Elite suppliers." },
      { property: "og:title", content: "Elite Marketplace — SonarEV Elite" },
      { property: "og:description", content: "Equipment, services and turnkey business setups for members." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MarketplacePage,
});

const ITEMS = [
  { n: "120 kW DC Fast Charger", cat: "Equipment", p: "₹14.8 L", d: "Dual gun CCS2, OCPP 1.6J, 3-year AMC" },
  { n: "60 kW DC Fast Charger", cat: "Equipment", p: "₹8.6 L", d: "CCS2 + CHAdeMO, remote diagnostics" },
  { n: "Turnkey EV Plaza Setup", cat: "Business Setup", p: "₹42 L onward", d: "Land to commissioning in 90 days" },
  { n: "DPR & Feasibility Report", cat: "Service", p: "₹85,000", d: "Bankable report accepted by lenders" },
  { n: "Title Due Diligence", cat: "Service", p: "₹45,000", d: "30-year title search with legal opinion" },
  { n: "Solar Rooftop 250 kW", cat: "Equipment", p: "₹1.1 Cr", d: "Tier-1 panels, net metering support" },
];

function MarketplacePage() {
  return (
    <EliteAppShell title="Marketplace" subtitle="Equipment, services and turnkey setups from vetted suppliers">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {ITEMS.map((it, i) => (
          <Reveal key={it.n} delay={(i % 3) * 0.05}>
            <article className={`${glass} ${glassHover} flex h-full flex-col p-6`}>
              <span className="w-fit rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] uppercase tracking-widest text-white/45">
                {it.cat}
              </span>
              <h3 className="mt-4 text-sm font-semibold">{it.n}</h3>
              <p className="mt-1 text-xs leading-relaxed text-white/50">{it.d}</p>
              <div className="mt-4 text-lg font-semibold text-elite-accent">{it.p}</div>
              <button type="button" className={`${eliteBtn} mt-5 w-full px-4 py-2.5 text-xs`}>Enquire</button>
            </article>
          </Reveal>
        ))}
      </div>
    </EliteAppShell>
  );
}