import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage, getSolution, solutionHead } from "@/components/solution-page";

export const Route = createFileRoute("/solutions/project-report")({
  component: () => <SolutionPage slug="project-report" />,
  head: () =>
    solutionHead(
      getSolution("project-report"),
      "Detailed EV charging project report: charger, electrical, transformer, civil and installation costs plus ROI, profit and break-even analysis.",
    ),
});