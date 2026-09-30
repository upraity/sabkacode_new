import { StepperDiagram } from "./StepperDiagram";

export function ManagementFunctionsDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Planning", "decide in advance"],
        ["Organizing", "arrange resources"],
        ["Staffing", "fill positions"],
        ["Directing", "guide, motivate"],
        ["Controlling", "measure & correct"],
        ["Coordinating", "synchronise all"],
      ]}
    />
  );
}
