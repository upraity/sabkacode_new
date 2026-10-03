import { Arrow, Box, Frame } from "./DiagramKit";

export default function SoftwareDevelopmentLifeCycleDiagram() {
  return (
    <Frame w={760} h={180} className="mx-auto w-full max-w-2xl">
      <Box x={20} y={55} w={105} h={48} lines={["Requirements"]} tone="dark" />
      <Arrow points={[[125, 79], [155, 79]]} />
      <Box x={155} y={55} w={105} h={48} lines={["Design"]} tone="mid" />
      <Arrow points={[[260, 79], [290, 79]]} />
      <Box x={290} y={55} w={105} h={48} lines={["Coding"]} tone="light" />
      <Arrow points={[[395, 79], [425, 79]]} />
      <Box x={425} y={55} w={105} h={48} lines={["Testing"]} tone="mid" />
      <Arrow points={[[530, 79], [560, 79]]} />
      <Box x={560} y={55} w={105} h={48} lines={["Deployment"]} tone="light" />
      <Arrow points={[[665, 79], [695, 79]]} />
      <Box x={695} y={55} w={45} h={48} lines={["Maint."]} tone="dark" />
    </Frame>
  );
}
