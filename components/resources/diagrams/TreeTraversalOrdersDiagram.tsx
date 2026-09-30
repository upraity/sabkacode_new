import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function TreeTraversalOrdersDiagram() {
  return (
    <Frame w={340} h={220} className="mx-auto w-full max-w-sm">
      <Box x={150} y={10} w={40} h={30} lines={["1"]} tone="dark" bold />
      <Arrow points={[[160,40],[90,80]]} />
      <Arrow points={[[190,40],[250,80]]} />
      <Box x={70} y={82} w={40} h={30} lines={["2"]} tone="mid" bold />
      <Box x={230} y={82} w={40} h={30} lines={["3"]} tone="mid" bold />
      <Arrow points={[[80,112],[40,154]]} />
      <Arrow points={[[100,112],[140,154]]} />
      <Box x={20} y={156} w={40} h={30} lines={["4"]} tone="light" />
      <Box x={120} y={156} w={40} h={30} lines={["5"]} tone="light" />
      <Note x={170} y={200} lines={["Pre: 1,2,4,5,3  In: 4,2,5,1,3  Post: 4,5,2,3,1"]} size={10} />
    </Frame>
  );
}
