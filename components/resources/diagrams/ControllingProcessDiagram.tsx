import { StepperDiagram } from "./StepperDiagram";

export function ControllingProcessDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Set", "standards"],
        ["Measure", "performance"],
        ["Compare with", "standards"],
        ["Analyse", "deviations"],
        ["Take corrective", "action"],
      ]}
    />
  );
}
