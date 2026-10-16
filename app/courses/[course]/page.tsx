import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BookOpenCheck,
  FileCheck2,
  ListChecks,
  Building2,
  GraduationCap,
  BookOpen,
  FileText,
  ClipboardCheck,
  ArrowRight,
  Target,
  CircleHelp,
  LibraryBig,
  SearchCheck,
} from "lucide-react";

import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { EmptyState } from "@/components/ui/EmptyState";
import { StatsStrip } from "@/components/ui/StatsStrip";
import { UniversityCard } from "@/components/university/UniversityCard";

import {
  getCourseBySlug,
  getCourses,
  getUniversitiesForCourse,
  getCourseStats,
} from "@/lib/data";

import { pageMetadata } from "@/lib/seo";

interface Props {
  params: { course: string };
}

const whatYoullFind = [
  {
    icon: BookOpenCheck,
    title: "Syllabus and Subject Structure",
    description:
      "Explore the available subject and syllabus information to organise your study plan around your applicable curriculum.",
  },
  {
    icon: FileCheck2,
    title: "Previous Year Question Papers",
    description:
      "Practise with available question papers to understand question formats and identify topics that need revision.",
  },
  {
    icon: ListChecks,
    title: "Subject-Wise Notes",
    description:
      "Use available written notes and unit-wise learning material to review concepts and prepare for examinations.",
  },
  {
    icon: Building2,
    title: "University-Specific Resources",
    description:
      "Select your university to reach the academic resources associated with your course and university listing.",
  },
];

const studyResources = [
  {
    icon: BookOpen,
    title: "Course Notes and Learning Material",
    description:
      "Subject notes can help you understand key concepts, review definitions and revise topics covered during your course. Select material relevant to your subject and academic requirements, and use it alongside your applicable syllabus.",
  },
  {
    icon: FileText,
    title: "Syllabus and Unit-Wise Preparation",
    description:
      "Start by identifying the prescribed units and learning objectives for each subject. Use the applicable university syllabus as your primary reference and organise your preparation around the topics it covers.",
  },
  {
    icon: ClipboardCheck,
    title: "Previous Year Papers and Question Banks",
    description:
      "Attempt available questions under realistic time limits, review your mistakes and identify concepts that require additional practice. Previous papers are useful revision tools, but they do not guarantee which questions will appear in future examinations.",
  },
  {
    icon: SearchCheck,
    title: "Practical, Viva and Subject Revision",
    description:
      "Where relevant to your programme, combine theoretical study with practical exercises, assignments and viva preparation. The resources you need will depend on your subject and the assessment requirements of your course.",
  },
];

const faqs = [
  {
    question: "How do I find the right university for my course?",
    answer:
      "Select the university associated with your enrolment from the available university cards. Then follow the course and subject navigation to find the resources listed for your programme. If your university is not listed, check back as the directory expands.",
  },
  {
    question: "Can I find semester-wise notes for this course?",
    answer:
      "Semester and subject resources depend on the data currently available for your selected course and university. Open the relevant university listing to see the available academic structure and study material.",
  },
  {
    question: "Are previous year question papers available?",
    answer:
      "Question papers are available for subjects for which paper data has been added. You can explore the Papers section or navigate through your course and university to find relevant listings.",
  },
  {
    question: "How should I use university study notes?",
    answer:
      "Use notes to understand concepts and revise prescribed topics. Compare the material with your current syllabus and use practice questions to test your understanding. Consult official university documents for authoritative curriculum information.",
  },
  {
    question: "Are these resources the official university syllabus?",
    answer:
      "Study notes and question papers are supplementary educational resources. Unless a document is specifically identified and verified as an official university publication, do not treat it as a substitute for official syllabi or academic notices.",
  },
  {
    question: "What if no university is listed for my course?",
    answer:
      "If no university is currently available, the page displays a message instead of inventing listings. You can return to the Courses directory to explore other available programmes.",
  },
  {
    question: "Will additional courses be supported in the future?",
    answer:
      "The directory is driven by the available course and university data. Additional programmes, including integrated courses, can be listed when their corresponding data and academic resources are added.",
  },
];

export async function generateStaticParams() {
  const courses = await getCourses();

  return courses.map((course) => ({
    course: course.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const course = await getCourseBySlug(params.course);

  if (!course) {
    return pageMetadata({
      title: "Course Not Found",
      description:
        "The requested course could not be found in the SabkaCode course directory.",
      path: `/courses/${params.course}`,
    });
  }

  const title = `${course.name} Notes, Syllabus & Study Material`;

  const description =
    `Explore ${course.name} university-wise study material on SabkaCode. ` +
    `Find available subjects, syllabus guidance, study notes and previous year question papers for your course.`;

  return pageMetadata({
    title,
    description,
    path: `/courses/${course.slug}`,
  });
}

export default async function CourseUniversitiesPage({
  params,
}: Props) {
  const course = await getCourseBySlug(params.course);

  if (!course) {
    notFound();
  }

  const [universities, stats] = await Promise.all([
    getUniversitiesForCourse(course.slug),
    getCourseStats(course.slug),
  ]);

  return (
    <Section
      title={`${course.name} — University-Wise Notes & Study Material`}
      description={
        course.description ||
        `Explore available universities, subjects, notes and previous year question papers for ${course.name} on SabkaCode.`
      }
    >
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Courses", href: "/courses" },
          { label: course.name },
        ]}
      />

      {/* Course introduction */}
      <div className="mb-7 max-w-4xl space-y-4">
        <p className="text-base leading-7 text-ink-700">
          Welcome to the {course.name} study resources directory
          on SabkaCode. This page helps you discover the
          universities currently listed for your course and
          navigate to the academic resources available for your
          programme. Instead of searching through unrelated
          material, you can start with your course, select your
          university and continue towards the relevant subjects.
        </p>

        {course.longDescription ? (
          <div className="space-y-3 text-ink-600">
            {course.longDescription
              .split("\n\n")
              .map((paragraph, index) => (
                <p
                  key={index}
                  className="leading-7"
                >
                  {paragraph}
                </p>
              ))}
          </div>
        ) : (
          <p className="leading-7 text-ink-600">
            Your study requirements depend on the programme,
            university and academic session. Use the applicable
            university syllabus to identify prescribed subjects
            and units, then select the relevant university below
            to explore the resources currently available on
            SabkaCode.
          </p>
        )}

        <p className="leading-7 text-ink-600">
          Depending on the available data, resources may include
          subject-wise notes, unit-wise learning material,
          syllabus information, previous year question papers,
          question banks and practical or viva preparation
          material. Availability can differ between universities
          and subjects.
        </p>
      </div>

      {/* Dynamic course statistics */}
      <section
        aria-label={`${course.name} resource statistics`}
        className="mb-8"
      >
        <StatsStrip
          stats={[
            {
              value: stats.totalUniversities,
              label: "Universities",
            },
            {
              value: course.totalSemesters,
              label: "Semesters",
            },
            {
              value: stats.totalSubjects,
              label: "Subjects",
            },
            {
              value: stats.totalResources,
              label: "Notes & PYQs",
            },
          ]}
        />
      </section>

      {/* Resource overview */}
      <section
        aria-labelledby="available-resources-title"
        className="mb-10"
      >
        <div className="mb-5">
          <h2
            id="available-resources-title"
            className="text-xl font-semibold tracking-tight text-ink-900"
          >
            What You Can Find for {course.name}
          </h2>

          <p className="mt-2 max-w-3xl leading-7 text-ink-600">
            Explore the types of academic material that may be
            available for your selected course. Actual coverage
            depends on the university, subject and resources
            currently published in the directory.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whatYoullFind.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-card border border-ink-100 bg-white p-4 shadow-card"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="font-semibold text-ink-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-ink-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* University selection */}
      <section
        id="universities"
        aria-labelledby="select-university-title"
        className="mb-10 scroll-mt-24"
      >
        <div className="mb-5">
          <h2
            id="select-university-title"
            className="text-xl font-semibold tracking-tight text-ink-900"
          >
            Select Your University for {course.name}
          </h2>

          <p className="mt-2 max-w-3xl leading-7 text-ink-600">
            Choose the university that matches your programme.
            Course structures, subject names, prescribed units
            and assessment requirements can differ across
            institutions. Selecting the correct university helps
            you reach the relevant academic resources.
          </p>
        </div>

        {universities.length === 0 ? (
          <EmptyState
            title="No universities are available for this course yet."
            description="More university listings and academic resources can be added as the directory expands."
          />
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {universities.map((university) => (
              <UniversityCard
                key={university.id}
                university={university}
                href={`/courses/${course.slug}/${university.slug}`}
              />
            ))}
          </div>
        )}
      </section>

      {/* Study guidance */}
      <section
        aria-labelledby="study-guidance-title"
        className="mb-10"
      >
        <div className="mb-5">
          <h2
            id="study-guidance-title"
            className="text-xl font-semibold tracking-tight text-ink-900"
          >
            Study Resources and Exam Preparation
          </h2>

          <p className="mt-2 max-w-3xl leading-7 text-ink-600">
            Effective preparation involves more than collecting
            notes. Start with your applicable syllabus, identify
            the topics you need to learn and use the available
            resources to understand and practise those topics.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {studyResources.map((resource) => {
            const Icon = resource.icon;

            return (
              <article
                key={resource.title}
                className="rounded-card border border-ink-100 bg-white p-5 shadow-card"
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

      {/* Exam preparation steps */}
      <section
        aria-labelledby="exam-preparation-title"
        className="mb-10 rounded-card border border-ink-100 bg-ink-50 p-5 sm:p-6"
      >
        <div className="mb-4 flex items-center gap-3">
          <Target className="h-6 w-6 shrink-0 text-brand-600" />

          <h2
            id="exam-preparation-title"
            className="text-xl font-semibold tracking-tight text-ink-900"
          >
            How to Prepare for University Examinations
          </h2>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-ink-900">
              1. Check the applicable syllabus
            </h3>

            <p className="mt-1 text-sm leading-7 text-ink-600">
              Confirm the academic session, prescribed units,
              subject requirements and assessment format.
              Use official university documents when checking
              syllabus information or academic updates.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-ink-900">
              2. Build a subject-wise study plan
            </h3>

            <p className="mt-1 text-sm leading-7 text-ink-600">
              Divide the prescribed topics into manageable
              study sessions. Spend additional time on concepts
              that are difficult to understand and schedule
              regular revision rather than leaving everything
              until the examination period.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-ink-900">
              3. Practise and review your answers
            </h3>

            <p className="mt-1 text-sm leading-7 text-ink-600">
              Use available question papers and question banks
              to test your understanding. Review mistakes,
              practise clear answer writing and include
              practical exercises where required by your
              programme.
            </p>
          </div>
        </div>
      </section>

      {/* Related resources */}
      <section
        aria-labelledby="related-resources-title"
        className="mb-10"
      >
        <div className="mb-4">
          <h2
            id="related-resources-title"
            className="text-xl font-semibold tracking-tight text-ink-900"
          >
            Explore More Study Resources
          </h2>

          <p className="mt-2 leading-7 text-ink-600">
            Continue to the relevant resource directory to
            discover available notes and previous year papers.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Link
            href="/notes"
            className="flex items-start gap-3 rounded-card border border-ink-100 bg-white p-4 transition-colors hover:border-brand-300"
          >
            <BookOpen className="mt-1 h-5 w-5 shrink-0 text-brand-600" />

            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-ink-900">
                Browse University Notes
              </h3>

              <p className="mt-1 text-sm leading-6 text-ink-600">
                Explore the course directory to find available
                subject notes and study material.
              </p>
            </div>

            <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-brand-600" />
          </Link>

          <Link
            href="/papers"
            className="flex items-start gap-3 rounded-card border border-ink-100 bg-white p-4 transition-colors hover:border-brand-300"
          >
            <FileText className="mt-1 h-5 w-5 shrink-0 text-brand-600" />

            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-ink-900">
                Browse Previous Year Papers
              </h3>

              <p className="mt-1 text-sm leading-6 text-ink-600">
                Find available question papers and practise
                examination-style questions.
              </p>
            </div>

            <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-brand-600" />
          </Link>
        </div>
      </section>

      {/* Frequently asked questions */}
      <section
        aria-labelledby="course-faq-title"
        className="mb-8"
      >
        <div className="mb-5 flex items-center gap-3">
          <CircleHelp className="h-6 w-6 shrink-0 text-brand-600" />

          <h2
            id="course-faq-title"
            className="text-xl font-semibold tracking-tight text-ink-900"
          >
            Frequently Asked Questions About {course.name}
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

      {/* Closing navigation */}
      <div className="rounded-card border border-ink-100 bg-white p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <GraduationCap className="mt-1 h-6 w-6 shrink-0 text-brand-600" />

          <div>
            <h2 className="font-semibold text-ink-900">
              Continue Your {course.name} Study Journey
            </h2>

            <p className="mt-2 text-sm leading-7 text-ink-600">
              Select your university above to continue to the
              relevant course resources. Check the applicable
              syllabus, explore available subject material and
              use regular question practice to support your
              academic preparation.
            </p>

            <Link
              href="/courses"
              className="mt-4 inline-flex items-center gap-2 font-medium text-brand-700 hover:text-brand-800"
            >
              Explore All Courses
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

// import { notFound } from "next/navigation";
// import { BookOpenCheck, FileCheck2, ListChecks, Building2 } from "lucide-react";
// import { Section } from "@/components/ui/Section";
// import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
// import { EmptyState } from "@/components/ui/EmptyState";
// import { StatsStrip } from "@/components/ui/StatsStrip";
// import { UniversityCard } from "@/components/university/UniversityCard";
// import { getCourseBySlug, getCourses, getUniversitiesForCourse, getCourseStats } from "@/lib/data";
// import { pageMetadata } from "@/lib/seo";

// interface Props {
//   params: { course: string };
// }

// const whatYoullFind = [
//   { icon: BookOpenCheck, label: "Unit-wise syllabus for every subject" },
//   { icon: FileCheck2, label: "Previous year question papers" },
//   { icon: ListChecks, label: "Full written notes where available" },
//   { icon: Building2, label: "Organised separately per university" },
// ];

// export async function generateStaticParams() {
//   const courses = await getCourses();
//   return courses.map((c) => ({ course: c.slug }));
// }

// export async function generateMetadata({ params }: Props) {
//   const course = await getCourseBySlug(params.course);
//   if (!course) return pageMetadata({ title: "Course not found" });
//   return pageMetadata({
//     title: course.name,
//     description: `Select a university to view ${course.name} resources.`,
//     path: `/courses/${course.slug}`,
//   });
// }

// export default async function CourseUniversitiesPage({ params }: Props) {
//   const course = await getCourseBySlug(params.course);
//   if (!course) notFound();

//   const [universities, stats] = await Promise.all([
//     getUniversitiesForCourse(course.slug),
//     getCourseStats(course.slug),
//   ]);

//   return (
//     <Section title={`${course.name} — Select University`} description={course.description}>
//       <Breadcrumbs
//         items={[{ label: "Home", href: "/" }, { label: "Courses", href: "/courses" }, { label: course.name }]}
//       />

//       {course.longDescription && (
//         <div className="mb-6 max-w-2xl space-y-3 text-ink-600">
//           {course.longDescription.split("\n\n").map((para, i) => (
//             <p key={i}>{para}</p>
//           ))}
//         </div>
//       )}

//       <div className="mb-8">
//         <StatsStrip
//           stats={[
//             { value: stats.totalUniversities, label: "Universities" },
//             { value: course.totalSemesters, label: "Semesters" },
//             { value: stats.totalSubjects, label: "Subjects" },
//             { value: stats.totalResources, label: "Notes & PYQs" },
//           ]}
//         />
//       </div>

//       <div className="mb-10">
//         <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink-500">
//           What You&apos;ll Find Here
//         </h2>
//         <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
//           {whatYoullFind.map((item) => (
//             <div
//               key={item.label}
//               className="flex items-center gap-2.5 rounded-card border border-ink-100 bg-white p-3 text-sm text-ink-700 shadow-card"
//             >
//               <item.icon className="h-4 w-4 shrink-0 text-brand-600" />
//               {item.label}
//             </div>
//           ))}
//         </div>
//       </div>

//       <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink-500">Select University</h2>
//       {universities.length === 0 ? (
//         <EmptyState
//           title="No universities are available for this course yet."
//           description="More universities are being added regularly."
//         />
//       ) : (
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
//           {universities.map((u) => (
//             <UniversityCard
//               key={u.id}
//               university={u}
//               href={`/courses/${course.slug}/${u.slug}`}
//             />
//           ))}
//         </div>
//       )}
//     </Section>
//   );
// }
