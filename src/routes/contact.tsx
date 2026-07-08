import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MessageCircle, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { Nav, Footer, FloatingCTAs, EnquiryForm } from "@/components/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Sonar EV — EV Charging Infrastructure" },
      { name: "description", content: "Talk to Sonar EV for site consultation, DC fast charger enquiries, EV charging station setup and partnership opportunities across India." },
    ],
  }),
});

const channels = [
  {
    icon: Phone,
    label: "Call us",
    value: "+91 90000 00000",
    href: "tel:+919000000000",
    sub: "Mon–Sat, 9am – 8pm IST",
  },
  {
    icon: Mail,
    label: "Email us",
    value: "hello@sonarev.in",
    href: "mailto:hello@sonarev.in",
    sub: "Response within 24 hours",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat instantly",
    href: "https://wa.me/919000000000",
    sub: "Fastest way to reach us",
  },
];

function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Nav />
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(255,255,255,0.08),transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
              Get in touch
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Let's power your property.
            </h1>
            <p className="mt-6 max-w-xl text-white/60">
              Talk to a Sonar EV specialist about site consultation, charger selection, installation, and starting your EV charging business — anywhere in India.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.02] py-12">
        <div className="mx-auto grid max-w-7xl gap-3 px-6 sm:grid-cols-3">
          {channels.map(({ icon: Icon, label, value, sub, href }) => (
            <a
              key={label}
              href={href}
              className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-black p-6 transition-all hover:-translate-y-0.5 hover:border-white/30"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/15 bg-white/5">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-medium uppercase tracking-widest text-white/50">{label}</div>
                <div className="mt-1 truncate text-base font-semibold text-white">{value}</div>
                <div className="mt-0.5 text-xs text-white/50">{sub}</div>
              </div>
              <ArrowRight className="mt-2 h-4 w-4 shrink-0 text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:text-white" />
            </a>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">Consultation request</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Tell us about your site
            </h2>
            <p className="mt-4 text-white/60">
              Share a few details and a Sonar EV specialist will reach out within 24 hours with a tailored charger recommendation and proposal.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {[
                "Free site consultation & load study",
                "ROI model tailored to your site",
                "Hardware + software + AMC quote",
                "Deployment timeline & support plan",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2 text-white/70">
                  <CheckCircle2 className="h-4 w-4 text-white" /> {t}
                </li>
              ))}
            </ul>
            <div className="mt-10 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/60" />
                <div>
                  <div className="font-medium text-white">Sonar EV HQ</div>
                  <div className="text-white/50">Mumbai · Bengaluru · Delhi NCR</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-white/60" />
                <div>
                  <div className="font-medium text-white">Working hours</div>
                  <div className="text-white/50">Monday – Saturday · 9:00 – 20:00 IST</div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6 sm:p-10">
            <EnquiryForm />
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTAs />
    </div>
  );
}