import { createFileRoute } from "@tanstack/react-router";
import {
  ProductShell,
  FeatureGrid,
  CheckList,
  FaqSection,
  productHead,
} from "@/components/product-page";
import cmsImage from "@/assets/elite-ai-dashboard.jpg";

export const Route = createFileRoute("/products/cms")({
  component: CmsPage,
  head: () =>
    productHead({
      title: "Sonar CMS — OCPP Charge Point Management System",
      description:
        "Sonar CMS is an OCPP 1.6J / 2.0.1 charge point management system for networks: remote control, smart load management, roaming, pricing engines, diagnostics and 99%+ uptime monitoring.",
      path: "/products/cms",
    }),
});

function CmsPage() {
  return (
    <ProductShell
      eyebrow="Sonar CMS"
      title="The control layer behind every charge point."
      subtitle="An OCPP-compliant charge point management system that keeps your network online — remote diagnostics, smart load management, pricing engines and roaming, at any scale."
      image={cmsImage}
      imageAlt="Sonar CMS network operations dashboard"
    >
      <FeatureGrid
        heading="Network operations, centralised."
        items={[
          { t: "OCPP 1.6J & 2.0.1", d: "Vendor-neutral protocol support so you can manage Sonar and third-party hardware in one network." },
          { t: "Remote control & diagnostics", d: "Start, stop, reset and firmware-update chargers remotely. Read fault codes before dispatching an engineer." },
          { t: "Smart load management", d: "Distribute available sanctioned load dynamically across guns so you never trip the connection." },
          { t: "Pricing & tariff engine", d: "Time-of-day, idle-fee, subscription and fleet-specific pricing rules applied network-wide." },
          { t: "Roaming & interoperability", d: "Expose your network to partner apps and aggregators, and accept their users at your stations." },
          { t: "Uptime monitoring & SLAs", d: "Health checks, automated alerts and SLA reporting to keep availability above 99%." },
        ]}
      />

      <CheckList
        heading="Everything an operator needs on day one."
        items={[
          "Multi-site, multi-operator hierarchy",
          "RFID, app and plug-and-charge authorisation",
          "Automated CDR generation and billing exports",
          "Energy meter validation and reconciliation",
          "Fleet accounts with pooled billing",
          "Open APIs and webhooks for your own systems",
          "Role-based admin with full audit history",
          "Data hosted in India, secured end to end",
        ]}
      />

      <FaqSection
        items={[
          { q: "Does Sonar CMS work with non-Sonar chargers?", a: "Yes. Any charger that speaks OCPP 1.6J or 2.0.1 can be onboarded onto the network." },
          { q: "What is the difference between Sonar CMS and Sonar Software?", a: "Sonar Software is the owner-facing dashboard for your revenue and sessions. Sonar CMS is the operator-grade control layer that manages the chargers themselves — protocols, load, firmware and network health." },
          { q: "Can I run a private fleet depot on it?", a: "Yes. Depot mode supports scheduled charging, pooled fleet billing and load balancing across the depot's sanctioned supply." },
          { q: "Do you support roaming with other networks?", a: "Yes, roaming and aggregator integrations are supported so your stations appear in partner apps." },
        ]}
      />
    </ProductShell>
  );
}
