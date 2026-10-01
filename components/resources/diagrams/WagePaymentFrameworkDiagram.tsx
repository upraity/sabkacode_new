import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function WagePaymentFrameworkDiagram() {
  return (
    <Frame w={500} h={260} className="mx-auto w-full max-w-lg">
      <Box x={170} y={18} w={160} h={40} lines={["Wage Payment"]} tone="dark" bold />
      <Arrow points={[[250, 58], [250, 88]]} />
      <Box x={45} y={88} w={145} h={42} lines={["Timely", "payment"]} tone="light" />
      <Box x={178} y={88} w={145} h={42} lines={["Lawful", "deductions"]} tone="light" />
      <Box x={311} y={88} w={145} h={42} lines={["Employee", "protection"]} tone="light" />
      <Arrow points={[[250, 88], [118, 88]]} />
      <Arrow points={[[250, 88], [250, 88]]} head={false} />
      <Arrow points={[[250, 88], [383, 88]]} />
      <Arrow points={[[118, 130], [118, 180], [250, 180]]} />
      <Arrow points={[[250, 130], [250, 180]]} />
      <Arrow points={[[383, 130], [383, 180], [250, 180]]} />
      <Box x={155} y={180} w={190} h={42} lines={["Compliant wage", "administration"]} tone="mid" bold />
      <Note x={250} y={245} lines={["Apply the statutory framework prescribed for the course."]} size={10} />
    </Frame>
  );
}
