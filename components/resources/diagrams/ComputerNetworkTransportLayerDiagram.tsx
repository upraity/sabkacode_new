import { Arrow, Box, Frame } from "./DiagramKit";
export default function ComputerNetworkTransportLayerDiagram() {
  return <Frame w={720} h={210} className="mx-auto w-full max-w-2xl">
    <Box x={20} y={35} w={140} h={50} lines={["Process A"]} tone="dark" /><Arrow points={[[160,60],[225,60]]} />
    <Box x={225} y={35} w={180} h={50} lines={["Transport layer"]} tone="mid" bold /><Arrow points={[[405,60],[470,60]]} />
    <Box x={470} y={35} w={140} h={50} lines={["Process B"]} tone="light" />
    <Box x={225} y={125} w={180} h={50} lines={["Segmentation","ports / delivery"]} tone="light" />
  </Frame>;
}