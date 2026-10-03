import { Arrow, Box, Frame } from "./DiagramKit";
export default function ComputerNetworkCommunicationModelDiagram() {
  return <Frame w={700} h={170} className="mx-auto w-full max-w-2xl">
    <Box x={25} y={55} w={130} h={50} lines={["Sender"]} tone="dark" bold />
    <Arrow points={[[155,80],[215,80]]} />
    <Box x={215} y={55} w={150} h={50} lines={["Medium","Protocol"]} tone="mid" />
    <Arrow points={[[365,80],[425,80]]} />
    <Box x={425} y={55} w={130} h={50} lines={["Receiver"]} tone="light" bold />
  </Frame>;
}