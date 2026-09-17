import { Matrix2x2Diagram } from "./Matrix2x2Diagram";

export function SwotMatrixDiagram() {
  return (
    <Matrix2x2Diagram
      xAxisLabel="External  →  Internal"
      yAxisLabel="Helpful  →  Harmful"
      leftLabel="Internal Origin"
      rightLabel="External Origin"
      topLabel="Helpful"
      bottomLabel="Harmful"
      topLeft={{ lines: ["Strengths"], toneClass: "fill-brand-700" }}
      topRight={{ lines: ["Opportunities"], toneClass: "fill-brand-500" }}
      bottomLeft={{ lines: ["Weaknesses"], toneClass: "fill-ink-600" }}
      bottomRight={{ lines: ["Threats"], toneClass: "fill-ink-800" }}
    />
  );
}
