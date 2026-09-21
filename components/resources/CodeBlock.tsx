// Renders a `kind: "code"` block of a UnitNote: a code panel with an optional
// title bar and an optional "Output" panel (terminal / tool output).
// Pure presentational component (no hooks), so it works in server and client trees.
//
// language "letter" and "report" are sample business letters / reports: they are
// shown on a light background because they are prose, not program code.

export type CodeBlockProps = {
  language?: string;
  title?: string;
  code: string;
  output?: string;
};

const languageLabel: Record<string, string> = {
  c: "C",
  dos: "DOS",
  bat: "BATCH",
  text: "PSEUDOCODE",
  js: "JAVASCRIPT",
  xquery: "XQUERY",
  letter: "SAMPLE LETTER",
  report: "SAMPLE REPORT",
};

export function CodeBlock({ language, title, code, output }: CodeBlockProps) {
  const label = language ? (languageLabel[language] ?? language.toUpperCase()) : undefined;
  const prose = language === "letter" || language === "report";
  return (
    <figure className="my-4 overflow-hidden rounded-lg border border-ink-300">
      {(title || label) && (
        <figcaption className="flex items-center justify-between gap-3 border-b border-ink-300 bg-ink-100 px-3 py-1.5">
          <span className="text-xs font-semibold text-ink-800">{title}</span>
          {label && <span className="shrink-0 rounded bg-ink-800 px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-white">{label}</span>}
        </figcaption>
      )}
      <pre className={`overflow-x-auto p-3 text-[12.5px] leading-relaxed ${prose ? "bg-white text-ink-800" : "bg-ink-800 text-ink-100"}`}>
        <code className="font-mono whitespace-pre">{code}</code>
      </pre>
      {output && (
        <div className="border-t border-ink-700 bg-white">
          <div className="border-b border-ink-100 bg-ink-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-ink-600">Output</div>
          <pre className="overflow-x-auto p-3 text-[12.5px] leading-relaxed text-ink-800">
            <code className="font-mono whitespace-pre">{output}</code>
          </pre>
        </div>
      )}
    </figure>
  );
}
