import { PyramidDiagram } from "./PyramidDiagram";

export function EcologicalPyramidDiagram() {
  return (
    <PyramidDiagram
      levels={[
        ["Tertiary Consumers", "(Apex Predators)"],
        ["Secondary Consumers", "(Carnivores)"],
        ["Primary Consumers", "(Herbivores)"],
        ["Producers", "(Plants)"],
      ]}
    />
  );
}
