export default function DijkstraDiagram() {
  return <svg viewBox="0 0 760 240" className="w-full h-auto" role="img" aria-label="Dijkstra shortest path">
    <circle cx="120" cy="120" r="25" fill="none" stroke="currentColor"/><text x="120" y="126" textAnchor="middle">S</text>
    <circle cx="330" cy="60" r="25" fill="none" stroke="currentColor"/><text x="330" y="66" textAnchor="middle">A</text>
    <circle cx="330" cy="180" r="25" fill="none" stroke="currentColor"/><text x="330" y="186" textAnchor="middle">B</text>
    <circle cx="570" cy="120" r="25" fill="none" stroke="currentColor"/><text x="570" y="126" textAnchor="middle">T</text>
    <line x1="145" y1="112" x2="305" y2="68" stroke="currentColor"/><line x1="145" y1="128" x2="305" y2="172" stroke="currentColor"/><line x1="355" y1="68" x2="545" y2="112" stroke="currentColor"/><line x1="355" y1="172" x2="545" y2="128" stroke="currentColor"/>
    <text x="380" y="225" textAnchor="middle">Select smallest tentative distance → relax outgoing edges → repeat</text>
  </svg>;
}