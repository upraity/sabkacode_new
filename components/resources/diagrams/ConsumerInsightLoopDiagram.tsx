import { StepperDiagram } from "./StepperDiagram";

export function ConsumerInsightLoopDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Collect", "Consumer Data"],
        ["Interpret", "Patterns / Needs"],
        ["Prioritise", "Insight"],
        ["Design", "Marketing Action"],
        ["Test", "Outcomes"],
      ]}
    />
  );
}
