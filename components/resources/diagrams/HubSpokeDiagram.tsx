// Generic hub-and-spoke layout: one centre node connected to N nodes
// arranged evenly in a circle around it. Reused by several frameworks that
// share this exact shape (PESTEL, Porter's Five Forces, McKinsey 7-S,
// Balanced Scorecard) — each gets its own thin wrapper component (for the
// diagram registry) that just supplies the labels.
function NodeBox({
  x,
  y,
  lines,
  tone,
}: {
  x: number;
  y: number;
  lines: string[];
  tone: "hub" | "spoke";
}) {
  const w = 152;
  const h = Math.max(50, 20 + lines.length * 16);
  const fillClass = tone === "hub" ? "fill-brand-800" : "fill-brand-600";
  const firstDy = -(lines.length - 1) * 8 + 4;
  return (
    <g>
      <rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx={10} className={fillClass} />
      <text x={x} y={y} textAnchor="middle" className="fill-white text-[11.5px] font-medium">
        {lines.map((line, i) => (
          <tspan key={i} x={x} dy={i === 0 ? firstDy : 16}>
            {line}
          </tspan>
        ))}
      </text>
    </g>
  );
}

export function HubSpokeDiagram({
  centerLines,
  spokes,
}: {
  centerLines: string[];
  spokes: string[][];
}) {
  const size = 520;
  const cx = size / 2;
  const cy = size / 2;
  const radius = 195;

  const points = spokes.map((lines, i) => {
    const angle = (Math.PI * 2 * i) / spokes.length - Math.PI / 2;
    return { lines, x: cx + radius * Math.cos(angle), y: cy + radius * Math.sin(angle) };
  });

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className="mx-auto w-full max-w-sm"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      {points.map((p, i) => (
        <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} className="stroke-ink-200" strokeWidth={2} />
      ))}
      {points.map((p, i) => (
        <NodeBox key={i} x={p.x} y={p.y} lines={p.lines} tone="spoke" />
      ))}
      <NodeBox x={cx} y={cy} lines={centerLines} tone="hub" />
    </svg>
  );
}
