import { StepperDiagram } from "./StepperDiagram";

export function DistributionChannelDiagram() {
  return (
    <StepperDiagram
      steps={[["Manufacturer"], ["Wholesaler"], ["Retailer"], ["Consumer"]]}
    />
  );
}
