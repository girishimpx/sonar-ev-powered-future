export type PlanId = "starter" | "professional" | "elite";

export const PLAN_PRICES: Record<PlanId, number> = {
  starter: 999,
  professional: 4999,
  elite: 9999,
};

export const PLAN_LABELS: Record<PlanId, string> = {
  starter: "Starter",
  professional: "Professional",
  elite: "Elite",
};
