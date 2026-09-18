import { StepperDiagram } from "./StepperDiagram";

export function WebAnalyticsCycleDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Measure", "Digital Events"],
        ["Segment", "Audience / Source"],
        ["Analyse", "Funnel / Trends"],
        ["Optimise", "Experience / Campaign"],
        ["Measure", "Again"],
      ]}
    />
  );
}
