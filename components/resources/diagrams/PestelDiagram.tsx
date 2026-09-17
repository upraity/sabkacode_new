import { HubSpokeDiagram } from "./HubSpokeDiagram";

export function PestelDiagram() {
  return (
    <HubSpokeDiagram
      centerLines={["Macro", "Environment", "(PESTEL)"]}
      spokes={[
        ["Political"],
        ["Economic"],
        ["Social"],
        ["Technological"],
        ["Environmental"],
        ["Legal"],
      ]}
    />
  );
}
