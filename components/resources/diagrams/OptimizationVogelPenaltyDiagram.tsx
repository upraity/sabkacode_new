export default function OptimizationVogelPenaltyDiagram() {
  return <svg viewBox="0 0 760 240" className="w-full h-auto" role="img" aria-label="Vogel approximation penalty">
    <text x="120" y="30" textAnchor="middle">Costs in a row</text>
    <rect x="30" y="55" width="180" height="60" fill="none" stroke="currentColor"/><text x="60" y="92">4</text><text x="120" y="92">7</text><text x="180" y="92">10</text>
    <path d="M90 125 V190" stroke="currentColor"/><text x="90" y="215" textAnchor="middle">Smallest = 4</text>
    <path d="M150 125 V190" stroke="currentColor"/><text x="150" y="235" textAnchor="middle">Second = 7</text>
    <text x="470" y="80">Penalty = 7 − 4 = 3</text><text x="470" y="115">Choose largest row/column penalty</text><text x="470" y="150">then allocate to its minimum-cost cell</text>
  </svg>;
}