import { Arrow, Box, Frame, Lines, Note } from "./DiagramKit";

export default function C305OdeMethodsDiagram() {
  return (
    <Frame w={620} h={300} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Numerical Solution of y′ = f(x,y)"]} size={12} bold />
      <Box x={25} y={65} w={160} h={50} lines={["Euler", "one slope"]} tone="dark" bold />
      <Box x={230} y={65} w={160} h={50} lines={["Picard", "successive integrals"]} tone="mid" bold />
      <Box x={435} y={65} w={160} h={50} lines={["RK4", "four slopes"]} tone="outline" bold />
      <Arrow points={[[105,115],[105,150]]} />
      <Arrow points={[[310,115],[310,150]]} />
      <Arrow points={[[515,115],[515,150]]} />
      <Box x={35} y={150} w={140} h={42} lines={["simple", "step update"]} tone="light" />
      <Box x={240} y={150} w={140} h={42} lines={["y = y₀ + ∫f dt"]} tone="light" />
      <Box x={445} y={150} w={140} h={42} lines={["k₁,k₂,k₃,k₄"]} tone="light" />
      <Note x={310} y={230} lines={["All methods approximate the same initial-value problem."]} />
      <Note x={310} y={255} lines={["They differ in how slope/integral information is combined within a step."]} />
    </Frame>
  );
}
