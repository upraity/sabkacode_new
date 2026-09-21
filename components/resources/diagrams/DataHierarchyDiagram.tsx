import { StepperDiagram } from "./StepperDiagram";

export function DataHierarchyDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Bit", "(0 / 1)"],
        ["Byte", "(8 bits)"],
        ["Field", "(Name)"],
        ["Record", "(one student)"],
        ["File", "(all students)"],
        ["Database", "(college)"],
      ]}
    />
  );
}
