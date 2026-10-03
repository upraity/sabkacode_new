import { Arrow, Box, Frame, Note } from "./DiagramKit";

export default function PythonFileHandlingFlowDiagram() {
  return (
    <Frame w={650} h={230} className="mx-auto w-full max-w-2xl">
      <Box x={20} y={70} w={115} h={48} lines={["1. open()", "choose mode"]} tone="dark" bold size={10} />
      <Arrow points={[[135, 94], [180, 94]]} />
      <Box x={180} y={70} w={115} h={48} lines={["2. Read /", "write"]} tone="mid" bold size={10} />
      <Arrow points={[[295, 94], [340, 94]]} />
      <Box x={340} y={70} w={115} h={48} lines={["3. Process", "data"]} tone="light" size={10} />
      <Arrow points={[[455, 94], [500, 94]]} />
      <Box x={500} y={70} w={115} h={48} lines={["4. close", "automatically"]} tone="outline" bold size={10} />
      <Note x={325} y={150} lines={["with open(...) as file:  manages the resource lifecycle."]} size={10} />
      <Note x={325} y={185} lines={["Typical text modes: r = read, w = write/truncate, a = append."]} size={10} />
    </Frame>
  );
}
