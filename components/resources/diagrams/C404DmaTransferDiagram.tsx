import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function C404DmaTransferDiagram() {
  return (
    <Frame w={620} h={300} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Direct Memory Access (DMA)"]} size={12} bold />
      <Box x={35} y={70} w={130} h={50} lines={["I/O Device"]} tone="light" />
      <Box x={245} y={70} w={130} h={50} lines={["DMA", "Controller"]} tone="dark" bold />
      <Box x={455} y={70} w={130} h={50} lines={["Main Memory"]} tone="mid" bold />
      <Arrow points={[[165,95],[245,95]]} />
      <Arrow points={[[375,95],[455,95]]} />
      <Box x={245} y={160} w={130} h={42} lines={["CPU setup / completion"]} tone="outline" />
      <Arrow points={[[310,160],[310,120]]} dashed={true} />
      <Lines x={310} y={245} lines={["DMA performs block transfer with limited CPU intervention."]} size={10} />
    </Frame>
  );
}
