import { Arrow, Box, Frame, Note } from "./DiagramKit";

export default function GeopoliticalTradeOrderDiagram() {
  return (
    <Frame w={650} h={350} className="mx-auto w-full max-w-2xl">
      <Box x={245} y={20} w={160} h={52} lines={["Geopolitics"]} tone="dark" bold />
      <Box x={25} y={110} w={135} h={58} lines={["Geography", "routes + resources"]} tone="light" size={10} />
      <Box x={185} y={110} w={135} h={58} lines={["State power", "policy + security"]} tone="light" size={10} />
      <Box x={345} y={110} w={135} h={58} lines={["Economics", "trade + finance"]} tone="light" size={10} />
      <Box x={505} y={110} w={120} h={58} lines={["Alliances", "institutions"]} tone="light" size={10} />
      <Arrow points={[[325, 72], [92, 110]]} />
      <Arrow points={[[325, 72], [252, 110]]} />
      <Arrow points={[[325, 72], [412, 110]]} />
      <Arrow points={[[325, 72], [565, 110]]} />
      <Box x={160} y={220} w={330} h={58} lines={["Global trade order", "rules + flows + dependencies"]} tone="mid" bold size={10} />
      <Arrow points={[[92, 168], [180, 220]]} />
      <Arrow points={[[252, 168], [255, 220]]} />
      <Arrow points={[[412, 168], [395, 220]]} />
      <Arrow points={[[565, 168], [470, 220]]} />
      <Note x={325} y={320} lines={["Business impact: market access, cost, route risk, regulation and investment location."]} size={11} />
    </Frame>
  );
}
