export default function RecurrenceExpansionDiagram() {
  return <svg viewBox="0 0 760 230" className="w-full h-auto" role="img" aria-label="Recurrence iteration">
    <rect x="45" y="35" width="150" height="50" rx="8" fill="none" stroke="currentColor"/><text x="120" y="66" textAnchor="middle">T(n)</text>
    <path d="M195 60 H285" stroke="currentColor"/>
    <rect x="285" y="35" width="170" height="50" rx="8" fill="none" stroke="currentColor"/><text x="370" y="66" textAnchor="middle">T(n/2) + work</text>
    <path d="M455 60 H545" stroke="currentColor"/>
    <rect x="545" y="35" width="170" height="50" rx="8" fill="none" stroke="currentColor"/><text x="630" y="66" textAnchor="middle">T(n/4) + work</text>
    <path d="M370 85 V145" stroke="currentColor"/><path d="M630 85 V145" stroke="currentColor"/>
    <text x="380" y="175" textAnchor="middle">…</text><text x="630" y="175" textAnchor="middle">T(1)</text>
  </svg>;
}