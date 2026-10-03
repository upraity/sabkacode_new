export default function HuffmanTreeDiagram() {
  return <svg viewBox="0 0 760 280" className="w-full h-auto" role="img" aria-label="Huffman tree">
    <circle cx="380" cy="45" r="28" fill="none" stroke="currentColor"/><text x="380" y="51" textAnchor="middle">39</text>
    <circle cx="260" cy="125" r="25" fill="none" stroke="currentColor"/><text x="260" y="131" textAnchor="middle">18</text>
    <circle cx="500" cy="125" r="25" fill="none" stroke="currentColor"/><text x="500" y="131" textAnchor="middle">21</text>
    <circle cx="190" cy="205" r="22" fill="none" stroke="currentColor"/><text x="190" y="211" textAnchor="middle">A:5</text>
    <circle cx="330" cy="205" r="22" fill="none" stroke="currentColor"/><text x="330" y="211" textAnchor="middle">B:13</text>
    <circle cx="450" cy="205" r="22" fill="none" stroke="currentColor"/><text x="450" y="211" textAnchor="middle">C:9</text>
    <circle cx="550" cy="205" r="22" fill="none" stroke="currentColor"/><text x="550" y="211" textAnchor="middle">D:12</text>
    <line x1="360" y1="68" x2="280" y2="103" stroke="currentColor"/><line x1="400" y1="68" x2="480" y2="103" stroke="currentColor"/>
    <line x1="245" y1="146" x2="205" y2="183" stroke="currentColor"/><line x1="275" y1="146" x2="315" y2="183" stroke="currentColor"/><line x1="480" y1="146" x2="465" y2="183" stroke="currentColor"/><line x1="520" y1="146" x2="535" y2="183" stroke="currentColor"/>
  </svg>;
}