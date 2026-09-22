import { Arrow, Box, Frame } from "./DiagramKit";

export function AwtHierarchyDiagram() {
  return (
    <Frame w={560} h={260} className="mx-auto w-full max-w-lg">
      <Box x={220} y={10} w={120} h={30} lines={["Component"]} tone="dark" bold />
      <Arrow points={[[280, 40], [280, 66]]} />
      <Box x={220} y={68} w={120} h={30} lines={["Container"]} tone="mid" bold />

      <Arrow points={[[280, 98], [110, 130]]} />
      <Arrow points={[[280, 98], [280, 130]]} />
      <Arrow points={[[280, 98], [450, 130]]} />
      <Box x={50} y={132} w={120} h={30} lines={["Window"]} tone="light" />
      <Box x={220} y={132} w={120} h={30} lines={["Panel"]} tone="light" />
      <Box x={390} y={132} w={120} h={30} lines={["ScrollPane"]} tone="light" />

      <Arrow points={[[110, 162], [110, 188]]} />
      <Box x={50} y={190} w={120} h={30} lines={["Frame"]} tone="outline" />
      <Arrow points={[[280, 162], [280, 188]]} />
      <Box x={220} y={190} w={120} h={30} lines={["Applet"]} tone="outline" />

      <Arrow points={[[220, 25], [40, 60]]} />
      <Box x={10} y={62} w={130} h={54} lines={["Label, Button,", "TextField, Checkbox,", "Choice, List, Canvas"]} tone="light" size={9} />
    </Frame>
  );
}
