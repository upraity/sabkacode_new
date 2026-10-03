import { Arrow, Box, Frame, Lines } from "./DiagramKit";
export default function C504ExpertSystemArchitectureDiagram() {
  return <Frame w={620} h={350} className="mx-auto w-full max-w-xl">
    <Lines x={310} y={20} lines={["Expert System Architecture"]} size={12} bold />
    <Box x={35} y={70} w={130} h={50} lines={["User"]} tone="light" />
    <Box x={230} y={60} w={160} h={70} lines={["Inference", "Engine"]} tone="dark" bold />
    <Box x={455} y={70} w={130} h={50} lines={["Knowledge", "Base"]} tone="mid" />
    <Arrow points={[[165,95],[230,95]]} />
    <Arrow points={[[390,95],[455,95]]} />
    <Box x={230} y={180} w={160} h={55} lines={["Explanation /", "Knowledge Acquisition"]} tone="outline" />
    <Arrow points={[[310,130],[310,180]]} dashed={true} />
    <Lines x={310} y={275} lines={["User ↔ Interface ↔ Inference Engine ↔ Knowledge Base"]} size={10} />
  </Frame>;
}
