import { StepperDiagram } from "./StepperDiagram";

export function SalesPlanningControlDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Set", "Objectives"],
        ["Forecast", "& Budget"],
        ["Plan", "Resources"],
        ["Implement", "Sales Plan"],
        ["Measure", "& Correct"],
      ]}
    />
  );
}
