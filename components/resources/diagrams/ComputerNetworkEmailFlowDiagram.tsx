import { Arrow, Box, Frame } from "./DiagramKit";
export default function ComputerNetworkEmailFlowDiagram() {
  return <Frame w={760} h={190} className="mx-auto w-full max-w-2xl">
    <Box x={20} y={60} w={135} h={50} lines={["Sender","mail client"]} tone="dark" /><Arrow points={[[155,85],[210,85]]} />
    <Box x={210} y={60} w={150} h={50} lines={["Sender","mail server"]} tone="mid" /><Arrow points={[[360,85],[415,85]]} />
    <Box x={415} y={60} w={150} h={50} lines={["Recipient","mail server"]} tone="light" /><Arrow points={[[565,85],[620,85]]} />
    <Box x={620} y={60} w={120} h={50} lines={["Recipient"]} tone="dark" />
  </Frame>;
}