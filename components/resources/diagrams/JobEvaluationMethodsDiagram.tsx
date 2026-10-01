import { Arrow, Box, Frame } from "./DiagramKit";

export function JobEvaluationMethodsDiagram() {
  return (
    <Frame w={560} h={270} className="mx-auto w-full max-w-xl">
      <Box x={195} y={18} w={170} h={42} lines={["Job Evaluation"]} tone="dark" bold />
      <Arrow points={[[280,60],[280,88]]} />
      <Box x={25} y={88} w={120} h={42} lines={["Ranking"]} tone="light" />
      <Box x={155} y={88} w={120} h={42} lines={["Classification"]} tone="light" size={10} />
      <Box x={285} y={88} w={120} h={42} lines={["Point-Factor"]} tone="mid" bold size={10} />
      <Box x={415} y={88} w={120} h={42} lines={["Factor", "Comparison"]} tone="light" size={10} />
      <Arrow points={[[280,88],[85,88]]} />
      <Arrow points={[[280,88],[215,88]]} />
      <Arrow points={[[280,88],[345,88]]} />
      <Arrow points={[[280,88],[475,88]]} />
      <Box x={150} y={180} w={260} h={42} lines={["Relative job worth → internal equity"]} tone="light" />
      <Arrow points={[[85,130],[85,180],[150,180]]} />
      <Arrow points={[[475,130],[475,180],[410,180]]} />
    </Frame>
  );
}
