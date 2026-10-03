export default function WebTechnologyMysqlJoinsDiagram() {
  return <svg viewBox="0 0 760 230" className="w-full h-auto" role="img" aria-label="MySQL join concepts">
    <text x="125" y="25" textAnchor="middle">Table A</text><circle cx="125" cy="85" r="55" fill="none" stroke="currentColor"/>
    <text x="125" y="90" textAnchor="middle">INNER</text>
    <text x="380" y="25" textAnchor="middle">LEFT / RIGHT</text><circle cx="345" cy="85" r="55" fill="none" stroke="currentColor"/><circle cx="415" cy="85" r="55" fill="none" stroke="currentColor"/>
    <text x="380" y="90" textAnchor="middle">OUTER</text>
    <text x="635" y="25" textAnchor="middle">SELF JOIN</text><circle cx="635" cy="85" r="55" fill="none" stroke="currentColor"/><path d="M680 85 Q730 40 680 20" fill="none" stroke="currentColor"/>
    <text x="380" y="180" textAnchor="middle">Rows are combined according to a join condition</text>
  </svg>;
}