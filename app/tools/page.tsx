
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ToolCard } from "@/components/tools/ToolCard";
import { getTools } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Student Tools & Calculators",
  description:
    "Explore free student calculators for CGPA, SGPA, percentage, attendance, age and unit conversion. Understand formulas, check academic calculations and get results quickly.",
  path: "/tools",
});

const toolCategories = [
  {
    title: "Academic Calculators",
    description:
      "Calculate and understand important academic values using your marks, grades and semester results.",
    examples: "CGPA, SGPA and percentage calculations",
  },
  {
    title: "Attendance Calculator",
    description:
      "Check your current attendance, estimate how many classes you can miss, or calculate how many classes you need to attend to reach a target.",
    examples: "Attendance percentage and target planning",
  },
  {
    title: "Everyday Calculators",
    description:
      "Use practical utilities for everyday calculations, date-related questions and common unit conversions.",
    examples: "Age calculation and unit conversion",
  },
];

const usageSteps = [
  {
    number: "01",
    title: "Choose the right tool",
    description:
      "Browse the available calculators and open the one that matches your calculation.",
  },
  {
    number: "02",
    title: "Enter your information",
    description:
      "Provide the required values carefully, such as grades, marks, attended classes, dates or units.",
  },
  {
    number: "03",
    title: "Check your result",
    description:
      "Review the calculated result and read any available explanation to understand how it was obtained.",
  },
];

const faqs = [
  {
    question: "What tools are available on SabkaCode?",
    answer:
      "The Tools page lists the calculators and utilities currently available on SabkaCode. Depending on the tools published on the website, these may include CGPA, SGPA, percentage, attendance, age and unit conversion calculators.",
  },
  {
    question: "Are these calculators free to use?",
    answer:
      "The tools are presented as student-focused online utilities. Check the individual tool page for any specific usage conditions or limitations.",
  },
  {
    question: "How accurate are the calculator results?",
    answer:
      "Results depend on the values you enter and the formula implemented by the individual calculator. Enter correct information and review the explanation on the relevant tool page where available. Academic grading and conversion rules can differ between institutions.",
  },
  {
    question: "How do I calculate CGPA or SGPA?",
    answer:
      "The calculation method depends on your institution's grading system. Open the relevant calculator and follow its instructions. Use your university's official rules when interpreting semester grades or converting CGPA into a percentage.",
  },
  {
    question: "Can I use these tools on my mobile phone?",
    answer:
      "You can open the Tools page in a modern mobile browser. The page uses a responsive card layout, while the usability of each calculator depends on its individual implementation.",
  },
  {
    question: "Do all universities use the same CGPA conversion formula?",
    answer:
      "No. CGPA calculation and percentage-conversion rules may vary by university, board or academic program. Always verify the applicable formula in your institution's official guidelines before using a result for formal submissions.",
  },
  {
    question: "What should I do if a calculator gives an unexpected result?",
    answer:
      "Recheck your inputs, confirm the units and grading rules, and read the calculator's instructions. If the result still appears incorrect, compare it with the official method used by your institution.",
  },
];

export default async function ToolsPage() {
  const tools = await getTools();

  return (
    <Section
      title="Free Online Tools & Calculators for Students"
      description="Simple, practical and easy-to-use calculators for academic work and everyday calculations."
    >
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Tools" },
        ]}
      />

      {/* Introduction */}
      <div className="mb-10 max-w-4xl space-y-4">
        <p className="text-ink-600 leading-7">
          Welcome to SabkaCode Tools, a collection of online calculators and
          utilities designed to make common calculations easier for students.
          Whether you are checking your semester performance, calculating
          attendance, converting academic scores or working with dates and
          measurements, this page helps you find the relevant tool in one place.
        </p>

        <p className="text-ink-600 leading-7">
          Instead of working through every calculation manually, you can open
          a suitable calculator, enter the required values and review the
          result. Where an explanation is available, you can also learn more
          about the formula or method used by that tool.
        </p>

        <p className="text-ink-600 leading-7">
          There are currently{" "}
          <strong className="text-ink-900">{tools.length} tools</strong>{" "}
          available in this collection. The list is generated from the
          website's tool data, so the cards below reflect the tools returned
          by the current data source.
        </p>
      </div>

      {/* Tool listing */}
      <div id="available-tools" className="mb-14 scroll-mt-24">
        <div className="mb-5">
          <h2 className="text-2xl font-bold tracking-tight text-ink-900">
            Explore All Tools
          </h2>
          <p className="mt-2 max-w-3xl leading-7 text-ink-600">
            Choose a calculator below to get started. Each tool is intended
            for a particular type of calculation, so check its description
            and instructions before entering your information.
          </p>
        </div>

        {tools.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="rounded-card border border-ink-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-ink-900">
              No tools available yet
            </h3>
            <p className="mt-2 leading-7 text-ink-600">
              There are no published tools to display right now. Please check
              back later for new calculators and utilities.
            </p>
          </div>
        )}
      </div>

      {/* Tool categories */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold tracking-tight text-ink-900">
          Find the Right Calculator for Your Needs
        </h2>
        <p className="mt-3 mb-6 max-w-3xl leading-7 text-ink-600">
          Different calculations require different inputs and methods. These
          broad categories can help you understand which type of tool to look
          for in the collection above.
        </p>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {toolCategories.map((category) => (
            <article
              key={category.title}
              className="rounded-card border border-ink-200 bg-white p-5 shadow-card"
            >
              <h3 className="text-lg font-semibold text-ink-900">
                {category.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-ink-600">
                {category.description}
              </p>
              <p className="mt-4 border-t border-ink-100 pt-3 text-sm font-medium text-ink-900">
                Examples: {category.examples}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Why use the tools */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold tracking-tight text-ink-900">
          Why Use Online Student Calculators?
        </h2>

        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          <article className="rounded-card border border-ink-200 p-5">
            <h3 className="font-semibold text-ink-900">
              Save time on routine calculations
            </h3>
            <p className="mt-2 leading-7 text-ink-600">
              Calculators can simplify repetitive arithmetic and help you
              check common academic or everyday values without calculating
              every step manually.
            </p>
          </article>

          <article className="rounded-card border border-ink-200 p-5">
            <h3 className="font-semibold text-ink-900">
              Reduce avoidable calculation errors
            </h3>
            <p className="mt-2 leading-7 text-ink-600">
              Entering values into a suitable calculator can help reduce
              arithmetic mistakes. Accurate results still depend on correct
              inputs and the formula used by the tool.
            </p>
          </article>

          <article className="rounded-card border border-ink-200 p-5">
            <h3 className="font-semibold text-ink-900">
              Understand your academic performance
            </h3>
            <p className="mt-2 leading-7 text-ink-600">
              Academic calculators can help you review grades, semester
              performance and attendance figures. Use your institution's
              official rules when making academic decisions.
            </p>
          </article>

          <article className="rounded-card border border-ink-200 p-5">
            <h3 className="font-semibold text-ink-900">
              Access tools in one place
            </h3>
            <p className="mt-2 leading-7 text-ink-600">
              A central collection makes it easier to discover relevant
              utilities without searching for a different website for every
              routine calculation.
            </p>
          </article>
        </div>
      </section>

      {/* How to use */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold tracking-tight text-ink-900">
          How to Use SabkaCode Tools
        </h2>
        <p className="mt-3 max-w-3xl leading-7 text-ink-600">
          Follow these general steps to get a useful result from an online
          calculator. Individual tools may have additional instructions.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
          {usageSteps.map((step) => (
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

      {/* Accuracy guidance */}
      <section className="mb-14 rounded-card border border-ink-200 bg-white p-6">
        <h2 className="text-2xl font-bold tracking-tight text-ink-900">
          Understand Formulas and Check Your Inputs
        </h2>

        <div className="mt-4 space-y-4 leading-7 text-ink-600">
          <p>
            A calculator is only as useful as the information entered into
            it. Before calculating, check that your numbers, dates, units and
            other inputs match the requirements shown on the relevant tool
            page.
          </p>

          <p>
            For academic calculations, remember that institutions may use
            different grading scales, credit-weighting systems and
            percentage-conversion formulas. A general conversion method may
            not be suitable for every university or course.
          </p>

          <p>
            When you need a result for an examination form, scholarship,
            admission, official record or other formal purpose, confirm the
            calculation method with the relevant institution. Use the
            individual tool's explanation as guidance, not as a replacement
            for official academic rules.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold tracking-tight text-ink-900">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 mb-6 max-w-3xl leading-7 text-ink-600">
          Find answers to common questions about student calculators,
          academic formulas and using online tools.
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
              <p className="mt-2 leading-7 text-ink-600">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Closing content */}
      <section className="border-t border-ink-200 pt-8">
        <h2 className="text-xl font-bold text-ink-900">
          More Useful Resources for Students
        </h2>
        <p className="mt-3 max-w-4xl leading-7 text-ink-600">
          SabkaCode aims to make useful educational resources and practical
          online utilities easier to discover. Explore the available tools,
          read the instructions for each calculator and choose the method
          that fits your requirements. New tools can be added to the
          collection as they become available on the website.
        </p>
      </section>
    </Section>
  );
}

// import { Section } from "@/components/ui/Section";
// import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
// import { ToolCard } from "@/components/tools/ToolCard";
// import { getTools } from "@/lib/data";
// import { pageMetadata } from "@/lib/seo";

// export const metadata = pageMetadata({
//   title: "Tools",
//   description: "CGPA, SGPA, percentage, attendance, age and unit conversion calculators for students.",
//   path: "/tools",
// });

// export default async function ToolsPage() {
//   const tools = await getTools();

//   return (
//     <Section title="Tools" description="Simple calculators and utilities students actually need.">
//       <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Tools" }]} />

//       <p className="mb-6 max-w-2xl text-ink-600">
//         These {tools.length} calculators cover the maths students look up most often during a
//         semester — SGPA and CGPA from your grade sheet, converting a CGPA into a percentage, working
//         out attendance margins, and more. Each tool page also explains the exact formula behind it,
//         not just the number.
//       </p>

//       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//         {tools.map((tool) => (
//           <ToolCard key={tool.id} tool={tool} />
//         ))}
//       </div>
//     </Section>
//   );
// }
