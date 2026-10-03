import { Arrow, Box, Frame } from "./DiagramKit";

export default function SoftwareEngineeringProcessDiagram() {
  return (
    <Frame w={760} h={180} className="mx-auto w-full max-w-2xl">
      <Box x={20} y={55} w={110} h={48} lines={["Requirements"]} tone="dark" bold />
      <Arrow points={[[130, 79], [165, 79]]} />
      <Box x={165} y={55} w={110} h={48} lines={["Design"]} tone="mid" bold />
      <Arrow points={[[275, 79], [310, 79]]} />
      <Box x={310} y={55} w={110} h={48} lines={["Implement"]} tone="light" bold />
      <Arrow points={[[420, 79], [455, 79]]} />
      <Box x={455} y={55} w={110} h={48} lines={["Test"]} tone="mid" bold />
      <Arrow points={[[565, 79], [600, 79]]} />
      <Box x={600} y={55} w={110} h={48} lines={["Maintain"]} tone="dark" bold />
    </Frame>
  );
}
