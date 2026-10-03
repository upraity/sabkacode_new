import { Box, Frame, Lines } from "./DiagramKit";

export default function C404MemoryInterleavingDiagram() {
  return (
    <Frame w={620} h={300} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Memory Interleaving"]} size={12} bold />
      <Box x={35} y={70} w={110} h={42} lines={["Bank 0"]} tone="dark" bold />
      <Box x={175} y={70} w={110} h={42} lines={["Bank 1"]} tone="mid" bold />
      <Box x={315} y={70} w={110} h={42} lines={["Bank 2"]} tone="light" />
      <Box x={455} y={70} w={110} h={42} lines={["Bank 3"]} tone="outline" />
      <Box x={70} y={145} w={80} h={36} lines={["A0"]} tone="light" />
      <Box x={210} y={145} w={80} h={36} lines={["A1"]} tone="light" />
      <Box x={350} y={145} w={80} h={36} lines={["A2"]} tone="light" />
      <Box x={490} y={145} w={80} h={36} lines={["A3"]} tone="light" />
      <Lines x={310} y={225} lines={["Consecutive addresses can be distributed across different banks."]} size={10} />
      <Lines x={310} y={250} lines={["This can improve memory bandwidth when bank timing permits overlap."]} size={10} />
    </Frame>
  );
}
