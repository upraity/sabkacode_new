import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function C404MicroprogrammingPrincipleDiagram() {
  return (
    <Frame w={620} h={300} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Microprogramming Principle"]} size={12} bold />
      <Box x={35} y={70} w={145} h={50} lines={["Machine", "Instruction"]} tone="dark" bold />
      <Arrow points={[[180,95],[235,95]]} />
      <Box x={235} y={70} w={150} h={50} lines={["Microprogram", "sequence"]} tone="mid" bold />
      <Arrow points={[[385,95],[440,95]]} />
      <Box x={440} y={70} w={145} h={50} lines={["Control", "signals"]} tone="outline" bold />
      <Box x={225} y={165} w={170} h={45} lines={["Control memory"]} tone="light" />
      <Arrow points={[[310,165],[310,120]]} dashed={true} />
      <Lines x={310} y={250} lines={["One machine instruction can be implemented by multiple microinstructions."]} size={10} />
    </Frame>
  );
}
