import { createFileRoute } from "@tanstack/react-router";
import { MODELS, ModelPage } from "@/components/model-page";

const model = MODELS[2];

export const Route = createFileRoute("/models/fofo")({
  component: () => <ModelPage model={model} />,
});
