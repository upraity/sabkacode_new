import { Arrow, Box, Frame, Lines } from "./DiagramKit";
export default function C504KnowledgeSystemDiagram() {
  return <Frame w={620} h={290} className="mx-auto w-full max-w-xl">
    <Lines x={310} y={20} lines={["Knowledge-Based Reasoning"]} size={12} bold />
    <Box x={35} y={75} w={145} h={55} lines={["Knowledge Base", "Facts + Rules"]} tone="light" />
    <Arrow points={[[180,102],[240,102]]} />
    <Box x={240} y={70} w={140} h={65} lines={["Inference", "Engine"]} tone="dark" bold />
    <Arrow points={[[380,102],[440,102]]} />
    <Box x={440} y={75} w={145} h={55} lines={["Conclusion /", "Action"]} tone="mid" />
    <Lines x={310} y={215} lines={["Facts are matched with rules to derive useful conclusions."]} size={10} />
  </Frame>;
}
