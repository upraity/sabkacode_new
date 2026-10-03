export default function OptimizationTransportationModelDiagram() {
  return <svg viewBox="0 0 760 300" className="w-full h-auto" role="img" aria-label="Transportation model">
    <rect x="25" y="40" width="150" height="55" rx="8" fill="none" stroke="currentColor"/><text x="100" y="73" textAnchor="middle">Source A • Supply</text>
    <rect x="25" y="125" width="150" height="55" rx="8" fill="none" stroke="currentColor"/><text x="100" y="158" textAnchor="middle">Source B • Supply</text>
    <rect x="25" y="210" width="150" height="55" rx="8" fill="none" stroke="currentColor"/><text x="100" y="243" textAnchor="middle">Source C • Supply</text>
    <rect x="535" y="40" width="200" height="55" rx="8" fill="none" stroke="currentColor"/><text x="635" y="73" textAnchor="middle">Destination 1 • Demand</text>
    <rect x="535" y="125" width="200" height="55" rx="8" fill="none" stroke="currentColor"/><text x="635" y="158" textAnchor="middle">Destination 2 • Demand</text>
    <rect x="535" y="210" width="200" height="55" rx="8" fill="none" stroke="currentColor"/><text x="635" y="243" textAnchor="middle">Destination 3 • Demand</text>
    <path d="M175 68 C300 20 420 20 535 68" fill="none" stroke="currentColor"/><path d="M175 152 H535" stroke="currentColor"/><path d="M175 238 C300 285 420 285 535 238" fill="none" stroke="currentColor"/>
  </svg>;
}