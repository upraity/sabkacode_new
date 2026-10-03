import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function C503AnimationPipelineDiagram() {
  return (
    <Frame w={620} h={300} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Computer Animation Pipeline"]} size={12} bold />
      <Box x={30} y={75} w={125} h={55} lines={["Scene /", "Keyframes"]} tone="dark" bold />
      <Arrow points={[[155,102],[215,102]]} />
      <Box x={215} y={70} w={140} h={65} lines={["Interpolation /", "Motion"]} tone="mid" bold />
      <Arrow points={[[355,102],[415,102]]} />
      <Box x={415} y={75} w={170} h={55} lines={["Render Frames /", "Playback"]} tone="light" bold />
      <Lines x={310} y={200} lines={["The exact pipeline varies by animation system; this is a conceptual sequence."]} size={10} />
    </Frame>
  );
}
