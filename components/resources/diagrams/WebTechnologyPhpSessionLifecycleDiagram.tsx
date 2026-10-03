export default function WebTechnologyPhpSessionLifecycleDiagram() {
  return <svg viewBox="0 0 760 190" className="w-full h-auto" role="img" aria-label="PHP session lifecycle">
    <rect x="20" y="65" width="140" height="50" rx="8" fill="none" stroke="currentColor"/><text x="90" y="95" textAnchor="middle">Start / Resume</text>
    <path d="M160 90 H220" stroke="currentColor"/><rect x="220" y="65" width="140" height="50" rx="8" fill="none" stroke="currentColor"/><text x="290" y="95" textAnchor="middle">Store Variables</text>
    <path d="M360 90 H420" stroke="currentColor"/><rect x="420" y="65" width="140" height="50" rx="8" fill="none" stroke="currentColor"/><text x="490" y="95" textAnchor="middle">Use Variables</text>
    <path d="M560 90 H620" stroke="currentColor"/><rect x="620" y="65" width="120" height="50" rx="8" fill="none" stroke="currentColor"/><text x="680" y="95" textAnchor="middle">Destroy</text>
  </svg>;
}