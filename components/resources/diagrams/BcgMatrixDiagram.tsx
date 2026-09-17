import { Matrix2x2Diagram } from "./Matrix2x2Diagram";

export function BcgMatrixDiagram() {
  return (
    <Matrix2x2Diagram
      xAxisLabel="Relative Market Share"
      yAxisLabel="Market Growth Rate"
      leftLabel="High Share"
      rightLabel="Low Share"
      topLabel="High Growth"
      bottomLabel="Low Growth"
      topLeft={{ lines: ["Stars"], toneClass: "fill-brand-700" }}
      topRight={{ lines: ["Question", "Marks"], toneClass: "fill-brand-500" }}
      bottomLeft={{ lines: ["Cash Cows"], toneClass: "fill-ink-600" }}
      bottomRight={{ lines: ["Dogs"], toneClass: "fill-ink-800" }}
    />
  );
}
