export default function HadoopOverviewDiagram() {
  return <svg viewBox="0 0 760 220" className="w-full h-auto" role="img" aria-label="Hadoop overview">
    <rect x="25" y="70" width="150" height="60" rx="8" fill="none" stroke="currentColor"/><text x="100" y="105" textAnchor="middle">Large Dataset</text>
    <path d="M175 100 H255" stroke="currentColor"/><rect x="255" y="40" width="220" height="120" rx="10" fill="none" stroke="currentColor"/><text x="365" y="70" textAnchor="middle">Hadoop Cluster</text><text x="365" y="100" textAnchor="middle">Distributed Storage</text><text x="365" y="125" textAnchor="middle">Distributed Processing</text>
    <path d="M475 100 H555" stroke="currentColor"/><rect x="555" y="70" width="180" height="60" rx="8" fill="none" stroke="currentColor"/><text x="645" y="105" textAnchor="middle">Results</text>
  </svg>;
}