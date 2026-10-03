const steps = [
  {
    step: "1",
    title: "Pick Your Course & University",
    body: "Start from Courses, choose your degree (BCA, BBA, MCA, MBA and more), then select your university.",
  },
  {
    step: "2",
    title: "Go to Your Semester & Subject",
    body: "Pick your semester, then the subject you need — everything is organised exactly how your syllabus is structured.",
  },
  {
    step: "3",
    title: "Open Notes, Syllabus & PYQs",
    body: "Each subject page has its syllabus, unit-wise notes where available, and previous year question papers in one place.",
  },
  {
    step: "4",
    title: "Study & Revise",
    body: "No downloads or signups needed to start reading — save the Previous Papers page for quick access before exams.",
  },
];

export function HowItWorks() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s) => (
        <div key={s.step} className="relative rounded-card border border-ink-100 bg-white p-5 shadow-card">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
            {s.step}
          </span>
          <h3 className="mt-3 font-semibold text-ink-900">{s.title}</h3>
          <p className="mt-1 text-sm text-ink-500">{s.body}</p>
        </div>
      ))}
    </div>
  );
}
