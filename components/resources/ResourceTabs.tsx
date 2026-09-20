"use client";

import { useState } from "react";
import { FileText, Download, HelpCircle, FlaskConical, MessageCircleQuestion, ArrowRight } from "lucide-react";
import { ResourceItem, ResourceType } from "@/types";
import { EmptyState } from "@/components/ui/EmptyState";
import { Badge } from "@/components/ui/Badge";

const tabs: { type: ResourceType; label: string; icon: JSX.Element }[] = [
  { type: "notes", label: "Notes", icon: <FileText className="h-4 w-4" /> },
  { type: "pyq", label: "PYQs", icon: <HelpCircle className="h-4 w-4" /> },
  { type: "question-bank", label: "Question Bank", icon: <MessageCircleQuestion className="h-4 w-4" /> },
  { type: "practical", label: "Practical", icon: <FlaskConical className="h-4 w-4" /> },
  { type: "viva", label: "Viva", icon: <MessageCircleQuestion className="h-4 w-4" /> },
];

export function ResourceTabs({
  resources,
  defaultTab,
}: {
  resources: ResourceItem[];
  defaultTab?: ResourceType;
}) {
  const [active, setActive] = useState<ResourceType>(defaultTab ?? "notes");
  const items = resources.filter((r) => r.type === active);

  return (
    <div>
      <div className="flex flex-wrap gap-1 border-b border-ink-100">
        {tabs.map((tab) => {
          const count = resources.filter((r) => r.type === tab.type).length;
          return (
            <button
              key={tab.type}
              onClick={() => setActive(tab.type)}
              className={`flex items-center gap-1.5 border-b-2 px-3 py-2.5 text-sm font-medium transition-colors ${
                active === tab.type
                  ? "border-brand-600 text-brand-700"
                  : "border-transparent text-ink-500 hover:text-ink-800"
              }`}
            >
              {tab.icon}
              {tab.label}
              {count > 0 && <span className="text-xs text-ink-400">({count})</span>}
            </button>
          );
        })}
      </div>

      <div className="py-6">
        {items.length === 0 ? (
          <EmptyState
            title="No resources are available for this subject yet."
            description="Check back later — this section is updated regularly."
          />
        ) : (
          <ul className="space-y-2">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex flex-col gap-3 rounded-card border border-ink-100 bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-0">
                  <p className="line-clamp-2 break-words font-medium text-ink-900">{item.title}</p>
                  {item.description && (
                    <p className="mt-0.5 line-clamp-2 text-sm text-ink-500">{item.description}</p>
                  )}
                  <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-ink-400">
                    {item.year && <span>{item.year}</span>}
                    {item.examType && <span>{item.examType}</span>}
                    <span>Updated {item.updatedAt}</span>
                    {item.isDemo && <Badge tone="muted">Demo data</Badge>}
                  </div>
                </div>
                {item.anchor ? (
                  <a
                    href={`#${item.anchor}`}
                    className="flex w-full shrink-0 items-center justify-center gap-1.5 rounded-md bg-brand-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-brand-700 sm:w-auto"
                  >
                    View Notes <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                ) : item.fileUrl ? (
                  <a
                    href={item.fileUrl}
                    className="flex w-full shrink-0 items-center justify-center gap-1.5 rounded-md bg-brand-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-brand-700 sm:w-auto"
                  >
                    <Download className="h-3.5 w-3.5" /> Download
                  </a>
                ) : (
                  <span className="block w-full shrink-0 rounded-md bg-ink-100 px-3 py-1.5 text-center text-xs text-ink-500 sm:w-auto">
                    File coming soon
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
