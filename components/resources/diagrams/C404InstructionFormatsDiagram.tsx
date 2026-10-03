import { Box, Frame, Lines } from "./DiagramKit";

export default function C404InstructionFormatsDiagram() {
  return (
    <Frame w={620} h={300} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Instruction Formats"]} size={12} bold />
      <Box x={35} y={60} w={245} h={42} lines={["0-address:  | OPCODE |"]} tone="dark" bold />
      <Box x={340} y={60} w={245} h={42} lines={["1-address:  | OPCODE | A |"]} tone="light" />
      <Box x={35} y={125} w={245} h={42} lines={["2-address: | OPCODE | A1 | A2 |"]} tone="mid" bold />
      <Box x={340} y={125} w={245} h={42} lines={["3-address: | OPCODE | A1 | A2 | A3 |"]} tone="outline" bold />
      <Lines x={310} y={210} lines={["Address fields may identify registers, memory operands or other operand references."]} size={10} />
      <Lines x={310} y={238} lines={["Exact bit widths depend on the instruction-set architecture."]} size={10} />
    </Frame>
  );
}
