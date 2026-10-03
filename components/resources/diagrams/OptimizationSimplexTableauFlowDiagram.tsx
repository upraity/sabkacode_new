export default function OptimizationSimplexTableauFlowDiagram() {
  return <svg viewBox="0 0 760 190" className="w-full h-auto" role="img" aria-label="Simplex tableau flow">
    <rect x="20" y="65" width="135" height="55" rx="8" fill="none" stroke="currentColor"/><text x="87" y="98" textAnchor="middle">Formulate LPP</text>
    <path d="M155 92 H205" stroke="currentColor"/><rect x="205" y="65" width="135" height="55" rx="8" fill="none" stroke="currentColor"/><text x="272" y="98" textAnchor="middle">Initial Tableau</text>
    <path d="M340 92 H390" stroke="currentColor"/><rect x="390" y="65" width="135" height="55" rx="8" fill="none" stroke="currentColor"/><text x="457" y="98" textAnchor="middle">Pivot</text>
    <path d="M525 92 H575" stroke="currentColor"/><rect x="575" y="65" width="165" height="55" rx="8" fill="none" stroke="currentColor"/><text x="657" y="98" textAnchor="middle">Optimality Test</text>
  </svg>;
}