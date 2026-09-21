import { StepperDiagram } from "./StepperDiagram";

export function WorkingCapitalCycleDiagram() {
  return (
    <StepperDiagram
      steps={[["Cash"], ["Raw", "Material"], ["Work-in-", "Progress"], ["Finished", "Goods"], ["Debtors /", "Receivables"], ["Back to", "Cash"]]}
    />
  );
}
