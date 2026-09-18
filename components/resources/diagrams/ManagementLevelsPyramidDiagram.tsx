import { PyramidDiagram } from "./PyramidDiagram";

export function ManagementLevelsPyramidDiagram() {
  return (
    <PyramidDiagram
      levels={[
        ["Top Management"],
        ["Middle Management"],
        ["First-Line / Supervisory", "Management"],
      ]}
    />
  );
}
