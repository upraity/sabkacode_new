import { Arrow, Box, Frame } from "./DiagramKit";

export default function It03BackupRecoveryDiagram() {
  return (
    <Frame w={720} h={250} className="mx-auto w-full max-w-2xl">
      <Box x={20} y={78} w={100} h={64} lines={["Database", "Operate"]} tone="dark" bold={true} size={10} />
      <Arrow points={[[120,110],[135,110]]} />
      <Box x={135} y={78} w={100} h={64} lines={["Backup", "Protect"]} tone="light" bold={true} size={10} />
      <Arrow points={[[235,110],[250,110]]} />
      <Box x={250} y={78} w={100} h={64} lines={["Failure", "Incident"]} tone="light" bold={true} size={10} />
      <Arrow points={[[350,110],[365,110]]} />
      <Box x={365} y={78} w={100} h={64} lines={["Restore", "Recover"]} tone="light" bold={true} size={10} />
      <Arrow points={[[465,110],[480,110]]} />
      <Box x={480} y={78} w={100} h={64} lines={["Verify", "Check"]} tone="light" bold={true} size={10} />
    </Frame>
  );
}
