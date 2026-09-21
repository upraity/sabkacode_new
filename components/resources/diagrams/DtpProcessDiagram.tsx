import { StepperDiagram } from "./StepperDiagram";

export function DtpProcessDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["Plan &", "Design"],
        ["Create", "Text"],
        ["Add", "Graphics"],
        ["Page", "Layout"],
        ["Proof &", "Edit"],
        ["Print /", "Publish"],
      ]}
    />
  );
}
