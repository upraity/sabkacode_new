import { HubSpokeDiagram } from "./HubSpokeDiagram";

export function HardwareCategoriesDiagram() {
  return (
    <HubSpokeDiagram
      centerLines={["Computer", "Hardware"]}
      spokes={[["Input", "Devices"], ["Output", "Devices"], ["Storage", "Devices"], ["Processing", "(CPU)"]]}
    />
  );
}
