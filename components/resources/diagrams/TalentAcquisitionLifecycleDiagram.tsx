import { StepperDiagram } from "./StepperDiagram";

export function TalentAcquisitionLifecycleDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Workforce", "Need"],
        ["Source", "Candidates"],
        ["Assess", "Evidence"],
        ["Select", "& Offer"],
        ["Onboard", "& Evaluate"],
      ]}
    />
  );
}
