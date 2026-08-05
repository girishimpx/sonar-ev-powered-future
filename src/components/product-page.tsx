import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import {
  Nav,
  Footer,
  FloatingCTAs,
  ContactStrip,
  btnPrimary,
  btnSecondary,
  PRODUCT_LINKS,
} from "@/components/site";

export const SITE_URL = "https://sonar-ev-powered-future.lovable.app";

export function productHead({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}) {
  const url = `${SITE_URL}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "product" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      ...(image
        ? [
            { property: "og:image", content: image },
            { name: "twitter:image", content: image },
          ]
        : []),
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: title.split(" — ")[0],
          description,
          brand: { "@type": "Brand", name: "Sonar EV" },
          url,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/products` },
            { "@type": "ListItem", position: 3, name: title.split(" — ")[0], item: url },
          ],
        }),
      },
    ],
  };
}

export function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-white/40">
      <Link to="/" className="hover:text-white">Home</Link>
      <ChevronRight className="h-3 w-3" />
      <Link to="/products" className="hover:text-white">Products</Link>
      <ChevronRight className="h-3 w-3" />
      <span className="text-white/70">{current}</span>
    </nav>
  );
}

export function ProductShell({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Nav />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(255,255,255,0.09),transparent_70%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <Breadcrumbs current={eyebrow} />
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
              {eyebrow}
            </div>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-xl text-white/60">{subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className={btnPrimary}>
                Talk to a specialist <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/calculator" className={btnSecondary}>
                Calculate your earnings
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <img src={image} alt={imageAlt} loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {children}

      <OtherProducts current={eyebrow} />
      <ContactStrip>Want a walkthrough? Book a 20-minute demo with Sonar EV.</ContactStrip>
      <Footer />
      <FloatingCTAs />
    </div>
  );
}

export function FeatureGrid({
  heading,
  items,
}: {
  heading: string;
  items: Array<{ t: string; d: string }>;
}) {
  return (
    <section className="border-b border-white/10 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{heading}</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f) => (
            <div key={f.t} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="text-base font-semibold">{f.t}</div>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CheckList({
  heading,
  items,
}: {
  heading: string;
  items: string[];
}) {
  return (
    <section className="border-b border-white/10 bg-white/[0.015] py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{heading}</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {items.map((i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-white/70">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-white" />
              {i}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function FaqSection({ items }: { items: Array<{ q: string; a: string }> }) {
  return (
    <section className="border-b border-white/10 py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight">Frequently asked</h2>
        <div className="mt-8 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
          {items.map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="cursor-pointer list-none text-sm font-medium text-white">
                {f.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function OtherProducts({ current }: { current: string }) {
  const others = PRODUCT_LINKS.filter((p) => p.label !== current);
  return (
    <section className="border-b border-white/10 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-semibold tracking-tight">Explore the rest of the platform</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.map(({ label, to, desc, icon: Icon, featured }) => (
            <Link
              key={to}
              to={to}
              className={`group rounded-2xl border p-6 transition-colors ${
                featured ? "border-white/30 bg-white/[0.06]" : "border-white/10 bg-white/[0.02] hover:border-white/25"
              }`}
            >
              <Icon className="h-5 w-5" />
              <div className="mt-4 font-semibold">{label}</div>
              <p className="mt-1.5 text-sm text-white/55">{desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm text-white">
                Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
