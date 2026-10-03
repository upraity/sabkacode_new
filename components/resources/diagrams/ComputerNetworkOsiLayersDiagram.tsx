import { Box, Frame } from "./DiagramKit";
export default function ComputerNetworkOsiLayersDiagram() {
  return <Frame w={520} h={390} className="mx-auto w-full max-w-lg">
    <Box x={80} y={15} w={360} h={42} lines={["7 Application"]} tone="dark" />
    <Box x={80} y={62} w={360} h={42} lines={["6 Presentation"]} tone="mid" />
    <Box x={80} y={109} w={360} h={42} lines={["5 Session"]} tone="light" />
    <Box x={80} y={156} w={360} h={42} lines={["4 Transport"]} tone="mid" />
    <Box x={80} y={203} w={360} h={42} lines={["3 Network"]} tone="dark" />
    <Box x={80} y={250} w={360} h={42} lines={["2 Data Link"]} tone="mid" />
    <Box x={80} y={297} w={360} h={42} lines={["1 Physical"]} tone="light" />
  </Frame>;
}