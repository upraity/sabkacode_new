import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function FourOrdersNatureDiagram() {
  return (
    <Frame w={620} h={310} className="mx-auto w-full max-w-2xl">
      <Note x={310} y={22} lines={["FourOrdersNature"]} size={11} bold />
      <Box x={35} y={125} w={120} h={52} lines={["Material order"]} tone="dark" bold />
      <Arrow points={[[155,151],[195,151]]} />
      <Box x={195} y={125} w={120} h={52} lines={["Plant / bio order"]} tone="light" bold />
      <Arrow points={[[315,151],[355,151]]} />
      <Box x={355} y={125} w={120} h={52} lines={["Animal order"]} tone="light" bold />
      <Arrow points={[[475,151],[515,151]]} />
      <Box x={515} y={125} w={120} h={52} lines={["Human order"]} tone="mid" bold />
      <Note x={310} y={286} lines={["MBA IV Semester | mba-universal-human-values-and-professional-ethics-four-orders-nature"]} size={10} />
    </Frame>
  );
}
