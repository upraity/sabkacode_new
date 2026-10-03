export default function CloudComputingBasicModelDiagram() {
  return <svg viewBox="0 0 760 190" className="w-full h-auto" role="img" aria-label="Basic cloud computing model">
    <rect x="25" y="65" width="145" height="55" rx="8" fill="none" stroke="currentColor"/><text x="97" y="98" textAnchor="middle">Users</text>
    <path d="M170 92 H285" stroke="currentColor"/><rect x="285" y="45" width="190" height="95" rx="12" fill="none" stroke="currentColor"/><text x="380" y="78" textAnchor="middle">Cloud</text><text x="380" y="100" textAnchor="middle">Compute • Storage</text><text x="380" y="120" textAnchor="middle">Network • Services</text>
    <path d="M475 92 H590" stroke="currentColor"/><rect x="590" y="65" width="145" height="55" rx="8" fill="none" stroke="currentColor"/><text x="662" y="98" textAnchor="middle">Applications</text>
  </svg>;
}