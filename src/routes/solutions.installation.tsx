import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage, getSolution, solutionHead } from "@/components/solution-page";

export const Route = createFileRoute("/solutions/installation")({
  component: () => <SolutionPage slug="installation" />,
  head: () =>
    solutionHead(
      getSolution("installation"),
      "Turnkey EV charger installation and commissioning: civil supervision, electrical works, software and payment setup, safety compliance and staff training.",
    ),
});