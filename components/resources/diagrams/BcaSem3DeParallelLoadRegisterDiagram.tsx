import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function BcaSem3DeParallelLoadRegisterDiagram() {
  return (
    <Frame w={760} h={300} className="mx-auto w-full max-w-2xl">
      <Box x={30} y={90} w={150} h={75} lines={["D3 D2 D1 D0", "Parallel inputs"]} tone="dark" bold />
      <Arrow points={[[180,128],[260,128]]} />
      <Box x={260} y={55} w={300} h={145} lines={["4-bit register", "FF3 | FF2 | FF1 | FF0", "common clock", "LOAD control"]} tone="light" bold />
      <Arrow points={[[560,128],[640,128]]} />
      <Box x={640} y={90} w={100} h={75} lines={["Q3 Q2 Q1 Q0", "outputs"]} tone="mid" bold />
      <Lines x={380} y={245} lines={["When LOAD is enabled, all four input bits are captured together on the active clock event."]} size={10} />
    </Frame>
  );
}
