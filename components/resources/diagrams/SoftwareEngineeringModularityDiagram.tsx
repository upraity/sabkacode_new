import { Arrow, Box, Frame } from "./DiagramKit";

export default function SoftwareEngineeringModularityDiagram() {
  return (
    <Frame w={700} h={280} className="mx-auto w-full max-w-2xl">
      <Box x={250} y={20} w={200} h={50} lines={["Main system"]} tone="dark" bold />
      <Arrow points={[[300, 70], [175, 120]]} />
      <Arrow points={[[350, 70], [350, 120]]} />
      <Arrow points={[[400, 70], [525, 120]]} />
      <Box x={80} y={120} w={190} h={55} lines={["Module A", "Focused responsibility"]} tone="mid" />
      <Box x={255} y={120} w={190} h={55} lines={["Module B", "Focused responsibility"]} tone="light" />
      <Box x={430} y={120} w={190} h={55} lines={["Module C", "Focused responsibility"]} tone="mid" />
    </Frame>
  );
}
