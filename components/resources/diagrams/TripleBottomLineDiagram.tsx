import { HubSpokeDiagram } from "./HubSpokeDiagram";

export function TripleBottomLineDiagram() {
  return (
    <HubSpokeDiagram
      centerLines={["Sustainable", "Business"]}
      spokes={[["People"], ["Planet"], ["Profit"]]}
    />
  );
}
