import { StepperDiagram } from "./StepperDiagram";

export function WorkplaceSafetyCycleDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Identify", "Hazards"],
        ["Assess", "Risk"],
        ["Control", "Hazards"],
        ["Train", "& Monitor"],
        ["Review", "& Improve"],
      ]}
    />
  );
}
