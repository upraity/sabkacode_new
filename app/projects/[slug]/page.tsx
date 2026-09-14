import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink, Github, FileDown } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { EmptyState } from "@/components/ui/EmptyState";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { getAllProjectSlugs, getProjectBySlug, getRelatedProjects } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
import { ProjectFiles } from "@/types";

interface Props {
  params: { slug: string };
}

const categoryLabels: Record<string, string> = {
  "web-development": "Web Development",
  python: "Python",
  java: "Java",
  "ai-ml": "AI / ML",
  android: "Android",
  "cyber-security": "Cyber Security",
  iot: "IoT",
  "final-year": "Final Year",
};

const fileLabels: Record<keyof ProjectFiles, string> = {
  sourceCode: "Source Code",
  database: "Database",
  report: "Project Report",
  ppt: "PPT",
  synopsis: "Synopsis",
  ieeePaper: "IEEE Paper",
  documentation: "Documentation",
  vivaQuestions: "Viva Questions",
};

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const project = await getProjectBySlug(params.slug);
  if (!project) return pageMetadata({ title: "Project not found" });
  return pageMetadata({
    title: project.title,
    description: project.shortDescription,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({ params }: Props) {
  const project = await getProjectBySlug(params.slug);
  if (!project) notFound();

  const related = await getRelatedProjects(project);
  const fileKeys = Object.keys(fileLabels) as (keyof ProjectFiles)[];
  const availableFiles = fileKeys.filter((key) => project.files?.[key]);

  return (
    <Section>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
      />

      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="brand">{categoryLabels[project.category]}</Badge>
        {project.isFree ? <Badge tone="muted">Free</Badge> : <Badge>Paid</Badge>}
        {project.isDemo && <Badge tone="muted">Demo data</Badge>}
      </div>

      <h1 className="mt-3 text-2xl sm:text-3xl font-bold text-ink-900">{project.title}</h1>
      <p className="mt-2 max-w-2xl text-ink-600">{project.shortDescription}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.technologies.map((t) => (
          <span key={t} className="rounded bg-ink-50 px-2 py-1 text-xs font-medium text-ink-600">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            className="flex items-center gap-1.5 rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
          >
            <ExternalLink className="h-4 w-4" /> Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            className="flex items-center gap-1.5 rounded-md border border-ink-200 px-4 py-2 text-sm font-medium text-ink-800 hover:bg-ink-50"
          >
            <Github className="h-4 w-4" /> View on GitHub
          </a>
        )}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="text-lg font-semibold text-ink-900">Project Overview</h2>
            <p className="mt-2 text-ink-600">{project.fullDescription}</p>
          </div>

          {project.features && project.features.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-ink-900">Features</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-ink-600">
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h2 className="text-lg font-semibold text-ink-900">Project Information</h2>
            <dl className="mt-2 grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
              <div>
                <dt className="text-ink-400">Type</dt>
                <dd className="font-medium text-ink-800 capitalize">{project.projectType.replace("-", " ")}</dd>
              </div>
              <div>
                <dt className="text-ink-400">Difficulty</dt>
                <dd className="font-medium text-ink-800 capitalize">{project.difficulty}</dd>
              </div>
              <div>
                <dt className="text-ink-400">Category</dt>
                <dd className="font-medium text-ink-800">{categoryLabels[project.category]}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-ink-900">Available Files</h2>
          {availableFiles.length === 0 ? (
            <div className="mt-2">
              <EmptyState
                title="No files uploaded yet"
                description="Source code, report and other files for this project haven't been added yet."
              />
            </div>
          ) : (
            <ul className="mt-2 space-y-2">
              {availableFiles.map((key) => (
                <li key={key}>
                  <a
                    href={project.files![key]}
                    className="flex items-center gap-2 rounded-card border border-ink-100 bg-white px-4 py-3 text-sm font-medium text-ink-800 hover:border-brand-300"
                  >
                    <FileDown className="h-4 w-4 text-brand-600" /> {fileLabels[key]}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-14">
          <h2 className="text-lg font-semibold text-ink-900">Related Projects</h2>
          <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {related.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      )}

      <div className="mt-8">
        <Link href="/projects" className="text-sm font-medium text-brand-600">
          ← Back to all projects
        </Link>
      </div>
    </Section>
  );
}
