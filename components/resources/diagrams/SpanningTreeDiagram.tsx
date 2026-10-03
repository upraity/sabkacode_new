export default function SpanningTreeDiagram() {
  return <svg viewBox="0 0 760 250" className="w-full h-auto" role="img" aria-label="Graph and spanning tree">
    <text x="190" y="30" textAnchor="middle">Original graph</text><text x="570" y="30" textAnchor="middle">One spanning tree</text>
    <circle cx="110" cy="100" r="20" fill="none" stroke="currentColor"/><circle cx="190" cy="60" r="20" fill="none" stroke="currentColor"/><circle cx="270" cy="100" r="20" fill="none" stroke="currentColor"/><circle cx="190" cy="170" r="20" fill="none" stroke="currentColor"/>
    <line x1="130" y1="92" x2="172" y2="68" stroke="currentColor"/><line x1="210" y1="68" x2="250" y2="92" stroke="currentColor"/><line x1="130" y1="108" x2="172" y2="162" stroke="currentColor"/><line x1="210" y1="162" x2="250" y2="108" stroke="currentColor"/><line x1="190" y1="80" x2="190" y2="150" stroke="currentColor"/>
    <circle cx="490" cy="100" r="20" fill="none" stroke="currentColor"/><circle cx="570" cy="60" r="20" fill="none" stroke="currentColor"/><circle cx="650" cy="100" r="20" fill="none" stroke="currentColor"/><circle cx="570" cy="170" r="20" fill="none" stroke="currentColor"/>
    <line x1="510" y1="92" x2="552" y2="68" stroke="currentColor"/><line x1="510" y1="108" x2="552" y2="162" stroke="currentColor"/><line x1="590" y1="162" x2="630" y2="108" stroke="currentColor"/>
    <text x="380" y="225" textAnchor="middle">Spanning tree contains all vertices and exactly V−1 edges</text>
  </svg>;
}