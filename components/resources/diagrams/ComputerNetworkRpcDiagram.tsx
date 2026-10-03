import { Arrow, Box, Frame } from "./DiagramKit";
export default function ComputerNetworkRpcDiagram() {
  return <Frame w={760} h={230} className="mx-auto w-full max-w-2xl">
    <Box x={20} y={75} w={145} h={55} lines={["Client","procedure call"]} tone="dark" /><Arrow points={[[165,102],[220,102]]} />
    <Box x={220} y={75} w={145} h={55} lines={["RPC request"]} tone="mid" /><Arrow points={[[365,102],[420,102]]} />
    <Box x={420} y={75} w={145} h={55} lines={["Server","procedure"]} tone="light" />
    <Box x={220} y={150} w={145} h={45} lines={["RPC response"]} tone="mid" />
  </Frame>;
}