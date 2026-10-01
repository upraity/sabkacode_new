import { Arrow, Box, Frame } from "./DiagramKit";

export function CompetencyMappingCareerLinkDiagram() {
  return (
    <Frame w={560} h={270} className="mx-auto w-full max-w-xl">
      <Box x={30} y={25} w={140} h={42} lines={["Role", "competencies"]} tone="dark" bold />
      <Box x={210} y={25} w={140} h={42} lines={["Current", "competencies"]} tone="light" />
      <Box x={390} y={25} w={140} h={42} lines={["Gap", "analysis"]} tone="light" />
      <Arrow points={[[170,46],[210,46]]} />
      <Arrow points={[[350,46],[390,46]]} />
      <Arrow points={[[460,67],[460,120],[280,120]]} />
      <Box x={190} y={100} w={180} h={42} lines={["Development", "actions"]} tone="light" />
      <Arrow points={[[190,121],[100,121],[100,190]]} />
      <Arrow points={[[280,142],[280,190]]} />
      <Arrow points={[[370,121],[460,121],[460,190]]} />
      <Box x={50} y={190} w={100} h={42} lines={["Training"]} tone="light" />
      <Box x={230} y={190} w={100} h={42} lines={["Career", "development"]} tone="mid" bold />
      <Box x={410} y={190} w={100} h={42} lines={["Future-role", "readiness"]} tone="light" size={10} />
    </Frame>
  );
}
