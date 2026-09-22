import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function InheritanceTypesDiagram() {
  return (
    <Frame w={560} h={296} className="mx-auto w-full max-w-lg">
      {/* single */}
      <Box x={20} y={20} w={80} h={30} lines={["A"]} tone="dark" bold />
      <Arrow points={[[60, 50], [60, 76]]} />
      <Box x={20} y={78} w={80} h={30} lines={["B"]} tone="mid" bold />
      <Note x={60} y={122} lines={["Single"]} size={11} bold />

      {/* multilevel */}
      <Box x={150} y={20} w={80} h={26} lines={["A"]} tone="dark" bold />
      <Arrow points={[[190, 46], [190, 66]]} />
      <Box x={150} y={68} w={80} h={26} lines={["B"]} tone="mid" bold />
      <Arrow points={[[190, 94], [190, 114]]} />
      <Box x={150} y={116} w={80} h={26} lines={["C"]} tone="light" />
      <Note x={190} y={158} lines={["Multilevel"]} size={11} bold />

      {/* hierarchical */}
      <Box x={330} y={20} w={80} h={30} lines={["A"]} tone="dark" bold />
      <Arrow points={[[370, 50], [300, 84]]} />
      <Arrow points={[[370, 50], [440, 84]]} />
      <Box x={260} y={86} w={80} h={30} lines={["B"]} tone="mid" bold />
      <Box x={400} y={86} w={80} h={30} lines={["C"]} tone="mid" bold />
      <Note x={370} y={132} lines={["Hierarchical"]} size={11} bold />

      {/* multiple via interfaces */}
      <Box x={260} y={180} w={80} h={28} lines={["I1", "(interface)"]} tone="outline" size={10} />
      <Box x={400} y={180} w={80} h={28} lines={["I2", "(interface)"]} tone="outline" size={10} />
      <Arrow points={[[300, 208], [340, 236]]} />
      <Arrow points={[[440, 208], [400, 236]]} />
      <Box x={330} y={238} w={80} h={28} lines={["C"]} tone="light" />
      <Note x={370} y={290} lines={["\"Multiple\" (of type) — a class implements many interfaces"]} size={10} />
    </Frame>
  );
}
