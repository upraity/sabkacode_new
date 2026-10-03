import { Arrow, Box, Frame } from "./DiagramKit";
export default function ComputerNetworkTransmissionModesDiagram() {
  return <Frame w={720} h={220} className="mx-auto w-full max-w-2xl">
    <Box x={20} y={20} w={150} h={48} lines={["Simplex"]} tone="dark" />
    <Arrow points={[[170,44],[260,44]]} /><Box x={540} y={20} w={150} h={48} lines={["Receiver"]} tone="light" />
    <Box x={20} y={86} w={150} h={48} lines={["Half-duplex"]} tone="mid" />
    <Arrow points={[[170,110],[260,110]]} /><Arrow points={[[260,125],[170,125]]} />
    <Box x={540} y={86} w={150} h={48} lines={["Device"]} tone="light" />
    <Box x={20} y={152} w={150} h={48} lines={["Full-duplex"]} tone="dark" />
    <Arrow points={[[170,176],[260,176]]} /><Arrow points={[[260,191],[170,191]]} />
    <Box x={540} y={152} w={150} h={48} lines={["Device"]} tone="light" />
  </Frame>;
}