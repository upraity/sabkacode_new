import { StepperDiagram } from "./StepperDiagram";

export function FoodChainDiagram() {
  return (
    <StepperDiagram
      steps={[["Sun", "(Energy Source)"], ["Producers", "(Plants)"], ["Primary", "Consumers"], ["Secondary", "Consumers"], ["Decomposers"]]}
    />
  );
}
