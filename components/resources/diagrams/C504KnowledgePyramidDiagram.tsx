import { Frame, Lines } from "./DiagramKit";
export default function C504KnowledgePyramidDiagram() {
  return <Frame w={620} h={350} className="mx-auto w-full max-w-xl">
    <Lines x={310} y={20} lines={["Knowledge Pyramid"]} size={12} bold />
    <polygon points="310,55 245,125 375,125" fill="none" stroke="currentColor" strokeWidth="2" />
    <polygon points="245,125 375,125 420,195 200,195" fill="none" stroke="currentColor" strokeWidth="2" />
    <polygon points="200,195 420,195 485,270 135,270" fill="none" stroke="currentColor" strokeWidth="2" />
    <Lines x={310} y={88} lines={["Wisdom"]} size={11} bold />
    <Lines x={310} y={155} lines={["Knowledge"]} size={11} bold />
    <Lines x={310} y={232} lines={["Information"]} size={11} bold />
    <Lines x={310} y={300} lines={["Data"]} size={11} bold />
  </Frame>;
}
