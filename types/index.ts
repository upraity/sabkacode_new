// ---------------------------------------------------------------------------
// Core content types for SabkaCode.
//
// These types describe the shape of data regardless of where it comes from.
// Right now every entity is read from local files in `lib/data/`. Later,
// the same shapes can be filled by a real database (Postgres/Prisma, etc.)
// without changing any component — only the functions in `lib/data/` need
// to change from "read local file" to "query database".
// ---------------------------------------------------------------------------

export type ResourceType =
  | "notes"
  | "pyq"
  | "question-bank"
  | "practical"
  | "viva";

export type ProjectCategory =
  | "web-development"
  | "python"
  | "java"
  | "ai-ml"
  | "android"
  | "cyber-security"
  | "iot"
  | "final-year";

export type ProjectType =
  | "mini"
  | "major"
  | "final-year"
  | "internship"
  | "academic";

export type DifficultyLevel = "beginner" | "intermediate" | "advanced";

export interface Course {
  id: string;
  slug: string; // e.g. "btech"
  name: string; // e.g. "B.Tech"
  fullName: string; // e.g. "Bachelor of Technology"
  description: string;
  hasBranches: boolean;
  totalSemesters: number;
}

export interface University {
  id: string;
  slug: string; // e.g. "aktu"
  name: string; // e.g. "Dr. A.P.J. Abdul Kalam Technical University"
  shortName: string; // e.g. "AKTU"
  description: string;
  location: string;
  websiteUrl?: string;
  status: "active" | "coming-soon";
}

export interface Branch {
  id: string;
  slug: string; // e.g. "cse"
  name: string; // e.g. "Computer Science & Engineering"
}

export interface Subject {
  id: string;
  slug: string;
  name: string;
  code?: string;
  description?: string;
  courseSlug: string;
  universitySlug: string;
  branchSlug: string;
  semester: number;
}

// A single downloadable/viewable resource item attached to a subject.
// `fileUrl` is intentionally optional — when it is missing, the UI must
// show an empty state rather than a broken or fake link.
export interface ResourceItem {
  id: string;
  subjectId: string;
  type: ResourceType;
  title: string;
  description?: string;
  year?: number; // for PYQs
  examType?: string; // for PYQs: "Regular" | "Back Paper" | "Mid Term" | ...
  fileUrl?: string;
  updatedAt: string; // ISO date
  isDemo?: boolean; // marks placeholder/demo content explicitly
}

export interface ProjectFiles {
  sourceCode?: string;
  database?: string;
  report?: string;
  ppt?: string;
  synopsis?: string;
  ieeePaper?: string;
  documentation?: string;
  vivaQuestions?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: ProjectCategory;
  technologies: string[];
  courseSlug?: string;
  universitySlug?: string;
  branchSlug?: string;
  semester?: number;
  projectType: ProjectType;
  difficulty: DifficultyLevel;
  features?: string[];
  screenshots?: string[];
  demoUrl?: string;
  githubUrl?: string;
  files?: ProjectFiles;
  isFree: boolean;
  featured?: boolean;
  createdAt: string;
  updatedAt: string;
  isDemo?: boolean;
}

export type ToolCategory =
  | "student-tools"
  | "coding-tools"
  | "developer-tools";

export interface Tool {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: ToolCategory;
  icon: string; // lucide-react icon name
}

// Generic shape used by the global search index.
export interface SearchableItem {
  type: "course" | "university" | "subject" | "project" | "tool";
  title: string;
  subtitle?: string;
  href: string;
}
