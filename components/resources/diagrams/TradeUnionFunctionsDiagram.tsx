import { StepperDiagram } from "./StepperDiagram";

export function TradeUnionFunctionsDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Represent", "Employees"],
        ["Bargain", "Collectively"],
        ["Support", "Grievances"],
        ["Protect", "Interests"],
        ["Communicate", "& Participate"],
      ]}
    />
  );
}
