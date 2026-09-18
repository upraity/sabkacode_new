import { StepperDiagram } from "./StepperDiagram";

export function ObModelDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Inputs", "(individual, group,", "org. level factors)"],
        ["Processes", "(attitudes, perception,", "communication, decisions)"],
        ["Outcomes", "(performance,", "satisfaction, commitment)"],
      ]}
    />
  );
}
