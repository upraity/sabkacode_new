import { StepperDiagram } from "./StepperDiagram";

export function ConsumerBuyingProcessDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Problem", "Recognition"],
        ["Information", "Search"],
        ["Evaluation of", "Alternatives"],
        ["Purchase", "Decision"],
        ["Post-Purchase", "Behaviour"],
      ]}
    />
  );
}
