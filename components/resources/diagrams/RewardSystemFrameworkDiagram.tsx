import { Arrow, Box, Frame } from "./DiagramKit";

export function RewardSystemFrameworkDiagram() {
  return (
    <Frame w={560} h={290} className="mx-auto w-full max-w-xl">
      <Box x={195} y={18} w={170} h={42} lines={["Reward System"]} tone="dark" bold />
      <Arrow points={[[280,60],[280,90]]} />
      <Box x={25} y={90} w={125} h={44} lines={["Fixed Pay"]} tone="light" />
      <Box x={165} y={90} w={125} h={44} lines={["Variable Pay"]} tone="light" />
      <Box x={305} y={90} w={125} h={44} lines={["Benefits"]} tone="light" />
      <Box x={445} y={90} w={90} h={44} lines={["Recognition"]} tone="light" size={10} />
      <Arrow points={[[280,90],[87,90]]} />
      <Arrow points={[[280,90],[228,90]]} />
      <Arrow points={[[280,90],[367,90]]} />
      <Arrow points={[[280,90],[490,90]]} />
      <Arrow points={[[87,134],[87,205],[280,205]]} />
      <Arrow points={[[228,134],[228,205],[280,205]]} />
      <Arrow points={[[367,134],[367,205],[280,205]]} />
      <Arrow points={[[490,134],[490,205],[280,205]]} />
      <Box x={175} y={205} w={210} h={42} lines={["Attraction • Motivation", "• Retention • Alignment"]} tone="mid" bold size={10} />
    </Frame>
  );
}
