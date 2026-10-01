import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export function BalancedScorecardPerspectivesDiagram() {
  return (
    <Frame w={560} h={310} className="mx-auto w-full max-w-xl">
      <Box x={205} y={125} w={150} h={50} lines={["Strategy"]} tone="dark" bold />
      <Box x={205} y={20} w={150} h={42} lines={["Financial"]} tone="light" />
      <Box x={35} y={125} w={145} h={42} lines={["Customer"]} tone="light" />
      <Box x={380} y={125} w={145} h={42} lines={["Internal Process"]} tone="light" />
      <Box x={205} y={230} w={150} h={42} lines={["Learning & Growth"]} tone="mid" bold size={10} />
      <Arrow points={[[280,62],[280,125]]} />
      <Arrow points={[[180,146],[205,146]]} />
      <Arrow points={[[380,146],[355,146]]} />
      <Arrow points={[[280,230],[280,175]]} />
      <Lines x={280} y={294} lines={["Multiple perspectives create a broader performance view"]} size={10} fill="fill-ink-600" />
    </Frame>
  );
}
