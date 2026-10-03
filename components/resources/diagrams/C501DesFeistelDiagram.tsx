import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function C501DesFeistelDiagram() {
  return (
    <Frame w={620} h={330} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Simplified Feistel Round Concept"]} size={12} bold />
      <Box x={35} y={70} w={120} h={48} lines={["Lᵢ"]} tone="dark" bold />
      <Box x={35} y={155} w={120} h={48} lines={["Rᵢ"]} tone="mid" bold />
      <Box x={235} y={130} w={150} h={60} lines={["Round Function", "F(Rᵢ, Kᵢ)"]} tone="light" bold />
      <Box x={465} y={70} w={120} h={48} lines={["Rᵢ₊₁"]} tone="outline" bold />
      <Box x={465} y={190} w={120} h={48} lines={["Lᵢ₊₁"]} tone="outline" bold />
      <Arrow points={[[155,94],[465,94]]} dashed={true} />
      <Arrow points={[[155,179],[235,160]]} />
      <Arrow points={[[385,150],[465,214]]} />
      <Arrow points={[[155,94],[155,250],[465,214]]} dashed={true} />
      <Lines x={310} y={275} lines={["DES uses a 16-round Feistel structure; this diagram shows the round idea, not every DES detail."]} size={10} />
    </Frame>
  );
}
