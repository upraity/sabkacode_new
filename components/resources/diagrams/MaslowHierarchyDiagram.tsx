import { PyramidDiagram } from "./PyramidDiagram";

export function MaslowHierarchyDiagram() {
  return (
    <PyramidDiagram
      levels={[
        ["Self-", "Actualization"],
        ["Esteem"],
        ["Social /", "Belonging"],
        ["Safety"],
        ["Physiological"],
      ]}
    />
  );
}
