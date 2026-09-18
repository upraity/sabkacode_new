const states = [
  { label: "Parent", sub: "(taught concept — values, rules)", tone: "fill-brand-800" },
  { label: "Adult", sub: "(thought concept — logical, rational)", tone: "fill-brand-600" },
  { label: "Child", sub: "(felt concept — emotions, impulses)", tone: "fill-brand-400" },
];

export function TransactionalAnalysisDiagram() {
  const cx = 220;
  const r = 85;
  const gapY = 10;

  return (
    <svg
      viewBox="0 0 440 300"
      className="mx-auto w-full max-w-xs"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      {states.map((s, i) => {
        const cy = 50 + i * (r + gapY);
        return (
          <g key={s.label}>
            <ellipse cx={cx} cy={cy} rx={110} ry={40} className={s.tone} stroke="white" strokeWidth={1.5} />
            <text x={cx} y={cy - 2} textAnchor="middle" className="fill-white text-[13px] font-semibold">
              {s.label}
            </text>
            <text x={cx} y={cy + 14} textAnchor="middle" className="fill-white text-[9px]">
              {s.sub}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
