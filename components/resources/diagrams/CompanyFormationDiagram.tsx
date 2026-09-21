import { StepperDiagram } from "./StepperDiagram";

export function CompanyFormationDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Promotion"],
        ["Incorporation", "(Registration)"],
        ["Capital", "Subscription"],
        ["Commencement", "of Business"],
      ]}
    />
  );
}
