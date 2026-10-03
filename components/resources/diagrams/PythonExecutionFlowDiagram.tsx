import { Arrow, Box, Frame, Note } from "./DiagramKit";

export default function PythonExecutionFlowDiagram() {
  return (
    <Frame w={620} h={220} className="mx-auto w-full max-w-xl">
      <Box x={20} y={70} w={120} h={48} lines={["Python source", ".py file"]} tone="dark" bold />
      <Arrow points={[[140, 94], [190, 94]]} />
      <Box x={190} y={70} w={130} h={48} lines={["Python", "implementation"]} tone="mid" bold />
      <Arrow points={[[320, 94], [370, 94]]} />
      <Box x={370} y={70} w={110} h={48} lines={["Bytecode", "(CPython)"]} tone="light" />
      <Arrow points={[[480, 94], [530, 94]]} />
      <Box x={530} y={70} w={70} h={48} lines={["Run"]} tone="outline" bold />
      <Note x={310} y={145} lines={["Simplified classroom model; CPython internally uses bytecode before execution."]} size={10} />
    </Frame>
  );
}
