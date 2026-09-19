import { StepperDiagram } from "./StepperDiagram";

export function TalentDevelopmentCycleDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Assess", "Capability Gap"],
        ["Plan", "Development"],
        ["Learn", "& Practise"],
        ["Apply", "on the Job"],
        ["Review", "& Improve"],
      ]}
    />
  );
}
