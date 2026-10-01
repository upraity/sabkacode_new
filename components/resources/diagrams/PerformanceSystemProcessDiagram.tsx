import { StepperDiagram } from "./StepperDiagram";

export function PerformanceSystemProcessDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Organizational", "direction"],
        ["Role goals", "and criteria"],
        ["Execution", "and monitoring"],
        ["Review", "and feedback"],
        ["Development", "and renewal"],
      ]}
    />
  );
}
