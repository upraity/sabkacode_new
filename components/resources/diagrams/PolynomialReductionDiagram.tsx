export default function PolynomialReductionDiagram() {
  return <svg viewBox="0 0 760 210" className="w-full h-auto" role="img" aria-label="Polynomial reduction">
    <rect x="65" y="65" width="180" height="60" rx="8" fill="none" stroke="currentColor"/><text x="155" y="100" textAnchor="middle">Problem A</text>
    <path d="M245 95 H510" stroke="currentColor"/><text x="380" y="80" textAnchor="middle">polynomial-time transformation</text>
    <rect x="510" y="65" width="180" height="60" rx="8" fill="none" stroke="currentColor"/><text x="600" y="100" textAnchor="middle">Problem B</text>
    <text x="380" y="170" textAnchor="middle">A ≤p B means A can be transformed into B in polynomial time</text>
  </svg>;
}