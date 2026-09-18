import { StepperDiagram } from "./StepperDiagram";

export function ConsumerPerceptionProcessDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Exposure", "to Stimulus"],
        ["Attention", "Selection"],
        ["Organisation", "of Information"],
        ["Interpretation", "Meaning"],
        ["Response", "/ Behaviour"],
      ]}
    />
  );
}
