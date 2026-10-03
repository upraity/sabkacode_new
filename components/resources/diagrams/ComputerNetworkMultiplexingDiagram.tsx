import { Arrow, Box, Frame } from "./DiagramKit";
export default function ComputerNetworkMultiplexingDiagram() {
  return <Frame w={720} h={250} className="mx-auto w-full max-w-2xl">
    <Box x={20} y={20} w={145} h={50} lines={["FDM","Frequency"]} tone="dark" /><Arrow points={[[165,45],[235,45]]} />
    <Box x={235} y={20} w={180} h={50} lines={["Shared channel"]} tone="mid" /><Arrow points={[[415,45],[485,45]]} />
    <Box x={485} y={20} w={145} h={50} lines={["Streams"]} tone="light" />
    <Box x={20} y={100} w={145} h={50} lines={["WDM","Wavelength"]} tone="dark" /><Arrow points={[[165,125],[235,125]]} />
    <Box x={235} y={100} w={180} h={50} lines={["Optical fiber"]} tone="mid" /><Arrow points={[[415,125],[485,125]]} />
    <Box x={485} y={100} w={145} h={50} lines={["Streams"]} tone="light" />
    <Box x={20} y={180} w={145} h={50} lines={["TDM","Time slots"]} tone="dark" /><Arrow points={[[165,205],[235,205]]} />
    <Box x={235} y={180} w={180} h={50} lines={["Frame / slots"]} tone="mid" /><Arrow points={[[415,205],[485,205]]} />
    <Box x={485} y={180} w={145} h={50} lines={["Streams"]} tone="light" />
  </Frame>;
}