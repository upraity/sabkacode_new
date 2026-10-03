export default function MatrixChainDiagram() {
  return <svg viewBox="0 0 760 230" className="w-full h-auto" role="img" aria-label="Matrix chain parenthesization">
    <text x="380" y="35" textAnchor="middle">A × B × C</text>
    <rect x="95" y="75" width="250" height="55" rx="8" fill="none" stroke="currentColor"/><text x="220" y="108" textAnchor="middle">(A × B) × C</text>
    <rect x="415" y="75" width="250" height="55" rx="8" fill="none" stroke="currentColor"/><text x="540" y="108" textAnchor="middle">A × (B × C)</text>
    <text x="380" y="175" textAnchor="middle">Same mathematical product, different scalar multiplication costs</text>
  </svg>;
}