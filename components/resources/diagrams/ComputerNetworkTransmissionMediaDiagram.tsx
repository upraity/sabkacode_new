import { Box, Frame } from "./DiagramKit";
export default function ComputerNetworkTransmissionMediaDiagram() {
  return <Frame w={720} h={180} className="mx-auto w-full max-w-2xl">
    <Box x={20} y={55} w={155} h={55} lines={["Twisted pair","Copper"]} tone="dark" />
    <Box x={190} y={55} w={155} h={55} lines={["Coaxial","Shielded copper"]} tone="mid" />
    <Box x={360} y={55} w={155} h={55} lines={["Optical fiber","Light"]} tone="light" />
    <Box x={530} y={55} w={160} h={55} lines={["Wireless","Electromagnetic"]} tone="mid" />
  </Frame>;
}