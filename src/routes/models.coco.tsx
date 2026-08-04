import { createFileRoute } from "@tanstack/react-router";
import { MODELS, ModelPage } from "@/components/model-page";

const model = MODELS[0];

export const Route = createFileRoute("/models/coco")({
  component: () => <ModelPage model={model} />,
  head: () => ({
    meta: [
      { title: "COCO Model | SONAR.EV" },
      { name: "description", content: "Company Owned, Company Operated: SONAR.EV invests and operates, you lease your land and earn fixed monthly rental with zero investment." },
      { property: "og:title", content: "COCO Model | SONAR.EV" },
      { property: "og:description", content: "Company Owned, Company Operated: SONAR.EV invests and operates, you lease your land and earn fixed monthly rental with zero investment." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
