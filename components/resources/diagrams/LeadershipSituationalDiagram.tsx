import { Matrix2x2Diagram } from "./Matrix2x2Diagram";

export function LeadershipSituationalDiagram() {
  return (
    <Matrix2x2Diagram
      xAxisLabel="Directive Behaviour"
      yAxisLabel="Supportive Behaviour"
      leftLabel="Low Directive"
      rightLabel="High Directive"
      topLabel="High Supportive"
      bottomLabel="Low Supportive"
      topLeft={{ lines: ["S3: Participating"], toneClass: "fill-brand-500" }}
      topRight={{ lines: ["S2: Selling"], toneClass: "fill-brand-700" }}
      bottomLeft={{ lines: ["S4: Delegating"], toneClass: "fill-ink-600" }}
      bottomRight={{ lines: ["S1: Telling"], toneClass: "fill-ink-800" }}
    />
  );
}
