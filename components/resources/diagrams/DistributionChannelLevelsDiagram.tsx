import { StepperDiagram } from "./StepperDiagram";

export function DistributionChannelLevelsDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Producer", "→ Consumer"],
        ["Producer", "→ Retailer → Consumer"],
        ["Producer", "→ Wholesaler → Retailer → Consumer"],
        ["Producer", "→ Agents / Intermediaries"],
      ]}
    />
  );
}
