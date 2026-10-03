export default function LcsTableDiagram() {
  return <svg viewBox="0 0 760 300" className="w-full h-auto" role="img" aria-label="LCS dynamic programming table">
    <text x="390" y="25" textAnchor="middle">LCS DP table for prefixes</text>
    <rect x="170" y="55" width="420" height="190" fill="none" stroke="currentColor"/>
    <line x1="240" y1="55" x2="240" y2="245" stroke="currentColor"/><line x1="310" y1="55" x2="310" y2="245" stroke="currentColor"/><line x1="380" y1="55" x2="380" y2="245" stroke="currentColor"/><line x1="450" y1="55" x2="450" y2="245" stroke="currentColor"/><line x1="520" y1="55" x2="520" y2="245" stroke="currentColor"/>
    <line x1="170" y1="103" x2="590" y2="103" stroke="currentColor"/><line x1="170" y1="151" x2="590" y2="151" stroke="currentColor"/><line x1="170" y1="199" x2="590" y2="199" stroke="currentColor"/>
    <text x="205" y="88" textAnchor="middle">∅</text><text x="275" y="88" textAnchor="middle">A</text><text x="345" y="88" textAnchor="middle">B</text><text x="415" y="88" textAnchor="middle">C</text><text x="485" y="88" textAnchor="middle">D</text>
    <text x="205" y="136" textAnchor="middle">A</text><text x="275" y="136" textAnchor="middle">1</text><text x="345" y="136" textAnchor="middle">1</text><text x="415" y="136" textAnchor="middle">1</text><text x="485" y="136" textAnchor="middle">1</text>
    <text x="205" y="184" textAnchor="middle">E</text><text x="275" y="184" textAnchor="middle">1</text><text x="345" y="184" textAnchor="middle">1</text><text x="415" y="184" textAnchor="middle">1</text><text x="485" y="184" textAnchor="middle">1</text>
    <text x="205" y="232" textAnchor="middle">B</text><text x="275" y="232" textAnchor="middle">1</text><text x="345" y="232" textAnchor="middle">2</text><text x="415" y="232" textAnchor="middle">2</text><text x="485" y="232" textAnchor="middle">2</text>
  </svg>;
}