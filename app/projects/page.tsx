
import { Suspense } from "react";
import Link from "next/link";

import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { EmptyState } from "@/components/ui/EmptyState";
import { StatsStrip } from "@/components/ui/StatsStrip";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectFilters } from "@/components/projects/ProjectFilters";

import { getProjects } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

import type {
  ProjectCategory,
  ProjectType,
  DifficultyLevel,
} from "@/types";

export const metadata = pageMetadata({
  title: "Student Projects with Source Code",
  description:
    "Explore student mini projects, major projects and final-year projects in web development, Python, Java, AI/ML, Android and more. Find project ideas and available learning resources on SabkaCode.",
  path: "/projects",
});

const PROJECT_CATEGORIES: ProjectCategory[] = [
  "web-development",
  "python",
  "java",
  "ai-ml",
  "android",
  "cyber-security",
  "iot",
  "html-css-js",
  "final-year",
];

const PROJECT_TYPES: ProjectType[] = [
  "mini",
  "major",
  "final-year",
  "internship",
  "academic",
];

const DIFFICULTY_LEVELS: DifficultyLevel[] = [
  "beginner",
  "intermediate",
  "advanced",
];

interface Props {
  searchParams: Promise<{
    category?: string;
    difficulty?: string;
    type?: string;
  }>;
}

function isProjectCategory(
  value: string | undefined,
): value is ProjectCategory {
  return (
    value !== undefined &&
    PROJECT_CATEGORIES.includes(value as ProjectCategory)
  );
}

function isProjectType(
  value: string | undefined,
): value is ProjectType {
  return (
    value !== undefined &&
    PROJECT_TYPES.includes(value as ProjectType)
  );
}

function isDifficultyLevel(
  value: string | undefined,
): value is DifficultyLevel {
  return (
    value !== undefined &&
    DIFFICULTY_LEVELS.includes(value as DifficultyLevel)
  );
}

export default async function ProjectsPage({ searchParams }: Props) {
  const params = await searchParams;

  const category = isProjectCategory(params.category)
    ? params.category
    : undefined;

  const difficulty = isDifficultyLevel(params.difficulty)
    ? params.difficulty
    : undefined;

  const type = isProjectType(params.type) ? params.type : undefined;

  const [filteredProjects, allProjects] = await Promise.all([
    getProjects({
      category,
      difficulty,
    }),
    getProjects(),
  ]);

  // Apply project-type filtering only after validating its value.
  const projects = type
    ? filteredProjects.filter((project) => project.projectType === type)
    : filteredProjects;

  const categoryCount = new Set(
    allProjects.map((project) => project.category),
  ).size;

  const beginnerCount = allProjects.filter(
    (project) => project.difficulty === "beginner",
  ).length;

  const miniProjectCount = allProjects.filter(
    (project) => project.projectType === "mini",
  ).length;

  const hasActiveFilters = Boolean(category || difficulty || type);

  return (
    <Section
      title="Student Projects"
      description="Explore mini projects, major projects and final-year project ideas by technology and difficulty level."
    >
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Projects" },
        ]}
      />

      <div className="mb-8 max-w-4xl space-y-4">
        <p className="leading-7 text-ink-600">
          Practical projects help students apply programming concepts,
          understand software development workflows and build demonstrable
          skills. SabkaCode brings student project ideas together across
          web development, Python, Java, artificial intelligence and machine
          learning, Android development, cybersecurity and other technology
          areas.
        </p>

        <p className="leading-7 text-ink-600">
          Whether you are looking for a small academic assignment, a mini
          project to practise a new language, or a major project for your
          final semester, use the available category and difficulty filters
          to narrow down your options. Open an individual project to review
          its description, technologies, features and available resources.
        </p>

        <p className="leading-7 text-ink-600">
          Resource availability varies by project. Where provided, project
          details may include source code, a report, a synopsis, presentation
          material or documentation. Review the individual listing before
          relying on a resource for your coursework.
        </p>
      </div>

      <div className="mb-8">
        <StatsStrip
          stats={[
            {
              value: allProjects.length,
              label: "Projects",
            },
            {
              value: categoryCount,
              label: "Categories",
            },
            {
              value: beginnerCount,
              label: "Beginner-Friendly",
            },
          ]}
        />
      </div>

      <section
        aria-labelledby="project-catalog-heading"
        className="mb-10"
      >
        <div className="mb-5">
          <h2
            id="project-catalog-heading"
            className="text-xl font-bold text-ink-900"
          >
            Browse the Project Catalog
          </h2>

          <p className="mt-2 leading-6 text-ink-600">
            Filter projects by category and difficulty to find options that
            match your current skills and learning goals.
          </p>
        </div>

        <div className="mb-6">
          <Suspense fallback={null}>
            <ProjectFilters />
          </Suspense>
        </div>

        {hasActiveFilters && (
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <p className="text-sm text-ink-600">
              Showing projects matching your selected filters.
            </p>

            <Link
              href="/projects"
              className="text-sm font-semibold text-brand-600 hover:underline"
            >
              Clear filters
            </Link>
          </div>
        )}

        {projects.length === 0 ? (
          <EmptyState
            title="No projects match these filters."
            description="Try a different category or difficulty level, or clear the filters to browse all available projects."
          />
        ) : (
          <>
            <p className="mb-4 text-sm text-ink-600">
              Showing {projects.length}{" "}
              {projects.length === 1 ? "project" : "projects"}.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </div>
          </>
        )}
      </section>

      <section
        aria-labelledby="project-types-heading"
        className="mb-10 border-t border-ink-100 pt-8"
      >
        <h2
          id="project-types-heading"
          className="text-2xl font-bold text-ink-900"
        >
          Types of Student Projects
        </h2>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <article className="rounded-card border border-ink-100 p-5">
            <h3 className="font-semibold text-ink-900">
              Mini Projects
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink-600">
              Mini projects focus on a limited problem or a specific
              programming concept. They can help students practise
              fundamentals, experiment with a framework and understand
              the basic stages of building an application.
            </p>
            <p className="mt-3 text-sm text-ink-600">
              {miniProjectCount}{" "}
              {miniProjectCount === 1
                ? "mini project"
                : "mini projects"}{" "}
              currently listed.
            </p>
          </article>

          <article className="rounded-card border border-ink-100 p-5">
            <h3 className="font-semibold text-ink-900">
              Major and Final-Year Projects
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink-600">
              Larger academic projects may combine multiple modules,
              database operations, user interfaces, APIs or data processing.
              Check the project scope and available documentation to
              understand what is required before beginning implementation.
            </p>
          </article>

          <article className="rounded-card border border-ink-100 p-5">
            <h3 className="font-semibold text-ink-900">
              Web Development Projects
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink-600">
              Web projects can help learners practise HTML, CSS and
              JavaScript, or explore frameworks, server-side logic,
              APIs and database integration where the project requires them.
            </p>
          </article>

          <article className="rounded-card border border-ink-100 p-5">
            <h3 className="font-semibold text-ink-900">
              Python, Java and AI/ML Projects
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink-600">
              Language-based and data-oriented projects provide opportunities
              to practise programming logic, object-oriented design,
              automation, data handling and other concepts according to
              the technologies used in each project.
            </p>
          </article>
        </div>
      </section>

      <section
        aria-labelledby="choosing-project-heading"
        className="mb-10 border-t border-ink-100 pt-8"
      >
        <h2
          id="choosing-project-heading"
          className="text-2xl font-bold text-ink-900"
        >
          How to Choose the Right Project
        </h2>

        <div className="mt-5 space-y-5">
          <div>
            <h3 className="font-semibold text-ink-900">
              1. Match the project to your skill level
            </h3>
            <p className="mt-2 leading-7 text-ink-600">
              If you are new to programming, start with a manageable scope
              and familiar concepts. As your experience grows, consider
              projects with additional modules, database integration,
              API communication or more advanced processing.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-ink-900">
              2. Review the technology stack
            </h3>
            <p className="mt-2 leading-7 text-ink-600">
              Check the programming languages, frameworks and tools required
              for the project. Make sure you understand the basic purpose
              of each technology and can set up the development environment.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-ink-900">
              3. Understand the scope and features
            </h3>
            <p className="mt-2 leading-7 text-ink-600">
              Read the project description and features before choosing a
              topic. Consider the time available, assignment requirements
              and whether you can explain the main workflow and design
              decisions during a project review or viva.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-ink-900">
              4. Verify resource availability
            </h3>
            <p className="mt-2 leading-7 text-ink-600">
              Open the project details page to check for available source
              code, synopsis, report, presentation and documentation.
              Do not assume that every project includes every resource.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-ink-900">
              5. Learn from the implementation
            </h3>
            <p className="mt-2 leading-7 text-ink-600">
              Run and test the project where possible. Study its structure,
              understand how its components interact, and adapt the ideas
              to your own requirements. Follow your institution&apos;s
              academic integrity and citation guidelines.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="project-faq-heading"
        className="mb-10 border-t border-ink-100 pt-8"
      >
        <h2
          id="project-faq-heading"
          className="text-2xl font-bold text-ink-900"
        >
          Frequently Asked Questions
        </h2>

        <div className="mt-5 space-y-5">
          <article>
            <h3 className="font-semibold text-ink-900">
              What types of projects can I find on SabkaCode?
            </h3>
            <p className="mt-2 leading-7 text-ink-600">
              The catalog supports different project categories, including
              web development, Python, Java, AI/ML, Android, cybersecurity,
              IoT and final-year projects. The available listings depend
              on the content currently published on the website.
            </p>
          </article>

          <article>
            <h3 className="font-semibold text-ink-900">
              Can I find mini and major projects?
            </h3>
            <p className="mt-2 leading-7 text-ink-600">
              Yes, the project data model supports mini, major, final-year,
              internship and academic project types. The catalog displays
              projects that are actually present in the available data.
            </p>
          </article>

          <article>
            <h3 className="font-semibold text-ink-900">
              Does every project include source code?
            </h3>
            <p className="mt-2 leading-7 text-ink-600">
              Not necessarily. Source code and other downloadable resources
              depend on the individual listing. Open the project details
              page to verify which resources are available.
            </p>
          </article>

          <article>
            <h3 className="font-semibold text-ink-900">
              How can I find a beginner-friendly project?
            </h3>
            <p className="mt-2 leading-7 text-ink-600">
              Use the difficulty filter, if supported by the project filters,
              and look for projects marked beginner. Review the technologies
              and features before deciding whether the project matches
              your current experience.
            </p>
          </article>

          <article>
            <h3 className="font-semibold text-ink-900">
              Can these projects help with college assignments?
            </h3>
            <p className="mt-2 leading-7 text-ink-600">
              Project listings can help you explore ideas and understand
              implementation approaches. Check your assignment requirements,
              make sure you understand your implementation, and follow your
              institution&apos;s rules for submitting work.
            </p>
          </article>
        </div>
      </section>

      <section className="rounded-card border border-ink-100 bg-ink-50 p-6">
        <h2 className="text-xl font-bold text-ink-900">
          Explore More Learning Resources
        </h2>

        <p className="mt-2 leading-7 text-ink-600">
          Combine practical project work with subject preparation and
          revision resources available across SabkaCode.
        </p>

        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
          <Link
            href="/notes"
            className="font-semibold text-brand-600 hover:underline"
          >
            Subject-wise Notes
          </Link>

          <Link
            href="/papers"
            className="font-semibold text-brand-600 hover:underline"
          >
            Previous-Year Papers
          </Link>

          <Link
            href="/courses"
            className="font-semibold text-brand-600 hover:underline"
          >
            Browse Courses
          </Link>
        </div>
      </section>
    </Section>
  );
}


// import { Suspense } from "react";
// import { Section } from "@/components/ui/Section";
// import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
// import { EmptyState } from "@/components/ui/EmptyState";
// import { StatsStrip } from "@/components/ui/StatsStrip";
// import { ProjectCard } from "@/components/projects/ProjectCard";
// import { ProjectFilters } from "@/components/projects/ProjectFilters";
// import { getProjects } from "@/lib/data";
// import { pageMetadata } from "@/lib/seo";
// import type { ProjectCategory, DifficultyLevel } from "@/types";

// export const metadata = pageMetadata({
//   title: "Projects",
//   description: "Browse mini, major and final year projects across web development, Python, AI/ML, Java, Android and more.",
//   path: "/projects",
// });

// interface Props {
//   searchParams: { category?: string; difficulty?: string };
// }

// export default async function ProjectsPage({ searchParams }: Props) {
//   const [projects, allProjects] = await Promise.all([
//     getProjects({
//       category: searchParams.category as ProjectCategory | undefined,
//       difficulty: searchParams.difficulty as DifficultyLevel | undefined,
//     }),
//     getProjects(),
//   ]);

//   const categoryCount = new Set(allProjects.map((p) => p.category)).size;
//   const beginnerCount = allProjects.filter((p) => p.difficulty === "beginner").length;

//   return (
//     <Section title="Projects" description="Filter by category and difficulty to find a project to build or learn from.">
//       <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Projects" }]} />

//       <p className="mb-5 max-w-2xl text-ink-600">
//         Building a project is one of the fastest ways to turn syllabus knowledge into something you
//         can actually show in an interview or a resume. Each listing below includes a short
//         description, the tech stack used, and — where available — source code, a report, and a PPT.
//       </p>

//       <div className="mb-6">
//         <StatsStrip
//           stats={[
//             { value: allProjects.length, label: "Projects" },
//             { value: categoryCount, label: "Categories" },
//             { value: beginnerCount, label: "Beginner-Friendly" },
//           ]}
//         />
//       </div>

//       <div className="mb-6">
//         <Suspense fallback={null}>
//           <ProjectFilters />
//         </Suspense>
//       </div>

//       {projects.length === 0 ? (
//         <EmptyState
//           title="No projects match these filters."
//           description="Try a different category or difficulty level."
//         />
//       ) : (
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           {projects.map((project) => (
//             <ProjectCard key={project.id} project={project} />
//           ))}
//         </div>
//       )}
//     </Section>
//   );
// }
