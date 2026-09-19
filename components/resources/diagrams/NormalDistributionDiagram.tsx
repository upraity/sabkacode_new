export function NormalDistributionDiagram() {
  return (
    <svg viewBox="0 0 420 260" className="mx-auto w-full max-w-sm" xmlns="http://www.w3.org/2000/svg" role="img">
      <line x1="30" y1="220" x2="390" y2="220" className="stroke-ink-400" strokeWidth={2} />
      <path
        d="M 40 218 C 100 218, 140 40, 210 40 C 280 40, 320 218, 380 218"
        className="stroke-brand-600"
        strokeWidth={2.5}
        fill="none"
      />
      <line x1="210" y1="40" x2="210" y2="220" className="stroke-ink-300" strokeDasharray="4 3" strokeWidth={1.5} />
      <text x="210" y="238" textAnchor="middle" className="fill-ink-700 text-[11px] font-medium">
        Mean (μ)
      </text>
      {[-3, -2, -1, 1, 2, 3].map((sd) => (
        <text
          key={sd}
          x={210 + sd * 55}
          y={238}
          textAnchor="middle"
          className="fill-ink-400 text-[9px]"
        >
          {sd > 0 ? `+${sd}σ` : `${sd}σ`}
        </text>
      ))}
    </svg>
  );
}
