import Link from "next/link";
import {
  FileStack,
  ArrowRight,
  Layers,
  BookOpenCheck,
  FileCheck2,
  GraduationCap,
  ClipboardList,
  BookOpen,
  SearchCheck,
  Target,
  LibraryBig,
  CircleHelp,
  NotebookPen,
  Calculator,
} from "lucide-react";

import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StatsStrip } from "@/components/ui/StatsStrip";
import { CourseCard } from "@/components/courses/CourseCard";
import {
  getCourses,
  getUniversitiesForCourse,
  getContentStats,
} from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "University Notes, Study Material & PYQs",
  description:
    "Explore BBA, BCA, MBA and MCA notes on SabkaCode. Find university-wise study material, semester-wise subjects, syllabus guidance, previous year papers, question banks and exam preparation resources for AKTU and DBRAU.",
  path: "/notes",
});

const howOrganized = [
  {
    icon: GraduationCap,
    label: "Choose your course",
    description:
      "Start with BBA, BCA, MBA or MCA to find the resources relevant to your degree.",
  },
  {
    icon: Layers,
    label: "Select your university",
    description:
      "Follow the available university and semester structure instead of browsing unrelated material.",
  },
  {
    icon: BookOpenCheck,
    label: "Open your subject",
    description:
      "Explore available notes, syllabus information and other subject-level study resources.",
  },
];

const resourceTypes = [
  {
    icon: NotebookPen,
    title: "Subject-wise Notes",
    description:
      "Use organized study notes to revise important concepts, understand definitions and review key topics from your subjects. Where available, use detailed unit-wise material for more structured preparation.",
  },
  {
    icon: FileCheck2,
    title: "Syllabus and Unit Structure",
    description:
      "Check the relevant syllabus and unit breakdown before preparing a study plan. Confirm the applicable academic session and syllabus version with your university whenever an official document is available.",
  },
  {
    icon: FileStack,
    title: "Previous Year Question Papers",
    description:
      "Review available previous year question papers to understand examination formats, question styles and the way topics may be tested. Past papers are useful practice material, not a guarantee of future questions.",
  },
  {
    icon: ClipboardList,
    title: "Question Banks",
    description:
      "Practise topic-based and exam-oriented questions to check your understanding, identify weak areas and improve answer-writing preparation.",
  },
  {
    icon: SearchCheck,
    title: "Practicals and Viva Preparation",
    description:
      "Where applicable, use practical guidance, viva questions and concept-based revision to prepare for laboratory assessments, demonstrations and oral examinations.",
  },
  {
    icon: Target,
    title: "Exam Preparation and Revision",
    description:
      "Combine syllabus review, concept revision, written practice and previous papers into a realistic study routine that fits your examination schedule.",
  },
];

const courseGuides = [
  {
    title: "BBA Notes and Study Material",
    description:
      "Bachelor of Business Administration students study subjects related to management, business operations, marketing, accounting, economics and organisational behaviour, depending on their curriculum. Focus on understanding management concepts, learning key terminology and practising structured answers with relevant examples.",
    topics: [
      "Management principles and organisational behaviour",
      "Marketing and business communication",
      "Accounting, finance and economics",
      "Business law and related subjects where prescribed",
    ],
  },
  {
    title: "BCA Notes and Study Material",
    description:
      "Bachelor of Computer Applications students generally work with computing concepts, programming, databases, software development and related mathematical or analytical subjects. Effective preparation combines conceptual understanding with coding practice, problem-solving and practical work wherever required by the syllabus.",
    topics: [
      "Programming fundamentals and problem-solving",
      "Database management and SQL concepts",
      "Data structures and computer networks",
      "Operating systems, software engineering and practicals",
    ],
  },
  {
    title: "MBA Notes and Study Material",
    description:
      "Master of Business Administration students develop their understanding of business strategy, management, finance, marketing, human resources, operations and analytical decision-making. The exact subjects depend on the university curriculum, semester and specialisation. Use the applicable syllabus to identify the topics you need to cover.",
    topics: [
      "Management and business strategy",
      "Marketing and consumer behaviour",
      "Financial management and business analytics",
      "Human resources and operations management",
    ],
  },
  {
    title: "MCA Notes and Study Material",
    description:
      "Master of Computer Applications students build advanced knowledge in computing, software development and information technology. Preparation may involve programming, database systems, algorithms, operating systems, software engineering and practical assignments, depending on the prescribed curriculum.",
    topics: [
      "Advanced programming and algorithms",
      "Database systems and software engineering",
      "Computer networks and operating systems",
      "Practical assignments and project-related concepts",
    ],
  },
];

const faqs = [
  {
    question: "How can I find the right notes for my course?",
    answer:
      "Start by selecting your course from the course cards above. Then choose the available university, semester and subject to reach the relevant study resources. Always confirm that the material matches your course structure and syllabus.",
  },
  {
    question: "Are notes available for AKTU and DBRAU students?",
    answer:
      "SabkaCode provides a course-based structure for resources associated with Dr. A.P.J. Abdul Kalam Technical University (AKTU) and Dr. Bhimrao Ambedkar University, Agra (DBRAU). The courses, subjects and resources available may differ. Select your course to check the current listings.",
  },
  {
    question: "Can I use these notes for semester examinations?",
    answer:
      "You can use available notes as supplementary study material for revision and concept learning. Compare them with your current university syllabus, prescribed units and faculty guidance before relying on them for examination preparation.",
  },
  {
    question: "Where can I find previous year question papers?",
    answer:
      "Visit the Previous Year Papers section using the link provided on this page. Browse the available papers by university, course and subject, and check the examination year and subject details before practising.",
  },
  {
    question: "What is the difference between notes and question papers?",
    answer:
      "Notes help you understand and revise concepts, while question papers let you practise answering examination-style questions. Using both can help you identify gaps in your understanding and improve time management.",
  },
  {
    question: "Will MBA Integrated and MCA Integrated be available?",
    answer:
      "Integrated course listings can be added as the relevant course and university data becomes available. Check the course directory for the options currently listed on SabkaCode.",
  },
  {
    question: "Are the notes a replacement for the official syllabus?",
    answer:
      "No. Notes are supplementary learning resources. The applicable official university syllabus and academic notices should be your primary reference for prescribed units, assessment requirements and syllabus changes.",
  },
];

export default async function NotesPage() {
  const [courses, stats] = await Promise.all([
    getCourses(),
    getContentStats(),
  ]);

  const counts = await Promise.all(
    courses.map(async (course) => ({
      slug: course.slug,
      count: (
        await getUniversitiesForCourse(course.slug)
      ).length,
    })),
  );

  const countBySlug = Object.fromEntries(
    counts.map((item) => [item.slug, item.count]),
  );

  return (
    <Section
      title="University Notes & Study Material"
      description="Explore course-wise notes, university-specific study resources, previous year question papers and exam preparation material for BBA, BCA, MBA and MCA."
    >
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Notes" },
        ]}
      />

      {/* Introduction */}
      <div className="mb-7 max-w-4xl space-y-3">
        <p className="text-base leading-7 text-ink-700">
          Welcome to SabkaCode Notes, a study resource directory
          designed to help college students find relevant academic
          material without navigating through unrelated content.
          Whether you are pursuing BBA, BCA, MBA or MCA, you can
          start with your course and explore the universities,
          semesters, subjects and learning resources currently
          available on the platform.
        </p>

        <p className="leading-7 text-ink-600">
          The Notes section follows a structured learning path:
          <strong>
            {" "}
            Course → University → Semester → Subject.
          </strong>{" "}
          This makes it easier to identify the material associated
          with your degree and academic requirements. Available
          resources may include subject notes, syllabus information,
          previous year question papers (PYQs), question banks,
          practical material and viva preparation resources.
        </p>

        <p className="leading-7 text-ink-600">
          SabkaCode currently focuses on course and university
          listings that include AKTU and DBRAU. Resource availability
          varies by course, semester and subject, so check the
          relevant listing before planning your preparation.
        </p>
      </div>

      {/* Dynamic statistics */}
      <div className="mb-8">
        <StatsStrip
          stats={[
            {
              value: stats.totalSubjects,
              label: "Subjects Covered",
            },
            {
              value: stats.totalNotes,
              label: "Available Notes",
            },
            {
              value: stats.totalPyqs,
              label: "Question Papers",
            },
            {
              value: stats.totalDetailedNotes,
              label: "Unit-Wise Notes",
            },
          ]}
        />
      </div>

      {/* How the directory works */}
      <section
        aria-labelledby="how-to-find-notes"
        className="mb-10"
      >
        <div className="mb-4">
          <h2
            id="how-to-find-notes"
            className="text-xl font-semibold tracking-tight text-ink-900"
          >
            How to Find the Right Study Material
          </h2>
          <p className="mt-2 leading-6 text-ink-600">
            Follow these steps to reach the resources relevant to
            your course and university.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {howOrganized.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-card border border-ink-100 bg-white p-4 shadow-card"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <Icon className="h-5 w-5" />
                </div>

                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-brand-600">
                  Step {index + 1}
                </p>

                <h3 className="font-semibold text-ink-900">
                  {item.label}
                </h3>

                <p className="mt-2 text-sm leading-6 text-ink-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Main course directory */}
      <section
        id="course-directory"
        aria-labelledby="course-directory-title"
        className="mb-10 scroll-mt-24"
      >
        <div className="mb-5">
          <h2
            id="course-directory-title"
            className="text-xl font-semibold tracking-tight text-ink-900"
          >
            Browse Notes by Course
          </h2>

          <p className="mt-2 max-w-3xl leading-7 text-ink-600">
            Choose your degree to view the available university
            listings and continue to the relevant semester and
            subject. Selecting the correct course is important
            because subject names, units and examination patterns
            can differ between universities and academic sessions.
          </p>
        </div>

        {courses.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                universityCount={countBySlug[course.slug] ?? 0}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-card border border-ink-100 bg-white p-6">
            <h3 className="font-semibold text-ink-900">
              Course listings are being updated
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink-600">
              Please check back later for available course and
              university resources.
            </p>
          </div>
        )}
      </section>

      {/* Previous year papers navigation */}
      <Link
        href="/papers"
        className="mb-10 flex items-center justify-between gap-3 rounded-card border border-brand-200 bg-brand-50 p-4 transition-colors hover:border-brand-300"
      >
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white text-brand-600 shadow-card">
            <FileStack className="h-5 w-5" />
          </span>

          <div className="min-w-0">
            <h2 className="font-semibold text-ink-900">
              Looking for Previous Year Question Papers?
            </h2>
            <p className="mt-1 text-sm leading-6 text-ink-600">
              Explore available papers by university, course and
              subject to practise examination-style questions.
            </p>
          </div>
        </div>

        <ArrowRight
          aria-hidden="true"
          className="h-5 w-5 shrink-0 text-brand-600"
        />
      </Link>

      {/* Resource types */}
      <section
        aria-labelledby="resource-types-title"
        className="mb-10"
      >
        <div className="mb-5">
          <h2
            id="resource-types-title"
            className="text-xl font-semibold tracking-tight text-ink-900"
          >
            Study Resources Available on SabkaCode
          </h2>

          <p className="mt-2 max-w-3xl leading-7 text-ink-600">
            Different stages of exam preparation require different
            kinds of study material. Use the resources available
            for your subject according to your learning needs and
            the requirements of your course.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {resourceTypes.map((resource) => {
            const Icon = resource.icon;

            return (
              <article
                key={resource.title}
                className="rounded-card border border-ink-100 bg-white p-4 shadow-card"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <Icon className="h-5 w-5" />
                  </span>

                  <h3 className="font-semibold text-ink-900">
                    {resource.title}
                  </h3>
                </div>

                <p className="text-sm leading-7 text-ink-600">
                  {resource.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* University guidance */}
      <section
        aria-labelledby="university-guidance-title"
        className="mb-10 rounded-card border border-ink-100 bg-white p-5 sm:p-6"
      >
        <div className="mb-3 flex items-center gap-3">
          <LibraryBig className="h-6 w-6 shrink-0 text-brand-600" />

          <h2
            id="university-guidance-title"
            className="text-xl font-semibold tracking-tight text-ink-900"
          >
            University-Wise Notes: AKTU and DBRAU
          </h2>
        </div>

        <p className="leading-7 text-ink-600">
          Students should select study material according to their
          own university, course and semester rather than relying
          on a generic collection of notes. Even when two
          programmes have similar subject names, their unit
          structures, prescribed topics and assessment requirements
          may differ.
        </p>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg bg-ink-50 p-4">
            <h3 className="font-semibold text-ink-900">
              Dr. A.P.J. Abdul Kalam Technical University (AKTU)
            </h3>

            <p className="mt-2 text-sm leading-7 text-ink-600">
              Identify your programme and semester before opening
              study resources. Use the applicable syllabus and
              academic notices to verify prescribed units and
              subject requirements.
            </p>
          </div>

          <div className="rounded-lg bg-ink-50 p-4">
            <h3 className="font-semibold text-ink-900">
              Dr. Bhimrao Ambedkar University, Agra (DBRAU)
            </h3>

            <p className="mt-2 text-sm leading-7 text-ink-600">
              Select the university and course that match your
              enrolment. Verify the academic session, semester
              and subject before using notes or practising
              available question papers.
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm leading-6 text-ink-500">
          University-specific resources are supplementary study
          material. Always consult the applicable official
          university documents for authoritative syllabus and
          examination information.
        </p>
      </section>

      {/* Course-specific educational content */}
      <section
        aria-labelledby="course-study-guides-title"
        className="mb-10"
      >
        <div className="mb-5">
          <h2
            id="course-study-guides-title"
            className="text-xl font-semibold tracking-tight text-ink-900"
          >
            Course-Wise Study Guides
          </h2>

          <p className="mt-2 max-w-3xl leading-7 text-ink-600">
            Each degree has a different learning focus. These
            introductory guides explain what students commonly
            study and how to approach preparation. The exact
            subjects and syllabus depend on the university and
            programme.
          </p>
        </div>

        <div className="space-y-4">
          {courseGuides.map((guide) => (
            <article
              key={guide.title}
              className="rounded-card border border-ink-100 bg-white p-5 shadow-card"
            >
              <h3 className="text-lg font-semibold text-ink-900">
                {guide.title}
              </h3>

              <p className="mt-3 leading-7 text-ink-600">
                {guide.description}
              </p>

              <h4 className="mt-4 text-sm font-semibold text-ink-900">
                Areas students may need to prepare
              </h4>

              <ul className="mt-2 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                {guide.topics.map((topic) => (
                  <li
                    key={topic}
                    className="flex items-start gap-2 text-sm leading-6 text-ink-600"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600"
                    />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Exam preparation methodology */}
      <section
        aria-labelledby="exam-preparation-title"
        className="mb-10 rounded-card border border-ink-100 bg-white p-5 sm:p-6"
      >
        <div className="mb-3 flex items-center gap-3">
          <Calculator className="h-6 w-6 shrink-0 text-brand-600" />

          <h2
            id="exam-preparation-title"
            className="text-xl font-semibold tracking-tight text-ink-900"
          >
            How to Prepare for Semester Examinations
          </h2>
        </div>

        <p className="leading-7 text-ink-600">
          Effective examination preparation begins with understanding
          what you need to learn. Instead of collecting large
          amounts of material without a plan, organise your
          preparation around your syllabus, available study time
          and level of understanding.
        </p>

        <ol className="mt-5 space-y-4">
          <li className="flex items-start gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-semibold text-brand-700">
              1
            </span>
            <div>
              <h3 className="font-semibold text-ink-900">
                Review your syllabus
              </h3>
              <p className="mt-1 text-sm leading-7 text-ink-600">
                Identify the prescribed units, important concepts,
                practical requirements and assessment format for
                each subject. Check for syllabus updates where
                applicable.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-semibold text-brand-700">
              2
            </span>
            <div>
              <h3 className="font-semibold text-ink-900">
                Study concepts before memorising answers
              </h3>
              <p className="mt-1 text-sm leading-7 text-ink-600">
                Use subject notes to understand definitions,
                principles, processes, examples and relationships
                between topics. For programming and numerical
                subjects, solve problems rather than relying only
                on written explanations.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-semibold text-brand-700">
              3
            </span>
            <div>
              <h3 className="font-semibold text-ink-900">
                Practise available previous year papers
              </h3>
              <p className="mt-1 text-sm leading-7 text-ink-600">
                Attempt questions within a reasonable time limit.
                Review your answers, identify topics that need
                more work and pay attention to the instructions
                and marks distribution shown in the paper.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-semibold text-brand-700">
              4
            </span>
            <div>
              <h3 className="font-semibold text-ink-900">
                Revise and test your understanding
              </h3>
              <p className="mt-1 text-sm leading-7 text-ink-600">
                Summarise key concepts, practise questions without
                looking at the answers and revisit weak areas.
                Include practical exercises or viva revision
                when required by your programme.
              </p>
            </div>
          </li>
        </ol>
      </section>

      {/* FAQ */}
      <section
        aria-labelledby="notes-faq-title"
        className="mb-8"
      >
        <div className="mb-5 flex items-center gap-3">
          <CircleHelp className="h-6 w-6 shrink-0 text-brand-600" />

          <h2
            id="notes-faq-title"
            className="text-xl font-semibold tracking-tight text-ink-900"
          >
            Frequently Asked Questions About Notes
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-card border border-ink-100 bg-white p-4"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-medium text-ink-900 marker:hidden">
                <span>{faq.question}</span>

                <span
                  aria-hidden="true"
                  className="shrink-0 text-lg text-brand-600 transition-transform group-open:rotate-45"
                >
                  +
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
      <div className="rounded-card border border-ink-100 bg-ink-50 p-5">
        <div className="flex items-start gap-3">
          <BookOpen className="mt-1 h-5 w-5 shrink-0 text-brand-600" />

          <div>
            <h2 className="font-semibold text-ink-900">
              Start with Your Course and Subject
            </h2>

            <p className="mt-2 text-sm leading-7 text-ink-600">
              Choose your course from the directory above and
              follow the university, semester and subject
              navigation to find the resources currently
              available. For exam preparation, combine suitable
              notes with the applicable syllabus and regular
              question practice.
            </p>

            <Link
              href="/papers"
              className="mt-4 inline-flex items-center gap-2 font-medium text-brand-700 hover:text-brand-800"
            >
              Explore Previous Year Papers
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
// import Link from "next/link";
// import { FileStack, ArrowRight, Layers, BookOpenCheck, FileCheck2 } from "lucide-react";
// import { Section } from "@/components/ui/Section";
// import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
// import { StatsStrip } from "@/components/ui/StatsStrip";
// import { CourseCard } from "@/components/courses/CourseCard";
// import { getCourses, getUniversitiesForCourse, getContentStats } from "@/lib/data";
// import { pageMetadata } from "@/lib/seo";

// const howOrganized = [
//   { icon: Layers, label: "Course → University → Semester → Subject" },
//   { icon: BookOpenCheck, label: "Each subject has its official syllabus" },
//   { icon: FileCheck2, label: "Notes and PYQs attached per subject" },
// ];

// export const metadata = pageMetadata({
//   title: "Notes",
//   description: "Find notes, PYQs, question banks, practicals and viva questions by course and university.",
//   path: "/notes",
// });

// export default async function NotesPage() {
//   const [courses, stats] = await Promise.all([getCourses(), getContentStats()]);
//   const counts = await Promise.all(
//     courses.map(async (c) => ({ slug: c.slug, count: (await getUniversitiesForCourse(c.slug)).length }))
//   );
//   const countBySlug = Object.fromEntries(counts.map((c) => [c.slug, c.count]));

//   return (
//     <Section
//       title="Notes"
//       description="Select your course to find notes, previous year papers, question banks, practicals and viva questions."
//     >
//       <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Notes" }]} />

//       <p className="mb-5 max-w-2xl text-ink-600">
//         Notes on SabkaCode follow your actual university structure — not a generic list. Pick your
//         course below, then your university, semester and subject, to reach exactly the syllabus,
//         notes and papers relevant to you.
//       </p>

//       <div className="mb-6">
//         <StatsStrip
//           stats={[
//             { value: stats.totalSubjects, label: "Subjects Covered" },
//             { value: stats.totalNotes, label: "Notes" },
//             { value: stats.totalPyqs, label: "Previous Papers" },
//             { value: stats.totalDetailedNotes, label: "Full Unit-Wise Notes" },
//           ]}
//         />
//       </div>

//       <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
//         {howOrganized.map((item) => (
//           <div
//             key={item.label}
//             className="flex items-center gap-2.5 rounded-card border border-ink-100 bg-white p-3 text-sm text-ink-700 shadow-card"
//           >
//             <item.icon className="h-4 w-4 shrink-0 text-brand-600" />
//             {item.label}
//           </div>
//         ))}
//       </div>

//       <Link
//         href="/papers"
//         className="mb-6 flex items-center justify-between gap-3 rounded-card border border-brand-200 bg-brand-50 p-4 hover:border-brand-300"
//       >
//         <div className="flex items-center gap-3">
//           <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white text-brand-600 shadow-card">
//             <FileStack className="h-5 w-5" />
//           </span>
//           <div>
//             <p className="font-medium text-ink-900">Looking for previous year papers?</p>
//             <p className="text-sm text-ink-500">Browse all papers by university, course and subject in one place.</p>
//           </div>
//         </div>
//         <ArrowRight className="h-4 w-4 shrink-0 text-brand-600" />
//       </Link>

//       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
//         {courses.map((course) => (
//           <CourseCard key={course.id} course={course} universityCount={countBySlug[course.slug]} />
//         ))}
//       </div>
//     </Section>
//   );
// }
