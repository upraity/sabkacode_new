export default function WebTechnologyPhpRecursionDiagram() {
  return <svg viewBox="0 0 700 220" className="w-full h-auto" role="img" aria-label="PHP recursion flow">
    <rect x="250" y="15" width="200" height="45" rx="8" fill="none" stroke="currentColor"/><text x="350" y="43" textAnchor="middle">factorial(n)</text>
    <path d="M350 60 V88" stroke="currentColor"/><rect x="250" y="88" width="200" height="45" rx="8" fill="none" stroke="currentColor"/><text x="350" y="116" textAnchor="middle">n &gt; 1?</text>
    <path d="M250 110 H125 V170" stroke="currentColor"/><text x="180" y="103" textAnchor="middle">No</text><rect x="35" y="170" width="180" height="40" rx="8" fill="none" stroke="currentColor"/><text x="125" y="195" textAnchor="middle">Base case → 1</text>
    <path d="M450 110 H575 V170" stroke="currentColor"/><text x="515" y="103" textAnchor="middle">Yes</text><rect x="485" y="170" width="180" height="40" rx="8" fill="none" stroke="currentColor"/><text x="575" y="195" textAnchor="middle">n × factorial(n-1)</text>
  </svg>;
}