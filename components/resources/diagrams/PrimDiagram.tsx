export default function PrimDiagram() {
  return <svg viewBox="0 0 760 220" className="w-full h-auto" role="img" aria-label="Prim algorithm">
    <circle cx="100" cy="110" r="28" fill="none" stroke="currentColor"/><text x="100" y="116" textAnchor="middle">Start</text>
    <path d="M130 110 H235" stroke="currentColor"/><rect x="235" y="80" width="190" height="60" rx="8" fill="none" stroke="currentColor"/><text x="330" y="105" textAnchor="middle">Current tree</text><text x="330" y="125" textAnchor="middle">and frontier</text>
    <path d="M425 110 H520" stroke="currentColor"/><rect x="520" y="80" width="190" height="60" rx="8" fill="none" stroke="currentColor"/><text x="615" y="105" textAnchor="middle">Minimum crossing</text><text x="615" y="125" textAnchor="middle">edge</text>
    <text x="380" y="190" textAnchor="middle">Add the edge and repeat until all vertices are included</text>
  </svg>;
}