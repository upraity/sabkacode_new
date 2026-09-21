import { PyramidDiagram } from "./PyramidDiagram";

export function MisPyramidDiagram() {
  return (
    <PyramidDiagram
      levels={[
        ["Executive Info.", "Systems (EIS)"],
        ["Decision Support", "Systems (DSS)"],
        ["Management Info.", "Systems (MIS)"],
        ["Transaction Processing", "Systems (TPS)"],
      ]}
    />
  );
}
