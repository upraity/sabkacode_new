import { Suspense } from "react";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { EmptyState } from "@/components/ui/EmptyState";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectFilters } from "@/components/projects/ProjectFilters";
import { getProjects } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
import type { ProjectCategory, DifficultyLevel } from "@/types";

export const metadata = pageMetadata({
  title: "Projects",
  description: "Browse mini, major and final year projects across web development, Python, AI/ML, Java, Android and more.",
  path: "/projects",
});

interface Props {
  searchParams: { category?: string; difficulty?: string };
}

export default async function ProjectsPage({ searchParams }: Props) {
  const projects = await getProjects({
    category: searchParams.category as ProjectCategory | undefined,
    difficulty: searchParams.difficulty as DifficultyLevel | undefined,
  });

  return (
    <Section title="Projects" description="Filter by category and difficulty to find a project to build or learn from.">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Projects" }]} />

      <div className="mb-6">
        <Suspense fallback={null}>
          <ProjectFilters />
        </Suspense>
      </div>

      {projects.length === 0 ? (
        <EmptyState
          title="No projects match these filters."
          description="Try a different category or difficulty level."
        />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </Section>
  );
}
