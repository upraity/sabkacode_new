import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function PerformanceManagementCycleDiagram() {
  return (
    <Frame w={560} h={250} className="mx-auto w-full max-w-xl">
      <Box x={25} y={92} w={90} h={42} lines={["Plan"]} tone="dark" bold />
      <Box x={135} y={92} w={90} h={42} lines={["Execute"]} tone="light" />
      <Box x={245} y={92} w={90} h={42} lines={["Monitor"]} tone="light" />
      <Box x={355} y={92} w={90} h={42} lines={["Review"]} tone="light" />
      <Box x={465} y={92} w={70} h={42} lines={["Develop"]} tone="mid" bold />
      <Arrow points={[[115,113],[135,113]]} />
      <Arrow points={[[225,113],[245,113]]} />
      <Arrow points={[[335,113],[355,113]]} />
      <Arrow points={[[445,113],[465,113]]} />
      <Arrow points={[[500,134],[500,195],[70,195],[70,134]]} />
      <Note x={280} y={225} lines={["The next cycle begins with revised expectations and development actions."]} size={10} />
    </Frame>
  );
}
