const activities = [
  { name: "A", start: 0, duration: 4 },
  { name: "B", start: 0, duration: 2 },
  { name: "C", start: 4, duration: 5 },
  { name: "D", start: 2, duration: 3 },
  { name: "E", start: 9, duration: 6 },
];

export function GanttChartDiagram() {
  const rowH = 34;
  const dayW = 22;
  const chartLeft = 60;

  return (
    <svg
      viewBox={`0 0 ${chartLeft + 16 * dayW} ${activities.length * rowH + 40}`}
      className="mx-auto w-full max-w-lg"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      {Array.from({ length: 16 }).map((_, i) => (
        <line
          key={i}
          x1={chartLeft + i * dayW}
          y1={10}
          x2={chartLeft + i * dayW}
          y2={activities.length * rowH + 20}
          className="stroke-ink-100"
          strokeWidth={1}
        />
      ))}
      {[0, 5, 10, 15].map((d) => (
        <text key={d} x={chartLeft + d * dayW} y={10} className="fill-ink-400 text-[9px]">
          Day {d}
        </text>
      ))}
      {activities.map((a, i) => (
        <g key={a.name}>
          <text x={20} y={30 + i * rowH + rowH / 2} className="fill-ink-700 text-[11px] font-medium">
            {a.name}
          </text>
          <rect
            x={chartLeft + a.start * dayW}
            y={20 + i * rowH}
            width={a.duration * dayW}
            height={18}
            rx={4}
            className="fill-brand-600"
          />
        </g>
      ))}
    </svg>
  );
}
