import { Matrix2x2Diagram } from "./Matrix2x2Diagram";

export function JohariWindowDiagram() {
  return (
    <Matrix2x2Diagram
      xAxisLabel="Known to Self  →  Not Known to Self"
      yAxisLabel="Known to Others  →  Not Known to Others"
      leftLabel="Known to Self"
      rightLabel="Not Known to Self"
      topLabel="Known to Others"
      bottomLabel="Not Known to Others"
      topLeft={{ lines: ["Open /", "Arena"], toneClass: "fill-brand-700" }}
      topRight={{ lines: ["Blind Spot"], toneClass: "fill-brand-500" }}
      bottomLeft={{ lines: ["Hidden /", "Facade"], toneClass: "fill-ink-600" }}
      bottomRight={{ lines: ["Unknown"], toneClass: "fill-ink-800" }}
    />
  );
}
