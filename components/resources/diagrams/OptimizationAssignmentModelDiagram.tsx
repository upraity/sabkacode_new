export default function OptimizationAssignmentModelDiagram() {
  return <svg viewBox="0 0 760 250" className="w-full h-auto" role="img" aria-label="Assignment model">
    <rect x="25" y="35" width="170" height="55" rx="8" fill="none" stroke="currentColor"/><text x="110" y="68" textAnchor="middle">Worker 1</text>
    <rect x="25" y="105" width="170" height="55" rx="8" fill="none" stroke="currentColor"/><text x="110" y="138" textAnchor="middle">Worker 2</text>
    <rect x="25" y="175" width="170" height="55" rx="8" fill="none" stroke="currentColor"/><text x="110" y="208" textAnchor="middle">Worker 3</text>
    <rect x="565" y="35" width="170" height="55" rx="8" fill="none" stroke="currentColor"/><text x="650" y="68" textAnchor="middle">Job A</text>
    <rect x="565" y="105" width="170" height="55" rx="8" fill="none" stroke="currentColor"/><text x="650" y="138" textAnchor="middle">Job B</text>
    <rect x="565" y="175" width="170" height="55" rx="8" fill="none" stroke="currentColor"/><text x="650" y="208" textAnchor="middle">Job C</text>
    <path d="M195 62 C330 20 430 20 565 62" fill="none" stroke="currentColor"/><path d="M195 132 H565" stroke="currentColor"/><path d="M195 202 C330 245 430 245 565 202" fill="none" stroke="currentColor"/>
  </svg>;
}