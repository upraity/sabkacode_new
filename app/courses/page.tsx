import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  Layers,
  FileText,
  ClipboardCheck,
  ArrowRight,
  Building2,
  Search,
  Target,
  LibraryBig,
  CircleHelp,
  CheckCircle2,
} from "lucide-react";

import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CourseCard } from "@/components/courses/CourseCard";
import { getCourses, getUniversitiesForCourse } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Courses",
  description:
    "Explore BBA, BCA, MBA, MCA and other available courses on SabkaCode. Discover university-wise study material, semester-wise subjects, notes, syllabus resources and previous year question papers for AKTU, DBRAU and other supported universities.",
  path: "/courses",
});

const learningSteps = [
  {
    icon: GraduationCap,
    title: "Choose Your Course",
    description:
      "Browse the available degree programmes and select the course that matches your academic goals.",
  },
  {
    icon: Building2,
    title: "Select Your University",
    description:
      "Explore the university listings available for your selected course and check the applicable curriculum.",
  },
  {
    icon: Layers,
    title: "Find Your Semester and Subject",
    description:
      "Follow the available semester and subject structure to locate relevant academic resources.",
  },
  {
    icon: BookOpen,
    title: "Study and Practise",
    description:
      "Use available notes, syllabus information, question papers and other learning resources to prepare.",
  },
];

const resourceGuides = [
  {
    icon: BookOpen,
    title: "University-Wise Study Notes",
    description:
      "Study notes help you review concepts, understand definitions and revise topics covered in your subjects. Choose material relevant to your course, university and academic session rather than relying entirely on generic notes.",
  },
  {
    icon: FileText,
    title: "Syllabus and Subject Information",
    description:
      "A syllabus provides the framework for your preparation. Check the applicable subject names, prescribed units and assessment requirements before organising your study schedule.",
  },
  {
    icon: ClipboardCheck,
    title: "Previous Year Question Papers",
    description:
      "Practise with available previous year question papers to become familiar with question formats, improve time management and identify areas that need further revision. Past questions do not guarantee future examination questions.",
  },
  {
    icon: Target,
    title: "Exam Preparation Resources",
    description:
      "Combine concept learning, written practice, revision and subject-specific exercises. For technical programmes, include coding, numerical problem-solving and practical work whenever your syllabus requires them.",
  },
];

const courseGuides = [
  {
    title: "Management and Business Courses",
    description:
      "Management programmes focus on business knowledge, organisational processes, communication and decision-making. Depending on the course and university, students may study accounting, economics, marketing, finance, human resources, operations and business strategy.",
    examples: "BBA, MBA and other available management programmes",
  },
  {
    title: "Computer Applications Courses",
    description:
      "Computer applications programmes develop knowledge of computing, programming and information technology. Depending on the curriculum, students may work with programming languages, databases, data structures, computer networks, operating systems and software development.",
    examples: "BCA, MCA and other available computing programmes",
  },
  {
    title: "Other Academic Programmes",
    description:
      "Additional degree programmes can cover engineering, pharmacy, science, commerce and other academic disciplines. Subject structures, practical requirements and eligibility criteria differ by programme and institution, so always consult the applicable university information.",
    examples: "Other courses currently listed in the directory",
  },
];

const faqs = [
  {
    question: "What courses are available on SabkaCode?",
    answer:
      "SabkaCode displays the courses returned by its current course directory. Available programmes can include management and computer applications courses such as BBA, BCA, MBA and MCA, depending on the active listings. Check the course cards above for the current options.",
  },
  {
    question: "How can I find notes for my course?",
    answer:
      "Select your course and follow the available university, semester and subject navigation. You can then check which notes and other study resources are available for that particular subject.",
  },
  {
    question: "Which universities are supported?",
    answer:
      "SabkaCode includes university-specific listings, including AKTU and DBRAU where the relevant course data is available. University availability varies by programme. Open a course to check its current university options.",
  },
  {
    question: "Can I find semester-wise study material?",
    answer:
      "Where semester and subject data is available, you can follow the course directory to find relevant academic resources. Always confirm that the semester and subject match your own programme and applicable syllabus.",
  },
  {
    question: "Are previous year question papers available?",
    answer:
      "Previous year question papers are available for subjects where paper data has been added to the platform. You can also visit the Papers section to explore the available question papers.",
  },
  {
    question: "How should I prepare for university examinations?",
    answer:
      "Begin with your applicable syllabus, divide the prescribed topics into a study plan, revise concepts using relevant notes and practise questions. Use previous year papers as practice material and include practical exercises where required.",
  },
  {
    question: "Are course notes a replacement for the official syllabus?",
    answer:
      "No. Notes and other resources are supplementary learning material. Use official university syllabi and academic notices as your primary references for prescribed topics, assessment requirements and syllabus updates.",
  },
  {
    question: "Will integrated courses be added in the future?",
    answer:
      "Additional course listings can be introduced as the corresponding programme and university data becomes available. Refer to the live course directory for the programmes currently listed.",
  },
];

export default async function CoursesPage() {
  const courses = await getCourses();

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
      title="Courses"
      description="Explore available courses, university-wise academic resources, semester-wise subjects, study notes and previous year question papers on SabkaCode."
    >
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Courses" },
        ]}
      />

      {/* Introduction */}
      <div className="mb-8 max-w-4xl space-y-3">
        <p className="text-base leading-7 text-ink-700">
          Welcome to the SabkaCode Courses directory. This page
          helps students discover the academic programmes
          currently listed on the platform and navigate to
          relevant university-specific study resources.
          Whether you are looking for management studies,
          computer applications or another available programme,
          begin by selecting the course that matches your
          academic requirements.
        </p>

        <p className="leading-7 text-ink-600">
          After choosing a course, explore the universities
          available for that programme and continue to the
          relevant semester and subject. Depending on the
          available data, you may find study notes, syllabus
          information, question banks, practical resources and
          previous year question papers.
        </p>

        <p className="leading-7 text-ink-600">
          SabkaCode is organised around course and subject
          discovery rather than a generic collection of
          educational material. Selecting the correct
          university and subject helps you identify resources
          that are more relevant to your curriculum and
          examination preparation.
        </p>
      </div>

      {/* Course directory */}
      <section
        id="available-courses"
        aria-labelledby="available-courses-title"
        className="mb-10 scroll-mt-24"
      >
        <div className="mb-5">
          <h2
            id="available-courses-title"
            className="text-xl font-semibold tracking-tight text-ink-900"
          >
            Explore Available Courses
          </h2>

          <p className="mt-2 max-w-3xl leading-7 text-ink-600">
            Select a course below to see its available university
            listings. Course availability, subject coverage and
            study resources may vary by programme and university.
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
              Please check back later for available courses and
              their associated study resources.
            </p>
          </div>
        )}
      </section>

      {/* How the directory works */}
      <section
        aria-labelledby="how-courses-work-title"
        className="mb-10"
      >
        <div className="mb-5">
          <h2
            id="how-courses-work-title"
            className="text-xl font-semibold tracking-tight text-ink-900"
          >
            How to Find Your University Study Material
          </h2>

          <p className="mt-2 max-w-3xl leading-7 text-ink-600">
            Use the course directory as your starting point.
            Following the available academic structure makes it
            easier to identify relevant subjects and resources.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {learningSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className="rounded-card border border-ink-100 bg-white p-4 shadow-card"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <Icon className="h-5 w-5" />
                </div>

                <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                  Step {index + 1}
                </p>

                <h3 className="mt-1 font-semibold text-ink-900">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-ink-600">
                  {step.description}
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
          <Building2 className="h-6 w-6 shrink-0 text-brand-600" />

          <h2
            id="university-guidance-title"
            className="text-xl font-semibold tracking-tight text-ink-900"
          >
            University-Wise Course and Subject Information
          </h2>
        </div>

        <p className="leading-7 text-ink-600">
          The same degree may have different subject structures,
          semester arrangements and assessment requirements at
          different universities. For this reason, choose the
          university associated with your own programme before
          using course-specific learning material.
        </p>

        <div className="mt-4 space-y-3">
          <p className="leading-7 text-ink-600">
            <strong className="text-ink-900">
              AKTU:
            </strong>{" "}
            Students associated with Dr. A.P.J. Abdul Kalam
            Technical University should check the relevant
            programme, semester and applicable syllabus when
            preparing for their examinations.
          </p>

          <p className="leading-7 text-ink-600">
            <strong className="text-ink-900">
              DBRAU:
            </strong>{" "}
            Students associated with Dr. Bhimrao Ambedkar
            University, Agra should similarly verify their course
            structure, subject details and academic session
            before using study material.
          </p>
        </div>

        <p className="mt-4 text-sm leading-6 text-ink-500">
          The universities shown for a particular course depend
          on the current directory data. Consult official
          university documents for authoritative syllabus
          information.
        </p>
      </section>

      {/* Educational programme guides */}
      <section
        aria-labelledby="programme-guides-title"
        className="mb-10"
      >
        <div className="mb-5">
          <h2
            id="programme-guides-title"
            className="text-xl font-semibold tracking-tight text-ink-900"
          >
            Understand Different Course Categories
          </h2>

          <p className="mt-2 max-w-3xl leading-7 text-ink-600">
            Understanding a programme's general academic focus
            can help you plan your learning. The following
            descriptions are introductory guides; actual
            subjects depend on the specific university and
            course curriculum.
          </p>
        </div>

        <div className="space-y-4">
          {courseGuides.map((guide) => {
            return (
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

                <p className="mt-3 text-sm leading-6 text-ink-500">
                  <strong className="text-ink-700">
                    Examples:
                  </strong>{" "}
                  {guide.examples}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Resources */}
      <section
        aria-labelledby="study-resources-title"
        className="mb-10"
      >
        <div className="mb-5">
          <h2
            id="study-resources-title"
            className="text-xl font-semibold tracking-tight text-ink-900"
          >
            Study Resources for University Students
          </h2>

          <p className="mt-2 max-w-3xl leading-7 text-ink-600">
            Good examination preparation combines syllabus
            understanding, concept revision and regular
            practice. Explore the resources available for
            your course and use each resource according to
            your learning needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {resourceGuides.map((resource) => {
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

        <Link
          href="/notes"
          className="mt-5 inline-flex items-center gap-2 font-medium text-brand-700 hover:text-brand-800"
        >
          Browse Notes and Study Material
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      {/* Previous year papers */}
      <section
        aria-labelledby="previous-papers-title"
        className="mb-10"
      >
        <Link
          href="/papers"
          className="flex items-center justify-between gap-3 rounded-card border border-brand-200 bg-brand-50 p-4 transition-colors hover:border-brand-300"
        >
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white text-brand-600 shadow-card">
              <FileText className="h-5 w-5" />
            </span>

            <div className="min-w-0">
              <h2
                id="previous-papers-title"
                className="font-semibold text-ink-900"
              >
                Explore Previous Year Question Papers
              </h2>

              <p className="mt-1 text-sm leading-6 text-ink-600">
                Find available papers by course, university and
                subject to practise examination-style questions.
              </p>
            </div>
          </div>

          <ArrowRight className="h-5 w-5 shrink-0 text-brand-600" />
        </Link>
      </section>

      {/* Preparation guidance */}
      <section
        aria-labelledby="preparation-guide-title"
        className="mb-10 rounded-card border border-ink-100 bg-ink-50 p-5 sm:p-6"
      >
        <div className="mb-3 flex items-center gap-3">
          <CheckCircle2 className="h-6 w-6 shrink-0 text-brand-600" />

          <h2
            id="preparation-guide-title"
            className="text-xl font-semibold tracking-tight text-ink-900"
          >
            A Practical Approach to Semester Preparation
          </h2>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-ink-900">
              1. Start with the applicable syllabus
            </h3>
            <p className="mt-1 text-sm leading-7 text-ink-600">
              Identify prescribed units and topics, note the
              assessment requirements and divide the syllabus
              into manageable study sessions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-ink-900">
              2. Understand concepts and practise actively
            </h3>
            <p className="mt-1 text-sm leading-7 text-ink-600">
              Read relevant notes, explain concepts in your own
              words and practise questions. For computing
              subjects, include coding and problem-solving
              wherever applicable.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-ink-900">
              3. Review your progress
            </h3>
            <p className="mt-1 text-sm leading-7 text-ink-600">
              Attempt available question papers, check your
              mistakes and revise weaker topics before moving
              on to the next stage of preparation.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section
        aria-labelledby="courses-faq-title"
        className="mb-8"
      >
        <div className="mb-5 flex items-center gap-3">
          <CircleHelp className="h-6 w-6 shrink-0 text-brand-600" />

          <h2
            id="courses-faq-title"
            className="text-xl font-semibold tracking-tight text-ink-900"
          >
            Frequently Asked Questions About Courses
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

      {/* Closing CTA */}
      <div className="rounded-card border border-ink-100 bg-white p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <LibraryBig className="mt-1 h-5 w-5 shrink-0 text-brand-600" />

          <div>
            <h2 className="font-semibold text-ink-900">
              Find Your Course and Start Learning
            </h2>

            <p className="mt-2 text-sm leading-7 text-ink-600">
              Explore the available courses, select your
              university and open the subjects relevant to your
              programme. Use the available study resources
              alongside the applicable official syllabus to
              organise your preparation.
            </p>

            <div className="mt-4 flex flex-wrap gap-4">
              <Link
                href="/notes"
                className="inline-flex items-center gap-2 font-medium text-brand-700 hover:text-brand-800"
              >
                Browse Notes
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/papers"
                className="inline-flex items-center gap-2 font-medium text-brand-700 hover:text-brand-800"
              >
                Browse Question Papers
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
// import { Section } from "@/components/ui/Section";
// import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
// import { CourseCard } from "@/components/courses/CourseCard";
// import { getCourses, getUniversitiesForCourse } from "@/lib/data";
// import { pageMetadata } from "@/lib/seo";

// export const metadata = pageMetadata({
//   title: "Courses",
//   description: "Browse courses like B.Tech, BCA, MCA and B.Pharm across supported universities.",
//   path: "/courses",
// });

// export default async function CoursesPage() {
//   const courses = await getCourses();
//   const counts = await Promise.all(
//     courses.map(async (c) => ({ slug: c.slug, count: (await getUniversitiesForCourse(c.slug)).length }))
//   );
//   const countBySlug = Object.fromEntries(counts.map((c) => [c.slug, c.count]));

//   return (
//     <Section title="Courses" description="Pick a course to see which universities and resources are available.">
//       <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Courses" }]} />
//       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
//         {courses.map((course) => (
//           <CourseCard key={course.id} course={course} universityCount={countBySlug[course.slug]} />
//         ))}
//       </div>
//     </Section>
//   );
// }
