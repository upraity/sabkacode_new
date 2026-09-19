import { StepperDiagram } from "./StepperDiagram";

export function SuccessionPlanningDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Identify", "Critical Roles"],
        ["Define", "Success Profile"],
        ["Assess", "Potential"],
        ["Develop", "Successors"],
        ["Review", "Readiness"],
      ]}
    />
  );
}
