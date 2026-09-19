import { StepperDiagram } from "./StepperDiagram";

export function CommunicationProcessDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Sender"],
        ["Encoding"],
        ["Message"],
        ["Channel"],
        ["Decoding"],
        ["Receiver"],
        ["Feedback"],
      ]}
    />
  );
}
