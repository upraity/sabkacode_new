export function DemandSupplyCurveDiagram() {
  return (
    <svg viewBox="0 0 420 340" className="mx-auto w-full max-w-sm" xmlns="http://www.w3.org/2000/svg" role="img">
      {/* axes */}
      <line x1="50" y1="20" x2="50" y2="290" className="stroke-ink-400" strokeWidth={2} />
      <line x1="50" y1="290" x2="390" y2="290" className="stroke-ink-400" strokeWidth={2} />
      <text x="20" y="30" className="fill-ink-600 text-[11px] font-medium">Price</text>
      <text x="350" y="310" className="fill-ink-600 text-[11px] font-medium">Quantity</text>

      {/* demand curve (downward) */}
      <path d="M 60 40 L 370 260" className="stroke-brand-600" strokeWidth={2.5} fill="none" />
      <text x="330" y="245" className="fill-brand-700 text-[12px] font-semibold">Demand (D)</text>

      {/* supply curve (upward) */}
      <path d="M 90 270 L 350 50" className="stroke-ink-700" strokeWidth={2.5} fill="none" />
      <text x="300" y="70" className="fill-ink-800 text-[12px] font-semibold">Supply (S)</text>

      {/* equilibrium point */}
      <circle cx="219" cy="157" r="5" className="fill-brand-800" />
      <line x1="219" y1="157" x2="219" y2="290" className="stroke-ink-300" strokeDasharray="4 3" strokeWidth={1.5} />
      <line x1="50" y1="157" x2="219" y2="157" className="stroke-ink-300" strokeDasharray="4 3" strokeWidth={1.5} />
      <text x="225" y="150" className="fill-ink-800 text-[11px] font-semibold">Equilibrium (E)</text>
      <text x="205" y="305" className="fill-ink-500 text-[10px]">Qe</text>
      <text x="30" y="160" className="fill-ink-500 text-[10px]">Pe</text>
    </svg>
  );
}
