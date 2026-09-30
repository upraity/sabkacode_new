import { Arrow, Frame, Note } from "./DiagramKit";

const pos: [number,number][] = [[40,100],[150,30],[150,170],[280,100],[380,60]];
const edges: [number,number,number][] = [[0,1,2],[0,2,4],[1,2,1],[1,3,7],[2,3,3],[2,4,5],[3,4,1]];
const dist=["0","2","3","6","7"];

export function DijkstraGraphDiagram() {
  return (
    <Frame w={430} h={210} className="mx-auto w-full max-w-lg">
      {edges.map(([a,b,w],i)=>(
        <g key={i}>
          <Arrow points={[pos[a],pos[b]]} head={false} />
          <Note x={(pos[a][0]+pos[b][0])/2} y={(pos[a][1]+pos[b][1])/2-6} lines={[String(w)]} size={10} bold />
        </g>
      ))}
      {pos.map((p,i)=>(
        <g key={i}>
          <circle cx={p[0]} cy={p[1]} r={18} className="fill-brand-700 stroke-brand-800" strokeWidth={1.5} />
          <text x={p[0]} y={p[1]+4} textAnchor="middle" className="fill-white text-[11px] font-medium">{i}</text>
          <Note x={p[0]} y={p[1]+32} lines={[`d=${dist[i]}`]} size={10} bold />
        </g>
      ))}
    </Frame>
  );
}
