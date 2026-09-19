import { StepperDiagram } from "./StepperDiagram";

export function TalentManagementCycleDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Identify", "Talent Needs"],
        ["Attract", "& Acquire"],
        ["Develop", "Capabilities"],
        ["Engage", "& Retain"],
        ["Deploy", "& Succeed"],
      ]}
    />
  );
}
