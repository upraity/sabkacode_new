
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { EmptyState } from "@/components/ui/EmptyState";
import { Badge } from "@/components/ui/Badge";
import { StatsStrip } from "@/components/ui/StatsStrip";
import {
  getCourses,
  getUniversities,
  getUniversityBySlug,
  getUniversitiesForCourse,
  getUniversityStats,
} from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const universities = await getUniversities();

  return universities.map((university) => ({
    slug: university.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const university = await getUniversityBySlug(params.slug);

  if (!university) {
    return pageMetadata({ title: "University Not Found" });
  }

  return pageMetadata({
    title: `${university.shortName} Courses & Subjects`,
    description: `${university.description} Explore available courses and academic resources for ${university.shortName} on SabkaCode.`,
    path: `/universities/${university.slug}`,
  });
}

const resourceGuides = [
  {
    title: "Explore your course",
    description:
      "Select your course from the list below to open its dedicated page and review the academic information currently available.",
  },
  {
    title: "Check subjects and syllabus",
    description:
      "Compare subject names, codes and semester details with your official university syllabus before relying on academic information.",
  },
  {
    title: "Find study materials",
    description:
      "Where available, explore notes and previous-year questions through the relevant course and subject pages.",
  },
];

const faqs = [
  {
    question: "What is this university page for?",
    answer:
      "This page provides university information and lists the courses associated with the institution in SabkaCode's data. It also shows available content statistics when subject data is present.",
  },
  {
    question: "How can I find my course?",
    answer:
      "Scroll to the Available Courses section and select the course that matches your programme. The course card opens the corresponding course page for this university.",
  },
  {
    question: "Why are no courses listed?",
    answer:
      "The university may be listed before course information has been added or associated with it. If no courses appear, course data is not currently available for this university in the website's data source.",
  },
  {
    question: "What do the statistics represent?",
    answer:
      "The Courses, Subjects and Notes & PYQs figures come from the university statistics function. They represent the counts returned by the current data source and do not guarantee that every subject has resources.",
  },
  {
    question: "Are notes and previous-year questions available for every subject?",
    answer:
      "Not necessarily. Resource availability depends on the content published for each course and subject. Open the relevant course page to explore the resources currently available.",
  },
  {
    question: "How do I verify my syllabus or subject code?",
    answer:
      "Compare the information with the latest official syllabus, curriculum document or examination notification published by your university. Course structures and subject codes can change over time.",
  },
  {
    question: "What does Coming soon mean?",
    answer:
      "The Coming soon badge indicates that the university's status is marked as coming soon in the website's data. The availability of academic content may be limited.",
  },
  {
    question: "Can I visit the university's official website?",
    answer:
      "If an official website URL is provided for the university, use the Official Website link near the university description. Confirm important academic information directly with the institution.",
  },
];

export default async function UniversityDetailPage({ params }: Props) {
  const university = await getUniversityBySlug(params.slug);

  if (!university) {
    notFound();
  }

  const [allCourses, stats] = await Promise.all([
    getCourses(),
    getUniversityStats(university.slug),
  ]);

  const offeredChecks = await Promise.all(
    allCourses.map(async (course) => ({
      course,
      offered: (
        await getUniversitiesForCourse(course.slug)
      ).some((item) => item.slug === university.slug),
    })),
  );

  const offeredCourses = offeredChecks
    .filter((item) => item.offered)
    .map((item) => item.course);

  return (
    <Section
      title={university.shortName}
      description={university.name}
    >
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Universities", href: "/universities" },
          { label: university.shortName },
        ]}
      />

      {/* University overview */}
      <section className="mb-8">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="muted">{university.location}</Badge>

          {university.status === "coming-soon" && (
            <Badge tone="muted">Coming soon</Badge>
          )}
        </div>

        <div className="mt-4 max-w-4xl space-y-4">
          <p className="leading-7 text-ink-600">
            {university.description}
          </p>

          <p className="leading-7 text-ink-600">
            Welcome to the {university.shortName} academic resources page
            on SabkaCode. This page helps you discover the courses currently
            associated with this university and navigate to their dedicated
            pages. From there, you can review the academic information and
            learning resources available for your programme.
          </p>

          <p className="leading-7 text-ink-600">
            University-specific information is important because syllabi,
            course structures, semester requirements and subject codes can
            vary between institutions. Even programmes with similar names
            may follow different academic requirements.
          </p>
        </div>

        {university.websiteUrl && (
          <div className="mt-5">
            <a
              href={university.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-brand-200 px-4 py-2.5 text-sm font-semibold text-brand-600 transition hover:border-brand-400 hover:bg-brand-50"
            >
              Official Website
              <span aria-hidden="true">↗</span>
            </a>

            <p className="mt-2 text-xs leading-5 text-ink-600">
              Opens the university website in a new tab.
            </p>
          </div>
        )}
      </section>

      {/* Academic statistics */}
      {stats.totalSubjects > 0 && (
        <section className="mb-10">
          <h2 className="mb-4 text-xl font-bold text-ink-900">
            Academic Content Overview
          </h2>

          <StatsStrip
            stats={[
              { value: stats.totalCourses, label: "Courses" },
              { value: stats.totalSubjects, label: "Subjects" },
              { value: stats.totalResources, label: "Notes & PYQs" },
            ]}
          />

          <p className="mt-3 text-sm leading-6 text-ink-600">
            These figures reflect the content counts currently returned
            for this university. The availability of individual subjects,
            notes and previous-year questions may vary.
          </p>
        </section>
      )}

      {/* Course directory */}
      <section
        id="available-courses"
        className="mb-14 scroll-mt-24"
      >
        <h2 className="text-2xl font-bold tracking-tight text-ink-900">
          Available Courses
        </h2>

        <p className="mt-3 max-w-3xl leading-7 text-ink-600">
          Browse the courses associated with {university.shortName}.
          Select a course to open its dedicated page and explore the
          information currently available for your programme.
        </p>

        {offeredCourses.length === 0 ? (
          <div className="mt-5">
            <EmptyState
              title="No courses added for this university yet."
              description="This university is listed on SabkaCode, but course data is not currently associated with it. Please check again later as the available content may expand."
            />
          </div>
        ) : (
          <>
            <p className="mt-4 text-sm text-ink-600">
              {offeredCourses.length}{" "}
              {offeredCourses.length === 1
                ? "course is"
                : "courses are"}{" "}
              currently listed for this university.
            </p>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {offeredCourses.map((course) => (
                <Link
                  key={course.id}
                  href={`/courses/${course.slug}/${university.slug}`}
                  className="group flex min-h-20 items-center justify-between gap-3 rounded-card border border-ink-100 bg-white p-4 shadow-card transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
                >
                  <span className="font-medium leading-6 text-ink-800 transition group-hover:text-brand-600">
                    {course.name}
                  </span>

                  <span
                    aria-hidden="true"
                    className="shrink-0 text-lg text-ink-600 transition group-hover:translate-x-0.5 group-hover:text-brand-600"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </>
        )}
      </section>

      {/* Resource guide */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold tracking-tight text-ink-900">
          Explore Academic Resources
        </h2>

        <p className="mt-3 max-w-3xl leading-7 text-ink-600">
          Once you have identified your course, use the available course
          and subject pages to find information relevant to your studies.
          The exact resources depend on the content published for each
          programme.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
          {resourceGuides.map((guide) => (
            <article
              key={guide.title}
              className="rounded-card border border-ink-200 bg-white p-5 shadow-card"
            >
              <h3 className="text-lg font-semibold text-ink-900">
                {guide.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-ink-600">
                {guide.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Academic accuracy */}
      <section className="mb-14 rounded-card border border-ink-200 bg-white p-6">
        <h2 className="text-2xl font-bold tracking-tight text-ink-900">
          Verify Your Course and Subject Details
        </h2>

        <div className="mt-4 space-y-4 leading-7 text-ink-600">
          <p>
            Before using academic information, check that the university,
            programme, semester and subject code match your requirements.
            Similar course names do not necessarily mean identical
            syllabi or examination patterns.
          </p>

          <p>
            Universities may revise their curricula and subject codes.
            When accuracy matters, compare the available information with
            the latest official syllabus, curriculum document or
            examination notification published by your university.
          </p>

          <p>
            SabkaCode helps students discover and navigate academic
            resources. For official examination requirements, course
            regulations and formal academic submissions, refer to your
            university's current published information.
          </p>
        </div>
      </section>

      {/* Frequently asked questions */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold tracking-tight text-ink-900">
          Frequently Asked Questions
        </h2>

        <p className="mb-6 mt-3 max-w-3xl leading-7 text-ink-600">
          Find answers to common questions about university information,
          course listings, academic resources and syllabus verification.
        </p>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-card border border-ink-200 bg-white p-5"
            >
              <h3 className="font-semibold leading-6 text-ink-900">
                {faq.question}
              </h3>

              <p className="mt-2 leading-7 text-ink-600">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Closing section */}
      <section className="border-t border-ink-200 pt-8">
        <h2 className="text-xl font-bold text-ink-900">
          Continue Exploring SabkaCode
        </h2>

        <p className="mt-3 max-w-4xl leading-7 text-ink-600">
          Start by selecting the course relevant to your studies, then
          review the subjects and learning resources available for that
          programme. Confirm important details against official university
          documents to ensure they apply to your course and academic session.
        </p>

        <Link
          href="/universities"
          className="mt-5 inline-flex items-center gap-2 font-semibold text-brand-600 hover:underline"
        >
          ← Browse All Universities
        </Link>
      </section>
    </Section>
  );
}


// import { notFound } from "next/navigation";
// import Link from "next/link";
// import { Section } from "@/components/ui/Section";
// import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
// import { EmptyState } from "@/components/ui/EmptyState";
// import { Badge } from "@/components/ui/Badge";
// import { StatsStrip } from "@/components/ui/StatsStrip";
// import {
//   getCourses,
//   getUniversities,
//   getUniversityBySlug,
//   getUniversitiesForCourse,
//   getUniversityStats,
// } from "@/lib/data";
// import { pageMetadata } from "@/lib/seo";

// interface Props {
//   params: { slug: string };
// }

// export async function generateStaticParams() {
//   const universities = await getUniversities();
//   return universities.map((u) => ({ slug: u.slug }));
// }

// export async function generateMetadata({ params }: Props) {
//   const university = await getUniversityBySlug(params.slug);
//   if (!university) return pageMetadata({ title: "Not found" });
//   return pageMetadata({
//     title: university.shortName,
//     description: university.description,
//     path: `/universities/${university.slug}`,
//   });
// }

// export default async function UniversityDetailPage({ params }: Props) {
//   const university = await getUniversityBySlug(params.slug);
//   if (!university) notFound();

//   const [allCourses, stats] = await Promise.all([getCourses(), getUniversityStats(university.slug)]);
//   const offeredChecks = await Promise.all(
//     allCourses.map(async (c) => ({
//       course: c,
//       offered: (await getUniversitiesForCourse(c.slug)).some((u) => u.slug === university.slug),
//     }))
//   );
//   const offeredCourses = offeredChecks.filter((c) => c.offered).map((c) => c.course);

//   return (
//     <Section title={university.shortName} description={university.name}>
//       <Breadcrumbs
//         items={[
//           { label: "Home", href: "/" },
//           { label: "Universities", href: "/universities" },
//           { label: university.shortName },
//         ]}
//       />

//       <div className="flex flex-wrap items-center gap-2">
//         <Badge tone="muted">{university.location}</Badge>
//         {university.status === "coming-soon" && <Badge tone="muted">Coming soon</Badge>}
//       </div>

//       <p className="mt-4 max-w-2xl text-ink-600">{university.description}</p>

//       {university.websiteUrl && (
//         <a href={university.websiteUrl} className="mt-2 inline-block text-sm font-medium text-brand-600">
//           Official website ↗
//         </a>
//       )}

//       {stats.totalSubjects > 0 && (
//         <div className="mt-6">
//           <StatsStrip
//             stats={[
//               { value: stats.totalCourses, label: "Courses" },
//               { value: stats.totalSubjects, label: "Subjects" },
//               { value: stats.totalResources, label: "Notes & PYQs" },
//             ]}
//           />
//         </div>
//       )}

//       <div className="mt-8">
//         <h2 className="text-lg font-semibold text-ink-900">Available Courses</h2>
//         {offeredCourses.length === 0 ? (
//           <div className="mt-3">
//             <EmptyState
//               title="No courses added for this university yet."
//               description="This university is on the platform, but course data hasn't been added yet."
//             />
//           </div>
//         ) : (
//           <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
//             {offeredCourses.map((course) => (
//               <Link
//                 key={course.id}
//                 href={`/courses/${course.slug}/${university.slug}`}
//                 className="rounded-card border border-ink-100 bg-white py-4 text-center font-medium text-ink-800 shadow-card hover:border-brand-300"
//               >
//                 {course.name}
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>
//     </Section>
//   );
// }
