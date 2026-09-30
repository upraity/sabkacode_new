import { Box, Frame, Note } from "./DiagramKit";

const frames = ["fact(4) waiting for fact(3)","fact(3) waiting for fact(2)","fact(2) waiting for fact(1)","fact(1) returns 1"];

export function RecursionStackDiagram() {
  return (
    <Frame w={420} h={220} className="mx-auto w-full max-w-md">
      {frames.map((f,i)=>(
        <Box key={i} x={40} y={20+i*44} w={340} h={38} lines={[f]} tone={i===3?"dark":"mid"} size={10} bold={i===3} />
      ))}
      <Note x={210} y={200} lines={["Then each call returns and multiplies: 1, 2, 6, 24"]} size={10} />
    </Frame>
  );
}
