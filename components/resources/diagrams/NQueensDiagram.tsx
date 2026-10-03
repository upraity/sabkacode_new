export default function NQueensDiagram() {
  return <svg viewBox="0 0 760 300" className="w-full h-auto" role="img" aria-label="Four queens board">
    <rect x="250" y="35" width="240" height="240" fill="none" stroke="currentColor" strokeWidth="2"/>
    <line x1="310" y1="35" x2="310" y2="275" stroke="currentColor"/><line x1="370" y1="35" x2="370" y2="275" stroke="currentColor"/><line x1="430" y1="35" x2="430" y2="275" stroke="currentColor"/>
    <line x1="250" y1="95" x2="490" y2="95" stroke="currentColor"/><line x1="250" y1="155" x2="490" y2="155" stroke="currentColor"/><line x1="250" y1="215" x2="490" y2="215" stroke="currentColor"/>
    <text x="280" y="75" textAnchor="middle">Q</text><text x="460" y="135" textAnchor="middle">Q</text><text x="280" y="195" textAnchor="middle">Q</text><text x="460" y="255" textAnchor="middle">Q</text>
    <text x="380" y="295" textAnchor="middle">No two queens share a row, column or diagonal</text>
  </svg>;
}