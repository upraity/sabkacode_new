import { StepperDiagram } from "./StepperDiagram";

export function SalesForceRecruitmentDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Job", "Analysis"],
        ["Recruit", "Candidates"],
        ["Screen &", "Select"],
        ["Onboard", "& Train"],
        ["Develop", "& Evaluate"],
      ]}
    />
  );
}
