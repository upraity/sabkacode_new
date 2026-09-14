import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LinkButton } from "@/components/ui/Button";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us",
  description: "About SabkaCode — a free study platform for BCA, MCA, MBA and engineering students.",
  path: "/about",
});

const stats = [
  { value: "4+", label: "Universities Covered" },
  { value: "40+", label: "Subjects Available" },
  { value: "100+", label: "Previous Papers" },
  { value: "100%", label: "Free for Students" },
];

const timeline = [
  { year: "2022", title: "SabkaCode Launch", body: "Started with programming notes and syllabus resources for students." },
  { year: "2023", title: "Previous Papers Added", body: "AKTU MBA and MCA solved papers were made available on the platform." },
  { year: "2024", title: "JEE Papers & Blog", body: "JEE Main papers and a student study blog were launched to expand coverage." },
  { year: "2025", title: "Growing Strong", body: "Continuing to add more universities, subjects and exam solutions." },
];

const offerings = [
  { title: "Study Notes", body: "C, C++, Java, Python, DBMS, DSA and 40+ subjects covered" },
  { title: "AKTU Papers", body: "MBA and MCA semester-wise previous year question papers" },
  { title: "JEE Papers", body: "Shift-wise JEE Main papers available for free download" },
  { title: "Exam Solutions", body: "Step-by-step solved answers for AKTU MBA Semester 2" },
  { title: "Study Blog", body: "Study tips, coding guides and exam strategies for students" },
  { title: "All Papers", body: "Papers from DBRAU, CSJMU, CCSU and more universities" },
];

export default function AboutPage() {
  return (
    <Section>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />

      <div className="text-center">
        <p className="text-sm font-semibold text-brand-600">✦ About SabkaCode</p>
        <h1 className="mt-2 text-2xl sm:text-3xl font-bold text-ink-900">
          Your Free Study Partner for Every Student
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-ink-500">
          Free notes, previous year papers and coding resources — all in one place, organized and
          completely free for every student.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <LinkButton href="/notes">Explore Notes</LinkButton>
          <LinkButton href="/notes" variant="secondary">
            Previous Papers
          </LinkButton>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-card border border-ink-100 bg-white p-4 text-center shadow-card">
            <p className="text-xl font-bold text-brand-600">{s.value}</p>
            <p className="mt-1 text-xs text-ink-500">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <h2 className="text-lg font-semibold text-ink-900">Our Story</h2>
        <p className="mt-1 font-medium text-ink-700">A Journey That Began with One Idea in 2022</p>
        <div className="mt-3 max-w-2xl space-y-3 text-ink-600">
          <p>
            SabkaCode was founded when a student realized that study notes were scattered across
            the internet, finding previous year papers took hours, and exam solutions were nearly
            impossible to locate in one place.
          </p>
          <p>
            To solve this problem, SabkaCode was built — a single platform where BCA, MCA, MBA and
            engineering students could find everything they needed, well-organized and completely
            free.
          </p>
          <p>
            Today, the platform has become the first choice for thousands of students from AKTU,
            CSJMU, DBRAU and CCSU.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {timeline.map((t) => (
            <div key={t.year} className="flex gap-3 rounded-card border border-ink-100 bg-white p-4 shadow-card">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-brand-50 text-sm font-bold text-brand-600">
                {t.year.slice(2)}
              </span>
              <div>
                <p className="font-medium text-ink-900">
                  {t.title} — {t.year}
                </p>
                <p className="mt-0.5 text-sm text-ink-500">{t.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
        <div>
          <h3 className="font-semibold text-ink-900">Our Mission</h3>
          <p className="mt-2 text-sm text-ink-600">
            To provide every student with free, structured and reliable study materials —
            regardless of which university they attend or where they live.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-ink-900">Our Vision</h3>
          <p className="mt-2 text-sm text-ink-600">
            To become India&apos;s most trusted free educational resource hub — where students can
            find everything from notes to exam solutions in one place.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-ink-900">Our Values</h3>
          <p className="mt-2 text-sm text-ink-600">
            Free and open access, clear and accurate content, and a students-first approach — these
            are the core values that guide everything we do.
          </p>
        </div>
      </div>

      <div className="mt-14">
        <h2 className="text-lg font-semibold text-ink-900">What We Offer</h2>
        <p className="mt-1 text-ink-500">
          From programming to management — SabkaCode has study resources ready for every subject
          and every exam.
        </p>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((o) => (
            <div key={o.title} className="flex gap-2 rounded-card border border-ink-100 bg-white p-4 shadow-card">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-600" />
              <div>
                <p className="font-medium text-ink-900">{o.title}</p>
                <p className="mt-0.5 text-sm text-ink-500">{o.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 rounded-card border border-ink-100 bg-white p-6 shadow-card">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-50 font-bold text-brand-600">
            DJ
          </span>
          <div>
            <h3 className="font-semibold text-ink-900">Meet the Founder — Dj Upraity</h3>
            <p className="text-sm text-ink-500">One Student, One Idea, One Platform</p>
            <p className="mt-2 text-sm text-ink-600">
              Dj Upraity built SabkaCode in 2022–23 after personally experiencing how difficult it
              was to find organized study resources as a student. He understood firsthand how much
              time students waste searching for notes, previous papers and exam solutions scattered
              across the internet.
            </p>
            <p className="mt-2 text-sm text-ink-600">
              With a vision to solve this problem for every student, he created a platform that
              genuinely helps — without any cost, registration or barriers.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-14 text-center">
        <h2 className="text-lg font-semibold text-ink-900">Ready to Start Studying?</h2>
        <p className="mt-1 text-ink-500">
          Thousands of students are already using SabkaCode to prepare for their exams — join them
          today, completely free.
        </p>
        <div className="mt-4">
          <LinkButton href="/">Explore SabkaCode</LinkButton>
        </div>
      </div>

      <p className="mt-10 text-center text-sm text-ink-400">
        Have questions? <Link href="/contact" className="font-medium text-brand-600">Contact us</Link>.
      </p>
    </Section>
  );
}
