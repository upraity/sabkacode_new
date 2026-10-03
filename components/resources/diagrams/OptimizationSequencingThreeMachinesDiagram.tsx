export default function OptimizationSequencingThreeMachinesDiagram() {
  return <svg viewBox="0 0 760 240" className="w-full h-auto" role="img" aria-label="Three machine sequencing transformation">
    <rect x="25" y="30" width="120" height="55" rx="8" fill="none" stroke="currentColor"/><text x="85" y="63" textAnchor="middle">M1</text>
    <rect x="25" y="105" width="120" height="55" rx="8" fill="none" stroke="currentColor"/><text x="85" y="138" textAnchor="middle">M2</text>
    <rect x="25" y="180" width="120" height="55" rx="8" fill="none" stroke="currentColor"/><text x="85" y="213" textAnchor="middle">M3</text>
    <path d="M145 58 H255" stroke="currentColor"/><path d="M145 133 H255" stroke="currentColor"/><path d="M145 208 H255" stroke="currentColor"/>
    <rect x="255" y="55" width="210" height="150" rx="10" fill="none" stroke="currentColor"/><text x="360" y="90" textAnchor="middle">Applicable</text><text x="360" y="115" textAnchor="middle">three-machine</text><text x="360" y="140" textAnchor="middle">transformation</text><text x="360" y="165" textAnchor="middle">condition</text>
    <path d="M465 130 H565" stroke="currentColor"/><rect x="565" y="55" width="170" height="150" rx="10" fill="none" stroke="currentColor"/><text x="650" y="90" textAnchor="middle">Fictitious</text><text x="650" y="120" textAnchor="middle">Machine A</text><text x="650" y="150" textAnchor="middle">Machine B</text><text x="650" y="180" textAnchor="middle">→ Johnson</text>
  </svg>;
}