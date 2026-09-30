import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function LinkedListTypesDiagram() {
  return (
    <Frame w={480} h={280} className="mx-auto w-full max-w-lg">
      <Note x={20} y={16} lines={["Singly linked"]} size={11} anchor="start" bold />
      {[0,1,2].map(i=>(<Box key={i} x={20+i*90} y={26} w={70} h={30} lines={[String((i+1)*10)]} tone="mid" />))}
      <Arrow points={[[90,41],[110,41]]} /><Arrow points={[[180,41],[200,41]]} />
      <Note x={280} y={41} lines={["NULL"]} size={10} anchor="start" bold />

      <Note x={20} y={76} lines={["Doubly linked"]} size={11} anchor="start" bold />
      {[0,1,2].map(i=>(<Box key={i} x={20+i*90} y={86} w={70} h={30} lines={[String((i+1)*10)]} tone="mid" />))}
      <Arrow points={[[90,96],[110,96]]} /><Arrow points={[[180,96],[200,96]]} />
      <Arrow points={[[110,110],[90,110]]} /><Arrow points={[[200,110],[180,110]]} />

      <Note x={20} y={150} lines={["Singly circular"]} size={11} anchor="start" bold />
      {[0,1,2].map(i=>(<Box key={i} x={20+i*90} y={160} w={70} h={30} lines={[String((i+1)*10)]} tone="mid" />))}
      <Arrow points={[[90,175],[110,175]]} /><Arrow points={[[180,175],[200,175]]} />
      <Arrow points={[[235,190],[235,215],[55,215],[55,190]]} head />

      <Note x={20} y={240} lines={["Circular doubly linked = both prev/next AND wraps around"]} size={10} anchor="start" />
    </Frame>
  );
}
