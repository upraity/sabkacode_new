export default function CloudComputingLayeredArchitectureDiagram() {
  return <svg viewBox="0 0 620 330" className="w-full h-auto" role="img" aria-label="Layered cloud architecture">
    <rect x="90" y="20" width="440" height="55" rx="8" fill="none" stroke="currentColor"/><text x="310" y="53" textAnchor="middle">Application / SaaS</text>
    <rect x="90" y="90" width="440" height="55" rx="8" fill="none" stroke="currentColor"/><text x="310" y="123" textAnchor="middle">Platform / PaaS</text>
    <rect x="90" y="160" width="440" height="55" rx="8" fill="none" stroke="currentColor"/><text x="310" y="193" textAnchor="middle">Infrastructure / IaaS</text>
    <rect x="90" y="230" width="440" height="55" rx="8" fill="none" stroke="currentColor"/><text x="310" y="263" textAnchor="middle">Virtualization + Resource Management</text>
  </svg>;
}