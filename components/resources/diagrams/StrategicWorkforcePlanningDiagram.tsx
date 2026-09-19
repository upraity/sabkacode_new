import { StepperDiagram } from "./StepperDiagram";

export function StrategicWorkforcePlanningDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Business", "Strategy"],
        ["Forecast", "Talent Demand"],
        ["Assess", "Talent Supply"],
        ["Analyse", "Skills Gaps"],
        ["Act", "& Monitor"],
      ]}
    />
  );
}
