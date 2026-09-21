export function DecisionTreeDiagram() {
  return (
    <svg viewBox="0 0 560 320" className="mx-auto w-full max-w-lg" xmlns="http://www.w3.org/2000/svg" role="img">
      {/* decision node (square) */}
      <rect x="20" y="140" width="36" height="36" className="fill-brand-800" />
      <text x="38" y="130" textAnchor="middle" className="fill-ink-700 text-[10px] font-medium">Decision</text>

      {/* branches to chance nodes */}
      <line x1="56" y1="158" x2="180" y2="70" className="stroke-ink-400" strokeWidth={1.5} />
      <line x1="56" y1="158" x2="180" y2="250" className="stroke-ink-400" strokeWidth={1.5} />
      <text x="100" y="100" className="fill-ink-500 text-[10px]">Option A</text>
      <text x="100" y="225" className="fill-ink-500 text-[10px]">Option B</text>

      {/* chance nodes (circles) */}
      <circle cx="195" cy="70" r="18" className="fill-brand-600" />
      <circle cx="195" cy="250" r="18" className="fill-brand-600" />

      {/* outcomes from chance node A */}
      <line x1="213" y1="62" x2="340" y2="20" className="stroke-ink-300" strokeWidth={1.5} />
      <line x1="213" y1="78" x2="340" y2="120" className="stroke-ink-300" strokeWidth={1.5} />
      <text x="230" y="30" className="fill-ink-500 text-[9.5px]">High demand (0.6)</text>
      <text x="230" y="115" className="fill-ink-500 text-[9.5px]">Low demand (0.4)</text>
      <text x="345" y="18" className="fill-ink-800 text-[10px] font-semibold">Payoff: ₹80,000</text>
      <text x="345" y="118" className="fill-ink-800 text-[10px] font-semibold">Payoff: ₹20,000</text>

      {/* outcomes from chance node B */}
      <line x1="213" y1="242" x2="340" y2="200" className="stroke-ink-300" strokeWidth={1.5} />
      <line x1="213" y1="258" x2="340" y2="300" className="stroke-ink-300" strokeWidth={1.5} />
      <text x="230" y="212" className="fill-ink-500 text-[9.5px]">High demand (0.6)</text>
      <text x="230" y="290" className="fill-ink-500 text-[9.5px]">Low demand (0.4)</text>
      <text x="345" y="198" className="fill-ink-800 text-[10px] font-semibold">Payoff: ₹50,000</text>
      <text x="345" y="298" className="fill-ink-800 text-[10px] font-semibold">Payoff: ₹35,000</text>
    </svg>
  );
}
