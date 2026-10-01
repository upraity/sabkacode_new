import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export function TradeUnionParticipativeManagementDiagram() {
  return (
    <Frame w={540} h={300} className="mx-auto w-full max-w-xl">
      <Box x={200} y={18} w={140} h={38} lines={["Trade Union"]} tone="dark" bold />
      <Box x={30} y={92} w={145} h={42} lines={["Collective", "Representation"]} tone="light" />
      <Box x={198} y={92} w={145} h={42} lines={["Industrial", "Democracy"]} tone="light" />
      <Box x={365} y={92} w={145} h={42} lines={["Employee", "Participation"]} tone="light" />
      <Arrow points={[[235, 56], [102, 92]]} />
      <Arrow points={[[270, 56], [270, 92]]} />
      <Arrow points={[[305, 56], [438, 92]]} />
      <Arrow points={[[102, 134], [102, 198], [270, 198]]} />
      <Arrow points={[[270, 134], [270, 198]]} />
      <Arrow points={[[438, 134], [438, 198], [270, 198]]} />
      <Box x={180} y={198} w={180} h={42} lines={["Participative", "Management"]} tone="mid" bold />
      <Arrow points={[[270, 240], [270, 270]]} />
      <Lines x={270} y={285} lines={["Employee voice in workplace decisions"]} size={10} fill="fill-ink-600" />
    </Frame>
  );
}
