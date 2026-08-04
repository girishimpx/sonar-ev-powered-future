import { createFileRoute } from "@tanstack/react-router";
import { MODELS, ModelPage } from "@/components/model-page";

const model = MODELS[0];

export const Route = createFileRoute("/models/coco")({
  component: () => <ModelPage model={model} />,
});
