import { StepperDiagram } from "./StepperDiagram";

export function EvolutionOfManagementDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Classical", "Taylor, Fayol, Weber"],
        ["Human Relations", "Hawthorne studies"],
        ["Behavioural", "Maslow, McGregor"],
        ["Quantitative", "OR, statistics"],
        ["Systems /", "Contingency"],
        ["Modern", "TQM, e-management"],
      ]}
    />
  );
}
