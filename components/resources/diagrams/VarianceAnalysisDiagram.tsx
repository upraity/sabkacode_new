import { HubSpokeDiagram } from "./HubSpokeDiagram";

export function VarianceAnalysisDiagram() {
  return (
    <HubSpokeDiagram
      centerLines={["Standard Cost", "Variances"]}
      spokes={[["Material", "Variance"], ["Labour", "Variance"], ["Overhead", "Variance"], ["Sales", "Variance"]]}
    />
  );
}
