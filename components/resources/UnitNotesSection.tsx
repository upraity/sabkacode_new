"use client";

import { useState } from "react";
import * as Icons from "lucide-react";
import {
  NotebookText,
  ListChecks,
  BookMarked,
  ChevronDown,
  Clock,
} from "lucide-react";
import { UnitNote, NoteBlock } from "@/types";
import { EmptyState } from "@/components/ui/EmptyState";
import { diagramRegistry } from "@/components/resources/diagrams/registry";

const calloutStyles: Record<string, { wrap: string; label: string; text: string }> = {
  info: {
    wrap: "border-brand-200 bg-brand-50",
    label: "text-brand-700",
    text: "text-ink-700",
  },
  example: {
    wrap: "border-amber-200 bg-amber-50",
    label: "text-amber-700",
    text: "text-ink-700",
  },
  case: {
    wrap: "border-emerald-200 bg-emerald-50",
    label: "text-emerald-700",
    text: "text-ink-700",
  },
};

const calloutHeading: Record<string, string> = {
  info: "Good to know",
  example: "Example",
  case: "Case study",
};

function NoteBlockView({ block }: { block: NoteBlock }) {
  switch (block.kind) {
    case "paragraph":
      return <p className="mb-3 text-sm leading-relaxed text-ink-600">{block.text}</p>;

    case "bullets": {
      const ListTag = block.ordered ? "ol" : "ul";
      return (
        <ListTag
          className={`mb-3 space-y-1.5 pl-5 text-sm leading-relaxed text-ink-600 ${
            block.ordered ? "list-decimal" : "list-disc"
          }`}
        >
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ListTag>
      );
    }

    case "table":
      return (
        <div className="mb-4 overflow-x-auto rounded-card border border-ink-100">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-ink-900">
                {block.headers.map((h, i) => (
                  <th key={i} className="px-3 py-2 font-medium text-white">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 1 ? "bg-ink-50" : "bg-white"}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-3 py-2 align-top text-ink-600">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "callout": {
      const style = calloutStyles[block.tone];
      return (
        <div className={`mb-4 rounded-card border-l-4 p-4 ${style.wrap}`}>
          <p className={`mb-1 text-[11px] font-semibold uppercase tracking-wide ${style.label}`}>
            {block.title || calloutHeading[block.tone]}
          </p>
          <p className={`text-sm leading-relaxed ${style.text}`}>{block.text}</p>
        </div>
      );
    }

    case "diagram": {
      const Diagram = diagramRegistry[block.diagramId];
      if (!Diagram) return null;
      return (
        <figure className="mb-4 rounded-card border border-ink-100 bg-ink-50/40 p-5">
          <Diagram />
          {block.caption && (
            <figcaption className="mt-3 text-center text-xs italic text-ink-400">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    }

    default:
      return null;
  }
}

function UnitPanel({ unit }: { unit: UnitNote }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[200px_1fr]">
      {/* On-page table of contents */}
      <nav className="hidden lg:block">
        <div className="sticky top-20 rounded-card border border-ink-100 bg-white p-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-400">
            On this page
          </p>
          <ul className="space-y-1.5">
            {unit.headings.map((h) => (
              <li key={h.id}>
                <a
                  href={`#unit-${unit.unitNumber}-${h.id}`}
                  className="text-xs text-ink-500 hover:text-brand-600"
                >
                  {h.title}
                </a>
              </li>
            ))}
            {unit.keyTerms && unit.keyTerms.length > 0 && (
              <li>
                <a href={`#unit-${unit.unitNumber}-key-terms`} className="text-xs text-ink-500 hover:text-brand-600">
                  Key Terms
                </a>
              </li>
            )}
            {unit.examQuestions && unit.examQuestions.length > 0 && (
              <li>
                <a href={`#unit-${unit.unitNumber}-exam-qs`} className="text-xs text-ink-500 hover:text-brand-600">
                  Exam Questions
                </a>
              </li>
            )}
          </ul>
        </div>
      </nav>

      {/* Content */}
      <div className="min-w-0">
        {unit.headings.map((h) => {
          const Icon = h.icon ? (Icons as any)[h.icon] : null;
          return (
            <div key={h.id} id={`unit-${unit.unitNumber}-${h.id}`} className="scroll-mt-24 mb-8">
              <h3 className="mb-3 flex items-center gap-2 text-base font-semibold text-ink-900">
                {Icon ? <Icon className="h-4.5 w-4.5 text-brand-600" /> : null}
                {h.title}
              </h3>
              {h.blocks.map((block, i) => (
                <NoteBlockView key={i} block={block} />
              ))}
            </div>
          );
        })}

        {unit.keyTerms && unit.keyTerms.length > 0 && (
          <div id={`unit-${unit.unitNumber}-key-terms`} className="scroll-mt-24 mb-8">
            <h3 className="mb-3 flex items-center gap-2 text-base font-semibold text-ink-900">
              <BookMarked className="h-4.5 w-4.5 text-brand-600" />
              Key Terms
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {unit.keyTerms.map((kt, i) => (
                <div key={i} className="rounded-card border border-ink-100 bg-white p-3 text-sm">
                  <span className="font-semibold text-ink-900">{kt.term}:</span>{" "}
                  <span className="text-ink-600">{kt.definition}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {unit.examQuestions && unit.examQuestions.length > 0 && (
          <div id={`unit-${unit.unitNumber}-exam-qs`} className="scroll-mt-24">
            <h3 className="mb-3 flex items-center gap-2 text-base font-semibold text-ink-900">
              <ListChecks className="h-4.5 w-4.5 text-brand-600" />
              Important Exam Questions
            </h3>
            <ol className="list-decimal space-y-2 rounded-card border border-rose-200 bg-rose-50/40 p-4 pl-9 text-sm leading-relaxed text-ink-700">
              {unit.examQuestions.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}

export function UnitNotesSection({ unitNotes }: { unitNotes?: UnitNote[] }) {
  const [activeUnit, setActiveUnit] = useState<number>(unitNotes?.[0]?.unitNumber ?? 1);

  return (
    <div className="mb-8">
      <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-ink-900">
        <NotebookText className="h-5 w-5 text-brand-600" /> Detailed Notes
      </h2>

      {!unitNotes || unitNotes.length === 0 ? (
        <EmptyState
          title="Detailed notes not added yet for this subject."
          description="Check back soon — full unit-wise notes are being added regularly."
        />
      ) : (
        <div>
          <div className="mb-6 flex flex-wrap gap-2 border-b border-ink-100 pb-3">
            {unitNotes.map((u) => (
              <button
                key={u.unitNumber}
                onClick={() => setActiveUnit(u.unitNumber)}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                  activeUnit === u.unitNumber
                    ? "bg-brand-600 text-white"
                    : "bg-ink-50 text-ink-600 hover:bg-ink-100"
                }`}
              >
                Unit {u.unitNumber}
                {u.hours && (
                  <span
                    className={`flex items-center gap-0.5 text-[11px] ${
                      activeUnit === u.unitNumber ? "text-brand-100" : "text-ink-400"
                    }`}
                  >
                    <Clock className="h-3 w-3" />
                    {u.hours}h
                  </span>
                )}
              </button>
            ))}
          </div>

          {unitNotes
            .filter((u) => u.unitNumber === activeUnit)
            .map((u) => (
              <div key={u.unitNumber}>
                <h3 className="mb-5 text-lg font-semibold text-ink-900">{u.title}</h3>
                <UnitPanel unit={u} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
