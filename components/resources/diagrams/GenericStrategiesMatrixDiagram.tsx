import { Matrix2x2Diagram } from "./Matrix2x2Diagram";

export function GenericStrategiesMatrixDiagram() {
  return (
    <Matrix2x2Diagram
      xAxisLabel="Source of Advantage: Low Cost  vs  Uniqueness"
      yAxisLabel="Competitive Scope"
      leftLabel="Low Cost"
      rightLabel="Uniqueness"
      topLabel="Broad Target"
      bottomLabel="Narrow Target"
      topLeft={{ lines: ["Cost", "Leadership"], toneClass: "fill-brand-700" }}
      topRight={{ lines: ["Differentiation"], toneClass: "fill-brand-500" }}
      bottomLeft={{ lines: ["Cost Focus"], toneClass: "fill-ink-600" }}
      bottomRight={{ lines: ["Differentiation", "Focus"], toneClass: "fill-ink-800" }}
    />
  );
}
