export default function CloudComputingEvolutionDiagram() {
  return <svg viewBox="0 0 780 170" className="w-full h-auto" role="img" aria-label="Evolution of cloud computing">
    <rect x="15" y="55" width="130" height="55" rx="8" fill="none" stroke="currentColor"/><text x="80" y="88" textAnchor="middle">Mainframe</text>
    <path d="M145 82 H165" stroke="currentColor"/><rect x="165" y="55" width="130" height="55" rx="8" fill="none" stroke="currentColor"/><text x="230" y="88" textAnchor="middle">Client-Server</text>
    <path d="M295 82 H315" stroke="currentColor"/><rect x="315" y="55" width="130" height="55" rx="8" fill="none" stroke="currentColor"/><text x="380" y="88" textAnchor="middle">Internet</text>
    <path d="M445 82 H465" stroke="currentColor"/><rect x="465" y="55" width="130" height="55" rx="8" fill="none" stroke="currentColor"/><text x="530" y="88" textAnchor="middle">Virtualization</text>
    <path d="M595 82 H615" stroke="currentColor"/><rect x="615" y="55" width="150" height="55" rx="8" fill="none" stroke="currentColor"/><text x="690" y="88" textAnchor="middle">Cloud Services</text>
  </svg>;
}