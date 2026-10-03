export default function OptimizationTwoPhaseMethodDiagram() {
  return <svg viewBox="0 0 760 190" className="w-full h-auto" role="img" aria-label="Two phase simplex method">
    <rect x="20" y="55" width="170" height="80" rx="10" fill="none" stroke="currentColor"/><text x="105" y="88" textAnchor="middle">Initial LPP</text><text x="105" y="112" textAnchor="middle">Artificial variables</text>
    <path d="M190 95 H290" stroke="currentColor"/><rect x="290" y="55" width="170" height="80" rx="10" fill="none" stroke="currentColor"/><text x="375" y="88" textAnchor="middle">Phase I</text><text x="375" y="112" textAnchor="middle">Find feasibility</text>
    <path d="M460 95 H560" stroke="currentColor"/><rect x="560" y="55" width="180" height="80" rx="10" fill="none" stroke="currentColor"/><text x="650" y="88" textAnchor="middle">Phase II</text><text x="650" y="112" textAnchor="middle">Optimize original Z</text>
  </svg>;
}