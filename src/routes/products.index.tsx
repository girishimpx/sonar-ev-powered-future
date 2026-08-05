import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  Nav,
  Footer,
  FloatingCTAs,
  ContactStrip,
  btnPrimary,
  btnSecondary,
  PRODUCT_LINKS,
  SOLUTION_LINKS,
  MODEL_LINKS,
} from "@/components/site";
import { SITE_URL } from "@/components/product-page";
import lineup from "@/assets/charger-lineup.jpg";

const TITLE = "Products — EV Chargers, Software, CMS & SonarEV Elite";
const DESCRIPTION =
  "Everything Sonar EV builds in one place: 30–240 kW DC fast chargers, owner software, an OCPP charge point management system, and SonarEV Elite — the business OS for land, capital and growth.";

export const Route = createFileRoute("/products/")({
  component: ProductsPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/products` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/products` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Sonar EV products",
          itemListElement: PRODUCT_LINKS.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: p.label,
            description: p.desc,
            url: `${SITE_URL}${p.to}`,
          })),
        }),
      },
    ],
  }),
});

function ProductsPage() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Nav />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(255,255,255,0.09),transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
            The Sonar EV stack
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Hardware, software and the platform <br />
            <span className="text-white/50">that runs the business.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-white/60">{DESCRIPTION}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/chargers" className={btnPrimary}>
              Configure a charger <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/elite" className={btnSecondary}>
              Explore SonarEV Elite
            </Link>
          </div>
          <img
            src={lineup}
            alt="Sonar EV DC fast charger lineup"
            loading="lazy"
            className="mt-14 w-full rounded-2xl border border-white/10 object-cover"
          />
        </div>
      </section>

      <section className="border-b border-white/10 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Four products, one ecosystem.</h2>
          <p className="mt-3 max-w-2xl text-white/55">
            Each one works on its own — together they cover the full lifecycle of an EV charging business.
          </p>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {PRODUCT_LINKS.map(({ label, to, desc, icon: Icon, featured }, i) => (
              <Link
                key={to}
                to={to}
                className={`group relative overflow-hidden rounded-2xl border p-8 transition-all hover:-translate-y-0.5 ${
                  featured
                    ? "border-white/30 bg-white/[0.07]"
                    : "border-white/10 bg-white/[0.02] hover:border-white/25"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/5">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-4xl font-semibold text-white/10">0{i + 1}</span>
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <h3 className="text-2xl font-semibold tracking-tight">{label}</h3>
                  {featured && (
                    <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-black">
                      Flagship
                    </span>
                  )}
                </div>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/60">{desc}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.015] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Services around the products.</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SOLUTION_LINKS.map(({ label, to, desc, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className="rounded-2xl border border-white/10 bg-black/40 p-6 transition-colors hover:border-white/25"
              >
                <Icon className="h-5 w-5" />
                <div className="mt-4 font-semibold">{label}</div>
                <p className="mt-1.5 text-sm text-white/55">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Pick a business model.</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {MODEL_LINKS.map(({ label, to, desc, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/25"
              >
                <Icon className="h-5 w-5" />
                <div className="mt-4 text-lg font-semibold">{label}</div>
                <p className="mt-1.5 text-sm text-white/55">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactStrip>Not sure which product fits? Tell us about your site.</ContactStrip>
      <Footer />
      <FloatingCTAs />
    </div>
  );
}
