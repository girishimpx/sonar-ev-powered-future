import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage, getSolution, solutionHead } from "@/components/solution-page";

export const Route = createFileRoute("/solutions/land-survey")({
  component: () => <SolutionPage slug="land-survey" />,
  head: () =>
    solutionHead(
      getSolution("land-survey"),
      "A-to-Z EV charging site assessment: load and transformer study, civil and layout planning, traffic analysis, competitor mapping and location scoring.",
    ),
});