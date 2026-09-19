import { StepperDiagram } from "./StepperDiagram";

export function CollectiveBargainingProcessDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Prepare", "Data & Objectives"],
        ["Present", "Proposals"],
        ["Negotiate", "Issues"],
        ["Agree", "Terms"],
        ["Implement", "& Review"],
      ]}
    />
  );
}
