import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function ServiceConsumerBehaviorDiagram() {
  return (
    <Frame w={620} h={310} className="mx-auto w-full max-w-2xl">
      <Note x={310} y={22} lines={["ServiceConsumerBehavior"]} size={11} bold />
      <Box x={55} y={82} w={120} h={52} lines={["Need"]} tone="dark" bold />
      <Arrow points={[[175,108],[250,108]]} />
      <Box x={250} y={82} w={120} h={52} lines={["Search"]} tone="light" bold />
      <Arrow points={[[370,108],[445,108]]} />
      <Box x={445} y={82} w={120} h={52} lines={["Evaluation"]} tone="light" bold />
      <Box x={55} y={205} w={120} h={52} lines={["Purchase"]} tone="light" bold />
      <Box x={250} y={205} w={120} h={52} lines={["Experience"]} tone="light" bold />
      <Box x={445} y={205} w={120} h={52} lines={["Post-use"]} tone="mid" bold />
      <Arrow points={[[115,134],[115,205]]} />
      <Arrow points={[[505,134],[505,205]]} />
      <Note x={310} y={286} lines={["MBA IV Semester | mba-service-and-retail-marketing-service-consumer-behavior"]} size={10} />
    </Frame>
  );
}
