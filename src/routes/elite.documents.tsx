import { createFileRoute } from "@tanstack/react-router";
import { FileText, Download, Lock } from "lucide-react";
import { EliteAppShell, glass, glassHover, eliteBtn } from "@/components/elite";

export const Route = createFileRoute("/elite/documents")({
  head: () => ({
    meta: [
      { title: "Documents — SonarEV Elite" },
      { name: "description", content: "Secure vault for title deeds, approvals, agreements, DPRs and investor reports." },
      { property: "og:title", content: "Document Vault — SonarEV Elite" },
      { property: "og:description", content: "Encrypted storage for every project document." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DocumentsPage,
});

const DOCS = [
  { n: "Hubli NH-48 — Title Deed.pdf", p: "Hubli Highway EV Plaza", s: "2.4 MB", d: "12 Jun 2026" },
  { n: "DISCOM Load Sanction.pdf", p: "Hubli Highway EV Plaza", s: "820 KB", d: "28 Jun 2026" },
  { n: "Warehouse DPR v3.pdf", p: "Nelamangala Warehouse", s: "6.1 MB", d: "04 Jul 2026" },
  { n: "Investor Term Sheet.pdf", p: "Nelamangala Warehouse", s: "410 KB", d: "19 Jul 2026" },
  { n: "Solar Land Survey Report.pdf", p: "Chitradurga Solar Farm", s: "3.3 MB", d: "22 Jul 2026" },
];

function DocumentsPage() {
  return (
    <EliteAppShell
      title="Documents"
      subtitle="Encrypted vault · 5 documents across 3 projects"
      action={<button type="button" className={eliteBtn}>Upload</button>}
    >
      <div className={`${glass} divide-y divide-white/8 overflow-hidden`}>
        {DOCS.map((d) => (
          <div key={d.n} className={`${glassHover} flex items-center gap-4 p-5`}>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.05]">
              <FileText className="h-4 w-4 text-elite-accent" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-medium">{d.n}</div>
              <div className="truncate text-[11px] text-white/40">{d.p} · {d.s} · {d.d}</div>
            </div>
            <Lock className="hidden h-3.5 w-3.5 shrink-0 text-white/25 sm:block" />
            <button type="button" aria-label="Download" className="shrink-0 rounded-xl border border-white/10 p-2 text-white/60 transition-colors hover:border-elite-accent/50 hover:text-elite-accent">
              <Download className="h-3.5 w-3.5" />
            </button>
          </div>
        ))}
      </div>
    </EliteAppShell>
  );
}