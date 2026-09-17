import { Matrix2x2Diagram } from "./Matrix2x2Diagram";

export function AnsoffMatrixDiagram() {
  return (
    <Matrix2x2Diagram
      xAxisLabel="Products"
      yAxisLabel="Markets"
      leftLabel="Existing Products"
      rightLabel="New Products"
      topLabel="Existing Markets"
      bottomLabel="New Markets"
      topLeft={{ lines: ["Market", "Penetration"], toneClass: "fill-brand-700" }}
      topRight={{ lines: ["Product", "Development"], toneClass: "fill-brand-500" }}
      bottomLeft={{ lines: ["Market", "Development"], toneClass: "fill-ink-600" }}
      bottomRight={{ lines: ["Diversification"], toneClass: "fill-ink-800" }}
    />
  );
}
