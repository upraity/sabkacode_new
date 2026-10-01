import { Arrow, Box, Frame, Note } from "./DiagramKit";

export default function TradeTheoryComparisonDiagram() {
  return (
    <Frame w={620} h={340} className="mx-auto w-full max-w-2xl">
      <Box x={18} y={35} w={125} h={62} lines={["Absolute", "advantage"]} tone="dark" bold />
      <Box x={165} y={35} w={125} h={62} lines={["Comparative", "advantage"]} tone="mid" bold />
      <Box x={312} y={35} w={125} h={62} lines={["Factor", "endowments"]} tone="light" bold />
      <Box x={459} y={35} w={125} h={62} lines={["Scale &", "innovation"]} tone="outline" bold />
      <Arrow points={[[143, 66], [165, 66]]} />
      <Arrow points={[[290, 66], [312, 66]]} />
      <Arrow points={[[437, 66], [459, 66]]} />
      <Box x={70} y={145} w={190} h={70} lines={["Productivity", "difference", "→ specialization"]} tone="light" />
      <Box x={360} y={145} w={190} h={70} lines={["Resources + scale", "→ trade pattern", "and competitiveness"]} tone="light" />
      <Arrow points={[[80, 97], [150, 145]]} />
      <Arrow points={[[228, 97], [220, 145]]} />
      <Arrow points={[[374, 97], [420, 145]]} />
      <Arrow points={[[522, 97], [480, 145]]} />
      <Box x={150} y={250} w={320} h={48} lines={["International specialization", "and exchange"]} tone="dark" bold />
      <Arrow points={[[165, 215], [230, 250]]} />
      <Arrow points={[[455, 215], [390, 250]]} />
      <Note x={310} y={325} lines={["Theories answer different questions; they are complementary rather than identical."]} size={11} />
    </Frame>
  );
}
