import { Arrow, Box, Frame, Lines, Note } from "./DiagramKit";

export default function PESTELInternationalMarketDiagram() {
  return (
    <Frame w={620} h={360} className="mx-auto w-full max-w-2xl">
      <Box x={220} y={145} w={180} h={64} lines={["FOREIGN", "MARKET"]} tone="dark" bold />
      <Box x={30} y={30} w={140} h={50} lines={["Political"]} tone="light" />
      <Box x={240} y={30} w={140} h={50} lines={["Economic"]} tone="light" />
      <Box x={450} y={30} w={140} h={50} lines={["Social"]} tone="light" />
      <Box x={30} y={255} w={140} h={50} lines={["Technology"]} tone="outline" />
      <Box x={240} y={255} w={140} h={50} lines={["Environment"]} tone="outline" />
      <Box x={450} y={255} w={140} h={50} lines={["Legal"]} tone="outline" />
      <Arrow points={[[100, 80], [245, 145]]} />
      <Arrow points={[[310, 80], [310, 145]]} />
      <Arrow points={[[520, 80], [375, 145]]} />
      <Arrow points={[[100, 255], [245, 209]]} />
      <Arrow points={[[310, 255], [310, 209]]} />
      <Arrow points={[[520, 255], [375, 209]]} />
      <Note x={310} y={335} lines={["Use evidence for each factor: policy, macro data, culture, technology, ecology and law."]} size={11} />
    </Frame>
  );
}
