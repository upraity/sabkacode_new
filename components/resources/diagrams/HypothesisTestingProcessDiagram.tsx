import { StepperDiagram } from "./StepperDiagram";

export function HypothesisTestingProcessDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["State H0 &", "H1"],
        ["Set Significance", "Level (α)"],
        ["Select the", "Right Test"],
        ["Compute Test", "Statistic"],
        ["Compare & take", "Decision"],
      ]}
    />
  );
}
