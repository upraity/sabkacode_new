import { StepperDiagram } from "./StepperDiagram";

export function MarketingAnalyticsFrameworkDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Business", "Question"],
        ["Collect &", "Prepare Data"],
        ["Analyse", "Evidence"],
        ["Interpret", "Insight"],
        ["Decide", "& Measure"],
      ]}
    />
  );
}
