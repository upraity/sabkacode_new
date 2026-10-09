import Link from "next/link";
import {
  ArrowRight,
  FileText,
  HelpCircle,
  FolderGit2,
  FlaskConical,
  MessageCircleQuestion,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { StatsStrip } from "@/components/ui/StatsStrip";
import { CourseCard } from "@/components/courses/CourseCard";
import { UniversityCard } from "@/components/university/UniversityCard";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ToolCard } from "@/components/tools/ToolCard";
import { WhySabkaCode } from "@/components/home/WhySabkaCode";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FAQSection } from "@/components/home/FAQSection";

import {
  getCourses,
  getUniversities,
  getUniversitiesForCourse,
  getFeaturedProjects,
  getTools,
  getContentStats,
} from "@/lib/data";

import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "SabkaCode",
  path: "/",
});

const popularResources = [
  {
    icon: FileText,
    label: "Notes",
    href: "/notes",
  },
  {
    icon: HelpCircle,
    label: "PYQs",
    href: "/papers",
  },
  {
    icon: FolderGit2,
    label: "Projects",
    href: "/projects",
  },
  {
    icon: FlaskConical,
    label: "Practical",
    href: "/practical",
  },
  {
    icon: MessageCircleQuestion,
    label: "Question Bank",
    href: "/question-bank",
  },
];

export default async function HomePage() {
  const [
    courses,
    universities,
    featuredProjects,
    tools,
    stats,
  ] = await Promise.all([
    getCourses(),
    getUniversities(),
    getFeaturedProjects(4),
    getTools(),
    getContentStats(),
  ]);

  const courseCounts = await Promise.all(
    courses.map(async (course) => {
      const courseUniversities =
        await getUniversitiesForCourse(course.slug);

      return {
        slug: course.slug,
        count: courseUniversities.length,
      };
    })
  );

  const countBySlug = Object.fromEntries(
    courseCounts.map(({ slug, count }) => [slug, count])
  );

  return (
    <>
      {/* Hero Section */}
      <section className="border-b border-ink-100 bg-gradient-to-b from-brand-50/60 to-white">
        <Container className="py-14 text-center sm:py-20">
          <h1 className="text-3xl font-bold tracking-tight text-ink-900 sm:text-5xl">
            SabkaCode
          </h1>

          <p className="mt-3 text-lg font-medium text-ink-700 sm:text-xl">
            Your Student & Coding Platform
          </p>

          <p className="mx-auto mt-4 max-w-xl text-ink-500">
            Notes, previous year papers, projects and useful tools
            for students across multiple universities.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <LinkButton href="/courses">
              Explore Courses
            </LinkButton>

            <LinkButton
              href="/projects"
              variant="secondary"
            >
              Browse Projects
            </LinkButton>
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <StatsStrip
              stats={[
                {
                  value: stats.totalUniversities,
                  label: "Universities",
                },
                {
                  value: stats.totalSubjects,
                  label: "Subjects",
                },
                {
                  value: stats.totalNotes + stats.totalPyqs,
                  label: "Notes & PYQs",
                },
                {
                  value: stats.totalDetailedNotes,
                  label: "Full Unit-Wise Notes",
                },
              ]}
            />
          </div>
        </Container>
      </section>

      {/* Courses */}
      <Section
        title="Explore Courses"
        action={
          <Link
            href="/courses"
            className="flex items-center gap-1 text-sm font-medium text-brand-600"
          >
            View all
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        }
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              universityCount={countBySlug[course.slug] ?? 0}
            />
          ))}
        </div>
      </Section>

      {/* Why SabkaCode */}
      <Section
        title="Why Students Choose SabkaCode"
        description="Built around what actually helps before an exam — not a generic resource dump."
        className="bg-ink-50/40"
      >
        <WhySabkaCode />
      </Section>

      {/* How It Works */}
      <Section
        title="How It Works"
        description="From homepage to exam-ready notes in four steps."
      >
        <HowItWorks />
      </Section>

      {/* Popular Resources */}
      <Section
        title="Popular Resources"
        className="bg-ink-50/40"
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {popularResources.map(
            ({ icon: Icon, label, href }) => (
              <Link
                key={label}
                href={href}
                className="flex flex-col items-center gap-2 rounded-card border border-ink-100 bg-white py-6 shadow-card transition-colors hover:border-brand-300"
              >
                <Icon className="h-6 w-6 text-brand-600" />

                <span className="text-sm font-medium text-ink-800">
                  {label}
                </span>
              </Link>
            )
          )}
        </div>
      </Section>

      {/* Featured Projects */}
      <Section
        title="Featured Projects"
        action={
          <Link
            href="/projects"
            className="flex items-center gap-1 text-sm font-medium text-brand-600"
          >
            View all
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        }
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </Section>

      {/* Student Tools */}
      <Section
        title="Student Tools"
        className="bg-ink-50/40"
        action={
          <Link
            href="/tools"
            className="flex items-center gap-1 text-sm font-medium text-brand-600"
          >
            View all
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        }
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.slice(0, 3).map((tool) => (
            <ToolCard
              key={tool.id}
              tool={tool}
            />
          ))}
        </div>
      </Section>

      {/* Universities */}
      <Section title="Universities on SabkaCode">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {universities.map((university) => (
            <UniversityCard
              key={university.id}
              university={university}
              href={`/universities/${university.slug}`}
            />
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section
        title="Frequently Asked Questions"
        className="bg-ink-50/40"
      >
        <FAQSection />
      </Section>
    </>
  );
}
