import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function C404SingleBusCpuDiagram() {
  return (
    <Frame w={620} h={320} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Single-Bus CPU Organization"]} size={12} bold />
      <Box x={30} y={65} w={110} h={42} lines={["R1"]} tone="light" />
      <Box x={30} y={125} w={110} h={42} lines={["R2"]} tone="light" />
      <Box x={30} y={185} w={110} h={42} lines={["PC / IR"]} tone="light" />
      <Box x={235} y={115} w={150} h={55} lines={["Common Bus"]} tone="dark" bold />
      <Box x={450} y={65} w={130} h={55} lines={["ALU"]} tone="mid" bold />
      <Box x={450} y={155} w={130} h={55} lines={["Control Unit"]} tone="outline" bold />
      <Arrow points={[[140,86],[235,130]]} />
      <Arrow points={[[140,146],[235,145]]} />
      <Arrow points={[[140,206],[235,160]]} />
      <Arrow points={[[385,130],[450,92]]} />
      <Arrow points={[[450,110],[385,150]]} dashed={true} />
      <Arrow points={[[515,155],[515,120]]} dashed={true} />
      <Lines x={310} y={270} lines={["One shared internal path simplifies wiring but limits simultaneous transfers."]} size={10} />
    </Frame>
  );
}
