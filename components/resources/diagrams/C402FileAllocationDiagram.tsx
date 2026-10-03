import { Arrow, Box, Frame, Lines, Note } from "./DiagramKit";

export default function C402FileAllocationDiagram() {
  return (
    <Frame w={620} h={320} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["File Allocation Techniques"]} size={12} bold />
      <Box x={25} y={65} w={170} h={45} lines={["Contiguous", "adjacent blocks"]} tone="dark" bold />
      <Box x={225} y={65} w={170} h={45} lines={["Linked", "pointer chain"]} tone="light" />
      <Box x={425} y={65} w={170} h={45} lines={["Indexed", "index block"]} tone="mid" bold />
      <Box x={40} y={145} w={135} h={35} lines={["A1 A2 A3 A4"]} tone="light" />
      <Arrow points={[[175,162],[225,162]]} />
      <Box x={225} y={145} w={70} h={35} lines={["B1"]} tone="light" />
      <Box x={315} y={145} w={70} h={35} lines={["B2"]} tone="light" />
      <Arrow points={[[295,162],[315,162]]} />
      <Box x={425} y={135} w={80} h={45} lines={["Index"]} tone="outline" />
      <Arrow points={[[505,157],[545,120]]} />
      <Arrow points={[[505,157],[545,162]]} />
      <Arrow points={[[505,157],[545,205]]} />
      <Note x={310} y={225} lines={["Contiguous: fast but growth can be difficult."]} />
      <Note x={310} y={248} lines={["Linked: flexible growth but pointer traversal overhead."]} />
      <Note x={310} y={271} lines={["Indexed: direct access through an index, with index overhead."]} />
    </Frame>
  );
}
