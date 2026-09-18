import { StepperDiagram } from "./StepperDiagram";

export function MboProcessDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Set Joint", "Objectives"],
        ["Develop", "Action Plans"],
        ["Review &", "Monitor Progress"],
        ["Appraise & Reward", "Performance"],
      ]}
    />
  );
}
