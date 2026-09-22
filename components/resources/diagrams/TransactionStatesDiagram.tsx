import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function TransactionStatesDiagram() {
  return (
    <Frame w={590} h={230} className="mx-auto w-full max-w-lg">
      <Box x={10} y={20} w={110} h={36} lines={["Active"]} tone="dark" bold />
      <Box x={175} y={20} w={130} h={36} lines={["Partially committed"]} tone="mid" size={10} bold />
      <Box x={360} y={20} w={110} h={36} lines={["Committed"]} tone="dark" bold />
      <Box x={90} y={150} w={110} h={36} lines={["Failed"]} tone="light" bold />
      <Box x={280} y={150} w={110} h={36} lines={["Aborted"]} tone="light" bold />
      <Box x={490} y={92} w={90} h={36} lines={["Terminated"]} tone="outline" size={10} bold />

      <Arrow points={[[120, 38], [175, 38]]} />
      <Note x={148} y={28} lines={["end"]} size={10} />
      <Arrow points={[[305, 38], [360, 38]]} />
      <Note x={332} y={28} lines={["commit"]} size={10} />
      <Arrow points={[[65, 56], [65, 168], [90, 168]]} />
      <Note x={22} y={110} lines={["failure"]} size={10} />
      <Arrow points={[[240, 56], [240, 116], [145, 116], [145, 150]]} />
      <Note x={196} y={106} lines={["failure"]} size={10} />
      <Arrow points={[[200, 168], [280, 168]]} />
      <Note x={240} y={181} lines={["rollback"]} size={10} />
      <Arrow points={[[470, 38], [535, 38], [535, 92]]} />
      <Arrow points={[[390, 168], [535, 168], [535, 128]]} />
      <Note x={300} y={218} lines={["Both a committed and an aborted transaction finally terminate"]} size={10} />
    </Frame>
  );
}
