import { Arrow, Box, Frame, Lines, Note } from "./DiagramKit";

export function EmployeeRelationsFrameworkDiagram() {
  return (
    <Frame w={520} h={300} className="mx-auto w-full max-w-xl">
      <Box x={190} y={20} w={140} h={38} lines={["Employee Relations"]} tone="dark" bold />
      <Arrow points={[[260, 58], [260, 92]]} />
      <Box x={40} y={92} w={150} h={42} lines={["Communication", "and Feedback"]} tone="light" />
      <Box x={185} y={92} w={150} h={42} lines={["Grievance", "Handling"]} tone="light" />
      <Box x={330} y={92} w={150} h={42} lines={["Participation", "and Voice"]} tone="light" />
      <Arrow points={[[260, 92], [115, 92]]} />
      <Arrow points={[[260, 92], [260, 92]]} head={false} />
      <Arrow points={[[260, 92], [405, 92]]} />
      <Arrow points={[[115, 134], [115, 190], [260, 190]]} />
      <Arrow points={[[260, 134], [260, 190]]} />
      <Arrow points={[[405, 134], [405, 190], [260, 190]]} />
      <Box x={170} y={190} w={180} h={42} lines={["Trust, Cooperation", "and Workplace Stability"]} tone="mid" bold />
      <Arrow points={[[260, 232], [260, 262]]} />
      <Note x={260} y={278} lines={["Constructive employee–management relationship"]} size={10} />
    </Frame>
  );
}
