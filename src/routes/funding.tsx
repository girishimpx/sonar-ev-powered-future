import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, IndianRupee, Trophy } from "lucide-react";
import { Nav, Footer, FloatingCTAs, ContactStrip, EnquiryForm, btnPrimary, btnSecondary } from "@/components/site";

export const Route = createFileRoute("/funding")({
  component: FundingPage,
  head: () => ({
    links: [{ rel: "canonical", href: "https://sonarev.app/funding" }],
    meta: [
      { property: "og:url", content: "https://sonarev.app/funding" },
      { title: "EV Charging Station Funding — Apply for Finance | SONAR.EV" },
      { name: "description", content: "Need funding to install an EV charging station in India? Apply to SONAR.EV for financing support, site feasibility and end-to-end installation." },
      { property: "og:title", content: "EV Charging Station Funding — Apply for Finance | SONAR.EV" },
      { property: "og:description", content: "Apply for funding support to build your EV charging station — financing partners, feasibility, hardware, software and AMC." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const steps = [
  { n: "01", t: "Apply", b: "Share your site, city and how much capital you can bring." },
  { n: "02", t: "Feasibility", b: "We assess demand, tariffs and expected returns for your location." },
  { n: "03", t: "Financing", b: "We connect you with our lending and investor partners with a ready project report." },
  { n: "04", t: "Build & earn", b: "We install and commission the station; you repay from station revenue." },
];

function FundingPage() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Nav />
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(255,255,255,0.08),transparent_70%)]" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <nav className="mb-6 text-xs text-white/40">
            <Link to="/" className="hover:text-white">Home</Link> <span className="mx-1">/</span> Funding
          </nav>
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Need funding to install an EV charging station?{" "}
            <span className="text-white/40">Apply here.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-white/60">
            Capital shouldn't stop a good site. Tell us about your location and we'll help structure
            the financing, then build and run the station with you.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#apply" className={btnPrimary}><IndianRupee className="h-4 w-4" /> Apply for funding</a>
            <Link to="/calculator" className={btnSecondary}>Estimate your earnings <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">How it works</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">From application to a live station</h2>
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

      <section className="border-y border-white/10 bg-white/[0.02] py-20">
        <div className="mx-auto grid max-w-5xl gap-6 px-6 sm:grid-cols-2">
          {["Site feasibility and demand review", "Bankable project report prepared for you", "Introductions to lending and investor partners", "Hardware, software, installation and AMC included"].map((t) => (
            <div key={t} className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-black px-5 py-4">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-white" />
              <span className="text-sm text-white/80">{t}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:flex sm:items-center sm:justify-between sm:gap-8">
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/20 bg-white text-black"><Trophy className="h-5 w-5" /></span>
              <div>
                <div className="text-lg font-semibold">No capital at all? Enter the contest.</div>
                <p className="mt-1 text-sm text-white/60">One winner gets a complete charging station fully funded by SONAR.EV — free.</p>
              </div>
            </div>
            <Link to="/contest" className={`${btnSecondary} mt-6 sm:mt-0`}>Join the contest <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <ContactStrip>Have a site in mind? Talk to a SONAR.EV funding specialist.</ContactStrip>

      <section id="apply" className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Apply for funding support</h2>
            <p className="mt-3 text-white/60">A specialist will review your site and respond within 24 hours.</p>
          </div>
          <EnquiryForm />
        </div>
      </section>

      <Footer />
      <FloatingCTAs />
    </div>
  );
}