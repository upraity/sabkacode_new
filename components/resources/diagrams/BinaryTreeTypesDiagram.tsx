import { Arrow, Box, Frame, Note } from "./DiagramKit";

function T({ x0, nodes, edges, label }: { x0: number; nodes: [number,number,string,string][]; edges:[number,number][]; label:string }) {
  return (
    <g>
      {edges.map(([a,b],i)=>(<Arrow key={i} points={[[x0+nodes[a][0],nodes[a][1]+30],[x0+nodes[b][0],nodes[b][1]]]} head={false} />))}
      {nodes.map(([x,y,t,tone],i)=>(<Box key={i} x={x0+x-18} y={y} w={36} h={26} lines={[t]} tone={tone as any} size={10} />))}
      <Note x={x0+60} y={128} lines={[label]} size={11} bold />
    </g>
  );
}
export function BinaryTreeTypesDiagram() {
  return (
    <Frame w={560} h={150} className="mx-auto w-full max-w-lg">
      <T x0={0} label="Full" nodes={[[60,10,"","dark"],[20,50,"","mid"],[100,50,"","mid"]]} edges={[[0,1],[0,2]]} />
      <T x0={140} label="Complete" nodes={[[60,10,"","dark"],[20,50,"","mid"],[100,50,"","mid"],[0,90,"","light"]]} edges={[[0,1],[0,2],[1,3]]} />
      <T x0={280} label="Skewed" nodes={[[20,10,"","dark"],[20,50,"","mid"],[20,90,"","light"]]} edges={[[0,1],[1,2]]} />
      <T x0={400} label="Perfect" nodes={[[60,10,"","dark"],[20,50,"","mid"],[100,50,"","mid"],[0,90,"","light"],[40,90,"","light"],[80,90,"","light"],[120,90,"","light"]]} edges={[[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]]} />
    </Frame>
  );
}
