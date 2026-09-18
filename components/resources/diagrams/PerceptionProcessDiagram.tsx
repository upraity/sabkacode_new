import { StepperDiagram } from "./StepperDiagram";

export function PerceptionProcessDiagram() {
  return (
    <StepperDiagram
      steps={[["Selection"], ["Organization"], ["Interpretation"]]}
    />
  );
}
