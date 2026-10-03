export default function GrowthFunctionsDiagram() {
  return <svg viewBox="0 0 760 260" className="w-full h-auto" role="img" aria-label="Common algorithm growth functions">
    <line x1="80" y1="215" x2="710" y2="215" stroke="currentColor"/><line x1="80" y1="215" x2="80" y2="25" stroke="currentColor"/>
    <path d="M90 205 C180 180 300 155 690 130" fill="none" stroke="currentColor"/><text x="670" y="125">log n</text>
    <path d="M90 205 C220 180 390 130 690 55" fill="none" stroke="currentColor"/><text x="650" y="50">n</text>
    <path d="M90 205 C180 200 300 165 430 120 C530 85 610 45 690 25" fill="none" stroke="currentColor"/><text x="600" y="38">n log n</text>
    <path d="M90 205 C180 200 300 190 430 155 C520 120 610 70 690 25" fill="none" stroke="currentColor"/><text x="535" y="105">n²</text>
    <text x="395" y="248" textAnchor="middle">Input size n →</text>
  </svg>;
}