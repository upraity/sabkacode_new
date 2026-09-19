import { UnitNote } from "@/types";

// Detailed, in-app notes for Business Communication (BMB107) — AKTU MBA Sem 1.
export const businessCommunicationUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Introduction to Communication",
    hours: 8,
    headings: [
      {
        id: "role-defining",
        title: "1. Role, Defining and Classifying Communication",
        icon: "MessageCircle",
        blocks: [
          {
            kind: "paragraph",
            text: "Communication is the process of exchanging information, ideas, and meaning between two or more parties, so that the message is understood as intended.",
          },
          {
            kind: "paragraph",
            text: "Classification of communication:",
          },
          {
            kind: "table",
            headers: ["Basis", "Types"],
            rows: [
              ["Direction", "Downward (manager to subordinate), Upward (subordinate to manager), Horizontal/Lateral (peer to peer), Diagonal (across levels/departments)"],
              ["Mode", "Verbal (oral/written) and Non-verbal (body language, tone, gestures)"],
              ["Formality", "Formal (through official channels) and Informal (the \"grapevine\")"],
            ],
          },
        ],
      },
      {
        id: "purpose-process",
        title: "2. Purpose and Process of Communication",
        icon: "GitBranch",
        blocks: [
          {
            kind: "paragraph",
            text: "The purpose of business communication includes informing, persuading, instructing, motivating, and building relationships with internal and external stakeholders.",
          },
          { kind: "diagram", diagramId: "communication-process", caption: "Fig 1.1 — The Communication Process" },
          {
            kind: "bullets",
            items: [
              "Sender: originates and encodes the message.",
              "Encoding: converting the idea into words, symbols, or gestures.",
              "Message: the actual content being communicated.",
              "Channel: the medium used (email, meeting, phone, letter).",
              "Decoding: the receiver interprets the message.",
              "Receiver: the person the message is intended for.",
              "Feedback: the receiver's response, confirming (or not) that the message was understood as intended.",
              "Noise: anything that distorts the message anywhere along this process (a bad phone line, jargon, distractions).",
            ],
          },
        ],
      },
      {
        id: "successful-communication",
        title: "3. Characteristics of Successful Communication & Its Importance in Management",
        icon: "CheckCircle2",
        blocks: [
          {
            kind: "paragraph",
            text: "Characteristics of successful communication are often summarised as the 7 C's: Clarity, Conciseness, Concreteness, Correctness, Completeness, Courtesy, and Consideration.",
          },
          {
            kind: "paragraph",
            text: "Importance of communication in management: it is the thread that connects all managerial functions from Unit 1 of MCOB — planning, organising, staffing, directing, and controlling all depend on effective communication to work at all. Poor communication is one of the most commonly cited reasons for strategy implementation failure.",
          },
          {
            kind: "paragraph",
            text: "Communication structure in an organisation typically follows the formal hierarchy (matching the organisation chart), supplemented by informal networks that carry information faster but less reliably.",
          },
        ],
      },
      {
        id: "crisis-barriers",
        title: "4. Communication in Crisis & Barriers to Communication",
        icon: "AlertTriangle",
        blocks: [
          {
            kind: "paragraph",
            text: "Crisis communication requires speed, transparency, and consistency — organisations that communicate proactively and honestly during a crisis (a product recall, a data breach) generally preserve more stakeholder trust than those that delay or appear to hide information.",
          },
          { kind: "diagram", diagramId: "communication-barriers", caption: "Fig 1.2 — Common barriers to communication" },
          {
            kind: "table",
            headers: ["Barrier Type", "Example"],
            rows: [
              ["Physical Barriers", "Noise, distance, faulty equipment"],
              ["Semantic (Language) Barriers", "Jargon, ambiguous words, translation issues"],
              ["Psychological Barriers", "Prejudice, stress, mistrust between sender and receiver"],
              ["Organizational Barriers", "Long hierarchy, information overload, rigid rules limiting information flow"],
            ],
          },
        ],
      },
      {
        id: "case-studies",
        title: "5. Case Studies",
        icon: "Scale",
        blocks: [
          {
            kind: "callout",
            tone: "case",
            title: "Case study — Tylenol crisis communication (Johnson & Johnson)",
            text: "Johnson & Johnson's handling of the 1982 Tylenol poisoning crisis — immediately pulling all product off shelves nationwide and communicating transparently with the public — is still taught globally as the gold standard of crisis communication, versus companies that delay or downplay a crisis and suffer far greater long-term reputational damage.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Encoding/Decoding", definition: "Converting an idea into a message (encoding) and interpreting a received message (decoding)." },
      { term: "Noise", definition: "Anything that distorts a message anywhere in the communication process." },
      { term: "7 C's of Communication", definition: "Clarity, Conciseness, Concreteness, Correctness, Completeness, Courtesy, Consideration." },
      { term: "Grapevine", definition: "The informal communication network within an organisation." },
    ],
    examQuestions: [
      "Explain the process of communication with a diagram. (Long)",
      "Discuss the classification of communication with examples. (Medium)",
      "Explain the characteristics of successful communication (7 C's). (Medium)",
      "Discuss the importance of communication in management. (Medium)",
      "Explain the barriers to communication with examples. (Long)",
      "What principles should guide communication during a crisis? (Medium)",
    ],
  },
  {
    unitNumber: 2,
    title: "Oral and Written Communication",
    hours: 8,
    headings: [
      {
        id: "oral-communication",
        title: "1. Oral Communication",
        icon: "Mic",
        blocks: [
          {
            kind: "paragraph",
            text: "Principles of successful oral communication: clarity of speech, appropriate tone/pace, active listening, and adapting the message to the audience.",
          },
          {
            kind: "bullets",
            items: [
              "Conversation control: managing the flow and direction of a conversation without dominating it — includes turn-taking and steering back to the topic when needed.",
              "Reflection and empathy: the \"two sides\" of effective oral communication — reflection means genuinely thinking about and responding to what the other person said (not just waiting to speak); empathy means understanding and acknowledging the other person's feelings/perspective.",
              "Effective listening: active listening (fully concentrating, not interrupting, asking clarifying questions) versus passive listening (just hearing words without real engagement).",
              "Non-verbal communication: body language, facial expressions, eye contact, posture, and tone of voice — often communicates more than the actual words used.",
            ],
          },
        ],
      },
      {
        id: "written-communication",
        title: "2. Written Communication",
        icon: "PenTool",
        blocks: [
          {
            kind: "paragraph",
            text: "The purpose of writing in business is to create a clear, permanent, and reviewable record of information, decisions, or instructions.",
          },
          {
            kind: "paragraph",
            text: "Principles of effective writing: clarity, brevity, correct grammar/tone, and organising ideas logically for the reader.",
          },
          {
            kind: "paragraph",
            text: "The 3x3 Writing Process is the systematic approach taught for business writing:",
          },
          { kind: "diagram", diagramId: "writing-process", caption: "Fig 2.1 — The 3x3 Writing Process" },
          {
            kind: "bullets",
            items: [
              "Pre-writing: analyse the purpose and audience, gather ideas, and outline the structure before writing a single sentence.",
              "Writing: draft the actual content, following the outline, focusing on getting ideas down rather than perfecting wording yet.",
              "Revising: edit for clarity, conciseness, correctness (grammar/spelling), and overall coherence — often the most important stage for quality.",
            ],
          },
          {
            kind: "paragraph",
            text: "Specific writing features for business communication include coherence (logical flow between sentences/paragraphs, using transition words) and adapting tone/format for electronic writing (emails, chat messages) — typically shorter, more direct, and scannable than traditional printed business writing.",
          },
        ],
      },
      {
        id: "case-studies",
        title: "3. Case Study",
        icon: "Scale",
        blocks: [
          {
            kind: "callout",
            tone: "case",
            title: "Common workplace scenario",
            text: "A manager drafting an important client email without following the 3x3 process (skipping pre-writing) often produces a disorganised, overly long message — a common, avoidable communication failure that structured business writing training specifically targets.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Active Listening", definition: "Fully concentrating on, understanding, and responding to a speaker, rather than just hearing words." },
      { term: "3x3 Writing Process", definition: "Pre-writing, Writing, and Revising — the systematic approach to business writing." },
      { term: "Coherence", definition: "Logical flow and connection between sentences and paragraphs in writing." },
    ],
    examQuestions: [
      "Explain the principles of effective oral communication. (Medium)",
      "Discuss conversation control, reflection, and empathy in oral communication. (Medium)",
      "Explain the 3x3 writing process with an example. (Long)",
      "Discuss the principles of effective business writing. (Medium)",
      "How does electronic writing differ from traditional business writing? (Short)",
    ],
  },
  {
    unitNumber: 3,
    title: "Business Letters and Reports",
    hours: 8,
    headings: [
      {
        id: "business-letters",
        title: "1. Business Letters",
        icon: "Mail",
        blocks: [
          {
            kind: "table",
            headers: ["Letter Type", "Purpose"],
            rows: [
              ["Routine Letters", "Everyday business correspondence — placing an order, acknowledging receipt, providing information"],
              ["Persuasive Letters", "Aim to convince the reader — sales letters, collection letters, requests for a favour"],
              ["Positive Message Letters", "Deliver good news (e.g., approving a request) — direct approach, good news stated upfront"],
              ["Negative Message Letters", "Deliver bad news (e.g., rejecting a claim) — usually uses a buffer/indirect approach to soften the impact"],
            ],
          },
          {
            kind: "paragraph",
            text: "Memos are brief, internal written communications used for routine internal matters (announcements, internal requests, short updates) — less formal than a letter, since they stay within the organisation.",
          },
        ],
      },
      {
        id: "report-writing",
        title: "2. Report Writing",
        icon: "FileText",
        blocks: [
          {
            kind: "paragraph",
            text: "A report is a structured, objective document that presents information, analysis, and often recommendations, on a specific matter, for a specific audience.",
          },
          {
            kind: "bullets",
            items: [
              "Purpose of a report: to inform, analyse, and support decision-making with organised evidence.",
              "Kinds of reports: informational vs. analytical; formal vs. informal; periodic (routine, e.g., monthly sales report) vs. special (one-off investigation).",
              "Objectives of report writing: objectivity, clarity, and providing a reliable basis for management decisions.",
            ],
          },
        ],
      },
      {
        id: "presentation-skills",
        title: "3. Presentation Skills",
        icon: "Presentation",
        blocks: [
          {
            kind: "paragraph",
            text: "A presentation is an oral communication of information (often supported by visual aids) to an audience, for a specific purpose (informing, persuading, or training).",
          },
          {
            kind: "paragraph",
            text: "Key elements of an effective presentation: a clear structure (introduction, body, conclusion), strong opening/closing, confident delivery (voice, eye contact, pace), and well-designed supporting visual aids.",
          },
          {
            kind: "paragraph",
            text: "Advanced visual aid support for business presentations: well-designed slides (minimal text, strong visuals), charts/graphs for data, and increasingly, interactive tools/live demos — all should support the speaker's message, not replace or distract from it.",
          },
        ],
      },
      {
        id: "case-studies",
        title: "4. Case Study",
        icon: "Scale",
        blocks: [
          {
            kind: "callout",
            tone: "case",
            title: "Case study — Steve Jobs' presentation style",
            text: "Steve Jobs' Apple product launch presentations are widely studied for their minimal, visual-first slide design (often just one image or a few words per slide) — letting the speaker's narrative carry the message, rather than overloading the audience with text-heavy slides.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Buffer (in bad-news letters)", definition: "A neutral opening statement used to soften the impact of negative news that follows." },
      { term: "Analytical Report", definition: "A report that not only presents information but also analyses it and often recommends action." },
      { term: "Memo", definition: "A brief, informal internal written communication." },
    ],
    examQuestions: [
      "Explain the different types of business letters with examples. (Long)",
      "How should a negative message letter be structured? Explain with an example. (Medium)",
      "Discuss the purpose, kinds, and objectives of report writing. (Long)",
      "What are the elements of an effective business presentation? (Medium)",
      "Discuss the role of visual aids in business presentations. (Short)",
    ],
  },
  {
    unitNumber: 4,
    title: "Employment Communication",
    hours: 8,
    headings: [
      {
        id: "cv-writing",
        title: "1. Writing CVs",
        icon: "FileUser",
        blocks: [
          {
            kind: "paragraph",
            text: "A CV (Curriculum Vitae) or resume is a structured summary of a candidate's education, experience, skills, and achievements, designed to secure an interview.",
          },
          {
            kind: "bullets",
            items: [
              "Key sections: contact information, career objective/summary, education, work experience, skills, projects/certifications, and achievements.",
              "Good practice: tailor the CV to the specific job, use quantified achievements (\"increased sales by 20%\" rather than \"handled sales\"), keep formatting clean and consistent, and proofread carefully.",
            ],
          },
        ],
      },
      {
        id: "gd-interviews",
        title: "2. Group Discussions and Interview Skills",
        icon: "Users",
        blocks: [
          {
            kind: "paragraph",
            text: "A Group Discussion (GD) evaluates a candidate's communication skills, knowledge, teamwork, and leadership in a group setting — assessors typically look for clarity of thought, ability to listen and build on others' points, and not just dominating the conversation.",
          },
          {
            kind: "paragraph",
            text: "Interview skills: preparation (researching the company/role), clear and structured answers (e.g., using the STAR method — Situation, Task, Action, Result — for behavioural questions), confident body language, and thoughtful questions to ask the interviewer.",
          },
        ],
      },
      {
        id: "tech-impact",
        title: "3. Impact of Technological Advancement on Communication Networks",
        icon: "Wifi",
        blocks: [
          {
            kind: "table",
            headers: ["Technology", "Impact on Business Communication"],
            rows: [
              ["Intranet", "A private organisational network for secure internal communication and document sharing"],
              ["Internet", "Enables global communication and information access instantly"],
              ["Email", "The standard formal written communication channel in most organisations"],
              ["SMS / Instant Messaging", "Fast, informal, real-time communication for quick coordination"],
              ["Teleconferencing / Videoconferencing", "Enables real-time meetings between geographically distant participants, reducing travel needs"],
            ],
          },
        ],
      },
      {
        id: "case-studies",
        title: "4. Case Study",
        icon: "Scale",
        blocks: [
          {
            kind: "callout",
            tone: "case",
            title: "Common placement scenario",
            text: "In most Indian campus placement processes, candidates go through exactly this sequence — CV shortlisting, a Group Discussion round, and one or more personal interview rounds — making this unit's content directly applicable to a student's own upcoming placement preparation.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "STAR Method", definition: "Situation, Task, Action, Result — a structured way to answer behavioural interview questions." },
      { term: "Intranet", definition: "A private organisational network used for internal communication." },
      { term: "Group Discussion (GD)", definition: "A group-based evaluation of communication, knowledge, and teamwork skills." },
    ],
    examQuestions: [
      "Discuss the key sections and best practices for writing an effective CV. (Medium)",
      "What do assessors look for in a Group Discussion? (Medium)",
      "Explain the STAR method for answering interview questions. (Short)",
      "Discuss the impact of technological advancement on business communication networks. (Long)",
      "Differentiate between intranet and internet in an organisational context. (Short)",
    ],
  },
  {
    unitNumber: 5,
    title: "Group Communication",
    hours: 8,
    headings: [
      {
        id: "meetings",
        title: "1. Meetings: Planning and Leading",
        icon: "CalendarClock",
        blocks: [
          {
            kind: "paragraph",
            text: "Effective meetings require careful planning around: objectives (why is this meeting happening at all), participants (who genuinely needs to be there), timing, and venue (physical or virtual).",
          },
          {
            kind: "paragraph",
            text: "Leading a meeting effectively involves: circulating a clear agenda in advance, starting/ending on time, keeping the discussion focused on the agenda, ensuring all voices are heard, and closing with clear action items and owners.",
          },
        ],
      },
      {
        id: "media-management",
        title: "2. Media Management",
        icon: "Newspaper",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Press Release: an official written statement issued to media outlets to announce news (a product launch, financial results, an important company event).",
              "Press Conference: a live event where company representatives address journalists directly and take questions — used for major announcements or crisis response.",
              "Media Interviews: one-on-one or small-group interactions with journalists, requiring careful preparation of key messages and anticipation of difficult questions.",
            ],
          },
        ],
      },
      {
        id: "seminars-etiquette",
        title: "3. Seminars, Workshops, Conferences & Business Etiquette",
        icon: "Handshake",
        blocks: [
          {
            kind: "table",
            headers: ["Event Type", "Typical Purpose"],
            rows: [
              ["Seminar", "Focused, often smaller, educational session on a specific topic"],
              ["Workshop", "Interactive, hands-on session focused on building a specific skill"],
              ["Conference", "Larger event, often multi-day, bringing together many speakers/attendees around a broad theme"],
            ],
          },
          {
            kind: "paragraph",
            text: "Business etiquette covers the professional norms expected in workplace interactions — punctuality, appropriate dress, respectful communication, professional email/phone conduct, and cultural sensitivity, especially important in cross-cultural or client-facing business settings.",
          },
        ],
      },
      {
        id: "case-studies",
        title: "4. Case Study",
        icon: "Scale",
        blocks: [
          {
            kind: "callout",
            tone: "case",
            title: "Case study — Poorly planned vs. well-run meetings",
            text: "A frequently studied workplace problem is the \"meeting that could have been an email\" — a meeting held without a clear objective or agenda, wasting participants' time; contrasted with a well-run meeting with a circulated agenda, time-boxed discussion, and clear follow-up actions — illustrating exactly the planning principles taught in this unit.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Press Release", definition: "An official written statement issued to media outlets to announce news." },
      { term: "Business Etiquette", definition: "The professional norms expected in workplace interactions and communication." },
    ],
    examQuestions: [
      "Discuss the key considerations in planning and leading an effective meeting. (Long)",
      "Explain press releases and press conferences as tools of media management. (Medium)",
      "Differentiate between a seminar, a workshop, and a conference. (Short)",
      "Discuss the importance of business etiquette in professional communication. (Medium)",
    ],
  },
];
