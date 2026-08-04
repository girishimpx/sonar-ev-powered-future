import { createFileRoute } from "@tanstack/react-router";
import { MODELS, ModelPage } from "@/components/model-page";

const model = MODELS[3];

export const Route = createFileRoute("/models/capital-circle")({
  component: () => <ModelPage model={model} />,
});
