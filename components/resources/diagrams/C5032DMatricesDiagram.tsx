import { Frame, Lines } from "./DiagramKit";

export default function C5032DMatricesDiagram() {
  return (
    <Frame w={620} h={330} className="mx-auto w-full max-w-xl">
      <Lines x={310} y={20} lines={["Common 2D Homogeneous Matrices"]} size={12} bold />
      <Lines x={155} y={70} lines={["Translation"], ["[1  0  tx]", "[0  1  ty]", "[0  0   1]"]} size={11} />
      <Lines x={310} y={70} lines={["Scaling"], ["[sx  0   0]", "[0  sy   0]", "[0   0   1]"]} size={11} />
      <Lines x={465} y={70} lines={["Rotation"], ["[c  -s  0]", "[s   c  0]", "[0   0  1]"]} size={11} />
      <Lines x={310} y={230} lines={["Point representation:  [x  y  1]ᵀ"]} size={11} />
      <Lines x={310} y={270} lines={["Transform: P' = M P"]} size={11} bold />
    </Frame>
  );
}
