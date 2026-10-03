import { Frame, Lines, Box } from "./DiagramKit";

export default function C503CohenSutherlandDiagram() {
  return (
    <Frame w={620} h={350} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Cohen-Sutherland Region Codes"]} size={12} bold />
      <Box x={245} y={65} w={130} h={45} lines={["TOP = 1000"]} tone="light" />
      <Box x={80} y={145} w={130} h={45} lines={["LEFT = 0001"]} tone="light" />
      <rect x="210" y="125" width="200" height="120" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <Box x={410} y={145} w={130} h={45} lines={["RIGHT = 0010"]} tone="light" />
      <Box x={245} y={255} w={130} h={45} lines={["BOTTOM = 0100"]} tone="light" />
      <Lines x={310} y={325} lines={["Inside window = 0000. AND/OR tests give trivial accept/reject decisions."]} size={10} />
    </Frame>
  );
}
