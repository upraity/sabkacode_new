export default function OptimizationLPFeasibleRegionDiagram() {
  return <svg viewBox="0 0 620 360" className="w-full h-auto" role="img" aria-label="Two variable linear programming feasible region">
    <line x1="75" y1="300" x2="560" y2="300" stroke="currentColor"/><line x1="75" y1="300" x2="75" y2="35" stroke="currentColor"/>
    <polygon points="75,300 300,300 420,190 255,110 75,165" fill="none" stroke="currentColor" strokeWidth="2"/>
    <polyline points="75,165 255,110 420,190" fill="none" stroke="currentColor"/>
    <circle cx="75" cy="300" r="5"/><circle cx="300" cy="300" r="5"/><circle cx="420" cy="190" r="5"/><circle cx="255" cy="110" r="5"/><circle cx="75" cy="165" r="5"/>
    <text x="315" y="340" textAnchor="middle">x</text><text x="35" y="55">y</text><text x="250" y="210">Feasible region</text>
  </svg>;
}