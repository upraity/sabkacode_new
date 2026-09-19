export function CostCurvesDiagram() {
  return (
    <svg viewBox="0 0 420 320" className="mx-auto w-full max-w-sm" xmlns="http://www.w3.org/2000/svg" role="img">
      <line x1="50" y1="20" x2="50" y2="270" className="stroke-ink-400" strokeWidth={2} />
      <line x1="50" y1="270" x2="390" y2="270" className="stroke-ink-400" strokeWidth={2} />
      <text x="15" y="30" className="fill-ink-600 text-[11px] font-medium">Cost</text>
      <text x="350" y="290" className="fill-ink-600 text-[11px] font-medium">Output</text>

      {/* MC curve - steepest U */}
      <path d="M 80 240 Q 190 90 320 230" className="stroke-ink-800" strokeWidth={2.5} fill="none" />
      <text x="315" y="220" className="fill-ink-800 text-[11px] font-semibold">MC</text>

      {/* AC curve */}
      <path d="M 90 200 Q 220 130 360 200" className="stroke-brand-700" strokeWidth={2.5} fill="none" />
      <text x="330" y="190" className="fill-brand-700 text-[11px] font-semibold">AC</text>

      {/* AVC curve */}
      <path d="M 95 215 Q 220 155 350 215" className="stroke-brand-400" strokeWidth={2.5} fill="none" />
      <text x="295" y="222" className="fill-brand-500 text-[11px] font-semibold">AVC</text>
    </svg>
  );
}
