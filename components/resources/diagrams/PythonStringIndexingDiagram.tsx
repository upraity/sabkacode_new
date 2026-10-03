import { Box, Frame, Lines, Note } from "./DiagramKit";

export default function PythonStringIndexingDiagram() {
  return (
    <Frame w={620} h={230} className="mx-auto w-full max-w-xl">
      <Note x={310} y={20} lines={["String:  P   Y   T   H   O   N"]} size={12} bold />
      <Box x={65} y={55} w={70} h={42} lines={["0", "P"]} tone="dark" bold />
      <Box x={145} y={55} w={70} h={42} lines={["1", "Y"]} tone="light" />
      <Box x={225} y={55} w={70} h={42} lines={["2", "T"]} tone="light" />
      <Box x={305} y={55} w={70} h={42} lines={["3", "H"]} tone="light" />
      <Box x={385} y={55} w={70} h={42} lines={["4", "O"]} tone="light" />
      <Box x={465} y={55} w={70} h={42} lines={["5", "N"]} tone="light" />
      <Lines x={100} y={130} lines={["-6"]} size={10} bold fill="fill-ink-600" />
      <Lines x={180} y={130} lines={["-5"]} size={10} bold fill="fill-ink-600" />
      <Lines x={260} y={130} lines={["-4"]} size={10} bold fill="fill-ink-600" />
      <Lines x={340} y={130} lines={["-3"]} size={10} bold fill="fill-ink-600" />
      <Lines x={420} y={130} lines={["-2"]} size={10} bold fill="fill-ink-600" />
      <Lines x={500} y={130} lines={["-1"]} size={10} bold fill="fill-ink-600" />
      <Box x={225} y={158} w={230} h={38} lines={["s[1:5]  →  'YTHO'"]} tone="outline" bold />
      <Note x={310} y={215} lines={["Slice stop index 5 is excluded."]} size={10} />
    </Frame>
  );
}
