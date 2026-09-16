// Org-chart style diagram: Board of Directors split into Executive,
// Non-Executive and Independent directors.
export function BoardCompositionDiagram() {
  return (
    <svg
      viewBox="0 0 560 220"
      className="mx-auto w-full max-w-md"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Diagram of board of directors composition: executive, non-executive and independent directors"
    >
      <rect x="200" y="10" width="160" height="45" rx="8" className="fill-brand-800" />
      <text x="280" y="37" textAnchor="middle" className="fill-white text-[13px] font-medium">
        Board of Directors
      </text>

      <line x1="280" y1="55" x2="280" y2="80" className="stroke-ink-300" strokeWidth={2} />
      <line x1="90" y1="80" x2="470" y2="80" className="stroke-ink-300" strokeWidth={2} />
      <line x1="90" y1="80" x2="90" y2="100" className="stroke-ink-300" strokeWidth={2} />
      <line x1="280" y1="80" x2="280" y2="100" className="stroke-ink-300" strokeWidth={2} />
      <line x1="470" y1="80" x2="470" y2="100" className="stroke-ink-300" strokeWidth={2} />

      <rect x="15" y="100" width="150" height="55" rx="8" className="fill-brand-600" />
      <text x="90" y="123" textAnchor="middle" className="fill-white text-[12px] font-medium">
        Executive
      </text>
      <text x="90" y="140" textAnchor="middle" className="fill-white text-[12px] font-medium">
        Directors (MD, CEO)
      </text>

      <rect x="205" y="100" width="150" height="55" rx="8" className="fill-brand-600" />
      <text x="280" y="123" textAnchor="middle" className="fill-white text-[12px] font-medium">
        Non-Executive
      </text>
      <text x="280" y="140" textAnchor="middle" className="fill-white text-[12px] font-medium">
        Directors
      </text>

      <rect x="395" y="100" width="150" height="55" rx="8" className="fill-brand-600" />
      <text x="470" y="123" textAnchor="middle" className="fill-white text-[12px] font-medium">
        Independent
      </text>
      <text x="470" y="140" textAnchor="middle" className="fill-white text-[12px] font-medium">
        Directors
      </text>

      <text x="90" y="180" textAnchor="middle" className="fill-ink-500 text-[10.5px]">
        Day-to-day management
      </text>
      <text x="280" y="180" textAnchor="middle" className="fill-ink-500 text-[10.5px]">
        Promoter nominees
      </text>
      <text x="470" y="180" textAnchor="middle" className="fill-ink-500 text-[10.5px]">
        No financial ties to co.
      </text>
    </svg>
  );
}
