import { StepperDiagram } from "./StepperDiagram";

export function SmartGoalsDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["S", "Specific"],
        ["M", "Measurable"],
        ["A", "Achievable"],
        ["R", "Relevant"],
        ["T", "Time-bound"],
      ]}
    />
  );
}
