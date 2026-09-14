import { ResourceItem } from "@/types";

// DEMO DATA — resource metadata is modelled fully, but `fileUrl` is left
// undefined on purpose: no real files exist yet, and the platform must
// never claim a download is available when it isn't (see content rules).
// The UI shows a clear "coming soon" state whenever fileUrl is missing.
export const resources: ResourceItem[] = [
  {
    id: "r-1",
    subjectId: "s-ds",
    type: "notes",
    title: "Unit 1 — Arrays & Linked Lists",
    description: "Handwritten-style notes covering array operations and singly/doubly linked lists.",
    updatedAt: "2025-08-01",
    isDemo: true,
  },
  {
    id: "r-2",
    subjectId: "s-ds",
    type: "notes",
    title: "Unit 2 — Stacks & Queues",
    updatedAt: "2025-08-03",
    isDemo: true,
  },
  {
    id: "r-3",
    subjectId: "s-ds",
    type: "pyq",
    title: "Data Structures End Semester Paper",
    year: 2024,
    examType: "Regular",
    updatedAt: "2025-01-10",
    isDemo: true,
  },
  {
    id: "r-4",
    subjectId: "s-ds",
    type: "pyq",
    title: "Data Structures End Semester Paper",
    year: 2023,
    examType: "Regular",
    updatedAt: "2024-01-12",
    isDemo: true,
  },
  {
    id: "r-5",
    subjectId: "s-ds",
    type: "question-bank",
    title: "Important Questions — Trees & Graphs",
    updatedAt: "2025-07-20",
    isDemo: true,
  },
  {
    id: "r-6",
    subjectId: "s-ds",
    type: "viva",
    title: "Common Viva Questions — Data Structures Lab",
    updatedAt: "2025-07-22",
    isDemo: true,
  },
  {
    id: "r-7",
    subjectId: "s-dbms",
    type: "notes",
    title: "Unit 1 — ER Model & Relational Model",
    updatedAt: "2025-08-05",
    isDemo: true,
  },
  {
    id: "r-8",
    subjectId: "s-dbms",
    type: "practical",
    title: "SQL Lab Programs — Set 1",
    updatedAt: "2025-08-06",
    isDemo: true,
  },
];
