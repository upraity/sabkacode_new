import { Arrow, Box, Frame, Lines, Note } from "./DiagramKit";

export default function C305GaussEliminationDiagram() {
  return (
    <Frame w={620} h={300} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Gauss Elimination"]} size={12} bold />
      <Box x={25} y={65} w={150} h={55} lines={["Augmented", "matrix"]} tone="dark" bold />
      <Arrow points={[[175,92],[230,92]]} />
      <Box x={230} y={65} w={160} h={55} lines={["Forward", "elimination"]} tone="light" />
      <Arrow points={[[390,92],[445,92]]} />
      <Box x={445} y={65} w={150} h={55} lines={["Upper", "triangular"]} tone="mid" bold />
      <Arrow points={[[520,120],[520,165]]} />
      <Box x={445} y={165} w={150} h={50} lines={["Back", "substitution"]} tone="outline" bold />
      <Note x={310} y={250} lines={["Eliminate unknowns below pivots, then solve from the last equation upward."]} />
      <Note x={310} y={275} lines={["Row interchange may be required when a pivot is zero or unsuitable."]} />
    </Frame>
  );
}
