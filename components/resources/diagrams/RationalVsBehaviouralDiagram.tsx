import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function RationalVsBehaviouralDiagram() {
  return (
    <Frame w={620} h={310} className="mx-auto w-full max-w-2xl">
      <Note x={310} y={22} lines={["RationalVsBehavioural"]} size={11} bold />
      <Box x={35} y={125} w={120} h={52} lines={["Rational model"]} tone="dark" bold />
      <Arrow points={[[155,151],[195,151]]} />
      <Box x={195} y={125} w={120} h={52} lines={["Limits"]} tone="light" bold />
      <Arrow points={[[315,151],[355,151]]} />
      <Box x={355} y={125} w={120} h={52} lines={["Behavioural", "biases"]} tone="light" bold />
      <Arrow points={[[475,151],[515,151]]} />
      <Box x={515} y={125} w={120} h={52} lines={["Observed", "decisions"]} tone="mid" bold />
      <Note x={310} y={286} lines={["MBA IV Semester | mba-behavioural-finance-rational-vs-behavioural"]} size={10} />
    </Frame>
  );
}
