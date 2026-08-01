import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage, getSolution, solutionHead } from "@/components/solution-page";

export const Route = createFileRoute("/solutions/post-installation-inspection")({
  component: () => <SolutionPage slug="post-installation-inspection" />,
  head: () =>
    solutionHead(
      getSolution("post-installation-inspection"),
      "Post installation inspection for EV charging stations: charger health, electrical and thermal audits, software diagnostics and preventive maintenance.",
    ),
});