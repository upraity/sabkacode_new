import { StepperDiagram } from "./StepperDiagram";

export function NormalizationFlowDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["UNF", "(raw table)"],
        ["1NF", "(atomic values)"],
        ["2NF", "(no partial dep.)"],
        ["3NF", "(no transitive dep.)"],
        ["BCNF", "(determinant = key)"],
      ]}
    />
  );
}
