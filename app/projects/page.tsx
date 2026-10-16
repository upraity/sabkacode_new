
import { Suspense } from "react";
import Link from "next/link";
import {
  Code2,
  GraduationCap,
  Layers3,
  BookOpen,
  FileText,
  Target,
  ClipboardCheck,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Github,
} from "lucide-react";

import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { EmptyState } from "@/components/ui/EmptyState";
import { StatsStrip } from "@/components/ui/StatsStrip";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectFilters } from "@/components/projects/ProjectFilters";

import { getProjects } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
import type { ProjectCategory, DifficultyLevel } from "@/types";

export const metadata = pageMetadata({
  title: "Student Projects — Mini, Major & Final Year Projects",
  description:
    "Explore student projects across web development, Python, Java, AI/ML, Android and more. Filter by category and difficulty to find project ideas, technology stacks and available documentation.",
  path: "/projects",
});

interface Props {
  searchParams: {
    category?: string;
    difficulty?: string;
  };
}

const projectBenefits = [
  {
    icon: Code2,
    title: "Apply practical skills",
    description:
      "Turn programming concepts, database knowledge and software development techniques into a working application or demonstrable prototype.",
  },
  {
    icon: FileText,
    title: "Build project documentation",
    description:
      "Learn to explain the problem, objectives, system design, implementation, testing and limitations of your project in a clear technical report.",
  },
  {
    icon: Target,
    title: "Prepare for interviews",
    description:
      "Practise explaining your technical decisions, the challenges you encountered, the features you implemented and what you would improve next.",
  },
  {
    icon: GraduationCap,
    title: "Support academic learning",
    description:
      "Use projects to explore practical applications of concepts covered in your course and prepare for project demonstrations or viva examinations.",
  },
];

const projectStages = [
  {
    number: "01",
    title: "Choose a real problem",
    description:
      "Identify a specific user need or workflow that your project can improve. Define the problem and the intended users before deciding on features.",
  },
  {
    number: "02",
    title: "Plan the scope and stack",
    description:
      "Select technologies you can realistically use. Define the core features, data requirements and a manageable first version of the application.",
  },
  {
    number: "03",
    title: "Build and test",
    description:
      "Implement the main workflow first. Test normal usage, invalid inputs, error states and important edge cases before adding optional features.",
  },
  {
    number: "04",
    title: "Document and demonstrate",
    description:
      "Prepare setup instructions, screenshots, a system explanation and a demonstration of the working features. Record known limitations honestly.",
  },
];

const faqs = [
  {
    question: "What types of student projects can I find here?",
    answer:
      "The collection depends on the projects published on SabkaCode. Listings may cover mini projects, major projects and final year projects across different programming languages and technical categories.",
  },
  {
    question: "How do I choose a project based on difficulty?",
    answer:
      "Beginners should generally start with a small, clearly defined problem and a limited feature set. More advanced projects can introduce integrations, authentication, complex data processing or additional architectural components where appropriate.",
  },
  {
    question: "Can I use these projects for college submissions?",
    answer:
      "You can use project listings as learning references and starting points. Check your institution's project requirements, develop and understand your implementation, and disclose external material according to your college's academic integrity policy.",
  },
  {
    question: "Do all projects include source code, reports and presentations?",
    answer:
      "No. The resources available depend on each individual listing. Check its project details to see whether source code, documentation, a report, a presentation or a live demo is provided.",
  },
  {
    question: "Which technologies should I learn for a project?",
    answer:
      "Choose technologies based on the problem, your current skills and the project's requirements. For example, a web application may need a frontend, backend and database, while a data-focused project may require a suitable programming language and data-processing tools.",
  },
  {
    question: "How can I explain my project in a viva or interview?",
    answer:
      "Be ready to explain the problem, objectives, architecture, technology choices, data flow, important features, testing, limitations and your individual contribution. Practise demonstrating the application and answering questions about your actual implementation.",
  },
  {
    question: "How can I make a project more useful for my resume?",
    answer:
      "Build a working solution, document your contribution, include a clear README and screenshots, and provide a demo or repository link where possible. Describe features you genuinely implemented rather than claiming unverified results.",
  },
];

export default async function ProjectsPage({ searchParams }: Props) {
  const params = await Promise.resolve(searchParams);

  const validCategories: ProjectCategory[] = [
    "mini",
    "major",
    "final-year",
  ];

  const validDifficulties: DifficultyLevel[] = [
    "beginner",
    "intermediate",
    "advanced",
  ];

  const category = validCategories.includes(
    params.category as ProjectCategory
  )
    ? (params.category as ProjectCategory)
    : undefined;

  const difficulty = validDifficulties.includes(
    params.difficulty as DifficultyLevel
  )
    ? (params.difficulty as DifficultyLevel)
    : undefined;

  const [projects, allProjects] = await Promise.all([
    getProjects({ category, difficulty }),
    getProjects(),
  ]);

  const categoryCount = new Set(
    allProjects.map((project) => project.category)
  ).size;

  const beginnerCount = allProjects.filter(
    (project) => project.difficulty === "beginner"
  ).length;

  const categories = Array.from(
    new Set(allProjects.map((project) => project.category))
  );

  const technologies = Array.from(
    new Set(
      allProjects.flatMap((project) => project.techStack ?? [])
    )
  );

  return (
    <Section
      title="Student Projects — Ideas, Technology & Learning Resources"
      description="Explore mini projects, major projects and final year project ideas. Find projects by category and difficulty, review their technology stacks and check the resources available for each listing."
    >
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Projects" },
        ]}
      />

      {/* Introduction */}
      <div className="mt-6 space-y-4 text-sm leading-7 text-ink-600 sm:text-base">
        <p>
          A practical project is an opportunity to apply what you have
          learned in programming, databases, web development, software
          engineering or other technical subjects. Instead of studying
          concepts in isolation, you can use a project to build a working
          solution, understand implementation trade-offs and demonstrate
          your skills.
        </p>

        <p>
          SabkaCode brings together published student projects across
          different categories and difficulty levels. Depending on the
          individual listing, you may find a project description, its
          technology stack, source code, documentation, a report or a
          presentation. Availability varies by project, so review each
          listing before deciding which resources you need.
        </p>

        <p>
          Whether you are exploring a small mini project or planning a
          larger final year submission, start with a clear problem,
          choose a manageable scope and make sure you understand the
          implementation. A project that you can explain, test and
          improve is generally more valuable as a learning exercise
          than one with many features you cannot maintain.
        </p>
      </div>

      {/* Dynamic statistics */}
      <div className="my-8">
        <StatsStrip
          stats={[
            {
              value: allProjects.length,
              label: "Published Projects",
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

      {/* Project filters and listing */}
      <section
        id="project-list"
        className="scroll-mt-6"
        aria-labelledby="project-list-heading"
      >
        <div className="mb-4">
          <h2
            id="project-list-heading"
            className="text-xl font-semibold text-ink-900"
          >
            Explore Student Projects
          </h2>

          <p className="mt-2 text-sm leading-6 text-ink-600">
            Filter the collection by project category and difficulty.
            Open a listing to review its description, technology stack
            and available resources.
          </p>
        </div>

        <div className="mb-6 rounded-card border border-ink-100 bg-white p-4 shadow-card sm:p-5">
          <Suspense fallback={null}>
            <ProjectFilters />
          </Suspense>
        </div>

        {projects.length === 0 ? (
          <EmptyState
            title="No projects match these filters."
            description="Try another category or difficulty level to explore more of the available project collection."
          />
        ) : (
          <>
            <p className="mb-4 text-sm text-ink-500">
              Showing {projects.length}{" "}
              {projects.length === 1 ? "project" : "projects"}
              {category ? ` in the selected category` : ""}
              {difficulty ? ` at the selected difficulty level` : ""}.
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

      {/* Dynamic technology overview */}
      {technologies.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-ink-900">
            Technologies Used in the Project Collection
          </h2>

          <p className="mt-2 text-sm leading-7 text-ink-600">
            The technologies below are taken from the technology stacks
            recorded in the current project data. Their presence indicates
            that they are used in one or more published listings; it does
            not mean every project uses them.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-ink-200 bg-white px-3 py-1.5 text-sm text-ink-700"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Project categories */}
      {categories.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-ink-900">
            Explore Project Categories
          </h2>

          <p className="mt-2 text-sm leading-7 text-ink-600">
            Project category describes the type or academic scope of a
            listing. Use the available filters to find projects that
            align with your requirements and experience.
          </p>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {categories.map((projectCategory) => (
              <article
                key={projectCategory}
                className="rounded-card border border-ink-100 bg-white p-5 shadow-card"
              >
                <Layers3 className="h-6 w-6 text-brand-600" />

                <h3 className="mt-3 font-semibold capitalize text-ink-900">
                  {projectCategory.replace(/-/g, " ")} Projects
                </h3>

                <p className="mt-2 text-sm leading-6 text-ink-600">
                  Explore listings in this category and review their
                  individual scope, requirements and available resources.
                </p>

                <Link
                  href={`/projects?category=${encodeURIComponent(projectCategory)}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-700 hover:text-brand-800"
                >
                  View category
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Project benefits */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-ink-900">
          Why Build Academic and Practical Projects?
        </h2>

        <p className="mt-3 text-sm leading-7 text-ink-600 sm:text-base">
          Project work connects theory with implementation. It also gives
          you a concrete way to practise technical communication, testing,
          debugging and planning. These benefits depend on how actively
          you build, understand and improve the project.
        </p>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projectBenefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="rounded-card border border-ink-100 bg-white p-5 shadow-card"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-ink-900">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-ink-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Mini, major and final year projects */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-ink-900">
          Mini Projects vs Major Projects vs Final Year Projects
        </h2>

        <p className="mt-3 text-sm leading-7 text-ink-600 sm:text-base">
          Project size should be based on learning objectives, academic
          requirements, available time and technical complexity. These
          descriptions are general guidance; your institution may define
          specific requirements for each project type.
        </p>

        <div className="mt-5 overflow-x-auto rounded-card border border-ink-100">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead className="bg-ink-50 text-xs uppercase tracking-wide text-ink-500">
              <tr>
                <th className="px-4 py-3 font-medium">
                  Project Type
                </th>
                <th className="px-4 py-3 font-medium">
                  Typical Focus
                </th>
                <th className="px-4 py-3 font-medium">
                  What to Demonstrate
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-ink-100 bg-white">
              <tr>
                <td className="px-4 py-4 font-semibold text-ink-900">
                  Mini Project
                </td>
                <td className="px-4 py-4 leading-6 text-ink-600">
                  A focused problem with a limited feature set.
                </td>
                <td className="px-4 py-4 leading-6 text-ink-600">
                  Core functionality, basic testing and a clear explanation.
                </td>
              </tr>

              <tr>
                <td className="px-4 py-4 font-semibold text-ink-900">
                  Major Project
                </td>
                <td className="px-4 py-4 leading-6 text-ink-600">
                  A broader workflow with multiple connected components.
                </td>
                <td className="px-4 py-4 leading-6 text-ink-600">
                  Architecture, data handling, testing and documentation.
                </td>
              </tr>

              <tr>
                <td className="px-4 py-4 font-semibold text-ink-900">
                  Final Year Project
                </td>
                <td className="px-4 py-4 leading-6 text-ink-600">
                  A project aligned with formal academic objectives.
                </td>
                <td className="px-4 py-4 leading-6 text-ink-600">
                  A working implementation, report, demonstration and
                  evidence of individual understanding.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Technology selection guide */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-ink-900">
          How to Choose the Right Technology Stack
        </h2>

        <p className="mt-3 text-sm leading-7 text-ink-600 sm:text-base">
          Do not select a technology only because it is popular. Start
          with the problem you want to solve, the features you need to
          build and the tools you can reasonably learn and maintain.
        </p>

        <div className="mt-5 space-y-4">
          <article className="rounded-card border border-ink-100 bg-white p-5">
            <h3 className="font-semibold text-ink-900">
              Web Development
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink-600">
              Consider frontend components, routing, server-side logic,
              database requirements, validation and responsive design.
              A good web project should have a clear user workflow and
              meaningful handling of errors and empty states.
            </p>
          </article>

          <article className="rounded-card border border-ink-100 bg-white p-5">
            <h3 className="font-semibold text-ink-900">
              Python and Data-Focused Projects
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink-600">
              Focus on the data you need, how it will be processed and
              how results will be evaluated. Document data sources,
              assumptions and limitations, especially when working
              with predictive or analytical methods.
            </p>
          </article>

          <article className="rounded-card border border-ink-100 bg-white p-5">
            <h3 className="font-semibold text-ink-900">
              Java, Android and Application Development
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink-600">
              Plan the main user journeys, application state, input
              validation and data persistence. Test the interface on
              relevant screen sizes or runtime environments.
            </p>
          </article>

          <article className="rounded-card border border-ink-100 bg-white p-5">
            <h3 className="font-semibold text-ink-900">
              AI and Machine Learning
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink-600">
              Define the task and evaluation method before choosing a
              model. Check data quality, avoid data leakage, compare
              against an appropriate baseline and report limitations
              honestly rather than relying only on a headline metric.
            </p>
          </article>
        </div>
      </section>

      {/* Project development workflow */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-ink-900">
          Step-by-Step Project Development Process
        </h2>

        <p className="mt-3 text-sm leading-7 text-ink-600 sm:text-base">
          A repeatable development process makes it easier to manage
          scope, explain technical decisions and demonstrate that your
          project works as intended.
        </p>

        <div className="mt-5 space-y-4">
          {projectStages.map((stage) => (
            <article
              key={stage.number}
              className="flex items-start gap-4 rounded-card border border-ink-100 bg-white p-5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-sm font-bold text-brand-700">
                {stage.number}
              </span>

              <div>
                <h3 className="font-semibold text-ink-900">
                  {stage.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-ink-600">
                  {stage.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Documentation guidance */}
      <section className="mt-12 rounded-card border border-ink-100 bg-ink-50/50 p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <FileText className="mt-1 h-6 w-6 shrink-0 text-brand-600" />

          <div>
            <h2 className="text-lg font-semibold text-ink-900">
              Project Report and Documentation Checklist
            </h2>

            <p className="mt-2 text-sm leading-7 text-ink-600">
              Documentation should explain what the project does, why it
              was built and how it works. Follow your institution's
              required report format where one is prescribed.
            </p>

            <ul className="mt-4 space-y-3">
              {[
                "Problem statement, objectives and intended users.",
                "Functional requirements and project scope.",
                "Technology stack, system architecture and data design.",
                "Implementation details and important features.",
                "Testing approach, results and known limitations.",
                "Screenshots, setup instructions and future improvements.",
                "References for external resources, libraries and datasets.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm leading-6 text-ink-700"
                >
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Viva and interview preparation */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-ink-900">
          Project Viva and Interview Preparation
        </h2>

        <p className="mt-3 text-sm leading-7 text-ink-600 sm:text-base">
          A project demonstration is an opportunity to show your
          understanding, not just the final interface. Practise answering
          questions about the decisions you made and the work you
          personally completed.
        </p>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            "What problem does your project solve?",
            "Why did you choose this technology stack?",
            "How is data stored, processed or retrieved?",
            "What are the main modules and how do they interact?",
            "How did you test the core functionality?",
            "What limitations remain in the current implementation?",
            "What was the most difficult technical problem?",
            "What would you improve in the next version?",
          ].map((question) => (
            <div
              key={question}
              className="flex items-start gap-3 rounded-card border border-ink-100 bg-white p-4"
            >
              <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />

              <p className="text-sm leading-6 text-ink-700">
                {question}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* GitHub and resume guidance */}
      <section className="mt-12 rounded-card border border-ink-100 bg-white p-5 shadow-card sm:p-6">
        <div className="flex items-start gap-3">
          <Github className="mt-1 h-6 w-6 shrink-0 text-ink-800" />

          <div>
            <h2 className="text-lg font-semibold text-ink-900">
              Make Your Project Portfolio-Ready
            </h2>

            <p className="mt-2 text-sm leading-7 text-ink-600">
              If you publish your project in a code repository, include
              a README with the project purpose, technology stack,
              installation steps, configuration requirements and
              screenshots. Keep secrets and credentials out of the
              repository, and make sure you have permission to share
              any included assets or datasets.
            </p>

            <p className="mt-3 text-sm leading-7 text-ink-600">
              On your resume, describe the problem, your actual
              contribution and the features you implemented. Include
              measurable results only when you have evidence to support
              them.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-ink-900">
          Frequently Asked Questions About Student Projects
        </h2>

        <p className="mt-2 text-sm leading-7 text-ink-600">
          Find answers to common questions about choosing a project,
          using available resources and preparing for academic
          demonstrations.
        </p>

        <div className="mt-5 space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group rounded-card border border-ink-100 bg-white p-4 sm:p-5"
              open={index === 0}
            >
              <summary className="cursor-pointer list-none font-semibold text-ink-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
                <span className="flex items-start justify-between gap-3">
                  <span>{faq.question}</span>
                  <span className="text-lg leading-5 text-brand-600 transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>

              <p className="mt-3 border-t border-ink-100 pt-3 text-sm leading-7 text-ink-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Final navigation */}
      <section className="mt-12 rounded-card border border-ink-100 bg-white p-5 shadow-card sm:p-6">
        <h2 className="text-lg font-semibold text-ink-900">
          Start with a Project You Can Understand and Improve
        </h2>

        <p className="mt-2 text-sm leading-7 text-ink-600">
          Explore the available listings, compare their requirements
          with your current skills and select a project whose scope
          matches your learning goals. Review its resources, implement
          the important features and document your work carefully.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/notes"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            Explore Study Notes
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/courses"
            className="inline-flex items-center gap-2 rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-sm font-medium text-ink-700 transition hover:border-brand-300 hover:text-brand-700"
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
