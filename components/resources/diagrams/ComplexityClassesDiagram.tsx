export default function ComplexityClassesDiagram() {
  return <svg viewBox="0 0 760 280" className="w-full h-auto" role="img" aria-label="Complexity classes">
    <ellipse cx="380" cy="145" rx="315" ry="105" fill="none" stroke="currentColor"/><text x="655" y="65">NP</text>
    <ellipse cx="300" cy="145" rx="125" ry="75" fill="none" stroke="currentColor"/><text x="300" y="150" textAnchor="middle">P</text>
    <ellipse cx="520" cy="145" rx="150" ry="75" fill="none" stroke="currentColor"/><text x="520" y="150" textAnchor="middle">NP-complete region</text>
    <text x="380" y="255" textAnchor="middle">NP-hard extends beyond NP; P ⊆ NP is known, while P = NP is not assumed</text>
  </svg>;
}