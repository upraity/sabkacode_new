import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function ThreadLifeCycleDiagram() {
  return (
    <Frame w={560} h={220} className="mx-auto w-full max-w-lg">
      <Box x={10} y={90} w={90} h={36} lines={["New"]} tone="light" bold />
      <Arrow points={[[100, 108], [150, 108]]} />
      <Note x={112} y={98} lines={["start()"]} size={10} />
      <Box x={150} y={90} w={100} h={36} lines={["Runnable"]} tone="mid" bold />
      <Arrow points={[[250, 108], [300, 108]]} both />
      <Note x={262} y={98} lines={["scheduler"]} size={10} />
      <Box x={300} y={90} w={100} h={36} lines={["Running"]} tone="dark" bold />
      <Arrow points={[[350, 90], [350, 40], [250, 40], [250, 90]]} />
      <Note x={230} y={30} lines={["sleep()/wait()/blocked"]} size={10} anchor="start" />
      <Box x={175} y={10} w={130} h={30} lines={["Blocked / Waiting"]} tone="outline" size={10} />
      <Arrow points={[[350, 126], [350, 160], [250, 160]]} head={false} />
      <Arrow points={[[250, 160], [200, 160]]} />
      <Note x={295} y={150} lines={["run() finishes"]} size={10} />
      <Box x={10} y={144} w={130} h={32} lines={["Terminated (Dead)"]} tone="light" size={10} bold />
    </Frame>
  );
}
