import { StepperDiagram } from "./StepperDiagram";

export function PlanningProcessDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Set", "Objectives"],
        ["Develop", "Premises"],
        ["Identify", "Alternatives"],
        ["Evaluate", "Alternatives"],
        ["Select Best", "Alternative"],
        ["Implement &", "Follow Up"],
      ]}
    />
  );
}
