import { StepperDiagram } from "./StepperDiagram";

export function DecisionMakingProcessDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Identify", "the problem"],
        ["Gather", "information"],
        ["Develop", "alternatives"],
        ["Evaluate", "alternatives"],
        ["Select", "best option"],
        ["Implement", "& follow up"],
      ]}
    />
  );
}
