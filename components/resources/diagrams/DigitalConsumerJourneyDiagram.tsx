import { StepperDiagram } from "./StepperDiagram";

export function DigitalConsumerJourneyDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Discover", "Search / Social"],
        ["Compare", "Reviews / Content"],
        ["Engage", "Website / App"],
        ["Convert", "Purchase"],
        ["Advocate", "Review / Share"],
      ]}
    />
  );
}
