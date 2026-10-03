import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function C402FileSystemStructureDiagram() {
  return (
    <Frame w={620} h={300} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["File-System Structure"]} size={12} bold />
      <Box x={190} y={55} w={240} h={42} lines={["Application Program"]} tone="dark" bold />
      <Arrow points={[[310,97],[310,130]]} />
      <Box x={145} y={130} w={330} h={48} lines={["File-System Interface", "open • read • write • close"]} tone="light" />
      <Arrow points={[[310,178],[310,210]]} />
      <Box x={95} y={210} w={430} h={48} lines={["Storage structures / device layer"]} tone="mid" bold />
      <Lines x={310} y={285} lines={["Logical files are mapped to physical storage through OS mechanisms."]} size={10} />
    </Frame>
  );
}
