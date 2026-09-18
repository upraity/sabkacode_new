import { StepperDiagram } from "./StepperDiagram";

export function KurtLewinChangeDiagram() {
  return (
    <StepperDiagram
      steps={[["Unfreeze"], ["Change", "(Move)"], ["Refreeze"]]}
    />
  );
}
