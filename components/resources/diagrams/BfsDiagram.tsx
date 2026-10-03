export default function BfsDiagram() {
  return <svg viewBox="0 0 760 240" className="w-full h-auto" role="img" aria-label="BFS traversal">
    <circle cx="380" cy="45" r="24" fill="none" stroke="currentColor"/><text x="380" y="51" textAnchor="middle">A</text>
    <circle cx="250" cy="120" r="24" fill="none" stroke="currentColor"/><text x="250" y="126" textAnchor="middle">B</text>
    <circle cx="510" cy="120" r="24" fill="none" stroke="currentColor"/><text x="510" y="126" textAnchor="middle">C</text>
    <circle cx="170" cy="195" r="24" fill="none" stroke="currentColor"/><text x="170" y="201" textAnchor="middle">D</text>
    <circle cx="330" cy="195" r="24" fill="none" stroke="currentColor"/><text x="330" y="201" textAnchor="middle">E</text>
    <circle cx="590" cy="195" r="24" fill="none" stroke="currentColor"/><text x="590" y="201" textAnchor="middle">F</text>
    <line x1="360" y1="63" x2="270" y2="102" stroke="currentColor"/><line x1="400" y1="63" x2="490" y2="102" stroke="currentColor"/><line x1="230" y1="140" x2="185" y2="175" stroke="currentColor"/><line x1="270" y1="140" x2="315" y2="175" stroke="currentColor"/><line x1="530" y1="140" x2="575" y2="175" stroke="currentColor"/>
    <text x="380" y="225" textAnchor="middle">Level 0 → Level 1 → Level 2</text>
  </svg>;
}