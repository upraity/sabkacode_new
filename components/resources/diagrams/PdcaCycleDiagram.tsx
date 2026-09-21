import { StepperDiagram } from "./StepperDiagram";

export function PdcaCycleDiagram() {
  return <StepperDiagram steps={[["Plan"], ["Do"], ["Check"], ["Act"]]} />;
}
