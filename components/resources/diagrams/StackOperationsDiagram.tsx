import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function StackOperationsDiagram() {
  return (
    <Frame w={480} h={230} className="mx-auto w-full max-w-md">
      {[0,1,2].map(i=>(
        <Box key={i} x={40} y={150-i*36} w={100} h={32} lines={[["10","20","30"][i]]} tone={i===2?"dark":"mid"} bold={i===2} />
      ))}
      <Note x={90} y={188} lines={["top = 2"]} size={10} bold />
      <Arrow points={[[160,42],[220,42]]} />
      <Note x={190} y={30} lines={["push(x)"]} size={10} bold />
      <Note x={200} y={54} lines={["insert at top,","top++"]} size={10} />
      <Arrow points={[[220,110],[160,110]]} />
      <Note x={190} y={98} lines={["pop()"]} size={10} bold />
      <Note x={200} y={122} lines={["remove from top,","top--"]} size={10} />
      <Box x={330} y={20} w={120} h={190} lines={[]} tone="outline" />
      <Note x={390} y={16} lines={["Only the TOP is", "accessible"]} size={10} bold />
    </Frame>
  );
}
