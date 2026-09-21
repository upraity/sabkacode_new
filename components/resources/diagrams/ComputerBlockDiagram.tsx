import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function ComputerBlockDiagram() {
  return (
    <Frame w={480} h={320} className="mx-auto w-full max-w-md">
      {/* control-signal paths (dashed) drawn first so boxes sit on top */}
      <Arrow points={[[150, 69], [55, 69], [55, 100]]} dashed />
      <Arrow points={[[192, 44], [192, 10], [425, 10], [425, 100]]} dashed />

      <Box x={10} y={100} w={90} h={56} lines={["Input", "Unit"]} tone="mid" bold />
      <Box x={380} y={100} w={90} h={56} lines={["Output", "Unit"]} tone="mid" bold />

      {/* CPU container */}
      <rect x={135} y={22} width={210} height={142} rx={8} className="fill-white stroke-brand-500" strokeWidth={1.5} strokeDasharray="5 3" />
      <Note x={300} y={34} lines={["CPU"]} size={12} bold />
      <Box x={150} y={44} w={85} h={50} lines={["Control", "Unit (CU)"]} tone="dark" />
      <Box x={245} y={44} w={85} h={50} lines={["Arithmetic", "Logic Unit"]} tone="dark" />
      <Box x={150} y={106} w={180} h={40} lines={["Registers"]} tone="light" />

      <Box x={135} y={204} w={210} h={44} lines={["Main Memory", "(RAM / ROM)"]} tone="outline" bold />
      <Box x={135} y={276} w={210} h={32} lines={["Secondary Storage"]} tone="muted" />

      {/* data flow */}
      <Arrow points={[[100, 128], [135, 128]]} />
      <Arrow points={[[345, 128], [380, 128]]} />
      <Arrow points={[[240, 164], [240, 204]]} both />
      <Arrow points={[[240, 248], [240, 276]]} both />

      <Note x={430} y={190} lines={["solid arrow = data", "dashed = control"]} size={10} />
    </Frame>
  );
}
