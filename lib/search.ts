import { SearchableItem } from "@/types";
import {
  getCourses,
  getUniversities,
  getAllSubjects,
  getProjects,
  getTools,
} from "@/lib/data";

// Builds a flat, searchable index across every content type.
// Kept intentionally dependency-free (no fuse.js/algolia) to stay light —
// swap this for a real search service later if the catalogue grows large.
export async function buildSearchIndex(): Promise<SearchableItem[]> {
  const [courses, universities, subjects, projects, tools] = await Promise.all([
    getCourses(),
    getUniversities(),
    getAllSubjects(),
    getProjects(),
    getTools(),
  ]);

  const items: SearchableItem[] = [];

  for (const c of courses) {
    items.push({ type: "course", title: c.name, subtitle: c.fullName, href: `/courses/${c.slug}` });
  }

  for (const u of universities) {
    items.push({
      type: "university",
      title: u.shortName,
      subtitle: u.name,
      href: `/universities/${u.slug}`,
    });
  }

  for (const s of subjects) {
    items.push({
      type: "subject",
      title: s.name,
      subtitle: `Semester ${s.semester}`,
      href: `/courses/${s.courseSlug}/${s.universitySlug}/${s.branchSlug}/${s.semester}/${s.slug}`,
    });
  }

  for (const p of projects) {
    items.push({
      type: "project",
      title: p.title,
      subtitle: p.shortDescription,
      href: `/projects/${p.slug}`,
    });
  }

  for (const t of tools) {
    items.push({ type: "tool", title: t.name, subtitle: t.description, href: `/tools/${t.slug}` });
  }

  return items;
}

export function searchItems(index: SearchableItem[], query: string, limit = 8): SearchableItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  return index
    .map((item) => {
      const title = item.title.toLowerCase();
      const subtitle = (item.subtitle ?? "").toLowerCase();
      let score = 0;
      if (title === q) score = 100;
      else if (title.startsWith(q)) score = 80;
      else if (title.includes(q)) score = 60;
      else if (subtitle.includes(q)) score = 30;
      return { item, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.item);
}
