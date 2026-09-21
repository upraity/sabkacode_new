export function BreakEvenChartDiagram() {
  return (
    <svg viewBox="0 0 420 300" className="mx-auto w-full max-w-sm" xmlns="http://www.w3.org/2000/svg" role="img">
      <line x1="45" y1="20" x2="45" y2="260" className="stroke-ink-400" strokeWidth={2} />
      <line x1="45" y1="260" x2="390" y2="260" className="stroke-ink-400" strokeWidth={2} />
      <text x="10" y="30" className="fill-ink-600 text-[11px] font-medium">Cost / Revenue (₹)</text>
      <text x="345" y="280" className="fill-ink-600 text-[11px] font-medium">Units Sold</text>

      {/* fixed cost - horizontal line */}
      <line x1="45" y1="210" x2="380" y2="210" className="stroke-ink-500" strokeWidth={2} strokeDasharray="5 3" />
      <text x="290" y="203" className="fill-ink-600 text-[10px] font-medium">Fixed Cost</text>

      {/* total cost line - starts at fixed cost, rises */}
      <line x1="45" y1="210" x2="380" y2="60" className="stroke-ink-800" strokeWidth={2.5} />
      <text x="300" y="90" className="fill-ink-800 text-[10.5px] font-semibold">Total Cost</text>

      {/* total revenue line - starts at origin, rises steeper */}
      <line x1="45" y1="260" x2="380" y2="40" className="stroke-brand-600" strokeWidth={2.5} />
      <text x="300" y="55" className="fill-brand-700 text-[10.5px] font-semibold">Total Revenue</text>

      {/* break-even point */}
      <circle cx="222" cy="132" r="5" className="fill-brand-800" />
      <line x1="222" y1="132" x2="222" y2="260" className="stroke-ink-300" strokeDasharray="4 3" strokeWidth={1.5} />
      <text x="228" y="125" className="fill-ink-900 text-[10.5px] font-semibold">Break-Even Point (BEP)</text>
      <text x="205" y="278" className="fill-ink-500 text-[9.5px]">BEP units</text>
    </svg>
  );
}
