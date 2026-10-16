
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  BookOpen,
  FileText,
  GraduationCap,
  ArrowRight,
  Layers3,
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
      title: "Study Resources Not Found",
      description: "The requested course or university could not be found.",
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
      description: "The requested branch or study-resource page could not be found.",
    });
  }

  return pageMetadata({
    title: `${course.name} ${branchLabel === "General" ? "" : `— ${branchLabel} `}Notes, Syllabus & PYQs at ${university.shortName}`,
    description: `Explore semester-wise ${course.name} study resources for ${branchLabel} at ${university.name}. Find available subject notes, syllabus information and previous year question papers on SabkaCode.`,
    path: `/courses/${course.slug}/${university.slug}/${params.branch}`,
  });
}

export default async function SemesterListPage({ params }: Props) {
  const [course, university] = await Promise.all([
    getCourseBySlug(params.course),
    getUniversityBySlug(params.university),
  ]);

  if (!course || !university) {
    notFound();
  }

  const branchLabel = await resolveBranchLabel(
    params.course,
    params.university,
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
    { length: course.totalSemesters },
    (_, index) => index + 1
  );

  return (
    <Section
      title={`${branchLabel} — Semester-Wise Notes & Study Material`}
      description={`${course.name} at ${university.shortName}: explore semester-wise subjects and available academic resources.`}
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

      <div className="mt-6 rounded-card border border-ink-100 bg-white p-5 shadow-card sm:p-6">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
            <GraduationCap className="h-6 w-6" />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink-900">
              {course.name} at {university.shortName}
            </h2>

            <p className="mt-2 text-sm leading-6 text-ink-600">
              Browse the semesters for {branchLabel}. Select a semester to
              explore the subjects and study materials available for this
              course and university. Resource availability depends on the
              content currently published on SabkaCode.
            </p>
          </div>
        </div>
      </div>

      <div className="my-8">
        <StatsStrip
          stats={[
            { value: course.totalSemesters, label: "Semesters" },
            { value: stats.totalSubjects, label: "Subjects Covered" },
            { value: stats.totalResources, label: "Notes & PYQs" },
            {
              value: stats.totalDetailedNotes,
              label: "Full Unit-Wise Notes",
            },
          ]}
        />
      </div>

      <section aria-labelledby="semester-heading">
        <div className="mb-4">
          <h2
            id="semester-heading"
            className="text-xl font-semibold text-ink-900"
          >
            Select Your Semester
          </h2>

          <p className="mt-1 text-sm leading-6 text-ink-600">
            Choose your semester to find available subjects, notes and
            previous year question papers.
          </p>
        </div>

        {semesters.length === 0 ? (
          <div className="rounded-card border border-ink-100 bg-white p-6 text-center">
            <Layers3 className="mx-auto h-8 w-8 text-ink-400" />

            <h3 className="mt-3 font-semibold text-ink-800">
              Semester information is not available
            </h3>

            <p className="mt-2 text-sm text-ink-600">
              Semester details for this course have not been configured yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {semesters.map((semester) => (
              <Link
                key={semester}
                href={`/courses/${course.slug}/${university.slug}/${params.branch}/${semester}`}
                className="group flex min-h-28 flex-col items-center justify-center rounded-card border border-ink-100 bg-white p-4 text-center shadow-card transition hover:border-brand-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition group-hover:bg-brand-100">
                  <BookOpen className="h-5 w-5" />
                </div>

                <span className="mt-3 font-semibold text-ink-800 group-hover:text-brand-700">
                  Semester {semester}
                </span>

                <span className="mt-1 flex items-center gap-1 text-xs text-ink-500">
                  Explore resources
                  <ArrowRight className="h-3 w-3 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className="mt-10 rounded-card border border-ink-100 bg-ink-50/50 p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <FileText className="mt-1 h-5 w-5 shrink-0 text-brand-600" />

          <div>
            <h2 className="font-semibold text-ink-900">
              How to use semester-wise study material
            </h2>

            <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-6 text-ink-600">
              <li>Select the semester you are currently studying.</li>
              <li>Review the subjects listed for that semester.</li>
              <li>Check available notes, syllabus details and previous year papers.</li>
              <li>Use the relevant materials to plan revision and exam preparation.</li>
            </ul>

            <p className="mt-3 text-sm leading-6 text-ink-600">
              Not every subject will necessarily have all resource types.
              Available content may vary by course, university, branch and
              semester.
            </p>
          </div>
        </div>
      </section>

      <nav
        aria-label="Related study resources"
        className="mt-8 flex flex-wrap gap-3"
      >
        <Link
          href={`/courses/${course.slug}`}
          className="rounded-lg border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-700 transition hover:border-brand-300 hover:text-brand-700"
        >
          More {course.name} resources
        </Link>

        <Link
          href="/courses"
          className="rounded-lg border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-700 transition hover:border-brand-300 hover:text-brand-700"
        >
          Browse all courses
        </Link>

        <Link
          href="/notes"
          className="rounded-lg border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-700 transition hover:border-brand-300 hover:text-brand-700"
        >
          Study notes
        </Link>

        <Link
          href="/papers"
          className="rounded-lg border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-700 transition hover:border-brand-300 hover:text-brand-700"
        >
          Previous year papers
        </Link>
      </nav>
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
