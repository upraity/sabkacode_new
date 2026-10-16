
import { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  BookOpen,
  FileText,
  GraduationCap,
  ClipboardCheck,
  Target,
  Search,
  ArrowRight,
  CheckCircle2,
  Library,
} from "lucide-react";

import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { EmptyState } from "@/components/ui/EmptyState";
import { StatsStrip } from "@/components/ui/StatsStrip";
import { SubjectCard } from "@/components/resources/SubjectCard";
import { SpecializationFilter } from "@/components/resources/SpecializationFilter";
import {
  getBranchBySlug,
  getCourseBySlug,
  getSubjects,
  getUniversityBySlug,
} from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

interface Props {
  params: {
    course: string;
    university: string;
    branch: string;
    semester: string;
  };
  searchParams: {
    specialization?: string;
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
      title: "Semester Study Resources Not Found",
    });
  }

  const semester = Number(params.semester);

  if (
    !Number.isInteger(semester) ||
    semester < 1 ||
    semester > course.totalSemesters
  ) {
    return pageMetadata({
      title: "Semester Not Found",
    });
  }

  const branchLabel = await resolveBranchLabel(
    params.course,
    params.university,
    params.branch,
    course.hasBranches
  );

  if (!branchLabel) {
    return pageMetadata({
      title: "Branch Not Found",
    });
  }

  return pageMetadata({
    title: `${course.name} Semester ${semester} Subjects, Notes & Syllabus | ${university.shortName}`,
    description: `Explore Semester ${semester} subjects for ${course.name} (${branchLabel}) at ${university.name}. Find available subject-wise syllabus, study notes and previous year question papers on SabkaCode.`,
    path: `/courses/${course.slug}/${university.slug}/${params.branch}/${semester}`,
  });
}

const preparationSteps = [
  {
    icon: ClipboardCheck,
    title: "Review the syllabus",
    description:
      "Check the topics and units listed for each subject. Use the applicable university syllabus to plan what you need to study and revise.",
  },
  {
    icon: BookOpen,
    title: "Study subject-wise",
    description:
      "Open each subject page and review the resources available. Organise your notes by unit and keep track of topics that need more attention.",
  },
  {
    icon: FileText,
    title: "Practise written answers",
    description:
      "Use relevant questions and available previous year papers to practise structuring answers, explaining concepts and managing examination time.",
  },
  {
    icon: Target,
    title: "Track revision",
    description:
      "Maintain a checklist of completed units, difficult concepts and topics to revisit before your semester examinations.",
  },
];

const faqs = [
  {
    question: "How can I find subjects for my semester?",
    answer:
      "Browse the subject cards listed on this page. Open a subject to check its available syllabus, notes and previous year question papers. If specialization filters are available, you can also use them to narrow down the subject list.",
  },
  {
    question: "Can I find semester-wise syllabus on SabkaCode?",
    answer:
      "Syllabus information is available where it has been published for a subject. Open the relevant subject page to check its content, and verify official syllabus requirements with the university's latest academic documents.",
  },
  {
    question: "Are complete unit-wise notes available for every subject?",
    answer:
      "Not necessarily. Availability varies by subject. Some subjects may have detailed unit-wise notes, while others may have limited resources or content that is still being added.",
  },
  {
    question: "How should I prepare using previous year papers?",
    answer:
      "Use available papers to practise answering questions under timed conditions. Review your answers, identify topics that need improvement and revisit the relevant syllabus units. Past papers are practice resources and do not guarantee future questions.",
  },
  {
    question: "Why is a subject missing from the list?",
    answer:
      "The subject may not have been added to the current database for this course, university, branch and semester. Check the other semesters if appropriate, or revisit this page as more content becomes available.",
  },
  {
    question: "How do I filter subjects by specialization?",
    answer:
      "When multiple specializations are present in the semester data, a specialization filter appears above the subject list. Select an available option to narrow down the subjects. Clear the filter or return to the unfiltered list to see all subjects.",
  },
];

export default async function SubjectsPage({
  params,
  searchParams,
}: Props) {
  const [course, university] = await Promise.all([
    getCourseBySlug(params.course),
    getUniversityBySlug(params.university),
  ]);

  if (!course || !university) {
    notFound();
  }

  const semester = Number(params.semester);

  if (
    !Number.isInteger(semester) ||
    semester < 1 ||
    semester > course.totalSemesters
  ) {
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

  const allSubjects = await getSubjects({
    courseSlug: course.slug,
    universitySlug: university.slug,
    branchSlug: params.branch,
    semester,
  });

  const specializations = Array.from(
    new Set(
      allSubjects
        .map((subject) => subject.specialization)
        .filter((specialization): specialization is string =>
          Boolean(specialization)
        )
    )
  );

  const activeSpecialization =
    searchParams.specialization &&
    specializations.includes(searchParams.specialization)
      ? searchParams.specialization
      : undefined;

  const subjects = activeSpecialization
    ? allSubjects.filter(
        (subject) => subject.specialization === activeSpecialization
      )
    : allSubjects;

  const subjectsWithNotes = allSubjects.filter(
    (subject) =>
      subject.unitNotes && subject.unitNotes.length > 0
  ).length;

  const subjectsWithSyllabus = allSubjects.filter(
    (subject) =>
      subject.syllabus && subject.syllabus.trim().length > 0
  ).length;

  const subjectsWithoutNotes =
    allSubjects.length - subjectsWithNotes;

  return (
    <Section
      title={`${course.name} Semester ${semester} — Subjects, Notes & Study Material`}
      description={`Explore Semester ${semester} subjects for ${branchLabel} at ${university.shortName}. Browse available syllabus details, study notes and previous year question papers.`}
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
          {
            label: branchLabel,
            href: `/courses/${course.slug}/${university.slug}/${params.branch}`,
          },
          { label: `Semester ${semester}` },
        ]}
      />

      {/* Semester introduction */}
      <div className="mt-6 space-y-4 text-sm leading-7 text-ink-600 sm:text-base">
        <p>
          Welcome to the{" "}
          <strong className="font-semibold text-ink-800">
            {course.name} Semester {semester}
          </strong>{" "}
          study-resource page for {university.name}. This page brings
          together the subjects currently listed for {branchLabel} so
          you can find relevant academic resources without navigating
          through unrelated course pages.
        </p>

        <p>
          Each subject can have its own syllabus details, study notes
          and other learning materials. Open a subject card to check
          exactly what is available. Resource coverage can differ from
          one subject to another, so use the subject-level information
          to decide which material you need.
        </p>

        <p>
          For effective semester preparation, begin with the syllabus,
          identify the units you need to cover and use the available
          notes to reinforce your understanding. Previous year
          question papers, where available, can help you practise
          answer writing and assess your preparation.
        </p>
      </div>

      {/* Database-driven statistics */}
      {allSubjects.length > 0 && (
        <div className="my-8">
          <StatsStrip
            stats={[
              {
                value: allSubjects.length,
                label: "Subjects",
              },
              {
                value: subjectsWithSyllabus,
                label: "With Syllabus",
              },
              {
                value: subjectsWithNotes,
                label: "With Unit Notes",
              },
            ]}
          />
        </div>
      )}

      {/* Subject listing */}
      <section
        id="semester-subjects"
        className="scroll-mt-6"
        aria-labelledby="subjects-heading"
      >
        <div className="mb-5">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-brand-600" />
            <h2
              id="subjects-heading"
              className="text-xl font-semibold text-ink-900"
            >
              Semester {semester} Subject List
            </h2>
          </div>

          <p className="mt-2 text-sm leading-6 text-ink-600">
            {allSubjects.length > 0
              ? `Explore ${allSubjects.length} listed ${
                  allSubjects.length === 1 ? "subject" : "subjects"
                }${activeSpecialization ? ` in ${activeSpecialization}` : ""}. Open a subject to review its available learning material.`
              : "Subject information for this semester is not available yet."}
          </p>
        </div>

        {specializations.length > 1 && (
          <div className="mb-5 rounded-card border border-ink-100 bg-ink-50/50 p-4">
            <h3 className="mb-1 text-sm font-semibold text-ink-800">
              Filter by specialization
            </h3>
            <p className="mb-3 text-sm text-ink-600">
              Choose a specialization to narrow down the displayed
              subjects.
            </p>

            <Suspense fallback={null}>
              <SpecializationFilter options={specializations} />
            </Suspense>
          </div>
        )}

        {subjects.length === 0 ? (
          <EmptyState
            title={
              allSubjects.length === 0
                ? "No subjects are available for this semester yet."
                : "No subjects match this specialization."
            }
            description={
              allSubjects.length === 0
                ? "Subject data for this semester has not been added yet. You can explore other course resources while this section is updated."
                : "Try selecting a different specialization or clearing the current filter to see all listed subjects."
            }
          />
        ) : (
          <>
            {activeSpecialization && (
              <p className="mb-4 text-sm text-ink-600">
                Showing {subjects.length} of {allSubjects.length} subjects.
              </p>
            )}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {subjects.map((subject) => (
                <SubjectCard
                  key={subject.id}
                  subject={subject}
                  href={`/courses/${course.slug}/${university.slug}/${params.branch}/${semester}/${subject.slug}`}
                />
              ))}
            </div>
          </>
        )}
      </section>

      {/* Resource availability explanation */}
      {allSubjects.length > 0 && (
        <section className="mt-10 rounded-card border border-ink-100 bg-white p-5 shadow-card sm:p-6">
          <div className="flex items-start gap-3">
            <GraduationCap className="mt-1 h-6 w-6 shrink-0 text-brand-600" />

            <div>
              <h2 className="text-lg font-semibold text-ink-900">
                Resources Available for This Semester
              </h2>

              <p className="mt-2 text-sm leading-7 text-ink-600">
                The current semester data includes {allSubjects.length}{" "}
                {allSubjects.length === 1 ? "subject" : "subjects"}.
                Syllabus information is listed for {subjectsWithSyllabus}{" "}
                {subjectsWithSyllabus === 1 ? "subject" : "subjects"},
                while unit-wise notes are available for {subjectsWithNotes}{" "}
                {subjectsWithNotes === 1 ? "subject" : "subjects"}.
                {subjectsWithoutNotes > 0
                  ? ` ${subjectsWithoutNotes} ${
                      subjectsWithoutNotes === 1 ? "subject does" : "subjects do"
                    } not currently have unit notes recorded in this data.`
                  : " Every listed subject currently has unit notes recorded."}
              </p>

              <p className="mt-3 text-sm leading-7 text-ink-600">
                These figures describe the information currently recorded
                on SabkaCode. They do not necessarily indicate that every
                topic in the official syllabus has been covered. Open
                individual subject pages to review their actual content.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Study workflow */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-ink-900">
          How to Prepare for Semester {semester}
        </h2>

        <p className="mt-3 text-sm leading-7 text-ink-600 sm:text-base">
          A structured preparation routine helps you balance syllabus
          coverage, understanding, practice and revision. Adapt the
          following steps to your subjects, available study time and
          examination schedule.
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

      {/* Syllabus and notes guidance */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-ink-900">
          How to Use Subject Notes and Syllabus
        </h2>

        <div className="mt-4 space-y-4 text-sm leading-7 text-ink-600 sm:text-base">
          <p>
            <strong className="font-semibold text-ink-800">
              Start with the syllabus.
            </strong>{" "}
            Before relying on notes, compare the listed topics with the
            latest applicable university syllabus. This helps you identify
            the required units and avoid overlooking topics that may not
            appear in a short summary.
          </p>

          <p>
            <strong className="font-semibold text-ink-800">
              Use notes to reinforce learning.
            </strong>{" "}
            Read a topic, write down its main ideas in your own words and
            revisit difficult concepts. For subjects involving calculations,
            data interpretation or practical applications, practise the
            relevant question types rather than only memorising definitions.
          </p>

          <p>
            <strong className="font-semibold text-ink-800">
              Revise with questions.
            </strong>{" "}
            Where previous year papers are available, attempt questions
            after studying the corresponding topics. Check whether your
            answers are complete, clearly organised and relevant to the
            question being asked.
          </p>
        </div>
      </section>

      {/* Practical revision checklist */}
      <section className="mt-12 rounded-card border border-ink-100 bg-ink-50/50 p-5 sm:p-6">
        <h2 className="text-lg font-semibold text-ink-900">
          Semester Revision Checklist
        </h2>

        <p className="mt-2 text-sm leading-7 text-ink-600">
          Use this checklist as a simple guide while preparing each subject.
        </p>

        <ul className="mt-4 space-y-3">
          {[
            "Review the applicable syllabus and identify all required units.",
            "Open each listed subject and check its available study material.",
            "Make concise revision notes for important concepts and difficult topics.",
            "Practise relevant questions and available previous year papers.",
            "Revisit weak areas and reserve time for final revision.",
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
      </section>

      {/* Related internal links */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-ink-900">
          Explore More Study Resources
        </h2>

        <p className="mt-2 text-sm leading-7 text-ink-600">
          Continue to other study sections on SabkaCode or return to the
          course overview to explore another semester or university.
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
              Browse the available notes collection for your studies.
            </p>

            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-700">
              Explore notes <ArrowRight className="h-4 w-4" />
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
              Find available papers to support exam practice and revision.
            </p>

            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-700">
              Explore papers <ArrowRight className="h-4 w-4" />
            </span>
          </Link>

          <Link
            href="/courses"
            className="group rounded-card border border-ink-100 bg-white p-5 shadow-card transition hover:border-brand-300 hover:shadow-md"
          >
            <Search className="h-6 w-6 text-brand-600" />

            <h3 className="mt-3 font-semibold text-ink-900 group-hover:text-brand-700">
              Browse Courses
            </h3>

            <p className="mt-2 text-sm leading-6 text-ink-600">
              Explore other courses and university-wise resources.
            </p>

            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-700">
              View courses <ArrowRight className="h-4 w-4" />
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
          Common questions about semester subjects, syllabus, notes and
          examination preparation.
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

      {/* Bottom navigation */}
      <section className="mt-12 rounded-card border border-ink-100 bg-white p-5 shadow-card sm:p-6">
        <h2 className="text-lg font-semibold text-ink-900">
          Continue Your {course.name} Preparation
        </h2>

        <p className="mt-2 text-sm leading-7 text-ink-600">
          Select a subject above to review its available material. If a
          resource is missing, explore the wider notes collection or
          return to the course overview. Always verify official
          examination requirements against the latest university notices.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href={`/courses/${course.slug}/${university.slug}/${params.branch}`}
            className="inline-flex items-center gap-2 rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-sm font-medium text-ink-700 transition hover:border-brand-300 hover:text-brand-700"
          >
            All semesters
          </Link>

          <Link
            href={`/courses/${course.slug}`}
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            Course overview
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Section>
  );
}


// import { Suspense } from "react";
// import { notFound } from "next/navigation";
// import { Section } from "@/components/ui/Section";
// import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
// import { EmptyState } from "@/components/ui/EmptyState";
// import { StatsStrip } from "@/components/ui/StatsStrip";
// import { SubjectCard } from "@/components/resources/SubjectCard";
// import { SpecializationFilter } from "@/components/resources/SpecializationFilter";
// import { getBranchBySlug, getCourseBySlug, getSubjects, getUniversityBySlug } from "@/lib/data";
// import { pageMetadata } from "@/lib/seo";

// interface Props {
//   params: { course: string; university: string; branch: string; semester: string };
//   searchParams: { specialization?: string };
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
//   return pageMetadata({
//     title: `Semester ${params.semester} Subjects — ${university.shortName}`,
//     path: `/courses/${course.slug}/${university.slug}/${params.branch}/${params.semester}`,
//   });
// }

// export default async function SubjectsPage({ params, searchParams }: Props) {
//   const course = await getCourseBySlug(params.course);
//   const university = await getUniversityBySlug(params.university);
//   if (!course || !university) notFound();

//   const semester = parseInt(params.semester, 10);
//   if (isNaN(semester) || semester < 1 || semester > course.totalSemesters) notFound();

//   const branchLabel = await resolveBranchLabel(params.course, params.university, params.branch, course.hasBranches);
//   if (!branchLabel) notFound();

//   const allSubjects = await getSubjects({
//     courseSlug: course.slug,
//     universitySlug: university.slug,
//     branchSlug: params.branch,
//     semester,
//   });

//   // Only show the specialization filter when this semester actually has
//   // more than one specialization tag in use — otherwise it's just noise.
//   const specializations = Array.from(
//     new Set(allSubjects.map((s) => s.specialization).filter((s): s is string => Boolean(s)))
//   );
//   const activeSpecialization =
//     searchParams.specialization && specializations.includes(searchParams.specialization)
//       ? searchParams.specialization
//       : undefined;

//   const subjects = activeSpecialization
//     ? allSubjects.filter((s) => s.specialization === activeSpecialization)
//     : allSubjects;

//   const subjectsWithNotes = allSubjects.filter((s) => s.unitNotes && s.unitNotes.length > 0).length;
//   const subjectsWithSyllabus = allSubjects.filter((s) => s.syllabus && s.syllabus.trim().length > 0).length;

//   return (
//     <Section title={`Semester ${semester} — Subjects`} description={`${branchLabel} · ${university.shortName}`}>
//       <Breadcrumbs
//         items={[
//           { label: "Home", href: "/" },
//           { label: "Courses", href: "/courses" },
//           { label: course.name, href: `/courses/${course.slug}` },
//           { label: university.shortName, href: `/courses/${course.slug}/${university.slug}` },
//           { label: branchLabel, href: `/courses/${course.slug}/${university.slug}/${params.branch}` },
//           { label: `Semester ${semester}` },
//         ]}
//       />

//       {allSubjects.length > 0 && (
//         <>
//           <p className="mb-5 max-w-2xl text-ink-600">
//             Semester {semester} of {course.name} at {university.shortName} has {allSubjects.length} subject
//             {allSubjects.length === 1 ? "" : "s"} listed below
//             {subjectsWithSyllabus > 0 ? `, ${subjectsWithSyllabus} with a full syllabus breakdown` : ""}
//             {subjectsWithNotes > 0 ? ` and ${subjectsWithNotes} with complete unit-wise notes` : ""}. Open a
//             subject to see its syllabus, notes and previous year papers.
//           </p>

//           <div className="mb-6">
//             <StatsStrip
//               stats={[
//                 { value: allSubjects.length, label: "Subjects" },
//                 { value: subjectsWithSyllabus, label: "With Syllabus" },
//                 { value: subjectsWithNotes, label: "With Full Notes" },
//               ]}
//             />
//           </div>
//         </>
//       )}

//       {specializations.length > 1 && (
//         <Suspense fallback={null}>
//           <SpecializationFilter options={specializations} />
//         </Suspense>
//       )}

//       {subjects.length === 0 ? (
//         <EmptyState
//           title="No subjects are available for this semester yet."
//           description="Subject data for this semester hasn't been added yet."
//         />
//       ) : (
//         <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
//           {subjects.map((subject) => (
//             <SubjectCard
//               key={subject.id}
//               subject={subject}
//               href={`/courses/${course.slug}/${university.slug}/${params.branch}/${semester}/${subject.slug}`}
//             />
//           ))}
//         </div>
//       )}
//     </Section>
//   );
// }
