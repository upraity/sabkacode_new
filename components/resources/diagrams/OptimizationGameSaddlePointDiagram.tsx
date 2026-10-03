export default function OptimizationGameSaddlePointDiagram() {
  return <svg viewBox="0 0 620 280" className="w-full h-auto" role="img" aria-label="Game saddle point">
    <rect x="150" y="55" width="330" height="170" fill="none" stroke="currentColor"/>
    <line x1="260" y1="55" x2="260" y2="225" stroke="currentColor"/><line x1="370" y1="55" x2="370" y2="225" stroke="currentColor"/>
    <line x1="150" y1="112" x2="480" y2="112" stroke="currentColor"/><line x1="150" y1="168" x2="480" y2="168" stroke="currentColor"/>
    <rect x="260" y="112" width="110" height="56" fill="none" stroke="currentColor" strokeWidth="4"/>
    <text x="315" y="145" textAnchor="middle">Saddle</text>
    <text x="315" y="35" textAnchor="middle">Column maximum</text><text x="100" y="145" transform="rotate(-90 100 145)" textAnchor="middle">Row minimum</text>
  </svg>;
}