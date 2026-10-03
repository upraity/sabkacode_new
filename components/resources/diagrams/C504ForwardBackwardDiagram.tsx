import { Arrow, Box, Frame, Lines } from "./DiagramKit";
export default function C504ForwardBackwardDiagram() {
  return <Frame w={620} h={300} className="mx-auto w-full max-w-xl">
    <Lines x={155} y={20} lines={["Forward Chaining"]} size={12} bold />
    <Box x={60} y={75} w={95} h={45} lines={["Facts"]} tone="light" />
    <Arrow points={[[155,98],[220,98]]} />
    <Box x={220} y={75} w={100} h={45} lines={["Rules"]} tone="mid" />
    <Arrow points={[[320,98],[380,98]]} />
    <Box x={380} y={75} w={100} h={45} lines={["Goal"]} tone="dark" bold />
    <Lines x={155} y={170} lines={["Backward Chaining"]} size={12} bold />
    <Box x={60} y={215} w={95} h={45} lines={["Goal"]} tone="dark" bold />
    <Arrow points={[[155,238],[220,238]]} />
    <Box x={220} y={215} w={100} h={45} lines={["Rules"]} tone="mid" />
    <Arrow points={[[320,238],[380,238]]} />
    <Box x={380} y={215} w={100} h={45} lines={["Facts"]} tone="light" />
  </Frame>;
}
