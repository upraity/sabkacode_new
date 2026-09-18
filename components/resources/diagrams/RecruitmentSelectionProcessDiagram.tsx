import { StepperDiagram } from "./StepperDiagram";

export function RecruitmentSelectionProcessDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Recruitment", "(sourcing candidates)"],
        ["Screening &", "Shortlisting"],
        ["Tests &", "Interviews"],
        ["Selection", "Decision"],
        ["Placement &", "Induction"],
      ]}
    />
  );
}
