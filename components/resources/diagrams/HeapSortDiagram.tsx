export default function HeapSortDiagram() {
  return <svg viewBox="0 0 760 260" className="w-full h-auto" role="img" aria-label="Heap Sort max heap">
    <circle cx="380" cy="55" r="28" fill="none" stroke="currentColor"/><text x="380" y="61" textAnchor="middle">90</text>
    <circle cx="270" cy="125" r="28" fill="none" stroke="currentColor"/><text x="270" y="131" textAnchor="middle">70</text>
    <circle cx="490" cy="125" r="28" fill="none" stroke="currentColor"/><text x="490" y="131" textAnchor="middle">80</text>
    <circle cx="205" cy="195" r="28" fill="none" stroke="currentColor"/><text x="205" y="201" textAnchor="middle">30</text>
    <circle cx="335" cy="195" r="28" fill="none" stroke="currentColor"/><text x="335" y="201" textAnchor="middle">60</text>
    <line x1="360" y1="78" x2="290" y2="103" stroke="currentColor"/><line x1="400" y1="78" x2="470" y2="103" stroke="currentColor"/><line x1="250" y1="148" x2="220" y2="170" stroke="currentColor"/><line x1="290" y1="148" x2="320" y2="170" stroke="currentColor"/>
    <text x="580" y="65">Extract root → place at sorted end</text>
  </svg>;
}