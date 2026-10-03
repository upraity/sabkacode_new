import { Frame, Lines } from "./DiagramKit";
export default function C504SearchTreeDiagram() {
  return <Frame w={620} h={330} className="mx-auto w-full max-w-xl">
    <Lines x={310} y={20} lines={["Generic Search Tree"]} size={12} bold />
    <circle cx="310" cy="65" r="18" fill="none" stroke="currentColor" strokeWidth="2"/><text x="310" y="69" textAnchor="middle" fontSize="10">S</text>
    {[190,310,430].map((x,i)=><g key={i}><line x1="310" y1="83" x2={x} y2="135" stroke="currentColor"/><circle cx={x} cy="150" r="16" fill="none" stroke="currentColor"/><text x={x} y="154" textAnchor="middle" fontSize="10">{String.fromCharCode(65+i)}</text></g>)}
    <line x1="190" y1="166" x2="150" y2="220" stroke="currentColor"/><line x1="190" y1="166" x2="230" y2="220" stroke="currentColor"/>
    <circle cx="150" cy="235" r="15" fill="none" stroke="currentColor"/><circle cx="230" cy="235" r="15" fill="none" stroke="currentColor"/>
    <Lines x={310} y={285} lines={["Search chooses which frontier state to expand next until a goal is reached."]} size={10} />
  </Frame>;
}
