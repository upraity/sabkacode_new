import { StepperDiagram } from "./StepperDiagram";

export function TeamStagesDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Forming", "(meet)"],
        ["Storming", "(conflict)"],
        ["Norming", "(rules)"],
        ["Performing", "(results)"],
        ["Adjourning", "(close)"],
      ]}
    />
  );
}
