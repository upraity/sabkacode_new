import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function BcaSem3DeFlipFlopsDiagram() {
  return (
    <Frame w={760} h={330} className="mx-auto w-full max-w-2xl">
      <Box x={35} y={45} w={150} h={65} lines={["SR", "Set / Reset"]} tone="dark" bold />
      <Box x={305} y={45} w={150} h={65} lines={["JK", "Set / Reset / Toggle"]} tone="mid" bold />
      <Box x={575} y={45} w={150} h={65} lines={["D", "Q(next)=D"]} tone="light" bold />
      <Arrow points={[[185,78],[305,78]]} />
      <Arrow points={[[455,78],[575,78]]} />
      <Box x={170} y={190} w={150} h={65} lines={["T", "T=0 Hold", "T=1 Toggle"]} tone="outline" bold />
      <Box x={440} y={175} w={180} h={95} lines={["Characteristic table", "input → next state", "Excitation table", "transition → input"]} tone="muted" />
      <Lines x={380} y={305} lines={["Flip-flops store state; characteristic and excitation tables support analysis and design."]} size={10} />
    </Frame>
  );
}
