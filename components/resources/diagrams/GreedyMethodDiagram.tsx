export default function GreedyMethodDiagram() {
  return <svg viewBox="0 0 760 220" className="w-full h-auto" role="img" aria-label="Greedy method flow">
    <rect x="25" y="75" width="145" height="50" rx="8" fill="none" stroke="currentColor"/><text x="97" y="106" textAnchor="middle">Candidate set</text>
    <path d="M170 100 H245" stroke="currentColor"/><rect x="245" y="75" width="160" height="50" rx="8" fill="none" stroke="currentColor"/><text x="325" y="106" textAnchor="middle">Choose best local</text>
    <path d="M405 100 H480" stroke="currentColor"/><rect x="480" y="75" width="120" height="50" rx="8" fill="none" stroke="currentColor"/><text x="540" y="106" textAnchor="middle">Feasible?</text>
    <path d="M600 100 H700" stroke="currentColor"/><text x="710" y="106">Add</text>
    <path d="M540 125 V175 H325 V125" fill="none" stroke="currentColor"/><text x="430" y="195" textAnchor="middle">repeat until solution complete</text>
  </svg>;
}