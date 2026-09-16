// Four-stage cyclical diagram: Environmental Scanning -> Strategy Formulation
// -> Strategy Implementation -> Evaluation & Control -> (back to start).
export function StrategyCycleDiagram() {
  return (
    <svg
      viewBox="0 0 500 500"
      className="mx-auto w-full max-w-sm"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Cycle diagram of the strategic management process"
    >
      <circle cx="250" cy="250" r="190" className="fill-none stroke-ink-100" strokeWidth={2} strokeDasharray="6 6" />

      <rect x="170" y="20" width="160" height="60" rx="10" className="fill-brand-800" />
      <text x="250" y="45" textAnchor="middle" className="fill-white text-[12.5px] font-medium">
        Environmental
      </text>
      <text x="250" y="63" textAnchor="middle" className="fill-white text-[12.5px] font-medium">
        Scanning
      </text>

      <rect x="380" y="220" width="150" height="60" rx="10" className="fill-brand-600" />
      <text x="455" y="245" textAnchor="middle" className="fill-white text-[12.5px] font-medium">
        Strategy
      </text>
      <text x="455" y="263" textAnchor="middle" className="fill-white text-[12.5px] font-medium">
        Formulation
      </text>

      <rect x="170" y="420" width="160" height="60" rx="10" className="fill-brand-700" />
      <text x="250" y="445" textAnchor="middle" className="fill-white text-[12.5px] font-medium">
        Strategy
      </text>
      <text x="250" y="463" textAnchor="middle" className="fill-white text-[12.5px] font-medium">
        Implementation
      </text>

      <rect x="-30" y="220" width="150" height="60" rx="10" className="fill-brand-900" />
      <text x="45" y="245" textAnchor="middle" className="fill-white text-[12.5px] font-medium">
        Evaluation
      </text>
      <text x="45" y="263" textAnchor="middle" className="fill-white text-[12.5px] font-medium">
        &amp; Control
      </text>

      <defs>
        <marker id="cycle-arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" className="fill-ink-300" />
        </marker>
      </defs>
      <path
        d="M 300 80 A 190 190 0 0 1 435 220"
        className="fill-none stroke-ink-300"
        strokeWidth={2}
        markerEnd="url(#cycle-arrow)"
      />
      <path
        d="M 455 280 A 190 190 0 0 1 300 450"
        className="fill-none stroke-ink-300"
        strokeWidth={2}
        markerEnd="url(#cycle-arrow)"
      />
      <path
        d="M 200 450 A 190 190 0 0 1 65 280"
        className="fill-none stroke-ink-300"
        strokeWidth={2}
        markerEnd="url(#cycle-arrow)"
      />
      <path
        d="M 45 220 A 190 190 0 0 1 200 80"
        className="fill-none stroke-ink-300"
        strokeWidth={2}
        markerEnd="url(#cycle-arrow)"
      />
    </svg>
  );
}
