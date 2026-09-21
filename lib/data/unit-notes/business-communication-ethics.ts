import { UnitNote } from "@/types";

// Detailed, exam-oriented notes for Business Communication and Ethical Values (C-103)
// — Dr. Bhimrao Ambedkar University, Agra (DBRAU) BCA Semester 1, syllabus
// effective from session 2025-26.
//
// Sample letters/reports use `kind: "code"` with language "letter" so that their
// layout is preserved (see README-INTEGRATION.md).
export const businessCommunicationEthicsUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Means of Communication",
    hours: 8,
    headings: [
      {
        id: "meaning-definition",
        title: "1. Meaning, Definition and Nature of Communication",
        icon: "MessageCircle",
        blocks: [
          {
            kind: "paragraph",
            text: "The word 'communication' comes from the Latin word 'communis', which means 'common'. To communicate is to share ideas, facts, feelings or opinions with someone so that both the sender and the receiver arrive at a COMMON understanding. Communication is not just sending a message — it is complete only when the message is received and understood in the same sense in which it was sent.",
          },
          {
            kind: "table",
            headers: ["Author", "Definition (in brief)"],
            rows: [
              ["Keith Davis", "Communication is the process of passing information and understanding from one person to another."],
              ["Louis A. Allen", "Communication is the sum of all the things one person does when he wants to create understanding in the mind of another; it involves a systematic and continuous process of telling, listening and understanding."],
              ["Newman and Summer", "Communication is an exchange of facts, ideas, opinions or emotions by two or more persons."],
              ["Business communication", "The exchange of information, ideas and instructions between people inside and outside a business organisation to achieve its objectives — with employees, managers, customers, suppliers, investors, government and the public."],
            ],
          },
          {
            kind: "table",
            headers: ["Nature / Characteristic", "Explanation"],
            rows: [
              ["Two-way process", "Communication needs at least two persons — a sender and a receiver — and is complete only with feedback."],
              ["Exchange of information and understanding", "Passing information is not enough; the receiver must understand it."],
              ["Continuous and dynamic", "It goes on all the time in an organisation and changes with people, situations and technology."],
              ["Goal-oriented", "Every business message has a purpose — to inform, persuade, instruct or build goodwill."],
              ["Pervasive", "It is present at all levels and in all functions — production, marketing, finance, HR."],
              ["Verbal and non-verbal", "Communication uses words (spoken and written) as well as signs, gestures, tone and silence."],
              ["Both formal and informal", "Follows official channels as well as personal, informal networks."],
            ],
          },
        ],
      },
      {
        id: "process",
        title: "2. The Process of Communication",
        icon: "RefreshCw",
        blocks: [
          {
            kind: "paragraph",
            text: "Communication is a process — a series of steps through which an idea travels from the sender to the receiver and comes back as feedback. The basic model has seven elements. Any disturbance that spoils the message on its way (such as a bad phone line, a loud noise or misunderstanding) is called NOISE.",
          },
          { kind: "diagram", diagramId: "communication-process", caption: "Fig 1.1 — The communication process" },
          {
            kind: "table",
            headers: ["Element", "Meaning", "Example"],
            rows: [
              ["Sender (Communicator)", "The person who has an idea and starts the communication.", "A manager who wants to call a meeting"],
              ["Encoding", "Converting the idea into symbols — words, pictures, gestures — that can be sent.", "Writing the notice: 'Meeting at 11 a.m. tomorrow'"],
              ["Message", "The actual information, idea or feeling that is sent.", "The notice itself"],
              ["Channel (Medium)", "The route or means through which the message travels.", "E-mail, notice board, phone call"],
              ["Receiver", "The person for whom the message is meant.", "The staff members"],
              ["Decoding", "The receiver interpreting the symbols and understanding the meaning.", "Employees read the notice and understand the time and place"],
              ["Feedback", "The receiver's response that tells the sender the message has been understood. It completes the process.", "'Sir, we will be there.'"],
              ["Noise", "Any barrier that distorts the message at any stage.", "Wrong e-mail ID, poor network, language problems"],
            ],
          },
          {
            kind: "callout",
            tone: "info",
            title: "Exam Tip",
            text: "Always draw the diagram (Sender → Encoding → Message/Channel → Decoding → Receiver → Feedback) and explain each element with one line and one example. Mention 'noise' — it is often forgotten and earns extra marks.",
          },
        ],
      },
      {
        id: "functions-objectives",
        title: "3. Functions, Objectives and Importance of Communication",
        icon: "Target",
        blocks: [
          {
            kind: "table",
            headers: ["Function", "Explanation"],
            rows: [
              ["Information", "Provides facts and data required for decisions and for doing the job."],
              ["Control", "Clarifies duties, rules and hierarchy so that employees follow policies and instructions."],
              ["Motivation", "Explains what to do and how well they are doing, and encourages staff by praise and feedback."],
              ["Emotional expression", "Lets employees share feelings of satisfaction, anger or worry, which improves relationships."],
              ["Coordination", "Brings together the work of different departments towards common goals."],
              ["Persuasion", "Influences customers, investors and employees to accept ideas or products."],
            ],
          },
          {
            kind: "bullets",
            items: [
              "Objectives of business communication: (1) to inform — give facts and news; (2) to instruct/order — direct the work; (3) to advise and counsel; (4) to persuade — sell products or ideas; (5) to educate and train; (6) to warn — about danger or wrong conduct; (7) to build goodwill and good public relations; (8) to raise morale and create team spirit.",
              "Importance: (1) helps in smooth and efficient working; (2) basis of sound managerial decisions; (3) promotes co-ordination and teamwork; (4) improves morale and reduces conflicts; (5) builds a good image and customer relations; (6) helps in planning, organising, directing and controlling; (7) provides a record and legal evidence; (8) helps in adapting to change and competition.",
            ],
          },
        ],
      },
      {
        id: "seven-cs",
        title: "4. Essentials of Good Communication: the 7 C's",
        icon: "Sparkles",
        blocks: [
          {
            kind: "paragraph",
            text: "Effective communication is one in which the receiver understands the message exactly as the sender meant it. The seven C's are the seven principles which make a message effective.",
          },
          { kind: "diagram", diagramId: "seven-cs", caption: "Fig 1.2 — The 7 C's of effective communication" },
          {
            kind: "table",
            headers: ["C", "Meaning", "Poor → Better example"],
            rows: [
              ["Completeness", "The message must contain all the facts the receiver needs (who, what, when, where, why, how).", "'Meeting tomorrow.' → 'Sales meeting tomorrow, 11 a.m., Conference Room 2.'"],
              ["Conciseness", "Say what you want in the fewest words without losing meaning; avoid repetition and long-winded phrases.", "'At this point in time' → 'now'"],
              ["Consideration", "Prepare the message keeping the receiver's needs, feelings and viewpoint in mind ('you-attitude').", "'You failed to pay.' → 'Your payment appears to be pending; kindly check.'"],
              ["Concreteness", "Use specific facts, figures and vivid words instead of vague statements.", "'Sales fell a lot.' → 'Sales fell by 12% in March.'"],
              ["Clarity", "Use simple, familiar words and short sentences; one main idea at a time.", "'Utilise' → 'use'"],
              ["Courtesy", "Be polite, respectful and sincere; use words like please and thank you.", "'Send it now.' → 'Please send it by today; thank you.'"],
              ["Correctness", "Correct facts, figures, grammar, spelling and suitable tone; right level of language.", "Check names, dates and amounts before sending."],
            ],
          },
        ],
      },
      {
        id: "barriers",
        title: "5. Barriers to Communication",
        icon: "AlertTriangle",
        blocks: [
          {
            kind: "paragraph",
            text: "A barrier is anything that blocks, distorts or delays a message so that it is not understood as intended. Barriers can arise at every stage — sender, message, channel, receiver.",
          },
          { kind: "diagram", diagramId: "communication-barriers", caption: "Fig 1.3 — Main barriers to communication" },
          {
            kind: "table",
            headers: ["Type of barrier", "Description", "Examples"],
            rows: [
              ["Physical / Environmental", "Problems in the surroundings or the equipment.", "Noise, distance, poor telephone/network, faulty equipment, poor lighting"],
              ["Semantic (Language)", "Problems with the meaning of words and symbols.", "Jargon, technical terms, words with several meanings, poor translation"],
              ["Psychological (Personal)", "Mental state and attitudes of sender or receiver.", "Prejudice, fear, stress, emotions, inattention, lack of interest, mistrust"],
              ["Organisational", "Faults in the structure or rules of the organisation.", "Too many levels of hierarchy, rigid rules, poor flow of information, information overload"],
              ["Cultural", "Differences of customs, gestures and values.", "The meaning of a gesture or colour differing between countries"],
              ["Technological", "Problems in using technology.", "Software failure, lack of digital skills, e-mail overload"],
            ],
          },
          {
            kind: "bullets",
            items: [
              "How to overcome barriers: use simple language; plan the message; know the receiver; use the right medium; encourage feedback; listen actively; avoid information overload; reduce noise; train employees; use the 7 C's.",
            ],
          },
        ],
      },
      {
        id: "types-communication",
        title: "6. Types of Communication: Meaning, Nature and Scope",
        icon: "Network",
        blocks: [
          {
            kind: "paragraph",
            text: "Communication can be classified on the basis of the medium used, the relationship between the parties, the direction of flow and the number of people involved.",
          },
          {
            kind: "table",
            headers: ["Basis", "Type", "Meaning and example"],
            rows: [
              ["Medium", "Verbal — Oral", "Spoken words: conversation, telephone, meetings, speeches."],
              ["Medium", "Verbal — Written", "Written words: letters, e-mails, reports, memos, notices."],
              ["Medium", "Non-verbal", "Without words: body language, gestures, facial expressions, eye contact, posture, dress, tone of voice, silence."],
              ["Relationship", "Formal", "Follows the official channels and structure of the organisation; recorded — orders, circulars, reports."],
              ["Relationship", "Informal", "Free, personal exchange outside official channels; the 'grapevine' — gossip, casual talk."],
              ["Direction", "Downward", "From superiors to subordinates — orders, instructions, policies."],
              ["Direction", "Upward", "From subordinates to superiors — reports, suggestions, complaints."],
              ["Direction", "Horizontal (Lateral)", "Between people at the same level — between department heads."],
              ["Direction", "Diagonal (Crosswise)", "Between people of different levels and different departments — the sales executive with the finance manager."],
              ["Number of people", "Intrapersonal / Interpersonal / Group / Mass", "With oneself (thinking) / between two people / within a group or team / to a large audience through media."],
            ],
          },
          { kind: "diagram", diagramId: "communication-flow", caption: "Fig 1.4 — Directions of communication in an organisation" },
          {
            kind: "table",
            headers: ["Element of non-verbal communication", "Meaning", "Example"],
            rows: [
              ["Kinesics (body language)", "Gestures, posture, facial expression, eye contact, handshake.", "Smiling and nodding shows interest"],
              ["Proxemics", "Use of personal space and distance.", "Standing very close may make a person uncomfortable"],
              ["Paralanguage", "How something is said — tone, pitch, speed, volume, pauses.", "The same words can sound polite or rude"],
              ["Appearance", "Dress, grooming, neatness.", "Formal dress at an interview"],
              ["Chronemics", "Use of time.", "Being punctual shows respect"],
              ["Haptics", "Communication through touch.", "A firm handshake"],
            ],
          },
          {
            kind: "paragraph",
            text: "Scope of business communication: Internal communication takes place within the organisation (between owners, managers and employees — orders, reports, meetings, memos). External communication takes place with people outside (customers, suppliers, banks, government, the media and the public — quotations, orders, advertising, public relations, tenders, letters to authorities). In today's digital world its scope also covers e-mail, video conferencing, social media and e-commerce.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Communication", definition: "The process of exchanging information, ideas and feelings between people so that they arrive at a common understanding." },
      { term: "Encoding / Decoding", definition: "Converting an idea into symbols by the sender / interpreting those symbols by the receiver." },
      { term: "Feedback", definition: "The receiver's response that completes the communication process." },
      { term: "Noise", definition: "Any disturbance that distorts the message during transmission." },
      { term: "7 C's", definition: "Completeness, Conciseness, Consideration, Concreteness, Clarity, Courtesy, Correctness." },
      { term: "Grapevine", definition: "The informal network through which news and rumours spread within an organisation." },
      { term: "Kinesics", definition: "The study of body movements, gestures and facial expressions." },
      { term: "Semantic barrier", definition: "A barrier caused by the meaning of words, jargon or language differences." },
    ],
    examQuestions: [
      "Define communication. Explain its nature and importance. (Long)",
      "Explain the process of communication with a diagram. (Long)",
      "What are the functions and objectives of communication in business? (Medium)",
      "Explain the 7 C's of effective communication with examples. (Long)",
      "What are the barriers to communication? How can they be overcome? (Long)",
      "Explain the different types of communication. (Long)",
      "Differentiate between formal and informal communication. (Medium)",
      "Explain downward, upward, horizontal and diagonal communication. (Medium)",
      "Write short notes on non-verbal communication. (Medium)",
      "What is feedback? Why is it important? (Short)",
      "What is noise in communication? (Short)",
    ],
  },
  {
    unitNumber: 2,
    title: "Oral and Written Communication, Business Letters and Reports",
    hours: 10,
    headings: [
      {
        id: "oral-communication",
        title: "1. Oral Communication: Principles and Techniques of Effective Speech",
        icon: "Mic",
        blocks: [
          {
            kind: "paragraph",
            text: "Oral communication is the exchange of ideas through spoken words — face to face or through a device such as the telephone. It is the fastest and most common form of communication and gives instant feedback.",
          },
          {
            kind: "table",
            headers: ["Advantages of oral communication", "Limitations of oral communication"],
            rows: [
              ["Quick, with immediate feedback and clarification", "No permanent record unless recorded"],
              ["Personal touch through tone and body language", "Chances of forgetting or distortion"],
              ["Saves time and money in small matters", "Not suitable for lengthy or technical matters"],
              ["Flexible — the message can change as the listener reacts", "Cannot be used as legal evidence"],
              ["Useful for persuasion, motivation and settling conflicts", "The speaker may say something in haste that he regrets"],
            ],
          },
          {
            kind: "bullets",
            items: [
              "Principles of effective oral communication: (1) Clarity — clear voice and simple words; (2) Brevity — to the point; (3) Correct pronunciation and grammar; (4) Courtesy and politeness; (5) Appropriate tone and voice modulation; (6) Knowing the listener and choosing suitable language; (7) Consistency between words and body language; (8) Encouraging feedback; (9) Good listening; (10) Avoiding jargon and irritating mannerisms.",
            ],
          },
          {
            kind: "table",
            headers: ["Technique of effective speech", "How to apply it"],
            rows: [
              ["Preparation", "Know the purpose, the topic and the audience; prepare notes and rehearse."],
              ["Structure", "Opening (grab attention) → Body (main points in logical order) → Closing (summary and call to action)."],
              ["Voice control", "Pitch (high/low), pace (not too fast), volume (audible to all), pause (for emphasis), clear pronunciation."],
              ["Body language", "Confident posture, natural gestures, smile, eye contact with the audience."],
              ["Audience contact", "Address them directly, ask questions, use examples and light humour."],
              ["Use of visual aids", "Charts, slides or props to explain complex points."],
              ["Confidence and control of nervousness", "Deep breathing, practice, positive self-talk."],
              ["Time management", "Finish within the given time."],
            ],
          },
        ],
      },
      {
        id: "oral-media",
        title: "2. Media of Oral Communication",
        icon: "Megaphone",
        blocks: [
          {
            kind: "table",
            headers: ["Medium", "Meaning and use", "Advantage / Limitation"],
            rows: [
              ["Face-to-face conversation", "Direct personal talk between two or more people, e.g., interviews and discussions.", "Instant feedback, personal touch / Not possible over long distance"],
              ["Teleconference", "Live talk among people at different places through telephone/audio links.", "Saves travel cost / No visual contact"],
              ["Press conference", "A meeting called by an organisation to give news to journalists, who may ask questions.", "Reaches the public through media / Reporters may distort or ask difficult questions"],
              ["Demonstration", "Showing how a product works in front of an audience.", "Convincing and lively / Costly and needs preparation"],
              ["Radio recording", "Messages, news or advertisements broadcast through radio.", "Wide reach even to illiterate listeners / One-way, no feedback"],
              ["Dictaphone", "A machine which records the speech of a manager for later typing by a secretary.", "Saves time in dictation / Errors in recording; needs a transcription step"],
              ["Meetings", "Gathering of people to discuss and decide, e.g., board meeting, staff meeting.", "Group decision and participation / Time-consuming"],
              ["Rumour", "Unverified information spreading informally, often exaggerated.", "Shows employees' feelings / May be false and harmful to morale"],
              ["Dramatization (Role play)", "Enacting a situation to teach or convince.", "Effective in training and social messages / Needs skilled people"],
              ["Public address system", "Microphone and loudspeakers used to address a large gathering in a hall, factory or station.", "One message reaches many at once / One-way, weak feedback"],
              ["Grapevine", "Informal network of communication spread through personal contacts.", "Fast; shows worker feelings / Unreliable, cannot be controlled"],
              ["Group discussion", "A structured exchange of views among a group on a topic, to arrive at a decision or to test a candidate's skills.", "Many ideas, participation / A few members may dominate"],
              ["Oral report", "A report presented by speech, e.g., by an inspector to the manager.", "Quick, gives clarification / No permanent record"],
              ["Closed-circuit TV (CCTV)", "Cameras and monitors connected in a closed network for surveillance and internal broadcasting.", "Constant supervision, security / Costly; privacy concerns"],
            ],
          },
          {
            kind: "table",
            headers: ["Type of grapevine", "How information spreads"],
            rows: [
              ["Single strand", "A tells B, B tells C, C tells D — through a chain."],
              ["Gossip", "One person tells everybody."],
              ["Probability", "A tells a few randomly; they tell others at random."],
              ["Cluster", "A tells a select few, and each of them tells a few more — the most common type."],
            ],
          },
        ],
      },
      {
        id: "listening",
        title: "3. The Art of Listening",
        icon: "HandHelping",
        blocks: [
          {
            kind: "paragraph",
            text: "Hearing is the physical act of receiving sound; listening is a mental process of paying attention, understanding, interpreting and remembering. Communication is incomplete without listening — studies say that managers spend more of their communication time in listening than in any other activity.",
          },
          {
            kind: "table",
            headers: ["Type of listening", "Purpose"],
            rows: [
              ["Appreciative", "Enjoyment — music, a speech."],
              ["Informational (Comprehensive)", "To learn and understand facts — a lecture, instructions."],
              ["Critical (Evaluative)", "To judge the value of the message — a sales talk."],
              ["Empathetic", "To understand the feelings of the speaker — counselling."],
              ["Active listening", "Fully concentrating, responding and giving feedback."],
            ],
          },
          {
            kind: "bullets",
            items: [
              "Principles of good listening: (1) Stop talking — give the speaker a chance; (2) Show interest through eye contact and nodding; (3) Remove distractions (put the phone away); (4) Be patient and do not interrupt; (5) Put the speaker at ease; (6) Do not judge or jump to conclusions; (7) Listen for main ideas as well as details; (8) Ask questions and paraphrase to confirm understanding; (9) Take notes when necessary; (10) Watch body language and tone.",
              "Barriers to good listening: noise, prejudice, tiredness, lack of interest, thinking about one's own reply, emotional reactions, language or accent problems, information overload.",
            ],
          },
        ],
      },
      {
        id: "written-communication",
        title: "4. Written Communication: Purpose, Clarity and Principles of Effective Writing",
        icon: "PenTool",
        blocks: [
          {
            kind: "paragraph",
            text: "Written communication uses written or printed words — letters, memos, e-mails, reports, notices, manuals. Purpose of writing: to inform, to request, to instruct, to persuade, to record and give evidence, to build goodwill, and to communicate over long distances and to many people at the same time.",
          },
          {
            kind: "table",
            headers: ["Advantages of written communication", "Disadvantages"],
            rows: [
              ["Permanent record and legal evidence", "Time-consuming to prepare"],
              ["Clear, planned and edited message", "Feedback is slow"],
              ["Can reach many people in the same words", "Not suitable for urgent or confidential matters"],
              ["Useful for lengthy and technical matter", "Costs of paper, printing and distribution"],
              ["Can be referred to again and again", "Literacy and writing skill are required; lacks personal touch"],
            ],
          },
          {
            kind: "table",
            headers: ["Principle of effective writing", "Explanation"],
            rows: [
              ["Clarity", "Use plain words, short sentences and a logical order — one idea per paragraph."],
              ["Conciseness", "Cut out unnecessary words and repetition."],
              ["You-attitude (reader's viewpoint)", "Write about what the reader needs and benefits from."],
              ["Active voice and positive tone", "'We will send the goods on Monday' rather than 'The goods will be sent'; positive words rather than negative."],
              ["Correctness", "Right facts, figures, grammar, spelling and punctuation."],
              ["Coherence and unity", "Sentences and paragraphs must connect smoothly and stick to the topic."],
              ["Appropriate format and layout", "Headings, margins, spacing and a professional appearance."],
            ],
          },
          { kind: "diagram", diagramId: "writing-process", caption: "Fig 2.1 — Stages of the writing process" },
          {
            kind: "bullets",
            items: [
              "Writing techniques: Pre-writing (define the purpose, analyse the reader, collect and organise ideas, prepare an outline) → Writing (draft the opening, body and close quickly, in a natural style) → Revising (edit content and structure, proofread for errors, get feedback, and prepare the final copy).",
              "Electronic writing process: writing with computers, e-mail, chat and collaborative tools. Use a clear subject line, short paragraphs, proper greeting and closing, attach documents with care, avoid capital letters (they mean shouting) and slang, use spell check, and respect netiquette. Electronic writing is fast, cheap, easy to edit and store, and can be shared with many people; but it may cause information overload, security and privacy problems, and errors sent in haste cannot be recalled.",
            ],
          },
        ],
      },
      {
        id: "business-letters",
        title: "5. Business Letters: Need, Functions, Layout and Kinds",
        icon: "Mail",
        blocks: [
          {
            kind: "paragraph",
            text: "A business letter is a formal written message sent by one business person or organisation to another for a business purpose. Even in the age of e-mail, letters remain the main formal means of external correspondence.",
          },
          {
            kind: "table",
            headers: ["Need / Function of a business letter", "Explanation"],
            rows: [
              ["Communication at a distance", "Allows business between parties who are far apart."],
              ["Permanent record", "Can be filed and used as evidence of the transaction."],
              ["Legal value", "Proof of contracts, orders, complaints and agreements."],
              ["Goodwill and public relations", "A courteous letter builds a good image of the firm."],
              ["Publicity and sales promotion", "Sales letters and circulars advertise products."],
              ["Economical and reaches many", "Cheaper than personal visits; a circular can be sent to thousands."],
            ],
          },
          { kind: "paragraph", text: "Planning a letter: before writing, decide (1) the purpose of the letter, (2) the reader and what he/she already knows, (3) the points to be included and their order, (4) the tone to be used, and (5) the layout. Then draft, revise, type and check." },
          { kind: "diagram", diagramId: "business-letter-layout", caption: "Fig 2.2 — Parts (layout) of a business letter" },
          {
            kind: "table",
            headers: ["Part", "Content"],
            rows: [
              ["1. Letterhead", "Name, address, telephone, e-mail, website and logo of the sender, printed at the top."],
              ["2. Reference number", "Ref. No. — for filing and later reference."],
              ["3. Date", "Date of writing (e.g., 20 September 2026)."],
              ["4. Inside address", "Name and address of the receiver."],
              ["5. Salutation", "Greeting: 'Dear Sir/Madam', 'Dear Mr. Sharma'."],
              ["6. Subject line", "A short statement of the subject: 'Subject: Order for 100 laptops'."],
              ["7. Body", "Opening paragraph (purpose), middle paragraph(s) (details), closing paragraph (action expected and courtesy)."],
              ["8. Complimentary close", "'Yours faithfully' (when addressed to Sir/Madam) or 'Yours sincerely' (when addressed by name)."],
              ["9. Signature block", "Signature, typed name and designation of the sender."],
              ["10. Enclosure and copy notations", "Encl.: list of documents enclosed; c.c.: persons who receive a copy."],
            ],
          },
          {
            kind: "table",
            headers: ["Layout style", "Description"],
            rows: [
              ["Full block (blocked)", "Every line starts at the left margin; no indentation. Fast to type and most used today."],
              ["Semi-block (modified block)", "Date and complimentary close start at the centre or right; paragraphs begin at the left margin."],
              ["Indented", "Each line of the inside address and each paragraph begins a little further to the right than the previous one; now rarely used."],
            ],
          },
          {
            kind: "table",
            headers: ["Kind of business letter", "Purpose"],
            rows: [
              ["Enquiry and reply", "Ask for information / price / terms and give the answer (quotation)."],
              ["Order and its execution", "Place an order for goods / confirm and supply them."],
              ["Complaint and adjustment", "Report a fault / respond and settle the complaint."],
              ["Sales letter", "Promote a product or service to a customer."],
              ["Circular letter", "Same message sent to many people — announcing a new shop, price change, change of address."],
              ["Credit and collection letters", "Grant credit / request payment of dues."],
              ["Application letter", "Apply for a job, with a resume."],
              ["Letters to authorities", "Requests, notices and replies to government offices."],
            ],
          },
          {
            kind: "bullets",
            items: [
              "Essentials of effective business correspondence: the 7 C's; promptness of reply; a suitable tone (positive, polite and helpful); a neat, standard layout; correct address and reference; brevity; proper structure of paragraphs; and a clear statement of the action expected.",
            ],
          },
        ],
      },
      {
        id: "reports",
        title: "6. Business Reports: Purpose, Kinds, Objectives and Writing",
        icon: "FileText",
        blocks: [
          {
            kind: "paragraph",
            text: "A report is an organised, factual account of an investigation, event or situation, prepared for a person or a group to help them take a decision. A business report presents facts, analysis and (usually) recommendations.",
          },
          {
            kind: "bullets",
            items: [
              "Purpose and objectives of reports: to present facts for decision making; to record the progress of a project; to investigate problems and suggest solutions; to evaluate performance; to fulfil legal and official requirements; to communicate findings to management, shareholders and government.",
            ],
          },
          {
            kind: "table",
            headers: ["Basis", "Kinds of reports"],
            rows: [
              ["Frequency", "Routine (periodic: daily, monthly, annual) and Special (on a particular problem)"],
              ["Formality", "Formal (prescribed structure; committee reports, annual reports) and Informal (short, memo-like)"],
              ["Function", "Informational (facts only) and Analytical / Problem-solving (facts + analysis + recommendations)"],
              ["Length", "Short and Long"],
              ["Medium", "Oral and Written"],
              ["Subject", "Progress reports, sales reports, audit reports, inspection reports, feasibility reports, annual reports"],
            ],
          },
          { kind: "diagram", diagramId: "report-structure", caption: "Fig 2.3 — Structure of a formal business report" },
          {
            kind: "bullets",
            items: [
              "Steps in writing a report: (1) Define the problem and purpose; (2) Decide the scope and the readers; (3) Collect data (observation, survey, interviews, records); (4) Analyse and interpret the data; (5) Prepare the outline; (6) Write the first draft; (7) Revise, edit and proofread; (8) Submit the final report with recommendations.",
              "Qualities of a good report: accuracy, clarity, brevity, objectivity, logical arrangement, proper headings, suitable language, timeliness and usefulness to the reader.",
            ],
          },
          {
            kind: "code",
            language: "report",
            title: "Format of a short formal report",
            code: String.raw`TITLE      : Report on Falling Sales of the Delhi Branch, April-June 2026
PREPARED BY: Amit Kumar, Sales Analyst        DATE: 5 July 2026
SUBMITTED TO: Mr. R. Verma, General Manager (Sales)

1. TERMS OF REFERENCE
   To find the reasons for the fall in sales of the Delhi branch and suggest remedies.

2. PROCEDURE
   Sales records of the last two quarters were studied and 20 dealers were interviewed.

3. FINDINGS
   (a) Sales fell by 12 % compared with January-March.
   (b) 14 dealers said deliveries were delayed by an average of 6 days.
   (c) Competitor prices were 5 % lower.

4. CONCLUSIONS
   The fall is mainly due to late deliveries and higher prices.

5. RECOMMENDATIONS
   (a) Appoint one more transport agency.  (b) Review the price list.

Signature: Amit Kumar`,
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Oral communication", definition: "Communication through spoken words, face to face or through devices." },
      { term: "Active listening", definition: "Listening with full attention, understanding and responding to the speaker." },
      { term: "Grapevine", definition: "An informal network through which information flows in an organisation." },
      { term: "Dictaphone", definition: "A machine that records dictation for later transcription." },
      { term: "Written communication", definition: "Communication through written or printed words." },
      { term: "You-attitude", definition: "Writing from the reader's point of view and interest." },
      { term: "Business letter", definition: "A formal written message sent between business parties for a business purpose." },
      { term: "Inside address", definition: "The name and address of the receiver, written above the salutation." },
      { term: "Report", definition: "An organised factual account of an investigation prepared for decision making." },
      { term: "Circular letter", definition: "A letter with the same message sent to many people." },
    ],
    examQuestions: [
      "What is oral communication? Explain its advantages and limitations. (Medium)",
      "Explain the principles of effective oral communication and techniques of effective speech. (Long)",
      "Explain any eight media of oral communication. (Long)",
      "What is grapevine? Explain its types. Differentiate it from rumour. (Medium)",
      "What is listening? Explain the principles of good listening. (Long)",
      "Differentiate between hearing and listening. (Short)",
      "What is written communication? Explain its purpose, advantages and disadvantages. (Long)",
      "Explain the principles of effective writing. (Medium)",
      "Explain the writing process and the electronic writing process. (Medium)",
      "What is a business letter? Explain its need, functions and layout with a diagram. (Long)",
      "What are the essentials of effective business correspondence? (Medium)",
      "What is a report? Explain the kinds of reports and the steps in writing a report. (Long)",
      "Explain the structure of a formal report. (Medium)",
    ],
  },
  {
    unitNumber: 3,
    title: "Drafting of Business Letters, IT for Communication, Self Analysis and Creativity",
    hours: 10,
    headings: [
      {
        id: "drafting-letters",
        title: "1. Drafting of Business Letters (with Samples)",
        icon: "FileText",
        blocks: [
          {
            kind: "paragraph",
            text: "Drafting means planning and preparing the letter in the correct form. Follow the layout of Unit II: letterhead, reference number, date, inside address, salutation, subject line, body, complimentary close, signature and enclosures. Use the three-paragraph pattern — opening (purpose), middle (details), closing (action and courtesy). The samples below are written in the full-block style.",
          },
          {
            kind: "code",
            language: "letter",
            title: "1(a) Letter of enquiry",
            code: String.raw`ABC Computers, 45 Civil Lines, Saharanpur - 247001
Ref: ABC/Enq/26/031                                    20 September 2026

The Sales Manager
Techno World Pvt. Ltd.
12 Nehru Place, New Delhi - 110019

Dear Sir,

Subject: Enquiry about laptops

We are a retail dealer in computer products and wish to buy laptops for
resale. Kindly send us your latest catalogue, price list and terms of
supply for the following:

    1. Laptop, 8 GB RAM, 512 GB SSD ...... 25 units
    2. Laptop, 16 GB RAM, 1 TB SSD ....... 10 units

Please also let us know the trade discount, delivery time and payment
terms. An early reply will be appreciated.

Yours faithfully,
For ABC Computers
(Rakesh Gupta)
Proprietor`,
          },
          {
            kind: "code",
            language: "letter",
            title: "1(b) Reply to the enquiry (quotation)",
            code: String.raw`Techno World Pvt. Ltd., 12 Nehru Place, New Delhi - 110019
Ref: TW/Q/26/210                                       23 September 2026

Mr. Rakesh Gupta, ABC Computers
45 Civil Lines, Saharanpur - 247001

Dear Mr. Gupta,

Subject: Quotation for laptops (your enquiry no. ABC/Enq/26/031)

Thank you for your enquiry of 20 September. We are pleased to quote:

    Model A (8 GB / 512 GB) ...... Rs. 42,000 per unit
    Model B (16 GB / 1 TB) ....... Rs. 61,000 per unit

Terms: 8 % trade discount on orders above 20 units; delivery within
10 days of the order; payment 50 % with order, balance on delivery.
This offer is valid for 30 days. Our catalogue is enclosed.

We look forward to your valued order.

Yours sincerely,
(Neha Malhotra)
Sales Manager
Encl.: Catalogue`,
          },
          {
            kind: "code",
            language: "letter",
            title: "2 Letter placing an order (and acknowledgement in brief)",
            code: String.raw`ABC Computers, 45 Civil Lines, Saharanpur - 247001
Ref: ABC/Ord/26/044                                    28 September 2026

The Sales Manager, Techno World Pvt. Ltd., New Delhi - 110019

Dear Madam,

Subject: Order for laptops

Referring to your quotation TW/Q/26/210, we are pleased to order:

    25 laptops, Model A ........ Rs. 42,000 each, less 8 % discount

Please deliver the goods within 10 days by road transport at our shop.
A demand draft for 50 % of the value is enclosed; the balance will be
paid on delivery.

Yours faithfully,
(Rakesh Gupta), Proprietor
Encl.: Demand draft no. 458217

------------------------------------------------------------
Execution: Techno World replies - 'We thank you for your order no.
ABC/Ord/26/044. The goods will be dispatched on 4 October by
Speed Cargo, LR No. 7781. Our invoice is enclosed.'`,
          },
          {
            kind: "code",
            language: "letter",
            title: "3(a) Letter of complaint",
            code: String.raw`ABC Computers, 45 Civil Lines, Saharanpur - 247001
Ref: ABC/Cmp/26/005                                    10 October 2026

The Manager, Techno World Pvt. Ltd., New Delhi - 110019

Dear Sir,

Subject: Complaint about damaged goods (Invoice no. 8842 dated 4 Oct)

We received your consignment of 25 laptops on 9 October. On opening
the cartons we found that 3 laptops have cracked screens, apparently
damaged in transit. Photographs and the transport receipt are enclosed.

We request you to replace the 3 damaged laptops immediately or issue a
credit note for Rs. 1,15,920. We hope to resolve the matter soon.

Yours faithfully,
(Rakesh Gupta), Proprietor
Encl.: 1. Photographs  2. Lorry receipt`,
          },
          {
            kind: "code",
            language: "letter",
            title: "3(b) Reply to the complaint (adjustment letter)",
            code: String.raw`Techno World Pvt. Ltd., 12 Nehru Place, New Delhi - 110019
Ref: TW/CS/26/118                                      12 October 2026

Mr. Rakesh Gupta, ABC Computers, Saharanpur - 247001

Dear Mr. Gupta,

Subject: Your complaint of 10 October regarding damaged laptops

We are sorry for the inconvenience caused. Thank you for informing
us promptly and sending the photographs. Three replacement laptops
are being dispatched today and will reach you within 3 days. Please
hand over the damaged pieces to our driver.

We value your business and assure you that stronger packing will be
used in future.

Yours sincerely,
(Neha Malhotra), Sales Manager`,
          },
          {
            kind: "callout",
            tone: "info",
            title: "Tone in complaint and adjustment letters",
            text: "A complaint should be firm but polite, state facts (dates, invoice number, quantity), say what remedy is wanted and avoid anger. An adjustment (reply) letter should begin with regret or thanks, admit the fault if it is true, state clearly what will be done, and end with goodwill. Never blame the customer.",
          },
          {
            kind: "paragraph",
            text: "Sales letter: written to persuade the reader to buy. It follows the AIDA formula — Attention (a striking opening), Interest (benefits of the product), Desire (proof, offers, testimonials), Action (tell the reader exactly what to do next and by when).",
          },
          {
            kind: "code",
            language: "letter",
            title: "4 Sales letter (AIDA)",
            code: String.raw`Dear Student,

Is your laptop too slow for your BCA projects?                 <- Attention

The new ZipBook 14 starts in 8 seconds, runs for 12 hours on a single
charge and weighs just 1.3 kg, so you can study anywhere.      <- Interest

Over 5,000 students in your city already use ZipBook, and our 3-year
warranty means no repair worries. Buy this month and get a free
laptop bag and a 1-year antivirus.                             <- Desire

Visit any ABC Computers showroom or call 0132-2650000 before
31 October to book yours with easy EMI of Rs. 2,499 a month.  <- Action

Yours sincerely,
Marketing Department, ABC Computers`,
          },
          {
            kind: "code",
            language: "letter",
            title: "5 Circular letter (change of address)",
            code: String.raw`ABC Computers, 45 Civil Lines, Saharanpur                 1 November 2026

Dear Customer,

Subject: Shifting of our showroom

We are happy to inform you that from 15 November 2026 our showroom
will function from a bigger and better-equipped place:

    ABC Computers, 8 Court Road, Saharanpur - 247001

Our telephone numbers and e-mail remain the same. We thank you for your
support and hope to serve you better at the new address.

Yours faithfully,
For ABC Computers, (Rakesh Gupta), Proprietor`,
          },
          {
            kind: "paragraph",
            text: "Application for employment: an application letter introduces the candidate and requests an interview; the RESUME (CV) is enclosed and gives the details. The letter should be short (one page), specific about the post applied for, and show how the candidate's skills match the job.",
          },
          {
            kind: "code",
            language: "letter",
            title: "6(a) Application letter for a job",
            code: String.raw`Amit Kumar, 12 Gandhi Nagar, Saharanpur - 247001
Mobile: 98xxxxxx01     E-mail: amit.kumar@example.com      15 September 2026

The Manager (HR)
Innovate Software Solutions, Sector 62, Noida - 201301

Dear Sir,

Subject: Application for the post of Junior Programmer (Ad. No. IS/26/07)

With reference to your advertisement in The Times of India dated
12 September 2026, I wish to apply for the post of Junior Programmer.

I have completed BCA in 2026 with 72 % marks and have learnt C, HTML,
CSS and MS-Office. I did a 3-month project in web design and won the
first prize in the university coding contest. I am hardworking, a
quick learner and good at teamwork.

My resume is enclosed. I shall be grateful for an opportunity to
appear for an interview.

Yours faithfully,
(Amit Kumar)
Encl.: Resume, copies of certificates`,
          },
          {
            kind: "code",
            language: "letter",
            title: "6(b) Format of a resume (CV)",
            code: String.raw`AMIT KUMAR
12 Gandhi Nagar, Saharanpur - 247001 | 98xxxxxx01 | amit.kumar@example.com

CAREER OBJECTIVE
To work as a junior programmer in a progressive company and grow with it.

EDUCATIONAL QUALIFICATIONS
  BCA            Dr. B. R. Ambedkar University, Agra      2026     72 %
  Class XII      UP Board                                 2023     81 %
  Class X        UP Board                                 2021     84 %

TECHNICAL SKILLS
  C programming, HTML, CSS, MS-Word, MS-Excel, MS-PowerPoint

PROJECTS
  College website - designed a 5-page website using HTML and CSS (3 months)

ACHIEVEMENTS AND ACTIVITIES
  First prize, university coding contest 2025; NSS volunteer

PERSONAL DETAILS
  Date of birth: 12-03-2005   Languages: Hindi, English   Nationality: Indian

DECLARATION
  I declare that the above information is true to the best of my knowledge.
  Place: Saharanpur                                   (Amit Kumar)`,
          },
        ],
      },
      {
        id: "it-communication",
        title: "2. Information Technology for Communication",
        icon: "Wifi",
        blocks: [
          {
            kind: "paragraph",
            text: "Information technology (IT) has changed business communication by making it faster, cheaper, more accurate and global. The technologies named in the syllabus are described below with their advantages and limitations.",
          },
          {
            kind: "table",
            headers: ["Technology", "Meaning", "Advantages", "Limitations"],
            rows: [
              ["Word processor", "Software (e.g., MS-Word) for creating, editing, formatting and printing text documents.", "Easy correction, professional look, templates, mail merge, saves paper", "Needs a computer and skill; files can be corrupted or virus-infected"],
              ["Telex", "An old teleprinter network for sending typed messages between subscribers over telephone lines.", "Written record, cheap for its time", "Slow, only text, no longer used — replaced by fax and e-mail"],
              ["Facsimile (Fax)", "A machine that scans a paper document and sends its exact copy over a telephone line to another fax machine.", "Sends original documents, signatures, drawings quickly; legal acceptance", "Poor print quality, needs a fax machine at both ends, less secure, now largely replaced by e-mail"],
              ["E-mail", "Electronic mail — messages, with attachments, sent through the Internet.", "Very fast and cheap, worldwide, sends to many people, written record, can attach files", "Spam, viruses and phishing, information overload, needs Internet, may be misunderstood"],
              ["Voice mail", "Spoken messages recorded and stored electronically for the receiver to hear later.", "Message can be left even if the receiver is absent; personal voice", "Cannot be edited; replies may be delayed; needs system access"],
              ["Internet multimedia", "Use of text, audio, video, animation and graphics through the Internet, e.g., webinars, YouTube, presentations.", "Interesting, effective and reaches large audiences", "Needs high bandwidth and equipment; costly to produce"],
              ["Teleconferencing", "Conference among people at different places using telephone/audio links (audio, and sometimes video).", "Saves time and travel expense; quick decisions", "No personal contact; technical failures; time-zone problems"],
              ["Mobile phone conversation", "Voice calls through a portable wireless phone.", "Communication anywhere, at any time; instant", "Poor signal, distraction, no record, disturbs others, costs"],
              ["Telephone answering machine", "A device that answers a call automatically, plays a greeting and records the caller's message.", "Never miss a call; works 24 hours", "Callers may not leave messages; the machine cannot answer queries"],
              ["Video conferencing", "Live two-way audio and video meeting among people at different locations (Zoom, Google Meet, MS-Teams).", "Face-to-face effect without travel; screen sharing and recording", "Needs good Internet and equipment; less personal; security risks"],
              ["SMS", "Short Message Service — short text messages sent through mobile phones.", "Instant, cheap, reaches even without Internet; useful for alerts and OTPs", "Limited length (160 characters), no formatting, informal, may be ignored"],
            ],
          },
          {
            kind: "bullets",
            items: [
              "General advantages of IT in communication: speed, low cost, wide reach, accuracy, storage and retrieval, 24-hour availability, support for teamwork and e-commerce.",
              "General limitations: dependence on electricity and networks, cost of equipment, lack of personal touch, security and privacy threats, digital divide, overload of information.",
            ],
          },
        ],
      },
      {
        id: "self-analysis",
        title: "3. Self Analysis: Who Am I, SWOT, Self-Confidence and Self-Esteem",
        icon: "Brain",
        blocks: [
          {
            kind: "paragraph",
            text: "Self analysis means honestly studying oneself — one's strengths, weaknesses, values, interests and abilities — so that one can set the right career and life goals and improve. It starts with the question 'Who am I?'. The answer includes physical, social, intellectual and emotional aspects of the person.",
          },
          {
            kind: "table",
            headers: ["Attribute", "Meaning", "Examples"],
            rows: [
              ["Skills and abilities", "What I can do well.", "Programming, public speaking, drawing"],
              ["Interests", "What I like to do.", "Reading, sports, technology"],
              ["Values", "What I believe is important.", "Honesty, family, hard work"],
              ["Personality traits", "My usual pattern of thought and behaviour.", "Friendly, patient, shy, creative"],
              ["Strengths and weaknesses", "My good points and the areas that need improvement.", "Quick learner / poor time management"],
              ["Goals and aspirations", "What I want to achieve.", "Become a software engineer"],
            ],
          },
          {
            kind: "paragraph",
            text: "SWOT analysis is a technique of listing Strengths, Weaknesses, Opportunities and Threats. Strengths and Weaknesses are INTERNAL (about me); Opportunities and Threats are EXTERNAL (about the environment). It is used by businesses and by individuals for career planning.",
          },
          { kind: "diagram", diagramId: "swot-matrix", caption: "Fig 3.1 — SWOT matrix" },
          {
            kind: "table",
            headers: ["", "Personal SWOT of a BCA student (example)"],
            rows: [
              ["Strengths", "Good at logic and programming; hardworking; good typing speed"],
              ["Weaknesses", "Weak spoken English; nervous in front of a crowd; poor time management"],
              ["Opportunities", "Growing demand for IT jobs; free online courses; internships; campus placements"],
              ["Threats", "Heavy competition; rapidly changing technology; social-media distraction"],
              ["Action plan", "Use strengths to grab opportunities (build projects); reduce weaknesses (join a speaking club); prepare for threats (keep learning new skills)"],
            ],
          },
          {
            kind: "table",
            headers: ["Self-confidence", "Self-esteem"],
            rows: [
              ["Belief in one's ability to do a particular task successfully.", "Overall opinion of one's own worth — how much one values and respects oneself."],
              ["Can be high in one field (e.g., maths) and low in another (e.g., public speaking).", "A general feeling about oneself."],
              ["Grows with practice, preparation and success.", "Grows with self-acceptance, positive relationships and achievements."],
              ["Shown by: taking initiative, speaking up, facing challenges.", "Shown by: self-respect, accepting compliments, saying 'no' when needed."],
            ],
          },
          {
            kind: "bullets",
            items: [
              "Importance of self-confidence: helps in interviews and presentations, encourages taking risks and decisions, reduces fear and stress, impresses others and leads to success and leadership. Overconfidence, however, leads to mistakes.",
              "How to build it: set small achievable goals; prepare well; learn new skills; dress and stand well; think positively; accept mistakes as learning; avoid comparing with others; take care of health.",
              "How to improve self-esteem: accept oneself; focus on strengths; forgive one's mistakes; surround oneself with positive people; celebrate small wins; help others.",
            ],
          },
        ],
      },
      {
        id: "creativity",
        title: "4. Creativity: Out-of-the-Box and Lateral Thinking",
        icon: "Lightbulb",
        blocks: [
          {
            kind: "paragraph",
            text: "Creativity is the ability to produce new, original and useful ideas or to see old things in a new way. Creative persons are curious, open-minded, ready to take risks and do not fear failure. Creativity is important in business for innovation, problem solving and competitive advantage.",
          },
          {
            kind: "paragraph",
            text: "Out-of-the-box thinking means thinking beyond the usual limits, rules and assumptions ('the box') to find unusual solutions. The famous 'nine dots puzzle' — joining 9 dots arranged in a 3 x 3 square with four straight lines without lifting the pen — can be solved only by drawing lines that go outside the square formed by the dots. Similarly, many problems can be solved only when one steps out of the usual way of thinking.",
          },
          {
            kind: "paragraph",
            text: "Lateral thinking is a term coined by Dr. Edward de Bono. It is solving problems by an indirect and creative approach, looking at the problem from different angles instead of using only step-by-step logic.",
          },
          {
            kind: "table",
            headers: ["Vertical (logical) thinking", "Lateral thinking"],
            rows: [
              ["Step-by-step, each step must be correct", "Jumps and looks around; steps may be wrong for a time"],
              ["Analytical and selective", "Generative and provocative"],
              ["Uses fixed categories and rules", "Breaks categories and rules"],
              ["Seeks the right answer", "Seeks many different answers"],
              ["Example: improving an existing machine", "Example: asking 'Why use a machine at all?'"],
            ],
          },
          {
            kind: "table",
            headers: ["Technique to improve creative thinking", "Description"],
            rows: [
              ["Brainstorming", "A group produces as many ideas as possible in a short time without criticising any."],
              ["Mind mapping", "Drawing a diagram with the main idea in the centre and related ideas branching out."],
              ["SCAMPER", "Ask: Substitute? Combine? Adapt? Modify? Put to another use? Eliminate? Reverse?"],
              ["Random word / provocation", "Link the problem with an unrelated word or a 'crazy' statement to trigger new ideas."],
              ["Reverse thinking", "Ask the opposite question: 'How could we make customers unhappy?' and then reverse the answers."],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Example of lateral thinking",
            text: "A hotel had a problem of guests complaining that the lift was too slow. Engineers suggested a faster lift, which was very costly. A lateral thinker suggested fixing mirrors near the lift doors. Guests began looking at themselves and forgot about waiting, and the complaints stopped.",
          },
          {
            kind: "bullets",
            items: [
              "Barriers to creativity: fear of failure or ridicule, rigid habits, negative attitude, lack of self-confidence, excessive rules, lack of time, and 'we have always done it this way' thinking.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Enquiry letter", definition: "A letter asking a supplier for information about goods, prices and terms." },
      { term: "Quotation", definition: "A supplier's reply giving prices and terms of supply." },
      { term: "AIDA", definition: "Attention, Interest, Desire, Action — the formula for a sales letter." },
      { term: "Circular letter", definition: "One letter with the same message sent to many people." },
      { term: "Resume (CV)", definition: "A brief record of a person's education, skills and experience." },
      { term: "Video conferencing", definition: "A live audio-visual meeting between people at different places." },
      { term: "SWOT", definition: "Analysis of Strengths, Weaknesses, Opportunities and Threats." },
      { term: "Self-esteem", definition: "The overall respect and value a person feels for himself." },
      { term: "Lateral thinking", definition: "Solving problems by an indirect and creative approach (Edward de Bono)." },
    ],
    examQuestions: [
      "Draft a letter of enquiry to a supplier and write the reply to it. (Long)",
      "Draft a letter placing an order for goods. (Medium)",
      "Draft a letter of complaint about damaged goods and write the reply (adjustment). (Long)",
      "What is a sales letter? Draft one using the AIDA formula. (Medium)",
      "Draft a circular letter announcing the opening of a new branch. (Medium)",
      "Draft an application for employment with a resume. (Long)",
      "Explain the IT tools of communication — e-mail, fax, video conferencing and SMS — with advantages and limitations. (Long)",
      "Write short notes on voice mail, teleconferencing and telephone answering machine. (Medium)",
      "What is SWOT analysis? Prepare your own SWOT. (Medium)",
      "Differentiate between self-confidence and self-esteem. Why is self-confidence important? (Medium)",
      "What is creativity? Explain out-of-the-box and lateral thinking. (Medium)",
      "Differentiate between lateral and vertical thinking. (Short)",
    ],
  },
  {
    unitNumber: 4,
    title: "Attitude, Motivation, Goal Setting, Interpersonal Skills and Team Work",
    hours: 10,
    headings: [
      {
        id: "attitude",
        title: "1. Attitude: Factors, Challenges, Lessons and Etiquette",
        icon: "Sparkles",
        blocks: [
          {
            kind: "paragraph",
            text: "Attitude is a person's settled way of thinking, feeling and behaving towards people, objects, events or situations. It is a mental state built through experience that guides how we respond. A saying goes: 'Your aptitude decides how far you can go, but your attitude decides how far you actually go.'",
          },
          {
            kind: "table",
            headers: ["Component of attitude", "Meaning", "Example (attitude to studies)"],
            rows: [
              ["Cognitive (Belief)", "What a person thinks or believes.", "'Learning C will help me get a job.'"],
              ["Affective (Feeling)", "What a person feels.", "'I enjoy programming.'"],
              ["Behavioural (Action)", "How a person tends to act.", "Practises programs every day"],
            ],
          },
          {
            kind: "table",
            headers: ["Factors influencing attitude", "How"],
            rows: [
              ["Family and upbringing", "Values and habits learnt in childhood."],
              ["Peer group and friends", "Desire to belong shapes opinions."],
              ["Education and teachers", "Knowledge and role models."],
              ["Experiences", "Success builds a positive attitude; repeated failure or bad experience builds a negative one."],
              ["Culture, religion and society", "Beliefs and traditions."],
              ["Media and technology", "News, films and social media influence views."],
              ["Personality and needs", "Confidence, optimism or fear of the person."],
              ["Work environment", "Leadership, fairness and rewards in the organisation."],
            ],
          },
          {
            kind: "table",
            headers: ["Positive attitude", "Negative attitude"],
            rows: [
              ["Sees opportunity in every problem", "Sees a problem in every opportunity"],
              ["Takes responsibility", "Blames others"],
              ["Keeps learning; welcomes feedback", "Resists change and criticism"],
              ["Optimistic, energetic, cooperative", "Pessimistic, complaining, lazy"],
              ["Result: growth, good relations, success", "Result: stress, conflicts, missed chances"],
            ],
          },
          {
            kind: "bullets",
            items: [
              "Challenges of attitude: changing a deep-rooted negative attitude is difficult; peer pressure; fear of failure; habit and comfort zone; ego and past failures; a negative environment.",
              "Lessons from attitude: (1) attitude is a choice — we cannot control events but we can control our response; (2) a positive attitude improves performance, health and relations; (3) take responsibility instead of blaming; (4) treat failures as lessons (growth mindset); (5) practise gratitude and optimism; (6) be around positive people; (7) small daily habits build a strong attitude.",
              "Steps to change a negative attitude: be aware of the negative thought; find its cause; replace it with a positive thought; act positively; get feedback and keep practising.",
            ],
          },
          {
            kind: "paragraph",
            text: "Etiquette means the accepted rules of polite and correct behaviour in social and professional life. Business etiquette creates a good impression, builds trust and improves working relations.",
          },
          {
            kind: "table",
            headers: ["Area", "Do", "Don't"],
            rows: [
              ["Dress and grooming", "Dress neatly and suitably for the occasion", "Do not wear casual/untidy clothes to a formal meeting"],
              ["Punctuality", "Arrive on time or early; meet deadlines", "Do not keep others waiting"],
              ["Greeting and meeting", "Greet with a smile and a firm handshake; use names and titles; introduce yourself", "Do not interrupt or ignore people"],
              ["Telephone", "Answer promptly, speak politely, identify yourself, take messages", "Do not eat, shout or use the phone during meetings"],
              ["E-mail", "Clear subject line, proper greeting, short and correct mail, reply in time", "Do not use all capitals, slang or 'reply all' unnecessarily"],
              ["Meetings", "Come prepared, listen, respect the agenda and the chair", "Do not use mobile phones or hold side talks"],
              ["Dining", "Wait for the host, use cutlery properly, do not talk with the mouth full", "Do not criticise the food or arrive late"],
            ],
          },
        ],
      },
      {
        id: "motivation",
        title: "2. Motivation: Factors, Self-Talk, Intrinsic and Extrinsic Motivators",
        icon: "Rocket",
        blocks: [
          {
            kind: "paragraph",
            text: "Motivation is the inner drive or force that makes a person act in a certain way to achieve a goal. It answers the question 'why do people do what they do?'. A motivated employee works willingly, with energy and enthusiasm.",
          },
          {
            kind: "table",
            headers: ["Factor of motivation", "Explanation"],
            rows: [
              ["Needs", "Unfulfilled needs (food, security, belonging, respect, growth) push a person to act."],
              ["Rewards and pay", "Salary, bonus and incentives."],
              ["Recognition and praise", "Appreciation of good work."],
              ["Job security and career growth", "Confidence in the future and opportunities to progress."],
              ["Working conditions and relations", "Healthy environment and supportive colleagues."],
              ["Goals and challenge", "Clear, meaningful and achievable targets."],
              ["Leadership and participation", "A good leader and involvement in decisions."],
            ],
          },
          {
            kind: "table",
            headers: ["Intrinsic motivators", "Extrinsic motivators"],
            rows: [
              ["Come from within the person", "Come from outside — given by others"],
              ["Interest, enjoyment, curiosity, sense of achievement, personal growth, responsibility", "Salary, bonus, promotion, awards, praise, fear of punishment"],
              ["Long-lasting and self-sustaining", "Effective for a short time; stop when the reward stops"],
              ["Example: studying because you enjoy programming", "Example: studying only to get a scholarship or a gift"],
            ],
          },
          { kind: "diagram", diagramId: "maslow-hierarchy", caption: "Fig 4.1 — Maslow's hierarchy of needs (a basic theory of motivation)" },
          {
            kind: "paragraph",
            text: "Self-talk is the inner voice — the things we say to ourselves in our mind. Positive self-talk (encouraging, realistic, kind) increases confidence and motivation; negative self-talk (critical, hopeless) reduces them. Because we tend to act according to what we tell ourselves, controlling self-talk is a powerful tool of self-motivation.",
          },
          {
            kind: "table",
            headers: ["Negative self-talk", "Positive self-talk"],
            rows: [
              ["'I can't do this.'", "'I can learn how to do this.'"],
              ["'I always fail.'", "'I did not succeed this time; I'll try a better way.'"],
              ["'It's too difficult.'", "'It is a challenge and I'll take it step by step.'"],
              ["'Everyone is better than me.'", "'I have my own strengths and I'm improving.'"],
            ],
          },
        ],
      },
      {
        id: "goal-setting",
        title: "3. Goal Setting: Wish List, SMART Goals and Blueprint for Success",
        icon: "Target",
        blocks: [
          {
            kind: "paragraph",
            text: "A goal is a clear objective that a person decides to achieve within a certain time. A WISH is a vague desire ('I wish I were rich') with no plan. A wish list becomes a goal list when each wish is made specific, given a deadline and supported by action. Goals give direction, focus, motivation and a way to measure progress.",
          },
          { kind: "diagram", diagramId: "smart-goals", caption: "Fig 4.2 — SMART goals" },
          {
            kind: "table",
            headers: ["Letter", "Meaning", "Example"],
            rows: [
              ["S — Specific", "Clear and exact: what exactly do I want?", "'Learn C programming' (not 'improve my skills')"],
              ["M — Measurable", "Can be measured; you know when it is achieved.", "'Solve 100 programs and score 70 % in the test'"],
              ["A — Achievable", "Realistic with my time and resources.", "'2 hours of practice each day'"],
              ["R — Relevant", "Matches my larger aims and values.", "'Programming helps my career as a software developer'"],
              ["T — Time-bound", "Has a deadline.", "'By 31 December 2026'"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "From wish to SMART goal",
            text: "Wish: 'I want to get fit.'  SMART goal: 'I will jog for 30 minutes on 4 days every week for the next 3 months to reduce my weight by 4 kg.'",
          },
          {
            kind: "table",
            headers: ["Type of goal", "Time period", "Example"],
            rows: [
              ["Short-term", "Up to 1 year (days, weeks, months)", "Pass Semester 1 with 65 %; learn typing at 30 wpm"],
              ["Long-term", "1 to 5 years or more", "Complete BCA and MCA; get a job in a software company"],
              ["Lifetime", "The whole life — the big vision and values", "Become a successful entrepreneur and help others"],
            ],
          },
          {
            kind: "bullets",
            items: [
              "Blueprint for success (a plan for achieving goals): (1) Know what you want — dream and decide the vision; (2) Write down the goals in SMART form; (3) Break big goals into small steps and set priorities; (4) Make an action plan with a timetable; (5) Start now and stay disciplined; (6) Develop the needed skills and remove obstacles; (7) Track progress and celebrate milestones; (8) Review and revise the plan when necessary; (9) Keep a positive attitude and never give up.",
              "Goals must be linked: short-term goals are the steps to long-term goals and long-term goals are the steps to the lifetime goal.",
            ],
          },
        ],
      },
      {
        id: "interpersonal",
        title: "4. Interpersonal Skills: Gratitude, Leadership, Networking and Assessment",
        icon: "Handshake",
        blocks: [
          {
            kind: "paragraph",
            text: "Interpersonal skills (people skills) are the skills we use to communicate and interact with other people, individually and in groups. In every job, success depends as much on how well one works with people as on technical knowledge.",
          },
          {
            kind: "table",
            headers: ["Interpersonal skill", "Meaning"],
            rows: [
              ["Communication and active listening", "Expressing clearly and listening carefully."],
              ["Empathy", "Understanding others' feelings and viewpoint."],
              ["Assertiveness", "Stating one's needs and opinions firmly but respectfully, neither aggressive nor passive."],
              ["Conflict resolution and negotiation", "Solving disagreements so that both sides are satisfied."],
              ["Emotional intelligence", "Recognising and managing one's own and others' emotions."],
              ["Cooperation and team spirit", "Working together for common goals."],
              ["Positive attitude and courtesy", "Politeness, respect and cheerfulness."],
            ],
          },
          {
            kind: "paragraph",
            text: "Gratitude is the feeling and expression of thankfulness and appreciation for what one has and for what others do for us. Practising gratitude — saying 'thank you', writing thank-you notes, keeping a gratitude diary — improves happiness, health and relationships and creates a positive team atmosphere. Grateful leaders and team members are more respected and trusted.",
          },
          {
            kind: "table",
            headers: ["Concept", "Meaning", "Relationship with the others"],
            rows: [
              ["Leadership", "Influencing and guiding people to achieve a goal.", "A leader builds the team, sets the vision and creates networks."],
              ["Networking", "Building and keeping a web of useful professional and personal contacts.", "Networks bring information, resources and opportunities to the leader and the team."],
              ["Team work", "Working together with shared responsibility.", "The team turns the leader's vision and the network's resources into results."],
            ],
          },
          {
            kind: "paragraph",
            text: "In short: leadership gives direction, networking gives resources and support, and team work gives results — and gratitude is the glue that keeps these relationships strong.",
          },
          {
            kind: "paragraph",
            text: "Assessing interpersonal skills: one can assess one's skills by self-assessment questionnaires, feedback from friends, teachers and colleagues (360-degree feedback), observation in group discussions/role plays and studying how one behaves in real situations, as in the situations below.",
          },
          {
            kind: "table",
            headers: ["Situation", "Skill required", "Good response"],
            rows: [
              ["Two team members disagree over the project plan.", "Conflict resolution, listening", "Let each side speak, find common ground, agree on a solution."],
              ["A classmate is upset because of exam results.", "Empathy", "Listen patiently, show understanding, encourage without judging."],
              ["The boss gives an unreasonable deadline.", "Assertiveness, negotiation", "Explain politely what is possible and propose a realistic date."],
              ["A new joiner does not know anyone.", "Networking, cooperation", "Introduce yourself, include the person in the group."],
            ],
          },
        ],
      },
      {
        id: "team-work",
        title: "5. Team Work",
        icon: "Users",
        blocks: [
          {
            kind: "paragraph",
            text: "A team is a group of people with complementary skills who work together, are accountable to each other and share a common goal. Team work is the combined effort of team members to achieve that goal. As the saying goes, 'Together Everyone Achieves More' (TEAM).",
          },
          {
            kind: "bullets",
            items: [
              "Characteristics of an effective team: clear common goals, defined roles, trust and respect, open communication, cooperation, good leadership, mutual support, shared accountability and healthy handling of conflicts.",
            ],
          },
          { kind: "diagram", diagramId: "team-stages", caption: "Fig 4.3 — Tuckman's stages of team development" },
          {
            kind: "table",
            headers: ["Stage", "What happens"],
            rows: [
              ["Forming", "Members meet, are polite and uncertain about roles."],
              ["Storming", "Differences and conflicts about ideas, roles and leadership appear."],
              ["Norming", "Rules, roles and trust are established; cooperation begins."],
              ["Performing", "The team works efficiently and achieves its goals."],
              ["Adjourning", "The task is over and the team is dissolved."],
            ],
          },
          {
            kind: "table",
            headers: ["Necessity of team work", "Explanation"],
            rows: [
              ["Personally", "Team work develops communication, leadership and problem-solving skills, self-confidence and patience; one learns from others' strengths and gets emotional support."],
              ["Socially", "Society functions through cooperation — families, communities, sports, disaster relief. Teamwork creates unity, tolerance, respect for diversity and social harmony."],
              ["Educationally", "Group projects, study groups and discussions give better understanding, sharing of knowledge, peer learning, division of work and preparation for the working world."],
            ],
          },
          {
            kind: "table",
            headers: ["Advantages of team work", "Limitations"],
            rows: [
              ["More ideas and better decisions", "Conflicts and personality clashes"],
              ["Work is shared; tasks finish faster", "Decisions may take more time"],
              ["Better use of different skills", "'Social loafing' — some members do less work"],
              ["Higher morale and job satisfaction", "Dominance of a few members"],
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Attitude", definition: "A settled way of thinking, feeling and behaving towards people or situations." },
      { term: "Etiquette", definition: "The accepted rules of polite behaviour in social and professional life." },
      { term: "Motivation", definition: "The inner drive that makes a person act to achieve a goal." },
      { term: "Intrinsic motivator", definition: "A reward that comes from within, such as interest or a sense of achievement." },
      { term: "Extrinsic motivator", definition: "An external reward such as money, praise or promotion." },
      { term: "Self-talk", definition: "The inner voice of the mind — what we say to ourselves." },
      { term: "SMART goal", definition: "A goal that is Specific, Measurable, Achievable, Relevant and Time-bound." },
      { term: "Interpersonal skills", definition: "Skills used to communicate and interact with other people." },
      { term: "Networking", definition: "Building and maintaining useful professional and personal contacts." },
      { term: "Team work", definition: "The combined effort of a group to achieve a common goal." },
    ],
    examQuestions: [
      "What is attitude? Explain the factors that influence attitude. (Long)",
      "Differentiate between positive and negative attitude. How can a negative attitude be changed? (Medium)",
      "What is business etiquette? Explain any five points of etiquette. (Medium)",
      "What is motivation? Explain its factors. (Medium)",
      "Differentiate between intrinsic and extrinsic motivators. (Medium)",
      "What is self-talk? How does it help in motivation? (Short)",
      "What is goal setting? Explain SMART goals with an example. (Long)",
      "Distinguish between short-term, long-term and lifetime goals. (Medium)",
      "Explain the blueprint for success. (Medium)",
      "What are interpersonal skills? Explain any five. (Medium)",
      "Explain the relationship between leadership, networking and team work. What is the role of gratitude? (Long)",
      "What is team work? Explain its necessity personally, socially and educationally. (Long)",
      "Explain the stages of team development. (Medium)",
    ],
  },
  {
    unitNumber: 5,
    title: "Introduction to Ethics and Values",
    hours: 8,
    headings: [
      {
        id: "ethics-values-basics",
        title: "1. Basic Concepts: Ethics, Values and Morality",
        icon: "Scale",
        blocks: [
          {
            kind: "paragraph",
            text: "Ethics is the branch of philosophy that studies what is right and wrong in human conduct. It gives a set of principles or standards by which people judge behaviour. The word comes from the Greek 'ethos', meaning character or custom.",
          },
          {
            kind: "paragraph",
            text: "Values are the deeply held beliefs about what is important, desirable and worth striving for — such as honesty, respect, peace, responsibility, equality and compassion. Values guide our choices and behaviour. Morality (morals) refers to a person's or society's standards of right and wrong conduct, formed from values, culture and religion.",
          },
          {
            kind: "table",
            headers: ["Basis", "Values", "Morals", "Ethics"],
            rows: [
              ["Meaning", "What we consider important and worth having", "Personal/social beliefs about what is right or wrong", "Systematic principles or rules of right conduct"],
              ["Source", "Family, culture, experience", "Religion, family, society, conscience", "Society, profession, organisation, philosophy"],
              ["Nature", "Inner beliefs and priorities", "Personal and internal", "Often external and formal (codes, rules)"],
              ["Example", "Honesty", "'Stealing is wrong'", "A professional code that bans bribery"],
            ],
          },
          {
            kind: "table",
            headers: ["Type of values", "Meaning", "Examples"],
            rows: [
              ["Personal values", "Belief of an individual", "Discipline, ambition, humility"],
              ["Moral / ethical values", "Concern for right and wrong", "Honesty, justice, non-violence"],
              ["Social values", "Needed for living in society", "Cooperation, tolerance, respect for elders, patriotism"],
              ["Cultural values", "Traditions of a community", "Festivals, hospitality, language"],
              ["Professional (work) values", "Needed in the workplace", "Integrity, punctuality, accountability, teamwork"],
              ["Spiritual values", "Search for inner peace and meaning", "Faith, compassion, meditation"],
              ["Aesthetic values", "Appreciation of beauty and art", "Love of music, art, nature"],
            ],
          },
        ],
      },
      {
        id: "importance-sources",
        title: "2. Importance and Sources of Values",
        icon: "Compass",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Importance of values: (1) they guide decision-making — a person with strong values chooses the right course even when it is difficult; (2) they shape behaviour and character; (3) they build trust and good relationships; (4) they create peace and harmony in society; (5) they give purpose and direction to life; (6) they help to resist temptation, pressure and corruption; (7) they build a good reputation and long-term success for individuals and organisations.",
            ],
          },
          { kind: "diagram", diagramId: "values-sources", caption: "Fig 5.1 — Sources of values" },
          {
            kind: "table",
            headers: ["Source", "How it shapes values"],
            rows: [
              ["Family", "The first school of values — parents teach honesty, respect, sharing and discipline."],
              ["Religion and spiritual traditions", "Teach compassion, truth, charity and duty."],
              ["Education and teachers", "Schools and colleges teach knowledge, discipline and citizenship."],
              ["Culture and society", "Customs, traditions and community expectations."],
              ["Peers and friends", "Group behaviour and norms of the same age group."],
              ["Media and technology", "News, films, books and social media create and change opinions."],
              ["Law and government", "Rules and the Constitution set the minimum standards of behaviour."],
              ["Personal experience", "Success, failure, hardship and role models shape what we value."],
            ],
          },
        ],
      },
      {
        id: "professionalism",
        title: "3. Professionalism and Professional Ethics",
        icon: "Award",
        blocks: [
          {
            kind: "paragraph",
            text: "Professionalism is the competence, conduct and attitude expected from a person doing a job or belonging to a profession — reliability, skill, discipline, respect for others and commitment to quality. Professional ethics are the moral principles and standards of conduct that guide a profession — doctors, lawyers, engineers, accountants, software professionals — often written as a Code of Ethics.",
          },
          {
            kind: "table",
            headers: ["Principle of professional ethics", "Meaning"],
            rows: [
              ["Integrity", "Being honest and consistent in words and actions, even when unobserved."],
              ["Honesty and truthfulness", "Not lying, cheating or hiding facts."],
              ["Confidentiality", "Not revealing the secrets of the employer or client."],
              ["Objectivity and fairness", "No bias, favouritism or discrimination; decisions based on facts."],
              ["Accountability and responsibility", "Owning the results of one's work and mistakes."],
              ["Competence and quality", "Doing a job with proper skill and keeping the knowledge up to date."],
              ["Respect for others", "Treating colleagues, customers and juniors with dignity."],
              ["Transparency and avoiding conflict of interest", "Openness; not letting personal gain influence professional decisions."],
              ["Compliance with law", "Following laws, rules and company policies."],
            ],
          },
          {
            kind: "bullets",
            items: [
              "Conflict of interest arises when personal interest (e.g., giving a contract to one's relative) clashes with professional duty. Ethical professionals disclose it and step aside.",
              "Whistle-blowing means reporting illegal or unethical practices in the organisation to a higher authority or outside; ethical professionals should be protected from punishment when they do so in good faith.",
              "Benefits of professional ethics: trust of customers, good reputation, motivated employees, fewer legal problems, long-term success.",
            ],
          },
          {
            kind: "table",
            headers: ["Value in professional settings", "What it means at work", "Example"],
            rows: [
              ["Integrity", "Adhering to moral principles; doing the right thing consistently.", "Refusing to falsify sales figures, even when the manager asks."],
              ["Honesty", "Being truthful and transparent.", "Admitting a mistake in the project instead of hiding it; not taking credit for others' work."],
              ["Respect", "Valuing the dignity, opinions and time of others.", "Listening to a junior's idea; punctuality; not using abusive language."],
            ],
          },
        ],
      },
      {
        id: "indian-values",
        title: "4. Indian Values and Ethics",
        icon: "Landmark",
        blocks: [
          {
            kind: "paragraph",
            text: "India has an ancient tradition of ethical thought found in the Vedas, Upanishads, Bhagavad Gita, Buddhism, Jainism, Sikhism and the teachings of saints and leaders such as Mahatma Gandhi. Indian ethics stress duty, harmony, non-violence, truth and the unity of all beings.",
          },
          {
            kind: "table",
            headers: ["Indian value", "Meaning", "Relevance in the workplace"],
            rows: [
              ["Respect for elders and the Guru (Guru-Shishya parampara)", "Honouring parents, teachers and experienced people; humility in learning.", "Respect for seniors and mentors; learning from experience."],
              ["Hierarchy and order", "Recognising roles and responsibilities in family and society.", "Clear reporting lines, discipline and respect for authority (with fairness)."],
              ["Holistic relationships (Vasudhaiva Kutumbakam)", "'The world is one family'; life is seen as a whole — family, society, nature and spirit.", "Care for employees as family, concern for society and environment."],
              ["Dharma (duty / righteousness)", "Doing one's duty rightly.", "Doing one's job honestly and responsibly."],
              ["Karma (action)", "Focus on right action; results follow. The Gita: perform your duty without attachment to results.", "Hard work, quality and accountability."],
              ["Satya and Ahimsa (truth and non-violence)", "Truthfulness in speech and thought; not hurting anyone.", "Honest communication, no harassment or bullying."],
              ["Seva (selfless service) and Daan (charity)", "Serving others without expecting a reward.", "Corporate social responsibility, volunteering."],
              ["Atithi Devo Bhava", "The guest is like God.", "Customer service and hospitality."],
              ["Purusharthas", "The four aims of life: Dharma (righteousness), Artha (wealth), Kama (fulfilment), Moksha (liberation).", "Earn wealth ethically and in balance with other duties."],
              ["Trusteeship (Gandhi)", "Wealth is held in trust for society.", "Ethical business and social responsibility."],
            ],
          },
        ],
      },
      {
        id: "ethics-worklife",
        title: "5. Ethics in Work Life",
        icon: "Handshake",
        blocks: [
          {
            kind: "paragraph",
            text: "Ethics in work life means applying moral standards to everyday professional behaviour so that the workplace is fair, safe, respectful and productive. Ethical workplaces enjoy higher trust, morale, loyalty and productivity.",
          },
          {
            kind: "table",
            headers: ["Ethical practice at work", "Explanation"],
            rows: [
              ["Fairness and equal opportunity", "No discrimination on the basis of gender, religion, caste, region or disability in hiring, pay and promotion."],
              ["Respect and dignity; no harassment", "Protection from bullying and sexual harassment. In India the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 requires an Internal Committee in organisations."],
              ["Honesty and transparency", "True reporting, no cheating, no bribes or misuse of company property."],
              ["Confidentiality", "Protecting company and customer information."],
              ["Punctuality and responsibility", "Being on time, meeting deadlines, owning mistakes."],
              ["Work-life balance", "Reasonable workload and time for health and family."],
              ["Fair use of resources", "Not wasting time, electricity or the Internet on personal work."],
            ],
          },
          {
            kind: "table",
            headers: ["Step in ethical decision making", "Question to ask"],
            rows: [
              ["1. Identify the problem", "Is there an ethical issue? What is at stake?"],
              ["2. Gather facts", "What do I know for sure? What is missing?"],
              ["3. Identify the persons affected", "Who will be helped or harmed?"],
              ["4. List the options", "What are all the possible actions?"],
              ["5. Test each option", "Is it legal? Is it fair? Would I be comfortable if it was published in the newspaper or if my family knew?"],
              ["6. Decide and act", "Choose the option that best respects values and the law."],
              ["7. Review", "What was the result? What have I learnt?"],
            ],
          },
        ],
      },
      {
        id: "values-cultures",
        title: "6. Values Across Cultures",
        icon: "Globe",
        blocks: [
          {
            kind: "paragraph",
            text: "Culture is the shared beliefs, values, customs and behaviour of a group of people. When companies work across countries — as in the global IT industry — people with different cultural values must work together. Understanding these differences avoids misunderstandings and builds respect.",
          },
          {
            kind: "table",
            headers: ["Cultural dimension (Hofstede)", "Meaning", "Implication for global IT work"],
            rows: [
              ["Power distance", "How much less-powerful members accept unequal power. High: hierarchy respected (India). Low: flat, informal (Denmark).", "Style of leadership and whether juniors question decisions."],
              ["Individualism vs Collectivism", "Focus on self and personal goals vs on the group and loyalty.", "Individual credit vs team credit; how targets and rewards are designed."],
              ["Uncertainty avoidance", "Comfort with unclear situations.", "Need for detailed rules and plans vs flexibility."],
              ["Masculinity vs Femininity", "Competition and success vs care and quality of life.", "Attitude to competition, work-life balance."],
              ["Long-term vs short-term orientation", "Focus on future and perseverance vs on present and tradition.", "Planning horizon and patience for results."],
            ],
          },
          {
            kind: "table",
            headers: ["High-context cultures (e.g., India, Japan, Arab countries)", "Low-context cultures (e.g., USA, Germany)"],
            rows: [
              ["Meaning is in the situation, relationship, tone and silence", "Meaning is in the words; direct and explicit"],
              ["Indirect; saying 'no' openly is avoided", "Direct; 'yes' means yes and 'no' means no"],
              ["Relationships come first, then business", "Business first, relationships later"],
            ],
          },
          {
            kind: "bullets",
            items: [
              "Working across cultures: learn about other cultures; avoid stereotypes; respect religious festivals, food, dress and time customs; use simple language and confirm understanding; be patient with accents; take time zones into account; be flexible and open-minded.",
            ],
          },
        ],
      },
      {
        id: "technology-society",
        title: "7. Impact of Technology on Society",
        icon: "Wifi",
        blocks: [
          {
            kind: "table",
            headers: ["Area", "Positive impact", "Negative impact"],
            rows: [
              ["Social", "Instant communication, social networks, e-learning, e-governance, access to information", "Screen addiction, cyber-bullying, loss of face-to-face contact, fake news, privacy loss"],
              ["Economic", "New industries and jobs, e-commerce, digital payments, higher productivity", "Job loss through automation, digital divide between the rich and poor, monopoly of big companies"],
              ["Cultural", "Spreads knowledge and culture; global exchange", "Cultural homogenisation, influence of unrealistic media images"],
              ["Educational", "Online courses, digital libraries, smart classes", "Plagiarism, over-dependence on technology, reduced attention span"],
              ["Health", "Telemedicine, fitness apps, faster research", "Eye strain, sedentary lifestyle, sleep problems, stress"],
              ["Environmental", "Smart energy use, monitoring of climate, paperless offices", "E-waste, energy consumption of data centres, resource depletion"],
            ],
          },
          {
            kind: "callout",
            tone: "info",
            title: "Key idea",
            text: "Technology is neither good nor bad in itself — its effect depends on how people use it. Ethics helps us to use technology responsibly and for the benefit of all.",
          },
        ],
      },
      {
        id: "it-ethics",
        title: "8. Ethical Practices in IT: Data Privacy, Intellectual Property and Cybersecurity",
        icon: "FileCheck",
        blocks: [
          {
            kind: "paragraph",
            text: "IT professionals have special ethical responsibility because they build, manage and have access to the systems and data on which people and businesses depend. Professional bodies such as the ACM and IEEE and Indian laws — the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023 — guide their conduct.",
          },
          {
            kind: "table",
            headers: ["Area", "Ethical concern", "Good practice"],
            rows: [
              ["Data privacy", "Personal data (name, phone, Aadhaar, bank details, location, health data) can be misused, sold or leaked. Collecting data without consent or using it for another purpose is unethical.", "Collect only the required data; take clear consent; store securely (encryption, access control); do not share without permission; delete when not needed; follow the DPDP Act, 2023."],
              ["Intellectual property (IP)", "Copying software, music, movies, text or images without permission (piracy, plagiarism) harms the creator. IP includes copyright, patents, trademarks and trade secrets.", "Use licensed or open-source software according to its licence; give credit (cite sources); do not copy code or content illegally; respect the Copyright Act, 1957, the Patents Act, 1970 and the Trade Marks Act, 1999."],
              ["Cybersecurity", "Hacking, malware, phishing, identity theft, ransomware and unauthorised access harm people and businesses.", "Protect confidentiality, integrity and availability (CIA) of data; use strong passwords and two-factor authentication; update software; report vulnerabilities responsibly; never access systems without permission; follow the IT Act, 2000."],
              ["Professional honesty", "Making false claims about software, hiding bugs or security holes, plagiarising code.", "Be truthful about capabilities and limitations; test properly; document honestly."],
              ["Social responsibility", "Software that is biased, addictive or harmful (for example, biased AI decisions, misuse of surveillance).", "Design fairly, be transparent, think about the social consequences of the product."],
            ],
          },
          {
            kind: "table",
            headers: ["Term", "Meaning"],
            rows: [
              ["Copyright", "Legal right of the creator over original literary, artistic, musical works and software; prevents copying without permission."],
              ["Patent", "Exclusive right granted for an invention for a fixed period (20 years in India)."],
              ["Trademark", "A sign, name or logo that identifies the goods or services of a business."],
              ["Software piracy", "Unauthorised copying, use or distribution of copyrighted software."],
              ["Open-source software", "Software whose source code is freely available to use, study and modify under a licence."],
              ["Ethical hacking", "Authorised testing of a system to find and fix security weaknesses."],
              ["Phishing", "Fraud in which fake e-mails/websites trick people into giving passwords or money."],
            ],
          },
          {
            kind: "bullets",
            items: [
              "Ten basic commandments for computer ethics (short list): do not use a computer to harm others; do not interfere with others' computer work; do not snoop in others' files; do not use a computer to steal; do not use it to give false evidence; do not copy paid software; do not use others' resources without permission; do not appropriate others' intellectual output; think about the social consequences of your program; use the computer with consideration and respect.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Ethics", definition: "Principles or standards that distinguish right from wrong conduct." },
      { term: "Values", definition: "Deeply held beliefs about what is important and worth striving for." },
      { term: "Morality", definition: "Standards of right and wrong behaviour held by a person or society." },
      { term: "Professional ethics", definition: "Moral principles that guide the conduct of members of a profession." },
      { term: "Integrity", definition: "Consistently following moral principles, being honest in words and actions." },
      { term: "Conflict of interest", definition: "A situation where personal interest clashes with professional duty." },
      { term: "Vasudhaiva Kutumbakam", definition: "The Indian idea that the whole world is one family." },
      { term: "High-context culture", definition: "A culture in which meaning depends on situation, relationship and tone rather than words alone." },
      { term: "Data privacy", definition: "The right of individuals to control how their personal information is collected and used." },
      { term: "Intellectual property", definition: "Creations of the mind — inventions, works, designs and names — protected by law." },
    ],
    examQuestions: [
      "Define ethics, values and morality. Distinguish between them. (Long)",
      "Explain the importance of values in decision making and behaviour. (Medium)",
      "What are the sources of values? Explain them. (Medium)",
      "What is professionalism? Explain professional ethics and its principles. (Long)",
      "Explain the importance of integrity, honesty and respect in professional life. (Medium)",
      "What are Indian values and ethics? Explain their relevance in the workplace. (Long)",
      "Explain the ethics in work life and the steps of ethical decision making. (Medium)",
      "How do values differ across cultures? What is the impact on IT work? (Medium)",
      "Discuss the impact of technology on society. (Long)",
      "Explain the ethical issues in IT: data privacy, intellectual property and cybersecurity. (Long)",
      "What is a conflict of interest? What is whistle-blowing? (Short)",
      "Write short notes on copyright, patent and software piracy. (Medium)",
    ],
  },
];
