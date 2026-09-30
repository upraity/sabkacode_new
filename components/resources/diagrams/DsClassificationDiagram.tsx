import { Arrow, Box, Frame } from "./DiagramKit";

export function DsClassificationDiagram() {
  return (
    <Frame w={540} h={220} className="mx-auto w-full max-w-lg">
      <Box x={210} y={10} w={120} h={32} lines={["Data Structure"]} tone="dark" bold />
      <Arrow points={[[270, 42], [140, 76]]} />
      <Arrow points={[[270, 42], [400, 76]]} />
      <Box x={80} y={78} w={120} h={30} lines={["Primitive"]} tone="mid" bold />
      <Box x={340} y={78} w={120} h={30} lines={["Non-primitive"]} tone="mid" bold />
      <Box x={10} y={130} w={220} h={26} lines={["int, char, float, double, pointer"]} tone="light" size={9} />
      <Arrow points={[[400, 108], [280, 140]]} />
      <Arrow points={[[400, 108], [460, 140]]} />
      <Box x={220} y={142} w={110} h={28} lines={["Linear"]} tone="light" />
      <Box x={400} y={142} w={110} h={28} lines={["Non-linear"]} tone="light" />
      <Box x={205} y={182} w={140} h={26} lines={["Array, list, stack, queue"]} tone="outline" size={9} />
      <Box x={385} y={182} w={140} h={26} lines={["Tree, graph"]} tone="outline" size={9} />
    </Frame>
  );
}
