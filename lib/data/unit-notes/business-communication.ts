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
            text: "Communication is a systematic process in which two or more persons exchange information, ideas, facts, opinions, feelings, or instructions with the pu" +
                  "rpose of creating shared understanding. In business, communication is successful only when the receiver interprets the message substantially as the se" +
                  "nder intended. It involves a sender, encoding, message, channel, receiver, decoding, feedback, and possible noise. In an organisation, communication c" +
                  "onnects managers, employees, customers, suppliers, and other stakeholders and supports coordination, decision-making, problem-solving, and relationshi" +
                  "p building. For examination purposes, communication should be understood as a complete process rather than a one-way transfer of words. The sender mus" +
                  "t select an appropriate message and medium, while the receiver must interpret the message in the intended context. In business organisations, effectiv" +
                  "e communication reduces uncertainty, coordinates activities, supports relationships, and helps employees understand what is expected from them. A stro" +
                  "ng answer should also distinguish between communication and mere information: information becomes effective communication when it is transmitted, inte" +
                  "rpreted, and understood by the intended receiver.",
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
            text: "Business communication serves several purposes. It informs employees and stakeholders about facts, policies, decisions, performance, and changes. It p" +
                  "ersuades customers, employees, investors, or other stakeholders to accept an idea, proposal, product, or course of action. It instructs people through" +
                  " directions, procedures, standards, and operating information. It motivates employees by communicating goals, recognition, expectations, and encourage" +
                  "ment. It also builds relationships by creating trust, cooperation, goodwill, and mutual understanding among internal and external stakeholders. In man" +
                  "agerial situations, the purpose determines the form of communication. For example, an instruction may require a direct and unambiguous channel, while " +
                  "persuasion may require supporting evidence and explanation. Feedback is particularly important because it tells the sender whether the receiver has un" +
                  "derstood the message and whether corrective clarification is necessary. Thus, the communication process is continuous and interactive rather than a si" +
                  "mple movement of information from one person to another.",
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
            text: "The characteristics of successful communication are commonly explained through the 7 C's. Clarity means that the purpose and meaning should be easy to" +
                  " understand. Conciseness means avoiding unnecessary words and repetition while retaining essential information. Concreteness requires specific and def" +
                  "inite language rather than vague statements. Correctness means that facts, grammar, spelling, terminology, and other details should be accurate. Compl" +
                  "eteness requires providing the information needed to understand the message or take action. Courtesy means communicating respectfully and professional" +
                  "ly. Consideration means viewing the message from the receiver's perspective and adapting language, tone, and content to the audience. The 7 C's are es" +
                  "pecially useful as an examination framework because each principle addresses a different source of communication failure. Clarity reduces ambiguity, c" +
                  "onciseness reduces unnecessary information, concreteness reduces vagueness, correctness improves reliability, completeness prevents missing informatio" +
                  "n, courtesy supports relationships, and consideration makes the message receiver-oriented. Managers who apply these principles can communicate policie" +
                  "s, instructions, decisions, and feedback more effectively.",
          },
          {
            kind: "paragraph",
            text: "Importance of communication in management: it is the thread that connects all managerial functions from Unit 1 of MCOB — planning, organising, staffin" +
                  "g, directing, and controlling all depend on effective communication to work at all. Poor communication is one of the most commonly cited reasons for s" +
                  "trategy implementation failure.",
          },
          {
            kind: "paragraph",
            text: "Organisational communication operates through both formal and informal structures. Formal communication follows officially recognised channels and the" +
                  " organisational hierarchy, such as instructions from managers to subordinates, reports from employees to managers, and coordination between department" +
                  "s. Informal communication develops naturally through interpersonal relationships and is often called the grapevine. It can spread information quickly," +
                  " but its accuracy is not always guaranteed. Organisations therefore use formal channels for authoritative information while recognising that informal " +
                  "networks also influence information flow.",
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
            text: "Crisis communication refers to planned and timely communication when an organisation faces an event that may threaten its operations, reputation, empl" +
                  "oyees, customers, or other stakeholders. Important principles include speed, transparency, consistency, accuracy, empathy, and regular updates. The or" +
                  "ganisation should communicate verified facts quickly, explain what is being done, identify what is known and unknown, and provide practical guidance. " +
                  "Messages should remain consistent across official channels and be updated as new facts become available. Delayed, contradictory, or misleading communi" +
                  "cation can increase uncertainty and damage stakeholder confidence. Barriers can occur at any stage of the communication process. A message may be phys" +
                  "ically interrupted, interpreted differently because of language, affected by emotions, or delayed by organisational procedures. Overcoming barriers re" +
                  "quires identifying their source, selecting a suitable channel, using simple and precise language, encouraging feedback, reducing unnecessary hierarchy" +
                  ", and creating an environment in which people can communicate concerns openly. In a long-answer question, barriers should ideally be explained categor" +
                  "y-wise with examples and suitable remedies.",
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
            text: "Johnson & Johnson's handling of the 1982 Tylenol poisoning crisis — immediately pulling all product off shelves nationwide and communicating transpare" +
                  "ntly with the public — is still taught globally as the gold standard of crisis communication, versus companies that delay or downplay a crisis and suf" +
                  "fer far greater long-term reputational damage. The meeting example demonstrates that efficiency depends more on purpose and management than on simply " +
                  "scheduling a gathering. A poorly planned meeting can consume organisational time without producing a decision or action. A well-run meeting establishe" +
                  "s a clear objective, uses an agenda, manages time, encourages relevant participation, records decisions, and assigns responsibility for follow-up. Thi" +
                  "s makes meeting management an important practical application of business communication principles. The case demonstrates the role of crisis communica" +
                  "tion in protecting stakeholder confidence. In an exam answer, explain that the value of the example lies in its communication principles: prompt actio" +
                  "n, clear public information, consistency, responsibility, and attention to stakeholder safety and trust. This workplace example demonstrates the pract" +
                  "ical value of the 3x3 writing process. A well-planned message is more likely to have a clear purpose, logical organisation, appropriate tone, and a sp" +
                  "ecific action request. The example can be used to show why revision is not merely proofreading but an essential stage of effective business writing. T" +
                  "he presentation example illustrates the principle of matching visual design to the communication objective. Minimal slides can support a narrative, wh" +
                  "ile analytical presentations may require more detailed charts and tables. The important requirement is that visual aids should improve comprehension a" +
                  "nd should not overload the audience. The placement example shows that employment communication is continuous across the recruitment process. Each stag" +
                  "e communicates different information: the CV communicates qualifications, the GD demonstrates interaction and reasoning, and the interview provides de" +
                  "eper evidence of suitability and professional behaviour. The meeting example shows that meeting effectiveness depends on planning, leadership, partici" +
                  "pation, time management, and follow-up. The central lesson is that a meeting should produce a useful communication outcome such as a decision, solutio" +
                  "n, allocation of responsibility, or agreed next step.",
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
      "Explain the process of communication with a diagram. (Long Explain the sender, encoding, message, channel, receiver, decoding, feedback, and noise in sequence and relate each element to a business example.)",
      "Discuss the classification of communication with examples. (Medium Cover classification by direction, mode, and formality, with at least one organisational example for each.)",
      "Explain the characteristics of successful communication (7 C's). (Medium Define all seven C's and explain how each improves message effectiveness.)",
      "Discuss the importance of communication in management. (Medium Link communication with planning, organising, staffing, directing, controlling, coordination, decision-making, and employee relations.)",
      "Explain the barriers to communication with examples. (Long Classify barriers and explain physical, semantic, psychological, and organisational causes with examples and remedies.)",
      "What principles should guide communication during a crisis? (Medium Explain speed, transparency, accuracy, consistency, empathy, responsibility, and regular stakeholder updates.)",
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
            text: "Successful oral communication depends on both what is said and how it is delivered. Clarity of speech makes ideas understandable. Appropriate tone and" +
                  " pace help communicate confidence, seriousness, friendliness, or urgency according to the situation. Active listening requires attention, understandin" +
                  "g, relevant questions, and suitable responses. The message should also be adapted to the audience because technical or professional information may re" +
                  "quire different language for a specialist, customer, senior manager, or new employee. Oral communication is particularly useful when a message require" +
                  "s immediate interaction, clarification, negotiation, discussion, or emotional understanding. Its effectiveness depends on both verbal and non-verbal e" +
                  "lements. A speaker should organise the message before speaking, use understandable language, maintain suitable pace and tone, listen carefully to resp" +
                  "onses, and modify the explanation when the receiver appears confused. In business settings, meetings, interviews, presentations, telephone calls, coun" +
                  "selling, negotiations, and day-to-day managerial conversations all depend on effective oral communication.",
          },
          {
            kind: "bullets",
            items: [
              "Conversation control: managing the flow and direction of a conversation without dominating it. It includes appropriate turn-taking, asking relevant questions, and bringing the discussion back to the main topic when it moves away from the purpose. Good conversation control keeps communication orderly while allowing other participants to contribute.",
              "Reflection and empathy: the \"two sides\" of effective oral communication — reflection means genuinely thinking about and responding to what the other person said (not just waiting to speak); empathy means understanding and acknowledging the other person's feelings/perspective.",
              "Effective listening: active listening requires full concentration, avoiding unnecessary interruption, asking clarifying questions, observing relevant non-verbal signals, and responding appropriately to demonstrate understanding. Passive listening mainly involves hearing the words without meaningful engagement. Active listening is particularly important in managerial communication because it helps identify problems, clarify expectations, and build trust.",
              "Non-verbal communication includes body language, facial expressions, eye contact, posture, gestures, physical distance, and aspects of voice such as tone and pace. These signals can support, modify, or sometimes contradict the spoken message. Effective oral communication therefore requires attention to both verbal content and non-verbal behaviour.",
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
            text: "Business writing communicates information, decisions, instructions, proposals, requests, reports, and other organisational messages in a clear and las" +
                  "ting form. Written communication creates a record that can be reviewed, stored, referred to later, and shared with authorised persons. It is therefore" +
                  " important for formal instructions, business decisions, client communication, policies, reports, and documentation. Effective business writing should " +
                  "be reader-oriented, logically organised, accurate, concise, and appropriate to its purpose and audience. Written communication is preferred when accur" +
                  "acy, permanence, detailed explanation, or a formal record is important. The writer must consider the reader before choosing vocabulary, structure, ton" +
                  "e, and level of detail. Business writing should normally answer three questions: why is the message being written, what does the reader need to know, " +
                  "and what action is expected? A document that contains correct information but fails to present it in a logical and reader-friendly manner may still be" +
                  " ineffective.",
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
              "Pre-writing: analyse the purpose, audience, and expected outcome; gather relevant information and ideas; select necessary material; and prepare an outline. This stage reduces unnecessary content and helps the writer decide what the reader needs to know before drafting.",
              "Writing: prepare the first draft by converting planned ideas into organised paragraphs and sentences. The writer should follow the outline and focus first on communicating the complete message rather than spending excessive time perfecting individual words during the initial draft.",
              "Revising: critically review the draft for clarity, conciseness, correctness, completeness, tone, grammar, spelling, and overall coherence. The writer should check whether the message achieves its purpose, whether the sequence of ideas is logical, and whether the reader can easily identify required actions or conclusions.",
            ],
          },
          {
            kind: "paragraph",
            text: "Effective business writing requires coherence, meaning that ideas are connected logically so the reader can move smoothly from one point to the next. " +
                  "Transition words, headings, appropriate paragraphing, and logical sequencing help create coherence. Electronic communication also requires adaptation " +
                  "of tone and format. Business emails and professional messages are generally shorter, more direct, and easier to scan than lengthy printed documents, b" +
                  "ut they must still use professional language, correct grammar, suitable subject lines, and clear action points.",
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
            text: "A manager drafting an important client email without following the 3x3 process (skipping pre-writing) often produces a disorganised, overly long messa" +
                  "ge — a common, avoidable communication failure that structured business writing training specifically targets.",
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
            text: "Memos are brief, internal written communications used for routine internal matters (announcements, internal requests, short updates) — less formal tha" +
                  "n a letter, since they stay within the organisation. Business letters remain important when communication requires a formal written record with a clea" +
                  "r sender, receiver, purpose, and professional format. The choice of letter type depends on the objective. Routine and positive messages generally comm" +
                  "unicate the main point directly, while persuasive messages emphasise reasons and benefits, and negative messages require careful organisation so that " +
                  "the decision is communicated clearly without unnecessary offence. The tone should remain professional even when the content is unfavourable.",
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
            text: "A report is a systematic and structured business document prepared to present information, findings, analysis, conclusions, and, where appropriate, re" +
                  "commendations about a specific subject. Reports are normally prepared for a defined audience and purpose. Depending on its purpose, a report may descr" +
                  "ibe a situation, investigate a problem, compare alternatives, evaluate performance, or support management decision-making. Objectivity, clarity, accur" +
                  "acy, and logical organisation are important qualities of report writing. Report writing differs from ordinary business correspondence because a report" +
                  " normally organises information in a systematic manner for a defined purpose and audience. Depending on the assignment, the writer may need to collect" +
                  " evidence, classify information, analyse findings, draw conclusions, and make recommendations. The report should therefore distinguish facts from inte" +
                  "rpretation and recommendations. A well-structured report helps management understand a situation and take an informed decision.",
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
            text: "A business presentation is a planned oral communication delivered to an audience for a specific purpose such as informing, persuading, training, expla" +
                  "ining a proposal, or reporting results. An effective presentation combines content, organisation, delivery, and supporting visual aids. The presenter " +
                  "should understand the audience, define the objective, arrange ideas logically, use suitable examples or evidence, and deliver the message confidently." +
                  " Visual aids should reinforce the central message rather than compete with the speaker. Presentation effectiveness depends on the relationship between" +
                  " content, structure, delivery, and visual support. A presenter should first establish the objective and audience, then organise the material into a lo" +
                  "gical sequence. Delivery should include appropriate voice modulation, pace, posture, eye contact, and confidence. Visual aids should simplify complex " +
                  "information, highlight important data, and support memory rather than forcing the audience to read large amounts of text while the presenter speaks.",
          },
          {
            kind: "paragraph",
            text: "Key elements of an effective presentation: a clear structure (introduction, body, conclusion), strong opening/closing, confident delivery (voice, eye " +
                  "contact, pace), and well-designed supporting visual aids.",
          },
          {
            kind: "paragraph",
            text: "Advanced visual aid support for business presentations: well-designed slides (minimal text, strong visuals), charts/graphs for data, and increasingly," +
                  " interactive tools/live demos — all should support the speaker's message, not replace or distract from it.",
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
            text: "Steve Jobs' Apple product launch presentations are widely studied for their minimal, visual-first slide design (often just one image or a few words pe" +
                  "r slide) — letting the speaker's narrative carry the message, rather than overloading the audience with text-heavy slides.",
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
            text: "A CV or resume is a structured professional document presenting a candidate's education, qualifications, experience, skills, projects, certifications," +
                  " and relevant achievements. Its employment purpose is to communicate the candidate's suitability for a position and encourage the employer to consider" +
                  " the candidate for an interview. An effective CV should be accurate, well organised, easy to read, relevant to the job, and free from spelling or fact" +
                  "ual errors. A CV should be treated as a targeted communication document rather than a complete autobiography. The employer should be able to identify " +
                  "the candidate's relevant qualifications, experience, skills, and achievements quickly. Information should be arranged in a logical order, and importan" +
                  "t achievements should be supported by measurable outcomes where possible. Tailoring the CV to the job description also helps the candidate emphasise t" +
                  "he capabilities most relevant to the position.",
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
            text: "A Group Discussion (GD) is a structured group activity used to observe how candidates communicate and interact while discussing a topic or problem. It" +
                  " can assess clarity of thought, subject awareness, listening ability, reasoning, teamwork, confidence, leadership behaviour, and the ability to respon" +
                  "d constructively to different viewpoints. Effective participation is not the same as speaking the most. A strong participant contributes relevant poin" +
                  "ts, listens to others, builds on useful ideas, disagrees respectfully when necessary, and helps keep the discussion productive. Both GDs and interview" +
                  "s test communication in different ways. A GD emphasises interaction among several participants, so listening, turn-taking, reasoning, teamwork, and co" +
                  "nstructive disagreement are important. An interview is more individual and requires the candidate to answer questions directly while demonstrating sui" +
                  "tability for the role. In both situations, preparation, clarity, confidence, professional body language, and evidence-based examples improve the quali" +
                  "ty of communication.",
          },
          {
            kind: "paragraph",
            text: "Effective interview performance begins before the interview. Candidates should research the organisation, understand the job description, review their" +
                  " CV, and prepare examples demonstrating relevant skills and achievements. During the interview, answers should be clear, relevant, structured, and sup" +
                  "ported by examples. For behavioural questions, the STAR method—Situation, Task, Action, Result—helps present an experience logically. Professional bod" +
                  "y language, attentive listening, appropriate eye contact, confident but respectful communication, and thoughtful questions also contribute to effectiv" +
                  "e interview communication.",
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
            text: "In most Indian campus placement processes, candidates go through exactly this sequence — CV shortlisting, a Group Discussion round, and one or more pe" +
                  "rsonal interview rounds — making this unit's content directly applicable to a student's own upcoming placement preparation.",
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
            text: "An effective meeting begins with clear planning. The objective should be defined so participants understand why the meeting is necessary and what outc" +
                  "ome is expected. Only relevant participants should be invited because unnecessary attendance increases time and cost. The date and duration should sui" +
                  "t the participants and purpose. The physical or virtual venue and required technology should be arranged in advance. Proper preparation helps the meet" +
                  "ing remain focused and increases the likelihood of achieving its intended outcome. Meetings are useful when interaction, discussion, coordination, pro" +
                  "blem-solving, consultation, or collective decision-making is required. A meeting should have a clear purpose and an expected outcome. Before the meeti" +
                  "ng, the organiser should prepare the agenda, relevant documents, participants, time, venue, and technology. During the meeting, the leader should mana" +
                  "ge discussion and participation. After the meeting, decisions and responsibilities should be communicated so that discussion is converted into action.",
          },
          {
            kind: "paragraph",
            text: "Effective meeting leadership requires active control of both time and discussion. A clear agenda should be circulated in advance so participants can p" +
                  "repare. The meeting should start and finish as scheduled, and the leader should keep discussion related to the stated objectives. Participants should " +
                  "receive a reasonable opportunity to contribute, while irrelevant or repetitive discussion should be redirected. At the conclusion, decisions, action i" +
                  "tems, responsible persons, and expected deadlines should be clearly recorded. Follow-up communication is important because a meeting is successful onl" +
                  "y when agreed actions are implemented.",
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
            text: "Business etiquette refers to accepted standards of professional behaviour that guide communication and interaction in the workplace. It includes punct" +
                  "uality, appropriate professional appearance, respectful language, attentive listening, proper email and telephone conduct, appropriate meeting behavio" +
                  "ur, and sensitivity to cultural differences. Good etiquette helps create a professional environment and supports positive relationships with colleague" +
                  "s, customers, suppliers, and other stakeholders. In cross-cultural and client-facing situations, awareness of differences in communication style, gree" +
                  "tings, formality, and business practices becomes especially important. Seminars, workshops, and conferences differ mainly in scale, purpose, and degre" +
                  "e of participant interaction. A seminar generally focuses on learning about a defined topic, a workshop emphasises practical participation and skill d" +
                  "evelopment, and a conference brings together a larger professional or academic community around a broader theme. Business etiquette applies across all" +
                  " these settings because professional communication, punctuality, respectful behaviour, appropriate appearance, and cultural awareness affect the quali" +
                  "ty of professional relationships.",
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
            text: "A frequently studied workplace problem is the \"meeting that could have been an email\" — a meeting held without a clear objective or agenda, wasting " +
                  "participants' time; contrasted with a well-run meeting with a circulated agenda, time-boxed discussion, and clear follow-up actions — illustrating exa" +
                  "ctly the planning principles taught in this unit.",
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
