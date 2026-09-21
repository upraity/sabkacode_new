import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function XmlTreeDiagram() {
  const leaf = [
    { n: "title", v: "Learn C..." },
    { n: "author", v: "A. Verma" },
    { n: "year", v: "2019" },
    { n: "price", v: "399" },
  ];
  return (
    <Frame w={540} h={300} className="mx-auto w-full max-w-lg">
      <Box x={205} y={8} w={130} h={30} lines={["<library>  (root)"]} tone="dark" bold />
      {/* books */}
      <Arrow points={[[270, 38], [270, 58], [130, 58], [130, 78]]} head={false} />
      <Arrow points={[[270, 38], [270, 78]]} head={false} />
      <Arrow points={[[270, 38], [270, 58], [440, 58], [440, 78]]} head={false} />
      <Box x={70} y={78} w={120} h={32} lines={["<book>", "id=\"b1\""]} tone="mid" size={10} />
      <Box x={210} y={78} w={120} h={32} lines={["<book>", "id=\"b2\""]} tone="mid" size={10} />
      <Box x={380} y={78} w={120} h={32} lines={["<book>", "id=\"b3\""]} tone="mid" size={10} />
      <Note x={270} y={126} lines={["(b2 and b3 have the same structure)"]} size={10} />
      {/* children of b1 */}
      {leaf.map((l, i) => {
        const x = 10 + i * 70;
        return (
          <g key={l.n}>
            <Arrow points={[[130, 110], [130, 150], [x + 32, 150], [x + 32, 166]]} head={false} />
            <Box x={x} y={166} w={64} h={28} lines={[`<${l.n}>`]} tone="outline" size={10} rx={3} />
            <Arrow points={[[x + 32, 194], [x + 32, 224]]} head={false} />
            <Box x={x} y={224} w={64} h={28} lines={[l.v]} tone="light" size={10} rx={3} />
          </g>
        );
      })}
      <Note x={300} y={180} lines={["Dark / blue = element nodes", "White = child elements", "Grey = text (the data)", "id = attribute of <book>"]} size={10} anchor="start" />
    </Frame>
  );
}
