export default function MergeSortDiagram() {
  return <svg viewBox="0 0 760 270" className="w-full h-auto" role="img" aria-label="Merge Sort diagram">
    <text x="380" y="25" textAnchor="middle">[8, 3, 2, 9]</text>
    <line x1="380" y1="35" x2="250" y2="75" stroke="currentColor"/><line x1="380" y1="35" x2="510" y2="75" stroke="currentColor"/>
    <text x="250" y="100" textAnchor="middle">[8, 3]</text><text x="510" y="100" textAnchor="middle">[2, 9]</text>
    <line x1="250" y1="110" x2="180" y2="150" stroke="currentColor"/><line x1="250" y1="110" x2="320" y2="150" stroke="currentColor"/>
    <line x1="510" y1="110" x2="440" y2="150" stroke="currentColor"/><line x1="510" y1="110" x2="580" y2="150" stroke="currentColor"/>
    <text x="180" y="175" textAnchor="middle">[8]</text><text x="320" y="175" textAnchor="middle">[3]</text><text x="440" y="175" textAnchor="middle">[2]</text><text x="580" y="175" textAnchor="middle">[9]</text>
    <text x="380" y="225" textAnchor="middle">Merge sorted halves → [2, 3, 8, 9]</text>
  </svg>;
}