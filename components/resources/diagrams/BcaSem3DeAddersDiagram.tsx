import { Arrow, Box, Frame, Lines } from "./DiagramKit";

export default function BcaSem3DeAddersDiagram() {
  return (
    <Frame w={760} h={290} className="mx-auto w-full max-w-2xl">
      <Box x={30} y={45} w={170} h={65} lines={["A", "B", "Half Adder"]} tone="dark" bold />
      <Arrow points={[[200,78],[280,78]]} />
      <Box x={280} y={35} w={170} h={85} lines={["SUM", "A ⊕ B", "CARRY = AB"]} tone="light" />
      <Box x={30} y={175} w={170} h={65} lines={["A", "B, Cin", "Full Adder"]} tone="mid" bold />
      <Arrow points={[[200,208],[280,208]]} />
      <Box x={280} y={165} w={170} h={85} lines={["SUM", "A ⊕ B ⊕ Cin", "Cout"]} tone="light" />
      <Arrow points={[[450,208],[520,208]]} />
      <Box x={520} y={160} w={200} h={95} lines={["Cascade full adders", "for multi-bit", "binary addition"]} tone="outline" />
      <Lines x={375} y={285} lines={["Carry from a lower stage becomes the carry input of the next stage in a ripple arrangement."]} size={10} />
    </Frame>
  );
}
