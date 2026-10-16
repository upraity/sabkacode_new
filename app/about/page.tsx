
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code2,
  FileText,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LinkButton } from "@/components/ui/Button";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About SabkaCode | Free Study Resources for Students",
  description:
    "Learn about SabkaCode, a student-focused educational platform offering study notes, university previous year papers, coding projects and useful learning tools.",
  path: "/about",
});

const highlights = [
  {
    icon: BookOpen,
    title: "Study Notes",
    description:
      "Explore subject-wise notes, programming concepts and study material to support your coursework.",
    href: "/notes",
    linkText: "Browse notes",
  },
  {
    icon: FileText,
    title: "Previous Year Papers",
    description:
      "Find available university question papers to understand exam patterns and practise important topics.",
    href: "/papers",
    linkText: "Explore papers",
  },
  {
    icon: Code2,
    title: "Projects & Tools",
    description:
      "Discover practical coding projects and useful online tools for learning and everyday tasks.",
    href: "/projects",
    linkText: "Explore projects",
  },
  {
    icon: GraduationCap,
    title: "University Resources",
    description:
      "Browse university information, courses and related academic resources in one place.",
    href: "/universities",
    linkText: "Browse universities",
  },
];

const principles = [
  {
    icon: BookOpen,
    title: "Student-focused learning",
    description:
      "We organize educational resources to help students spend less time searching and more time learning.",
  },
  {
    icon: ShieldCheck,
    title: "Clarity and transparency",
    description:
      "We aim to present information clearly and encourage students to verify important academic details through official university sources.",
  },
  {
    icon: Code2,
    title: "Practical knowledge",
    description:
      "Alongside academic preparation, we provide access to coding projects and tools that support hands-on learning.",
  },
];

const timeline = [
  {
    year: "2022",
    title: "The idea behind SabkaCode",
    body: "The platform's journey began with the goal of making study notes and programming resources easier for students to find.",
  },
  {
    year: "2023",
    title: "Academic resources expanded",
    body: "The platform's stated development journey included expanding its collection of university study resources and previous year papers.",
  },
  {
    year: "2024",
    title: "More learning content",
    body: "Additional educational content, including exam-related resources and blog material, became part of the platform's broader direction.",
  },
  {
    year: "Today",
    title: "Continuing to improve",
    body: "SabkaCode continues to focus on accessible study resources, useful tools and practical learning opportunities.",
  },
];

const faqs = [
  {
    question: "What is SabkaCode?",
    answer:
      "SabkaCode is an educational platform that brings together study notes, university resources, previous year papers, coding projects and useful online tools.",
  },
  {
    question: "Who can use SabkaCode?",
    answer:
      "Students looking for academic study material, programming resources, exam preparation support or practical coding projects can explore the available content.",
  },
  {
    question: "Are SabkaCode resources free?",
    answer:
      "The platform provides free educational resources. Check the relevant page for any specific access requirements or conditions that may apply to an individual resource.",
  },
  {
    question: "Can I rely on previous year papers for exam preparation?",
    answer:
      "Previous year papers can help you practise questions and understand exam formats. Always check your current syllabus and official university notices because exam patterns may change.",
  },
  {
    question: "How can I contact SabkaCode?",
    answer:
      "Visit the Contact page to find the available ways to get in touch with the SabkaCode team.",
  },
];

export default function AboutPage() {
  return (
    <Section>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      <div className="mx-auto max-w-4xl">
        {/* Hero */}
        <header className="relative overflow-hidden rounded-2xl border border-ink-100 bg-white px-5 py-10 text-center shadow-card sm:px-10 sm:py-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-500 via-sky-400 to-brand-600"
          />

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
            <GraduationCap className="h-7 w-7" />
          </div>

          <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-brand-600">
            About SabkaCode
          </p>

          <h1 className="mx-auto mt-3 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
            Making learning resources easier to find
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-ink-500 sm:text-lg">
            SabkaCode brings together academic study material, previous year
            papers, programming resources and useful digital tools to support
            students throughout their learning journey.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <LinkButton href="/notes">Explore Study Notes</LinkButton>
            <LinkButton href="/papers" variant="secondary">
              Previous Year Papers
            </LinkButton>
          </div>
        </header>

        {/* Introduction */}
        <section className="mt-12 sm:mt-16">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div>
              <p className="text-sm font-semibold text-brand-600">
                Who We Are
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
                One platform for academic and practical learning
              </h2>
            </div>

            <div className="space-y-4 text-sm leading-7 text-ink-600 sm:text-base">
              <p>
                Finding useful study material can take time when notes,
                question papers, programming tutorials and other resources are
                spread across different websites. SabkaCode aims to make this
                process simpler by organizing useful learning resources in
                accessible sections.
              </p>

              <p>
                Whether you are revising a subject, preparing for university
                examinations, exploring programming concepts or looking for a
                project idea, you can use the platform to discover resources
                relevant to your learning goals.
              </p>

              <p>
                Our focus is on accessibility, practical learning and clear
                navigation, so students can find the material they need without
                unnecessary complexity.
              </p>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="mt-14 sm:mt-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-brand-600">
              Explore the Platform
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
              What you can find on SabkaCode
            </h2>
            <p className="mt-3 leading-7 text-ink-500">
              Explore the available resources according to your course,
              academic requirements and interests.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="flex h-full flex-col rounded-card border border-ink-100 bg-white p-5 shadow-card transition duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-ink-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 flex-1 text-sm leading-6 text-ink-500">
                    {item.description}
                  </p>

                  <Link
                    href={item.href}
                    className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-600 transition hover:text-brand-700"
                  >
                    {item.linkText}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

        {/* Mission, vision and values */}
        <section className="mt-14 sm:mt-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-brand-600">
              Our Direction
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
              Our mission, vision and values
            </h2>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <article className="rounded-card border border-ink-100 bg-white p-5 shadow-card">
              <h3 className="text-lg font-semibold text-ink-900">
                Our Mission
              </h3>
              <p className="mt-3 text-sm leading-6 text-ink-600">
                To make useful educational resources easier to discover and
                help students access study material that supports their
                academic goals.
              </p>
            </article>

            <article className="rounded-card border border-ink-100 bg-white p-5 shadow-card">
              <h3 className="text-lg font-semibold text-ink-900">
                Our Vision
              </h3>
              <p className="mt-3 text-sm leading-6 text-ink-600">
                To build a helpful learning destination where academic
                resources, programming knowledge and practical tools come
                together.
              </p>
            </article>

            <article className="rounded-card border border-ink-100 bg-white p-5 shadow-card">
              <h3 className="text-lg font-semibold text-ink-900">
                Our Values
              </h3>
              <p className="mt-3 text-sm leading-6 text-ink-600">
                Accessibility, clarity, continuous improvement and a
                student-focused approach guide the way we organize our
                resources.
              </p>
            </article>
          </div>
        </section>

        {/* Principles */}
        <section className="mt-14 sm:mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
            What matters to us
          </h2>

          <div className="mt-6 space-y-4">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <div
                  key={principle.title}
                  className="flex gap-4 rounded-card border border-ink-100 bg-white p-4 sm:p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-ink-900">
                      {principle.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-ink-500">
                      {principle.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Journey */}
        <section className="mt-14 sm:mt-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-brand-600">
              Our Journey
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
              The journey of SabkaCode
            </h2>
            <p className="mt-3 leading-7 text-ink-500">
              The platform has been shaped around a simple idea: make learning
              resources more accessible and easier to navigate.
            </p>
          </div>

          <div className="mt-6 space-y-4">
            {timeline.map((item, index) => (
              <article
                key={item.year}
                className="flex gap-4 rounded-card border border-ink-100 bg-white p-4 shadow-card sm:gap-5 sm:p-5"
              >
                <div className="flex h-11 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-sm font-bold text-brand-600 sm:w-16">
                  {item.year}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-ink-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-ink-500">
                    {item.body}
                  </p>
                </div>

                <span className="hidden text-xs font-medium text-ink-400 sm:block">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </article>
            ))}
          </div>
        </section>

        {/* Founder */}
        <section className="mt-14 sm:mt-16">
          <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card">
            <div className="h-1 bg-gradient-to-r from-brand-500 via-sky-400 to-brand-600" />

            <div className="p-5 sm:p-8">
              <p className="text-sm font-semibold text-brand-600">
                Behind the Platform
              </p>

              <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-lg font-bold text-brand-600">
                  DJ
                </div>

                <div className="min-w-0">
                  <h2 className="text-xl font-bold text-ink-900 sm:text-2xl">
                    Meet the Founder — Dj Upraity
                  </h2>

                  <p className="mt-1 text-sm text-ink-500">
                    Building a more accessible learning experience
                  </p>

                  <div className="mt-4 space-y-3 text-sm leading-7 text-ink-600">
                    <p>
                      SabkaCode was developed around the idea of making
                      educational resources easier for students to discover.
                      Its focus brings together academic material, programming
                      resources and practical digital tools in one place.
                    </p>

                    <p>
                      The goal is to keep improving how students find and use
                      learning resources, while encouraging them to check
                      official sources whenever they need the latest syllabus,
                      examination schedule or university notification.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14 sm:mt-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-brand-600">
              Frequently Asked Questions
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
              About SabkaCode
            </h2>
          </div>

          <div className="mt-6 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-card border border-ink-100 bg-white p-4 open:border-brand-200 sm:p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink-900 [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <span
                    aria-hidden="true"
                    className="text-xl font-normal text-brand-600 transition-transform group-open:rotate-45"
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

        {/* Final CTA */}
        <section className="mt-14 rounded-2xl border border-brand-100 bg-brand-50 px-5 py-9 text-center sm:mt-16 sm:px-8 sm:py-12">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white text-brand-600 shadow-sm">
            <CheckCircle2 className="h-6 w-6" />
          </div>

          <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
            Start exploring SabkaCode
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-ink-600 sm:text-base">
            Browse study notes, discover university resources, practise with
            previous year papers and explore tools designed to support your
            learning journey.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <LinkButton href="/notes">Explore Resources</LinkButton>
            <LinkButton href="/contact" variant="secondary">
              Contact Us
            </LinkButton>
          </div>
        </section>

        <p className="mt-8 text-center text-sm text-ink-500">
          Have a question or suggestion?{" "}
          <Link
            href="/contact"
            className="font-semibold text-brand-600 underline-offset-4 hover:underline"
          >
            Get in touch
          </Link>
          .
        </p>
      </div>
    </Section>
  );
}


// import Link from "next/link";
// import { CheckCircle2 } from "lucide-react";
// import { Section } from "@/components/ui/Section";
// import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
// import { LinkButton } from "@/components/ui/Button";
// import { pageMetadata } from "@/lib/seo";

// export const metadata = pageMetadata({
//   title: "About Us",
//   description: "About SabkaCode — a free study platform for BCA, MCA, MBA and engineering students.",
//   path: "/about",
// });

// const stats = [
//   { value: "4+", label: "Universities Covered" },
//   { value: "40+", label: "Subjects Available" },
//   { value: "100+", label: "Previous Papers" },
//   { value: "100%", label: "Free for Students" },
// ];

// const timeline = [
//   { year: "2022", title: "SabkaCode Launch", body: "Started with programming notes and syllabus resources for students." },
//   { year: "2023", title: "Previous Papers Added", body: "AKTU MBA and MCA solved papers were made available on the platform." },
//   { year: "2024", title: "JEE Papers & Blog", body: "JEE Main papers and a student study blog were launched to expand coverage." },
//   { year: "2025", title: "Growing Strong", body: "Continuing to add more universities, subjects and exam solutions." },
// ];

// const offerings = [
//   { title: "Study Notes", body: "C, C++, Java, Python, DBMS, DSA and 40+ subjects covered" },
//   { title: "AKTU Papers", body: "MBA and MCA semester-wise previous year question papers" },
//   { title: "JEE Papers", body: "Shift-wise JEE Main papers available for free download" },
//   { title: "Exam Solutions", body: "Step-by-step solved answers for AKTU MBA Semester 2" },
//   { title: "Study Blog", body: "Study tips, coding guides and exam strategies for students" },
//   { title: "All Papers", body: "Papers from DBRAU, CSJMU, CCSU and more universities" },
// ];

// export default function AboutPage() {
//   return (
//     <Section>
//       <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />

//       <div className="text-center">
//         <p className="text-sm font-semibold text-brand-600">✦ About SabkaCode</p>
//         <h1 className="mt-2 text-2xl sm:text-3xl font-bold text-ink-900">
//           Your Free Study Partner for Every Student
//         </h1>
//         <p className="mx-auto mt-3 max-w-xl text-ink-500">
//           Free notes, previous year papers and coding resources — all in one place, organized and
//           completely free for every student.
//         </p>
//         <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
//           <LinkButton href="/notes">Explore Notes</LinkButton>
//           <LinkButton href="/notes" variant="secondary">
//             Previous Papers
//           </LinkButton>
//         </div>
//       </div>

//       <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
//         {stats.map((s) => (
//           <div key={s.label} className="rounded-card border border-ink-100 bg-white p-4 text-center shadow-card">
//             <p className="text-xl font-bold text-brand-600">{s.value}</p>
//             <p className="mt-1 text-xs text-ink-500">{s.label}</p>
//           </div>
//         ))}
//       </div>

//       <div className="mt-14">
//         <h2 className="text-lg font-semibold text-ink-900">Our Story</h2>
//         <p className="mt-1 font-medium text-ink-700">A Journey That Began with One Idea in 2022</p>
//         <div className="mt-3 max-w-2xl space-y-3 text-ink-600">
//           <p>
//             SabkaCode was founded when a student realized that study notes were scattered across
//             the internet, finding previous year papers took hours, and exam solutions were nearly
//             impossible to locate in one place.
//           </p>
//           <p>
//             To solve this problem, SabkaCode was built — a single platform where BCA, MCA, MBA and
//             engineering students could find everything they needed, well-organized and completely
//             free.
//           </p>
//           <p>
//             Today, the platform has become the first choice for thousands of students from AKTU,
//             CSJMU, DBRAU and CCSU.
//           </p>
//         </div>

//         <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
//           {timeline.map((t) => (
//             <div key={t.year} className="flex gap-3 rounded-card border border-ink-100 bg-white p-4 shadow-card">
//               <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-brand-50 text-sm font-bold text-brand-600">
//                 {t.year.slice(2)}
//               </span>
//               <div>
//                 <p className="font-medium text-ink-900">
//                   {t.title} — {t.year}
//                 </p>
//                 <p className="mt-0.5 text-sm text-ink-500">{t.body}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
//         <div>
//           <h3 className="font-semibold text-ink-900">Our Mission</h3>
//           <p className="mt-2 text-sm text-ink-600">
//             To provide every student with free, structured and reliable study materials —
//             regardless of which university they attend or where they live.
//           </p>
//         </div>
//         <div>
//           <h3 className="font-semibold text-ink-900">Our Vision</h3>
//           <p className="mt-2 text-sm text-ink-600">
//             To become India&apos;s most trusted free educational resource hub — where students can
//             find everything from notes to exam solutions in one place.
//           </p>
//         </div>
//         <div>
//           <h3 className="font-semibold text-ink-900">Our Values</h3>
//           <p className="mt-2 text-sm text-ink-600">
//             Free and open access, clear and accurate content, and a students-first approach — these
//             are the core values that guide everything we do.
//           </p>
//         </div>
//       </div>

//       <div className="mt-14">
//         <h2 className="text-lg font-semibold text-ink-900">What We Offer</h2>
//         <p className="mt-1 text-ink-500">
//           From programming to management — SabkaCode has study resources ready for every subject
//           and every exam.
//         </p>
//         <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
//           {offerings.map((o) => (
//             <div key={o.title} className="flex gap-2 rounded-card border border-ink-100 bg-white p-4 shadow-card">
//               <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-600" />
//               <div>
//                 <p className="font-medium text-ink-900">{o.title}</p>
//                 <p className="mt-0.5 text-sm text-ink-500">{o.body}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="mt-14 rounded-card border border-ink-100 bg-white p-6 shadow-card">
//         <div className="flex items-start gap-4">
//           <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-50 font-bold text-brand-600">
//             DJ
//           </span>
//           <div>
//             <h3 className="font-semibold text-ink-900">Meet the Founder — Dj Upraity</h3>
//             <p className="text-sm text-ink-500">One Student, One Idea, One Platform</p>
//             <p className="mt-2 text-sm text-ink-600">
//               Dj Upraity built SabkaCode in 2022–23 after personally experiencing how difficult it
//               was to find organized study resources as a student. He understood firsthand how much
//               time students waste searching for notes, previous papers and exam solutions scattered
//               across the internet.
//             </p>
//             <p className="mt-2 text-sm text-ink-600">
//               With a vision to solve this problem for every student, he created a platform that
//               genuinely helps — without any cost, registration or barriers.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="mt-14 text-center">
//         <h2 className="text-lg font-semibold text-ink-900">Ready to Start Studying?</h2>
//         <p className="mt-1 text-ink-500">
//           Thousands of students are already using SabkaCode to prepare for their exams — join them
//           today, completely free.
//         </p>
//         <div className="mt-4">
//           <LinkButton href="/">Explore SabkaCode</LinkButton>
//         </div>
//       </div>

//       <p className="mt-10 text-center text-sm text-ink-400">
//         Have questions? <Link href="/contact" className="font-medium text-brand-600">Contact us</Link>.
//       </p>
//     </Section>
//   );
// }
