import { Frame, Lines } from "./DiagramKit";
export default function C504SvmMarginDiagram() {
  return <Frame w={620} h={310} className="mx-auto w-full max-w-xl">
    <Lines x={310} y={20} lines={["SVM Margin Concept"]} size={12} bold />
    <line x1="100" y1="250" x2="520" y2="60" stroke="currentColor" strokeWidth="3"/>
    <line x1="100" y1="275" x2="520" y2="85" stroke="currentColor" strokeWidth="1.5" strokeDasharray="7 5"/>
    <line x1="100" y1="225" x2="520" y2="35" stroke="currentColor" strokeWidth="1.5" strokeDasharray="7 5"/>
    <circle cx="270" cy="173" r="6" fill="currentColor"/><circle cx="350" cy="137" r="6" fill="currentColor"/>
    <Lines x={310} y={285} lines={["Dashed lines illustrate margin boundaries; nearest training points are support vectors."]} size={9} />
  </Frame>;
}
