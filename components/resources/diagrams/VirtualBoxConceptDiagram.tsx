export default function VirtualBoxConceptDiagram() {
  return <svg viewBox="0 0 760 240" className="w-full h-auto" role="img" aria-label="VirtualBox concept">
    <rect x="120" y="20" width="520" height="200" rx="12" fill="none" stroke="currentColor"/><text x="380" y="48" textAnchor="middle">Host Computer</text>
    <rect x="155" y="75" width="190" height="105" rx="10" fill="none" stroke="currentColor"/><text x="250" y="108" textAnchor="middle">Virtual Machine 1</text><text x="250" y="135" textAnchor="middle">Guest OS</text>
    <rect x="415" y="75" width="190" height="105" rx="10" fill="none" stroke="currentColor"/><text x="510" y="108" textAnchor="middle">Virtual Machine 2</text><text x="510" y="135" textAnchor="middle">Guest OS</text>
  </svg>;
}