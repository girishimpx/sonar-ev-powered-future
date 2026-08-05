import { createFileRoute } from "@tanstack/react-router";
import {
  ProductShell,
  FeatureGrid,
  CheckList,
  FaqSection,
  productHead,
} from "@/components/product-page";
import dashboard from "@/assets/dashboard.jpg";

export const Route = createFileRoute("/products/software")({
  component: SoftwarePage,
  head: () =>
    productHead({
      title: "Sonar Software — EV Charging Owner App & Revenue Dashboard",
      description:
        "Sonar Software gives station owners live session tracking, tariff control, automatic payouts, GST-ready reports and uptime alerts from one dashboard on web and mobile.",
      path: "/products/software",
    }),
});

function SoftwarePage() {
  return (
    <ProductShell
      eyebrow="Sonar Software"
      title="Run your charging business from your phone."
      subtitle="Every Sonar EV station ships with owner software: live sessions, revenue, settlements, tariffs and uptime — in real time, on web and mobile."
      image={dashboard}
      imageAlt="Sonar EV owner software dashboard showing sessions and revenue"
    >
      <FeatureGrid
        heading="What the software does."
        items={[
          { t: "Live session monitoring", d: "See who is charging, at what power, for how long, and what it is earning — updated second by second." },
          { t: "Revenue & settlements", d: "Daily revenue, energy cost, admin fee and net payout, reconciled automatically to your bank account." },
          { t: "Tariff control", d: "Set your ₹/kWh, add peak and off-peak pricing, and run promotions per gun or per site." },
          { t: "Uptime & fault alerts", d: "Instant alerts on charger faults, connectivity loss or power issues, with ticket tracking to resolution." },
          { t: "GST-ready reporting", d: "Downloadable invoices, tax summaries and monthly statements your accountant can use as-is." },
          { t: "Multi-site rollup", d: "Own more than one station? Compare sites side by side and drill into any charger." },
        ]}
      />

      <CheckList
        heading="Built for the way Indian station owners actually work."
        items={[
          "Web and mobile — no installation needed",
          "UPI, card and wallet payments settled to you",
          "Per-charger and per-gun performance breakdowns",
          "Energy consumption vs. electricity bill tracking",
          "Customer usage patterns and peak hour analysis",
          "Role-based access for staff and site managers",
          "Export to CSV for your own reporting",
          "Included free with every Sonar EV franchise",
        ]}
      />

      <FaqSection
        items={[
          { q: "Does the software cost extra?", a: "No. Owner software is included with every Sonar EV charger deployed under our franchise models." },
          { q: "How fast are payouts?", a: "Customer payments are collected digitally and settled to your registered bank account on a regular cycle, with a full statement in the dashboard." },
          { q: "Can I set my own price per unit?", a: "Yes. You control your ₹/kWh tariff, including time-of-day pricing, from the dashboard." },
          { q: "Does it work with the mobile app used by drivers?", a: "Yes. Drivers discover, start and pay for sessions in the app; you see those sessions instantly in your dashboard." },
        ]}
      />
    </ProductShell>
  );
}
