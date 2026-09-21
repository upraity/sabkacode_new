import { HubSpokeDiagram } from "./HubSpokeDiagram";

export function LpgModelDiagram() {
  return (
    <HubSpokeDiagram
      centerLines={["LPG", "Model (1991)"]}
      spokes={[["Liberalization"], ["Privatization"], ["Globalization"]]}
    />
  );
}
