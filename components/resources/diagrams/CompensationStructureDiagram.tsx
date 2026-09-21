import { HubSpokeDiagram } from "./HubSpokeDiagram";

export function CompensationStructureDiagram() {
  return (
    <HubSpokeDiagram
      centerLines={["Employee", "Compensation"]}
      spokes={[["Basic Pay"], ["Allowances"], ["Incentives"], ["Benefits &", "Perquisites"]]}
    />
  );
}
