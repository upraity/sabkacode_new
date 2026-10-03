import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function BcaSem3DeBcdParallelLoadDiagram() {
  return (
    <Frame w={780} h={320} className="mx-auto w-full max-w-2xl">
      <Box x={30} y={65} w={190} h={85} lines={["BCD counter", "0000 → 0001 → …", "→ 1001 → 0000"]} tone="dark" bold />
      <Arrow points={[[220,108],[300,108]]} />
      <Box x={300} y={55} w={180} h={105} lines={["Valid BCD", "0–9 only", "1010–1111 unused"]} tone="light" />
      <Arrow points={[[480,108],[560,108]]} />
      <Box x={560} y={65} w={190} h={85} lines={["4-bit binary", "parallel load", "preset value"]} tone="mid" bold />
      <Lines x={390} y={215} lines={["BCD uses four bits per decimal digit, but only ten states are valid for one digit."]} size={10} />
      <Lines x={390} y={255} lines={["Parallel loading allows a binary counter to start from a selected 4-bit value."]} size={10} />
    </Frame>
  );
}
