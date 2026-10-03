import { Frame, Lines } from "./DiagramKit";
export default function C504DecisionTreeDiagram() {
  return <Frame w={620} h={330} className="mx-auto w-full max-w-xl">
    <Lines x={310} y={20} lines={["Simple Decision Tree"]} size={12} bold />
    <rect x="250" y="55" width="120" height="42" fill="none" stroke="currentColor" strokeWidth="2"/><text x="310" y="81" textAnchor="middle" fontSize="10">Feature A?</text>
    <line x1="280" y1="97" x2="190" y2="150" stroke="currentColor"/><line x1="340" y1="97" x2="430" y2="150" stroke="currentColor"/>
    <rect x="130" y="150" width="120" height="42" fill="none" stroke="currentColor"/><text x="190" y="176" textAnchor="middle" fontSize="10">Feature B?</text>
    <rect x="370" y="150" width="120" height="42" fill="none" stroke="currentColor"/><text x="430" y="176" textAnchor="middle" fontSize="10">Class 1</text>
    <line x1="160" y1="192" x2="120" y2="240" stroke="currentColor"/><line x1="220" y1="192" x2="260" y2="240" stroke="currentColor"/>
    <rect x="70" y="240" width="100" height="38" fill="none" stroke="currentColor"/><text x="120" y="264" textAnchor="middle" fontSize="10">Class 0</text>
    <rect x="210" y="240" width="100" height="38" fill="none" stroke="currentColor"/><text x="260" y="264" textAnchor="middle" fontSize="10">Class 1</text>
    <Lines x={310} y={305} lines={["Internal nodes test features; leaves provide predictions."]} size={9} />
  </Frame>;
}
