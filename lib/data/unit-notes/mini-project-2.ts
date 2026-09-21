import { UnitNote } from "@/types";

// Mini Project-2 (BMB252) is not a traditional exam-unit subject — it's a
// project/seminar course where students validate a business idea from the
// previous semester. This is presented as ONE guideline unit rather than
// syllabus units, covering the objective, process, and report structure.
export const miniProject2UnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Business Ideas Validation & Feasibility — Project Guidelines",
    hours: 0,
    headings: [
      {
        id: "objective",
        title: "1. Course Objective",
        icon: "Target",
        blocks: [
          {
            kind: "paragraph",
            text: "Mini Project-2 is a seminar-based course where students validate the business idea they identified and screened in Mini Project-1 (the previous semester), by conducting a detailed feasibility study.",
          },
          {
            kind: "bullets",
            items: [
              "Validate the idea identified in the previous semester against real market and industry conditions.",
              "Identify the issues and challenges facing the identified industry/market.",
              "Prepare a report on the emerging technologies relevant to the selected industry.",
            ],
          },
        ],
      },
      {
        id: "process",
        title: "2. Project Process",
        icon: "GitBranch",
        blocks: [
          { kind: "diagram", diagramId: "entrepreneurial-process", caption: "Fig 1.1 — From validated idea to feasibility report" },
          {
            kind: "bullets",
            ordered: true,
            items: [
              "Revisit the business idea screened in the previous semester (Mini Project-1).",
              "Test the idea's key assumptions using a Lean Canvas — a one-page business model tool covering problem, solution, unique value proposition, customer segments, channels, revenue streams, cost structure, key metrics, and unfair advantage (a leaner alternative to a full business plan, recall Developing a Business Plan, Creativity/Innovation/Entrepreneurship Unit 4).",
              "Clearly identify the target market and target product/service the venture will offer.",
              "Research the future scope of emerging technologies relevant to the selected industry/sector.",
              "Prepare a detailed feasibility analysis of the idea — covering market, technical, and financial aspects (recall Feasibility Analysis, Creativity/Innovation/Entrepreneurship Unit 4).",
              "Compile all findings into a structured project report.",
            ],
          },
          {
            kind: "callout",
            tone: "info",
            title: "Preferred sectors",
            text: "The course gives preference to emerging, high-growth sectors — Fintech, Blockchain, Financial Services, Data Science, and Social Entrepreneurship — though any other suitable sector aligned with the student's original idea may also be chosen.",
          },
        ],
      },
      {
        id: "feasibility-analysis",
        title: "3. Feasibility Analysis — What to Cover",
        icon: "ClipboardCheck",
        blocks: [
          {
            kind: "table",
            headers: ["Feasibility Dimension", "What to Analyse"],
            rows: [
              ["Market Feasibility", "Target customer segments, market size, competitor landscape, and genuine evidence of customer demand (not just assumption)"],
              ["Technical Feasibility", "Whether the product/service can actually be built and delivered with realistically available technology, skills, and resources"],
              ["Financial Feasibility", "Estimated costs, revenue potential, and whether the required funding can realistically be raised or self-financed"],
            ],
          },
          {
            kind: "paragraph",
            text: "This three-part structure mirrors the Feasibility Analysis framework from Creativity, Innovation & Entrepreneurship (Unit 4) — Mini Project-2 is effectively the practical, hands-on application of that theory to the student's own idea.",
          },
        ],
      },
      {
        id: "report-evaluation",
        title: "4. Report Preparation and Evaluation",
        icon: "FileCheck",
        blocks: [
          {
            kind: "bullets",
            items: [
              "The report is prepared individually by each student (not as a group submission).",
              "It is evaluated by an external examiner appointed by the university.",
              "The report should follow a clear structure: introduction/idea recap, Lean Canvas summary, target market and offering, emerging technology outlook for the sector, and the three-part feasibility analysis (market, technical, financial), ending with a conclusion on whether the idea is worth pursuing further.",
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Practical tip",
            text: "Since this report is evaluated externally, it should read as a standalone, professional document — an external examiner won't have the context from your Mini Project-1 presentation, so briefly recap your original idea before diving into the validation and feasibility findings.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Lean Canvas", definition: "A one-page business model tool covering problem, solution, value proposition, and more — a leaner alternative to a full business plan." },
      { term: "Feasibility Analysis", definition: "Assessing a venture idea across market, technical, and financial dimensions." },
    ],
    examQuestions: [
      "Explain the Lean Canvas framework and how you applied it to your idea. (Viva)",
      "What issues and challenges did you identify in your selected industry/market? (Viva)",
      "Justify the market, technical, and financial feasibility of your proposed idea. (Report/Viva)",
      "What emerging technologies could affect your selected industry in the next few years? (Viva)",
      "Why is this idea worth pursuing (or not) based on your feasibility findings? (Viva)",
    ],
  },
];
