import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function BcaSem3DeRippleCounterDiagram() {
  return (
    <Frame w={780} h={300} className="mx-auto w-full max-w-2xl">
      <Box x={25} y={85} w={140} h={75} lines={["FF0", "Clock"]} tone="dark" bold />
      <Arrow points={[[165,122],[235,122]]} />
      <Box x={235} y={85} w={140} h={75} lines={["FF1", "triggered by Q0"]} tone="light" />
      <Arrow points={[[375,122],[445,122]]} />
      <Box x={445} y={85} w={140} h={75} lines={["FF2", "triggered by Q1"]} tone="light" />
      <Arrow points={[[585,122],[655,122]]} />
      <Box x={655} y={85} w={100} h={75} lines={["Count", "Q2 Q1 Q0"]} tone="mid" bold />
      <Lines x={390} y={205} lines={["Only the first stage receives the external clock; later stages respond successively."]} size={10} />
      <Lines x={390} y={240} lines={["Typical 3-bit sequence: 000 → 001 → 010 → 011 → 100 → 101 → 110 → 111"]} size={10} />
    </Frame>
  );
}
