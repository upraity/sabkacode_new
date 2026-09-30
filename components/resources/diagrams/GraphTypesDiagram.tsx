import { Arrow, Box, Frame, Note } from "./DiagramKit";

const pos: [number,number][] = [[40,40],[160,20],[280,60],[200,140],[60,140]];
const edges: [number,number][] = [[0,1],[0,2],[1,2],[2,3],[3,4]];

export function GraphTypesDiagram() {
  return (
    <Frame w={480} h={200} className="mx-auto w-full max-w-lg">
      {edges.map(([a,b],i)=>(<Arrow key={i} points={[pos[a],pos[b]]} head={false} />))}
      {pos.map((p,i)=>(<circle key={i} cx={p[0]} cy={p[1]} r={16} className="fill-brand-600 stroke-brand-800" strokeWidth={1.5} />))}
      {pos.map((p,i)=>(<text key={i} x={p[0]} y={p[1]+4} textAnchor="middle" className="fill-white text-[11px] font-medium">{i}</text>))}
      <Note x={360} y={30} lines={["Adjacency matrix"]} size={10} bold anchor="start" />
      <Note x={360} y={48} lines={["  0 1 2 3 4"]} size={9} anchor="start" pre />
      <Note x={360} y={62} lines={["0 0 1 1 0 0"]} size={9} anchor="start" pre />
      <Note x={360} y={76} lines={["1 1 0 1 0 0"]} size={9} anchor="start" pre />
      <Note x={360} y={90} lines={["2 1 1 0 1 0"]} size={9} anchor="start" pre />
      <Note x={360} y={104} lines={["3 0 0 1 0 1"]} size={9} anchor="start" pre />
      <Note x={360} y={118} lines={["4 0 0 0 1 0"]} size={9} anchor="start" pre />
      <Note x={200} y={185} lines={["Undirected graph: V={0..4}, E={01,02,12,23,34}"]} size={10} />
    </Frame>
  );
}
