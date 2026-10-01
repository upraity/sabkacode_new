import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function GratuityProcessDiagram() {
  return (
    <Frame w={540} h={270} className="mx-auto w-full max-w-xl">
      <Box x={30} y={35} w={120} h={42} lines={["Service", "history"]} tone="light" />
      <Arrow points={[[150, 56], [185, 56]]} />
      <Box x={185} y={35} w={130} h={42} lines={["Eligibility /", "continuous service"]} tone="light" />
      <Arrow points={[[315, 56], [350, 56]]} />
      <Box x={350} y={35} w={120} h={42} lines={["Determine", "benefit"]} tone="mid" bold />
      <Arrow points={[[410, 77], [410, 135], [270, 135]]} />
      <Box x={185} y={114} w={170} h={42} lines={["Nomination /", "claim process"]} tone="light" />
      <Arrow points={[[270, 156], [270, 205]]} />
      <Box x={175} y={205} w={190} h={40} lines={["Payment of gratuity"]} tone="dark" bold />
      <Note x={270} y={262} lines={["Use the statutory calculation and eligibility rules prescribed for the course."]} size={10} />
    </Frame>
  );
}
