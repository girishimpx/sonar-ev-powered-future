import { Link, useRouterState } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { useState, type ReactNode } from "react";
import {
  LayoutDashboard, MapPinned, Users, Handshake, FolderKanban, Banknote,
  Store, MessagesSquare, FileText, Sparkles, Settings, Menu, X, ArrowRight,
} from "lucide-react";
import logoAsset from "@/assets/sonar-logo.png.asset.json";

/* ------------------------------ Design atoms ------------------------------ */

export const glass =
  "rounded-[22px] border border-white/10 bg-white/[0.04] backdrop-blur-xl";

export const glassHover =
  "transition-all duration-300 hover:border-elite-accent/40 hover:bg-white/[0.07] hover:-translate-y-1";

export const eliteBtn =
  "group inline-flex items-center justify-center gap-2 rounded-full bg-elite-accent px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:shadow-[0_0_44px_-6px_var(--color-elite-accent)] active:scale-[0.98]";

export const eliteBtnGhost =
  "group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-white/35 hover:bg-white/[0.09] active:scale-[0.98]";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-xl bg-gradient-to-r from-white/[0.05] via-white/[0.12] to-white/[0.05] ${className}`}
    />
  );
}

export function EliteBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-elite-accent/30 bg-elite-accent-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-elite-accent">
      {children}
    </span>
  );
}

/* ------------------------------- Background ------------------------------- */

export function MeshBackground() {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-40 -top-40 h-[38rem] w-[38rem] rounded-full bg-elite-accent/15 blur-[140px]"
        animate={reduce ? undefined : { x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-40 top-20 h-[34rem] w-[34rem] rounded-full bg-white/10 blur-[150px]"
        animate={reduce ? undefined : { x: [0, -50, 0], y: [0, 60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(70%_60%_at_50%_20%,black,transparent)]" />
      {!reduce &&
        PARTICLES.map((p, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-elite-accent/70 shadow-[0_0_12px_2px_var(--color-elite-accent)]"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.15, 0.9, 0.15] }}
            transition={{ duration: p.d, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
          />
        ))}
    </div>
  );
}

const PARTICLES = [
  { x: 12, y: 30, d: 7, delay: 0 }, { x: 28, y: 68, d: 9, delay: 1.2 },
  { x: 44, y: 22, d: 8, delay: 0.6 }, { x: 61, y: 55, d: 10, delay: 2 },
  { x: 74, y: 34, d: 7.5, delay: 1.6 }, { x: 88, y: 62, d: 9.5, delay: 0.3 },
  { x: 19, y: 84, d: 8.5, delay: 2.4 }, { x: 52, y: 88, d: 11, delay: 1 },
];

/* --------------------------------- Chrome -------------------------------- */

export function EliteLogo() {
  return (
    <Link to="/elite" className="inline-flex items-center gap-2" aria-label="SonarEV Elite">
      <img src={logoAsset.url} alt="SonarEV" width={140} height={40} className="h-6 w-auto object-contain" />
      <span className="rounded-md border border-elite-accent/40 bg-elite-accent-soft px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-elite-accent">
        Elite
      </span>
    </Link>
  );
}

export function EliteTopNav() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Platform", href: "#why" },
    { label: "Sonar AI", href: "#ai" },
    { label: "How it works", href: "#how" },
    { label: "Pricing", href: "#pricing" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-elite-bg/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <EliteLogo />
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-sm text-white/60 transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
          <Link to="/elite/dashboard" className="text-sm text-white/60 transition-colors hover:text-white">
            Dashboard
          </Link>
        </nav>
        <div className="hidden md:block">
          <Link to="/elite/dashboard" className={eliteBtn}>
            Become Elite <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
        <button
          type="button"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-white/10 p-2 text-white md:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/5 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-sm text-white/70">
                {l.label}
              </a>
            ))}
            <Link to="/elite/dashboard" className={`${eliteBtn} mt-2`}>Become Elite</Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function EliteFooter() {
  return (
    <footer className="border-t border-white/5 bg-elite-bg">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <EliteLogo />
          <p className="mt-4 max-w-xs text-sm text-white/45">
            The business operating system for land, investment and growth.
          </p>
        </div>
        <FooterCol title="Platform" items={[["Dashboard", "/elite/dashboard"], ["Land", "/elite/land"], ["Investors", "/elite/investors"], ["Projects", "/elite/projects"]]} />
        <FooterCol title="Network" items={[["Community", "/elite/community"], ["AI Advisor", "/elite/ai"], ["Pricing", "/elite"]]} />
        <FooterCol title="Company" items={[["Sonar EV", "/"], ["Contact", "/contact"], ["Blog", "/blog"]]} />
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-white/35">
        © {new Date().getFullYear()} SonarEV Elite. Membership by application.
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-widest text-white/40">{title}</div>
      <ul className="mt-4 space-y-2.5 text-sm text-white/60">
        {items.map(([label, to]) => (
          <li key={label}>
            <Link to={to} className="transition-colors hover:text-elite-accent">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------- App shell -------------------------------- */

export const APP_NAV = [
  { label: "Dashboard", to: "/elite/dashboard", icon: LayoutDashboard },
  { label: "Land", to: "/elite/land", icon: MapPinned },
  { label: "Investors", to: "/elite/investors", icon: Users },
  { label: "Partners", to: "/elite/partners", icon: Handshake },
  { label: "Projects", to: "/elite/projects", icon: FolderKanban },
  { label: "Funding", to: "/elite/funding", icon: Banknote },
  { label: "Marketplace", to: "/elite/marketplace", icon: Store },
  { label: "Community", to: "/elite/community", icon: MessagesSquare },
  { label: "Documents", to: "/elite/documents", icon: FileText },
  { label: "AI Advisor", to: "/elite/ai", icon: Sparkles },
  { label: "Settings", to: "/elite/settings", icon: Settings },
] as const;

export function EliteAppShell({
  title,
  subtitle,
  action,
  children,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="relative min-h-screen bg-elite-bg text-white antialiased">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(60%_45%_at_15%_0%,rgba(0,230,118,0.10),transparent_70%)]" />
      <div className="relative flex">
        {/* sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-50 w-64 shrink-0 border-r border-white/8 bg-elite-bg/95 px-4 py-5 backdrop-blur-xl transition-transform duration-300 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex items-center justify-between">
            <EliteLogo />
            <button type="button" onClick={() => setOpen(false)} className="text-white/50 lg:hidden" aria-label="Close menu">
              <X className="h-4 w-4" />
            </button>
          </div>
          <nav className="mt-7 space-y-1">
            {APP_NAV.map((item) => {
              const active = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all duration-200 ${
                    active
                      ? "bg-elite-accent-soft text-elite-accent shadow-[inset_0_0_0_1px_rgba(0,230,118,0.25)]"
                      : "text-white/55 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  <item.icon className="h-4 w-4 shrink-0" />
                  <span className="truncate">{item.label}</span>
                </Link>
              );
            })}
          </nav>
          <div className={`${glass} mt-6 p-4`}>
            <div className="text-xs font-semibold text-white">Elite membership</div>
            <p className="mt-1 text-[11px] leading-relaxed text-white/50">Renews 12 Sep. Unlimited access active.</p>
            <Link to="/elite" className="mt-3 inline-flex text-[11px] font-semibold text-elite-accent">Manage plan →</Link>
          </div>
        </aside>

        {open && (
          <button aria-label="Close overlay" onClick={() => setOpen(false)} className="fixed inset-0 z-40 bg-black/60 lg:hidden" />
        )}

        <main className="min-w-0 flex-1">
          <header className="sticky top-0 z-30 border-b border-white/8 bg-elite-bg/75 backdrop-blur-xl">
            <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8">
              <button type="button" onClick={() => setOpen(true)} aria-label="Open menu" className="rounded-lg border border-white/10 p-2 lg:hidden">
                <Menu className="h-4 w-4" />
              </button>
              <div className="min-w-0 lg:col-start-2">
                <h1 className="truncate text-lg font-semibold tracking-tight sm:text-xl">{title}</h1>
                {subtitle && <p className="truncate text-xs text-white/45">{subtitle}</p>}
              </div>
              <div className="shrink-0">{action}</div>
            </div>
          </header>
          <div className="px-5 py-6 sm:px-8 sm:py-8">{children}</div>
        </main>
      </div>
    </div>
  );
}