import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function QueueOperationsDiagram() {
  return (
    <Frame w={480} h={230} className="mx-auto w-full max-w-md">
      <Note x={140} y={16} lines={["Simple queue"]} size={11} bold />
      {["10","20","30"].map((v,i)=>(<Box key={i} x={30+i*66} y={30} w={60} h={36} lines={[v]} tone="mid" />))}
      <Note x={30} y={78} lines={["front"]} size={10} anchor="start" bold />
      <Note x={228} y={78} lines={["rear"]} size={10} anchor="end" bold />

      <Note x={340} y={16} lines={["Circular queue (wrap-around)"]} size={11} bold />
      {[0,1,2,3,4].map(i=>{
        const cx=340, cy=120, r=55, a=(-90+i*72)*Math.PI/180;
        const x=cx+r*Math.cos(a), y=cy+r*Math.sin(a);
        const vals=["10","20","30","",""]
        return <Box key={i} x={x-24} y={y-14} w={48} h={28} lines={[vals[i]||""]} tone={vals[i]?"mid":"light"} size={10} />
      })}
      <Note x={340} y={200} lines={["rear wraps to index 0 after the last slot"]} size={10} />
    </Frame>
  );
}
