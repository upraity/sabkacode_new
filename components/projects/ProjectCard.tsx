import Link from "next/link";
import { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";

const categoryLabels: Record<Project["category"], string> = {
  "web-development": "Web Development",
  python: "Python",
  java: "Java",
  "ai-ml": "AI / ML",
  android: "Android",
  "cyber-security": "Cyber Security",
  iot: "IoT",
  "final-year": "Final Year",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="flex flex-col rounded-card border border-ink-100 bg-white p-5 shadow-card transition-colors hover:border-brand-300"
    >
      <div className="flex items-center justify-between gap-2">
        <Badge tone="brand">{categoryLabels[project.category]}</Badge>
        {project.isFree ? <Badge tone="muted">Free</Badge> : <Badge tone="default">Paid</Badge>}
      </div>
      <h3 className="mt-3 font-semibold text-ink-900">{project.title}</h3>
      <p className="mt-1 line-clamp-2 text-sm text-ink-500">{project.shortDescription}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 3).map((t) => (
          <span key={t} className="rounded bg-ink-50 px-2 py-0.5 text-xs text-ink-600">
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}
