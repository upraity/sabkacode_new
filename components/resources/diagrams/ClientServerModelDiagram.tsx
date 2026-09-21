import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function ClientServerModelDiagram() {
  return (
    <Frame w={540} h={270} className="mx-auto w-full max-w-lg">
      <Box x={200} y={8} w={140} h={34} lines={["DNS server"]} tone="muted" bold />
      <Box x={10} y={84} w={130} h={100} lines={["Web client", "(Browser)", "Chrome, Firefox"]} tone="dark" bold />
      <Box x={400} y={84} w={130} h={100} lines={["Web server", "(Apache, IIS,", "Nginx)"]} tone="dark" bold />
      <Box x={410} y={222} w={110} h={38} lines={["Files / Database"]} tone="outline" />

      <Arrow points={[[75, 84], [75, 25], [200, 25]]} />
      <Note x={120} y={16} lines={["1. domain name?"]} size={10} />
      <Arrow points={[[200, 34], [95, 34], [95, 84]]} />
      <Note x={262} y={58} lines={["IP address"]} size={10} anchor="start" />
      <Arrow points={[[140, 118], [400, 118]]} />
      <Note x={270} y={108} lines={["2. HTTP request (GET /index.html)"]} size={10} />
      <Arrow points={[[400, 154], [140, 154]]} />
      <Note x={270} y={170} lines={["3. HTTP response (200 OK + HTML)"]} size={10} />
      <Arrow points={[[465, 184], [465, 222]]} both />
    </Frame>
  );
}
