export default function CloudComputingElasticityDiagram() {
  return <svg viewBox="0 0 760 230" className="w-full h-auto" role="img" aria-label="Cloud elasticity">
    <line x1="70" y1="180" x2="700" y2="180" stroke="currentColor"/><line x1="70" y1="35" x2="70" y2="180" stroke="currentColor"/>
    <polyline points="90,155 180,145 260,75 350,55 440,90 525,135 650,150" fill="none" stroke="currentColor" strokeWidth="3"/>
    <text x="385" y="215" textAnchor="middle">Time / workload changes</text><text x="20" y="105" transform="rotate(-90 20 105)" textAnchor="middle">Resource capacity</text>
    <text x="275" y="48">Scale up</text><text x="535" y="128">Scale down</text>
  </svg>;
}