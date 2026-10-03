import { Frame, Lines } from "./DiagramKit";

export default function C503AnimationSequencingDiagram() {
  return (
    <Frame w={620} h={300} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Animation Sequencing"]} size={12} bold />
      <rect x="55" y="75" width="130" height="55" fill="none" stroke="currentColor" />
      <rect x="190" y="75" width="150" height="55" fill="none" stroke="currentColor" />
      <rect x="345" y="75" width="105" height="55" fill="none" stroke="currentColor" />
      <rect x="455" y="75" width="110" height="55" fill="none" stroke="currentColor" />
      <Lines x={120} y={105} lines={["Scene 1"]} size={10} />
      <Lines x={265} y={105} lines={["Action"]} size={10} />
      <Lines x={397} y={105} lines={["Transition"]} size={10} />
      <Lines x={510} y={105} lines={["Scene 2"]} size={10} />
      <Lines x={310} y={190} lines={["Timing and ordering determine how actions and scenes are presented over time."]} size={10} />
    </Frame>
  );
}
