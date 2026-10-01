import { UnitNote } from "@/types";

// Detailed, exam-oriented notes for Employee Relations and Labor Laws (BMB HR 02)
// — AKTU, MBA Semester III, 40 teaching hours, syllabus provided by the user.
export const employeeRelationsAndLaborLawsUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Employee Relations Management and Industrial Relations",
    hours: 9,
    headings: [
      {
        id: "erm-and-industrial-relations",
        title: "1. Employee Relations Management and Industrial Relations",
        icon: "Handshake",
        blocks: [
          {
            kind: "paragraph",
            text: "Employee Relations Management (ERM) is the systematic management of the relationship between employees, managers and the organization. It covers communication, participation, discipline, grievance handling, employee welfare and mechanisms for resolving workplace conflicts. Industrial Relations (IR) is the broader framework governing relationships among employees, employers and their collective organizations, including trade unions and the State."
          },
          {
            kind: "table",
            headers: ["Aspect", "Employee Relations Management", "Industrial Relations"],
            rows: [
              ["Primary focus", "Day-to-day employee–management relationship", "Employment relations at organizational and industrial level"],
              ["Main actors", "Employees, supervisors and management", "Employees, employers, trade unions and government"],
              ["Typical issues", "Communication, grievances, discipline, participation", "Collective bargaining, disputes, unions and labour regulation"],
              ["Approach", "Primarily organizational and managerial", "Organizational, collective and legal"],
              ["Objective", "Constructive workplace relationships", "Industrial peace, cooperation and orderly employment relations"]
            ]
          },
          {
            kind: "callout",
            tone: "info",
            title: "Exam point",
            text: "A useful distinction is that ERM emphasizes the quality of employee–management relationships inside the organization, whereas IR covers the wider institutional and collective relationship between labour, management and the State."
          }
        ]
      },
      {
        id: "importance-and-tools-of-employee-relations",
        title: "2. Importance and Tools of Employee Relations",
        icon: "Users",
        blocks: [
          {
            kind: "paragraph",
            text: "Effective employee relations help an organization create trust, reduce avoidable conflict and support productivity. Important ERM tools include communication systems, grievance procedures, employee participation, counselling, disciplinary procedures, welfare measures, feedback mechanisms and recognition."
          },
          {
            kind: "table",
            headers: ["Tool", "Purpose", "Typical outcome"],
            rows: [
              ["Communication", "Share information and expectations clearly", "Greater clarity and trust"],
              ["Grievance procedure", "Provide a structured route for complaints", "Timely resolution of employee concerns"],
              ["Employee participation", "Involve employees in relevant decisions", "Higher involvement and acceptance"],
              ["Counselling", "Address work or adjustment problems", "Improved coping and performance"],
              ["Discipline procedure", "Maintain standards through fair rules", "Consistency and order"],
              ["Recognition", "Acknowledge contribution", "Motivation and positive workplace climate"]
            ]
          },
          {
            kind: "diagram",
            diagramId: "employee-relations-framework",
            caption: "Core ERM mechanisms and their relationship with constructive workplace outcomes."
          }
        ]
      },
      {
        id: "approaches-and-trends-in-industrial-relations",
        title: "3. Approaches and Emerging Trends in Industrial Relations",
        icon: "TrendingUp",
        blocks: [
          {
            kind: "paragraph",
            text: "Industrial relations can be studied through unitary, pluralist and interactionist perspectives. The unitary perspective emphasizes common organizational interests; the pluralist perspective recognizes different interests and the legitimate role of collective representation; the interactionist perspective gives attention to the processes through which workplace parties continuously negotiate, cooperate and manage conflict."
          },
          {
            kind: "table",
            headers: ["Approach", "View of interests", "View of conflict", "Typical emphasis"],
            rows: [
              ["Unitary", "Broadly shared", "Abnormal or avoidable", "Leadership, communication and commitment"],
              ["Pluralist", "Different but legitimate", "Natural and manageable", "Collective bargaining and representation"],
              ["Interactionist", "Develop through relationships", "Can be constructive when managed", "Dialogue, negotiation and relationship processes"]
            ]
          },
          {
            kind: "paragraph",
            text: "Major trends discussed in industrial relations include globalization, technological change, changing workforce expectations, growth of service-sector employment, flexible work arrangements and changing patterns of union participation. These trends alter the way organizations communicate, negotiate and manage employment relationships."
          }
        ]
      },
      {
        id: "factors-leading-to-industrial-relations",
        title: "4. Factors Leading to the Present State of Industrial Relations",
        icon: "Layers",
        blocks: [
          {
            kind: "paragraph",
            text: "The present condition of industrial relations is influenced by economic, technological, social, organizational and legal factors. Global competition can increase pressure on cost and productivity; technological change can alter job content and skill requirements; workforce diversification can change expectations; and labour legislation provides a formal framework for employment relations."
          },
          {
            kind: "table",
            headers: ["Factor", "Influence on industrial relations"],
            rows: [
              ["Economic conditions", "Employment levels, wages, productivity and business pressure affect bargaining relationships."],
              ["Technology", "Automation and digital systems change skills, jobs and work processes."],
              ["Globalization", "International competition and cross-border operations influence employment practices."],
              ["Workforce changes", "Changing demographics, skills and expectations affect workplace relationships."],
              ["Management practices", "Leadership, communication and HR policies shape trust and conflict."],
              ["Labour legislation", "Statutory requirements establish rights, duties and dispute mechanisms."]
            ]
          },
          {
            kind: "callout",
            tone: "example",
            title: "Illustrative example",
            text: "If new technology changes a production process, industrial relations may be affected through training needs, revised job roles, productivity expectations and negotiations over implementation."
          }
        ]
      },
      {
        id: "trade-unions-and-trade-union-act",
        title: "5. Trade Unions and the Trade Unions Act, 1926",
        icon: "Users",
        blocks: [
          {
            kind: "paragraph",
            text: "A trade union is an organized association of workers formed to represent and advance common employment interests. Trade unions may engage in collective bargaining, representation, welfare activities and lawful collective action. The syllabus specifically includes the Trade Unions Act, 1926, including its objectives, recognition and registration, industrial democracy and participative management."
          },
          {
            kind: "table",
            headers: ["Topic", "Study focus"],
            rows: [
              ["Objectives of trade unions", "Protection and advancement of common employment interests."],
              ["Registration", "Legal process through which a union obtains registered status under the statutory framework."],
              ["Recognition", "Acceptance of a union as a representative body for relevant collective purposes."],
              ["Industrial democracy", "Employee voice and participation in decisions affecting work."],
              ["Participative management", "Structured employee involvement in management-related decisions."]
            ]
          },
          {
            kind: "diagram",
            diagramId: "trade-union-participative-management",
            caption: "Relationship among trade unions, collective representation, industrial democracy and participative management."
          },
          {
            kind: "callout",
            tone: "info",
            title: "Exam focus",
            text: "In a long answer, distinguish registration from recognition and then explain how employee representation can support industrial democracy and participative management."
          }
        ]
      },
      {
        id: "trade-unionism-in-india-and-employee-union-problems",
        title: "6. Trade Unionism in India and Problems of Employee Unions",
        icon: "History",
        blocks: [
          {
            kind: "paragraph",
            text: "The syllabus includes the history and development of trade unionism in India, the Politics and Trade Unions topic, outside leadership of trade unions, union problems and suggestive remedial measures, and the Trade Unions Act, 1926 with the Amendment Bill, 2019. These topics should be understood as parts of the institutional development of worker representation in India."
          },
          {
            kind: "table",
            headers: ["Problem area", "Possible organizational effect", "Broad remedial direction"],
            rows: [
              ["Multiple unions", "Fragmented representation and competing demands", "Coordination and representative mechanisms"],
              ["Outside leadership", "Potential distance between leadership and workplace membership", "Greater member participation and accountability"],
              ["Political influence", "Union priorities may interact with external political interests", "Clear member mandate and transparent functioning"],
              ["Weak internal participation", "Lower ownership of collective decisions", "Regular communication and democratic participation"],
              ["Inter-union rivalry", "Difficulty in presenting common demands", "Coordination and collective platforms"]
            ]
          },
          {
            kind: "callout",
            tone: "case",
            title: "Case-study framework",
            text: "For a trade-union case study, identify the workplace issue, the parties involved, the union's demand, management's response, the negotiation or dispute mechanism used, and the outcome. Then discuss what the case shows about industrial democracy and participation."
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Employee Relations Management", definition: "Systematic management of employee–management relationships, including communication, grievances, discipline and participation." },
      { term: "Industrial Relations", definition: "The institutional and workplace relationships among employees, employers, unions and the State." },
      { term: "Unitary approach", definition: "An industrial-relations perspective that emphasizes shared organizational interests." },
      { term: "Pluralist approach", definition: "An approach that recognizes different legitimate interests and the role of collective representation." },
      { term: "Trade union", definition: "An organized association representing common employment interests of workers." },
      { term: "Collective representation", definition: "Representation of employees as a group in employment-related matters." },
      { term: "Industrial democracy", definition: "Employee participation and voice in decisions affecting working life." },
      { term: "Participative management", definition: "Management practice that involves employees in relevant decision-making." },
      { term: "Recognition", definition: "Acceptance of a union as a representative body for collective purposes." },
      { term: "Outside leadership", definition: "Leadership of a union by persons who may not be employees of the concerned workplace." }
    ],
    examQuestions: [
      "Define Employee Relations Management and explain its importance in an organization. (Long)",
      "Distinguish between Employee Relations Management and Industrial Relations. (Medium)",
      "Explain the major tools of Employee Relations Management. (Long)",
      "Discuss the unitary, pluralist and interactionist approaches to Industrial Relations. (Long)",
      "Explain the major factors responsible for the present state of Industrial Relations. (Long)",
      "What are trade unions? Explain their major objectives and functions. (Long)",
      "Explain recognition and registration of trade unions and distinguish between them. (Medium)",
      "Discuss industrial democracy and participative management in the context of trade unions. (Long)",
      "Explain the major problems of trade unions in India and suggest remedial measures. (Long)",
      "Write a short note on outside leadership of trade unions. (Short)"
    ]
  },

  {
    unitNumber: 2,
    title: "Collective Bargaining, Discipline, Grievance Handling and Employee Participation",
    hours: 8,
    headings: [
      {
        id: "collective-bargaining-significance-and-types",
        title: "1. Collective Bargaining: Significance and Types",
        icon: "Handshake",
        blocks: [
          {
            kind: "paragraph",
            text: "Collective bargaining is a process in which representatives of employees and management negotiate employment-related matters. It can cover wages, working conditions, benefits, work rules, grievance procedures and other employment terms. Its significance lies in providing an orderly mechanism for reconciling collective employee interests with organizational requirements."
          },
          {
            kind: "table",
            headers: ["Type", "Basic idea", "Typical context"],
            rows: [
              ["Distributive bargaining", "Parties negotiate over allocation of a relatively fixed value.", "Wage or benefit negotiations"],
              ["Integrative bargaining", "Parties search for solutions that can benefit both sides.", "Productivity, work redesign or mutual gains"],
              ["Productivity bargaining", "Employment terms are linked with productivity improvements.", "Productivity-linked settlements"],
              ["Composite bargaining", "Negotiation covers several employment issues together.", "Wages plus working conditions and welfare"]
            ]
          },
          {
            kind: "diagram",
            diagramId: "collective-bargaining-process",
            caption: "Typical collective bargaining sequence from preparation through implementation."
          }
        ]
      },
      {
        id: "collective-bargaining-procedure",
        title: "2. Procedure of Collective Bargaining",
        icon: "RefreshCw",
        blocks: [
          {
            kind: "paragraph",
            text: "A structured bargaining process normally begins with preparation and identification of issues, followed by exchange of demands, negotiation, settlement and implementation. The exact procedure varies with the organization, applicable rules and the nature of the dispute."
          },
          {
            kind: "table",
            headers: ["Stage", "Key activity", "Output"],
            rows: [
              ["Preparation", "Collect facts, identify interests and formulate demands", "Negotiation strategy"],
              ["Opening", "Present demands and establish the bargaining agenda", "Defined issues"],
              ["Negotiation", "Exchange proposals and make concessions or seek alternatives", "Tentative understanding"],
              ["Settlement", "Record agreed terms", "Collective agreement/settlement"],
              ["Implementation", "Apply agreed terms and monitor compliance", "Operational changes"]
            ]
          },
          {
            kind: "callout",
            tone: "info",
            title: "Exam point",
            text: "Do not describe collective bargaining as only wage negotiation. It can include a wider set of employment conditions and workplace rules."
          }
        ]
      },
      {
        id: "discipline-standing-orders-and-domestic-enquiry",
        title: "3. Discipline, Standing Orders, Domestic Enquiry and Punishments",
        icon: "FileCheck",
        blocks: [
          {
            kind: "paragraph",
            text: "Discipline refers to orderly conduct according to established organizational rules. Standing orders provide defined rules and conditions relating to employment in covered establishments. A domestic enquiry is an internal disciplinary proceeding used to examine alleged misconduct before a disciplinary decision is taken. A fair disciplinary system should communicate rules clearly and provide an appropriate opportunity to respond."
          },
          {
            kind: "table",
            headers: ["Concept", "Meaning", "Purpose"],
            rows: [
              ["Discipline", "Compliance with established workplace standards", "Maintain orderly conduct"],
              ["Standing orders", "Formally defined service and workplace rules", "Create clarity and consistency"],
              ["Misconduct", "Conduct treated as a breach under applicable rules", "Provide basis for disciplinary action"],
              ["Domestic enquiry", "Internal fact-finding disciplinary proceeding", "Examine allegations and employee response"],
              ["Punishment", "Disciplinary consequence imposed under applicable rules", "Address established misconduct"]
            ]
          },
          {
            kind: "diagram",
            diagramId: "domestic-enquiry-flow",
            caption: "Conceptual flow of a disciplinary matter from allegation through enquiry and decision."
          }
        ]
      },
      {
        id: "grievance-handling",
        title: "4. Grievance Handling",
        icon: "MessageCircle",
        blocks: [
          {
            kind: "paragraph",
            text: "A grievance is an employee's concern or complaint relating to employment, workplace treatment, rules, working conditions or another employment matter. A grievance procedure provides a structured route for raising, examining and resolving such concerns."
          },
          {
            kind: "table",
            headers: ["Step", "Purpose"],
            rows: [
              ["Receive the grievance", "Record the employee's concern accurately."],
              ["Acknowledge and examine", "Clarify facts, documents and applicable rules."],
              ["Discuss with concerned parties", "Understand both the employee and management perspectives."],
              ["Decide and communicate", "Provide a reasoned organizational response."],
              ["Follow up or appeal", "Check implementation and provide escalation where applicable."]
            ]
          },
          {
            kind: "callout",
            tone: "example",
            title: "Illustrative grievance",
            text: "An employee claims that a shift allocation violates an established workplace rule. The grievance procedure should identify the applicable rule, verify the allocation records, hear the relevant explanations and communicate the decision through the prescribed channel."
          }
        ]
      },
      {
        id: "employee-participation-and-empowerment",
        title: "5. Employee Participation and Empowerment",
        icon: "Users",
        blocks: [
          {
            kind: "paragraph",
            text: "Employee participation means involving employees in decisions that affect their work or workplace. Employee empowerment goes further by giving employees appropriate authority, information and responsibility to act within defined boundaries. The syllabus covers objectives, advantages, methods and employee participation in India."
          },
          {
            kind: "table",
            headers: ["Method", "How it works", "Potential contribution"],
            rows: [
              ["Suggestion schemes", "Employees submit improvement ideas", "Operational improvements"],
              ["Joint committees", "Employee and management representatives deliberate together", "Consultation and problem solving"],
              ["Quality circles", "Small groups discuss work-quality or process issues", "Continuous improvement"],
              ["Works-level participation", "Employees participate through formal workplace mechanisms", "Employee voice"],
              ["Team-based decision making", "Teams receive defined decision authority", "Ownership and responsiveness"]
            ]
          },
          {
            kind: "callout",
            tone: "info",
            title: "Participation versus empowerment",
            text: "Participation primarily emphasizes employee voice and involvement in decisions; empowerment emphasizes authority and capacity to act. The two can reinforce each other but are not identical."
          }
        ]
      },
      {
        id: "employee-participation-in-india",
        title: "6. Employee Participation in India",
        icon: "Landmark",
        blocks: [
          {
            kind: "paragraph",
            text: "Employee participation in India can be examined through formal and informal mechanisms that provide workers with a voice in workplace matters. Its effectiveness depends on genuine consultation, information sharing, representative legitimacy, management support and the willingness of employees to participate."
          },
          {
            kind: "table",
            headers: ["Dimension", "Key consideration"],
            rows: [
              ["Representation", "Employees need credible channels for presenting collective views."],
              ["Information", "Participation requires sufficient and understandable information."],
              ["Consultation", "Management should provide a meaningful opportunity to discuss relevant matters."],
              ["Decision scope", "Participants should understand which matters are advisory and which permit joint decisions."],
              ["Follow-through", "Participation loses credibility if agreed actions are not implemented or explained."]
            ]
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Collective bargaining", definition: "Negotiation between employee representatives and management over employment matters." },
      { term: "Distributive bargaining", definition: "Bargaining focused on distributing a relatively fixed value between parties." },
      { term: "Integrative bargaining", definition: "Bargaining that seeks mutually beneficial solutions." },
      { term: "Standing orders", definition: "Defined rules and conditions governing employment and workplace conduct in covered establishments." },
      { term: "Domestic enquiry", definition: "Internal disciplinary proceeding for examining an alleged misconduct and the employee's response." },
      { term: "Grievance", definition: "An employee's complaint or concern relating to employment or workplace matters." },
      { term: "Employee participation", definition: "Employee involvement or representation in decisions affecting work or the workplace." },
      { term: "Employee empowerment", definition: "Providing employees with appropriate authority, information and responsibility to act." },
      { term: "Discipline", definition: "Orderly conduct in accordance with established workplace rules and standards." }
    ],
    examQuestions: [
      "Define collective bargaining and explain its significance. (Long)",
      "Explain the major types of collective bargaining. (Long)",
      "Describe the procedure of collective bargaining step by step. (Long)",
      "Explain the concept of discipline and discuss the role of standing orders. (Long)",
      "What is a domestic enquiry? Explain its major stages. (Medium)",
      "Explain the meaning and objectives of grievance handling. (Long)",
      "Discuss different methods of employee participation. (Long)",
      "Distinguish between employee participation and employee empowerment. (Medium)",
      "Explain the advantages of employee participation in management. (Long)",
      "Write a short note on employee participation in India. (Short)"
    ]
  },

  {
    unitNumber: 3,
    title: "Major Labour Laws: Factories, Wages, Establishments, Workmen's Compensation and Industrial Disputes",
    hours: 8,
    headings: [
      {
        id: "factories-act-1948",
        title: "1. The Factories Act, 1948",
        icon: "Factory",
        blocks: [
          {
            kind: "paragraph",
            text: "The Factories Act, 1948 is included in the syllabus as a major labour-law topic concerning conditions of work in factories. For examination purposes, study its purpose and the broad regulatory areas associated with health, safety, welfare, working conditions and working hours."
          },
          {
            kind: "table",
            headers: ["Area", "Study focus"],
            rows: [
              ["Health", "Workplace cleanliness and conditions affecting employee health."],
              ["Safety", "Measures intended to reduce occupational risks and accidents."],
              ["Welfare", "Facilities and provisions supporting employee well-being."],
              ["Working conditions", "Regulation of workplace conditions and related requirements."],
              ["Working time", "Statutory framework concerning working hours, rest and related limits."]
            ]
          },
          {
            kind: "callout",
            tone: "info",
            title: "Exam approach",
            text: "For a long answer, organize the Act under health, safety, welfare and working-time headings rather than listing provisions without structure."
          }
        ]
      },
      {
        id: "payment-of-wages-act-1936",
        title: "2. Payment of Wages Act, 1936",
        icon: "IndianRupee",
        blocks: [
          {
            kind: "paragraph",
            text: "The syllabus includes the Payment of Wages Act, 1936. The core examination theme is regulation of payment of wages and control of unauthorized or improper deductions, together with requirements concerning timely payment within the statutory framework."
          },
          {
            kind: "table",
            headers: ["Concept", "Meaning / study focus"],
            rows: [
              ["Payment of wages", "Statutory regulation of wage-payment practices."],
              ["Timely payment", "Wages are required to be paid within the applicable statutory framework."],
              ["Deductions", "Only deductions permitted under the applicable legal framework may be made."],
              ["Employee protection", "The law provides a framework for addressing improper wage-payment practices."]
            ]
          },
          {
            kind: "diagram",
            diagramId: "wage-payment-framework",
            caption: "Study framework linking wage payment, permitted deductions and employee protection."
          }
        ]
      },
      {
        id: "shop-and-establishment-act",
        title: "3. Shop & Establishment Act and the 2016 Amendment Mentioned in the Syllabus",
        icon: "Store",
        blocks: [
          {
            kind: "paragraph",
            text: "The syllabus specifically mentions the Shop & Establishment Act, 2016. Shop and establishment legislation is generally studied in relation to working conditions and employment regulation in commercial establishments outside the factory framework. Because the supplied syllabus names the Act without specifying a State enactment, these notes retain the syllabus wording and focus on the examination concept rather than attributing provisions to a particular State statute."
          },
          {
            kind: "table",
            headers: ["Study area", "What to understand"],
            rows: [
              ["Coverage", "Which establishments and employees fall within the applicable State framework."],
              ["Working hours", "Rules concerning working time and rest intervals under the applicable law."],
              ["Leave and holidays", "Statutory provisions applicable to covered employees."],
              ["Employment records", "Requirements for maintaining prescribed employment-related records."],
              ["Conditions of service", "Regulation of workplace conditions within the relevant State framework."]
            ]
          },
          {
            kind: "callout",
            tone: "info",
            title: "Scope note",
            text: "The syllabus does not identify the State version of the Shop & Establishment legislation. Therefore, do not memorize State-specific section numbers from these notes unless your faculty has prescribed a particular State Act."
          }
        ]
      },
      {
        id: "workmens-compensation-act-1923",
        title: "4. Workmen's Compensation Act, 1923",
        icon: "HeartHandshake",
        blocks: [
          {
            kind: "paragraph",
            text: "The syllabus lists the Workmen's Compensation Act, 1923. The examination focus is the statutory principle of compensation for employment-related injury and the framework governing employer liability and compensation claims under the Act as prescribed in the syllabus."
          },
          {
            kind: "table",
            headers: ["Concept", "Study focus"],
            rows: [
              ["Employment injury", "Injury or occupational harm connected with employment as covered by the statutory framework."],
              ["Employer liability", "Circumstances in which statutory compensation liability arises."],
              ["Compensation", "Statutory monetary relief determined according to applicable rules and factors."],
              ["Claim process", "Procedural framework for raising and determining a compensation claim."],
              ["Occupational disease", "Specified employment-related diseases may receive statutory treatment."]
            ]
          },
          {
            kind: "callout",
            tone: "example",
            title: "Illustrative case",
            text: "If a covered employee suffers an employment-related injury, the examination should ask: Is the injury connected with employment? Does the statutory framework impose liability? What factors determine compensation? Which authority or procedure handles the claim?"
          }
        ]
      },
      {
        id: "industrial-disputes-act-1947",
        title: "5. Industrial Disputes Act, 1947",
        icon: "Scale",
        blocks: [
          {
            kind: "paragraph",
            text: "The Industrial Disputes Act, 1947 is included in the syllabus as a central industrial-relations law. Study it around the concepts of industrial dispute, settlement machinery, strikes and lock-outs, lay-off, retrenchment, closure and adjudication."
          },
          {
            kind: "table",
            headers: ["Topic", "Core idea"],
            rows: [
              ["Industrial dispute", "A dispute connected with employment or non-employment or terms and conditions of employment within the statutory framework."],
              ["Conciliation", "A process intended to promote settlement of a dispute through intervention by a conciliating authority."],
              ["Adjudication", "Determination of disputes through the statutory adjudicatory machinery."],
              ["Strike", "Collective cessation of work by workers as defined by law."],
              ["Lock-out", "Employer's temporary closing, suspension of work or refusal to continue employment as defined by law."],
              ["Retrenchment", "Termination of service within the statutory meaning, subject to exclusions and conditions."],
              ["Closure", "Permanent closing of a place of employment or undertaking within the statutory framework."]
            ]
          },
          {
            kind: "diagram",
            diagramId: "industrial-dispute-settlement",
            caption: "Conceptual dispute-settlement path showing internal resolution, conciliation and adjudication."
          }
        ]
      },
      {
        id: "comparison-of-unit-3-laws",
        title: "6. Comparative View of Major Labour Laws",
        icon: "GitCompare",
        blocks: [
          {
            kind: "table",
            headers: ["Law in syllabus", "Primary subject area", "Exam keywords"],
            rows: [
              ["Factories Act, 1948", "Factory working conditions", "Health, safety, welfare, working time"],
              ["Payment of Wages Act, 1936", "Wage payment", "Timely payment, deductions"],
              ["Shop & Establishment Act, 2016", "Commercial establishments", "Working conditions, hours, leave, records"],
              ["Workmen's Compensation Act, 1923", "Employment injury compensation", "Injury, liability, compensation"],
              ["Industrial Disputes Act, 1947", "Industrial disputes", "Dispute, conciliation, adjudication, strike, lock-out"]
            ]
          },
          {
            kind: "callout",
            tone: "info",
            title: "Revision method",
            text: "Remember the laws by their central question: factory conditions, payment of wages, commercial-establishment conditions, injury compensation, and industrial-dispute settlement."
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Factories Act, 1948", definition: "Syllabus-listed labour legislation dealing broadly with factory health, safety, welfare and working conditions." },
      { term: "Payment of Wages Act, 1936", definition: "Syllabus-listed legislation concerning regulation of wage payment and deductions." },
      { term: "Shop & Establishment Act", definition: "State-level establishment legislation regulating specified employment conditions in shops and commercial establishments." },
      { term: "Workmen's compensation", definition: "Statutory compensation framework for covered employment-related injury or occupational harm." },
      { term: "Industrial dispute", definition: "Employment-related dispute falling within the statutory definition under the relevant labour-law framework." },
      { term: "Conciliation", definition: "A process intended to assist parties in reaching settlement of an industrial dispute." },
      { term: "Adjudication", definition: "Formal determination of a dispute through a competent statutory adjudicatory mechanism." },
      { term: "Retrenchment", definition: "Termination of employment falling within the statutory meaning, subject to prescribed exclusions and conditions." },
      { term: "Closure", definition: "Permanent closing of a place of employment or undertaking within the statutory framework." },
      { term: "Lock-out", definition: "Employer action defined by law involving temporary closing, suspension of work or refusal to continue employment." }
    ],
    examQuestions: [
      "Explain the objectives and major provisions of the Factories Act, 1948. (Long)",
      "Discuss the health, safety and welfare provisions studied under the Factories Act, 1948. (Long)",
      "Explain the main objectives of the Payment of Wages Act, 1936. (Medium)",
      "What are the major principles concerning deductions from wages? (Medium)",
      "Explain the significance of Shop & Establishment legislation for employees. (Long)",
      "Discuss the major concepts under the Workmen's Compensation Act, 1923. (Long)",
      "Define industrial dispute and explain the mechanisms for its settlement. (Long)",
      "Distinguish between conciliation and adjudication. (Medium)",
      "Explain strike, lock-out, lay-off, retrenchment and closure as industrial-relations concepts. (Long)",
      "Write a comparative note on the major labour laws included in Unit 3. (Long)"
    ]
  },

  {
    unitNumber: 4,
    title: "Minimum Wages, Contract Labour and Child Labour",
    hours: 8,
    headings: [
      {
        id: "minimum-wages-act-1948",
        title: "1. Payment of Minimum Wages Act, 1948",
        icon: "IndianRupee",
        blocks: [
          {
            kind: "paragraph",
            text: "The syllabus includes the Payment of Minimum Wages Act, 1948 and its revisions in 2019, 2020 and 2021. The central examination concept is protection of workers through statutory minimum rates of wages and the framework for fixing and revising such rates for covered employment."
          },
          {
            kind: "table",
            headers: ["Concept", "Study focus"],
            rows: [
              ["Minimum wage", "Statutorily prescribed wage floor for covered employment."],
              ["Fixation", "Legal process for determining applicable minimum wage rates."],
              ["Revision", "Periodic review or revision within the applicable framework."],
              ["Scheduled employment", "Employment to which the prescribed statutory minimum-wage framework applies under the syllabus-era legislation."],
              ["Compliance", "Employer obligation to pay at least the applicable statutory minimum where the law applies."]
            ]
          },
          {
            kind: "diagram",
            diagramId: "minimum-wage-framework",
            caption: "Conceptual framework for fixation, revision and payment of minimum wages."
          }
        ]
      },
      {
        id: "contract-labour-regulation-act-1970",
        title: "2. Contract Labour (Regulation & Abolition) Act, 1970",
        icon: "FileCheck",
        blocks: [
          {
            kind: "paragraph",
            text: "The syllabus includes the Contract Labour (Regulation & Abolition) Act, 1970. The Act is studied around regulation of the employment of contract labour, responsibilities within the contractor–principal employer relationship, welfare arrangements and the statutory mechanism concerning abolition in specified circumstances."
          },
          {
            kind: "table",
            headers: ["Topic", "Study focus"],
            rows: [
              ["Contract labour", "Workers engaged through a contractor for work connected with an establishment."],
              ["Principal employer", "The establishment-side entity having statutory responsibilities under the applicable framework."],
              ["Contractor", "The person or entity supplying or engaging contract labour under the statutory framework."],
              ["Regulation", "Registration, licensing and welfare-related requirements where applicable."],
              ["Abolition", "Statutory mechanism for prohibiting contract labour in specified employment and circumstances."]
            ]
          },
          {
            kind: "callout",
            tone: "example",
            title: "Illustrative relationship",
            text: "In a contract-labour arrangement, identify three parties or roles clearly: the establishment/principal employer, the contractor and the contract workers. Then map which statutory responsibility belongs to which role."
          }
        ]
      },
      {
        id: "esi-act-1948",
        title: "3. Employees' State Insurance Act, 1948 and Amendments",
        icon: "HeartHandshake",
        blocks: [
          {
            kind: "paragraph",
            text: "The syllabus includes the Employees' State Insurance (ESI) Act, 1948 and its latest amendments. It is studied as a social-security framework providing specified benefits to eligible insured employees and their dependants, subject to statutory coverage and conditions."
          },
          {
            kind: "table",
            headers: ["Area", "Study focus"],
            rows: [
              ["Coverage", "Identify the employees and establishments to which the statutory scheme applies."],
              ["Contributions", "Understand the contribution-based structure through which the insurance scheme is financed."],
              ["Medical benefit", "Medical care and treatment benefits available within the statutory framework."],
              ["Cash benefits", "Specified cash benefits may be available for contingencies covered by the Act."],
              ["Dependants' benefit", "Specified benefits may be available to dependants in circumstances provided by the law."],
              ["Administration", "Study the institutional framework responsible for administering the insurance scheme."]
            ]
          },
          {
            kind: "diagram",
            diagramId: "esi-benefit-framework",
            caption: "High-level study framework connecting ESI coverage, contributions and major benefit categories."
          },
          {
            kind: "callout",
            tone: "info",
            title: "Exam focus",
            text: "For an ESI answer, organize the discussion around coverage, contribution structure, major benefits, administration and the social-security objective. Use the latest statutory thresholds and amendment details from the prescribed course material when numerical or section-specific questions are asked."
          }
        ]
      },
      {
        id: "child-labour-prohibition-regulation-act-1986",
        title: "3. Child Labour (Prohibition & Regulation) Act, 1986",
        icon: "AlertTriangle",
        blocks: [
          {
            kind: "paragraph",
            text: "The syllabus includes the Child Labour (Prohibition & Regulation) Act, 1986 and its latest amendment. For examination purposes, study the law as a protective labour framework, focusing on prohibition/restriction of child employment, regulation of working conditions under the prescribed framework and the policy objective of protecting children from exploitative work."
          },
          {
            kind: "table",
            headers: ["Study area", "Core idea"],
            rows: [
              ["Prohibition", "The statutory framework restricts or prohibits child employment in specified circumstances."],
              ["Regulation", "Where regulation applies, prescribed conditions govern the work environment."],
              ["Protection", "The framework aims to protect children from harmful or exploitative employment."],
              ["Amendments", "The syllabus asks students to include the latest amendment prescribed in their course material."],
              ["Enforcement", "Compliance requires implementation of statutory restrictions and enforcement mechanisms."]
            ]
          },
          {
            kind: "callout",
            tone: "info",
            title: "Exam caution",
            text: "Because the supplied syllabus does not reproduce the amendment text or section-wise details, learn the exact age categories, exceptions and penalties from the current statutory text or the faculty's prescribed material before memorizing them."
          }
        ]
      },
      {
        id: "comparison-unit-4",
        title: "4. Comparison of Wage and Protective Labour Laws",
        icon: "GitCompare",
        blocks: [
          {
            kind: "table",
            headers: ["Law", "Main concern", "Protected interest"],
            rows: [
              ["Minimum wages legislation", "Minimum statutory wage", "Protection against wages below the applicable minimum"],
              ["Contract labour legislation", "Contract-labour arrangements", "Regulation, welfare and specified abolition"],
              ["Child labour legislation", "Employment of children", "Protection of children from prohibited or harmful employment"]
            ]
          },
          {
            kind: "paragraph",
            text: "These laws address different dimensions of labour protection. Minimum-wage law focuses on the wage floor, contract-labour law on a particular employment arrangement, and child-labour law on protection of children from prohibited or regulated employment."
          }
        ]
      },
      {
        id: "labour-law-compliance-framework",
        title: "5. Labour-Law Compliance as an HR Responsibility",
        icon: "Settings",
        blocks: [
          {
            kind: "paragraph",
            text: "For HR professionals, labour-law compliance involves identifying which statutory framework applies, maintaining required records, communicating conditions of employment, ensuring timely and lawful payments, supporting workplace welfare and responding to employee concerns. Compliance should be treated as a continuing process rather than a one-time formality."
          },
          {
            kind: "diagram",
            diagramId: "labour-law-compliance-cycle",
            caption: "A practical study model for recurring labour-law compliance: identify, implement, document, review and correct."
          },
          {
            kind: "table",
            headers: ["Compliance stage", "HR activity"],
            rows: [
              ["Identify", "Determine the applicable establishment, employee and employment-law requirements."],
              ["Implement", "Translate statutory requirements into policies and procedures."],
              ["Document", "Maintain required records and evidence of compliance."],
              ["Review", "Check practices against applicable requirements."],
              ["Correct", "Address identified gaps and document corrective action."]
            ]
          }
        ]
      },
      {
        id: "case-study-unit-4",
        title: "6. Case Study: Wage and Contract-Labour Compliance",
        icon: "FileText",
        blocks: [
          {
            kind: "paragraph",
            text: "A useful case-study structure is to begin with the facts, identify the employment arrangement, determine the applicable labour-law topics, identify the compliance issue, map the responsibility of each party and propose a legally compliant process. The analysis should separate facts from assumptions."
          },
          {
            kind: "callout",
            tone: "case",
            title: "Case-study question",
            text: "A company uses contract workers for a recurring activity and a complaint alleges that workers are receiving less than the applicable statutory wage. Identify the relevant legal topics, the roles of the principal employer and contractor, the records that should be examined, and the corrective steps HR should consider."
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Minimum wage", definition: "A statutory wage floor applicable to covered employment under the relevant legal framework." },
      { term: "Wage fixation", definition: "The legal process of determining applicable minimum wage rates." },
      { term: "Contract labour", definition: "Workers engaged through a contractor for work connected with an establishment." },
      { term: "Principal employer", definition: "The establishment-side entity with defined statutory responsibilities in a contract-labour arrangement." },
      { term: "Contractor", definition: "The person or entity engaging or supplying contract labour under the applicable framework." },
      { term: "Employees' State Insurance", definition: "Employment-linked social insurance framework providing specified benefits to eligible insured employees and dependants subject to statutory conditions." },
      { term: "Child labour", definition: "Employment of children within the scope of statutory prohibition or regulation." },
      { term: "Labour-law compliance", definition: "Ongoing organizational processes for identifying, implementing, documenting and reviewing legal requirements." },
      { term: "Wage floor", definition: "The minimum legally required wage level for covered employment." },
      { term: "Abolition of contract labour", definition: "Statutory prohibition of contract labour in specified employment and circumstances." }
    ],
    examQuestions: [
      "Explain the objectives and major features of the Payment of Minimum Wages Act, 1948. (Long)",
      "Discuss the principles of fixation and revision of minimum wages. (Long)",
      "Explain the Contract Labour (Regulation & Abolition) Act, 1970. (Long)",
      "Distinguish between a principal employer and a contractor. (Medium)",
      "Discuss the regulatory and welfare aspects of contract labour. (Long)",
      "Explain the objectives and major benefits under the Employees' State Insurance Act, 1948. (Long)",
      "Discuss the coverage, contributions and administration of the ESI framework. (Medium)",
      "Explain the objectives of the Child Labour (Prohibition & Regulation) Act, 1986. (Long)",
      "Discuss the importance of amendments in strengthening child-labour protection. (Medium)",
      "Compare minimum-wage, contract-labour and child-labour legislation. (Long)",
      "Explain labour-law compliance as an HR responsibility. (Long)",
      "Develop a case-study framework for a minimum-wage and contract-labour complaint. (Long)"
    ]
  },

  {
    unitNumber: 5,
    title: "Bonus, Gratuity, Maternity Benefit and Provident Fund",
    hours: 7,
    headings: [
      {
        id: "payment-of-bonus-act-1965",
        title: "1. Payment of Bonus Act, 1965 and Amendments",
        icon: "IndianRupee",
        blocks: [
          {
            kind: "paragraph",
            text: "The syllabus includes the Payment of Bonus Act, 1965 and amendments. For examination purposes, study the concept of statutory bonus, eligibility, calculation framework, allocable surplus and related employer and employee provisions as prescribed in the applicable syllabus material."
          },
          {
            kind: "table",
            headers: ["Concept", "Study focus"],
            rows: [
              ["Bonus", "Statutory payment governed by the applicable labour-law framework."],
              ["Eligibility", "Conditions under which an employee becomes entitled under the Act."],
              ["Calculation", "Determination of bonus using the statutory calculation framework."],
              ["Allocable surplus", "Relevant concept in determining the distributable bonus pool under the statutory scheme."],
              ["Set-on / set-off", "Statutory mechanism for carrying forward relevant surplus or deficiency under prescribed conditions."]
            ]
          },
          {
            kind: "callout",
            tone: "info",
            title: "Exam method",
            text: "For numerical questions, first identify eligibility and the relevant wage ceiling or statutory limits prescribed in your study material, then apply the calculation sequence carefully. Do not substitute remembered figures if your university notes prescribe different historical limits."
          }
        ]
      },
      {
        id: "payment-of-gratuity-act-1972",
        title: "2. Payment of Gratuity Act, 1972 and 2018 Amendment",
        icon: "Wallet",
        blocks: [
          {
            kind: "paragraph",
            text: "The Payment of Gratuity Act, 1972 provides a statutory framework for gratuity for eligible employees. The syllabus specifically asks for the 2018 amendment. Study the concept of continuous service, eligibility, calculation, nomination, determination and payment, together with the amendment prescribed in the course."
          },
          {
            kind: "table",
            headers: ["Concept", "Study focus"],
            rows: [
              ["Gratuity", "A statutory terminal or service-related benefit subject to the applicable conditions."],
              ["Continuous service", "Service concept used in determining eligibility under the statutory framework."],
              ["Eligibility", "Conditions that must be satisfied before gratuity becomes payable."],
              ["Calculation", "Statutory method for determining the amount payable."],
              ["Nomination", "Process through which an employee may nominate a person in accordance with the Act."],
              ["Payment", "Statutory process and timing for payment after entitlement arises."]
            ]
          },
          {
            kind: "diagram",
            diagramId: "gratuity-process",
            caption: "Conceptual gratuity pathway from service and eligibility to determination and payment."
          }
        ]
      },
      {
        id: "maternity-benefit-act-1961",
        title: "3. Maternity Benefit Act, 1961 and Amendments",
        icon: "HeartHandshake",
        blocks: [
          {
            kind: "paragraph",
            text: "The Maternity Benefit Act, 1961 is included in the syllabus with amendments. It is studied as a protective employment law concerning maternity-related leave, benefits and employment protections for eligible women employees under the applicable statutory conditions."
          },
          {
            kind: "table",
            headers: ["Area", "Study focus"],
            rows: [
              ["Maternity benefit", "Statutory benefit available subject to eligibility and applicable conditions."],
              ["Leave", "Protected maternity-related absence according to the applicable statutory provisions."],
              ["Employment protection", "Restrictions and protections relating to employment during the protected period."],
              ["Medical / related benefit", "Benefits prescribed by the applicable statutory framework."],
              ["Amendments", "The syllabus expects study of amendments to the original 1961 framework."]
            ]
          },
          {
            kind: "callout",
            tone: "info",
            title: "Exam focus",
            text: "When answering a question on maternity benefits, organize the answer under eligibility, leave, monetary benefit, employment protection and important amendments."
          }
        ]
      },
      {
        id: "employees-provident-fund-miscellaneous-provisions-act-1952",
        title: "4. Employees' Provident Fund & Miscellaneous Provisions Act, 1952",
        icon: "Wallet",
        blocks: [
          {
            kind: "paragraph",
            text: "The Employees' Provident Fund & Miscellaneous Provisions Act, 1952 is included in the syllabus as a major social-security law. Study the provident-fund framework, employee and employer contributions, applicable schemes, administration and the social-security purpose of the legislation."
          },
          {
            kind: "table",
            headers: ["Concept", "Study focus"],
            rows: [
              ["Provident fund", "Long-term social-security savings framework linked with employment."],
              ["Contribution", "Specified contributions by employer and employee under the applicable framework."],
              ["Coverage", "Applicability determined according to statutory conditions and notified establishments."],
              ["Administration", "Institutional mechanism for managing the provident-fund and related schemes."],
              ["Social security", "Protection against selected financial risks through employment-linked benefits."]
            ]
          },
          {
            kind: "diagram",
            diagramId: "employee-social-security-benefits",
            caption: "High-level relationship among provident fund, gratuity, maternity benefit and bonus as syllabus topics."
          }
        ]
      },
      {
        id: "comparison-of-social-security-laws",
        title: "5. Comparative Study of Unit 5 Benefits",
        icon: "GitCompareArrows",
        blocks: [
          {
            kind: "table",
            headers: ["Law / benefit", "Primary purpose", "Key study themes"],
            rows: [
              ["Payment of Bonus Act, 1965", "Statutory bonus", "Eligibility, calculation, allocable surplus, set-on/set-off"],
              ["Payment of Gratuity Act, 1972", "Service-related terminal benefit", "Continuous service, eligibility, calculation, nomination"],
              ["Maternity Benefit Act, 1961", "Maternity protection", "Leave, benefit, employment protection, amendments"],
              ["EPF & Miscellaneous Provisions Act, 1952", "Employment-linked social security", "Provident fund, contributions, schemes, administration"]
            ]
          },
          {
            kind: "paragraph",
            text: "The common HR theme across these laws is employee financial and social protection. However, each addresses a different employment need: bonus is a statutory payment, gratuity is a service-related benefit, maternity law provides maternity protection, and provident-fund legislation provides employment-linked social security."
          }
        ]
      },
      {
        id: "integrated-hr-case-study",
        title: "6. Integrated HR Case Study",
        icon: "FileText",
        blocks: [
          {
            kind: "paragraph",
            text: "An integrated HR case can require identification of several benefits at the same time. The correct approach is to identify the employee's employment status, service history, covered establishment, relevant event and applicable statutory conditions before calculating or recommending any benefit."
          },
          {
            kind: "callout",
            tone: "case",
            title: "Case-study framework",
            text: "An employee leaves after a period of service and asks HR about bonus, gratuity and provident-fund benefits, while another employee requests maternity-related benefits. Separate the four legal questions, identify eligibility conditions for each benefit and then determine the applicable process and records."
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Statutory bonus", definition: "Bonus payable under the applicable statutory framework subject to prescribed conditions." },
      { term: "Allocable surplus", definition: "A statutory concept relevant to determining the amount available for distribution as bonus." },
      { term: "Set-on", definition: "Statutory mechanism for carrying forward relevant surplus for bonus purposes under prescribed conditions." },
      { term: "Set-off", definition: "Statutory mechanism for carrying forward relevant deficiency for bonus purposes under prescribed conditions." },
      { term: "Gratuity", definition: "A statutory service-related benefit payable to eligible employees subject to the applicable law." },
      { term: "Continuous service", definition: "A statutory service concept used in determining eligibility for gratuity and related benefits." },
      { term: "Maternity benefit", definition: "Statutory employment protection and benefit relating to maternity under the applicable law." },
      { term: "Provident fund", definition: "Employment-linked social-security savings arrangement governed by the applicable statutory framework." },
      { term: "Social security", definition: "Measures designed to provide protection against specified social and economic risks." },
      { term: "Nomination", definition: "Statutory process through which an employee designates a person to receive specified benefits in accordance with the law." }
    ],
    examQuestions: [
      "Explain the objectives and major provisions of the Payment of Bonus Act, 1965. (Long)",
      "Explain eligibility, calculation and set-on/set-off under the Payment of Bonus Act. (Long)",
      "Discuss the Payment of Gratuity Act, 1972 and the significance of the 2018 amendment. (Long)",
      "Explain continuous service and eligibility for gratuity. (Medium)",
      "Discuss the major provisions of the Maternity Benefit Act, 1961 and its amendments. (Long)",
      "Explain maternity-related leave and employment protection under the statutory framework. (Medium)",
      "Explain the objectives and major provisions of the Employees' Provident Fund & Miscellaneous Provisions Act, 1952. (Long)",
      "Compare bonus, gratuity, maternity benefit and provident-fund provisions. (Long)",
      "Discuss the role of social-security legislation in employee relations. (Long)",
      "Solve an HR case study involving bonus, gratuity, maternity benefit and provident fund by identifying the applicable legal issues. (Long)"
    ]
  }
];
