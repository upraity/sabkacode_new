
import { Suspense } from "react";
import Link from "next/link";
import {
  FileDown,
  FileCheck2,
  BookOpen,
  GraduationCap,
  Search,
  Target,
  ClipboardCheck,
  ArrowRight,
  Library,
  CheckCircle2,
  FileText,
} from "lucide-react";

import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { EmptyState } from "@/components/ui/EmptyState";
import { StatsStrip } from "@/components/ui/StatsStrip";
import { PYQFilters } from "@/components/papers/PYQFilters";

import {
  getUniversities,
  getCourses,
  getSubjectsForUniversity,
  getPYQRows,
  getContentStats,
} from "@/lib/data";

import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Previous Year Question Papers — University & Semester Wise",
  description:
    "Find previous year question papers by university, course, semester and subject. Explore available exam papers and solutions to practise questions and prepare for examinations.",
  path: "/papers",
});

interface Props {
  searchParams: Promise<{
    university?: string;
    course?: string;
    semester?: string;
    subject?: string;
  }>;
}

const preparationSteps = [
  {
    icon: Search,
    title: "Identify the relevant paper",
    description:
      "Filter by university, course, semester and subject so that the paper you practise matches your academic requirements as closely as possible.",
  },
  {
    icon: ClipboardCheck,
    title: "Attempt questions independently",
    description:
      "Try solving the paper before checking a solution. This helps you assess what you remember and which topics require additional revision.",
  },
  {
    icon: Target,
    title: "Review mistakes and gaps",
    description:
      "Compare your answers with the relevant study material, identify concepts you missed and revise those topics before attempting another paper.",
  },
  {
    icon: BookOpen,
    title: "Practise time management",
    description:
      "When the examination format is known, practise within an appropriate time limit and work on writing clear, relevant and well-structured answers.",
  },
];

const faqs = [
  {
    question: "How do I find previous year question papers for my university?",
    answer:
      "Use the filters on this page to select your university, course, semester and subject. The results will show papers matching your current selection, where available.",
  },
  {
    question: "Can I download previous year question papers?",
    answer:
      "When a paper has a published file link, use the Download link in its row. If the file is not available yet, the page indicates that it is coming soon.",
  },
  {
    question: "Are solutions available with every question paper?",
    answer:
      "No. Solutions are shown only where a solution link has been published for a paper. You can still use a question paper for independent practice when a solution is unavailable.",
  },
  {
    question: "How do previous year papers help with exam preparation?",
    answer:
      "Past papers help you practise answering questions, assess your understanding and become familiar with the format of earlier examinations. They should complement your syllabus and regular study, not replace them.",
  },
  {
    question: "Will the same questions appear in my next examination?",
    answer:
      "There is no guarantee that previous questions will be repeated. Use past papers to practise concepts and answer-writing skills, and prepare the full syllabus prescribed for your examination.",
  },
  {
    question: "Why are no papers showing for my subject?",
    answer:
      "There may be no papers currently published for that selection, or the chosen filters may be too restrictive. Try another semester or subject, or clear filters to broaden the results.",
  },
  {
    question: "How can I prepare if a paper has no solution?",
    answer:
      "Attempt the questions using your syllabus and subject notes, then review the relevant concepts. Verify your answers with trusted course material or your instructor when possible.",
  },
];

export default async function PapersPage({ searchParams }: Props) {
  const params = await searchParams;

  const [universities, allCourses, stats] = await Promise.all([
    getUniversities(),
    getCourses(),
    getContentStats(),
  ]);

  const activeUniversities = universities.filter(
    (university) => university.status === "active"
  );

  const currentUniversity =
    params.university &&
    activeUniversities.some(
      (university) => university.slug === params.university
    )
      ? params.university
      : activeUniversities[0]?.slug;

  const subjectsForUniversity = currentUniversity
    ? await getSubjectsForUniversity(currentUniversity)
    : [];

  const courseSlugsAvailable = Array.from(
    new Set(
      subjectsForUniversity.map((subject) => subject.courseSlug)
    )
  );

  const coursesAvailable = allCourses.filter((course) =>
    courseSlugsAvailable.includes(course.slug)
  );

  const currentCourse =
    params.course &&
    courseSlugsAvailable.includes(params.course)
      ? params.course
      : undefined;

  const subjectsForCourse = currentCourse
    ? subjectsForUniversity.filter(
        (subject) => subject.courseSlug === currentCourse
      )
    : subjectsForUniversity;

  const availableSemesters = Array.from(
    new Set(
      subjectsForCourse.map((subject) => subject.semester)
    )
  ).sort((a, b) => a - b);

  const currentSemester =
    params.semester &&
    availableSemesters.some(
      (semester) => String(semester) === params.semester
    )
      ? params.semester
      : undefined;

  const subjectsForDropdown = subjectsForCourse.filter(
    (subject) =>
      !currentSemester ||
      String(subject.semester) === currentSemester
  );

  const currentSubjectId =
    params.subject &&
    subjectsForDropdown.some(
      (subject) => subject.id === params.subject
    )
      ? params.subject
      : undefined;

  const allRows = currentUniversity
    ? await getPYQRows({
        universitySlug: currentUniversity,
        courseSlug: currentCourse,
        subjectId: currentSubjectId,
      })
    : [];

  const rows = allRows.filter(
    ({ subject }) =>
      !currentSemester ||
      String(subject.semester) === currentSemester
  );

  const downloadablePapers = rows.filter(
    ({ resource }) => Boolean(resource.fileUrl)
  ).length;

  const papersWithSolutions = rows.filter(
    ({ resource }) => Boolean(resource.solutionUrl)
  ).length;

  return (
    <Section
      title="Previous Year Question Papers"
      description="Find university-wise, course-wise, semester-wise and subject-wise previous year papers for exam practice and revision."
    >
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Previous Papers" },
        ]}
      />

      {/* Introduction */}
      <div className="mt-6 space-y-4 text-sm leading-7 text-ink-600 sm:text-base">
        <p>
          Preparing for university examinations involves more than
          reading notes.{" "}
          <strong className="font-semibold text-ink-800">
            Previous year question papers
          </strong>{" "}
          give you an opportunity to practise questions, assess your
          understanding and review how well you can explain the topics
          covered in your course.
        </p>

        <p>
          SabkaCode organises available question papers by university,
          course, semester and subject. Use the filters below to narrow
          down the results and locate the material relevant to your
          studies. Depending on the paper, a downloadable file or a
          solution may also be available.
        </p>

        <p>
          Past papers work best alongside the applicable syllabus and
          subject notes. Use them to identify areas that need revision,
          practise answering questions clearly and become more familiar
          with the examination formats represented in the available
          collection.
        </p>
      </div>

      {/* Platform statistics */}
      <div className="my-8">
        <StatsStrip
          stats={[
            {
              value: stats.totalPyqs,
              label: "Papers Across Platform",
            },
            {
              value: rows.length,
              label: "Matching This Filter",
            },
            {
              value: downloadablePapers,
              label: "Downloadable Results",
            },
            {
              value: papersWithSolutions,
              label: "With Solutions",
            },
          ]}
        />
      </div>

      {/* Filters */}
      <section
        aria-labelledby="paper-search-heading"
        className="scroll-mt-6"
      >
        <div className="mb-4">
          <h2
            id="paper-search-heading"
            className="text-xl font-semibold text-ink-900"
          >
            Find Question Papers
          </h2>

          <p className="mt-2 text-sm leading-6 text-ink-600">
            Select the university first, then narrow the list by
            course, semester and subject. Available options depend on
            the subject data published for the selected university.
          </p>
        </div>

        <div className="rounded-card border border-ink-100 bg-white p-4 shadow-card sm:p-5">
          <Suspense fallback={null}>
            <PYQFilters
              universities={activeUniversities.map((university) => ({
                value: university.slug,
                label: university.shortName,
              }))}
              currentUniversity={currentUniversity}
              courses={coursesAvailable.map((course) => ({
                value: course.slug,
                label: course.name,
              }))}
              currentCourse={currentCourse}
              semesters={availableSemesters.map((semester) => ({
                value: String(semester),
                label: `Semester ${semester}`,
              }))}
              currentSemester={currentSemester}
              subjects={subjectsForDropdown.map((subject) => ({
                value: subject.id,
                label: subject.name,
              }))}
              currentSubjectId={currentSubjectId}
            />
          </Suspense>
        </div>
      </section>

      {/* Results table */}
      <section
        aria-labelledby="paper-results-heading"
        className="mt-10 scroll-mt-6"
      >
        <div className="mb-4">
          <h2
            id="paper-results-heading"
            className="text-xl font-semibold text-ink-900"
          >
            Available Question Papers
          </h2>

          <p className="mt-2 text-sm leading-6 text-ink-600">
            {rows.length > 0
              ? `${rows.length} matching ${
                  rows.length === 1 ? "paper is" : "papers are"
                } listed for your current selection.`
              : "No question papers match your current selection. Try changing the filters or explore another subject."}
          </p>
        </div>

        {rows.length === 0 ? (
          <EmptyState
            title="No previous papers available for this selection yet."
            description="Try a different semester, university, course or subject. Paper availability depends on the resources currently published on SabkaCode."
          />
        ) : (
          <>
            {/* Mobile-friendly paper cards */}
            <div className="grid grid-cols-1 gap-4 md:hidden">
              {rows.map(({ subject, resource }) => (
                <article
                  key={resource.id}
                  className="rounded-card border border-ink-100 bg-white p-4 shadow-card"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                      <FileText className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-semibold leading-6 text-ink-900">
                        {subject.name}
                      </h3>

                      <p className="mt-1 text-xs text-ink-500">
                        {subject.courseSlug.toUpperCase()} · Semester{" "}
                        {subject.semester}
                      </p>
                    </div>
                  </div>

                  <dl className="mt-4 grid grid-cols-2 gap-3 border-t border-ink-100 pt-3 text-sm">
                    <div>
                      <dt className="text-xs text-ink-500">
                        Examination Year
                      </dt>
                      <dd className="mt-1 font-medium text-ink-800">
                        {resource.year ?? "Not specified"}
                      </dd>
                    </div>

                    <div>
                      <dt className="text-xs text-ink-500">
                        Exam Type
                      </dt>
                      <dd className="mt-1 font-medium text-ink-800">
                        {resource.examType ?? "Not specified"}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-4 flex flex-wrap gap-3">
                    {resource.fileUrl ? (
                      <a
                        href={resource.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-brand-700"
                      >
                        <FileDown className="h-4 w-4" />
                        Download Paper
                      </a>
                    ) : (
                      <span className="text-sm text-ink-400">
                        Paper file not available
                      </span>
                    )}

                    {resource.solutionUrl && (
                      <a
                        href={resource.solutionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-ink-200 px-3 py-2 text-sm font-medium text-brand-700 transition hover:border-brand-300"
                      >
                        <FileCheck2 className="h-4 w-4" />
                        View Solution
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {/* Desktop table */}
            <div className="hidden overflow-x-auto rounded-card border border-ink-100 md:block">
              <table className="w-full text-left text-sm">
                <thead className="bg-ink-50 text-xs uppercase tracking-wide text-ink-500">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-medium">
                      Subject
                    </th>
                    <th scope="col" className="px-4 py-3 font-medium">
                      Course
                    </th>
                    <th scope="col" className="px-4 py-3 font-medium">
                      Semester
                    </th>
                    <th scope="col" className="px-4 py-3 font-medium">
                      Year
                    </th>
                    <th scope="col" className="px-4 py-3 font-medium">
                      Exam Type
                    </th>
                    <th scope="col" className="px-4 py-3 font-medium">
                      Paper
                    </th>
                    <th scope="col" className="px-4 py-3 font-medium">
                      Solution
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-ink-100 bg-white">
                  {rows.map(({ subject, resource }) => (
                    <tr
                      key={resource.id}
                      className="transition hover:bg-ink-50/60"
                    >
                      <td className="px-4 py-3 font-medium text-ink-900">
                        {subject.name}
                      </td>

                      <td className="px-4 py-3 uppercase text-ink-500">
                        {subject.courseSlug}
                      </td>

                      <td className="px-4 py-3 text-ink-600">
                        {subject.semester}
                      </td>

                      <td className="px-4 py-3 text-ink-600">
                        {resource.year ?? "—"}
                      </td>

                      <td className="px-4 py-3 text-ink-600">
                        {resource.examType ?? "—"}
                      </td>

                      <td className="px-4 py-3">
                        {resource.fileUrl ? (
                          <a
                            href={resource.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-medium text-brand-600 hover:text-brand-700"
                          >
                            <FileDown className="h-3.5 w-3.5" />
                            Download
                          </a>
                        ) : (
                          <span className="text-xs text-ink-400">
                            Coming soon
                          </span>
                        )}
                      </td>

                      <td className="px-4 py-3">
                        {resource.solutionUrl ? (
                          <a
                            href={resource.solutionUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-medium text-brand-600 hover:text-brand-700"
                          >
                            <FileCheck2 className="h-3.5 w-3.5" />
                            View Solution
                          </a>
                        ) : (
                          <span className="text-xs text-ink-400">
                            Not available
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </section>

      {/* How to use previous papers */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-ink-900">
          How to Use Previous Year Papers Effectively
        </h2>

        <p className="mt-3 text-sm leading-7 text-ink-600 sm:text-base">
          Previous year papers are most useful when you analyse your
          performance rather than simply reading the questions. Follow
          a repeatable practice routine to connect past questions with
          your current syllabus and revision plan.
        </p>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {preparationSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
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
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-ink-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Download and solution guidance */}
      <section className="mt-12 rounded-card border border-ink-100 bg-ink-50/50 p-5 sm:p-6">
        <h2 className="text-lg font-semibold text-ink-900">
          Download Papers and Check Available Solutions
        </h2>

        <div className="mt-4 space-y-4 text-sm leading-7 text-ink-600">
          <p>
            Use the Download Paper link next to a result to open its
            published file. Depending on the file host and your browser,
            the document may open in a new tab before you can save it.
          </p>

          <p>
            If a solution is available, use View Solution after attempting
            the paper yourself. Comparing your approach with a solution
            can help you identify missed concepts and improve the structure
            of your answers.
          </p>

          <p>
            A missing download or solution link means that the corresponding
            resource is not currently linked on this page. It does not
            mean that the paper or solution is guaranteed to be added later.
          </p>
        </div>
      </section>

      {/* Related study resources */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-ink-900">
          Explore More Study Resources
        </h2>

        <p className="mt-2 text-sm leading-7 text-ink-600">
          Combine question-paper practice with notes and course-specific
          study material to make your revision more organised.
        </p>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Link
            href="/notes"
            className="group rounded-card border border-ink-100 bg-white p-5 shadow-card transition hover:border-brand-300 hover:shadow-md"
          >
            <Library className="h-6 w-6 text-brand-600" />

            <h3 className="mt-3 font-semibold text-ink-900 group-hover:text-brand-700">
              Study Notes
            </h3>

            <p className="mt-2 text-sm leading-6 text-ink-600">
              Review available study notes and use them to strengthen
              concepts before attempting practice papers.
            </p>

            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-700">
              Explore notes <ArrowRight className="h-4 w-4" />
            </span>
          </Link>

          <Link
            href="/courses"
            className="group rounded-card border border-ink-100 bg-white p-5 shadow-card transition hover:border-brand-300 hover:shadow-md"
          >
            <GraduationCap className="h-6 w-6 text-brand-600" />

            <h3 className="mt-3 font-semibold text-ink-900 group-hover:text-brand-700">
              Courses and Subjects
            </h3>

            <p className="mt-2 text-sm leading-6 text-ink-600">
              Browse available courses, universities, semesters and
              subject-specific learning resources.
            </p>

            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-700">
              Browse courses <ArrowRight className="h-4 w-4" />
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
          Common questions about finding, downloading and practising
          previous year question papers.
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

      {/* Closing guidance */}
      <section className="mt-12 rounded-card border border-ink-100 bg-white p-5 shadow-card sm:p-6">
        <h2 className="text-lg font-semibold text-ink-900">
          Prepare with a Clear Study Plan
        </h2>

        <p className="mt-2 text-sm leading-7 text-ink-600">
          Choose papers that match your university, course, semester and
          subject. Study the relevant syllabus, practise the available
          questions and use your results to guide revision. Always verify
          current examination requirements through official university
          notices.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/notes"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            Browse study notes
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/courses"
            className="inline-flex items-center gap-2 rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-sm font-medium text-ink-700 transition hover:border-brand-300 hover:text-brand-700"
          >
            Explore courses
          </Link>
        </div>
      </section>
    </Section>
  );
}

// import { Suspense } from "react";
// import { FileDown, FileCheck2 } from "lucide-react";

// import { Section } from "@/components/ui/Section";
// import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
// import { EmptyState } from "@/components/ui/EmptyState";
// import { StatsStrip } from "@/components/ui/StatsStrip";
// import { PYQFilters } from "@/components/papers/PYQFilters";

// import {
//   getUniversities,
//   getCourses,
//   getSubjectsForUniversity,
//   getPYQRows,
//   getContentStats,
// } from "@/lib/data";

// import { pageMetadata } from "@/lib/seo";

// export const metadata = pageMetadata({
//   title: "Previous Year Papers",
//   description:
//     "Browse previous year question papers by university, course, semester and subject, with solutions where available.",
//   path: "/papers",
// });

// interface Props {
//   searchParams: Promise<{
//     university?: string;
//     course?: string;
//     semester?: string;
//     subject?: string;
//   }>;
// }

// export default async function PapersPage({ searchParams }: Props) {
//   const params = await searchParams;

//   const [universities, allCourses, stats] = await Promise.all([
//     getUniversities(),
//     getCourses(),
//     getContentStats(),
//   ]);

//   const activeUniversities = universities.filter(
//     (university) => university.status === "active"
//   );

//   const currentUniversity =
//     params.university &&
//     activeUniversities.some(
//       (university) => university.slug === params.university
//     )
//       ? params.university
//       : activeUniversities[0]?.slug;

//   const subjectsForUniversity = currentUniversity
//     ? await getSubjectsForUniversity(currentUniversity)
//     : [];

//   const courseSlugsAvailable = Array.from(
//     new Set(subjectsForUniversity.map((subject) => subject.courseSlug))
//   );

//   const coursesAvailable = allCourses.filter((course) =>
//     courseSlugsAvailable.includes(course.slug)
//   );

//   const currentCourse =
//     params.course && courseSlugsAvailable.includes(params.course)
//       ? params.course
//       : undefined;

//   // Filter subjects by the selected course first.
//   const subjectsForCourse = currentCourse
//     ? subjectsForUniversity.filter(
//         (subject) => subject.courseSlug === currentCourse
//       )
//     : subjectsForUniversity;

//   // Generate semester options from the actual subject data.
//   const availableSemesters = Array.from(
//     new Set(subjectsForCourse.map((subject) => subject.semester))
//   ).sort((a, b) => a - b);

//   const currentSemester =
//     params.semester &&
//     availableSemesters.some(
//       (semester) => String(semester) === params.semester
//     )
//       ? params.semester
//       : undefined;

//   // Filter the subject dropdown by the selected semester.
//   const subjectsForDropdown = subjectsForCourse.filter(
//     (subject) =>
//       !currentSemester ||
//       String(subject.semester) === currentSemester
//   );

//   const currentSubjectId =
//     params.subject &&
//     subjectsForDropdown.some((subject) => subject.id === params.subject)
//       ? params.subject
//       : undefined;

//   // Fetch papers for the selected university, course and subject.
//   const allRows = currentUniversity
//     ? await getPYQRows({
//         universitySlug: currentUniversity,
//         courseSlug: currentCourse,
//         subjectId: currentSubjectId,
//       })
//     : [];

//   // Apply semester filtering to the paper rows as well.
//   const rows = allRows.filter(
//     ({ subject }) =>
//       !currentSemester ||
//       String(subject.semester) === currentSemester
//   );

//   return (
//     <Section
//       title="Previous Year Papers"
//       description="Pick a university, course and semester to find relevant question papers."
//     >
//       <Breadcrumbs
//         items={[
//           { label: "Home", href: "/" },
//           { label: "Previous Papers" },
//         ]}
//       />

//       <p className="mb-5 max-w-2xl text-ink-600">
//         Past exam papers help you understand the actual question pattern and
//         difficulty level before an exam. Filter by university, course,
//         semester and subject to find the papers you need.
//       </p>

//       <div className="mb-6">
//         <Suspense fallback={null}>
//           <PYQFilters
//             universities={activeUniversities.map((university) => ({
//               value: university.slug,
//               label: university.shortName,
//             }))}
//             currentUniversity={currentUniversity}
//             courses={coursesAvailable.map((course) => ({
//               value: course.slug,
//               label: course.name,
//             }))}
//             currentCourse={currentCourse}
//             semesters={availableSemesters.map((semester) => ({
//               value: String(semester),
//               label: `Semester ${semester}`,
//             }))}
//             currentSemester={currentSemester}
//             subjects={subjectsForDropdown.map((subject) => ({
//               value: subject.id,
//               label: subject.name,
//             }))}
//             currentSubjectId={currentSubjectId}
//           />
//         </Suspense>
//       </div>

//       <div className="mb-6">
//         <StatsStrip
//           stats={[
//             {
//               value: stats.totalPyqs,
//               label: "Papers Across Platform",
//             },
//             {
//               value: rows.length,
//               label: "Matching This Filter",
//             },
//           ]}
//         />
//       </div>

//       {rows.length === 0 ? (
//         <EmptyState
//           title="No previous papers available for this selection yet."
//           description="Try a different semester, university, course or subject."
//         />
//       ) : (
//         <div className="overflow-x-auto rounded-card border border-ink-100">
//           <table className="w-full text-left text-sm">
//             <thead className="bg-ink-50 text-xs uppercase tracking-wide text-ink-500">
//               <tr>
//                 <th className="px-4 py-3 font-medium">Subject</th>
//                 <th className="px-4 py-3 font-medium">Course</th>
//                 <th className="px-4 py-3 font-medium">Semester</th>
//                 <th className="px-4 py-3 font-medium">Year</th>
//                 <th className="px-4 py-3 font-medium">Exam Type</th>
//                 <th className="px-4 py-3 font-medium">Paper</th>
//                 <th className="px-4 py-3 font-medium">Solution</th>
//               </tr>
//             </thead>

//             <tbody className="divide-y divide-ink-100 bg-white">
//               {rows.map(({ subject, resource }) => (
//                 <tr key={resource.id}>
//                   <td className="px-4 py-3 font-medium text-ink-900">
//                     {subject.name}
//                   </td>

//                   <td className="px-4 py-3 uppercase text-ink-500">
//                     {subject.courseSlug}
//                   </td>

//                   <td className="px-4 py-3 text-ink-600">
//                     {subject.semester}
//                   </td>

//                   <td className="px-4 py-3 text-ink-600">
//                     {resource.year ?? "—"}
//                   </td>

//                   <td className="px-4 py-3 text-ink-600">
//                     {resource.examType ?? "—"}
//                   </td>

//                   <td className="px-4 py-3">
//                     {resource.fileUrl ? (
//                       <a
//                         href={resource.fileUrl}
//                         className="inline-flex items-center gap-1 font-medium text-brand-600 hover:text-brand-700"
//                       >
//                         <FileDown className="h-3.5 w-3.5" />
//                         Download
//                       </a>
//                     ) : (
//                       <span className="text-xs text-ink-400">
//                         Coming soon
//                       </span>
//                     )}
//                   </td>

//                   <td className="px-4 py-3">
//                     {resource.solutionUrl ? (
//                       <a
//                         href={resource.solutionUrl}
//                         className="inline-flex items-center gap-1 font-medium text-brand-600 hover:text-brand-700"
//                       >
//                         <FileCheck2 className="h-3.5 w-3.5" />
//                         View Solution
//                       </a>
//                     ) : (
//                       <span className="text-xs text-ink-400">
//                         Not available
//                       </span>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </Section>
//   );
// }
