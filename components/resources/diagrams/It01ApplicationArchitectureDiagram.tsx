import { Arrow, Box, Frame } from "./DiagramKit";

export default function It01ApplicationArchitectureDiagram() {
  return (
    <Frame w={720} h={250} className="mx-auto w-full max-w-2xl">
      <Box x={20} y={78} w={100} h={64} lines={["Presentation", "UI"]} tone={dark} bold={true} size={10} />
      <Arrow points={[[120,110],[135,110]]} />
      <Box x={135} y={78} w={100} h={64} lines={["Business Logic", "Rules"]} tone={light} bold={true} size={10} />
      <Arrow points={[[235,110],[250,110]]} />
      <Box x={250} y={78} w={100} h={64} lines={["Data Layer", "Storage"]} tone={light} bold={true} size={10} />
      <Arrow points={[[350,110],[365,110]]} />
      <Box x={365} y={78} w={100} h={64} lines={["External Services", "Payments / APIs"]} tone={light} bold={true} size={10} />
    </Frame>
  );
}
