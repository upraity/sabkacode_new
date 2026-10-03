import { Box, Frame } from "./DiagramKit";
export default function ComputerNetworkTopologiesDiagram() {
  return <Frame w={760} h={190} className="mx-auto w-full max-w-2xl">
    <Box x={20} y={25} w={170} h={50} lines={["Bus"]} tone="dark" />
    <Box x={210} y={25} w={170} h={50} lines={["Star"]} tone="mid" />
    <Box x={400} y={25} w={170} h={50} lines={["Ring"]} tone="light" />
    <Box x={590} y={25} w={150} h={50} lines={["Mesh"]} tone="mid" />
    <Box x={285} y={105} w={190} h={50} lines={["Tree"]} tone="dark" />
  </Frame>;
}