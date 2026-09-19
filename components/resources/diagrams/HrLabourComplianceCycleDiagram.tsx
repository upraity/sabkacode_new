import { StepperDiagram } from "./StepperDiagram";

export function HrLabourComplianceCycleDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Identify", "Applicable Laws"],
        ["Map", "HR Processes"],
        ["Maintain", "Records"],
        ["Audit", "Compliance"],
        ["Correct", "& Monitor"],
      ]}
    />
  );
}
