import { Link } from "@tanstack/react-router";
import { ArrowRight, Mail, MessageCircle, Phone, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import logoAsset from "@/assets/sonar-logo.png.asset.json";

/* -------------------------------- Buttons -------------------------------- */

export const btnPrimary =
  "group inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_40px_-8px_rgba(255,255,255,0.6)] active:scale-[0.98]";

export const btnSecondary =
  "group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10 active:scale-[0.98]";

export const btnGhost =
  "inline-flex items-center gap-1.5 text-sm font-medium text-white/70 transition-colors hover:text-white";

/* --------------------------------- Logo --------------------------------- */

export function Logo({ className = "h-7" }: { className?: string }) {
  return (
    <Link to="/" className="inline-flex items-center" aria-label="Sonar EV — home">
      <img
        src={logoAsset.url}
        alt="Sonar EV"
        className={`${className} w-auto object-contain brightness-0 invert`}
        width={200}
        height={56}
      />
    </Link>
  );
}

/* ---------------------------------- Nav --------------------------------- */

const NAV_LINKS: Array<{ label: string; to?: string; href?: string }> = [
  { label: "Home", to: "/" },
  { label: "Chargers", to: "/chargers" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Industries", href: "/#industries" },
  { label: "Software", href: "/#software" },
  { label: "Contact", to: "/contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) =>
            l.to ? (
              <Link
                key={l.label}
                to={l.to}
                className="text-sm text-white/60 transition-colors hover:text-white [&.active]:text-white"
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ),
          )}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-medium text-white/80 transition-colors hover:border-white/30 hover:text-white"
          >
            <Phone className="h-3.5 w-3.5" /> Contact
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition-all hover:bg-white/90 hover:shadow-[0_0_25px_-8px_rgba(255,255,255,0.7)]"
          >
            Get Consultation <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-white/5 bg-black lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {NAV_LINKS.map((l) =>
              l.to ? (
                <Link
                  key={l.label}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm text-white/70 hover:text-white"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm text-white/70 hover:text-white"
                >
                  {l.label}
                </a>
              ),
            )}
          </div>
        </div>
      )}
    </header>
  );
}

/* --------------------------------- Footer -------------------------------- */

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo className="h-8" />
            <p className="mt-5 max-w-sm text-sm text-white/60">
              Sonar EV builds end-to-end EV charging infrastructure for India's
              businesses, properties, and fleets. Powering your future.
            </p>
            <Link to="/contact" className={`${btnPrimary} mt-6`}>
              Enquire now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div>
            <div className="text-xs font-medium uppercase tracking-widest text-white/40">
              Explore
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/" className="text-white/60 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/chargers" className="text-white/60 hover:text-white">Chargers</Link>
              </li>
              <li>
                <a href="/#solutions" className="text-white/60 hover:text-white">Solutions</a>
              </li>
              <li>
                <a href="/#software" className="text-white/60 hover:text-white">Software</a>
              </li>
              <li>
                <Link to="/contact" className="text-white/60 hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-medium uppercase tracking-widest text-white/40">
              Contact
            </div>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> hello@sonarev.in
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> +91 70197 21320
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" /> WhatsApp support
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Sonar EV. Powering your future.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------- Floating Contact CTAs ------------------------ */

export function FloatingCTAs() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <a
        href="https://wa.me/917019721320?text=Hi%20Sonar%20EV%2C%20I%27d%20like%20to%20know%20more%20about%20your%20EV%20chargers."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white text-black shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] transition-transform hover:scale-105"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <a
        href="tel:+917019721320"
        aria-label="Call Sonar EV"
        className="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] transition-transform hover:scale-105"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}

/* --------------------------- Contact Strip CTA --------------------------- */

export function ContactStrip({ children }: { children?: ReactNode }) {
  return (
    <section className="border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <div className="text-sm font-semibold text-white">
            {children ?? "Have a site in mind? Talk to a Sonar EV specialist."}
          </div>
          <div className="mt-0.5 text-xs text-white/50">
            Free consultation • Response within 24 hours
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="tel:+917019721320"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/90 transition-colors hover:border-white/30 hover:bg-white/10"
          >
            <Phone className="h-3.5 w-3.5" /> Call
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition-all hover:bg-white/90 hover:shadow-[0_0_25px_-8px_rgba(255,255,255,0.6)]"
          >
            Enquire <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Lead form -------------------------------- */

export function EnquiryForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  return sent ? (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center">
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-white/20 bg-white text-black">
        ✓
      </div>
      <h3 className="mt-5 text-xl font-semibold text-white">Request received</h3>
      <p className="mt-2 text-sm text-white/60">
        A Sonar EV specialist will reach out within 24 hours.
      </p>
    </div>
  ) : (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}
    >
      <Field label="Full name" name="name" required />
      <Field label="Phone" name="phone" type="tel" placeholder="+91" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="City" name="city" required />
      <div className={compact ? "" : "sm:col-span-2"}>
        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/50">
          Business / property type
        </label>
        <select
          required
          name="business"
          className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-white/40"
        >
          <option className="bg-black">Hotel / Resort</option>
          <option className="bg-black">Highway / Fuel Station</option>
          <option className="bg-black">Apartment / Residential</option>
          <option className="bg-black">Office / Commercial</option>
          <option className="bg-black">Mall / Retail</option>
          <option className="bg-black">Fleet Operator</option>
          <option className="bg-black">Dealership</option>
          <option className="bg-black">Other</option>
        </select>
      </div>
      <div className={compact ? "" : "sm:col-span-2"}>
        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/50">
          Project requirement
        </label>
        <textarea
          name="req"
          rows={3}
          placeholder="Tell us about your site, expected usage, or goals..."
          className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-white/40"
        />
      </div>
      <button type="submit" className={`${btnPrimary} ${compact ? "" : "sm:col-span-2"}`}>
        Get My Consultation <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/50">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-white/40"
      />
    </div>
  );
}