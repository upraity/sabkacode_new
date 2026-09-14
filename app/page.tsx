import Link from "next/link";
import { ArrowRight, FileText, HelpCircle, FolderGit2, FlaskConical, MessageCircleQuestion } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { CourseCard } from "@/components/courses/CourseCard";
import { UniversityCard } from "@/components/university/UniversityCard";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ToolCard } from "@/components/tools/ToolCard";
import {
  getCourses,
  getUniversities,
  getUniversitiesForCourse,
  getFeaturedProjects,
  getTools,
} from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "SabkaCode", path: "/" });

const popularResources = [
  { icon: FileText, label: "Notes" },
  { icon: HelpCircle, label: "PYQs" },
  { icon: FolderGit2, label: "Projects" },
  { icon: FlaskConical, label: "Practical" },
  { icon: MessageCircleQuestion, label: "Question Bank" },
];

export default async function HomePage() {
  const [courses, universities, featuredProjects, tools] = await Promise.all([
    getCourses(),
    getUniversities(),
    getFeaturedProjects(4),
    getTools(),
  ]);

  const courseCounts = await Promise.all(
    courses.map(async (c) => ({ slug: c.slug, count: (await getUniversitiesForCourse(c.slug)).length }))
  );
  const countBySlug = Object.fromEntries(courseCounts.map((c) => [c.slug, c.count]));

  return (
    <>
      <section className="border-b border-ink-100 bg-gradient-to-b from-brand-50/60 to-white">
        <Container className="py-14 sm:py-20 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink-900">SabkaCode</h1>
          <p className="mt-3 text-lg sm:text-xl font-medium text-ink-700">
            Your Student & Coding Platform
          </p>
          <p className="mx-auto mt-4 max-w-xl text-ink-500">
            Notes, previous year papers, projects and useful tools for students — across multiple
            universities.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <LinkButton href="/courses">Explore Courses</LinkButton>
            <LinkButton href="/projects" variant="secondary">
              Browse Projects
            </LinkButton>
          </div>
        </Container>
      </section>

      <Section
        title="Explore Courses"
        action={
          <Link href="/courses" className="flex items-center gap-1 text-sm font-medium text-brand-600">
            View all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        }
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} universityCount={countBySlug[course.slug]} />
          ))}
        </div>
      </Section>

      <Section title="Popular Resources" className="bg-ink-50/40">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
          {popularResources.map(({ icon: Icon, label }) => (
            <Link
              key={label}
              href="/notes"
              className="flex flex-col items-center gap-2 rounded-card border border-ink-100 bg-white py-6 shadow-card hover:border-brand-300"
            >
              <Icon className="h-6 w-6 text-brand-600" />
              <span className="text-sm font-medium text-ink-800">{label}</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        title="Featured Projects"
        action={
          <Link href="/projects" className="flex items-center gap-1 text-sm font-medium text-brand-600">
            View all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        }
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>

      <Section
        title="Student Tools"
        className="bg-ink-50/40"
        action={
          <Link href="/tools" className="flex items-center gap-1 text-sm font-medium text-brand-600">
            View all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        }
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.slice(0, 3).map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </Section>

      <Section title="Universities on SabkaCode">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {universities.map((u) => (
            <UniversityCard key={u.id} university={u} href={`/universities/${u.slug}`} />
          ))}
        </div>
      </Section>
    </>
  );
}
