import { Arrow, Box, Frame, Lines, Note } from "./DiagramKit";

export default function C305NewtonTangentDiagram() {
  return (
    <Frame w={620} h={300} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Newton-Raphson: tangent gives next approximation"]} size={12} bold />
      <Arrow points={[[70,245],[560,245]]} head={false} />
      <Arrow points={[[310,260],[310,55]]} head={false} />
      <Box x={95} y={210} w={110} h={38} lines={["xₙ"]} tone="dark" bold />
      <Box x={450} y={210} w={110} h={38} lines={["xₙ₊₁"]} tone="mid" bold />
      <Arrow points={[[205,210],[450,210]]} dashed={true} />
      <Note x={310} y={180} lines={["Tangent at xₙ"]} />
      <Note x={310} y={270} lines={["xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ)"]} bold />
      <Note x={310} y={292} lines={["Repeat until the required tolerance is reached."]} />
    </Frame>
  );
}
