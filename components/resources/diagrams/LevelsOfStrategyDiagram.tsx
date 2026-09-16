// Pyramid diagram: Corporate -> Business -> Functional levels of strategy.
// Pure presentational SVG — no props needed. Colors come from the shared
// brand/ink Tailwind palette so it stays in sync with the rest of the site.
export function LevelsOfStrategyDiagram() {
  return (
    <svg
      viewBox="0 0 560 260"
      className="mx-auto w-full max-w-md"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Pyramid showing corporate, business and functional levels of strategy"
    >
      <polygon points="280,20 480,220 80,220" className="fill-none stroke-ink-200" strokeWidth={2} />

      <polygon points="280,20 350,90 210,90" className="fill-brand-800" />
      <text x="280" y="65" textAnchor="middle" className="fill-white text-[12px] font-medium">
        Corporate
      </text>

      <polygon points="210,90 350,90 400,155 160,155" className="fill-brand-600" />
      <text x="280" y="128" textAnchor="middle" className="fill-white text-[12px] font-medium">
        Business
      </text>

      <polygon points="160,155 400,155 480,220 80,220" className="fill-brand-200" />
      <text x="280" y="193" textAnchor="middle" className="fill-ink-900 text-[12px] font-medium">
        Functional
      </text>

      <text x="500" y="58" className="fill-ink-500 text-[11px]">
        Board / Top Mgmt
      </text>
      <text x="500" y="128" className="fill-ink-500 text-[11px]">
        SBU Heads
      </text>
      <text x="500" y="210" className="fill-ink-500 text-[11px]">
        Dept. Managers
      </text>
    </svg>
  );
}
