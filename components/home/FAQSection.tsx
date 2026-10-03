const faqs = [
  {
    q: "Is SabkaCode really free to use?",
    a: "Yes. Notes, syllabus pages and previous year papers are all free — there's no signup or payment required to read them.",
  },
  {
    q: "Which universities and courses are covered?",
    a: "AKTU, CSJMU, DBRAU and CCSU are covered so far, across courses like BCA, BBA, MCA and MBA, with more universities and courses being added over time.",
  },
  {
    q: "What's the difference between the syllabus and the detailed notes?",
    a: "The syllabus section lists the official unit-wise topics for a subject. Where available, the detailed notes go further — full written explanations with diagrams for each unit, built into the subject page itself.",
  },
  {
    q: "Can I find previous year question papers for a specific subject?",
    a: "Yes — open the subject page and check its PYQs tab, or use the Previous Papers page to browse papers by university, course and subject.",
  },
  {
    q: "How do I request a subject, university or paper that's missing?",
    a: "Reach out from the Contact page — content is added regularly based on what students ask for.",
  },
];

export function FAQSection() {
  return (
    <div className="space-y-3">
      {faqs.map((f) => (
        <details key={f.q} className="group rounded-card border border-ink-100 bg-white p-4 shadow-card">
          <summary className="cursor-pointer list-none font-medium text-ink-900">{f.q}</summary>
          <p className="mt-2 text-sm text-ink-600">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
