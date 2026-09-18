import { StepperDiagram } from "./StepperDiagram";

export function ProductFunnelDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Reach", "/ Acquisition"],
        ["Activation", "First Value"],
        ["Engagement", "Repeated Use"],
        ["Retention", "Continued Use"],
        ["Expansion", "Repeat / Cross-sell"],
      ]}
    />
  );
}
