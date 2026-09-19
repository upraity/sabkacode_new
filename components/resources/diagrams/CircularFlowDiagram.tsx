export function CircularFlowDiagram() {
  return (
    <svg viewBox="0 0 460 260" className="mx-auto w-full max-w-sm" xmlns="http://www.w3.org/2000/svg" role="img">
      <rect x="30" y="90" width="150" height="70" rx="10" className="fill-brand-700" />
      <text x="105" y="130" textAnchor="middle" className="fill-white text-[13px] font-semibold">
        Households
      </text>

      <rect x="280" y="90" width="150" height="70" rx="10" className="fill-brand-800" />
      <text x="355" y="130" textAnchor="middle" className="fill-white text-[13px] font-semibold">
        Firms
      </text>

      <defs>
        <marker id="flow-arrow" markerWidth="9" markerHeight="9" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" className="fill-ink-500" />
        </marker>
      </defs>

      <path d="M 180 105 L 280 105" className="stroke-ink-500" strokeWidth={2} markerEnd="url(#flow-arrow)" />
      <text x="230" y="95" textAnchor="middle" className="fill-ink-600 text-[10px]">
        Factor Services
      </text>

      <path d="M 280 145 L 180 145" className="stroke-ink-500" strokeWidth={2} markerEnd="url(#flow-arrow)" />
      <text x="230" y="165" textAnchor="middle" className="fill-ink-600 text-[10px]">
        Money (Wages, Rent, etc.)
      </text>

      <path d="M 355 160 L 355 210 L 105 210 L 105 160" className="stroke-brand-500" strokeWidth={2} fill="none" markerEnd="url(#flow-arrow)" />
      <text x="230" y="225" textAnchor="middle" className="fill-brand-600 text-[10px]">
        Goods &amp; Services flow (against Money spent on consumption)
      </text>
    </svg>
  );
}
