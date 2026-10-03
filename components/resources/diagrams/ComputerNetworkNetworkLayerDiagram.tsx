import { Arrow, Box, Frame } from "./DiagramKit";
export default function ComputerNetworkNetworkLayerDiagram() {
  return <Frame w={720} h={190} className="mx-auto w-full max-w-2xl">
    <Box x={20} y={60} w={130} h={55} lines={["Host A"]} tone="dark" /><Arrow points={[[150,87],[205,87]]} />
    <Box x={205} y={60} w={120} h={55} lines={["Router 1"]} tone="mid" /><Arrow points={[[325,87],[380,87]]} />
    <Box x={380} y={60} w={120} h={55} lines={["Router 2"]} tone="light" /><Arrow points={[[500,87],[555,87]]} />
    <Box x={555} y={60} w={130} h={55} lines={["Host B"]} tone="dark" />
  </Frame>;
}