import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function C404InterruptCycleDiagram() {
  return (
    <Frame w={620} h={300} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Basic Interrupt Handling"]} size={12} bold />
      <Box x={35} y={75} w={135} h={45} lines={["Main program"]} tone="dark" bold />
      <Arrow points={[[170,97],[225,97]]} />
      <Box x={225} y={75} w={145} h={45} lines={["Interrupt"]} tone="mid" bold />
      <Arrow points={[[370,97],[425,97]]} />
      <Box x={425} y={75} w={160} h={45} lines={["Save context / ISR"]} tone="outline" bold />
      <Arrow points={[[505,120],[505,180],[300,180],[300,120]]} dashed={true} />
      <Lines x={310} y={225} lines={["After service, the saved execution state is restored and execution can resume."]} size={10} />
    </Frame>
  );
}
