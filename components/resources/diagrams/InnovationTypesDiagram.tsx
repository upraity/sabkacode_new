import { HubSpokeDiagram } from "./HubSpokeDiagram";

export function InnovationTypesDiagram() {
  return (
    <HubSpokeDiagram
      centerLines={["Types of", "Innovation"]}
      spokes={[["Product", "Innovation"], ["Service", "Innovation"], ["Business Model", "Innovation"], ["Process", "Innovation"]]}
    />
  );
}
