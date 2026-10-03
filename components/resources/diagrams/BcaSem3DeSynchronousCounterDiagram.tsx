import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function BcaSem3DeSynchronousCounterDiagram() {
  return (
    <Frame w={780} h={310} className="mx-auto w-full max-w-2xl">
      <Box x={40} y={70} w={150} h={70} lines={["Common Clock", "→ all stages"]} tone="dark" bold />
      <Arrow points={[[190,105],[270,105]]} />
      <Box x={270} y={45} w={135} h={120} lines={["FF0", "toggle logic", "Q0"]} tone="light" />
      <Arrow points={[[405,105],[465,105]]} />
      <Box x={465} y={45} w={135} h={120} lines={["FF1", "toggle when", "Q0 condition"]} tone="light" />
      <Arrow points={[[600,105],[660,105]]} />
      <Box x={660} y={45} w={90} h={120} lines={["FF2", "Q2"]} tone="mid" bold size={10} />
      <Lines x={390} y={215} lines={["All flip-flops see the same clock; combinational logic determines which stages change state."]} size={10} />
      <Lines x={390} y={255} lines={["This reduces ripple timing and is preferred for many higher-speed designs."]} size={10} />
    </Frame>
  );
}
