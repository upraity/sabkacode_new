import { Box, Frame } from "./DiagramKit";

export default function SoftwareEngineeringMaintenanceTypesDiagram() {
  return (
    <Frame w={720} h={190} className="mx-auto w-full max-w-2xl">
      <Box x={20} y={60} w={150} h={55} lines={["Corrective", "Fix faults"]} tone="dark" />
      <Box x={195} y={60} w={150} h={55} lines={["Adaptive", "Fit new environment"]} tone="mid" />
      <Box x={370} y={60} w={150} h={55} lines={["Perfective", "Improve software"]} tone="light" />
      <Box x={545} y={60} w={150} h={55} lines={["Preventive", "Reduce future risk"]} tone="mid" />
    </Frame>
  );
}
