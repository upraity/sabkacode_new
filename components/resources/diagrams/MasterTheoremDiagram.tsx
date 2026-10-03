export default function MasterTheoremDiagram() {
  return <svg viewBox="0 0 760 250" className="w-full h-auto" role="img" aria-label="Master theorem divide and conquer structure">
    <rect x="295" y="25" width="170" height="50" rx="8" fill="none" stroke="currentColor"/><text x="380" y="56" textAnchor="middle">T(n)</text>
    <line x1="330" y1="75" x2="205" y2="130" stroke="currentColor"/><line x1="430" y1="75" x2="555" y2="130" stroke="currentColor"/>
    <rect x="110" y="130" width="190" height="50" rx="8" fill="none" stroke="currentColor"/><text x="205" y="161" textAnchor="middle">T(n/b)</text>
    <rect x="460" y="130" width="190" height="50" rx="8" fill="none" stroke="currentColor"/><text x="555" y="161" textAnchor="middle">T(n/b)</text>
    <text x="380" y="215" textAnchor="middle">a recursive subproblems + f(n) combine work</text>
  </svg>;
}