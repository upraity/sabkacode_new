import { StepperDiagram } from "./StepperDiagram";

export function LogisticsFlowDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Supplier", "Materials"],
        ["Inbound", "Logistics"],
        ["Production", "/ Warehouse"],
        ["Outbound", "Distribution"],
        ["Customer", "& Returns"],
      ]}
    />
  );
}
