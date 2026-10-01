import { Arrow, Box, Frame } from "./DiagramKit";

export default function It03IndexingDiagram() {
  return (
    <Frame w={720} h={250} className="mx-auto w-full max-w-2xl">
      <Box x={20} y={78} w={100} h={64} lines={["Root Index", "Find path"]} tone="dark" bold={true} size={10} />
      <Arrow points={[[120,110],[135,110]]} />
      <Box x={135} y={78} w={100} h={64} lines={["Branch", "Narrow"]} tone="light" bold={true} size={10} />
      <Arrow points={[[235,110],[250,110]]} />
      <Box x={250} y={78} w={100} h={64} lines={["Leaf Entries", "Locate key"]} tone="light" bold={true} size={10} />
      <Arrow points={[[350,110],[365,110]]} />
      <Box x={365} y={78} w={100} h={64} lines={["Data Records", "Read row"]} tone="light" bold={true} size={10} />
    </Frame>
  );
}
