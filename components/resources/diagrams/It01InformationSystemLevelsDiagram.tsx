import { Arrow, Box, Frame } from "./DiagramKit";

export default function It01InformationSystemLevelsDiagram() {
  return (
    <Frame w={720} h={250} className="mx-auto w-full max-w-2xl">
      <Box x={20} y={78} w={100} h={64} lines={["Operational systems", "Transactions"]} tone={dark} bold={true} size={10} />
      <Arrow points={[[120,110],[135,110]]} />
      <Box x={135} y={78} w={100} h={64} lines={["MIS / DSS", "Management analysis"]} tone={light} bold={true} size={10} />
      <Arrow points={[[235,110],[250,110]]} />
      <Box x={250} y={78} w={100} h={64} lines={["Executive information", "Strategic overview"]} tone={light} bold={true} size={10} />
    </Frame>
  );
}
