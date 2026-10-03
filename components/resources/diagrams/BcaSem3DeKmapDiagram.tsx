import { Box, Frame, Lines, Note } from "./DiagramKit";

export default function BcaSem3DeKmapDiagram() {
  return (
    <Frame w={620} h={330} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={25} lines={["4-variable Karnaugh Map"]} size={12} bold />
      <Box x={80} y={55} w={100} h={45} lines={["00"]} tone="light" />
      <Box x={180} y={55} w={100} h={45} lines={["01"]} tone="light" />
      <Box x={280} y={55} w={100} h={45} lines={["11"]} tone="light" />
      <Box x={380} y={55} w={100} h={45} lines={["10"]} tone="light" />
      <Box x={20} y={100} w={60} h={45} lines={["00"]} tone="muted" />
      <Box x={20} y={145} w={60} h={45} lines={["01"]} tone="muted" />
      <Box x={20} y={190} w={60} h={45} lines={["11"]} tone="muted" />
      <Box x={20} y={235} w={60} h={45} lines={["10"]} tone="muted" />
      <Box x={80} y={100} w={100} h={45} lines={["0"]} tone="muted" />
      <Box x={180} y={100} w={100} h={45} lines={["1"]} tone="dark" bold />
      <Box x={280} y={100} w={100} h={45} lines={["1"]} tone="dark" bold />
      <Box x={380} y={100} w={100} h={45} lines={["0"]} tone="muted" />
      <Box x={80} y={145} w={100} h={45} lines={["0"]} tone="muted" />
      <Box x={180} y={145} w={100} h={45} lines={["0"]} tone="muted" />
      <Box x={280} y={145} w={100} h={45} lines={["1"]} tone="dark" bold />
      <Box x={380} y={145} w={100} h={45} lines={["1"]} tone="dark" bold />
      <Box x={80} y={190} w={100} h={45} lines={["0"]} tone="muted" />
      <Box x={180} y={190} w={100} h={45} lines={["0"]} tone="muted" />
      <Box x={280} y={190} w={100} h={45} lines={["0"]} tone="muted" />
      <Box x={380} y={190} w={100} h={45} lines={["0"]} tone="muted" />
      <Box x={80} y={235} w={100} h={45} lines={["0"]} tone="muted" />
      <Box x={180} y={235} w={100} h={45} lines={["0"]} tone="muted" />
      <Box x={280} y={235} w={100} h={45} lines={["0"]} tone="muted" />
      <Box x={380} y={235} w={100} h={45} lines={["0"]} tone="muted" />
      <Note x={310} y={310} lines={["Adjacent 1s form the largest valid power-of-two groups; Gray-code order enables adjacency."]} size={10} />
    </Frame>
  );
}
