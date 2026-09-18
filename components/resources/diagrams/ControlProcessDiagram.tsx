import { StepperDiagram } from "./StepperDiagram";

export function ControlProcessDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Set", "Standards"],
        ["Measure", "Performance"],
        ["Compare with", "Standards"],
        ["Take Corrective", "Action"],
      ]}
    />
  );
}
