export default function CloudComputingMemoryVirtualizationDiagram() {
  return <svg viewBox="0 0 760 240" className="w-full h-auto" role="img" aria-label="Memory virtualization">
    <rect x="20" y="35" width="210" height="50" rx="8" fill="none" stroke="currentColor"/><text x="125" y="66" textAnchor="middle">Guest VM 1 memory</text>
    <rect x="20" y="105" width="210" height="50" rx="8" fill="none" stroke="currentColor"/><text x="125" y="136" textAnchor="middle">Guest VM 2 memory</text>
    <rect x="20" y="175" width="210" height="50" rx="8" fill="none" stroke="currentColor"/><text x="125" y="206" textAnchor="middle">Guest VM 3 memory</text>
    <path d="M230 60 H350" stroke="currentColor"/><path d="M230 130 H350" stroke="currentColor"/><path d="M230 200 H350" stroke="currentColor"/>
    <rect x="350" y="85" width="160" height="90" rx="10" fill="none" stroke="currentColor"/><text x="430" y="118" textAnchor="middle">Memory</text><text x="430" y="142" textAnchor="middle">Virtualization</text>
    <path d="M510 130 H620" stroke="currentColor"/><rect x="620" y="85" width="115" height="90" rx="10" fill="none" stroke="currentColor"/><text x="677" y="118" textAnchor="middle">Physical</text><text x="677" y="142" textAnchor="middle">RAM</text>
  </svg>;
}