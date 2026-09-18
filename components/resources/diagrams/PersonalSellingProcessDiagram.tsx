import { StepperDiagram } from "./StepperDiagram";

export function PersonalSellingProcessDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Prospect", "& Qualify"],
        ["Pre-Approach", "& Approach"],
        ["Need", "Discovery"],
        ["Present", "& Handle Objections"],
        ["Close", "& Follow Up"],
      ]}
    />
  );
}
