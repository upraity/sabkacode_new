import { StepperDiagram } from "./StepperDiagram";

export function JavaExecutionProcessDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Source code", "Hello.java"],
        ["javac", "compiler"],
        ["Bytecode", "Hello.class"],
        ["Class loader", "+ verifier"],
        ["JVM", "interpreter / JIT"],
      ]}
    />
  );
}
