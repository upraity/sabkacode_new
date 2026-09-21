import { StepperDiagram } from "./StepperDiagram";

export function HrPlanningProcessDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Forecast", "Demand"],
        ["Forecast", "Supply"],
        ["Gap", "Analysis"],
        ["Action", "Plan"],
      ]}
    />
  );
}
