import { Wallet, Building2, BookOpenCheck, FileCheck2 } from "lucide-react";

const points = [
  {
    icon: Wallet,
    title: "Completely Free",
    body: "No signup, no paywalls. Every note, syllabus and previous year paper on SabkaCode is free to access.",
  },
  {
    icon: Building2,
    title: "Organised by University",
    body: "Content is structured by your actual course and university, not a generic one-size-fits-all syllabus.",
  },
  {
    icon: BookOpenCheck,
    title: "Unit-Wise Detailed Notes",
    body: "Many subjects go beyond a syllabus list — full written, unit-wise notes with diagrams, built right into the subject page.",
  },
  {
    icon: FileCheck2,
    title: "Real Previous Year Papers",
    body: "Actual past exam papers organised by year and exam type, so you know exactly what to expect.",
  },
];

export function WhySabkaCode() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {points.map((p) => (
        <div key={p.title} className="rounded-card border border-ink-100 bg-white p-5 shadow-card">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-50 text-brand-600">
            <p.icon className="h-5 w-5" />
          </span>
          <h3 className="mt-3 font-semibold text-ink-900">{p.title}</h3>
          <p className="mt-1 text-sm text-ink-500">{p.body}</p>
        </div>
      ))}
    </div>
  );
}
