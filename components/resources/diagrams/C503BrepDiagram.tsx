import { Frame, Lines } from "./DiagramKit";

export default function C503BrepDiagram() {
  return (
    <Frame w={620} h={310} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Boundary Representation (B-rep)"]} size={12} bold />
      <polygon points="190,210 190,110 310,60 430,110 430,210 310,260" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="190" y1="110" x2="310" y2="160" stroke="currentColor" />
      <line x1="310" y1="60" x2="310" y2="160" stroke="currentColor" />
      <line x1="430" y1="110" x2="310" y2="160" stroke="currentColor" />
      <line x1="310" y1="160" x2="310" y2="260" stroke="currentColor" />
      <Lines x={310} y={290} lines={["A solid boundary is organized through vertices, edges, faces and their connectivity."]} size={9} />
    </Frame>
  );
}
