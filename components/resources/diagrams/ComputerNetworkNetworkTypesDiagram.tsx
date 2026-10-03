import { Box, Frame } from "./DiagramKit";
export default function ComputerNetworkNetworkTypesDiagram() {
  return <Frame w={620} h={230} className="mx-auto w-full max-w-xl">
    <Box x={205} y={20} w={210} h={50} lines={["WAN","Wide geographic area"]} tone="dark" />
    <Box x={105} y={95} w={190} h={50} lines={["MAN","Metropolitan area"]} tone="mid" />
    <Box x={325} y={95} w={190} h={50} lines={["MAN","Metropolitan area"]} tone="mid" />
    <Box x={215} y={170} w={190} h={45} lines={["LAN","Local area"]} tone="light" />
  </Frame>;
}