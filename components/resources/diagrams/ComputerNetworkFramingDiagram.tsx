import { Box, Frame } from "./DiagramKit";
export default function ComputerNetworkFramingDiagram() {
  return <Frame w={720} h={180} className="mx-auto w-full max-w-2xl">
    <Box x={20} y={60} w={85} h={50} lines={["Flag"]} tone="dark" />
    <Box x={105} y={60} w={160} h={50} lines={["Data"]} tone="light" />
    <Box x={265} y={60} w={95} h={50} lines={["FCS"]} tone="mid" />
    <Box x={360} y={60} w={85} h={50} lines={["Flag"]} tone="dark" />
    <Box x={445} y={60} w={160} h={50} lines={["Next frame"]} tone="light" />
  </Frame>;
}