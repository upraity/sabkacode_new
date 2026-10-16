
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  BookOpen,
  FileText,
  GraduationCap,
  ClipboardList,
  Target,
  CalendarDays,
  CheckCircle2,
  ArrowRight,
  Layers3,
  Library,
  Search,
} from "lucide-react";

import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StatsStrip } from "@/components/ui/StatsStrip";
import {
  getBranchBySlug,
  getCourseBySlug,
  getUniversityBySlug,
  getScopeStats,
} from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

interface Props {
  params: {
    course: string;
    university: string;
    branch: string;
  };
}

async function resolveBranchLabel(
  courseSlug: string,
  universitySlug: string,
  branchSlug: string,
  hasBranches: boolean
) {
  if (!hasBranches && branchSlug === "general") {
    return "General";
  }

  const branch = await getBranchBySlug(
    courseSlug,
    universitySlug,
    branchSlug
  );

  return branch?.name;
}

export async function generateMetadata({ params }: Props) {
  const [course, university] = await Promise.all([
    getCourseBySlug(params.course),
    getUniversityBySlug(params.university),
  ]);

  if (!course || !university) {
    return pageMetadata({
      title: "MBA Study Resources",
      description: "Explore course-wise and university-wise study resources.",
    });
  }

  const branchLabel = await resolveBranchLabel(
    params.course,
    params.university,
    params.branch,
    course.hasBranches
  );

  if (!branchLabel) {
    return pageMetadata({ title: "Study Resources Not Found" });
  }

  const branchTitle =
    branchLabel === "General" ? "" : ` ${branchLabel}`;

  return pageMetadata({
    title: `MBA${branchTitle} Notes, Syllabus & Previous Year Papers | ${university.shortName}`,
    description: `Explore semester-wise MBA study resources for ${university.name}. Navigate semesters to find available subject notes, syllabus information and previous year question papers on SabkaCode.`,
    path: `/courses/${course.slug}/${university.slug}/${params.branch}`,
  });
}

const studyMethods = [
  {
    icon: BookOpen,
    title: "Understand the syllabus",
    description:
      "Review the subject syllabus and unit-wise topics before starting a chapter. Use it to identify the concepts you need to cover and revise.",
  },
  {
    icon: FileText,
    title: "Prepare concise notes",
    description:
      "Organise definitions, frameworks, key concepts, examples and important differences into revision-friendly notes for each subject.",
  },
  {
    icon: ClipboardList,
    title: "Practise previous papers",
    description:
      "Use available previous year question papers to practise writing structured answers and understand the style of questions asked in past examinations.",
  },
  {
    icon: Target,
    title: "Revise strategically",
    description:
      "Track completed units, revisit difficult concepts and practise explaining management theories with relevant business examples.",
  },
];

const faqs = [
  {
    question: "Where can I find MBA semester-wise notes for AKTU?",
    answer:
      "Open the semester list on this page, select your semester and then choose the relevant subject. The subject page shows the study resources available on SabkaCode for that subject.",
  },
  {
    question: "Can I find the MBA syllabus on SabkaCode?",
    answer:
      "Syllabus information may be available on individual subject pages. Check the relevant semester and subject to see the published material. For official examination requirements, verify the latest syllabus and notices issued by AKTU.",
  },
  {
    question: "Are previous year MBA question papers available?",
    answer:
      "Previous year question papers are provided where available. Open the relevant semester and subject to check its resources, or visit the Previous Papers section to explore the available collection.",
  },
  {
    question: "How should I prepare for MBA semester examinations?",
    answer:
      "Start with the applicable syllabus, divide the units into manageable study sessions, make concise notes, practise questions and reserve time for revision. Use previous papers as practice material rather than a guarantee of future examination questions.",
  },
  {
    question: "Does every subject have detailed notes and question papers?",
    answer:
      "No. Resource availability varies by subject. Some pages may include detailed notes, while others may have syllabus information or question papers only. Check each subject page for its current resources.",
  },
  {
    question: "Is the study material on SabkaCode free?",
    answer:
      "SabkaCode presents its study resources as free to access. Availability depends on the material published for the relevant course, university, semester and subject.",
  },
];

export default async function SemesterListPage({ params }: Props) {
  const [course, university] = await Promise.all([
    getCourseBySlug(params.course),
    getUniversityBySlug(params.university),
  ]);

  if (!course || !university) {
    notFound();
  }

  const branchLabel = await resolveBranchLabel(
    course.slug,
    university.slug,
    params.branch,
    course.hasBranches
  );

  if (!branchLabel) {
    notFound();
  }

  const stats = await getScopeStats({
    courseSlug: course.slug,
    universitySlug: university.slug,
    branchSlug: params.branch,
  });

  const semesters = Array.from(
    { length: Math.max(0, course.totalSemesters) },
    (_, index) => index + 1
  );

  return (
    <Section
      title={`${course.name} ${branchLabel === "General" ? "" : `— ${branchLabel} `}Notes, Syllabus & Study Material`}
      description={`Semester-wise ${course.name} study resources for ${university.shortName}. Explore available subject notes, syllabus information and previous year question papers.`}
    >
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Courses", href: "/courses" },
          {
            label: course.name,
            href: `/courses/${course.slug}`,
          },
          {
            label: university.shortName,
            href: `/courses/${course.slug}/${university.slug}`,
          },
          { label: branchLabel },
        ]}
      />

      {/* Introductory content */}
      <div className="mt-6 space-y-4 text-sm leading-7 text-ink-600 sm:text-base">
        <p>
          Students pursuing{" "}
          <strong className="font-semibold text-ink-800">
            {course.name} at {university.name}
          </strong>{" "}
          can use this page to navigate semester-wise study material on
          SabkaCode. Resources are organised through the course, university,
          semester and subject structure so you can focus on the topics
          relevant to your current studies.
        </p>

        <p>
          Management studies combine conceptual understanding with the
          application of ideas to business situations. Depending on the
          subjects included in your applicable curriculum, preparation may
          involve learning management concepts, understanding business
          scenarios, interpreting information, comparing approaches and
          presenting clear, well-structured answers.
        </p>

        <p>
          Start by selecting a semester below. You can then open a subject
          and check which notes, syllabus details and previous year question
          papers are available. The content shown on each subject page is
          dependent on the resources currently published for that subject.
        </p>
      </div>

      {/* Live database statistics */}
      <div className="my-8">
        <StatsStrip
          stats={[
            {
              value: course.totalSemesters,
              label: "Semesters",
            },
            {
              value: stats.totalSubjects,
              label: "Subjects Covered",
            },
            {
              value: stats.totalResources,
              label: "Notes & PYQs",
            },
            {
              value: stats.totalDetailedNotes,
              label: "Detailed Notes",
            },
          ]}
        />
      </div>

      {/* Main semester navigation */}
      <section aria-labelledby="semester-heading" className="scroll-mt-6">
        <div className="mb-5">
          <div className="flex items-center gap-2">
            <Layers3 className="h-5 w-5 text-brand-600" />
            <h2
              id="semester-heading"
              className="text-xl font-semibold text-ink-900"
            >
              MBA Semester-Wise Study Material
            </h2>
          </div>

          <p className="mt-2 text-sm leading-6 text-ink-600">
            Select your semester to view its subjects and explore the
            resources available for examination preparation.
          </p>
        </div>

        {semesters.length === 0 ? (
          <div className="rounded-card border border-ink-100 bg-white p-6">
            <p className="font-semibold text-ink-800">
              Semester information is not available yet.
            </p>
            <p className="mt-2 text-sm leading-6 text-ink-600">
              The semester structure for this course has not been configured.
              Please check back later.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {semesters.map((semester) => (
              <Link
                key={semester}
                href={`/courses/${course.slug}/${university.slug}/${params.branch}/${semester}`}
                className="group flex min-h-32 flex-col items-center justify-center rounded-card border border-ink-100 bg-white p-4 text-center shadow-card transition hover:border-brand-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition group-hover:bg-brand-100">
                  <BookOpen className="h-5 w-5" />
                </span>

                <span className="mt-3 font-semibold text-ink-800 group-hover:text-brand-700">
                  Semester {semester}
                </span>

                <span className="mt-1 flex items-center gap-1 text-xs text-ink-500">
                  Explore subjects
                  <ArrowRight className="h-3 w-3 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* How to use resources */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-ink-900">
          How to Use MBA Notes, Syllabus and Previous Papers
        </h2>

        <p className="mt-3 text-sm leading-7 text-ink-600 sm:text-base">
          Study material is most useful when it supports a clear preparation
          plan. Use the following workflow to connect syllabus coverage,
          concept learning, answer-writing practice and revision.
        </p>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {studyMethods.map((method, index) => {
            const Icon = method.icon;

            return (
              <article
                key={method.title}
                className="rounded-card border border-ink-100 bg-white p-5 shadow-card"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-1 font-semibold text-ink-900">
                      {method.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-ink-600">
                      {method.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Practical exam preparation guidance */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-ink-900">
          MBA Exam Preparation Strategy
        </h2>

        <p className="mt-3 text-sm leading-7 text-ink-600 sm:text-base">
          An effective study plan should help you cover the applicable
          syllabus while leaving enough time to revise and practise.
          Adapt the following approach to your university's current
          examination scheme and your available preparation time.
        </p>

        <div className="mt-5 space-y-4">
          <div className="rounded-card border border-ink-100 bg-white p-5">
            <h3 className="flex items-center gap-2 font-semibold text-ink-900">
              <CheckCircle2 className="h-5 w-5 text-brand-600" />
              1. Map your syllabus before studying
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink-600">
              Make a checklist of the units and topics in each subject.
              Mark what you have completed, what needs more practice and
              what you still need to study. Use the applicable official
              syllabus to verify the required topics.
            </p>
          </div>

          <div className="rounded-card border border-ink-100 bg-white p-5">
            <h3 className="flex items-center gap-2 font-semibold text-ink-900">
              <CheckCircle2 className="h-5 w-5 text-brand-600" />
              2. Focus on understanding concepts
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink-600">
              For management theories and frameworks, learn the meaning,
              purpose, key elements, advantages, limitations and practical
              applications. Where relevant, practise explaining a concept
              through a suitable business example.
            </p>
          </div>

          <div className="rounded-card border border-ink-100 bg-white p-5">
            <h3 className="flex items-center gap-2 font-semibold text-ink-900">
              <CheckCircle2 className="h-5 w-5 text-brand-600" />
              3. Practise structured answer writing
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink-600">
              For descriptive questions, practise writing a clear
              introduction, organised main points and a concise conclusion.
              Use headings, examples, tables or diagrams where appropriate
              and permitted by the question.
            </p>
          </div>

          <div className="rounded-card border border-ink-100 bg-white p-5">
            <h3 className="flex items-center gap-2 font-semibold text-ink-900">
              <CheckCircle2 className="h-5 w-5 text-brand-600" />
              4. Use previous year papers for practice
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink-600">
              Attempt available past papers under timed conditions. After
              each attempt, identify gaps in your knowledge and revisit
              the relevant units. Past questions can help with practice,
              but they do not guarantee what will appear in a future exam.
            </p>
          </div>

          <div className="rounded-card border border-ink-100 bg-white p-5">
            <h3 className="flex items-center gap-2 font-semibold text-ink-900">
              <CheckCircle2 className="h-5 w-5 text-brand-600" />
              5. Keep time for revision
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink-600">
              Maintain short revision notes for definitions, important
              frameworks, formulas where relevant and difficult topics.
              Review these notes regularly instead of leaving the entire
              revision process until the last few days.
            </p>
          </div>
        </div>
      </section>

      {/* Planning section */}
      <section className="mt-12 rounded-card border border-ink-100 bg-ink-50/50 p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <CalendarDays className="mt-1 h-5 w-5 shrink-0 text-brand-600" />

          <div>
            <h2 className="text-lg font-semibold text-ink-900">
              Build a Semester Study Plan
            </h2>

            <p className="mt-2 text-sm leading-7 text-ink-600">
              Divide your available study time across subjects instead of
              concentrating on only one subject. Your plan should reflect
              the syllabus, exam timetable, current level of preparation
              and topics that need additional practice.
            </p>

            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm leading-6 text-ink-700">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand-600" />
                Set realistic weekly targets for units and chapters.
              </li>
              <li className="flex items-start gap-2 text-sm leading-6 text-ink-700">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand-600" />
                Schedule practice sessions for questions and case-based topics.
              </li>
              <li className="flex items-start gap-2 text-sm leading-6 text-ink-700">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand-600" />
                Reserve time to revise completed subjects.
              </li>
              <li className="flex items-start gap-2 text-sm leading-6 text-ink-700">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand-600" />
                Verify examination dates and syllabus updates through official university notices.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Resource discovery */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-ink-900">
          Explore More Study Resources
        </h2>

        <p className="mt-2 text-sm leading-7 text-ink-600">
          Use these sections to find other resources available on SabkaCode.
          Choose the resource type that matches your current study needs.
        </p>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Link
            href="/notes"
            className="group rounded-card border border-ink-100 bg-white p-5 shadow-card transition hover:border-brand-300 hover:shadow-md"
          >
            <Library className="h-6 w-6 text-brand-600" />
            <h3 className="mt-3 font-semibold text-ink-900 group-hover:text-brand-700">
              Study Notes
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink-600">
              Browse available notes and find material for your subjects.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-700">
              Browse notes <ArrowRight className="h-4 w-4" />
            </span>
          </Link>

          <Link
            href="/papers"
            className="group rounded-card border border-ink-100 bg-white p-5 shadow-card transition hover:border-brand-300 hover:shadow-md"
          >
            <FileText className="h-6 w-6 text-brand-600" />
            <h3 className="mt-3 font-semibold text-ink-900 group-hover:text-brand-700">
              Previous Year Papers
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink-600">
              Explore available question papers for exam practice and revision.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-700">
              Browse papers <ArrowRight className="h-4 w-4" />
            </span>
          </Link>

          <Link
            href="/courses"
            className="group rounded-card border border-ink-100 bg-white p-5 shadow-card transition hover:border-brand-300 hover:shadow-md"
          >
            <Search className="h-6 w-6 text-brand-600" />
            <h3 className="mt-3 font-semibold text-ink-900 group-hover:text-brand-700">
              All Courses
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink-600">
              Explore other courses and university-wise study resources.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-700">
              Explore courses <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-ink-900">
          Frequently Asked Questions
        </h2>

        <p className="mt-2 text-sm leading-7 text-ink-600">
          Answers to common questions about MBA semester resources,
          study notes and exam preparation.
        </p>

        <div className="mt-5 space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group rounded-card border border-ink-100 bg-white p-4 sm:p-5"
              open={index === 0}
            >
              <summary className="cursor-pointer list-none pr-6 font-semibold text-ink-800 marker:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
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

      {/* Closing navigation */}
      <section className="mt-12 rounded-card border border-ink-100 bg-white p-5 shadow-card sm:p-6">
        <h2 className="text-lg font-semibold text-ink-900">
          Start Preparing for Your MBA Semester
        </h2>

        <p className="mt-2 text-sm leading-7 text-ink-600">
          Select the relevant semester, review the available subjects and
          use the published study materials to organise your preparation.
          For the latest syllabus, examination scheme and academic notices,
          refer to the official university information as well.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href={`/courses/${course.slug}`}
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            Explore {course.name}
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href={`/courses/${course.slug}/${university.slug}`}
            className="inline-flex items-center gap-2 rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-sm font-medium text-ink-700 transition hover:border-brand-300 hover:text-brand-700"
          >
            Back to university
          </Link>
        </div>
      </section>
    </Section>
  );
}

// import { notFound } from "next/navigation";
// import Link from "next/link";
// import { Section } from "@/components/ui/Section";
// import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
// import { StatsStrip } from "@/components/ui/StatsStrip";
// import { getBranchBySlug, getCourseBySlug, getUniversityBySlug, getScopeStats } from "@/lib/data";
// import { pageMetadata } from "@/lib/seo";

// interface Props {
//   params: { course: string; university: string; branch: string };
// }

// async function resolveBranchLabel(courseSlug: string, universitySlug: string, branchSlug: string, hasBranches: boolean) {
//   if (!hasBranches && branchSlug === "general") return "General";
//   const branch = await getBranchBySlug(courseSlug, universitySlug, branchSlug);
//   return branch?.name;
// }

// export async function generateMetadata({ params }: Props) {
//   const course = await getCourseBySlug(params.course);
//   const university = await getUniversityBySlug(params.university);
//   if (!course || !university) return pageMetadata({ title: "Not found" });
//   const label = await resolveBranchLabel(params.course, params.university, params.branch, course.hasBranches);
//   return pageMetadata({
//     title: `${course.name} ${label ? `— ${label}` : ""} at ${university.shortName}`,
//     path: `/courses/${course.slug}/${university.slug}/${params.branch}`,
//   });
// }

// export default async function SemesterListPage({ params }: Props) {
//   const course = await getCourseBySlug(params.course);
//   const university = await getUniversityBySlug(params.university);
//   if (!course || !university) notFound();

//   const branchLabel = await resolveBranchLabel(params.course, params.university, params.branch, course.hasBranches);
//   if (!branchLabel) notFound();

//   const stats = await getScopeStats({
//     courseSlug: course.slug,
//     universitySlug: university.slug,
//     branchSlug: params.branch,
//   });

//   const semesters = Array.from({ length: course.totalSemesters }, (_, i) => i + 1);

//   return (
//     <Section
//       title={`${branchLabel} — Select Semester`}
//       description={`${course.name} at ${university.shortName}`}
//     >
//       <Breadcrumbs
//         items={[
//           { label: "Home", href: "/" },
//           { label: "Courses", href: "/courses" },
//           { label: course.name, href: `/courses/${course.slug}` },
//           { label: university.shortName, href: `/courses/${course.slug}/${university.slug}` },
//           { label: branchLabel },
//         ]}
//       />

//       <p className="mb-6 max-w-2xl text-ink-600">
//         {course.name} at {university.shortName} runs across {course.totalSemesters} semesters.
//         {stats.totalSubjects > 0
//           ? ` ${stats.totalSubjects} subject${stats.totalSubjects === 1 ? "" : "s"} currently have notes, syllabus or previous year papers available — pick a semester below to see what's there.`
//           : " Subject content for this combination is being added — pick a semester below to check."}
//       </p>

//       <div className="mb-8">
//         <StatsStrip
//           stats={[
//             { value: course.totalSemesters, label: "Semesters" },
//             { value: stats.totalSubjects, label: "Subjects Covered" },
//             { value: stats.totalResources, label: "Notes & PYQs" },
//             { value: stats.totalDetailedNotes, label: "Full Unit-Wise Notes" },
//           ]}
//         />
//       </div>

//       <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink-500">Select Semester</h2>
//       <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
//         {semesters.map((sem) => (
//           <Link
//             key={sem}
//             href={`/courses/${course.slug}/${university.slug}/${params.branch}/${sem}`}
//             className="rounded-card border border-ink-100 bg-white py-6 text-center font-medium text-ink-800 shadow-card hover:border-brand-300"
//           >
//             Semester {sem}
//           </Link>
//         ))}
//       </div>
//     </Section>
//   );
// }
