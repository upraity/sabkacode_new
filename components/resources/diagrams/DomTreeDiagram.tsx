import { Arrow, Box, Frame, Note } from "./DiagramKit";

type N = { id: string; t: string; x: number; y: number; text?: boolean };
const W = 84;
const H = 28;
const nodes: N[] = [
  { id: "doc", t: "document", x: 258, y: 10 },
  { id: "html", t: "<html>", x: 258, y: 62 },
  { id: "head", t: "<head>", x: 118, y: 114 },
  { id: "body", t: "<body>", x: 378, y: 114 },
  { id: "title", t: "<title>", x: 118, y: 166 },
  { id: "h1", t: "<h1>", x: 318, y: 166 },
  { id: "p", t: "<p>", x: 438, y: 166 },
  { id: "t1", t: "\"My Page\"", x: 118, y: 218, text: true },
  { id: "t2", t: "\"Hello\"", x: 318, y: 218, text: true },
  { id: "t3", t: "\"Some text\"", x: 438, y: 218, text: true },
];
const edges: [string, string][] = [
  ["doc", "html"], ["html", "head"], ["html", "body"], ["head", "title"], ["body", "h1"], ["body", "p"],
  ["title", "t1"], ["h1", "t2"], ["p", "t3"],
];
const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

export function DomTreeDiagram() {
  return (
    <Frame w={560} h={306} className="mx-auto w-full max-w-lg">
      {edges.map(([a, b]) => {
        const p = byId[a];
        const c = byId[b];
        const my = (p.y + H + c.y) / 2;
        return <Arrow key={a + b} points={[[p.x + W / 2, p.y + H], [p.x + W / 2, my], [c.x + W / 2, my], [c.x + W / 2, c.y]]} head={false} />;
      })}
      {nodes.map((n) => (
        <Box key={n.id} x={n.x} y={n.y} w={W} h={H} lines={[n.t]} tone={n.id === "doc" ? "dark" : n.text ? "light" : "mid"} size={11} rx={4} />
      ))}
      <Note x={10} y={272} lines={["Blue box = element node"]} size={10} anchor="start" />
      <Note x={10} y={288} lines={["Grey box = text node"]} size={10} anchor="start" />
    </Frame>
  );
}
