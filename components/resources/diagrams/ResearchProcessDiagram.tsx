import { StepperDiagram } from "./StepperDiagram";

export function ResearchProcessDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Define the", "Problem"],
        ["Research", "Design"],
        ["Data", "Collection"],
        ["Data", "Analysis"],
        ["Report", "Writing"],
      ]}
    />
  );
}
