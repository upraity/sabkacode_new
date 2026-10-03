import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function C404IoModuleDiagram() {
  return (
    <Frame w={620} h={320} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["I/O Organization"]} size={12} bold />
      <Box x={45} y={75} w={130} h={55} lines={["CPU"]} tone="dark" bold />
      <Box x={245} y={75} w={140} h={55} lines={["I/O Module", "control + status"]} tone="mid" bold />
      <Box x={445} y={55} w={130} h={45} lines={["Keyboard"]} tone="light" />
      <Box x={445} y={110} w={130} h={45} lines={["Storage"]} tone="light" />
      <Box x={445} y={165} w={130} h={45} lines={["Network"]} tone="light" />
      <Arrow points={[[175,102],[245,102]]} />
      <Arrow points={[[385,90],[445,78]]} />
      <Arrow points={[[385,102],[445,132]]} />
      <Arrow points={[[385,115],[445,187]]} />
      <Lines x={310} y={260} lines={["The I/O module hides device-specific details and coordinates transfers."]} size={10} />
    </Frame>
  );
}
