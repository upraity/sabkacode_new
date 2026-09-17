import { HubSpokeDiagram } from "./HubSpokeDiagram";

export function BalancedScorecardDiagram() {
  return (
    <HubSpokeDiagram
      centerLines={["Vision &", "Strategy"]}
      spokes={[
        ["Financial", "Perspective"],
        ["Customer", "Perspective"],
        ["Internal Process", "Perspective"],
        ["Learning &", "Growth Perspective"],
      ]}
    />
  );
}
