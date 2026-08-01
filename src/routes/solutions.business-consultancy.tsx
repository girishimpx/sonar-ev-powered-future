import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage, getSolution, solutionHead } from "@/components/solution-page";

export const Route = createFileRoute("/solutions/business-consultancy")({
  component: () => <SolutionPage slug="business-consultancy" />,
  head: () =>
    solutionHead(
      getSolution("business-consultancy"),
      "EV charging business consultancy in India: feasibility, market analysis, ROI, business model selection, approvals and growth strategy from SONAR.EV.",
    ),
});