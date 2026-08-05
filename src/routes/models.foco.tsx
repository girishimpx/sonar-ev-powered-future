import { createFileRoute } from "@tanstack/react-router";
import { MODELS, ModelPage } from "@/components/model-page";

const model = MODELS[1];

export const Route = createFileRoute("/models/foco")({
  component: () => <ModelPage model={model} />,
  head: () => ({
    links: [{ rel: "canonical", href: "https://sonar-ev-powered-future.lovable.app/models/foco" }],
    meta: [
      { property: "og:url", content: "https://sonar-ev-powered-future.lovable.app/models/foco" },
      { title: "FOCO Model | SONAR.EV" },
      { name: "description", content: "Franchise Owned, Company Operated: you invest and own the station, SONAR.EV runs operations, staffing and maintenance." },
      { property: "og:title", content: "FOCO Model | SONAR.EV" },
      { property: "og:description", content: "Franchise Owned, Company Operated: you invest and own the station, SONAR.EV runs operations, staffing and maintenance." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
