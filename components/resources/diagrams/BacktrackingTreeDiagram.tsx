export default function BacktrackingTreeDiagram() {
  return <svg viewBox="0 0 760 260" className="w-full h-auto" role="img" aria-label="Backtracking state space tree">
    <circle cx="380" cy="35" r="24" fill="none" stroke="currentColor"/><text x="380" y="41" textAnchor="middle">Start</text>
    <line x1="365" y1="55" x2="240" y2="100" stroke="currentColor"/><line x1="395" y1="55" x2="520" y2="100" stroke="currentColor"/>
    <circle cx="240" cy="120" r="24" fill="none" stroke="currentColor"/><text x="240" y="126" textAnchor="middle">Choice</text>
    <circle cx="520" cy="120" r="24" fill="none" stroke="currentColor"/><text x="520" y="126" textAnchor="middle">Choice</text>
    <line x1="225" y1="140" x2="160" y2="190" stroke="currentColor"/><line x1="255" y1="140" x2="320" y2="190" stroke="currentColor"/>
    <line x1="505" y1="140" x2="440" y2="190" stroke="currentColor"/><line x1="535" y1="140" x2="600" y2="190" stroke="currentColor"/>
    <text x="160" y="225" textAnchor="middle">Pruned</text><text x="320" y="225" textAnchor="middle">Continue</text><text x="440" y="225" textAnchor="middle">Continue</text><text x="600" y="225" textAnchor="middle">Pruned</text>
  </svg>;
}