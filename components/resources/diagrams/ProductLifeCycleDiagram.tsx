const phases = [
  { label: "Introduction", x: 90 },
  { label: "Growth", x: 190 },
  { label: "Maturity", x: 290 },
  { label: "Decline", x: 370 },
];

export function ProductLifeCycleDiagram() {
  return (
    <svg viewBox="0 0 440 300" className="mx-auto w-full max-w-sm" xmlns="http://www.w3.org/2000/svg" role="img">
      <line x1="50" y1="20" x2="50" y2="250" className="stroke-ink-400" strokeWidth={2} />
      <line x1="50" y1="250" x2="410" y2="250" className="stroke-ink-400" strokeWidth={2} />
      <text x="10" y="30" className="fill-ink-600 text-[11px] font-medium">Sales</text>
      <text x="370" y="270" className="fill-ink-600 text-[11px] font-medium">Time</text>

      <path
        d="M 55 245 C 100 245, 100 100, 150 70 C 220 30, 260 30, 300 55 C 340 80, 350 150, 400 220"
        className="stroke-brand-600"
        strokeWidth={2.5}
        fill="none"
      />

      {[70, 150, 250, 350].map((x, i) => (
        <line key={i} x1={x} y1="20" x2={x} y2="250" className="stroke-ink-100" strokeDasharray="3 3" strokeWidth={1} />
      ))}

      {phases.map((p) => (
        <text key={p.label} x={p.x} y={270} textAnchor="middle" className="fill-ink-600 text-[10px] font-medium">
          {p.label}
        </text>
      ))}
    </svg>
  );
}
