import { UnitNote } from "@/types";

// Detailed, in-app notes for Business Communication (BBA104) — AKTU BBA
// Sem 1.
export const bbaBusinessCommunicationUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Theory of Communication",
    hours: 8,
    headings: [
      {
        id: "concept-channels",
        title: "1. Concept, Channels and Objectives of Communication",
        icon: "MessageCircle",
        blocks: [
          {
            kind: "paragraph",
            text: "Communication is the process of exchanging information, ideas, and meaning between two or more parties, so the message is understood as intended. Its objectives in business include informing, persuading, instructing, motivating, and building relationships.",
          },
          {
            kind: "paragraph",
            text: "Channels of communication include face-to-face conversation, written memos/letters/emails, telephone, video conferencing, and formal presentations — the choice of channel depends on urgency, formality, and the complexity of the message.",
          },
        ],
      },
      {
        id: "methods-modes",
        title: "2. Methods and Modes of Communication",
        icon: "GitBranch",
        blocks: [
          {
            kind: "table",
            headers: ["Basis", "Types"],
            rows: [
              ["Direction", "Downward, Upward, Horizontal/Lateral, Diagonal"],
              ["Mode", "Verbal (oral/written) and Non-verbal"],
              ["Formality", "Formal (official channels) and Informal (the 'grapevine')"],
            ],
          },
        ],
      },
      {
        id: "barriers-technology",
        title: "3. Barriers to Communication and Impact of Technology",
        icon: "AlertTriangle",
        blocks: [
          { kind: "diagram", diagramId: "communication-barriers", caption: "Fig 1.1 — Common barriers to communication" },
          {
            kind: "table",
            headers: ["Barrier Type", "Example"],
            rows: [
              ["Physical Barriers", "Noise, distance, faulty equipment"],
              ["Semantic (Language) Barriers", "Jargon, ambiguous words, translation issues"],
              ["Psychological Barriers", "Prejudice, stress, mistrust"],
              ["Organizational Barriers", "Long hierarchy, information overload"],
            ],
          },
          {
            kind: "paragraph",
            text: "Impact of technological advancements: email, instant messaging, and video conferencing have made communication faster and more global, but have also introduced new challenges — information overload, reduced face-to-face interaction, and the risk of tone/intent being misread in text-only messages.",
          },
        ],
      },
      {
        id: "verbal-nonverbal",
        title: "4. Verbal and Non-Verbal Communication",
        icon: "Hand",
        blocks: [
          {
            kind: "paragraph",
            text: "Verbal communication uses words (spoken or written) and its characteristics include clarity, precision, and the ability to convey complex information directly.",
          },
          {
            kind: "paragraph",
            text: "Non-verbal communication includes body language, facial expressions, eye contact, posture, and tone of voice — its characteristics include being continuous (you're always communicating something non-verbally), often unconscious, and culturally variable (a gesture acceptable in one culture may be offensive in another).",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Grapevine", definition: "The informal communication network within an organisation." },
      { term: "Semantic Barrier", definition: "A communication barrier caused by language, jargon, or ambiguous wording." },
      { term: "Non-verbal Communication", definition: "Communication through body language, facial expressions, and tone rather than words." },
    ],
    examQuestions: [
      "Explain the concept, channels, and objectives of communication. (Medium)",
      "Discuss the different methods and modes of communication. (Medium)",
      "Explain the barriers to communication with examples. (Long)",
      "Discuss the impact of technological advancements on communication. (Medium)",
      "Differentiate between verbal and non-verbal communication. (Short)",
    ],
  },
  {
    unitNumber: 2,
    title: "Business Correspondence",
    hours: 8,
    headings: [
      {
        id: "letter-structure",
        title: "1. Business Letter: Parts, Structure and Layouts",
        icon: "Mail",
        blocks: [
          {
            kind: "paragraph",
            text: "A business letter typically has these parts: letterhead, date, inside address, salutation, subject line, body, complimentary close, and signature.",
          },
          {
            kind: "table",
            headers: ["Layout", "Description"],
            rows: [
              ["Full Block", "All lines start at the left margin — no indentation anywhere; the most modern and widely used format"],
              ["Modified Block", "Date and closing are placed toward the right/centre, while the body remains left-aligned"],
              ["Semi-Block", "Like modified block, but each paragraph's first line is also indented"],
            ],
          },
          {
            kind: "paragraph",
            text: "Principles of effective letter writing: clarity, conciseness, courtesy, correctness, and a \"you-attitude\" (focusing on the reader's perspective and benefit, not just the writer's).",
          },
        ],
      },
      {
        id: "personnel-correspondence",
        title: "2. Personnel Correspondence: SOP, Job Application and Resume",
        icon: "FileUser",
        blocks: [
          {
            kind: "paragraph",
            text: "A Statement of Purpose (SOP) is a personal essay explaining one's motivations, background, and goals — commonly required for higher education admissions or certain job applications.",
          },
          {
            kind: "paragraph",
            text: "A Job Application Letter (cover letter) introduces the candidate and highlights why they're a good fit for a specific role, while the Resume/CV provides a structured summary of education, experience, and skills.",
          },
        ],
      },
      {
        id: "paragraph-writing",
        title: "3. Paragraph Writing",
        icon: "PenTool",
        blocks: [
          {
            kind: "paragraph",
            text: "A well-structured business paragraph typically follows a topic sentence (stating the main idea), supporting sentences (providing evidence/detail), and a concluding or transition sentence — keeping paragraphs focused on one idea at a time improves readability in business writing.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Full Block Layout", "definition": "A letter layout where all lines start at the left margin with no indentation." },
      { term: "You-Attitude", definition: "Writing that focuses on the reader's perspective and benefit rather than the writer's." },
      { term: "SOP", definition: "Statement of Purpose — a personal essay explaining one's motivations and goals." },
    ],
    examQuestions: [
      "Explain the parts and structure of a business letter. (Medium)",
      "Differentiate between full block, modified block, and semi-block layouts. (Short)",
      "Discuss the principles of effective letter writing. (Medium)",
      "Explain how to write an effective job application letter and resume. (Long)",
      "Explain the structure of an effective business paragraph. (Short)",
    ],
  },
  {
    unitNumber: 3,
    title: "Presentation Skills and Group Communication",
    hours: 8,
    headings: [
      {
        id: "presentation-skills",
        title: "1. Principles of Effective Presentation",
        icon: "Presentation",
        blocks: [
          {
            kind: "paragraph",
            text: "An effective presentation has a clear structure (introduction, body, conclusion), a strong opening and closing, confident delivery (voice, eye contact, pace), and well-designed visual aids that support (not replace) the speaker's message.",
          },
        ],
      },
      {
        id: "group-communication",
        title: "2. Group Communication, GD and Interviews",
        icon: "Users",
        blocks: [
          {
            kind: "paragraph",
            text: "A Group Discussion (GD) evaluates a candidate's communication skills, knowledge, and teamwork in a group setting — assessors look for clarity of thought, ability to listen and build on others' points, and balanced participation.",
          },
          {
            kind: "paragraph",
            text: "Interview preparation involves researching the organisation/role, preparing clear and structured answers, and practising confident body language.",
          },
        ],
      },
      {
        id: "meetings-pr",
        title: "3. Conducting Meetings and Public Relations",
        icon: "CalendarClock",
        blocks: [
          {
            kind: "paragraph",
            text: "Conducting effective meetings requires a clear agenda, defined objectives, appropriate participants, and a suitable timing/venue.",
          },
          {
            kind: "bullets",
            items: [
              "Notice: a formal written announcement of a meeting, stating date, time, venue, and purpose.",
              "Agenda: the list of items to be discussed at the meeting, usually circulated in advance.",
              "Resolution: a formal decision recorded as officially passed by those present at a meeting.",
            ],
          },
          {
            kind: "paragraph",
            text: "Public Relations (PR) is managing an organisation's reputation and relationships with the public through non-paid media — press releases, events, and community engagement.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Group Discussion (GD)", definition: "A group-based evaluation of communication, knowledge, and teamwork skills." },
      { term: "Agenda", definition: "The list of items to be discussed at a meeting, circulated in advance." },
      { term: "Resolution", definition: "A formal decision officially recorded as passed at a meeting." },
    ],
    examQuestions: [
      "Explain the principles of effective presentation. (Medium)",
      "What do assessors look for in a Group Discussion? (Medium)",
      "Discuss the key considerations in conducting an effective meeting. (Medium)",
      "Explain the drafting of a notice, agenda, and resolution for a meeting. (Long)",
      "Explain the concept and importance of public relations. (Short)",
    ],
  },
  {
    unitNumber: 4,
    title: "Language and Business Writing Skills",
    hours: 8,
    headings: [
      {
        id: "complaint-claim-letters",
        title: "1. Letters of Complaint, Claim and Adjustment",
        icon: "AlertCircle",
        blocks: [
          {
            kind: "table",
            headers: ["Letter Type", "Purpose"],
            rows: [
              ["Complaint Letter", "Informs a supplier/company about a problem with a product or service"],
              ["Claim Letter", "Formally requests compensation, refund, or replacement for a specific loss or defect"],
              ["Adjustment Letter", "The company's response to a complaint/claim, explaining how it will resolve the issue"],
            ],
          },
        ],
      },
      {
        id: "sales-promotional",
        title: "2. Sales Letters and Promotional Materials",
        icon: "Megaphone",
        blocks: [
          {
            kind: "paragraph",
            text: "A Sales Letter aims to persuade the reader to buy a product/service, typically following the AIDA structure (Attention, Interest, Desire, Action — recall the AIDA model from Marketing Management).",
          },
          {
            kind: "paragraph",
            text: "Promotional leaflets and fliers are concise, visually engaging documents designed to quickly communicate an offer or event to a broad audience.",
          },
        ],
      },
      {
        id: "grievance-rti",
        title: "3. Consumer Grievance Letters and RTI Letters",
        icon: "Scale",
        blocks: [
          {
            kind: "paragraph",
            text: "A Consumer Grievance Letter formally raises a complaint about a defective product or deficient service, often as a precursor to filing a complaint under the Consumer Protection Act (recall Consumer Protection, Business Environment Unit 5).",
          },
          {
            kind: "paragraph",
            text: "A Right to Information (RTI) Act Letter is a formal application to a government public authority requesting specific information, under the RTI Act, 2005 — it must clearly identify the exact information sought and be addressed to the correct Public Information Officer.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Adjustment Letter", definition: "A company's written response to a customer complaint or claim, explaining the resolution." },
      { term: "AIDA Structure", definition: "Attention, Interest, Desire, Action — the classic structure for a persuasive sales letter." },
      { term: "RTI Letter", definition: "A formal application to a government authority requesting information under the RTI Act, 2005." },
    ],
    examQuestions: [
      "Differentiate between a complaint letter, a claim letter, and an adjustment letter. (Medium)",
      "Explain the AIDA structure with reference to a sales letter. (Medium)",
      "Draft the key components of a consumer grievance letter. (Long)",
      "Explain the format and purpose of an RTI letter. (Medium)",
    ],
  },
  {
    unitNumber: 5,
    title: "Reports",
    hours: 8,
    headings: [
      {
        id: "report-basics",
        title: "1. Layout, Types and Parts of a Report",
        icon: "FileText",
        blocks: [
          {
            kind: "paragraph",
            text: "A report is a structured, objective document that presents information, analysis, and often recommendations, for a specific audience.",
          },
          {
            kind: "table",
            headers: ["Report Section", "Contains"],
            rows: [
              ["Preliminary Section", "Title page, table of contents, executive summary"],
              ["Main Body", "Introduction, methodology/findings, analysis, conclusions, recommendations"],
              ["End Matter", "Appendices, references"],
            ],
          },
        ],
      },
      {
        id: "types-of-reports",
        title: "2. Feasibility and Investigative Reports",
        icon: "ClipboardCheck",
        blocks: [
          {
            kind: "table",
            headers: ["Report Type", "Purpose"],
            rows: [
              ["Feasibility Report", "Assesses whether a proposed project/idea is practical and worth pursuing (recall Feasibility Analysis, discussed in the Entrepreneurship context)"],
              ["Investigative Report", "Examines a specific problem or incident in depth to establish facts and causes"],
            ],
          },
        ],
      },
      {
        id: "summarization",
        title: "3. Summarization and Use of Tables/Graphs",
        icon: "BarChart3",
        blocks: [
          {
            kind: "paragraph",
            text: "Summarization involves identifying the main points and supporting/sub-points of a longer text, and presenting them in a cohesive, condensed manner — a critical skill for report writers who must distil large amounts of data or research into digestible findings.",
          },
          {
            kind: "paragraph",
            text: "Using tables and graphs in a report makes numerical data easier to understand at a glance than dense paragraphs of text (recall data visualisation techniques from Business Statistics/Business Mathematics) — but every table/graph should be clearly labelled and referenced in the report's text.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Feasibility Report", definition: "A report assessing whether a proposed project or idea is practical and worth pursuing." },
      { term: "Executive Summary", definition: "A concise overview of a report's key findings, placed at the start." },
    ],
    examQuestions: [
      "Explain the layout and parts of a business report. (Long)",
      "Differentiate between a feasibility report and an investigative report. (Medium)",
      "Explain the process of summarization in report writing. (Medium)",
      "Discuss the use of tables and graphs in a report. (Short)",
    ],
  },
];
