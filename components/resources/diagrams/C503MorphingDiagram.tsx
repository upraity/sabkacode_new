import { Frame, Lines, Arrow } from "./DiagramKit";

export default function C503MorphingDiagram() {
  return (
    <Frame w={620} h={300} className="mx-auto w-full max-w-xl">
      <Lines
        x={310}
        y={20}
        lines={["Morphing Sequence"]}
        size={12}
        bold
      />

      <circle
        cx="100"
        cy="145"
        r="45"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M210 190 C190 125, 245 90, 285 145 C325 200, 275 210, 210 190 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      <rect
        x="390"
        y="100"
        width="90"
        height="90"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      <Arrow
        points={[
          [150, 145],
          [210, 145],
        ]}
      />

      <Arrow
        points={[
          [325, 145],
          [390, 145],
        ]}
      />

      <Lines
        x={310}
        y={245}
        lines={[
          "Source shape → intermediate states → destination shape",
        ]}
        size={10}
      />
    </Frame>
  );
}
