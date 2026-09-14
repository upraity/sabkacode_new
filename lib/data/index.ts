// ---------------------------------------------------------------------------
// DATA ACCESS LAYER
//
// Every page and component in this app reads content through the functions
// in this file — never by importing the *.json.ts files directly. That one
// rule is what makes this app "database-ready":
//
//   Today:   each function reads an in-memory array from lib/data/*.json.ts
//   Later:   swap the function body for a Prisma/SQL/CMS query and nothing
//            in app/ or components/ needs to change, because the function
//            names and return shapes (from types/index.ts) stay the same.
//
// All functions are declared `async` on purpose, even though they don't
// need to be yet, so calling code already awaits them correctly.
// ---------------------------------------------------------------------------

import { courses } from "./courses.json";
import { universities } from "./universities.json";
import { courseUniversityLinks } from "./course-university.json";
import { branchLinks } from "./branches.json";
import { subjects } from "./subjects.json";
import { resources } from "./resources.json";
import { projects } from "./projects.json";
import { tools } from "./tools.json";
import { affiliateProducts } from "./products.json";
import type {
  Branch,
  Course,
  Project,
  ProjectCategory,
  ResourceItem,
  Subject,
  Tool,
  University,
  AffiliateProductData,
} from "@/types";

// ---------- Courses ----------

export async function getCourses(): Promise<Course[]> {
  return courses;
}

export async function getCourseBySlug(slug: string): Promise<Course | undefined> {
  return courses.find((c) => c.slug === slug);
}

// ---------- Universities ----------

export async function getUniversities(): Promise<University[]> {
  return universities;
}

export async function getUniversityBySlug(slug: string): Promise<University | undefined> {
  return universities.find((u) => u.slug === slug);
}

export async function getUniversitiesForCourse(courseSlug: string): Promise<University[]> {
  const slugs = courseUniversityLinks
    .filter((link) => link.courseSlug === courseSlug)
    .map((link) => link.universitySlug);
  return universities.filter((u) => slugs.includes(u.slug));
}

// ---------- Branches ----------

export async function getBranches(
  courseSlug: string,
  universitySlug: string
): Promise<Branch[]> {
  return branchLinks
    .filter((l) => l.courseSlug === courseSlug && l.universitySlug === universitySlug)
    .map((l) => l.branch);
}

export async function getBranchBySlug(
  courseSlug: string,
  universitySlug: string,
  branchSlug: string
): Promise<Branch | undefined> {
  const branches = await getBranches(courseSlug, universitySlug);
  return branches.find((b) => b.slug === branchSlug);
}

// ---------- Subjects ----------

export async function getSubjects(params: {
  courseSlug: string;
  universitySlug: string;
  branchSlug: string;
  semester: number;
}): Promise<Subject[]> {
  return subjects.filter(
    (s) =>
      s.courseSlug === params.courseSlug &&
      s.universitySlug === params.universitySlug &&
      s.branchSlug === params.branchSlug &&
      s.semester === params.semester
  );
}

export async function getSubjectBySlug(params: {
  courseSlug: string;
  universitySlug: string;
  branchSlug: string;
  semester: number;
  subjectSlug: string;
}): Promise<Subject | undefined> {
  const list = await getSubjects(params);
  return list.find((s) => s.slug === params.subjectSlug);
}

export async function getAllSubjects(): Promise<Subject[]> {
  return subjects;
}

export async function getSubjectsForUniversity(universitySlug: string): Promise<Subject[]> {
  return subjects.filter((s) => s.universitySlug === universitySlug);
}

// ---------- Resources (notes / pyq / question-bank / practical / viva) ----------

export async function getResourcesForSubject(subjectId: string): Promise<ResourceItem[]> {
  return resources.filter((r) => r.subjectId === subjectId);
}

// ---------- Previous Year Papers browser (/papers) ----------
// Powers the University -> Course -> Subject cascading filter page.

export interface PYQRow {
  subject: Subject;
  resource: ResourceItem;
}

export async function getPYQRows(params: {
  universitySlug: string;
  courseSlug?: string;
  subjectId?: string;
}): Promise<PYQRow[]> {
  let subs = subjects.filter((s) => s.universitySlug === params.universitySlug);
  if (params.courseSlug) subs = subs.filter((s) => s.courseSlug === params.courseSlug);
  if (params.subjectId) subs = subs.filter((s) => s.id === params.subjectId);

  const subjectById = new Map(subs.map((s) => [s.id, s]));

  return resources
    .filter((r) => r.type === "pyq" && subjectById.has(r.subjectId))
    .map((r) => ({ subject: subjectById.get(r.subjectId)!, resource: r }))
    .sort((a, b) => (b.resource.year ?? 0) - (a.resource.year ?? 0));
}

// ---------- Projects ----------

export interface ProjectFilterParams {
  category?: ProjectCategory;
  technology?: string;
  difficulty?: string;
  query?: string;
}

export async function getProjects(filters: ProjectFilterParams = {}): Promise<Project[]> {
  return projects.filter((p) => {
    if (filters.category && p.category !== filters.category) return false;
    if (filters.difficulty && p.difficulty !== filters.difficulty) return false;
    if (
      filters.technology &&
      !p.technologies.some((t) => t.toLowerCase() === filters.technology!.toLowerCase())
    )
      return false;
    if (filters.query) {
      const q = filters.query.toLowerCase();
      const haystack = `${p.title} ${p.shortDescription} ${p.technologies.join(" ")}`.toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });
}

export async function getFeaturedProjects(limit = 4): Promise<Project[]> {
  return projects.filter((p) => p.featured).slice(0, limit);
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  return projects.find((p) => p.slug === slug);
}

export async function getRelatedProjects(project: Project, limit = 3): Promise<Project[]> {
  return projects
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, limit);
}

export async function getAllProjectSlugs(): Promise<string[]> {
  return projects.map((p) => p.slug);
}

// ---------- Tools ----------

export async function getTools(): Promise<Tool[]> {
  return tools;
}

export async function getToolBySlug(slug: string): Promise<Tool | undefined> {
  return tools.find((t) => t.slug === slug);
}

// ---------- Affiliate Products ----------

export async function getAffiliateProduct(code: string): Promise<AffiliateProductData | undefined> {
  return affiliateProducts[code];
}

export async function getActiveAffiliateProducts(): Promise<AffiliateProductData[]> {
  return Object.values(affiliateProducts).filter((p) => p.active);
}
