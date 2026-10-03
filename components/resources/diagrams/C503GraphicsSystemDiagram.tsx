import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function C503GraphicsSystemDiagram() {
  return (
    <Frame w={620} h={330} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Computer Graphics System"]} size={12} bold />
      <Box x={35} y={75} w={125} h={50} lines={["Input Devices"]} tone="light" />
      <Box x={245} y={70} w={130} h={60} lines={["CPU /", "Graphics Processor"]} tone="dark" bold />
      <Box x={460} y={75} w={125} h={50} lines={["Display"]} tone="mid" bold />
      <Box x={245} y={175} w={130} h={55} lines={["Frame Buffer /", "Graphics Memory"]} tone="outline" />
      <Arrow points={[[160,100],[245,100]]} />
      <Arrow points={[[375,100],[460,100]]} />
      <Arrow points={[[310,130],[310,175]]} dashed={true} />
      <Arrow points={[[375,202],[460,125]]} dashed={true} />
      <Lines x={310} y={265} lines={["The exact hardware organization varies by system; this is a conceptual architecture."]} size={10} />
    </Frame>
  );
}
