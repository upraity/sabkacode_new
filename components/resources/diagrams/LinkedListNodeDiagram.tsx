import { Arrow, Frame, Note } from "./DiagramKit";

export function LinkedListNodeDiagram() {
  return (
    <Frame w={440} h={140} className="mx-auto w-full max-w-md">
      <rect x={20} y={30} width={80} height={60} className="fill-brand-600 stroke-brand-800" strokeWidth={1.5} />
      <Note x={60} y={60} lines={["data","10"]} size={11} bold fill="fill-white" />
      <rect x={100} y={30} width={60} height={60} className="fill-brand-800 stroke-brand-800" strokeWidth={1.5} />
      <Note x={130} y={60} lines={["next"]} size={10} fill="fill-white" />
      <Arrow points={[[160,60],[220,60]]} />
      <Note x={30} y={16} lines={["A node of a singly linked list"]} size={11} bold anchor="start" />
      <Note x={230} y={60} lines={["-> to the next node"]} size={10} anchor="start" />
      <Note x={30} y={110} lines={["head -> node1 -> node2 -> ... -> NULL"]} size={11} bold anchor="start" />
    </Frame>
  );
}
