import { UnitNote } from "@/types";

// Detailed, in-app notes for Business English (BBA105) — AKTU BBA Sem 1.
export const bbaBusinessEnglishUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Functional Grammar for Business English",
    hours: 7,
    headings: [
      {
        id: "business-english-overview",
        title: "1. Overview of Business English and the Four Language Skills",
        icon: "Globe",
        blocks: [
          {
            kind: "paragraph",
            text: "Business English is the specific register of English used in commercial and professional contexts — clearer, more concise, and more formal than everyday conversational English, and increasingly important as English functions as a global business language.",
          },
          { kind: "diagram", diagramId: "language-skills", caption: "Fig 1.1 — The four language skills (LSRW)" },
          {
            kind: "paragraph",
            text: "Effective managerial communication depends on all four skills working together: Listening (understanding others accurately), Speaking (expressing ideas clearly), Reading (comprehending written material efficiently), and Writing (producing clear, professional documents).",
          },
        ],
      },
      {
        id: "parts-of-speech",
        title: "2. Use and Correction of Parts of Speech",
        icon: "SpellCheck",
        blocks: [
          {
            kind: "table",
            headers: ["Part of Speech", "Common Error", "Correction"],
            rows: [
              ["Nouns & Pronouns", "Pronoun-antecedent disagreement: \"Each employee must submit their report\"", "\"Each employee must submit his or her report\" (formal) or make the subject plural: \"All employees must submit their reports\""],
              ["Verbs & Tenses", "Inconsistent tense: \"He goes to the meeting and presented the report\"", "\"He went to the meeting and presented the report\""],
              ["Adjectives & Adverbs", "Confusing the two: \"She performed good\"", "\"She performed well\" (adverb needed to modify a verb)"],
              ["Articles", "Missing/wrong article: \"He is manager of department\"", "\"He is the manager of the department\""],
              ["Prepositions", "Wrong preposition: \"Discuss about the issue\"", "\"Discuss the issue\" (discuss doesn't take 'about')"],
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "LSRW", definition: "Listening, Speaking, Reading, Writing — the four core language skills." },
      { term: "Business English", definition: "The formal, concise register of English used in commercial and professional contexts." },
    ],
    examQuestions: [
      "Explain the importance of the four language skills (LSRW) in managerial communication. (Medium)",
      "Identify and correct common errors in the use of nouns, pronouns, and verbs. (Long)",
      "Explain common errors in the use of articles and prepositions with corrections. (Medium)",
    ],
  },
  {
    unitNumber: 2,
    title: "Compositions",
    hours: 10,
    headings: [
      {
        id: "sentence-types",
        title: "1. Sentence Types and Conjunctions",
        icon: "PenTool",
        blocks: [
          {
            kind: "table",
            headers: ["Sentence Type", "Structure", "Example"],
            rows: [
              ["Simple", "One independent clause", "\"The company launched a new product.\""],
              ["Compound", "Two or more independent clauses joined by a coordinating conjunction (and, but, or)", "\"The company launched a new product, and sales increased.\""],
              ["Complex", "One independent clause plus one or more dependent clauses joined by a subordinating conjunction (because, although, since)", "\"Sales increased because the company launched a new product.\""],
            ],
          },
          {
            kind: "paragraph",
            text: "A Phrase is a group of words without a subject-verb pair (e.g., \"in the morning\"); a Clause has both a subject and a verb (e.g., \"when the meeting started\").",
          },
        ],
      },
      {
        id: "transformations",
        title: "2. Transformations: Active-Passive and Direct-Indirect",
        icon: "ArrowLeftRight",
        blocks: [
          {
            kind: "table",
            headers: ["Transformation", "Example"],
            rows: [
              ["Active to Passive", "Active: \"The manager approved the proposal.\" → Passive: \"The proposal was approved by the manager.\""],
              ["Direct to Indirect (Reported Speech)", "Direct: She said, \"I will finish the report today.\" → Indirect: She said that she would finish the report that day."],
            ],
          },
          {
            kind: "callout",
            tone: "info",
            title: "Why passive voice matters in business writing",
            text: "Passive voice is often used deliberately in business writing to sound more formal/objective, or to avoid directly assigning blame (e.g., \"Mistakes were made\" rather than \"I made mistakes\") — though overuse can make writing sound vague or evasive.",
          },
        ],
      },
      {
        id: "summary-comprehension",
        title: "3. Summary, Paragraph Writing and Comprehension",
        icon: "FileText",
        blocks: [
          {
            kind: "paragraph",
            text: "Summary writing condenses a longer passage into its essential points, in the summariser's own words, typically to about one-third of the original length — key skills include identifying the main idea, distinguishing it from supporting details, and avoiding personal opinion.",
          },
          {
            kind: "paragraph",
            text: "Passage comprehension involves reading a passage carefully and answering questions that test understanding of its main ideas, specific details, tone, and the writer's intent.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Compound Sentence", definition: "A sentence with two or more independent clauses joined by a coordinating conjunction." },
      { term: "Reported Speech", definition: "Restating what someone said without quoting their exact words (indirect speech)." },
    ],
    examQuestions: [
      "Differentiate between simple, compound, and complex sentences with examples. (Medium)",
      "Transform the given active voice sentences into passive voice. (Long)",
      "Transform the given direct speech sentences into indirect (reported) speech. (Long)",
      "Explain the key skills required for effective summary writing. (Medium)",
    ],
  },
  {
    unitNumber: 3,
    title: "Paragraph Writing and Vocabulary Building",
    hours: 6,
    headings: [
      {
        id: "writing-mechanics",
        title: "1. Mechanics of Writing and Types of Writing",
        icon: "PenLine",
        blocks: [
          {
            kind: "paragraph",
            text: "The mechanics of writing include correct punctuation, spelling, capitalisation, and sentence structure — the basic building blocks that make writing readable and professional.",
          },
          {
            kind: "table",
            headers: ["Sub-skill", "Meaning"],
            rows: [
              ["Cohesion", "The grammatical/lexical linking between sentences (using pronouns, transition words like 'however', 'therefore')"],
              ["Coherence", "The logical flow of ideas as a whole, so the text makes sense as a unified piece"],
              ["Style", "The distinctive way of writing — formal/informal, technical/simple, tone"],
            ],
          },
          {
            kind: "paragraph",
            text: "Types of writing: Academic writing (formal, evidence-based, following citation conventions), Technical writing (precise, instructional, often for a specialist audience — e.g., a user manual), and Content writing (engaging, often for marketing/digital platforms, tailored for a general audience).",
          },
        ],
      },
      {
        id: "vocabulary-building",
        title: "2. Vocabulary Building and Word Formation",
        icon: "BookText",
        blocks: [
          {
            kind: "table",
            headers: ["Concept", "Example"],
            rows: [
              ["Prefix", "'un-' + happy = unhappy (added before a root word)"],
              ["Suffix", "happy + '-ness' = happiness (added after a root word)"],
              ["Synonym", "'Big' and 'large' (words with similar meanings)"],
              ["Antonym", "'Profit' and 'loss' (words with opposite meanings)"],
              ["One Word Substitution", "'A person who loves books' = 'Bibliophile'"],
            ],
          },
          {
            kind: "paragraph",
            text: "Meaning of important business words: terms like 'stakeholder,' 'liquidity,' 'synergy,' and 'benchmark' recur constantly in business communication — building a strong business vocabulary directly improves both comprehension of business material and the professionalism of one's own writing.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Cohesion", definition: "The grammatical and lexical linking between sentences in a text." },
      { term: "Coherence", definition: "The logical flow of ideas making a text sensible as a unified whole." },
      { term: "One Word Substitution", definition: "Replacing a phrase with a single word that carries the same meaning." },
    ],
    examQuestions: [
      "Differentiate between cohesion and coherence in writing. (Short)",
      "Differentiate between academic, technical, and content writing. (Medium)",
      "Explain word formation using prefixes and suffixes with examples. (Medium)",
      "Give one-word substitutions and their meanings for common business phrases. (Short)",
    ],
  },
  {
    unitNumber: 4,
    title: "Conversational Skills",
    hours: 10,
    headings: [
      {
        id: "formal-informal-interaction",
        title: "1. Face-to-Face Interaction: Formal and Informal Situations",
        icon: "MessagesSquare",
        blocks: [
          {
            kind: "table",
            headers: ["Situation", "Example Phrases"],
            rows: [
              ["Greetings", "\"Good morning\", \"Pleased to meet you\""],
              ["Replying to Greetings", "\"I'm doing well, thank you. And you?\""],
              ["Introducing Others", "\"I'd like you to meet...\", \"May I introduce...\""],
              ["Welcoming", "\"Welcome to our office\", \"Thank you for coming\""],
              ["Bidding Farewell", "\"It was a pleasure meeting you\", \"Looking forward to our next meeting\""],
            ],
          },
        ],
      },
      {
        id: "interview-conversation",
        title: "2. Basic Conversations for Effective Interviews",
        icon: "UserCheck",
        blocks: [
          {
            kind: "paragraph",
            text: "Common interview conversation topics: talking about oneself (a concise, well-structured self-introduction), discussing strengths and weaknesses (framing weaknesses constructively, showing self-awareness and improvement), sharing future plans (showing ambition aligned with the role), and describing likes/dislikes and one's family background appropriately when asked.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Easy example",
            text: "A well-structured self-introduction typically follows: Present (current role/studies) → Past (relevant background/experience) → Future (why this opportunity fits your goals) — giving the interviewer a clear, memorable narrative rather than just a list of facts.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Present-Past-Future Structure", definition: "A structured approach to a self-introduction covering current status, background, and future goals." },
    ],
    examQuestions: [
      "Draft appropriate expressions for greetings, introductions, and farewells in a business setting. (Medium)",
      "Explain how to structure an effective self-introduction for an interview. (Medium)",
      "How should a candidate discuss their strengths and weaknesses in an interview? (Short)",
    ],
  },
  {
    unitNumber: 5,
    title: "Reading Skills",
    hours: 7,
    headings: [
      {
        id: "reading-strategies",
        title: "1. Intensive and Extensive Reading",
        icon: "BookOpen",
        blocks: [
          {
            kind: "table",
            headers: ["Reading Strategy", "Purpose"],
            rows: [
              ["Intensive Reading", "Careful, detailed reading of a shorter text to fully understand its meaning, structure, and language (e.g., studying a contract clause by clause)"],
              ["Extensive Reading", "Reading a large volume of material for general understanding and enjoyment, without focusing on every detail (e.g., reading business news broadly to stay informed)"],
            ],
          },
        ],
      },
      {
        id: "critical-reading-thinking",
        title: "2. Critical Reading and Critical Thinking Skills",
        icon: "Brain",
        blocks: [
          {
            kind: "paragraph",
            text: "Critical Reading goes beyond understanding WHAT a text says to evaluating HOW well it says it — questioning the author's assumptions, evidence, and possible bias, rather than accepting claims at face value.",
          },
          {
            kind: "paragraph",
            text: "Critical Thinking Skills involve analysing information objectively, questioning assumptions, evaluating evidence, and forming well-reasoned conclusions — an essential skill for a manager evaluating a business report, a market study, or a colleague's proposal, rather than accepting conclusions unquestioningly.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Intensive Reading", definition: "Careful, detailed reading of a shorter text to fully understand its meaning and structure." },
      { term: "Critical Reading", definition: "Evaluating a text's assumptions, evidence, and possible bias, not just its stated content." },
    ],
    examQuestions: [
      "Differentiate between intensive and extensive reading with examples. (Medium)",
      "Explain the concept of critical reading. (Short)",
      "Discuss the importance of critical thinking skills for a business manager. (Medium)",
    ],
  },
];
