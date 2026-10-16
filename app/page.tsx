
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  HelpCircle,
  FolderGit2,
  FlaskConical,
  MessageCircleQuestion,
  BookOpen,
  GraduationCap,
  Calculator,
  Building2,
  ClipboardCheck,
  Target,
  Search,
  BookMarked,
  CheckCircle2,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { StatsStrip } from "@/components/ui/StatsStrip";
import { EmptyState } from "@/components/ui/EmptyState";

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
  title:
    "Student Study Material, University Notes, PYQs & Projects",
  description:
    "Explore university-wise study material, subject notes, syllabus resources, previous year question papers, question banks, student projects and online calculators on SabkaCode. Find academic resources for your course, university and semester.",
  path: "/",
});

const popularResources = [
  {
    icon: BookOpen,
    label: "Study Notes",
    description: "Subject-wise study material and revision resources.",
    href: "/notes",
  },
  {
    icon: FileText,
    label: "Previous Year Papers",
    description: "Browse available examination papers.",
    href: "/papers",
  },
  {
    icon: ClipboardCheck,
    label: "Question Banks",
    description: "Explore available practice and exam questions.",
    href: "/notes",
  },
  {
    icon: FlaskConical,
    label: "Practicals & Viva",
    description: "Find available practical and viva preparation material.",
    href: "/notes",
  },
  {
    icon: FolderGit2,
    label: "Student Projects",
    description: "Discover project ideas and technical resources.",
    href: "/projects",
  },
  {
    icon: Calculator,
    label: "Online Calculators",
    description: "Use useful student-focused calculators and utilities.",
    href: "/tools",
  },
];

const learningSteps = [
  {
    number: "01",
    icon: GraduationCap,
    title: "Select your course",
    description:
      "Start with your degree or programme, such as BCA, BBA, MCA or MBA, depending on the courses available on the platform.",
  },
  {
    number: "02",
    icon: Building2,
    title: "Choose your university",
    description:
      "Select the institution associated with your programme so that you can find the academic information relevant to your university.",
  },
  {
    number: "03",
    icon: BookMarked,
    title: "Open your subject",
    description:
      "Navigate through the available branches, semesters and subjects to locate the relevant study material.",
  },
  {
    number: "04",
    icon: ClipboardCheck,
    title: "Prepare and practise",
    description:
      "Review available notes, revise syllabus topics and practise with previous papers or other published learning resources.",
  },
];

const studyGuides = [
  {
    title: "University-Wise Study Material",
    description:
      "Find academic resources organised around available universities, courses and subjects. Checking the correct university and course helps you avoid confusing similar subject names or unrelated syllabi.",
    href: "/notes",
    linkLabel: "Explore study material",
  },
  {
    title: "Subject Notes and Syllabus",
    description:
      "Use subject-level resources to review concepts, understand important topics and organise your revision. Where available, detailed notes can support deeper learning alongside your prescribed syllabus.",
    href: "/notes",
    linkLabel: "Browse notes",
  },
  {
    title: "Previous Year Question Papers",
    description:
      "Practise with available previous-year papers to assess your understanding, improve answer-writing skills and become familiar with earlier examination formats. Past questions do not guarantee what will appear in future examinations.",
    href: "/papers",
    linkLabel: "Find question papers",
  },
  {
    title: "Projects and Practical Learning",
    description:
      "Explore student project ideas and available technical resources to practise programming, apply classroom concepts and develop a better understanding of software and application development.",
    href: "/projects",
    linkLabel: "Explore projects",
  },
];

const studyTips = [
  "Check your university, course, semester and subject before using study material.",
  "Read the prescribed syllabus and divide topics into manageable revision sessions.",
  "Understand concepts first, then use questions and previous papers to test your knowledge.",
  "Practise writing answers within a realistic time limit when preparing for examinations.",
  "Verify important academic requirements against current official university documents.",
  "Review difficult topics regularly instead of relying only on last-minute preparation.",
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
      const courseUniversities = await getUniversitiesForCourse(
        course.slug,
      );

      return {
        slug: course.slug,
        count: courseUniversities.length,
      };
    }),
  );

  const countBySlug = Object.fromEntries(
    courseCounts.map(({ slug, count }) => [slug, count]),
  );

  const activeUniversities = universities.filter(
    (university) => university.status === "active",
  );

  return (
    <>
      {/* Hero section */}
      <section className="relative overflow-hidden border-b border-ink-100 bg-gradient-to-b from-brand-50/70 via-white to-white">
        <Container className="py-14 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-semibold text-brand-700 shadow-sm">
              <GraduationCap className="h-4 w-4" />
              Study Smarter. Build Better.
            </p>

            <h1 className="mt-6 text-3xl font-bold tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
              Your Learning Journey Starts with{" "}
              <span className="text-brand-600">SabkaCode</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-ink-600 sm:text-lg sm:leading-8">
              Discover university-wise study material, subject notes,
              syllabus resources, previous year question papers, student
              projects and useful online calculators. Find the resources
              relevant to your course and make your study routine more
              organised.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <LinkButton href="/courses">
                Explore Courses
              </LinkButton>

              <LinkButton href="/notes" variant="secondary">
                Browse Study Material
              </LinkButton>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
              >
                Explore Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-ink-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-brand-600" />
                Course-based navigation
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-brand-600" />
                University-specific resources
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-brand-600" />
                Practical learning tools
              </span>
            </div>
          </div>

          {/* Dynamic website statistics */}
          <div className="mx-auto mt-12 max-w-4xl sm:mt-16">
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
                  label: "Detailed Notes",
                },
              ]}
            />

            <p className="mt-3 text-center text-xs leading-5 text-ink-500">
              Counts reflect the content currently recorded in the
              SabkaCode data source. Resource availability varies by
              university, course and subject.
            </p>
          </div>
        </Container>
      </section>

      {/* Introduction for students and search engines */}
      <Section
        title="A Student Resource Platform for Study and Skill Development"
        description="Find academic information and practical learning resources through one organised starting point."
      >
        <div className="max-w-4xl space-y-4 text-sm leading-7 text-ink-600 sm:text-base">
          <p>
            Finding relevant study material can take time, especially when
            different universities use different syllabi, subject codes
            and semester structures. SabkaCode brings together available
            academic resources and practical tools to help students
            navigate their learning requirements more easily.
          </p>

          <p>
            Depending on the published content, you can explore courses,
            university-specific subject pages, study notes, syllabus
            information, previous year question papers and other
            examination preparation resources. Students interested in
            practical development can also browse project ideas and
            online tools for common calculations.
          </p>

          <p>
            Start by selecting your course and university, then follow the
            available subject and semester structure. This helps you focus
            on resources that are more relevant to your programme instead
            of relying on material that may follow a different curriculum.
          </p>

          <p>
            SabkaCode is intended to support learning and revision.
            Always compare important academic requirements with the latest
            official syllabus and notices published by your university.
          </p>
        </div>
      </Section>

      {/* Course directory */}
      <Section
        title="Explore Courses"
        description="Start with your degree programme to find relevant university and subject information."
        action={
          <Link
            href="/courses"
            className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-brand-600 hover:underline"
          >
            View all courses
            <ArrowRight className="h-4 w-4" />
          </Link>
        }
      >
        {courses.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {courses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  universityCount={countBySlug[course.slug] ?? 0}
                />
              ))}
            </div>

            <p className="mt-5 max-w-3xl text-sm leading-6 text-ink-600">
              Select a course to continue to its available university
              listings. From there, you can explore the branches,
              semesters and subjects currently associated with that
              programme.
            </p>
          </>
        ) : (
          <EmptyState
            title="Courses are being added"
            description="There are no courses available to display right now. Please revisit the course directory later."
          />
        )}
      </Section>

      {/* Why SabkaCode */}
      <Section
        title="Why Students Choose SabkaCode"
        description="A more organised way to discover academic resources and practical learning opportunities."
        className="bg-ink-50/40"
      >
        <WhySabkaCode />
      </Section>

      {/* How it works */}
      <Section
        title="How to Use SabkaCode"
        description="Follow a simple route from your course to the academic resources available for your subjects."
      >
        <HowItWorks />
      </Section>

      {/* Popular resources */}
      <Section
        title="Explore Popular Student Resources"
        description="Quick access to academic material, examination practice, projects and everyday utilities."
        className="bg-ink-50/40"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {popularResources.map(
            ({ icon: Icon, label, description, href }) => (
              <Link
                key={label}
                href={href}
                className="group flex items-start gap-4 rounded-card border border-ink-100 bg-white p-5 shadow-card transition hover:border-brand-300 hover:shadow-md"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-100">
                  <Icon className="h-5 w-5" />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="flex items-center justify-between gap-2 font-semibold text-ink-900">
                    {label}
                    <ArrowRight className="h-4 w-4 shrink-0 text-brand-600 transition group-hover:translate-x-1" />
                  </span>

                  <span className="mt-2 block text-sm leading-6 text-ink-600">
                    {description}
                  </span>
                </span>
              </Link>
            ),
          )}
        </div>
      </Section>

      {/* Detailed study resource guide */}
      <Section
        title="Study Material, Notes and Exam Preparation"
        description="Understand the different resource types and how they can support your preparation."
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {studyGuides.map((guide) => (
            <article
              key={guide.title}
              className="flex flex-col rounded-card border border-ink-100 bg-white p-5 shadow-card sm:p-6"
            >
              <h3 className="text-lg font-semibold text-ink-900">
                {guide.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-7 text-ink-600 sm:text-base">
                {guide.description}
              </p>

              <Link
                href={guide.href}
                className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-600 hover:underline"
              >
                {guide.linkLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </Section>

      {/* Featured projects */}
      <Section
        title="Featured Student Projects"
        description="Explore project ideas that can help you practise programming and apply technical concepts."
        action={
          <Link
            href="/projects"
            className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-brand-600 hover:underline"
          >
            View all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        }
      >
        {featuredProjects.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </div>

            <p className="mt-5 max-w-3xl text-sm leading-6 text-ink-600">
              Before choosing a project, review its objectives, required
              technologies and available resources. Build and understand
              your implementation, test its main features and follow your
              institution's academic integrity requirements.
            </p>
          </>
        ) : (
          <EmptyState
            title="Featured projects are not available yet"
            description="Visit the projects directory to explore the project listings currently published on SabkaCode."
          />
        )}
      </Section>

      {/* Tools */}
      <Section
        title="Useful Online Tools for Students"
        description="Explore calculators and utilities for common academic and everyday calculations."
        className="bg-ink-50/40"
        action={
          <Link
            href="/tools"
            className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-brand-600 hover:underline"
          >
            View all tools
            <ArrowRight className="h-4 w-4" />
          </Link>
        }
      >
        {tools.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {tools.slice(0, 3).map((tool) => (
                <ToolCard
                  key={tool.id}
                  tool={tool}
                />
              ))}
            </div>

            <p className="mt-5 max-w-3xl text-sm leading-6 text-ink-600">
              Use the relevant calculator, enter the required values and
              review its instructions. For academic calculations, check
              the grading or conversion rules used by your institution.
            </p>
          </>
        ) : (
          <EmptyState
            title="Student tools are being added"
            description="There are no tools available to display right now. Check the tools directory again later."
          />
        )}
      </Section>

      {/* University directory */}
      <Section
        title="Universities on SabkaCode"
        description="Choose your university to explore the academic information currently available for its courses."
      >
        {universities.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {universities.map((university) => (
                <UniversityCard
                  key={university.id}
                  university={university}
                  href={`/universities/${university.slug}`}
                />
              ))}
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm leading-6 text-ink-600">
                {activeUniversities.length}{" "}
                {activeUniversities.length === 1
                  ? "university is"
                  : "universities are"}{" "}
                currently marked active in the university directory.
                Course and subject availability can differ by institution.
              </p>

              <Link
                href="/universities"
                className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-brand-600 hover:underline"
              >
                Explore all universities
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </>
        ) : (
          <EmptyState
            title="University listings are being updated"
            description="No university records are available to display right now. Please check the university directory again later."
          />
        )}
      </Section>

      {/* Study planning guidance */}
      <Section
        title="How to Prepare More Effectively for Exams"
        description="Use a consistent study routine to understand concepts, practise questions and track your progress."
        className="bg-ink-50/40"
      >
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-card border border-ink-100 bg-white p-5 shadow-card sm:p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Target className="h-5 w-5" />
              </span>

              <h3 className="text-lg font-semibold text-ink-900">
                Build a realistic study plan
              </h3>
            </div>

            <p className="mt-4 text-sm leading-7 text-ink-600 sm:text-base">
              Begin with your prescribed syllabus, identify the topics
              that need the most attention and divide your preparation
              into manageable sessions. Combine reading, revision,
              written practice and self-assessment instead of relying on
              a single resource.
            </p>

            <Link
              href="/notes"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:underline"
            >
              Explore study material
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-card border border-ink-100 bg-white p-5 shadow-card sm:p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Search className="h-5 w-5" />
              </span>

              <h3 className="text-lg font-semibold text-ink-900">
                Check your understanding
              </h3>
            </div>

            <p className="mt-4 text-sm leading-7 text-ink-600 sm:text-base">
              After revising a topic, try answering questions without
              looking at your notes. Use available previous-year papers
              to practise structured answers, review mistakes and
              identify concepts that require further study.
            </p>

            <Link
              href="/papers"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:underline"
            >
              Practise with question papers
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-5 rounded-card border border-ink-100 bg-white p-5 sm:p-6">
          <h3 className="text-lg font-semibold text-ink-900">
            A practical revision checklist
          </h3>

          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {studyTips.map((tip) => (
              <li
                key={tip}
                className="flex items-start gap-3 text-sm leading-6 text-ink-600"
              >
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand-600" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Why students choose SabkaCode */}
      <Section
        title="Learn, Practise and Build with SabkaCode"
        description="Academic preparation and practical development are both important parts of a student's learning journey."
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <article className="rounded-card border border-ink-100 bg-white p-5">
            <BookOpen className="h-6 w-6 text-brand-600" />

            <h3 className="mt-4 font-semibold text-ink-900">
              Learn concepts
            </h3>

            <p className="mt-2 text-sm leading-7 text-ink-600">
              Use relevant notes and subject resources to understand
              topics, review definitions and reinforce classroom learning.
            </p>
          </article>

          <article className="rounded-card border border-ink-100 bg-white p-5">
            <FileText className="h-6 w-6 text-brand-600" />

            <h3 className="mt-4 font-semibold text-ink-900">
              Practise for examinations
            </h3>

            <p className="mt-2 text-sm leading-7 text-ink-600">
              Revise your syllabus and practise with available previous
              papers and questions to assess your preparation.
            </p>
          </article>

          <article className="rounded-card border border-ink-100 bg-white p-5">
            <FolderGit2 className="h-6 w-6 text-brand-600" />

            <h3 className="mt-4 font-semibold text-ink-900">
              Develop practical skills
            </h3>

            <p className="mt-2 text-sm leading-7 text-ink-600">
              Explore project ideas and technical resources to practise
              coding, problem-solving and application development.
            </p>
          </article>
        </div>
      </Section>

      {/* Existing reusable components retained */}
      <Section
        title="Why Students Choose SabkaCode"
        description="Discover the features and approach behind the platform."
        className="bg-ink-50/40"
      >
        <WhySabkaCode />
      </Section>

      <Section
        title="How It Works"
        description="Follow the available academic navigation to find relevant learning resources."
      >
        <HowItWorks />
      </Section>

      {/* Frequently asked questions */}
      <Section
        title="Frequently Asked Questions"
        description="Answers to common questions about study material, universities, examinations and student resources."
        className="bg-ink-50/40"
      >
        <FAQSection />
      </Section>

      {/* Closing section */}
      <section className="border-t border-ink-100 bg-white py-12 sm:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
              Start Exploring SabkaCode Today
            </h2>

            <p className="mt-4 leading-7 text-ink-600">
              Choose your course, find your university and explore the
              resources available for your subjects. Whether you are
              revising for an examination, looking for study material or
              planning a technical project, start with the section most
              relevant to your learning goals.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <LinkButton href="/courses">
                Find Your Course
              </LinkButton>

              <LinkButton href="/universities" variant="secondary">
                Browse Universities
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}


// import Link from "next/link";
// import {
//   ArrowRight,
//   FileText,
//   HelpCircle,
//   FolderGit2,
//   FlaskConical,
//   MessageCircleQuestion,
// } from "lucide-react";

// import { Container } from "@/components/ui/Container";
// import { Section } from "@/components/ui/Section";
// import { LinkButton } from "@/components/ui/Button";
// import { StatsStrip } from "@/components/ui/StatsStrip";
// import { CourseCard } from "@/components/courses/CourseCard";
// import { UniversityCard } from "@/components/university/UniversityCard";
// import { ProjectCard } from "@/components/projects/ProjectCard";
// import { ToolCard } from "@/components/tools/ToolCard";
// import { WhySabkaCode } from "@/components/home/WhySabkaCode";
// import { HowItWorks } from "@/components/home/HowItWorks";
// import { FAQSection } from "@/components/home/FAQSection";

// import {
//   getCourses,
//   getUniversities,
//   getUniversitiesForCourse,
//   getFeaturedProjects,
//   getTools,
//   getContentStats,
// } from "@/lib/data";

// import { pageMetadata } from "@/lib/seo";

// export const metadata = pageMetadata({
//   title: "SabkaCode",
//   path: "/",
// });

// const popularResources = [
//   {
//     icon: FileText,
//     label: "Notes",
//     href: "/notes",
//   },
//   {
//     icon: HelpCircle,
//     label: "PYQs",
//     href: "/papers",
//   },
//   {
//     icon: FolderGit2,
//     label: "Projects",
//     href: "/projects",
//   },
//   {
//     icon: FlaskConical,
//     label: "Practical",
//     href: "/notes",
//   },
//   {
//     icon: MessageCircleQuestion,
//     label: "Question Bank",
//     href: "/notes",
//   },
// ];

// export default async function HomePage() {
//   const [
//     courses,
//     universities,
//     featuredProjects,
//     tools,
//     stats,
//   ] = await Promise.all([
//     getCourses(),
//     getUniversities(),
//     getFeaturedProjects(4),
//     getTools(),
//     getContentStats(),
//   ]);

//   const courseCounts = await Promise.all(
//     courses.map(async (course) => {
//       const courseUniversities =
//         await getUniversitiesForCourse(course.slug);

//       return {
//         slug: course.slug,
//         count: courseUniversities.length,
//       };
//     })
//   );

//   const countBySlug = Object.fromEntries(
//     courseCounts.map(({ slug, count }) => [slug, count])
//   );

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="border-b border-ink-100 bg-gradient-to-b from-brand-50/60 to-white">
//         <Container className="py-14 text-center sm:py-20">
//           <h1 className="text-3xl font-bold tracking-tight text-ink-900 sm:text-5xl">
//             SabkaCode
//           </h1>

//           <p className="mt-3 text-lg font-medium text-ink-700 sm:text-xl">
//             Your Student & Coding Platform
//           </p>

//           <p className="mx-auto mt-4 max-w-xl text-ink-500">
//             Notes, previous year papers, projects and useful tools
//             for students across multiple universities.
//           </p>

//           <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
//             <LinkButton href="/courses">
//               Explore Courses
//             </LinkButton>

//             <LinkButton
//               href="/projects"
//               variant="secondary"
//             >
//               Browse Projects
//             </LinkButton>
//           </div>

//           <div className="mx-auto mt-10 max-w-3xl">
//             <StatsStrip
//               stats={[
//                 {
//                   value: stats.totalUniversities,
//                   label: "Universities",
//                 },
//                 {
//                   value: stats.totalSubjects,
//                   label: "Subjects",
//                 },
//                 {
//                   value: stats.totalNotes + stats.totalPyqs,
//                   label: "Notes & PYQs",
//                 },
//                 {
//                   value: stats.totalDetailedNotes,
//                   label: "Full Unit-Wise Notes",
//                 },
//               ]}
//             />
//           </div>
//         </Container>
//       </section>

//       {/* Courses */}
//       <Section
//         title="Explore Courses"
//         action={
//           <Link
//             href="/courses"
//             className="flex items-center gap-1 text-sm font-medium text-brand-600"
//           >
//             View all
//             <ArrowRight className="h-3.5 w-3.5" />
//           </Link>
//         }
//       >
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
//           {courses.map((course) => (
//             <CourseCard
//               key={course.id}
//               course={course}
//               universityCount={countBySlug[course.slug] ?? 0}
//             />
//           ))}
//         </div>
//       </Section>

//       {/* Why SabkaCode */}
//       <Section
//         title="Why Students Choose SabkaCode"
//         description="Built around what actually helps before an exam — not a generic resource dump."
//         className="bg-ink-50/40"
//       >
//         <WhySabkaCode />
//       </Section>

//       {/* How It Works */}
//       <Section
//         title="How It Works"
//         description="From homepage to exam-ready notes in four steps."
//       >
//         <HowItWorks />
//       </Section>

//       {/* Popular Resources */}
//       <Section
//         title="Popular Resources"
//         className="bg-ink-50/40"
//       >
//         <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
//           {popularResources.map(
//             ({ icon: Icon, label, href }) => (
//               <Link
//                 key={label}
//                 href={href}
//                 className="flex flex-col items-center gap-2 rounded-card border border-ink-100 bg-white py-6 shadow-card transition-colors hover:border-brand-300"
//               >
//                 <Icon className="h-6 w-6 text-brand-600" />

//                 <span className="text-sm font-medium text-ink-800">
//                   {label}
//                 </span>
//               </Link>
//             )
//           )}
//         </div>
//       </Section>

//       {/* Featured Projects */}
//       <Section
//         title="Featured Projects"
//         action={
//           <Link
//             href="/projects"
//             className="flex items-center gap-1 text-sm font-medium text-brand-600"
//           >
//             View all
//             <ArrowRight className="h-3.5 w-3.5" />
//           </Link>
//         }
//       >
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
//           {featuredProjects.map((project) => (
//             <ProjectCard
//               key={project.id}
//               project={project}
//             />
//           ))}
//         </div>
//       </Section>

//       {/* Student Tools */}
//       <Section
//         title="Student Tools"
//         className="bg-ink-50/40"
//         action={
//           <Link
//             href="/tools"
//             className="flex items-center gap-1 text-sm font-medium text-brand-600"
//           >
//             View all
//             <ArrowRight className="h-3.5 w-3.5" />
//           </Link>
//         }
//       >
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           {tools.slice(0, 3).map((tool) => (
//             <ToolCard
//               key={tool.id}
//               tool={tool}
//             />
//           ))}
//         </div>
//       </Section>

//       {/* Universities */}
//       <Section title="Universities on SabkaCode">
//         <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
//           {universities.map((university) => (
//             <UniversityCard
//               key={university.id}
//               university={university}
//               href={`/universities/${university.slug}`}
//             />
//           ))}
//         </div>
//       </Section>

//       {/* FAQ */}
//       <Section
//         title="Frequently Asked Questions"
//         className="bg-ink-50/40"
//       >
//         <FAQSection />
//       </Section>
//     </>
//   );
// }
