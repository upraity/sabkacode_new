export default function OptimizationJohnsonTwoMachinesDiagram() {
  return <svg viewBox="0 0 760 220" className="w-full h-auto" role="img" aria-label="Johnson rule for two machines">
    <rect x="25" y="45" width="170" height="55" rx="8" fill="none" stroke="currentColor"/><text x="110" y="78" textAnchor="middle">Minimum on M1</text><text x="110" y="98" textAnchor="middle">Place earliest</text>
    <rect x="295" y="45" width="170" height="55" rx="8" fill="none" stroke="currentColor"/><text x="380" y="78" textAnchor="middle">Minimum time</text><text x="380" y="98" textAnchor="middle">Select job</text>
    <rect x="565" y="45" width="170" height="55" rx="8" fill="none" stroke="currentColor"/><text x="650" y="78" textAnchor="middle">Minimum on M2</text><text x="650" y="98" textAnchor="middle">Place latest</text>
    <path d="M195 72 H295" stroke="currentColor"/><path d="M465 72 H565" stroke="currentColor"/>
    <text x="380" y="155" textAnchor="middle">Repeat until all jobs are sequenced</text>
  </svg>;
}