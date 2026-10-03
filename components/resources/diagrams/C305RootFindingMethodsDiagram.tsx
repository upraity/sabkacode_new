import { Arrow, Box, Frame, Lines, Note } from "./DiagramKit";

export default function C305RootFindingMethodsDiagram() {
  return (
    <Frame w={620} h={300} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={22} lines={["Numerical Root-Finding"]} size={12} bold />
      <Box x={30} y={60} w={150} h={48} lines={["Bracketing", "Methods"]} tone="dark" bold />
      <Box x={220} y={60} w={150} h={48} lines={["Open", "Method"]} tone="mid" bold />
      <Arrow points={[[180,84],[220,84]]} />
      <Box x={20} y={145} w={170} h={48} lines={["Bisection", "f(a)f(b)<0"]} tone="light" />
      <Box x={200} y={145} w={170} h={48} lines={["False Position", "Secant intercept"]} tone="light" />
      <Box x={410} y={145} w={170} h={48} lines={["Newton-Raphson", "Tangent + derivative"]} tone="outline" />
      <Arrow points={[[105,108],[105,145]]} />
      <Arrow points={[[295,108],[285,145]]} />
      <Arrow points={[[295,108],[495,145]]} />
      <Note x={310} y={230} lines={["Goal: approximate x such that f(x)=0"]} bold />
      <Note x={310} y={254} lines={["Bisection and False Position preserve a sign-changing bracket."]} />
    </Frame>
  );
}
