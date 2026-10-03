import { Frame, Lines } from "./DiagramKit";
export default function C504DfsBfsDiagram() {
  return <Frame w={620} h={330} className="mx-auto w-full max-w-xl">
    <Lines x={155} y={20} lines={["DFS order"]} size={12} bold />
    <Lines x={465} y={20} lines={["BFS order"]} size={12} bold />
    <circle cx="155" cy="70" r="16" fill="none" stroke="currentColor"/><circle cx="100" cy="135" r="14" fill="none" stroke="currentColor"/><circle cx="155" cy="135" r="14" fill="none" stroke="currentColor"/><circle cx="210" cy="135" r="14" fill="none" stroke="currentColor"/>
    <line x1="155" y1="86" x2="100" y2="121" stroke="currentColor"/><line x1="155" y1="86" x2="155" y2="121" stroke="currentColor"/><line x1="155" y1="86" x2="210" y2="121" stroke="currentColor"/>
    <text x="155" y="195" textAnchor="middle" fontSize="10">Deep branch before sibling</text>
    <circle cx="465" cy="70" r="16" fill="none" stroke="currentColor"/><circle cx="410" cy="135" r="14" fill="none" stroke="currentColor"/><circle cx="465" cy="135" r="14" fill="none" stroke="currentColor"/><circle cx="520" cy="135" r="14" fill="none" stroke="currentColor"/>
    <line x1="465" y1="86" x2="410" y2="121" stroke="currentColor"/><line x1="465" y1="86" x2="465" y2="121" stroke="currentColor"/><line x1="465" y1="86" x2="520" y2="121" stroke="currentColor"/>
    <text x="465" y="195" textAnchor="middle" fontSize="10">Level by level</text>
    <Lines x={310} y={280} lines={["The same tree can therefore be expanded in different orders."]} size={10} />
  </Frame>;
}
