import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function C404VonNeumannStructureDiagram() {
  return (
    <Frame w={620} h={320} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Von Neumann Computer Organization"]} size={12} bold />
      <Box x={230} y={60} w={160} h={70} lines={["CPU", "ALU + Control + Registers"]} tone="dark" bold />
      <Box x={230} y={185} w={160} h={55} lines={["Main Memory", "instructions + data"]} tone="mid" bold />
      <Box x={35} y={185} w={125} h={55} lines={["Input"]} tone="light" />
      <Box x={460} y={185} w={125} h={55} lines={["Output"]} tone="light" />
      <Arrow points={[[310,130],[310,185]]} />
      <Arrow points={[[160,212],[230,212]]} />
      <Arrow points={[[390,212],[460,212]]} />
      <Lines x={310} y={275} lines={["Shared memory stores both instructions and data."]} size={10} />
    </Frame>
  );
}
