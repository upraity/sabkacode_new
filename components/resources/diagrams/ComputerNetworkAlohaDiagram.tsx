import { Box, Frame } from "./DiagramKit";
export default function ComputerNetworkAlohaDiagram() {
  return <Frame w={720} h={230} className="mx-auto w-full max-w-2xl">
    <Box x={20} y={25} w={180} h={50} lines={["Pure ALOHA","send anytime"]} tone="dark" />
    <Box x={220} y={25} w={460} h={50} lines={["Overlapping frames can collide"]} tone="mid" />
    <Box x={20} y={110} w={180} h={50} lines={["Slotted ALOHA","slot boundaries"]} tone="dark" />
    <Box x={220} y={110} w={135} h={50} lines={["Slot 1"]} tone="light" />
    <Box x={365} y={110} w={135} h={50} lines={["Slot 2"]} tone="light" />
    <Box x={510} y={110} w={135} h={50} lines={["Slot 3"]} tone="light" />
  </Frame>;
}