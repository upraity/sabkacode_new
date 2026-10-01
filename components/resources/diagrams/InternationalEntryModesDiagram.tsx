import { Arrow, Box, Frame, Note } from "./DiagramKit";

export default function InternationalEntryModesDiagram() {
  return (
    <Frame w={640} h={350} className="mx-auto w-full max-w-2xl">
      <Box x={25} y={45} w={105} h={58} lines={["Export"]} tone="light" bold />
      <Box x={145} y={45} w={105} h={58} lines={["Licensing", "/", "Franchising"]} tone="light" size={10} />
      <Box x={265} y={45} w={105} h={58} lines={["Alliance", "/", "JV"]} tone="light" size={10} />
      <Box x={385} y={45} w={105} h={58} lines={["Acquisition"]} tone="light" bold />
      <Box x={505} y={45} w={105} h={58} lines={["Greenfield"]} tone="dark" bold />
      <Arrow points={[[130, 74], [145, 74]]} />
      <Arrow points={[[250, 74], [265, 74]]} />
      <Arrow points={[[370, 74], [385, 74]]} />
      <Arrow points={[[490, 74], [505, 74]]} />
      <Note x={320} y={128} lines={["Generally: commitment and control rise as the firm moves right.", "Actual choice depends on risk, resources, regulation and strategy."]} size={10} />
      <Box x={70} y={185} w={220} h={60} lines={["Lower commitment", "Lower capital / control"]} tone="outline" />
      <Box x={350} y={185} w={220} h={60} lines={["Higher commitment", "Higher capital / control"]} tone="outline" />
      <Arrow points={[[290, 215], [350, 215]]} />
      <Box x={150} y={280} w={340} h={44} lines={["Market entry decision"]} tone="mid" bold />
      <Arrow points={[[180, 245], [220, 280]]} />
      <Arrow points={[[460, 245], [420, 280]]} />
    </Frame>
  );
}
