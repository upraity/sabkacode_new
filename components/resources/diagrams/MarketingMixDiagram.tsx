import { HubSpokeDiagram } from "./HubSpokeDiagram";

export function MarketingMixDiagram() {
  return (
    <HubSpokeDiagram
      centerLines={["Marketing", "Mix (4 Ps)"]}
      spokes={[["Product"], ["Price"], ["Place"], ["Promotion"]]}
    />
  );
}
