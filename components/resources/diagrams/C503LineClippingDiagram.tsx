import { Frame, Lines } from "./DiagramKit";

export default function C503LineClippingDiagram() {
  return (
    <Frame w={620} h={300} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Line Clipping"]} size={12} bold />
      <rect x="200" y="70" width="220" height="150" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <line x1="100" y1="250" x2="500" y2="40" stroke="currentColor" strokeWidth="2" strokeDasharray="7 5" />
      <line x1="200" y1="197" x2="420" y2="81" stroke="currentColor" strokeWidth="4" />
      <Lines x={310} y={270} lines={["Dashed portion is outside; solid portion is retained inside the clipping window."]} size={10} />
    </Frame>
  );
}
