import { Arrow, Box, Frame, Note } from "./DiagramKit";

export function DerivativeParticipantsDiagram() {
  return (
    <Frame w={540} h={290} className="mx-auto w-full max-w-xl">
      <Box x={195} y={18} w={150} h={44} lines={["Derivative Market"]} tone="dark" bold />
      <Box x={25} y={98} w={145} h={46} lines={["Hedgers"]} tone="light" />
      <Arrow points={[[270,62],[97,98]]} />
      <Box x={198} y={98} w={145} h={46} lines={["Speculators"]} tone="light" />
      <Arrow points={[[270,62],[270,98]]} />
      <Box x={371} y={98} w={145} h={46} lines={["Arbitrageurs"]} tone="light" />
      <Arrow points={[[270,62],[443,98]]} />
      <Arrow points={[[98,144],[98,205],[270,205]]} />
      <Arrow points={[[270,144],[270,205]]} />
      <Arrow points={[[443,144],[443,205],[270,205]]} />
      <Box x={165} y={205} w={210} h={42} lines={["Integrated understanding"]} tone="mid" bold />
      <Note x={270} y={275} lines={["Participants enter derivatives for different risk-management or return objectives."]} size={10} />
    </Frame>
  );
}
