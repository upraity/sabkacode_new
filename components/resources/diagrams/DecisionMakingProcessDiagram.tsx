import { StepperDiagram } from "./StepperDiagram";

export function DecisionMakingProcessDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Identify the", "Problem"],
        ["Gather", "Information"],
        ["Generate", "Alternatives"],
        ["Evaluate", "Alternatives"],
        ["Choose &", "Implement"],
        ["Review", "Outcome"],
      ]}
    />
  );
}
