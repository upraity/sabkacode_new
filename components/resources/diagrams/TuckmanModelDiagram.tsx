import { StepperDiagram } from "./StepperDiagram";

export function TuckmanModelDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Forming"],
        ["Storming"],
        ["Norming"],
        ["Performing"],
        ["Adjourning"],
      ]}
    />
  );
}
