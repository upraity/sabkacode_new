import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function MinimumWageFrameworkDiagram() {
  return (
    <Frame w={520} h={280} className="mx-auto w-full max-w-xl">
      <Box x={175} y={18} w={170} h={40} lines={["Minimum Wage"]} tone="dark" bold />
      <Arrow points={[[260, 58], [260, 88]]} />
      <Box x={35} y={88} w={145} h={44} lines={["Fixation", "of rates"]} tone="light" />
      <Box x={188} y={88} w={145} h={44} lines={["Revision", "of rates"]} tone="light" />
      <Box x={341} y={88} w={145} h={44} lines={["Payment at", "applicable rate"]} tone="light" />
      <Arrow points={[[260, 88], [108, 88]]} />
      <Arrow points={[[260, 88], [260, 88]]} head={false} />
      <Arrow points={[[260, 88], [413, 88]]} />
      <Arrow points={[[108, 132], [108, 190], [260, 190]]} />
      <Arrow points={[[260, 132], [260, 190]]} />
      <Arrow points={[[413, 132], [413, 190], [260, 190]]} />
      <Box x={165} y={190} w={190} h={42} lines={["Statutory wage", "protection"]} tone="mid" bold />
      <Note x={260} y={262} lines={["Exact rates and coverage depend on the applicable legal framework."]} size={10} />
    </Frame>
  );
}
