import { Arrow, Box, Frame, Lines, Note } from "./DiagramKit";

export default function C305QuadratureRulesDiagram() {
  return (
    <Frame w={620} h={320} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Quadrature Rules: geometric idea"]} size={12} bold />
      <Box x={35} y={60} w={165} h={46} lines={["Trapezoidal", "straight-line strips"]} tone="dark" bold />
      <Box x={225} y={60} w={165} h={46} lines={["Simpson 1/3", "quadratic strips"]} tone="mid" bold />
      <Box x={415} y={60} w={165} h={46} lines={["Simpson 3/8", "cubic strips"]} tone="outline" bold />
      <Arrow points={[[117,106],[117,145]]} />
      <Arrow points={[[307,106],[307,145]]} />
      <Arrow points={[[497,106],[497,145]]} />
      <Box x={55} y={145} w={125} h={42} lines={["1, 1"]} tone="light" />
      <Box x={245} y={145} w={125} h={42} lines={["1, 4, 1"]} tone="light" />
      <Box x={435} y={145} w={125} h={42} lines={["1, 3, 3, 1"]} tone="light" />
      <Note x={310} y={220} lines={["Approximate the area under f(x) using simple local polynomial shapes."]} />
      <Note x={310} y={245} lines={["Composite formulas repeat these weights across equal subintervals."]} />
      <Note x={310} y={275} lines={["Always check the required number of subintervals before applying Simpson rules."]} bold />
    </Frame>
  );
}
