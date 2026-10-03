export default function CloudComputingVirtualizationDiagram() {
  return <svg viewBox="0 0 760 250" className="w-full h-auto" role="img" aria-label="Cloud virtualization">
    <rect x="250" y="20" width="260" height="45" rx="8" fill="none" stroke="currentColor"/><text x="380" y="48" textAnchor="middle">Physical Host</text>
    <rect x="210" y="85" width="340" height="45" rx="8" fill="none" stroke="currentColor"/><text x="380" y="113" textAnchor="middle">Hypervisor / VMM</text>
    <rect x="25" y="160" width="210" height="55" rx="8" fill="none" stroke="currentColor"/><text x="130" y="193" textAnchor="middle">Virtual Machine 1</text>
    <rect x="275" y="160" width="210" height="55" rx="8" fill="none" stroke="currentColor"/><text x="380" y="193" textAnchor="middle">Virtual Machine 2</text>
    <rect x="525" y="160" width="210" height="55" rx="8" fill="none" stroke="currentColor"/><text x="630" y="193" textAnchor="middle">Virtual Machine 3</text>
  </svg>;
}