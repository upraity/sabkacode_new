import { Arrow, Box, Frame, Lines, Note } from "./DiagramKit";

export default function C305DifferenceTableDiagram() {
  return (
    <Frame w={620} h={300} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Finite-Difference Table"]} size={12} bold />
      <Box x={35} y={60} w={110} h={38} lines={["x"]} tone="dark" bold />
      <Box x={155} y={60} w={110} h={38} lines={["y"]} tone="dark" bold />
      <Box x={275} y={60} w={110} h={38} lines={["Δy"]} tone="mid" bold />
      <Box x={395} y={60} w={110} h={38} lines={["Δ²y"]} tone="mid" bold />
      <Box x={515} y={60} w={70} h={38} lines={["Δ³y"]} tone="mid" bold />
      <Box x={35} y={115} w={110} h={36} lines={["x₀"]} tone="light" />
      <Box x={155} y={115} w={110} h={36} lines={["y₀"]} tone="light" />
      <Box x={275} y={115} w={110} h={36} lines={["Δy₀"]} tone="light" />
      <Box x={395} y={115} w={110} h={36} lines={["Δ²y₀"]} tone="light" />
      <Box x={35} y={165} w={110} h={36} lines={["x₁"]} tone="light" />
      <Box x={155} y={165} w={110} h={36} lines={["y₁"]} tone="light" />
      <Box x={275} y={165} w={110} h={36} lines={["Δy₁"]} tone="light" />
      <Box x={35} y={215} w={110} h={36} lines={["x₂"]} tone="light" />
      <Box x={155} y={215} w={110} h={36} lines={["y₂"]} tone="light" />
      <Note x={310} y={275} lines={["Each level is formed from successive differences of the previous level."]} />
    </Frame>
  );
}
