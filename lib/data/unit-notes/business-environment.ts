import { UnitNote } from "@/types";

// Detailed, in-app notes for Business Environment & Legal Aspects of
// Business (BMB201) — AKTU MBA Sem 2.
export const businessEnvironmentUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Introduction to Micro Environment",
    hours: 10,
    headings: [
      {
        id: "meaning",
        title: "1. Meaning of Business and Business Environment",
        icon: "Building2",
        blocks: [
          {
            kind: "paragraph",
            text: "Business is any lawful economic activity concerned with the production, exchange, or distribution of goods and services, undertaken with the primary objective of earning profit while satisfying customer needs.",
          },
          {
            kind: "paragraph",
            text: "Business Environment refers to the sum total of all internal and external factors that influence a company's operations, including customers, competitors, government policies, technology, and economic conditions. No firm operates in isolation — its strategy (recall Unit 1 of Strategic Management) must constantly adapt to this environment.",
          },
          {
            kind: "bullets",
            items: [
              "Dynamic: the environment keeps changing (new technology, new laws, new competitors).",
              "Complex: many interrelated factors act simultaneously, making cause-and-effect hard to isolate.",
              "Uncertain: future changes are often unpredictable, requiring firms to plan for multiple scenarios (recall Scenario Analysis, Strategic Management Unit 4).",
              "Relative: the same environmental factor can be an opportunity for one firm and a threat for another (e.g., rising fuel prices hurt airlines but may help railways).",
            ],
          },
        ],
      },
      {
        id: "types-of-business",
        title: "2. Types of Business Organisations",
        icon: "Briefcase",
        blocks: [
          {
            kind: "table",
            headers: ["Form", "Ownership", "Liability", "Key Feature"],
            rows: [
              ["Sole Proprietorship", "One individual", "Unlimited", "Simplest form; owner takes all profit and all risk"],
              ["Partnership", "2 or more partners", "Unlimited (joint and several)", "Governed by the Indian Partnership Act, 1932; based on a partnership deed"],
              ["Limited Liability Partnership (LLP)", "2 or more partners", "Limited to their contribution", "Combines partnership flexibility with limited liability"],
              ["Company", "Shareholders", "Limited to unpaid share value", "Separate legal entity, perpetual succession (detailed in Unit 4)"],
            ],
          },
        ],
      },
      {
        id: "environment-factors",
        title: "3. Types of Environment — Internal and External to the Enterprise",
        icon: "Layers",
        blocks: [
          {
            kind: "paragraph",
            text: "For analysis, a business's environment is split into what it can control (internal) and what it largely cannot (external):",
          },
          {
            kind: "table",
            headers: ["Internal Factors (controllable)", "Example"],
            rows: [
              ["Value System", "The core beliefs and ethics guiding company decisions"],
              ["Mission, Objectives & Management Structure/Nature", "How the company is organised and what it is trying to achieve"],
              ["Human Resources", "Employee skill, morale, and commitment"],
              ["Company Image and Brand Value", "How customers and the market perceive the firm"],
              ["Physical Assets, Facilities & R&D", "Plant, machinery, technology and innovation capability"],
              ["Intangibles", "Patents, trademarks, goodwill"],
            ],
          },
          {
            kind: "table",
            headers: ["External Factors (largely uncontrollable)", "Example"],
            rows: [
              ["Customers", "Their needs, preferences, and purchasing power"],
              ["Market Intermediaries", "Distributors, wholesalers, agents"],
              ["Macro-environment", "Demographic, Legal, Political, and Technological forces (studied in depth in Unit 2)"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Easy example",
            text: "A strong company culture (value system) and skilled workforce (HR) are internal strengths Infosys built deliberately over decades. In contrast, a sudden new data-protection law (external, legal factor) is something Infosys must simply comply with — it cannot change the law itself.",
          },
        ],
      },
      {
        id: "porter-five-forces-micro",
        title: "4. Michael Porter's Five Forces and Competitive Strategies",
        icon: "Swords",
        blocks: [
          {
            kind: "paragraph",
            text: "Michael Porter's Five Forces Model (introduced in Strategic Management, Unit 2) is the standard tool for analysing the competitive micro-environment of an industry — it studies the threat of new entrants, bargaining power of suppliers, bargaining power of buyers, threat of substitutes, and the intensity of industry rivalry.",
          },
          { kind: "diagram", diagramId: "porter-five-forces", caption: "Fig 1.1 — Porter's Five Forces (micro-environment competitive analysis)" },
          {
            kind: "paragraph",
            text: "Based on how these five forces play out, a firm typically pursues one of Porter's competitive strategies (also detailed in Strategic Management, Unit 3): cost leadership, differentiation, or focus — the choice depends heavily on how intense competition is and where the firm's own strengths lie relative to the five forces.",
          },
          {
            kind: "callout",
            tone: "info",
            title: "Exam tip",
            text: "In Business Environment, examiners usually want you to apply the Five Forces specifically to explain why a micro-environment is attractive or unattractive for a NEW entrant — a slightly different angle from Strategic Management, which focuses more on an existing firm's strategy choice.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Business Environment", definition: "The sum total of internal and external factors influencing a company's operations." },
      { term: "Micro Environment", definition: "The immediate environment close to the business — customers, suppliers, competitors, intermediaries." },
      { term: "LLP", definition: "Limited Liability Partnership — combines partnership flexibility with limited liability for its partners." },
    ],
    examQuestions: [
      "Explain the meaning and characteristics of business environment. (Medium)",
      "Discuss the different types of business organisations with their features. (Long)",
      "Discuss the internal factors affecting a business's environment. (Long)",
      "Discuss the external factors of the micro-environment with examples. (Medium)",
      "Explain Porter's Five Forces Model as a tool for micro-environment analysis. (Long)",
      "How do competitive strategies relate to the Five Forces analysis of an industry? (Medium)",
    ],
  },
  {
    unitNumber: 2,
    title: "Macro Factors: Economic, Socio-Cultural, Competitive & International Environment",
    hours: 6,
    headings: [
      {
        id: "macro-factors",
        title: "1. Economic, Competition and Socio-cultural Environment",
        icon: "Globe",
        blocks: [
          {
            kind: "paragraph",
            text: "The macro-environment consists of broad forces that affect all firms in an economy, not just one industry (the same PESTEL-style factors introduced in Strategic Management Unit 2 apply here too, with a stronger legal/regulatory lens):",
          },
          { kind: "diagram", diagramId: "pestel", caption: "Fig 2.1 — Macro-environment factors" },
          {
            kind: "bullets",
            items: [
              "Economic Environment: GDP growth, inflation, interest rates, and fiscal/monetary policy shape overall business conditions.",
              "Competitive Environment: the intensity and nature of rivalry within an industry, shaped by the number and strength of competitors.",
              "Socio-cultural Environment: values, beliefs, lifestyle trends, and demographic shifts that influence consumer demand.",
            ],
          },
        ],
      },
      {
        id: "international-environment",
        title: "2. Global Integration and International Business Environment",
        icon: "Landmark",
        blocks: [
          {
            kind: "paragraph",
            text: "Global integration refers to how deeply a country's economy is connected with the rest of the world through trade, investment, and capital flows.",
          },
          {
            kind: "paragraph",
            text: "India's economic reforms of 1991 are best remembered through the LPG Model:",
          },
          { kind: "diagram", diagramId: "lpg-model", caption: "Fig 2.2 — The LPG Model of 1991 economic reforms" },
          {
            kind: "table",
            headers: ["Component", "Meaning"],
            rows: [
              ["Liberalization", "Reducing government control/regulation over the economy (delicensing, easing import restrictions)"],
              ["Privatization", "Transferring ownership/management of state-run enterprises to the private sector"],
              ["Globalization", "Integrating the domestic economy with the world economy through trade and investment"],
            ],
          },
          {
            kind: "paragraph",
            text: "Comparative Analysis of Business Environment: India vs. Other Countries: comparisons are typically made on ease of doing business rankings, labour costs, regulatory complexity, market size, and infrastructure quality — helping multinational firms decide where to invest.",
          },
          {
            kind: "paragraph",
            text: "Business Policy: forces affecting international business include exchange rate volatility, trade agreements/tariffs, geopolitical relations, and differing legal/regulatory systems across countries.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "LPG Model", definition: "Liberalization, Privatization, Globalization — India's 1991 economic reform framework." },
      { term: "Global Integration", definition: "How deeply a country's economy is connected with the rest of the world." },
    ],
    examQuestions: [
      "Explain the economic, competitive, and socio-cultural components of the macro-environment. (Long)",
      "Explain the LPG Model of 1991 with its significance for Indian business. (Long)",
      "Compare the business environment of India with another country of your choice. (Medium)",
      "Discuss the forces affecting international business. (Medium)",
    ],
  },
  {
    unitNumber: 3,
    title: "Law of Contract",
    hours: 8,
    headings: [
      {
        id: "contract-essentials",
        title: "1. Definition and Essentials of a Valid Contract",
        icon: "FileSignature",
        blocks: [
          {
            kind: "paragraph",
            text: "Under the Indian Contract Act, 1872, a contract is defined as \"an agreement enforceable by law.\" Not every agreement is a contract — only one that meets all the essential elements below.",
          },
          {
            kind: "table",
            headers: ["Essential", "Meaning"],
            rows: [
              ["Offer and Acceptance", "One party makes a definite proposal (offer) and the other accepts it, unconditionally and in the manner prescribed"],
              ["Consideration", "Something of value given by each party — \"no consideration, no contract\" is the general rule (with a few statutory exceptions, like a promise made out of natural love and affection between close relatives)"],
              ["Capacity of Parties", "Both parties must be legally competent to contract — of the age of majority, of sound mind, and not disqualified by law"],
              ["Free Consent", "Consent must be free from coercion, undue influence, fraud, misrepresentation, or mistake"],
              ["Lawful Object and Consideration", "The purpose of the contract must not be illegal, immoral, or against public policy"],
              ["Not Expressly Declared Void", "The agreement must not fall into a category the law specifically declares void (e.g., agreements in restraint of trade)"],
            ],
          },
        ],
      },
      {
        id: "discharge-remedies",
        title: "2. Discharge of Contract and Remedies for Breach",
        icon: "Scale",
        blocks: [
          {
            kind: "paragraph",
            text: "A contract can be discharged (come to an end) by performance, mutual agreement, impossibility of performance, lapse of time, or breach.",
          },
          {
            kind: "paragraph",
            text: "Remedies available to the aggrieved party when a contract is breached:",
          },
          {
            kind: "bullets",
            items: [
              "Damages: monetary compensation for the loss suffered due to the breach.",
              "Specific Performance: a court order requiring the breaching party to actually perform their contractual obligation (used when damages alone wouldn't be adequate, e.g., for a unique property).",
              "Injunction: a court order restraining a party from doing something they promised not to do.",
              "Quantum Meruit: payment for the value of work already done, when a contract becomes void or is discharged partway through.",
            ],
          },
        ],
      },
      {
        id: "sale-of-goods",
        title: "3. Sale of Goods Act: Essentials",
        icon: "ShoppingBag",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Sale vs. Agreement to Sell: in a \"sale,\" ownership transfers immediately; in an \"agreement to sell,\" ownership transfers at a future date or on fulfilment of a condition.",
              "Conditions vs. Warranties: a condition is a fundamental term of the contract — breach lets the buyer repudiate the whole contract; a warranty is a lesser term — breach only entitles the buyer to claim damages, not cancel the contract.",
              "Rights of an Unpaid Seller: includes the right of lien (retaining goods until paid), the right of stoppage in transit, and the right of resale.",
            ],
          },
        ],
      },
      {
        id: "case-studies",
        title: "4. Case Study",
        icon: "Gavel",
        blocks: [
          {
            kind: "callout",
            tone: "case",
            title: "Illustrative case — Carlill v. Carbolic Smoke Ball Co.",
            text: "This classic contract law case (still taught globally, including in Indian contract law courses) established that a public advertisement offering a reward can be a valid unilateral offer, and performing the stated act (using the product as directed) counts as valid acceptance — foundational to understanding offer and acceptance.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Consideration", definition: "Something of value exchanged between parties to a contract — 'no consideration, no contract.'" },
      { term: "Condition", definition: "A fundamental contract term; its breach lets the aggrieved party repudiate the whole contract." },
      { term: "Quantum Meruit", definition: "Payment for the value of work already done when a contract is discharged partway." },
    ],
    examQuestions: [
      "Define contract. Explain the essentials of a valid contract. (Long)",
      "Discuss the modes of discharge of a contract. (Medium)",
      "Explain the remedies available for breach of contract. (Long)",
      "Differentiate between sale and agreement to sell. (Short)",
      "Differentiate between a condition and a warranty with examples. (Medium)",
      "Explain the rights of an unpaid seller. (Medium)",
    ],
  },
  {
    unitNumber: 4,
    title: "Companies Act",
    hours: 8,
    headings: [
      {
        id: "company-definition",
        title: "1. Definition, Characteristics and Kinds of Companies",
        icon: "Building",
        blocks: [
          {
            kind: "paragraph",
            text: "A company, under the Companies Act, 2013, is an artificial legal person, created by law, having a separate legal existence, perpetual succession, and a common seal — distinct from its owners (shareholders).",
          },
          {
            kind: "table",
            headers: ["Kind of Company", "Description"],
            rows: [
              ["Private Company", "Restricts the right to transfer shares; minimum 2, maximum 200 members; cannot invite the public to subscribe to shares"],
              ["Public Company", "Can freely transfer shares and invite the public to subscribe; minimum 7 members, no maximum limit"],
              ["One Person Company (OPC)", "A company with only a single member"],
              ["Government Company", "At least 51% of paid-up share capital held by the government"],
            ],
          },
        ],
      },
      {
        id: "formation-steps",
        title: "2. Steps in Formation of a Company",
        icon: "ListOrdered",
        blocks: [
          { kind: "diagram", diagramId: "company-formation", caption: "Fig 4.1 — Stages in forming a company" },
          {
            kind: "bullets",
            items: [
              "Memorandum of Association (MOA): the company's charter document, defining its scope, objects, and boundaries of activity — a company cannot legally do anything outside its stated objects.",
              "Articles of Association (AOA): the internal rulebook governing the company's day-to-day management and administration.",
              "Prospectus: a formal document inviting the public to subscribe to a company's shares/debentures, containing all material information a prospective investor needs.",
            ],
          },
        ],
      },
      {
        id: "directors-auditors",
        title: "3. Directors and Auditors",
        icon: "UserCog",
        blocks: [
          {
            kind: "paragraph",
            text: "Directors: appointed by shareholders, responsible for the company's overall management (recall the board's role and composition from Strategic Management, Unit 1). Their duties include acting in good faith, exercising due care, and avoiding conflicts of interest; they are liable for breaches of these duties.",
          },
          {
            kind: "paragraph",
            text: "Meetings and Resolutions: companies must hold statutory meetings (like the Annual General Meeting) and pass resolutions (ordinary or special, depending on the matter) following prescribed notice and quorum rules.",
          },
          {
            kind: "paragraph",
            text: "Auditor: appointed to examine and verify the company's financial statements. Rights include access to the company's books and the right to seek information/explanation from officers; liabilities include being answerable for professional negligence or misstatement in the audit report.",
          },
        ],
      },
      {
        id: "winding-up",
        title: "4. Modes of Winding Up",
        icon: "DoorClosed",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Winding up by the Tribunal (Compulsory Winding Up): ordered by the National Company Law Tribunal (NCLT), e.g., due to inability to pay debts or on just and equitable grounds.",
              "Voluntary Winding Up: initiated by the company's own members or creditors, without tribunal intervention, when the company itself decides to close down.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "MOA", definition: "Memorandum of Association — the company's charter document defining its scope and objects." },
      { term: "AOA", definition: "Articles of Association — the internal rulebook for a company's management." },
      { term: "Prospectus", definition: "A formal document inviting the public to subscribe to a company's shares or debentures." },
    ],
    examQuestions: [
      "Define a company. Discuss its characteristics. (Medium)",
      "Differentiate between a private company and a public company. (Short)",
      "Explain the steps involved in the formation of a company. (Long)",
      "Differentiate between MOA and AOA. (Medium)",
      "Discuss the appointment, powers, and duties of directors. (Long)",
      "Explain the rights and liabilities of a company auditor. (Medium)",
      "Discuss the different modes of winding up a company. (Medium)",
    ],
  },
  {
    unitNumber: 5,
    title: "Consumer Protection Act and Information Technology Act",
    hours: 8,
    headings: [
      {
        id: "consumer-protection",
        title: "1. Consumer Protection Act",
        icon: "ShieldCheck",
        blocks: [
          {
            kind: "paragraph",
            text: "The Consumer Protection Act, 2019 (which replaced the 1986 Act) aims to protect consumers' interests by establishing authorities for timely and effective resolution of consumer disputes.",
          },
          {
            kind: "bullets",
            items: [
              "Aims and objectives: protecting consumers against unfair trade practices, defective goods, deficient services, and misleading advertisements.",
              "Consumer Protection Councils: advisory bodies at the central, state, and district levels to promote and protect consumer rights.",
              "Redressal Agencies: a three-tier system — District Commission, State Commission, and the National Consumer Disputes Redressal Commission (NCDRC) — handle complaints based on the value of the claim.",
              "Penalties for violation: can include fines and imprisonment for manufacturers/sellers found guilty of unfair practices or selling adulterated/spurious goods.",
            ],
          },
        ],
      },
      {
        id: "it-act",
        title: "2. The Information Technology Act",
        icon: "ShieldHalf",
        blocks: [
          {
            kind: "paragraph",
            text: "The Information Technology Act, 2000 provides legal recognition for electronic transactions, digital signatures, and governs cybercrime in India.",
          },
          {
            kind: "table",
            headers: ["Concept", "Meaning"],
            rows: [
              ["Digital Signature", "An electronic method to authenticate the identity of the sender of a digital document, giving it legal validity"],
              ["Electronic Governance", "Use of IT by the government to deliver services and information to citizens"],
              ["Attribution, Acknowledgement and Dispatch of Electronic Records", "Legal rules determining who is deemed to have sent/received an electronic record, and when"],
              ["Secure Electronic Records and Digital Signatures", "Provisions ensuring an electronic record/signature is deemed \"secure\" if verified through a prescribed security procedure"],
              ["Regulation of Certifying Authorities", "Bodies authorised to issue Digital Signature Certificates are themselves regulated to ensure trust in the system"],
              ["Digital Signature Certificates", "Issued by a Certifying Authority, they bind a digital signature to the identity of its holder"],
              ["Duties of Subscribers", "Obligations of the person holding a digital signature certificate, such as safeguarding the private key"],
              ["Penalties and Offences", "The Act prescribes penalties for offences like hacking, data theft, identity theft, and cyber terrorism"],
            ],
          },
          {
            kind: "callout",
            tone: "info",
            title: "Why this matters for management students",
            text: "As companies increasingly rely on e-commerce, digital contracts, and electronic records (recall e-mail/electronic writing from Business Communication), understanding the legal validity and security requirements under the IT Act is now a core part of doing business responsibly and legally in India.",
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
            title: "Illustrative case — E-commerce consumer complaints",
            text: "The rise of e-commerce complaints (defective products delivered, non-refund of payments) led to the Consumer Protection (E-Commerce) Rules, 2020 under the 2019 Act, specifically making e-commerce platforms accountable for grievance redressal — directly relevant to any student working in or building a digital business.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "NCDRC", definition: "National Consumer Disputes Redressal Commission — the apex consumer grievance redressal body in India." },
      { term: "Digital Signature Certificate", definition: "A certificate issued by a Certifying Authority binding a digital signature to its holder's identity." },
      { term: "Certifying Authority", definition: "A body authorised to issue Digital Signature Certificates under the IT Act." },
    ],
    examQuestions: [
      "Discuss the aims and objectives of the Consumer Protection Act. (Medium)",
      "Explain the three-tier consumer redressal system in India. (Medium)",
      "Explain the concept and legal validity of a digital signature. (Medium)",
      "Discuss the duties of subscribers and the role of certifying authorities under the IT Act. (Medium)",
      "Explain the penalties and offences prescribed under the Information Technology Act. (Long)",
    ],
  },
];
