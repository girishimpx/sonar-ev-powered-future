import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { EliteAppShell, glass, eliteBtn } from "@/components/elite";

export const Route = createFileRoute("/elite/settings")({
  head: () => ({
    meta: [
      { title: "Settings — SonarEV Elite" },
      { name: "description", content: "Manage your Elite profile, membership plan, notifications and privacy preferences." },
      { property: "og:title", content: "Settings — SonarEV Elite" },
      { property: "og:description", content: "Profile, plan, notifications and privacy controls." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SettingsPage,
});

function SettingsPage() {
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    "Deal alerts": true,
    "Investor messages": true,
    "Weekly market digest": false,
    "Public profile": true,
  });

  return (
    <EliteAppShell title="Settings" subtitle="Profile, membership and preferences">
      <div className="grid gap-4 lg:grid-cols-2">
        <div className={`${glass} p-6`}>
          <h2 className="text-sm font-semibold">Profile</h2>
          <div className="mt-5 space-y-4">
            {[
              { l: "Full name", v: "Rohan Mehta" },
              { l: "Company", v: "Mehta Infra Ventures" },
              { l: "Email", v: "rohan@mehtainfra.in" },
              { l: "Phone", v: "+91 70197 21320" },
            ].map((f) => (
              <label key={f.l} className="block">
                <span className="text-[11px] uppercase tracking-widest text-white/35">{f.l}</span>
                <input
                  defaultValue={f.v}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm outline-none focus:border-elite-accent/50"
                />
              </label>
            ))}
            <button type="button" className={`${eliteBtn} w-full px-4 py-2.5 text-xs`}>Save changes</button>
          </div>
        </div>

        <div className="space-y-4">
          <div className={`${glass} p-6`}>
            <h2 className="text-sm font-semibold">Membership</h2>
            <div className="mt-4 flex items-center justify-between rounded-2xl border border-elite-accent/30 bg-elite-accent-soft p-4">
              <div>
                <div className="text-sm font-semibold text-elite-accent">Professional</div>
                <div className="text-[11px] text-white/50">₹4,999 / month · renews 12 Sep 2026</div>
              </div>
              <button type="button" className={`${eliteBtn} px-4 py-2 text-xs`}>Upgrade</button>
            </div>
          </div>

          <div className={`${glass} p-6`}>
            <h2 className="text-sm font-semibold">Notifications &amp; privacy</h2>
            <ul className="mt-4 space-y-3">
              {Object.keys(toggles).map((k) => (
                <li key={k} className="flex items-center justify-between gap-3">
                  <span className="text-sm text-white/70">{k}</span>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={toggles[k]}
                    aria-label={k}
                    onClick={() => setToggles((t) => ({ ...t, [k]: !t[k] }))}
                    className={`h-6 w-11 shrink-0 rounded-full border transition-colors ${toggles[k] ? "border-elite-accent bg-elite-accent" : "border-white/15 bg-white/10"}`}
                  >
                    <span className={`block h-4 w-4 rounded-full bg-black transition-transform ${toggles[k] ? "translate-x-6" : "translate-x-1"}`} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </EliteAppShell>
  );
}