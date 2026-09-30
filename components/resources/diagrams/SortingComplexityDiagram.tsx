import { StepperDiagram } from "./StepperDiagram";

export function SortingComplexityDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Split", "into halves/parts"],
        ["Recursively", "sort each part"],
        ["Combine", "(merge / already in place)"],
      ]}
    />
  );
}
