import { StepperDiagram } from "./StepperDiagram";

export function ConsumerDecisionProcessDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["1", "Need Recognition"],
        ["2", "Information Search"],
        ["3", "Evaluation"],
        ["4", "Purchase"],
        ["5", "Post-Purchase"],
      ]}
    />
  );
}
