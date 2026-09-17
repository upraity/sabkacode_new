const functions = ["Marketing", "Finance", "Operations", "HR"];
const projects = ["Project A", "Project B", "Project C"];

export function MatrixStructureDiagram() {
  const originX = 150;
  const originY = 60;
  const colW = 90;
  const rowH = 50;

  return (
    <svg
      viewBox="0 0 520 300"
      className="mx-auto w-full max-w-lg"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      <rect x={originX - 110} y={originY - 40} width={100} height={30} rx={6} className="fill-brand-800" />
      <text x={originX - 60} y={originY - 20} textAnchor="middle" className="fill-white text-[11px] font-medium">
        CEO
      </text>

      {functions.map((f, i) => (
        <g key={f}>
          <rect x={originX + i * colW} y={originY - 40} width={colW - 8} height={30} rx={6} className="fill-brand-700" />
          <text
            x={originX + i * colW + (colW - 8) / 2}
            y={originY - 20}
            textAnchor="middle"
            className="fill-white text-[10.5px] font-medium"
          >
            {f}
          </text>
        </g>
      ))}

      {projects.map((p, ri) => (
        <g key={p}>
          <rect x={20} y={originY + ri * rowH} width={110} height={rowH - 8} rx={6} className="fill-ink-700" />
          <text x={75} y={originY + ri * rowH + (rowH - 8) / 2 + 4} textAnchor="middle" className="fill-white text-[10.5px] font-medium">
            {p}
          </text>
        </g>
      ))}

      {projects.map((_, ri) =>
        functions.map((_, ci) => (
          <rect
            key={`${ri}-${ci}`}
            x={originX + ci * colW}
            y={originY + ri * rowH}
            width={colW - 8}
            height={rowH - 8}
            rx={6}
            className="fill-brand-100 stroke-brand-300"
            strokeWidth={1}
          />
        ))
      )}
    </svg>
  );
}
