import { HubSpokeDiagram } from "./HubSpokeDiagram";

export function PorterFiveForcesDiagram() {
  return (
    <HubSpokeDiagram
      centerLines={["Industry", "Rivalry"]}
      spokes={[
        ["Threat of", "New Entrants"],
        ["Bargaining Power", "of Suppliers"],
        ["Threat of", "Substitutes"],
        ["Bargaining Power", "of Buyers"],
      ]}
    />
  );
}
