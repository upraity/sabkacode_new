import { StepperDiagram } from "./StepperDiagram";

export function DosBootProcessDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Power ON", "(switch on)"],
        ["POST", "(hardware test)"],
        ["ROM BIOS", "(bootstrap)"],
        ["IO.SYS +", "MSDOS.SYS"],
        ["CONFIG.SYS +", "COMMAND.COM"],
        ["AUTOEXEC.BAT", "then C:\\> prompt"],
      ]}
    />
  );
}
