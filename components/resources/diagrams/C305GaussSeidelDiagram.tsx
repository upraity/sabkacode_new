import { Arrow, Box, Frame, Lines, Note } from "./DiagramKit";

export default function C305GaussSeidelDiagram() {
  return (
    <Frame w={620} h={320} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Gauss-Seidel Iteration"]} size={12} bold />
      <Box x={225} y={55} w={170} h={45} lines={["Initial guess", "x⁽⁰⁾"]} tone="dark" bold />
      <Arrow points={[[310,100],[310,135]]} />
      <Box x={75} y={135} w={150} h={50} lines={["Compute x₁", "use newest values"]} tone="light" />
      <Box x={395} y={135} w={150} h={50} lines={["Compute x₂", "use newest values"]} tone="light" />
      <Arrow points={[[225,160],[395,160]]} />
      <Arrow points={[[470,185],[470,235],[310,235],[310,275]]} dashed={true} />
      <Box x={225} y={270} w={170} h={35} lines={["Convergence test"]} tone="mid" bold />
      <Note x={310} y={225} lines={["New values are reused immediately in the same iteration."]} />
    </Frame>
  );
}
