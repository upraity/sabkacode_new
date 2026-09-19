import { StepperDiagram } from "./StepperDiagram";

export function BusinessCycleDiagram() {
  return (
    <StepperDiagram steps={[["Expansion", "(Boom)"], ["Peak"], ["Recession", "(Contraction)"], ["Trough", "(Depression)"], ["Recovery"]]} />
  );
}
