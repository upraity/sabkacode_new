const nodes = [
  { id: 1, x: 40, y: 150 },
  { id: 2, x: 160, y: 70 },
  { id: 3, x: 160, y: 230 },
  { id: 4, x: 290, y: 150 },
  { id: 5, x: 410, y: 150 },
];

const edges = [
  { from: 1, to: 2, label: "A (4)", critical: true },
  { from: 1, to: 3, label: "B (2)", critical: false },
  { from: 2, to: 4, label: "C (5)", critical: true },
  { from: 3, to: 4, label: "D (3)", critical: false },
  { from: 4, to: 5, label: "E (6)", critical: true },
];

export function NetworkDiagramCpm() {
  const find = (id: number) => nodes.find((n) => n.id === id)!;
  return (
    <svg viewBox="0 0 450 300" className="mx-auto w-full max-w-lg" xmlns="http://www.w3.org/2000/svg" role="img">
      <defs>
        <marker id="cpm-arrow" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" className="fill-ink-500" />
        </marker>
        <marker id="cpm-arrow-critical" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" className="fill-brand-700" />
        </marker>
      </defs>
      {edges.map((e, i) => {
        const a = find(e.from);
        const b = find(e.to);
        return (
          <g key={i}>
            <line
              x1={a.x + 16}
              y1={a.y}
              x2={b.x - 16}
              y2={b.y}
              className={e.critical ? "stroke-brand-700" : "stroke-ink-400"}
              strokeWidth={e.critical ? 3 : 2}
              markerEnd={e.critical ? "url(#cpm-arrow-critical)" : "url(#cpm-arrow)"}
            />
            <text
              x={(a.x + b.x) / 2}
              y={(a.y + b.y) / 2 - 10}
              textAnchor="middle"
              className={e.critical ? "fill-brand-700 text-[11px] font-semibold" : "fill-ink-500 text-[11px]"}
            >
              {e.label}
            </text>
          </g>
        );
      })}
      {nodes.map((n) => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r="16" className="fill-ink-800" />
          <text x={n.x} y={n.y + 4} textAnchor="middle" className="fill-white text-[11px] font-semibold">
            {n.id}
          </text>
        </g>
      ))}
      <text x="20" y="285" className="fill-brand-700 text-[10px] font-semibold">
        ─── Critical Path (longest duration, zero slack)
      </text>
    </svg>
  );
}
