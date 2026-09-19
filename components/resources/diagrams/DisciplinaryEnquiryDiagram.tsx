import { StepperDiagram } from "./StepperDiagram";

export function DisciplinaryEnquiryDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Allegation", "Identified"],
        ["Notice", "& Response"],
        ["Enquiry", "Evidence"],
        ["Findings", "Recorded"],
        ["Decision", "& Action"],
      ]}
    />
  );
}
