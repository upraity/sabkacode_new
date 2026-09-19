import { StepperDiagram } from "./StepperDiagram";

export function PerformanceManagementCycleDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Set", "Expectations"],
        ["Plan", "Performance"],
        ["Coach", "& Feedback"],
        ["Review", "Results"],
        ["Develop", "& Improve"],
      ]}
    />
  );
}
