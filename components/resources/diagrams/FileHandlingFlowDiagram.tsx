import { StepperDiagram } from "./StepperDiagram";

export function FileHandlingFlowDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Declare", "FILE *fp"],
        ["fopen()", "open the file"],
        ["Check", "fp != NULL"],
        ["Read / Write", "fscanf, fprintf"],
        ["fclose()", "close the file"],
      ]}
    />
  );
}
