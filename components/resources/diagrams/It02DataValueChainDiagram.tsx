import { Arrow, Box, Frame } from "./DiagramKit";

export default function It02DataValueChainDiagram() {
  return (
    <Frame w={720} h={250} className="mx-auto w-full max-w-2xl">
      <Box x={20} y={78} w={100} h={64} lines={["Collect", "Sources"]} tone={dark} bold={true} size={10} />
      <Arrow points={[[120,110],[135,110]]} />
      <Box x={135} y={78} w={100} h={64} lines={["Clean", "Quality"]} tone={light} bold={true} size={10} />
      <Arrow points={[[235,110],[250,110]]} />
      <Box x={250} y={78} w={100} h={64} lines={["Store", "Platform"]} tone={light} bold={true} size={10} />
      <Arrow points={[[350,110],[365,110]]} />
      <Box x={365} y={78} w={100} h={64} lines={["Analyse", "Models"]} tone={light} bold={true} size={10} />
      <Arrow points={[[465,110],[480,110]]} />
      <Box x={480} y={78} w={100} h={64} lines={["Interpret", "Insight"]} tone={light} bold={true} size={10} />
      <Arrow points={[[580,110],[595,110]]} />
      <Box x={595} y={78} w={100} h={64} lines={["Act", "Decision"]} tone={light} bold={true} size={10} />
    </Frame>
  );
}
