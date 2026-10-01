import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function EsiBenefitFrameworkDiagram() {
  return (
    <Frame w={540} h={290} className="mx-auto w-full max-w-xl">
      <Box x={190} y={18} w={160} h={42} lines={["ESI", "Framework"]} tone="dark" bold />
      <Arrow points={[[270, 60], [270, 88]]} />
      <Box x={35} y={88} w={145} h={44} lines={["Coverage", "and eligibility"]} tone="light" />
      <Box x={198} y={88} w={145} h={44} lines={["Contributions", "and insurance"]} tone="light" />
      <Box x={361} y={88} w={145} h={44} lines={["Administration", "and records"]} tone="light" />
      <Arrow points={[[270, 88], [108, 88]]} />
      <Arrow points={[[270, 88], [270, 88]]} head={false} />
      <Arrow points={[[270, 88], [433, 88]]} />
      <Arrow points={[[108, 132], [108, 190], [270, 190]]} />
      <Arrow points={[[270, 132], [270, 190]]} />
      <Arrow points={[[433, 132], [433, 190], [270, 190]]} />
      <Box x={170} y={190} w={200} h={42} lines={["Major statutory", "benefits"]} tone="mid" bold />
      <Note x={270} y={260} lines={["Medical, cash and dependants' benefits as applicable."]} size={10} />
    </Frame>
  );
}
