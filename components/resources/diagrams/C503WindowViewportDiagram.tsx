import { Arrow, Frame, Lines } from "./DiagramKit";

export default function C503WindowViewportDiagram() {
  return (
    <Frame w={620} h={310} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Window-to-Viewport Mapping"]} size={12} bold />
      <rect x="55" y="70" width="210" height="150" fill="none" stroke="currentColor" strokeWidth="2" />
      <Lines x={160} y={240} lines={["World Window"]} size={10} />
      <Arrow points={[[275,145],[345,145]]} />
      <rect x="355" y="100" width="210" height="100" fill="none" stroke="currentColor" strokeWidth="2" />
      <Lines x={460} y={220} lines={["Screen Viewport"]} size={10} />
      <Lines x={310} y={275} lines={["Coordinates are scaled and translated from the selected world region to the display region."]} size={9} />
    </Frame>
  );
}
