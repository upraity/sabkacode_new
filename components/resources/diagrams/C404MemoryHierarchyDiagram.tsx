import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function C404MemoryHierarchyDiagram() {
  return (
    <Frame w={620} h={320} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Memory Hierarchy"]} size={12} bold />
      <Box x={205} y={55} w={210} h={40} lines={["Registers"]} tone="dark" bold />
      <Box x={175} y={105} w={270} h={40} lines={["Cache"]} tone="mid" bold />
      <Box x={140} y={155} w={340} h={40} lines={["Main Memory"]} tone="light" />
      <Box x={95} y={205} w={430} h={40} lines={["Secondary / External Storage"]} tone="outline" />
      <Arrow points={[[310,95],[310,105]]} />
      <Arrow points={[[310,145],[310,155]]} />
      <Arrow points={[[310,195],[310,205]]} />
      <Lines x={310} y={275} lines={["Upward: faster, smaller, more expensive per bit. Downward: larger, slower, persistent."]} size={10} />
    </Frame>
  );
}
