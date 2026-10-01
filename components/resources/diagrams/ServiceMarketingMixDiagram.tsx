import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function ServiceMarketingMixDiagram() {
  return (
    <Frame w={620} h={310} className="mx-auto w-full max-w-2xl">
      <Note x={310} y={22} lines={["ServiceMarketingMix"]} size={11} bold />
      <Box x={55} y={82} w={120} h={52} lines={["Product"]} tone="dark" bold />
      <Arrow points={[[175,108],[250,108]]} />
      <Box x={250} y={82} w={120} h={52} lines={["Price"]} tone="light" bold />
      <Arrow points={[[370,108],[445,108]]} />
      <Box x={445} y={82} w={120} h={52} lines={["Place"]} tone="light" bold />
      <Box x={55} y={205} w={120} h={52} lines={["Promotion"]} tone="light" bold />
      <Box x={250} y={205} w={120} h={52} lines={["People"]} tone="light" bold />
      <Box x={445} y={205} w={120} h={52} lines={["Process"]} tone="mid" bold />
      <Arrow points={[[115,134],[115,205]]} />
      <Arrow points={[[505,134],[505,205]]} />
      <Note x={310} y={286} lines={["MBA IV Semester | mba-service-and-retail-marketing-service-marketing-mix"]} size={10} />
    </Frame>
  );
}
