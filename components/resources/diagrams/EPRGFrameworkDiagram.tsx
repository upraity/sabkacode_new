import { Arrow, Box, Frame, Note } from "./DiagramKit";

export default function EPRGFrameworkDiagram() {
  return (
    <Frame w={650} h={320} className="mx-auto w-full max-w-2xl">
      <Box x={20} y={55} w={135} h={62} lines={["Ethnocentric", "home-country"]} tone="light" size={10} />
      <Box x={175} y={55} w={135} h={62} lines={["Polycentric", "local autonomy"]} tone="light" size={10} />
      <Box x={330} y={55} w={135} h={62} lines={["Regiocentric", "regional view"]} tone="light" size={10} />
      <Box x={485} y={55} w={145} h={62} lines={["Geocentric", "global integration"]} tone="dark" size={10} bold />
      <Arrow points={[[155, 86], [175, 86]]} />
      <Arrow points={[[310, 86], [330, 86]]} />
      <Arrow points={[[465, 86], [485, 86]]} />
      <Box x={105} y={165} w={440} h={58} lines={["Management orientation", "from home-country focus → integrated global perspective"]} tone="outline" size={10} />
      <Arrow points={[[87, 117], [190, 165]]} />
      <Arrow points={[[242, 117], [275, 165]]} />
      <Arrow points={[[397, 117], [370, 165]]} />
      <Arrow points={[[557, 117], [455, 165]]} />
      <Note x={325} y={275} lines={["EPRG describes orientation; it does not prescribe one universal structure for every firm."]} size={11} />
    </Frame>
  );
}
