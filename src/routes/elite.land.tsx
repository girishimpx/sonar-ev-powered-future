import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { BadgeCheck, Bookmark, MessageSquare, Search, MapPin } from "lucide-react";
import { EliteAppShell, Reveal, glass, glassHover, eliteBtn, eliteBtnGhost } from "@/components/elite";
import img1 from "@/assets/elite-land-1.jpg";
import img2 from "@/assets/elite-land-2.jpg";
import img3 from "@/assets/elite-land-3.jpg";

export const Route = createFileRoute("/elite/land")({
  head: () => ({
    meta: [
      { title: "Land Marketplace — SonarEV Elite" },
      { name: "description", content: "Search verified commercial, industrial, agricultural, EV charging, warehouse and solar land opportunities across India." },
      { property: "og:title", content: "Verified Land Marketplace — SonarEV Elite" },
      { property: "og:description", content: "Filter verified land by location, budget, area and project type." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandPage,
});

const TYPES = ["All", "Commercial", "Industrial", "Agriculture", "EV Charging", "Warehouse", "Solar", "Hotel", "Factory"] as const;

const LISTINGS = [
  { id: 1, t: "NH-48 Frontage Plot", loc: "Hubli, Karnataka", price: 3.1, area: 4.2, roi: "21%", type: "EV Charging", img: img1, verified: true },
  { id: 2, t: "Logistics Park Parcel", loc: "Hoskote, Bengaluru", price: 8.4, area: 6.0, roi: "18%", type: "Warehouse", img: img2, verified: true },
  { id: 3, t: "Open Solar Belt", loc: "Chitradurga", price: 4.4, area: 11, roi: "24%", type: "Solar", img: img3, verified: true },
  { id: 4, t: "Industrial Corner Plot", loc: "Belagavi", price: 2.2, area: 3.1, roi: "17%", type: "Industrial", img: img2, verified: false },
  { id: 5, t: "Highway Hospitality Site", loc: "Chikkaballapur", price: 6.9, area: 5.4, roi: "19%", type: "Hotel", img: img1, verified: true },
  { id: 6, t: "Agri Land with Borewell", loc: "Davangere", price: 1.4, area: 9.5, roi: "12%", type: "Agriculture", img: img3, verified: true },
  { id: 7, t: "City Retail Frontage", loc: "Mysuru", price: 5.2, area: 1.2, roi: "16%", type: "Commercial", img: img2, verified: true },
  { id: 8, t: "Factory Shed + Land", loc: "Tumakuru", price: 7.6, area: 4.8, roi: "20%", type: "Factory", img: img1, verified: false },
];

function LandPage() {
  const [q, setQ] = useState("");
  const [type, setType] = useState<string>("All");
  const [budget, setBudget] = useState(10);
  const [area, setArea] = useState(0);
  const [saved, setSaved] = useState<number[]>([]);

  const results = useMemo(
    () =>
      LISTINGS.filter(
        (l) =>
          (type === "All" || l.type === type) &&
          l.price <= budget &&
          l.area >= area &&
          (q.trim() === "" || `${l.t} ${l.loc}`.toLowerCase().includes(q.toLowerCase())),
      ),
    [q, type, budget, area],
  );

  return (
    <EliteAppShell title="Land Marketplace" subtitle={`${results.length} verified opportunities matching your filters`}>
      <div className={`${glass} p-5`}>
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search location or listing…"
            className="w-full rounded-full border border-white/10 bg-white/[0.04] py-3 pl-11 pr-4 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-elite-accent/50"
          />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {TYPES.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setType(t)}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all ${
                type === t
                  ? "border-elite-accent/60 bg-elite-accent-soft text-elite-accent"
                  : "border-white/10 bg-white/[0.03] text-white/55 hover:text-white"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <Range label="Max budget" value={`₹${budget} Cr`} min={1} max={10} step={0.5} v={budget} onChange={setBudget} />
          <Range label="Min area" value={`${area} acres`} min={0} max={12} step={0.5} v={area} onChange={setArea} />
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {results.map((l, i) => (
          <Reveal key={l.id} delay={(i % 3) * 0.05}>
            <article className={`${glass} ${glassHover} group h-full overflow-hidden`}>
              <div className="relative h-44 overflow-hidden">
                <img src={l.img} alt={l.t} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
                <div className="absolute left-3 top-3 flex gap-2">
                  <span className="rounded-full bg-black/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur">{l.type}</span>
                  {l.verified && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-elite-accent px-2.5 py-1 text-[10px] font-bold text-black">
                      <BadgeCheck className="h-3 w-3" /> Verified
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  aria-label="Save listing"
                  onClick={() => setSaved((s) => (s.includes(l.id) ? s.filter((x) => x !== l.id) : [...s, l.id]))}
                  className={`absolute right-3 top-3 rounded-full border p-2 backdrop-blur transition-all ${
                    saved.includes(l.id) ? "border-elite-accent bg-elite-accent text-black" : "border-white/20 bg-black/50 text-white hover:border-white/50"
                  }`}
                >
                  <Bookmark className="h-3.5 w-3.5" />
                </button>
              </div>
              <div className="p-5">
                <h3 className="text-sm font-semibold">{l.t}</h3>
                <div className="mt-1 inline-flex items-center gap-1 text-[11px] text-white/45">
                  <MapPin className="h-3 w-3" /> {l.loc}
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  <Stat l="Price" v={`₹${l.price} Cr`} />
                  <Stat l="Area" v={`${l.area} ac`} />
                  <Stat l="ROI" v={l.roi} accent />
                </div>
                <div className="mt-4 flex gap-2">
                  <button type="button" className={`${eliteBtn} flex-1 px-4 py-2.5 text-xs`}>
                    <MessageSquare className="h-3.5 w-3.5" /> Contact
                  </button>
                  <button
                    type="button"
                    onClick={() => setSaved((s) => (s.includes(l.id) ? s.filter((x) => x !== l.id) : [...s, l.id]))}
                    className={`${eliteBtnGhost} px-4 py-2.5 text-xs`}
                  >
                    {saved.includes(l.id) ? "Saved" : "Save"}
                  </button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {results.length === 0 && (
        <div className={`${glass} mt-5 p-10 text-center text-sm text-white/50`}>
          No listings match these filters. Widen your budget or area range.
        </div>
      )}
    </EliteAppShell>
  );
}

function Stat({ l, v, accent }: { l: string; v: string; accent?: boolean }) {
  return (
    <div className="rounded-xl border border-white/8 bg-white/[0.03] py-2">
      <div className="text-[10px] uppercase tracking-widest text-white/35">{l}</div>
      <div className={`text-sm font-semibold ${accent ? "text-elite-accent" : ""}`}>{v}</div>
    </div>
  );
}

function Range({
  label, value, min, max, step, v, onChange,
}: { label: string; value: string; min: number; max: number; step: number; v: number; onChange: (n: number) => void }) {
  return (
    <label className="block">
      <span className="flex items-center justify-between text-xs text-white/50">
        {label} <span className="font-semibold text-elite-accent">{value}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={v}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-elite-accent"
      />
    </label>
  );
}