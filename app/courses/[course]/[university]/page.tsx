
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import {
  GitBranch,
  ArrowRight,
  BookOpen,
  Building2,
} from "lucide-react";

import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { EmptyState } from "@/components/ui/EmptyState";
import {
  getBranches,
  getCourseBySlug,
  getUniversityBySlug,
} from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

interface Props {
  params: {
    course: string;
    university: string;
  };
}

export async function generateMetadata({ params }: Props) {
  const [course, university] = await Promise.all([
    getCourseBySlug(params.course),
    getUniversityBySlug(params.university),
  ]);

  if (!course || !university) {
    return pageMetadata({
      title: "University Not Found",
      description: "The requested course or university could not be found.",
    });
  }

  return pageMetadata({
    title: `${course.name} at ${university.shortName} — Branches & Study Material`,
    description: `Explore ${course.name} branches at ${university.name}. Select your branch to find available syllabus, notes, previous year question papers and study resources on SabkaCode.`,
    path: `/courses/${course.slug}/${university.slug}`,
  });
}

export default async function UniversityBranchesPage({ params }: Props) {
  const [course, university] = await Promise.all([
    getCourseBySlug(params.course),
    getUniversityBySlug(params.university),
  ]);

  if (!course || !university) {
    notFound();
  }

  // Courses without branches should open their general resource page.
  if (!course.hasBranches) {
    redirect(`/courses/${course.slug}/${university.slug}/general`);
  }

  const branches = await getBranches(course.slug, university.slug);

  return (
    <Section
      title={`${course.name} at ${university.shortName} — Select Branch`}
      description={`Choose your ${course.name} branch at ${university.name} to explore available study materials and academic resources.`}
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
          },
        ]}
      />

      <div className="mb-8 mt-6 rounded-card border border-ink-100 bg-white p-5 shadow-card sm:p-6">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
            <Building2 className="h-5 w-5" />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink-900">
              Study resources for {course.name}
            </h2>
            <p className="mt-2 text-sm leading-6 text-ink-600">
              Select the relevant branch below to continue. Available
              resources may include syllabus details, subject notes and
              previous year question papers, depending on the data published
              for that branch.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-ink-900">
            Select Your Branch
          </h2>
          <p className="mt-1 text-sm text-ink-500">
            Choose a branch to view its available resources.
          </p>
        </div>

        {branches.length > 0 && (
          <span className="shrink-0 rounded-full bg-ink-50 px-3 py-1 text-xs font-medium text-ink-600">
            {branches.length}{" "}
            {branches.length === 1 ? "branch" : "branches"}
          </span>
        )}
      </div>

      {branches.length === 0 ? (
        <EmptyState
          title="No branches are available yet"
          description={`Branch information for ${course.name} at ${university.shortName} has not been added yet. Please check again later.`}
        />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((branch) => (
            <Link
              key={branch.id}
              href={`/courses/${course.slug}/${university.slug}/${branch.slug}`}
              className="group flex items-center justify-between gap-3 rounded-card border border-ink-100 bg-white p-4 shadow-card transition hover:border-brand-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            >
              <div className="flex min-w-0 items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 transition group-hover:bg-brand-100">
                  <GitBranch className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <h3 className="font-semibold leading-6 text-ink-800 group-hover:text-brand-700">
                    {branch.name}
                  </h3>
                  <p className="mt-1 flex items-center gap-1 text-xs text-ink-500">
                    <BookOpen className="h-3.5 w-3.5" />
                    View study resources
                  </p>
                </div>
              </div>

              <ArrowRight className="h-4 w-4 shrink-0 text-ink-400 transition group-hover:translate-x-1 group-hover:text-brand-600" />
            </Link>
          ))}
        </div>
      )}

      <section className="mt-10 rounded-card border border-ink-100 bg-ink-50/50 p-5 sm:p-6">
        <h2 className="text-base font-semibold text-ink-900">
          How to find your study material
        </h2>

        <ol className="mt-3 list-inside list-decimal space-y-2 text-sm leading-6 text-ink-600">
          <li>Select your course and university.</li>
          <li>Choose the relevant branch from the list above.</li>
          <li>Explore the subjects and resources available on that page.</li>
          <li>Check the syllabus and previous year papers to plan your preparation.</li>
        </ol>

        <p className="mt-4 text-sm leading-6 text-ink-600">
          Resource availability depends on the information currently published
          on SabkaCode. If a particular subject or document is not listed, it
          may not have been added yet.
        </p>
      </section>

      <nav
        aria-label="Related study resources"
        className="mt-8 flex flex-wrap gap-3"
      >
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
          Explore study notes
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

// import { notFound, redirect } from "next/navigation";
// import Link from "next/link";
// import { Section } from "@/components/ui/Section";
// import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
// import { EmptyState } from "@/components/ui/EmptyState";
// import { getBranches, getCourseBySlug, getUniversityBySlug } from "@/lib/data";
// import { pageMetadata } from "@/lib/seo";

// interface Props {
//   params: { course: string; university: string };
// }

// export async function generateMetadata({ params }: Props) {
//   const [course, university] = await Promise.all([
//     getCourseBySlug(params.course),
//     getUniversityBySlug(params.university),
//   ]);
//   if (!course || !university) return pageMetadata({ title: "Not found" });
//   return pageMetadata({
//     title: `${course.name} at ${university.shortName}`,
//     path: `/courses/${course.slug}/${university.slug}`,
//   });
// }

// export default async function UniversityBranchesPage({ params }: Props) {
//   const [course, university] = await Promise.all([
//     getCourseBySlug(params.course),
//     getUniversityBySlug(params.university),
//   ]);
//   if (!course || !university) notFound();

//   if (!course.hasBranches) {
//     redirect(`/courses/${course.slug}/${university.slug}/general`);
//   }

//   const branches = await getBranches(course.slug, university.slug);

//   return (
//     <Section
//       title={`${course.name} at ${university.shortName} — Select Branch`}
//       description="Choose your branch to continue."
//     >
//       <Breadcrumbs
//         items={[
//           { label: "Home", href: "/" },
//           { label: "Courses", href: "/courses" },
//           { label: course.name, href: `/courses/${course.slug}` },
//           { label: university.shortName },
//         ]}
//       />
//       {branches.length === 0 ? (
//         <EmptyState
//           title="No branches are available for this university yet."
//           description="This university has been added but branch data isn't ready yet."
//         />
//       ) : (
//         <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
//           {branches.map((branch) => (
//             <Link
//               key={branch.id}
//               href={`/courses/${course.slug}/${university.slug}/${branch.slug}`}
//               className="rounded-card border border-ink-100 bg-white p-4 font-medium text-ink-800 shadow-card hover:border-brand-300"
//             >
//               {branch.name}
//             </Link>
//           ))}
//         </div>
//       )}
//     </Section>
//   );
// }
