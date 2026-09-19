import { StepperDiagram } from "./StepperDiagram";

export function IndustrialRelationsSystemDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Government", "Labour Framework"],
        ["Employers", "& Management"],
        ["Employees", "& Unions"],
        ["Negotiation", "& Participation"],
        ["Outcomes", "& Stability"],
      ]}
    />
  );
}
