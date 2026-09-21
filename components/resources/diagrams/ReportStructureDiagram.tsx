import { StepperDiagram } from "./StepperDiagram";

export function ReportStructureDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Title page", "& contents"],
        ["Summary", "(abstract)"],
        ["Introduction", "& scope"],
        ["Findings", "(main body)"],
        ["Conclusions", "(meaning)"],
        ["Recommend-", "ations"],
        ["Appendix", "& references"],
      ]}
    />
  );
}
