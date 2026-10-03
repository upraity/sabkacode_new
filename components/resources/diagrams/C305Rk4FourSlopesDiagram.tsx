import { Arrow, Box, Frame, Lines, Note } from "./DiagramKit";

export default function C305Rk4FourSlopesDiagram() {
  return (
    <Frame w={620} h={300} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Classical RK4: four slope evaluations"]} size={12} bold />
      <Box x={35} y={65} w={120} h={45} lines={["k₁", "start point"]} tone="dark" bold />
      <Box x={180} y={65} w={120} h={45} lines={["k₂", "midpoint"]} tone="light" />
      <Box x={325} y={65} w={120} h={45} lines={["k₃", "midpoint"]} tone="light" />
      <Box x={470} y={65} w={120} h={45} lines={["k₄", "end point"]} tone="mid" bold />
      <Arrow points={[[155,87],[180,87]]} />
      <Arrow points={[[300,87],[325,87]]} />
      <Arrow points={[[445,87],[470,87]]} />
      <Box x={170} y={155} w={280} h={48} lines={["Weighted update", "k₁ + 2k₂ + 2k₃ + k₄"]} tone="outline" bold />
      <Arrow points={[[530,110],[530,135],[450,135],[450,155]]} />
      <Note x={310} y={235} lines={["yₙ₊₁ = yₙ + (h/6)(k₁ + 2k₂ + 2k₃ + k₄)"]} bold />
      <Note x={310} y={265} lines={["Four slopes are combined to obtain one RK4 step."]} />
    </Frame>
  );
}
