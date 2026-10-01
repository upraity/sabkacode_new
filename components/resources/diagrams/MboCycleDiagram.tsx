import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function MboCycleDiagram() {
  return (
    <Frame w={560} h={250} className="mx-auto w-full max-w-xl">
      <Box x={25} y={90} w={100} h={42} lines={["Org. goals"]} tone="dark" bold />
      <Box x={145} y={90} w={100} h={42} lines={["Agree goals"]} tone="light" />
      <Box x={265} y={90} w={100} h={42} lines={["Perform"]} tone="light" />
      <Box x={385} y={90} w={100} h={42} lines={["Review"]} tone="light" />
      <Arrow points={[[125,111],[145,111]]} />
      <Arrow points={[[245,111],[265,111]]} />
      <Arrow points={[[365,111],[385,111]]} />
      <Arrow points={[[435,132],[435,185],[75,185],[75,132]]} />
      <Note x={280} y={215} lines={["Review findings inform the next objective-setting cycle."]} size={10} />
    </Frame>
  );
}
