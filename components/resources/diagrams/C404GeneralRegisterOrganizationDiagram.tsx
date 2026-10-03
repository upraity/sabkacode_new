import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function C404GeneralRegisterOrganizationDiagram() {
  return (
    <Frame w={620} h={320} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["General Register Organization"]} size={12} bold />
      <Box x={30} y={60} w={120} h={42} lines={["Register Set"]} tone="dark" bold />
      <Box x={30} y={120} w={120} h={42} lines={["Register Set"]} tone="light" />
      <Box x={30} y={180} w={120} h={42} lines={["Register Set"]} tone="light" />
      <Box x={220} y={105} w={160} h={65} lines={["Selection / Bus", "paths"]} tone="mid" bold />
      <Box x={455} y={105} w={120} h={65} lines={["ALU", "operation"]} tone="outline" bold />
      <Arrow points={[[150,81],[220,120]]} />
      <Arrow points={[[150,141],[220,140]]} />
      <Arrow points={[[150,201],[220,155]]} />
      <Arrow points={[[380,137],[455,137]]} />
      <Arrow points={[[455,155],[380,155]]} dashed={true} />
      <Lines x={310} y={245} lines={["Control signals select source registers, ALU function and destination register."]} size={10} />
    </Frame>
  );
}
