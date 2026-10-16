
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StatsStrip } from "@/components/ui/StatsStrip";
import { UniversityCard } from "@/components/university/UniversityCard";
import { getUniversities, getContentStats } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Universities",
  description:
    "Explore universities on SabkaCode and find university-specific courses, subjects, syllabi and academic resources. Browse available university content in one place.",
  path: "/universities",
});

const benefits = [
  {
    title: "University-specific information",
    description:
      "Academic resources are organised around individual universities because course structures, syllabi and subject codes can differ between institutions.",
  },
  {
    title: "Courses and subjects in one place",
    description:
      "Explore the available university information to identify relevant courses and subjects without mixing details from different academic programmes.",
  },
  {
    title: "A growing academic collection",
    description:
      "The university directory reflects the content currently available on SabkaCode, with additional institutions and academic resources able to be added over time.",
  },
];

const browsingSteps = [
  {
    number: "01",
    title: "Find your university",
    description:
      "Browse the university directory and identify the institution that matches your course or academic programme.",
  },
  {
    number: "02",
    title: "Open its details",
    description:
      "Select a university card to visit its dedicated page and review the information available for that institution.",
  },
  {
    number: "03",
    title: "Check your course and subjects",
    description:
      "Compare course names, subject details and subject codes with your official syllabus before using the information for academic work.",
  },
];

const faqs = [
  {
    question: "What is the Universities page on SabkaCode?",
    answer:
      "The Universities page is a directory of institutions currently listed on SabkaCode. It helps students find university-specific academic information and navigate to the dedicated page for an institution.",
  },
  {
    question: "How do I find my university?",
    answer:
      "Browse the university cards displayed on this page and select the institution you are looking for. Its dedicated page may contain the courses, subjects and other academic information currently available on SabkaCode.",
  },
  {
    question: "Why is content organised separately for each university?",
    answer:
      "Universities may follow different syllabi, course structures, examination patterns and subject codes, even when course names are similar. Organising information by university helps students identify resources relevant to their institution.",
  },
  {
    question: "What does Active Universities mean?",
    answer:
      "The Active Universities figure counts the university records whose status is marked as active in the website's data. It represents the number of active university records, not a guarantee that every course or subject is available.",
  },
  {
    question: "Does every university have complete course and subject information?",
    answer:
      "Not necessarily. The available information can differ by institution. Open the relevant university page to check its current content and verify important academic details against official university resources.",
  },
  {
    question: "How can I verify a subject code or syllabus?",
    answer:
      "Compare the information on SabkaCode with the latest official syllabus, course outline or academic notification published by your university. Official institutional documents should be treated as the final reference.",
  },
  {
    question: "Are more universities added to SabkaCode?",
    answer:
      "The directory can grow as additional university records and academic resources are added to the website. The current listing shows the university records returned by the website's data source.",
  },
  {
    question: "What should I do if my university is not listed?",
    answer:
      "Check the directory again later and look for any contact or feedback option available on SabkaCode. A university not appearing in this directory should not be assumed to be unsupported permanently.",
  },
];

export default async function UniversitiesPage() {
  const [universities, stats] = await Promise.all([
    getUniversities(),
    getContentStats(),
  ]);

  const activeCount = universities.filter(
    (university) => university.status === "active",
  ).length;

  return (
    <Section
      title="Universities"
      description="Explore university-specific academic resources, courses and subjects available on SabkaCode."
    >
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Universities" },
        ]}
      />

      {/* Introduction */}
      <div className="mb-8 max-w-4xl space-y-4">
        <p className="leading-7 text-ink-600">
          Welcome to the SabkaCode Universities directory. This page brings
          together the universities currently listed on the platform and
          provides a starting point for finding academic information relevant
          to your institution. Choose a university to explore the resources
          available on its dedicated page.
        </p>

        <p className="leading-7 text-ink-600">
          Academic information is not always interchangeable between
          universities. Institutions may follow different syllabi, semester
          structures, course requirements and subject codes. Even two
          programmes with similar names can have different academic
          requirements. For this reason, SabkaCode organises its content
          separately for each university.
        </p>

        <p className="leading-7 text-ink-600">
          The directory currently includes{" "}
          <strong className="text-ink-900">{activeCount}</strong>{" "}
          {activeCount === 1 ? "active university" : "active universities"}.
          The actual availability of courses and subjects can vary by
          institution, so open the relevant university page to check the
          information available for your academic needs.
        </p>
      </div>

      {/* Statistics */}
      <div className="mb-10">
        <StatsStrip
          stats={[
            { value: activeCount, label: "Active Universities" },
            { value: stats.totalCourses, label: "Courses" },
            { value: stats.totalSubjects, label: "Subjects" },
          ]}
        />
      </div>

      {/* University directory */}
      <section id="university-directory" className="mb-14 scroll-mt-24">
        <div className="mb-5">
          <h2 className="text-2xl font-bold tracking-tight text-ink-900">
            Explore Universities
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-ink-600">
            Select a university below to open its dedicated page. Review the
            available academic information and confirm that the institution,
            course and subject details match your requirements.
          </p>
        </div>

        {universities.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {universities.map((university) => (
              <UniversityCard
                key={university.id}
                university={university}
                href={`/universities/${university.slug}`}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-card border border-ink-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-ink-900">
              No universities listed yet
            </h3>
            <p className="mt-2 leading-7 text-ink-600">
              There are currently no university records to display. Please
              check back later as the directory is updated.
            </p>
          </div>
        )}
      </section>

      {/* Benefits */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold tracking-tight text-ink-900">
          Why Browse Universities on SabkaCode?
        </h2>
        <p className="mt-3 max-w-3xl leading-7 text-ink-600">
          Finding the right academic information starts with identifying the
          correct institution. The university directory helps keep that
          process organised.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-card border border-ink-200 bg-white p-5 shadow-card"
            >
              <h3 className="text-lg font-semibold text-ink-900">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-ink-600">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* How to browse */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold tracking-tight text-ink-900">
          How to Find University-Specific Resources
        </h2>
        <p className="mt-3 max-w-3xl leading-7 text-ink-600">
          Follow these steps to locate relevant academic information and
          reduce the chance of confusing details from different institutions.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
          {browsingSteps.map((step) => (
            <article
              key={step.number}
              className="rounded-card border border-ink-200 bg-white p-5"
            >
              <p className="text-sm font-bold tracking-wider text-brand-600">
                STEP {step.number}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-ink-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Academic accuracy */}
      <section className="mb-14 rounded-card border border-ink-200 bg-white p-6">
        <h2 className="text-2xl font-bold tracking-tight text-ink-900">
          Check Your University's Official Academic Information
        </h2>

        <div className="mt-4 space-y-4 leading-7 text-ink-600">
          <p>
            Before relying on any course or subject information, confirm that
            it applies to your university, programme, semester and academic
            session. Similar course titles do not necessarily mean identical
            syllabi or examination requirements.
          </p>

          <p>
            Subject codes, course structures and syllabi can change when a
            university revises its curriculum. Where a code or course detail
            is important, compare it with the latest official syllabus,
            examination notice or academic document published by your
            institution.
          </p>

          <p>
            SabkaCode is intended to help students discover and navigate
            academic resources. For formal decisions, examination
            requirements and official submissions, your university's current
            published information should take priority.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold tracking-tight text-ink-900">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 mb-6 max-w-3xl leading-7 text-ink-600">
          Answers to common questions about the university directory,
          available academic content and checking university-specific
          information.
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

      {/* Closing content */}
      <section className="border-t border-ink-200 pt-8">
        <h2 className="text-xl font-bold text-ink-900">
          Find the Right Academic Resources
        </h2>
        <p className="mt-3 max-w-4xl leading-7 text-ink-600">
          Start by selecting your university from the directory above, then
          review the courses and subjects available for that institution.
          Checking the university name, course structure and subject codes
          can help you identify more relevant academic information. SabkaCode
          aims to make university-specific resources easier to discover as
          its collection grows.
        </p>
      </section>
    </Section>
  );
}


// import { Section } from "@/components/ui/Section";
// import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
// import { StatsStrip } from "@/components/ui/StatsStrip";
// import { UniversityCard } from "@/components/university/UniversityCard";
// import { getUniversities, getContentStats } from "@/lib/data";
// import { pageMetadata } from "@/lib/seo";

// export const metadata = pageMetadata({
//   title: "Universities",
//   description: "All universities currently supported on SabkaCode.",
//   path: "/universities",
// });

// export default async function UniversitiesPage() {
//   const [universities, stats] = await Promise.all([getUniversities(), getContentStats()]);
//   const activeCount = universities.filter((u) => u.status === "active").length;

//   return (
//     <Section title="Universities" description="SabkaCode is built to support many universities, not just one.">
//       <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Universities" }]} />

//       <p className="mb-5 max-w-2xl text-ink-600">
//         Content on SabkaCode is organised separately for each university, since syllabi and subject
//         codes often differ even for the same course name. {activeCount} universit
//         {activeCount === 1 ? "y currently has" : "ies currently have"} active content, with more
//         being added.
//       </p>

//       <div className="mb-8">
//         <StatsStrip
//           stats={[
//             { value: activeCount, label: "Active Universities" },
//             { value: stats.totalCourses, label: "Courses" },
//             { value: stats.totalSubjects, label: "Subjects" },
//           ]}
//         />
//       </div>

//       <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
//         {universities.map((u) => (
//           <UniversityCard key={u.id} university={u} href={`/universities/${u.slug}`} />
//         ))}
//       </div>
//     </Section>
//   );
// }
