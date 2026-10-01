import { Arrow, Box, Frame } from "./DiagramKit";

export function KraKsaKpiFrameworkDiagram() {
  return (
    <Frame w={540} h={250} className="mx-auto w-full max-w-xl">
      <Box x={30} y={70} w={135} h={50} lines={["KRA", "Key Result Area"]} tone="dark" bold />
      <Box x={202} y={70} w={135} h={50} lines={["KSA", "Knowledge, Skills, Abilities"]} tone="light" size={10} />
      <Box x={375} y={70} w={135} h={50} lines={["KPI", "Key Performance Indicator"]} tone="mid" bold size={10} />
      <Arrow points={[[165,95],[202,95]]} />
      <Arrow points={[[337,95],[375,95]]} />
      <Box x={155} y={170} w={230} h={42} lines={["Role performance objectives and evidence"]} tone="light" />
      <Arrow points={[[98,120],[98,170],[155,170]]} />
      <Arrow points={[[442,120],[442,170],[385,170]]} />
    </Frame>
  );
}
