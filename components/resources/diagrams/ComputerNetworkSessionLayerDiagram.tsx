import { Arrow, Box, Frame } from "./DiagramKit";
export default function ComputerNetworkSessionLayerDiagram() {
  return <Frame w={720} h={190} className="mx-auto w-full max-w-2xl">
    <Box x={25} y={60} w={150} h={50} lines={["Client"]} tone="dark" /><Arrow points={[[175,85],[230,85]]} />
    <Box x={230} y={60} w={250} h={50} lines={["Session","establish • use • terminate"]} tone="mid" /><Arrow points={[[480,85],[535,85]]} />
    <Box x={535} y={60} w={150} h={50} lines={["Server"]} tone="light" />
  </Frame>;
}