import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function CommunicationFlowDiagram() {
  return (
    <Frame w={500} h={300} className="mx-auto w-full max-w-lg">
      <Box x={185} y={10} w={130} h={36} lines={["Top Management"]} tone="dark" bold />
      <Box x={40} y={112} w={130} h={36} lines={["Manager - Sales"]} tone="mid" bold />
      <Box x={330} y={112} w={130} h={36} lines={["Manager - Finance"]} tone="mid" bold />
      <Box x={40} y={224} w={130} h={36} lines={["Sales Staff"]} tone="light" />
      <Box x={330} y={224} w={130} h={36} lines={["Finance Staff"]} tone="light" />

      {/* downward: top -> managers */}
      <Arrow points={[[215, 46], [215, 80], [90, 80], [90, 112]]} />
      <Arrow points={[[285, 46], [285, 80], [410, 80], [410, 112]]} />
      <Note x={250} y={70} lines={["Downward"]} size={10} bold />
      {/* upward: staff -> manager */}
      <Arrow points={[[75, 224], [75, 148]]} />
      <Note x={62} y={188} lines={["Upward"]} size={10} anchor="end" bold />
      {/* horizontal */}
      <Arrow points={[[170, 130], [330, 130]]} both />
      <Note x={250} y={120} lines={["Horizontal"]} size={10} bold />
      {/* diagonal */}
      <Arrow points={[[170, 244], [345, 148]]} dashed />
      <Note x={262} y={210} lines={["Diagonal"]} size={10} bold />
    </Frame>
  );
}
