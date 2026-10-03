export default function OptimizationGameGraphicalMethodDiagram() {
  return <svg viewBox="0 0 680 350" className="w-full h-auto" role="img" aria-label="Graphical method for 2 by 2 game">
    <line x1="80" y1="285" x2="620" y2="285" stroke="currentColor"/><line x1="80" y1="285" x2="80" y2="40" stroke="currentColor"/>
    <polyline points="80,245 350,120 620,80" fill="none" stroke="currentColor" strokeWidth="2"/><polyline points="80,90 350,155 620,235" fill="none" stroke="currentColor" strokeWidth="2"/>
    <circle cx="350" cy="138" r="6"/><line x1="350" y1="138" x2="350" y2="285" stroke="currentColor" strokeDasharray="6 5"/>
    <text x="350" y="320" textAnchor="middle">p</text><text x="40" y="65">Expected payoff</text><text x="365" y="132">intersection</text>
  </svg>;
}