import { Box, Frame } from "./DiagramKit";

export default function SoftwareEngineeringArchitectureLayersDiagram() {
  return (
    <Frame w={500} h={270} className="mx-auto w-full max-w-lg">
      <Box x={90} y={25} w={320} h={48} lines={["Presentation / UI"]} tone="dark" bold />
      <Box x={90} y={82} w={320} h={48} lines={["Application services"]} tone="mid" bold />
      <Box x={90} y={139} w={320} h={48} lines={["Domain / business logic"]} tone="light" bold />
      <Box x={90} y={196} w={320} h={48} lines={["Data access / storage"]} tone="mid" bold />
    </Frame>
  );
}
