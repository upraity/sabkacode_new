import { Box, Frame, Note } from "./DiagramKit";

const mat = [[0,0,3,0,4],[0,0,5,7,0],[0,0,0,0,0],[0,2,6,0,0]];
const triplet = [[4,5,4],[0,2,3],[0,4,4],[1,2,5],[1,3,7],[3,1,2],[3,2,6]];

export function SparseMatrixDiagram() {
  return (
    <Frame w={480} h={230} className="mx-auto w-full max-w-lg">
      <Note x={110} y={12} lines={["Sparse matrix (4x5)"]} size={11} bold />
      {mat.map((row,i)=>row.map((v,j)=>(
        <Box key={i+'-'+j} x={20+j*38} y={24+i*36} w={36} h={32} lines={[String(v)]} tone={v?"dark":"light"} size={11} rx={0} />
      )))}
      <Note x={360} y={12} lines={["Triplet form"]} size={11} bold />
      {triplet.map((r,i)=>(
        <Box key={i} x={300} y={24+i*22} w={140} h={20} lines={[r.join("  ")]} tone={i===0?"outline":"light"} size={10} rx={2} />
      ))}
      <Note x={370} y={186} lines={["row 0 = (rows, cols, count)"]} size={10} />
    </Frame>
  );
}
