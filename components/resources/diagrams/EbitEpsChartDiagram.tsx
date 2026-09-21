export function EbitEpsChartDiagram() {
  return (
    <svg viewBox="0 0 420 300" className="mx-auto w-full max-w-sm" xmlns="http://www.w3.org/2000/svg" role="img">
      <line x1="45" y1="20" x2="45" y2="260" className="stroke-ink-400" strokeWidth={2} />
      <line x1="45" y1="260" x2="390" y2="260" className="stroke-ink-400" strokeWidth={2} />
      <text x="10" y="30" className="fill-ink-600 text-[11px] font-medium">EPS (₹)</text>
      <text x="345" y="280" className="fill-ink-600 text-[11px] font-medium">EBIT (₹)</text>

      {/* all-equity financing plan */}
      <line x1="45" y1="240" x2="380" y2="80" className="stroke-ink-700" strokeWidth={2.5} />
      <text x="290" y="100" className="fill-ink-700 text-[10.5px] font-semibold">Plan A: All Equity</text>

      {/* debt-equity financing plan - steeper, starts lower */}
      <line x1="120" y1="260" x2="380" y2="45" className="stroke-brand-600" strokeWidth={2.5} />
      <text x="270" y="60" className="fill-brand-700 text-[10.5px] font-semibold">Plan B: Debt + Equity</text>

      {/* indifference point */}
      <circle cx="228" cy="152" r="5" className="fill-brand-800" />
      <line x1="228" y1="152" x2="228" y2="260" className="stroke-ink-300" strokeDasharray="4 3" strokeWidth={1.5} />
      <text x="234" y="145" className="fill-ink-900 text-[10.5px] font-semibold">Indifference Point</text>
      <text x="200" y="278" className="fill-ink-500 text-[9.5px]">EBIT*</text>
    </svg>
  );
}
