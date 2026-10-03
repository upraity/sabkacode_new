export default function BellmanFordDiagram() {
  return <svg viewBox="0 0 760 220" className="w-full h-auto" role="img" aria-label="Bellman Ford repeated relaxation">
    <rect x="40" y="70" width="170" height="55" rx="8" fill="none" stroke="currentColor"/><text x="125" y="103" textAnchor="middle">Initialize distances</text>
    <path d="M210 97 H295" stroke="currentColor"/><rect x="295" y="70" width="170" height="55" rx="8" fill="none" stroke="currentColor"/><text x="380" y="103" textAnchor="middle">Relax every edge</text>
    <path d="M465 97 H550" stroke="currentColor"/><rect x="550" y="70" width="170" height="55" rx="8" fill="none" stroke="currentColor"/><text x="635" y="103" textAnchor="middle">Repeat rounds</text>
    <text x="380" y="175" textAnchor="middle">Extra improvement after the expected rounds indicates a reachable negative cycle</text>
  </svg>;
}