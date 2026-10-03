export default function QuickSortDiagram() {
  return <svg viewBox="0 0 760 220" className="w-full h-auto" role="img" aria-label="Quick Sort partition diagram">
    <text x="380" y="30" textAnchor="middle">[7, 2, 9, 4, 3]</text>
    <path d="M380 40 V80" stroke="currentColor"/><rect x="310" y="80" width="140" height="50" rx="8" fill="none" stroke="currentColor"/><text x="380" y="111" textAnchor="middle">Pivot = 4</text>
    <line x1="380" y1="130" x2="210" y2="175" stroke="currentColor"/><line x1="380" y1="130" x2="550" y2="175" stroke="currentColor"/>
    <text x="210" y="205" textAnchor="middle">elements smaller than pivot</text><text x="550" y="205" textAnchor="middle">elements larger than pivot</text>
  </svg>;
}