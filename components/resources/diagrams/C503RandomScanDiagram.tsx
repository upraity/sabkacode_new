import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function C503RandomScanDiagram() {
  return (
    <Frame w={620} h={300} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Random-Scan / Vector Display"]} size={12} bold />
      <Box x={30} y={70} w={145} h={55} lines={["Display Processor", "Vector Commands"]} tone="dark" bold />
      <Arrow points={[[175,98],[240,98]]} />
      <Box x={240} y={70} w={130} h={55} lines={["Beam / Drawing", "Control"]} tone="mid" />
      <Arrow points={[[370,98],[430,98]]} />
      <Box x={430} y={70} w={155} h={55} lines={["Draw Required", "Line Segments"]} tone="light" />
      <Lines x={310} y={190} lines={["Unlike raster refresh, the conceptual vector approach directs drawing to specified primitives."]} size={10} />
    </Frame>
  );
}
