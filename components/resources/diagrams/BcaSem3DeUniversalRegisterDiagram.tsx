import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function BcaSem3DeUniversalRegisterDiagram() {
  return (
    <Frame w={760} h={320} className="mx-auto w-full max-w-2xl">
      <Box x={25} y={95} w={135} h={70} lines={["Mode", "S1 S0"]} tone="dark" bold />
      <Arrow points={[[160,130],[235,130]]} />
      <Box x={235} y={55} w={180} h={150} lines={["MUX per stage", "00 Hold", "01 Shift Right", "10 Shift Left", "11 Parallel Load"]} tone="light" />
      <Arrow points={[[415,130],[485,130]]} />
      <Box x={485} y={75} w={220} h={110} lines={["4-bit register", "FF3 | FF2 | FF1 | FF0", "common clock"]} tone="mid" bold />
      <Lines x={380} y={250} lines={["Control selection chooses which source feeds each flip-flop input."]} size={10} />
      <Lines x={380} y={285} lines={["A universal register combines storage, bidirectional shifting and parallel loading."]} size={10} />
    </Frame>
  );
}
