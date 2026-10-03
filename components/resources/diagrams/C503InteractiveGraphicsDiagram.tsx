import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function C503InteractiveGraphicsDiagram() {
  return (
    <Frame w={620} h={300} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Interactive Graphics Cycle"]} size={12} bold />
      <Box x={35} y={75} w={120} h={50} lines={["User Input"]} tone="dark" bold />
      <Arrow points={[[155,100],[225,100]]} />
      <Box x={225} y={70} w={150} h={60} lines={["Graphics", "Processing"]} tone="mid" bold />
      <Arrow points={[[375,100],[445,100]]} />
      <Box x={445} y={75} w={140} h={50} lines={["Display"]} tone="light" bold />
      <Arrow points={[[515,125],[515,200],[95,200],[95,125]]} dashed={true} />
      <Lines x={310} y={240} lines={["Visual feedback is observed by the user, who can provide the next input."]} size={10} />
    </Frame>
  );
}
