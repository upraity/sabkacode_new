import { Arrow, Box, Frame, Note } from "./DiagramKit";

export default function InternationalMarketingMixDiagram() {
  return (
    <Frame w={620} h={330} className="mx-auto w-full max-w-2xl">
      <Box x={230} y={18} w={160} h={48} lines={["International", "Marketing"]} tone="dark" bold />
      <Box x={30} y={105} w={125} h={54} lines={["Product", "adapt / standardize"]} tone="light" size={10} />
      <Box x={175} y={105} w={125} h={54} lines={["Price", "cost + demand + FX"]} tone="light" size={10} />
      <Box x={320} y={105} w={125} h={54} lines={["Promotion", "language + culture"]} tone="light" size={10} />
      <Box x={465} y={105} w={125} h={54} lines={["Place", "channels + logistics"]} tone="light" size={10} />
      <Arrow points={[[310, 66], [92, 105]]} />
      <Arrow points={[[310, 66], [237, 105]]} />
      <Arrow points={[[310, 66], [382, 105]]} />
      <Arrow points={[[310, 66], [527, 105]]} />
      <Box x={125} y={215} w={370} h={52} lines={["Global consistency", "↕", "Local responsiveness"]} tone="outline" bold size={10} />
      <Arrow points={[[92, 159], [170, 215]]} />
      <Arrow points={[[237, 159], [245, 215]]} />
      <Arrow points={[[382, 159], [375, 215]]} />
      <Arrow points={[[527, 159], [450, 215]]} />
      <Note x={310} y={302} lines={["International marketing = common brand logic + evidence-based local adaptation."]} size={11} />
    </Frame>
  );
}
