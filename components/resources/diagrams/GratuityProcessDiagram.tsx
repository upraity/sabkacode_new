import { StepperDiagram } from "./StepperDiagram";

export function GratuityProcessDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Check", "Coverage"],
        ["Verify", "Service"],
        ["Determine", "Eligible Wages"],
        ["Calculate", "Benefit"],
        ["Process", "& Pay"],
      ]}
    />
  );
}
