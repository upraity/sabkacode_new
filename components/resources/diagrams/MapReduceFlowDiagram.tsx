export default function MapReduceFlowDiagram() {
  return <svg viewBox="0 0 760 210" className="w-full h-auto" role="img" aria-label="MapReduce flow">
    <rect x="20" y="70" width="130" height="55" rx="8" fill="none" stroke="currentColor"/><text x="85" y="103" textAnchor="middle">Input</text>
    <path d="M150 97 H205" stroke="currentColor"/><rect x="205" y="70" width="130" height="55" rx="8" fill="none" stroke="currentColor"/><text x="270" y="103" textAnchor="middle">Map</text>
    <path d="M335 97 H390" stroke="currentColor"/><rect x="390" y="70" width="130" height="55" rx="8" fill="none" stroke="currentColor"/><text x="455" y="103" textAnchor="middle">Shuffle / Group</text>
    <path d="M520 97 H575" stroke="currentColor"/><rect x="575" y="70" width="130" height="55" rx="8" fill="none" stroke="currentColor"/><text x="640" y="103" textAnchor="middle">Reduce</text>
  </svg>;
}