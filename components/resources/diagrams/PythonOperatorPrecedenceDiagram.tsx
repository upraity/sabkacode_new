import { Box, Frame, Note } from "./DiagramKit";

export default function PythonOperatorPrecedenceDiagram() {
  return (
    <Frame w={500} h={310} className="mx-auto w-full max-w-lg">
      <Box x={145} y={20} w={210} h={38} lines={["Higher precedence"]} tone="dark" bold />
      <Box x={105} y={70} w={290} h={36} lines={["Parentheses: ( )"]} tone="mid" />
      <Box x={105} y={114} w={290} h={36} lines={["Exponentiation: **"]} tone="light" />
      <Box x={105} y={158} w={290} h={36} lines={["Unary +, -"]} tone="light" />
      <Box x={105} y={202} w={290} h={36} lines={["*  /  //  %"]} tone="light" />
      <Box x={105} y={246} w={290} h={36} lines={["+  -   →   comparisons → not → and → or"]} tone="outline" size={10} />
      <Note x={250} y={299} lines={["Use parentheses when the intended order should be explicit."]} size={10} />
    </Frame>
  );
}
