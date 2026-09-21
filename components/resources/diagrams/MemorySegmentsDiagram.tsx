import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function MemorySegmentsDiagram() {
  return (
    <Frame w={440} h={320} className="mx-auto w-full max-w-md">
      <Note x={10} y={12} lines={["High address"]} size={10} anchor="start" bold />
      <Box x={20} y={24} w={210} h={56} lines={["Stack", "local variables, function calls  ↓"]} tone="dark" size={11} />
      <Box x={20} y={80} w={210} h={44} lines={["Free memory"]} tone="muted" size={10} dashed rx={0} />
      <Box x={20} y={124} w={210} h={56} lines={["Heap", "malloc / calloc / realloc  ↑"]} tone="mid" size={11} />
      <Box x={20} y={180} w={210} h={50} lines={["Global and static data", "(initialised / uninitialised)"]} tone="outline" size={11} />
      <Box x={20} y={230} w={210} h={50} lines={["Code (text) segment", "program instructions"]} tone="light" size={11} />
      <Note x={10} y={296} lines={["Low address"]} size={10} anchor="start" bold />

      <Arrow points={[[300, 52], [240, 52]]} />
      <Note x={306} y={52} lines={["grows towards", "lower addresses"]} size={10} anchor="start" />
      <Arrow points={[[300, 152], [240, 152]]} />
      <Note x={306} y={152} lines={["dynamic memory:", "freed with free()"]} size={10} anchor="start" />
      <Arrow points={[[300, 205], [240, 205]]} />
      <Note x={306} y={205} lines={["exists for the whole", "program run"]} size={10} anchor="start" />
      <Arrow points={[[300, 255], [240, 255]]} />
      <Note x={306} y={255} lines={["read-only machine", "code"]} size={10} anchor="start" />
    </Frame>
  );
}
