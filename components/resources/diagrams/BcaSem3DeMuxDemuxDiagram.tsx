import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function BcaSem3DeMuxDemuxDiagram() {
  return (
    <Frame w={760} h={300} className="mx-auto w-full max-w-2xl">
      <Box x={30} y={85} w={190} h={90} lines={["4:1 MUX", "I0 I1 I2 I3", "S1 S0"]} tone="dark" bold />
      <Arrow points={[[220,130],[330,130]]} />
      <Box x={330} y={95} w={110} h={70} lines={["Y", "selected data"]} tone="light" />
      <Arrow points={[[440,130],[540,130]]} />
      <Box x={540} y={70} w={190} h={120} lines={["1:4 DEMUX", "one input", "to one output", "using S1 S0"]} tone="mid" bold />
      <Lines x={135} y={225} lines={["2 select lines choose 1 of 4 inputs"]} size={10} />
      <Lines x={635} y={225} lines={["2 select lines choose 1 of 4 outputs"]} size={10} />
    </Frame>
  );
}
