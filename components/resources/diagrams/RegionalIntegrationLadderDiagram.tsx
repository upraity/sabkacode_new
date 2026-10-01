import { Arrow, Box, Frame, Note } from "./DiagramKit";

export default function RegionalIntegrationLadderDiagram() {
  return (
    <Frame w={650} h={350} className="mx-auto w-full max-w-2xl">
      <Box x={25} y={250} w={130} h={50} lines={["Preferential", "arrangement"]} tone="light" size={10} />
      <Box x={170} y={210} w={130} h={50} lines={["Free Trade", "Area"]} tone="light" size={10} />
      <Box x={315} y={170} w={130} h={50} lines={["Customs", "Union"]} tone="light" size={10} />
      <Box x={460} y={130} w={130} h={50} lines={["Common", "Market"]} tone="light" size={10} />
      <Box x={385} y={55} w={170} h={50} lines={["Economic / deeper", "union"]} tone="dark" size={10} bold />
      <Arrow points={[[155, 275], [170, 235]]} />
      <Arrow points={[[300, 235], [315, 195]]} />
      <Arrow points={[[445, 195], [460, 155]]} />
      <Arrow points={[[525, 130], [485, 105]]} />
      <Note x={325} y={25} lines={["As integration deepens, members coordinate more economic policies and rules."]} size={11} />
      <Note x={325} y={320} lines={["Business effects can include tariff preferences, common rules, standards and altered competitive conditions."]} size={10} />
    </Frame>
  );
}
