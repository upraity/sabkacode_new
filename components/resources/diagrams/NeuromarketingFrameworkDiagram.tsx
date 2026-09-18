import { StepperDiagram } from "./StepperDiagram";

export function NeuromarketingFrameworkDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Marketing", "Stimulus"],
        ["Attention", "& Emotion"],
        ["Neural /", "Physiological Response"],
        ["Behavioural", "Evidence"],
        ["Marketing", "Decision"],
      ]}
    />
  );
}
