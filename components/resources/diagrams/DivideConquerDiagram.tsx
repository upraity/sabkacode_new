export default function DivideConquerDiagram() {
  return <svg viewBox="0 0 760 240" className="w-full h-auto" role="img" aria-label="Divide conquer combine">
    <rect x="295" y="25" width="170" height="50" rx="8" fill="none" stroke="currentColor"/><text x="380" y="56" textAnchor="middle">Original Problem</text>
    <line x1="335" y1="75" x2="205" y2="130" stroke="currentColor"/><line x1="425" y1="75" x2="555" y2="130" stroke="currentColor"/>
    <rect x="120" y="130" width="170" height="50" rx="8" fill="none" stroke="currentColor"/><text x="205" y="161" textAnchor="middle">Subproblem 1</text>
    <rect x="470" y="130" width="170" height="50" rx="8" fill="none" stroke="currentColor"/><text x="555" y="161" textAnchor="middle">Subproblem 2</text>
    <path d="M205 180 V215 H380" stroke="currentColor"/><path d="M555 180 V215 H380" stroke="currentColor"/><text x="380" y="232" textAnchor="middle">Combine Results</text>
  </svg>;
}