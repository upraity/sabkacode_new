import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function C404MicroprogrammedControlDiagram() {
  return (
    <Frame w={620} h={320} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Microprogrammed Control Unit"]} size={12} bold />
      <Box x={25} y={70} w={150} h={50} lines={["Instruction", "IR / opcode"]} tone="dark" bold />
      <Box x={225} y={60} w={170} h={70} lines={["Sequencer", "next-address logic"]} tone="mid" bold />
      <Box x={445} y={60} w={150} h={70} lines={["Control Memory", "microinstructions"]} tone="light" />
      <Arrow points={[[175,95],[225,95]]} />
      <Arrow points={[[395,95],[445,95]]} />
      <Box x={225} y={180} w={170} h={50} lines={["Microinstruction", "register"]} tone="outline" bold />
      <Arrow points={[[520,130],[520,155],[395,205]]} />
      <Arrow points={[[310,180],[310,130]]} dashed={true} />
      <Lines x={310} y={275} lines={["Control outputs activate register transfers, ALU operations and other datapath actions."]} size={10} />
    </Frame>
  );
}
