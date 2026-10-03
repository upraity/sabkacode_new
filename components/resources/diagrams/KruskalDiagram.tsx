export default function KruskalDiagram() {
  return <svg viewBox="0 0 760 220" className="w-full h-auto" role="img" aria-label="Kruskal algorithm">
    <rect x="35" y="65" width="170" height="55" rx="8" fill="none" stroke="currentColor"/><text x="120" y="98" textAnchor="middle">Sort edges by weight</text>
    <path d="M205 92 H290" stroke="currentColor"/><rect x="290" y="65" width="170" height="55" rx="8" fill="none" stroke="currentColor"/><text x="375" y="98" textAnchor="middle">Consider lightest edge</text>
    <path d="M460 92 H545" stroke="currentColor"/><rect x="545" y="65" width="170" height="55" rx="8" fill="none" stroke="currentColor"/><text x="630" y="98" textAnchor="middle">Cycle?</text>
    <text x="620" y="155">No → add edge</text><text x="420" y="190">Yes → skip edge and continue</text>
  </svg>;
}