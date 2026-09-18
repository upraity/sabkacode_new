import { StepperDiagram } from "./StepperDiagram";

export function CBDecisionJourneyDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Need", "Recognition"],
        ["Information", "Search"],
        ["Evaluate", "Alternatives"],
        ["Purchase", "Decision"],
        ["Post-Purchase", "Evaluation"],
      ]}
    />
  );
}
