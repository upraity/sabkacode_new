export interface MatrixQuadrant {
  lines: string[];
  toneClass: string; // e.g. "fill-brand-800" — pass a literal Tailwind class
}

// Generic 2x2 strategy-matrix layout: a labelled x-axis, a labelled y-axis,
// and four coloured quadrants. Reused for SWOT, Porter's generic
// competitive strategies matrix, the BCG matrix, and the Ansoff matrix.
export function Matrix2x2Diagram({
  xAxisLabel,
  yAxisLabel,
  leftLabel,
  rightLabel,
  topLabel,
  bottomLabel,
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
}: {
  xAxisLabel: string;
  yAxisLabel: string;
  leftLabel: string;
  rightLabel: string;
  topLabel: string;
  bottomLabel: string;
  topLeft: MatrixQuadrant;
  topRight: MatrixQuadrant;
  bottomLeft: MatrixQuadrant;
  bottomRight: MatrixQuadrant;
}) {
  const gridX = 140;
  const gridY = 46;
  const cell = 170;

  const quadrants = [
    { ...topLeft, x: gridX, y: gridY },
    { ...topRight, x: gridX + cell, y: gridY },
    { ...bottomLeft, x: gridX, y: gridY + cell },
    { ...bottomRight, x: gridX + cell, y: gridY + cell },
  ];

  return (
    <svg
      viewBox="0 0 520 460"
      className="mx-auto w-full max-w-sm"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      {/* column headers */}
      <text x={gridX + cell / 2} y={gridY - 14} textAnchor="middle" className="fill-ink-500 text-[11px] font-medium">
        {leftLabel}
      </text>
      <text
        x={gridX + cell + cell / 2}
        y={gridY - 14}
        textAnchor="middle"
        className="fill-ink-500 text-[11px] font-medium"
      >
        {rightLabel}
      </text>

      {/* row headers */}
      <text
        x={gridX - 14}
        y={gridY + cell / 2}
        textAnchor="end"
        className="fill-ink-500 text-[11px] font-medium"
      >
        {topLabel}
      </text>
      <text
        x={gridX - 14}
        y={gridY + cell + cell / 2}
        textAnchor="end"
        className="fill-ink-500 text-[11px] font-medium"
      >
        {bottomLabel}
      </text>

      {/* quadrants */}
      {quadrants.map((q, i) => (
        <g key={i}>
          <rect
            x={q.x}
            y={q.y}
            width={cell - 4}
            height={cell - 4}
            rx={8}
            className={q.toneClass}
          />
          <text
            x={q.x + (cell - 4) / 2}
            y={q.y + (cell - 4) / 2 - (q.lines.length - 1) * 8}
            textAnchor="middle"
            className="fill-white text-[12px] font-semibold"
          >
            {q.lines.map((line, li) => (
              <tspan key={li} x={q.x + (cell - 4) / 2} dy={li === 0 ? 0 : 16}>
                {line}
              </tspan>
            ))}
          </text>
        </g>
      ))}

      {/* axis labels */}
      <text
        x={gridX + cell}
        y={gridY + 2 * cell + 28}
        textAnchor="middle"
        className="fill-ink-700 text-[12px] font-semibold"
      >
        {xAxisLabel}
      </text>
      <text
        x={40}
        y={gridY + cell}
        textAnchor="middle"
        className="fill-ink-700 text-[12px] font-semibold"
        transform={`rotate(-90 40 ${gridY + cell})`}
      >
        {yAxisLabel}
      </text>
    </svg>
  );
}
