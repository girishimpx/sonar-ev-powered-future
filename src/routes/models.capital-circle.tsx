import { createFileRoute } from "@tanstack/react-router";
import { MODELS, ModelPage } from "@/components/model-page";

const model = MODELS[3];

export const Route = createFileRoute("/models/capital-circle")({
  component: () => <ModelPage model={model} />,
  head: () => ({
    meta: [
      { title: "Capital Circle Investor Model | SONAR.EV" },
      { name: "description", content: "Invest capital into SONAR.EV-managed EV charging assets - no land, no staffing, no daily operations." },
      { property: "og:title", content: "Capital Circle Investor Model | SONAR.EV" },
      { property: "og:description", content: "Invest capital into SONAR.EV-managed EV charging assets - no land, no staffing, no daily operations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
