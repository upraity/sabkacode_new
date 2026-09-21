export function EoqCurveDiagram() {
  return (
    <svg viewBox="0 0 420 300" className="mx-auto w-full max-w-sm" xmlns="http://www.w3.org/2000/svg" role="img">
      <line x1="45" y1="20" x2="45" y2="260" className="stroke-ink-400" strokeWidth={2} />
      <line x1="45" y1="260" x2="390" y2="260" className="stroke-ink-400" strokeWidth={2} />
      <text x="10" y="30" className="fill-ink-600 text-[11px] font-medium">Cost</text>
      <text x="345" y="280" className="fill-ink-600 text-[11px] font-medium">Order Qty</text>

      {/* ordering cost - downward curve */}
      <path d="M 60 60 Q 150 130 380 240" className="stroke-ink-700" strokeWidth={2.5} fill="none" />
      <text x="300" y="228" className="fill-ink-700 text-[10.5px] font-semibold">Ordering Cost</text>

      {/* carrying/holding cost - upward line */}
      <path d="M 60 240 L 380 60" className="stroke-brand-500" strokeWidth={2.5} fill="none" />
      <text x="290" y="80" className="fill-brand-600 text-[10.5px] font-semibold">Carrying Cost</text>

      {/* total cost - U shaped */}
      <path d="M 60 190 Q 220 40 380 190" className="stroke-brand-800" strokeWidth={2.5} fill="none" />
      <text x="235" y="55" className="fill-brand-800 text-[10.5px] font-semibold">Total Cost</text>

      <line x1="220" y1="95" x2="220" y2="260" className="stroke-ink-300" strokeDasharray="4 3" strokeWidth={1.5} />
      <text x="190" y="278" className="fill-ink-800 text-[10px] font-semibold">EOQ</text>
    </svg>
  );
}
