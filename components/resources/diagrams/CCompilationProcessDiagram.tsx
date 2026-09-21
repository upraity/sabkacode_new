import { StepperDiagram } from "./StepperDiagram";

export function CCompilationProcessDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Source code", "(prog.c)"],
        ["Pre-", "processor"],
        ["Compiler", "(prog.obj)"],
        ["Linker", "(prog.exe)"],
        ["Loader /", "Execute"],
      ]}
    />
  );
}
