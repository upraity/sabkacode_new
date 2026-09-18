import { StepperDiagram } from "./StepperDiagram";

export function ExpectancyTheoryDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Effort", "(Expectancy)"],
        ["Performance", "(Instrumentality)"],
        ["Outcome / Reward", "(Valence)"],
      ]}
    />
  );
}
