import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function BcaSem3DeBooleanGatesDiagram() {
  return (
    <Frame w={720} h={300} className="mx-auto w-full max-w-2xl">
      <Box x={30} y={35} w={150} h={50} lines={["AND", "A·B"]} tone="dark" bold />
      <Box x={30} y={125} w={150} h={50} lines={["OR", "A+B"]} tone="mid" bold />
      <Box x={30} y={215} w={150} h={50} lines={["NOT", "A̅"]} tone="light" bold />
      <Arrow points={[[180,60],[275,60]]} />
      <Arrow points={[[180,150],[275,150]]} />
      <Arrow points={[[180,240],[275,240]]} />
      <Box x={275} y={30} w={180} h={65} lines={["Boolean laws", "simplify expressions"]} tone="outline" />
      <Box x={275} y={118} w={180} h={65} lines={["De Morgan", "convert AND/OR forms"]} tone="outline" />
      <Box x={275} y={206} w={180} h={65} lines={["K-map", "visual minimization"]} tone="outline" />
      <Arrow points={[[455,62],[565,62]]} />
      <Arrow points={[[455,150],[565,150]]} />
      <Arrow points={[[455,238],[565,238]]} />
      <Box x={565} y={110} w={125} h={80} lines={["Simplified", "logic", "circuit"]} tone="dark" bold />
    </Frame>
  );
}
