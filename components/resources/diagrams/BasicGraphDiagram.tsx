export default function BasicGraphDiagram() {
  return <svg viewBox="0 0 760 230" className="w-full h-auto" role="img" aria-label="Basic graph">
    <line x1="180" y1="100" x2="350" y2="55" stroke="currentColor"/><line x1="350" y1="55" x2="550" y2="100" stroke="currentColor"/><line x1="180" y1="100" x2="350" y2="175" stroke="currentColor"/><line x1="350" y1="175" x2="550" y2="100" stroke="currentColor"/><line x1="350" y1="55" x2="350" y2="175" stroke="currentColor"/>
    <circle cx="180" cy="100" r="24" fill="none" stroke="currentColor"/><circle cx="350" cy="55" r="24" fill="none" stroke="currentColor"/><circle cx="550" cy="100" r="24" fill="none" stroke="currentColor"/><circle cx="350" cy="175" r="24" fill="none" stroke="currentColor"/>
    <text x="180" y="106" textAnchor="middle">A</text><text x="350" y="61" textAnchor="middle">B</text><text x="550" y="106" textAnchor="middle">C</text><text x="350" y="181" textAnchor="middle">D</text>
  </svg>;
}