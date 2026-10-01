import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function SCNetworkDesignDiagram() {
  return (
    <Frame w={620} h={310} className="mx-auto w-full max-w-2xl">
      <Note x={310} y={22} lines={["SCNetworkDesign"]} size={11} bold />
      <Box x={55} y={82} w={120} h={52} lines={["Locations"]} tone="dark" bold />
      <Arrow points={[[175,108],[250,108]]} />
      <Box x={250} y={82} w={120} h={52} lines={["Capacity"]} tone="light" bold />
      <Arrow points={[[370,108],[445,108]]} />
      <Box x={445} y={82} w={120} h={52} lines={["Transport"]} tone="light" bold />
      <Box x={150} y={205} w={120} h={52} lines={["Inventory"]} tone="light" bold />
      <Box x={350} y={205} w={120} h={52} lines={["Network choice"]} tone="mid" bold />
      <Arrow points={[[115,134],[210,205]]} />
      <Arrow points={[[505,134],[410,205]]} />
      <Note x={310} y={286} lines={["MBA IV Semester | mba-managing-global-supply-chains-sc-network-design"]} size={10} />
    </Frame>
  );
}
