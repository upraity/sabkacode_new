import { StepperDiagram } from "./StepperDiagram";

export function EntrepreneurialProcessDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Idea", "Generation"],
        ["Opportunity", "Identification"],
        ["Business", "Plan"],
        ["Launch"],
        ["Growth &", "Sustainability"],
      ]}
    />
  );
}
