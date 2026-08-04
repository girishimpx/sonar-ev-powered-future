import { createFileRoute } from "@tanstack/react-router";
import { MODELS, ModelPage } from "@/components/model-page";

const model = MODELS[1];

export const Route = createFileRoute("/models/foco")({
  component: () => <ModelPage model={model} />,
});
