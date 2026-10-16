
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LinkButton } from "@/components/ui/Button";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us | SabkaCode",
  description:
    "Learn about SabkaCode, our mission and the educational resources we provide, including study notes, university previous year papers, coding projects and useful tools for students.",
  path: "/about",
});

const stats = [
  { value: "4+", label: "Universities Covered" },
  { value: "40+", label: "Subjects Available" },
  { value: "100+", label: "Previous Papers" },
  { value: "Free", label: "Student Resources" },
];

const timeline = [
  {
    year: "2022",
    title: "The Idea Behind SabkaCode",
    body: "The journey began with the goal of making programming notes, study material and academic resources easier to find.",
  },
  {
    year: "2023",
    title: "Academic Resources Expanded",
    body: "The platform expanded its focus on university study material and previous year question papers.",
  },
  {
    year: "2024",
    title: "More Learning Resources",
    body: "Additional exam-related resources and educational blog content became part of the platform's learning ecosystem.",
  },
  {
    year: "2025",
    title: "Continuous Improvement",
    body: "The focus continued on improving the organization of study resources, university information and learning tools.",
  },
];

const offerings = [
  {
    title: "Study Notes",
    body: "Explore notes covering programming, computer science, management and other available academic subjects.",
    href: "/notes",
  },
  {
    title: "University Previous Papers",
    body: "Find available previous year question papers to practise questions and understand examination patterns.",
    href: "/papers",
  },
  {
    title: "University Information",
    body: "Explore university pages and related academic resources to support your study planning.",
    href: "/universities",
  },
  {
    title: "Courses and Subjects",
    body: "Browse available courses and subject-specific resources organized for easier discovery.",
    href: "/courses",
  },
  {
    title: "Coding Projects",
    body: "Discover practical projects that can help you explore programming concepts and develop technical skills.",
    href: "/projects",
  },
  {
    title: "Online Tools",
    body: "Use useful web-based tools for everyday tasks, calculations and other supported activities.",
    href: "/tools",
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
      "Students looking for academic study material, university papers, programming resources or practical projects can explore the resources available on SabkaCode.",
  },
  {
    question: "Are the resources on SabkaCode free?",
    answer:
      "SabkaCode provides free educational resources. Please check the relevant page for any specific access conditions associated with an individual resource.",
  },
  {
    question: "How can I prepare using previous year papers?",
    answer:
      "Practise available questions, identify topics that need more revision and use the papers to become familiar with question formats. Always refer to your current syllabus and official university notices.",
  },
  {
    question: "Does SabkaCode replace official university websites?",
    answer:
      "No. SabkaCode is an independent educational resource platform. Students should verify official syllabi, examination schedules, results and notifications through the relevant university website.",
  },
  {
    question: "How can I contact the SabkaCode team?",
    answer:
      "Visit our Contact page to find the available ways to contact us with questions, suggestions or feedback.",
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

      {/* Hero section — original theme maintained */}
      <div className="text-center">
        <p className="text-sm font-semibold text-brand-600">
          ✦ About SabkaCode
        </p>

        <h1 className="mt-2 text-2xl font-bold text-ink-900 sm:text-3xl">
          Your Free Study Partner for Every Student
        </h1>

        <p className="mx-auto mt-3 max-w-2xl leading-7 text-ink-500">
          SabkaCode brings together study notes, previous year question papers,
          university resources, coding projects and useful online tools in one
          place. Our aim is to make educational resources easier to discover
          and use throughout your learning journey.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <LinkButton href="/notes">Explore Notes</LinkButton>
          <LinkButton href="/papers" variant="secondary">
            Previous Papers
          </LinkButton>
        </div>
      </div>

      {/* Stats — same original card design */}
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-card border border-ink-100 bg-white p-4 text-center shadow-card"
          >
            <p className="text-xl font-bold text-brand-600">
              {stat.value}
            </p>
            <p className="mt-1 text-xs text-ink-500">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Our story */}
      <div className="mt-14">
        <h2 className="text-lg font-semibold text-ink-900">
          Our Story
        </h2>

        <p className="mt-1 font-medium text-ink-700">
          Making Educational Resources Easier to Find
        </p>

        <div className="mt-3 max-w-3xl space-y-3 leading-7 text-ink-600">
          <p>
            Students often need to search across multiple websites to find
            useful notes, previous year papers, programming explanations and
            other academic resources. Finding the right material can take
            valuable time, particularly during examination preparation.
          </p>

          <p>
            SabkaCode was created around the idea of bringing useful learning
            resources together in a more organized and accessible format.
            Students can explore available study material, university
            information, subject resources and practical coding projects
            according to their needs.
          </p>

          <p>
            The platform aims to support students by making resources easier
            to discover, encouraging independent learning and providing a
            convenient starting point for academic preparation.
          </p>
        </div>

        {/* Timeline — original two-column layout */}
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {timeline.map((item) => (
            <div
              key={item.year}
              className="flex gap-3 rounded-card border border-ink-100 bg-white p-4 shadow-card"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-brand-50 text-sm font-bold text-brand-600">
                {item.year === "Today" ? "Now" : item.year.slice(2)}
              </span>

              <div>
                <p className="font-medium text-ink-900">
                  {item.title} — {item.year}
                </p>
                <p className="mt-1 text-sm leading-6 text-ink-500">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission, vision and values — original three-column layout */}
      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div>
          <h2 className="font-semibold text-ink-900">Our Mission</h2>
          <p className="mt-2 text-sm leading-6 text-ink-600">
            To make useful study material and learning resources easier to
            access, helping students spend more time learning and less time
            searching for information.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-ink-900">Our Vision</h2>
          <p className="mt-2 text-sm leading-6 text-ink-600">
            To build a helpful educational resource platform where students
            can discover academic material, explore programming and develop
            practical skills in one place.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-ink-900">Our Values</h2>
          <p className="mt-2 text-sm leading-6 text-ink-600">
            Accessibility, clear information, continuous improvement and a
            student-focused approach guide how we organize and present
            educational resources.
          </p>
        </div>
      </div>

      {/* What we offer — same card layout */}
      <div className="mt-14">
        <h2 className="text-lg font-semibold text-ink-900">
          What We Offer
        </h2>

        <p className="mt-1 max-w-3xl leading-7 text-ink-500">
          From academic study material to practical programming resources,
          SabkaCode helps students explore different learning resources
          through dedicated sections.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((offering) => (
            <div
              key={offering.title}
              className="flex gap-2 rounded-card border border-ink-100 bg-white p-4 shadow-card"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-600" />

              <div>
                <p className="font-medium text-ink-900">
                  {offering.title}
                </p>

                <p className="mt-1 text-sm leading-6 text-ink-500">
                  {offering.body}
                </p>

                <Link
                  href={offering.href}
                  className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:underline"
                >
                  Explore
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Founder — original card style */}
      <div className="mt-14 rounded-card border border-ink-100 bg-white p-5 shadow-card sm:p-6">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-50 font-bold text-brand-600">
            DJ
          </span>

          <div>
            <h2 className="font-semibold text-ink-900">
              Meet the Founder — Dj Upraity
            </h2>

            <p className="text-sm text-ink-500">
              One Idea, One Platform, A Focus on Learning
            </p>

            <p className="mt-2 text-sm leading-6 text-ink-600">
              SabkaCode was developed with the goal of making educational
              resources easier for students to find and explore. The platform
              brings together academic study material, university resources
              and programming-related content to support different learning
              needs.
            </p>

            <p className="mt-2 text-sm leading-6 text-ink-600">
              The focus is on building a useful learning destination where
              students can discover resources, practise independently and
              continue developing their academic and technical knowledge.
            </p>
          </div>
        </div>
      </div>

      {/* FAQs — uses existing colors and border conventions */}
      <div className="mt-14">
        <h2 className="text-lg font-semibold text-ink-900">
          Frequently Asked Questions
        </h2>

        <p className="mt-1 text-ink-500">
          Common questions about SabkaCode and its educational resources.
        </p>

        <div className="mt-4 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-card border border-ink-100 bg-white p-4 shadow-card"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink-900 [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-xl text-brand-600 transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>

              <p className="mt-3 border-t border-ink-100 pt-3 text-sm leading-6 text-ink-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>

      {/* Final CTA — same simple design */}
      <div className="mt-14 text-center">
        <h2 className="text-lg font-semibold text-ink-900">
          Ready to Start Studying?
        </h2>

        <p className="mx-auto mt-1 max-w-2xl leading-7 text-ink-500">
          Explore study notes, browse university resources, practise with
          previous year papers and discover projects and tools that support
          your learning goals.
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <LinkButton href="/">Explore SabkaCode</LinkButton>
          <LinkButton href="/contact" variant="secondary">
            Contact Us
          </LinkButton>
        </div>
      </div>

      <p className="mt-10 text-center text-sm text-ink-400">
        Have questions or suggestions?{" "}
        <Link
          href="/contact"
          className="font-medium text-brand-600 hover:underline"
        >
          Contact us
        </Link>
        .
      </p>
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
