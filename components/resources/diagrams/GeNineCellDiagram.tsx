const cols = ["Strong", "Average", "Weak"];
const rows = ["High", "Medium", "Low"];

// zone per [row][col]: 0 = invest/grow, 1 = selective/hold, 2 = harvest/divest
const zoneGrid = [
  [0, 0, 1],
  [0, 1, 2],
  [1, 2, 2],
];

const zoneToneClass = ["fill-brand-700", "fill-brand-400", "fill-ink-700"];
const zoneLabel = ["Invest / Grow", "Selective / Hold", "Harvest / Divest"];

export function GeNineCellDiagram() {
  const gridX = 130;
  const gridY = 40;
  const cell = 110;

  return (
    <svg
      viewBox="0 0 520 460"
      className="mx-auto w-full max-w-sm"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      {cols.map((c, ci) => (
        <text
          key={c}
          x={gridX + ci * cell + cell / 2}
          y={gridY - 12}
          textAnchor="middle"
          className="fill-ink-500 text-[11px] font-medium"
        >
          {c}
        </text>
      ))}
      {rows.map((r, ri) => (
        <text
          key={r}
          x={gridX - 12}
          y={gridY + ri * cell + cell / 2 + 4}
          textAnchor="end"
          className="fill-ink-500 text-[11px] font-medium"
        >
          {r}
        </text>
      ))}

      {zoneGrid.map((row, ri) =>
        row.map((zone, ci) => (
          <rect
            key={`${ri}-${ci}`}
            x={gridX + ci * cell}
            y={gridY + ri * cell}
            width={cell - 3}
            height={cell - 3}
            className={zoneToneClass[zone]}
          />
        ))
      )}

      <text
        x={gridX + (3 * cell) / 2}
        y={gridY + 3 * cell + 30}
        textAnchor="middle"
        className="fill-ink-700 text-[12px] font-semibold"
      >
        Business Strength
      </text>
      <text
        x={40}
        y={gridY + (3 * cell) / 2}
        textAnchor="middle"
        className="fill-ink-700 text-[12px] font-semibold"
        transform={`rotate(-90 40 ${gridY + (3 * cell) / 2})`}
      >
        Industry Attractiveness
      </text>

      {zoneLabel.map((label, i) => (
        <g key={label}>
          <rect x={gridX} y={gridY + 3 * cell + 45 + i * 24} width={14} height={14} rx={3} className={zoneToneClass[i]} />
          <text x={gridX + 20} y={gridY + 3 * cell + 45 + i * 24 + 11} className="fill-ink-600 text-[11px]">
            {label}
          </text>
        </g>
      ))}
    </svg>
  );
}
