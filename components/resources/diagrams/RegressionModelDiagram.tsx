import { StepperDiagram } from "./StepperDiagram";

export function RegressionModelDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Predictor", "X Variables"],
        ["Model", "Relationship"],
        ["Predicted", "Outcome Y"],
        ["Validate", "Error / Fit"],
      ]}
    />
  );
}
