import { Arrow, Box, Frame } from "./DiagramKit";

export default function It023DPrintingDiagram() {
  return (
    <Frame w={720} h={250} className="mx-auto w-full max-w-2xl">
      <Box x={20} y={78} w={100} h={64} lines={["Digital Model", "Design"]} tone={dark} bold={true} size={10} />
      <Arrow points={[[120,110],[135,110]]} />
      <Box x={135} y={78} w={100} h={64} lines={["Slice", "Prepare"]} tone={light} bold={true} size={10} />
      <Arrow points={[[235,110],[250,110]]} />
      <Box x={250} y={78} w={100} h={64} lines={["Toolpath", "Plan"]} tone={light} bold={true} size={10} />
      <Arrow points={[[350,110],[365,110]]} />
      <Box x={365} y={78} w={100} h={64} lines={["Layers", "Build"]} tone={light} bold={true} size={10} />
      <Arrow points={[[465,110],[480,110]]} />
      <Box x={480} y={78} w={100} h={64} lines={["Product", "Finish"]} tone={light} bold={true} size={10} />
    </Frame>
  );
}
