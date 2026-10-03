export default function PNPRelationshipDiagram() {
  return <svg viewBox="0 0 760 280" className="w-full h-auto" role="img" aria-label="P NP relationship">
    <ellipse cx="380" cy="140" rx="300" ry="105" fill="none" stroke="currentColor"/><text x="650" y="60">NP</text>
    <ellipse cx="270" cy="140" rx="120" ry="75" fill="none" stroke="currentColor"/><text x="270" y="145" textAnchor="middle">P</text>
    <ellipse cx="500" cy="140" rx="130" ry="75" fill="none" stroke="currentColor"/><text x="500" y="145" textAnchor="middle">NP-Complete</text>
    <text x="380" y="255" textAnchor="middle">NP-hard includes NP-complete and may also include problems outside NP</text>
  </svg>;
}