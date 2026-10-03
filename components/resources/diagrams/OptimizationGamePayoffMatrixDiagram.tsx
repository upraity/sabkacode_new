export default function OptimizationGamePayoffMatrixDiagram() {
  return <svg viewBox="0 0 620 280" className="w-full h-auto" role="img" aria-label="Game payoff matrix">
    <text x="315" y="25" textAnchor="middle">Player B strategies</text>
    <text x="70" y="145" transform="rotate(-90 70 145)" textAnchor="middle">Player A strategies</text>
    <rect x="150" y="55" width="330" height="170" fill="none" stroke="currentColor"/>
    <line x1="260" y1="55" x2="260" y2="225" stroke="currentColor"/><line x1="370" y1="55" x2="370" y2="225" stroke="currentColor"/>
    <line x1="150" y1="112" x2="480" y2="112" stroke="currentColor"/><line x1="150" y1="168" x2="480" y2="168" stroke="currentColor"/>
    <text x="205" y="45" textAnchor="middle">B1</text><text x="315" y="45" textAnchor="middle">B2</text><text x="425" y="45" textAnchor="middle">B3</text>
    <text x="125" y="88">A1</text><text x="125" y="145">A2</text><text x="125" y="202">A3</text>
    <text x="205" y="88" textAnchor="middle">a₁₁</text><text x="315" y="88" textAnchor="middle">a₁₂</text><text x="425" y="88" textAnchor="middle">a₁₃</text>
    <text x="205" y="145" textAnchor="middle">a₂₁</text><text x="315" y="145" textAnchor="middle">a₂₂</text><text x="425" y="145" textAnchor="middle">a₂₃</text>
    <text x="205" y="202" textAnchor="middle">a₃₁</text><text x="315" y="202" textAnchor="middle">a₃₂</text><text x="425" y="202" textAnchor="middle">a₃₃</text>
  </svg>;
}