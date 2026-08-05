import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { ArrowUp, Sparkles } from "lucide-react";
import { EliteAppShell, glass, eliteBtnGhost } from "@/components/elite";

export const Route = createFileRoute("/elite/ai")({
  head: () => ({
    meta: [
      { title: "Sonar AI Advisor — SonarEV Elite" },
      { name: "description", content: "Ask Sonar AI about land valuation, ROI projections, financing options, approvals and project risk." },
      { property: "og:title", content: "Sonar AI Advisor — SonarEV Elite" },
      { property: "og:description", content: "Your always-on infrastructure business advisor." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AiPage,
});

type Msg = { role: "user" | "ai"; text: string };

const PROMPTS = [
  "Estimate ROI for a 4-acre EV plaza on NH-48",
  "What approvals do I need for a warehouse in Karnataka?",
  "Compare lease vs revenue-share for landowners",
  "Suggest financing for a ₹8 Cr logistics project",
];

const CANNED =
  "Here is a first-pass view. Based on comparable Elite projects, expect a 19–23% IRR with a 4.5-year payback, assuming 62% utilisation and a ₹24/kWh tariff. Key risks are DISCOM load sanction timelines and site frontage. I can build a full feasibility model and share it with your investor shortlist.";

function AiPage() {
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "ai", text: "I'm Sonar AI. Ask me about land value, ROI, approvals, financing or project risk." },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  const send = (text: string) => {
    const t = text.trim();
    if (!t || typing) return;
    setMsgs((m) => [...m, { role: "user", text: t }]);
    setInput("");
    setTyping(true);
    window.setTimeout(() => {
      setMsgs((m) => [...m, { role: "ai", text: CANNED }]);
      setTyping(false);
      endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 900);
  };

  return (
    <EliteAppShell title="Sonar AI Advisor" subtitle="Land valuation · ROI modelling · financing · risk analysis">
      <div className={`${glass} flex h-[calc(100vh-13rem)] flex-col p-5`}>
        <div className="flex-1 space-y-4 overflow-y-auto pr-1">
          {msgs.map((m, i) => (
            <div key={i} className={m.role === "user" ? "flex justify-end" : "flex gap-3"}>
              {m.role === "ai" && (
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-elite-accent/30 bg-elite-accent-soft">
                  <Sparkles className="h-4 w-4 text-elite-accent" />
                </span>
              )}
              <p
                className={
                  m.role === "user"
                    ? "max-w-[80%] rounded-2xl bg-elite-accent px-4 py-2.5 text-sm text-black"
                    : "max-w-[80%] text-sm leading-relaxed text-white/80"
                }
              >
                {m.text}
              </p>
            </div>
          ))}
          {typing && <div className="pl-11 text-sm text-white/40">Sonar AI is thinking…</div>}
          <div ref={endRef} />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {PROMPTS.map((p) => (
            <button key={p} type="button" onClick={() => send(p)} className={`${eliteBtnGhost} px-3 py-1.5 text-[11px]`}>
              {p}
            </button>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="mt-3 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-2 pl-4 focus-within:border-elite-accent/50"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Sonar AI…"
            className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-white/30"
          />
          <button type="submit" aria-label="Send" className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-elite-accent text-black">
            <ArrowUp className="h-4 w-4" />
          </button>
        </form>
      </div>
    </EliteAppShell>
  );
}