// Generic step-by-step process diagram: boxes connected by arrows, left to
// right, snaking onto a new row after every 4 steps so longer processes
// (5-7 steps) still fit a readable width. Reused for any "process" or
// "stage model" framework — planning process, decision-making process,
// Tuckman's stages, Kurt Lewin's change model, Vroom's expectancy chain,
// recruitment process, control process, etc. — across any subject.
export function StepperDiagram({ steps }: { steps: string[][] }) {
  const perRow = steps.length > 4 ? Math.ceil(steps.length / 2) : steps.length;
  const boxW = 130;
  const boxH = 64;
  const gapX = 46;
  const gapY = 40;
  const marginX = 20;
  const marginY = 20;

  const rows: string[][][] = [];
  for (let i = 0; i < steps.length; i += perRow) {
    rows.push(steps.slice(i, i + perRow));
  }

  const width = marginX * 2 + perRow * boxW + (perRow - 1) * gapX;
  const height = marginY * 2 + rows.length * boxH + (rows.length - 1) * gapY;

  const toneClasses = ["fill-brand-700", "fill-brand-600"];

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="mx-auto w-full max-w-lg"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      <defs>
        <marker id="stepper-arrow" markerWidth="9" markerHeight="9" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" className="fill-ink-300" />
        </marker>
      </defs>

      {rows.map((row, ri) => {
        const y = marginY + ri * (boxH + gapY);
        const leftToRight = ri % 2 === 0;
        return (
          <g key={ri}>
            {row.map((lines, ci) => {
              const x = marginX + ci * (boxW + gapX);
              const stepNumber = ri * perRow + ci + 1;
              return (
                <g key={ci}>
                  {ci < row.length - 1 && (
                    <line
                      x1={leftToRight ? x + boxW : x}
                      y1={y + boxH / 2}
                      x2={leftToRight ? x + boxW + gapX : x - gapX}
                      y2={y + boxH / 2}
                      className="stroke-ink-300"
                      strokeWidth={2}
                      markerEnd="url(#stepper-arrow)"
                    />
                  )}
                  <rect x={x} y={y} width={boxW} height={boxH} rx={10} className={toneClasses[stepNumber % 2]} />
                  <text
                    x={x + boxW / 2}
                    y={y + boxH / 2 + 4 - (lines.length - 1) * 8}
                    textAnchor="middle"
                    className="fill-white text-[11px] font-medium"
                  >
                    {lines.map((line, li) => (
                      <tspan key={li} x={x + boxW / 2} dy={li === 0 ? 0 : 15}>
                        {line}
                      </tspan>
                    ))}
                  </text>
                  <circle cx={x + 12} cy={y - 4} r={11} className="fill-ink-800" />
                  <text x={x + 12} y={y - 1} textAnchor="middle" className="fill-white text-[10px] font-bold">
                    {stepNumber}
                  </text>
                </g>
              );
            })}
            {/* connector down to next row */}
            {rows[ri + 1] && (
              <line
                x1={leftToRight ? marginX + (row.length - 1) * (boxW + gapX) + boxW / 2 : marginX + boxW / 2}
                y1={y + boxH}
                x2={leftToRight ? marginX + (row.length - 1) * (boxW + gapX) + boxW / 2 : marginX + boxW / 2}
                y2={y + boxH + gapY}
                className="stroke-ink-300"
                strokeWidth={2}
                markerEnd="url(#stepper-arrow)"
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}
