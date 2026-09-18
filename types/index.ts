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
  | "HTML, CSS, JS"
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
 
  // Free-text specialization tag — e.g. "Finance", "HR", "Marketing" for
  // MBA elective subjects. Shown as a badge on the subject card/page and
  // surfaced in search. Works for any course (MBA, MBA Integrated, etc.)
  // without any extra setup — just set this on a subject when it applies.
  specialization?: string;
   // Unit-wise syllabus text, shown as its own section on the subject page.
  // Left undefined when a syllabus hasn't been added for that subject yet.
  syllabus?: string;

  // Full, in-app, unit-wise written notes (not just a download link).
  // Left undefined until real notes have been authored for a subject —
  // the UI shows an honest empty state instead of a blank/broken section.
  // See UnitNote below for the content shape. This is subject-agnostic —
  // any subject on the platform can populate this the same way.
  unitNotes?: UnitNote[];
}

// ---------------------------------------------------------------------------
// In-app "Detailed Notes" content model.
//
// This is intentionally generic (not MBA/Strategic-Management specific) so
// the same UnitNotesSection component can render notes for ANY subject —
// only the data differs. A unit's content is a list of typed "blocks" that
// map 1:1 to bits of UI: a paragraph, a bullet list, a table, a callout
// box (info/example/case-study), a key-terms glossary, or a diagram
// (referenced by id — actual diagrams are hand-built React/SVG components
// registered in components/resources/diagrams/registry.tsx).
// ---------------------------------------------------------------------------

export type NoteBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "bullets"; ordered?: boolean; items: string[] }
  | {
      kind: "table";
      headers: string[];
      rows: string[][];
    }
  | {
      kind: "callout";
      tone: "info" | "example" | "case";
      title: string;
      text: string;
    }
  | {
      kind: "diagram";
      // Must match a key registered in
      // components/resources/diagrams/registry.tsx
      diagramId: string;
      caption?: string;
    };

export interface NoteHeading {
  id: string; // used for the on-page table of contents anchor
  title: string;
  icon?: string; // lucide-react icon name, e.g. "BookOpen"
  blocks: NoteBlock[];
}

export interface UnitNote {
  unitNumber: number;
  title: string;
  hours?: number;
  headings: NoteHeading[];
  keyTerms?: { term: string; definition: string }[];
  examQuestions?: string[];
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
  // Separate link for a worked/solved answer to this paper, when one
  // exists. Left undefined until a real solution is available — the UI
  // shows "Not available" rather than a broken or fake link.
  solutionUrl?: string;
  // For type "notes" items that are backed by in-app Detailed Notes
  // (a UnitNote — see below) rather than a downloadable file: the anchor
  // id to jump to on the same subject page, e.g. "unit-1". When set, the
  // Notes tab shows a "View Notes" same-page link instead of a
  // Download/"coming soon" state. Leave undefined for a normal file-link
  // notes item.
  anchor?: string;
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

// ---------------------------------------------------------------------------
// Affiliate Product Management System (Phase 1)
//
// One central record per product, keyed by a unique Product Code (e.g.
// "LAPTOP001"). Pages never hardcode a name/image/link — they only ever
// reference the code via <AffiliateProduct code="LAPTOP001" />, so updating
// a product here updates every page that uses it after the next deploy.
//
// Fields beyond the required set (price, badge, rating, etc.) are optional
// so new attributes can be added later without breaking existing products.
// ---------------------------------------------------------------------------
export interface AffiliateProductData {
  code: string;
  name: string;
  image: string;
  description: string;
  affiliateLink: string;
  buttonText: string;
  category: string;
  active: boolean;

  // Optional, future-proof fields — add more here as needed.
  shortDescription?: string;
  price?: string;
  originalPrice?: string;
  badge?: string;
  rating?: number;
  brand?: string;
  asin?: string;
}
