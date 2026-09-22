import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function ExceptionHierarchyDiagram() {
  return (
    <Frame w={560} h={260} className="mx-auto w-full max-w-lg">
      <Box x={225} y={10} w={110} h={30} lines={["Throwable"]} tone="dark" bold />
      <Arrow points={[[280, 40], [130, 70]]} />
      <Arrow points={[[280, 40], [430, 70]]} />
      <Box x={70} y={72} w={120} h={30} lines={["Exception"]} tone="mid" bold />
      <Box x={370} y={72} w={120} h={30} lines={["Error"]} tone="mid" bold />
      <Note x={430} y={112} lines={["OutOfMemoryError,", "StackOverflowError"]} size={10} />

      <Arrow points={[[130, 102], [80, 134]]} />
      <Arrow points={[[130, 102], [200, 134]]} />
      <Box x={20} y={136} w={130} h={44} lines={["Checked exceptions", "IOException, SQLException"]} tone="light" size={10} />
      <Box x={165} y={136} w={140} h={30} lines={["RuntimeException"]} tone="outline" size={10} />
      <Arrow points={[[235, 166], [235, 190]]} />
      <Box x={165} y={192} w={140} h={58} lines={["Unchecked", "ArithmeticException", "NullPointerException", "ArrayIndexOOBE"]} tone="light" size={9} />
    </Frame>
  );
}
