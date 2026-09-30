import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function OrganizationStructuresDiagram() {
  return (
    <Frame w={560} h={230} className="mx-auto w-full max-w-lg">
      {/* Line */}
      <Note x={70} y={12} lines={["Line"]} size={11} bold />
      <Box x={30} y={22} w={80} h={26} lines={["Manager"]} tone="dark" size={9} />
      <Arrow points={[[70,48],[40,76]]} /><Arrow points={[[70,48],[100,76]]} />
      <Box x={10} y={78} w={60} h={24} lines={["Worker"]} tone="light" size={9} />
      <Box x={80} y={78} w={60} h={24} lines={["Worker"]} tone="light" size={9} />

      {/* Functional */}
      <Note x={280} y={12} lines={["Functional"]} size={11} bold />
      <Box x={240} y={22} w={80} h={26} lines={["General Mgr"]} tone="dark" size={9} />
      <Arrow points={[[260,48],[220,76]]} /><Arrow points={[[280,48],[280,76]]} /><Arrow points={[[300,48],[340,76]]} />
      <Box x={190} y={78} w={60} h={24} lines={["Production"]} tone="mid" size={8} />
      <Box x={250} y={78} w={60} h={24} lines={["Finance"]} tone="mid" size={8} />
      <Box x={310} y={78} w={60} h={24} lines={["Marketing"]} tone="mid" size={8} />

      {/* Matrix */}
      <Note x={470} y={12} lines={["Matrix"]} size={11} bold />
      <Box x={430} y={30} w={80} h={22} lines={["Project A"]} tone="outline" size={8} />
      <Box x={430} y={58} w={80} h={22} lines={["Project B"]} tone="outline" size={8} />
      <Box x={520} y={30} w={30} h={22} lines={["Fn 1"]} tone="light" size={8} />
      <Box x={520} y={58} w={30} h={22} lines={["Fn 2"]} tone="light" size={8} />

      <Note x={280} y={140} lines={["Line: one boss per person   |   Functional: specialist heads   |   Matrix: dual reporting"]} size={10} />
    </Frame>
  );
}
