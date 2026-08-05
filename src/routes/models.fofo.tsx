import { createFileRoute } from "@tanstack/react-router";
import { MODELS, ModelPage } from "@/components/model-page";

const model = MODELS[2];

export const Route = createFileRoute("/models/fofo")({
  component: () => <ModelPage model={model} />,
  head: () => ({
    links: [{ rel: "canonical", href: "https://sonar-ev-powered-future.lovable.app/models/fofo" }],
    meta: [
      { property: "og:url", content: "https://sonar-ev-powered-future.lovable.app/models/fofo" },
      { title: "FOFO Model | SONAR.EV" },
      { name: "description", content: "Franchise Owned, Franchise Operated: own and run your EV charging station and keep 95% of net revenue with SONAR.EV support." },
      { property: "og:title", content: "FOFO Model | SONAR.EV" },
      { property: "og:description", content: "Franchise Owned, Franchise Operated: own and run your EV charging station and keep 95% of net revenue with SONAR.EV support." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
