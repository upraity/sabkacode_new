import { StepperDiagram } from "./StepperDiagram";

export function AppletLifeCycleDiagram() {
  return (
    <StepperDiagram
      steps={[
        ["init()", "once, on load"],
        ["start()", "becomes visible"],
        ["paint()", "draws the applet"],
        ["stop()", "page left/hidden"],
        ["destroy()", "once, removed"],
      ]}
    />
  );
}
