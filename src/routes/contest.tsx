import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Gift, Trophy } from "lucide-react";
import { Nav, Footer, FloatingCTAs, ContactStrip, EnquiryForm, btnPrimary, btnSecondary } from "@/components/site";

export const Route = createFileRoute("/contest")({
  component: ContestPage,
  head: () => ({
    links: [{ rel: "canonical", href: "https://sonarev.app/contest" }],
    meta: [
      { property: "og:url", content: "https://sonarev.app/contest" },
      { title: "Win a Free EV Charging Station — SONAR.EV Contest" },
      { name: "description", content: "Join the SONAR.EV contest and win a fully funded EV charging station. We cover the entire investment — chargers, installation, software and AMC — and hand it over free." },
      { property: "og:title", content: "Win a Free EV Charging Station — SONAR.EV Contest" },
      { property: "og:description", content: "One winner gets a complete EV charging station, fully funded by SONAR.EV. Enter with your site details." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const steps = [
  { n: "01", t: "Enter", b: "Submit your details and the site you have in mind." },
  { n: "02", t: "Shortlist", b: "Our team shortlists entries on site quality, traffic and readiness." },
  { n: "03", t: "Site visit", b: "Shortlisted sites get a free feasibility survey from our engineers." },
  { n: "04", t: "Winner", b: "One winner receives a fully funded station, installed and commissioned free." },
];

const eligibility = [
  "You own or control a site in India (or have a signed lease)",
  "Grid connection available or feasible at the site",
  "Willing to allow SONAR.EV branding and network listing",
  "Able to support day-to-day site upkeep and security",
];

function ContestPage() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Nav />
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(255,255,255,0.10),transparent_70%)]" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <nav className="mb-6 text-xs text-white/40">
            <Link to="/" className="hover:text-white">Home</Link> <span className="mx-1">/</span> Contest
          </nav>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" /> Campaign live now
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Win a free EV charging station.{" "}
            <span className="text-white/40">We cover the entire investment.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-white/60">
            Enter the SONAR.EV contest with your site. One winner gets a complete charging station —
            chargers, installation, software and AMC — funded entirely by us and handed over free.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#enter" className={btnPrimary}><Gift className="h-4 w-4" /> Join the contest</a>
            <Link to="/funding" className={btnSecondary}>Need funding instead? <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">How to win</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">Four steps to a free station</h2>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="font-mono text-xs text-white/40">{s.n}</div>
                <div className="mt-3 text-sm font-semibold">{s.t}</div>
                <p className="mt-2 text-xs leading-relaxed text-white/60">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/20 bg-white text-black"><Trophy className="h-5 w-5" /></span>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">What the winner gets</h2>
            </div>
            <ul className="mt-7 space-y-2 text-sm text-white/75">
              {["A complete DC fast charging station at your site", "100% of the investment covered by SONAR.EV", "Installation, commissioning and grid coordination", "Charging management software and driver app", "Annual maintenance and 24/7 technical support", "Revenue share on every charging session"].map((t) => (
                <li key={t} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white" /> {t}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Who can enter</h2>
            <ul className="mt-7 space-y-2 text-sm text-white/75">
              {eligibility.map((t) => (
                <li key={t} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-white" /> {t}</li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl border border-white/10 bg-black p-5 text-xs leading-relaxed text-white/50">
              Entries are reviewed by SONAR.EV and the winner is selected at our discretion based on
              site suitability, expected utilisation and readiness. Full terms are shared with
              shortlisted entrants.
            </div>
          </div>
        </div>
      </section>

      <ContactStrip>Questions about the contest? Talk to the SONAR.EV team.</ContactStrip>

      <section id="enter" className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Enter the contest</h2>
            <p className="mt-3 text-white/60">Submit your site details — shortlisted entrants get a free feasibility survey.</p>
          </div>
          <EnquiryForm />
        </div>
      </section>

      <Footer />
      <FloatingCTAs />
    </div>
  );
}