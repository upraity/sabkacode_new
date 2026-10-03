import { Frame, Lines } from "./DiagramKit";
export default function C504HillClimbingDiagram() {
  return <Frame w={620} h={300} className="mx-auto w-full max-w-xl">
    <Lines x={310} y={20} lines={["Hill-Climbing Evaluation Landscape"]} size={12} bold />
    <path d="M60 230 C130 225 135 115 205 120 C260 125 250 195 320 190 C390 185 390 65 470 75 C520 82 525 140 565 150" fill="none" stroke="currentColor" strokeWidth="3"/>
    <circle cx="205" cy="120" r="5" fill="currentColor"/><circle cx="470" cy="75" r="5" fill="currentColor"/>
    <Lines x={205} y={105} lines={["Local maximum"]} size={9} />
    <Lines x={470} y={60} lines={["Higher peak"]} size={9} />
    <Lines x={310} y={270} lines={["A local method can stop at a locally better state without reaching the global best state."]} size={9} />
  </Frame>;
}
