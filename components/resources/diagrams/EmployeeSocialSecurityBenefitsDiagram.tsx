import { Arrow, Box, Frame } from "./DiagramKit";

export function EmployeeSocialSecurityBenefitsDiagram() {
  return (
    <Frame w={540} h={300} className="mx-auto w-full max-w-xl">
      <Box x={195} y={18} w={150} h={42} lines={["Employee", "Protection"]} tone="dark" bold />
      <Arrow points={[[270, 60], [270, 90]]} />
      <Box x={35} y={90} w={145} h={46} lines={["Provident", "Fund"]} tone="light" />
      <Box x={198} y={90} w={145} h={46} lines={["Gratuity"]} tone="light" />
      <Box x={360} y={90} w={145} h={46} lines={["Maternity", "Benefit"]} tone="light" />
      <Arrow points={[[270, 90], [108, 90]]} />
      <Arrow points={[[270, 90], [270, 90]]} head={false} />
      <Arrow points={[[270, 90], [432, 90]]} />
      <Arrow points={[[108, 136], [108, 205], [270, 205]]} />
      <Arrow points={[[270, 136], [270, 205]]} />
      <Arrow points={[[432, 136], [432, 205], [270, 205]]} />
      <Box x={170} y={205} w={200} h={42} lines={["Employment-linked", "social protection"]} tone="mid" bold />
      <Arrow points={[[270, 247], [270, 275]]} />
    </Frame>
  );
}
