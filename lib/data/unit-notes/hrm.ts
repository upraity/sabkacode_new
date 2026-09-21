import { UnitNote } from "@/types";

// Detailed, in-app notes for Human Resource Management (BMB202) — AKTU MBA
// Sem 2.
export const hrmUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Essentials of HRM",
    hours: 7,
    headings: [
      {
        id: "functions-roles",
        title: "1. Functions and Roles of HRM",
        icon: "Users",
        blocks: [
          {
            kind: "paragraph",
            text: "Human Resource Management (HRM) is the function concerned with attracting, developing, motivating, and retaining the people an organisation needs to achieve its objectives — essentially, managing the \"staffing\" function of management in full depth (recall the staffing function from MCOB, Unit 2).",
          },
          {
            kind: "table",
            headers: ["Function Category", "Includes"],
            rows: [
              ["Managerial Functions", "Planning, organising, directing, and controlling HR activities"],
              ["Operative Functions", "Recruitment, selection, training, compensation, performance appraisal, employee welfare"],
              ["Advisory Functions", "Advising top management and line managers on people-related decisions"],
            ],
          },
        ],
      },
      {
        id: "hrm-vs-hrd",
        title: "2. HRM vs. HRD and Strategic HRM",
        icon: "GitCompare",
        blocks: [
          {
            kind: "table",
            headers: ["Aspect", "HRM (Human Resource Management)", "HRD (Human Resource Development)"],
            rows: [
              ["Scope", "Broader — covers the entire employee lifecycle (hiring to exit)", "Narrower — focuses specifically on developing employee capability"],
              ["Nature", "Maintenance-oriented — administering policies, compliance, records", "Development-oriented — training, career growth, organisational development"],
              ["Orientation", "Reactive/administrative", "Proactive/growth-focused"],
            ],
          },
          {
            kind: "paragraph",
            text: "Strategic HRM (SHRM) means aligning HR policies and practices directly with the organisation's overall business strategy (recall Strategic Management, Units 1 and 4) — so that hiring, training, and compensation decisions actively support the company's competitive strategy, rather than running as a separate, purely administrative function.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Easy example",
            text: "If a company's business strategy (Strategic Management, Unit 3) is cost leadership, its HR strategy will likely emphasise efficiency-focused hiring and lean staffing. If the strategy is differentiation through innovation, HR will instead emphasise hiring highly creative talent and investing heavily in R&D team development — this is what \"linking HR strategy with business strategy\" means in practice.",
          },
        ],
      },
      {
        id: "barriers-mergers",
        title: "3. Barriers to the HR Role & HR in Mergers and Acquisitions",
        icon: "AlertTriangle",
        blocks: [
          {
            kind: "paragraph",
            text: "Common barriers to an HR manager's effectiveness: being seen as purely administrative/paperwork-focused rather than strategic, resistance from line managers who see HR as interference, and lack of top management buy-in for HR initiatives.",
          },
          {
            kind: "paragraph",
            text: "Role of HR in Mergers & Acquisitions (M&A): HR plays a critical role in cultural due diligence (assessing whether the two companies' cultures are compatible before the deal), managing employee anxiety/retention during the transition, harmonising compensation and benefit structures, and managing potential redundancies fairly — poor HR handling of \"people integration\" is one of the most commonly cited reasons M&A deals fail to deliver expected value.",
          },
        ],
      },
      {
        id: "technology-tqm",
        title: "4. Technology's Impact on HR & HRM's Link with TQM and Productivity",
        icon: "Cpu",
        blocks: [
          {
            kind: "paragraph",
            text: "Technology and HR: HR Information Systems (HRIS), AI-based resume screening, and people-analytics dashboards have shifted the HR function from manual record-keeping toward data-driven decision-making, and automated many routine administrative tasks — freeing HR to focus more on strategic activities.",
          },
          {
            kind: "paragraph",
            text: "HRM's linkage with Total Quality Management (TQM — see Operations Management, Unit 5) and productivity: HR practices like proper training, fair performance appraisal, and employee involvement/empowerment programs directly support a TQM culture, since quality improvement ultimately depends on motivated and skilled employees who understand and care about quality standards.",
          },
        ],
      },
      {
        id: "case-studies",
        title: "5. Case Study",
        icon: "Scale",
        blocks: [
          {
            kind: "callout",
            tone: "case",
            title: "Case study — Vodafone-Idea merger's HR integration challenge",
            text: "The Vodafone-Idea merger faced significant HR integration challenges — harmonising two different compensation structures, managing large-scale redundancies as overlapping roles were eliminated, and blending two distinct organisational cultures — illustrating exactly the M&A-related HR challenges discussed above.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "SHRM", definition: "Strategic Human Resource Management — aligning HR practices directly with overall business strategy." },
      { term: "HRIS", definition: "Human Resource Information System — software used to manage HR data and processes." },
      { term: "Cultural Due Diligence", definition: "Assessing the compatibility of two companies' cultures before a merger or acquisition." },
    ],
    examQuestions: [
      "Discuss the functions and roles of HRM. (Medium)",
      "Differentiate between HRM and HRD. (Short)",
      "Explain Strategic HRM and how HR strategy links with business strategy. (Long)",
      "Discuss the role of HR in mergers and acquisitions. (Medium)",
      "Explain the impact of technology on the HR function. (Medium)",
      "Discuss the linkage between HRM, TQM, and productivity. (Medium)",
    ],
  },
  {
    unitNumber: 2,
    title: "HR Planning and Employee Hiring",
    hours: 8,
    headings: [
      {
        id: "job-analysis-design",
        title: "1. Job Analysis and Job Design",
        icon: "ClipboardList",
        blocks: [
          {
            kind: "paragraph",
            text: "Job Analysis is the systematic process of gathering information about a job's duties, responsibilities, and the skills needed to perform it — resulting in two key documents: a Job Description (what the job entails) and a Job Specification (what qualities the jobholder must have).",
          },
          {
            kind: "paragraph",
            text: "Job Design is the process of deciding the content and methods of a job — how tasks are arranged to make the job efficient, motivating, and satisfying, often using techniques like job enlargement (adding more tasks at the same level), job enrichment (adding more responsibility/autonomy), and job rotation (moving employees between different tasks).",
          },
        ],
      },
      {
        id: "hr-planning",
        title: "2. Human Resource Planning (HRP)",
        icon: "CalendarClock",
        blocks: [
          {
            kind: "paragraph",
            text: "HR Planning is the process of forecasting an organisation's future human resource needs and ensuring the right number of people, with the right skills, are available at the right time.",
          },
          { kind: "diagram", diagramId: "hr-planning-process", caption: "Fig 2.1 — The HR Planning process" },
          {
            kind: "bullets",
            items: [
              "Methods of forecasting manpower demand: managerial judgement, ratio-trend analysis, and work-study techniques.",
              "Methods of forecasting manpower supply: analysing the internal workforce (skills inventory, succession planning) and the external labour market.",
              "Factors influencing HRP: organisational growth plans, employee turnover rate, government policies, technology changes, and overall economic conditions.",
            ],
          },
        ],
      },
      {
        id: "employee-hiring",
        title: "3. Employee Hiring: Recruitment and Selection",
        icon: "UserPlus",
        blocks: [
          { kind: "diagram", diagramId: "recruitment-selection-process", caption: "Fig 2.2 — The recruitment and selection process" },
          {
            kind: "table",
            headers: ["Recruitment Source", "Type", "Example"],
            rows: [
              ["Promotion/Transfer", "Internal", "Moving an existing employee to a higher/different role"],
              ["Employee Referral", "Internal/External hybrid", "Current employees recommending candidates"],
              ["Campus Placement", "External", "Recruiting fresh graduates directly from colleges"],
              ["Job Portals/Social Media", "External", "LinkedIn, Naukri.com, company career pages"],
              ["Recruitment Agencies", "External", "Third-party firms sourcing candidates for a fee"],
            ],
          },
          {
            kind: "paragraph",
            text: "The process of employee selection typically includes: application screening, written tests/aptitude tests, one or more interview rounds, background/reference verification, and a final medical examination (where applicable) before the formal job offer.",
          },
          {
            kind: "paragraph",
            text: "Trends in recruitment: growing use of AI-based resume screening and chatbots, skills-based hiring (assessing actual demonstrated skills over just degrees), and an increased focus on employer branding to attract talent in a competitive job market.",
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
            title: "Case study — Zomato/Swiggy's skills-based hiring for delivery-tech roles",
            text: "Many Indian tech-enabled companies now use skills-based hiring assessments (coding tests, case-study simulations) rather than relying only on a candidate's college pedigree — a real-world example of the shift in recruitment trends discussed above.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Job Description", definition: "A document outlining a job's duties and responsibilities." },
      { term: "Job Specification", definition: "A document outlining the qualities/qualifications required of the jobholder." },
      { term: "Job Enrichment", definition: "Adding more responsibility and autonomy to a job to make it more motivating." },
    ],
    examQuestions: [
      "Explain job analysis and its outcomes (job description and job specification). (Medium)",
      "Discuss job design techniques: enlargement, enrichment, and rotation. (Medium)",
      "Explain the process of Human Resource Planning. (Long)",
      "Discuss the methods of forecasting manpower demand and supply. (Medium)",
      "Explain the sources of recruitment with examples. (Long)",
      "Explain the process of employee selection. (Medium)",
      "Discuss recent trends in recruitment. (Short)",
    ],
  },
  {
    unitNumber: 3,
    title: "Employee Training and Development",
    hours: 8,
    headings: [
      {
        id: "training",
        title: "1. Training: Importance, Types and Methods",
        icon: "GraduationCap",
        blocks: [
          {
            kind: "paragraph",
            text: "Training is a planned effort to help employees learn job-related knowledge, skills, and behaviours — important because it improves performance, reduces errors/accidents, boosts employee morale, and helps the organisation adapt to new technology or processes.",
          },
          {
            kind: "table",
            headers: ["Method Type", "Examples"],
            rows: [
              ["On-the-job Training", "Job rotation, coaching/mentoring, understudy assignments — learning while actually doing the job"],
              ["Off-the-job Training", "Classroom lectures, case studies, role-playing, simulation exercises, e-learning modules"],
            ],
          },
        ],
      },
      {
        id: "career-development",
        title: "2. Career Planning, Promotion, Transfer, Demotion and Separation",
        icon: "TrendingUp",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Career Planning: the process of helping employees set and work toward realistic career goals within the organisation, aligning individual aspirations with organisational needs.",
              "Promotion: an upward movement to a role with greater responsibility, status, and pay.",
              "Transfer: a lateral movement to a different role/location at a similar level, often for skill development or operational needs.",
              "Demotion: a downward movement to a lower-level role, typically due to poor performance or organisational restructuring.",
              "Separation: an employee's exit from the organisation — through resignation, retirement, layoff, or termination.",
            ],
          },
        ],
      },
      {
        id: "performance-appraisal",
        title: "3. Performance Appraisal and Job Evaluation",
        icon: "ClipboardCheck",
        blocks: [
          {
            kind: "paragraph",
            text: "Performance Appraisal is the systematic evaluation of an employee's job performance, typically over a defined period, used for decisions on promotion, compensation, and training needs.",
          },
          {
            kind: "table",
            headers: ["Appraisal Method", "Description"],
            rows: [
              ["Graphic Rating Scale", "Rating an employee on a scale (e.g., 1-5) across several traits/factors"],
              ["360-Degree Feedback", "Collecting feedback from superiors, peers, subordinates, and sometimes customers"],
              ["Management by Objectives (MBO)", "Appraising performance against jointly set, specific objectives (recall MCOB, Unit 1)"],
              ["Behaviorally Anchored Rating Scale (BARS)", "Rating based on specific, observed job behaviours rather than vague traits"],
            ],
          },
          {
            kind: "paragraph",
            text: "Job Evaluation is a different (though related) process — it systematically determines the relative worth of different jobs within an organisation (not individual employee performance), forming the basis for a fair pay structure. Common methods: the Ranking Method (ranking jobs from highest to lowest value), the Point Method (assigning points to different job factors like skill, effort, responsibility), and the Factor Comparison Method.",
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
            title: "Case study — Deloitte's shift away from annual ratings",
            text: "Deloitte famously redesigned its performance appraisal system, moving away from a single annual numeric rating toward frequent, forward-looking check-ins between managers and employees — reflecting a broader global shift in performance appraisal thinking, from once-a-year judgement to continuous feedback.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "360-Degree Feedback", definition: "A performance appraisal method collecting feedback from superiors, peers, subordinates, and others." },
      { term: "Job Evaluation", definition: "A systematic process determining the relative worth of different jobs, as a basis for fair pay." },
      { term: "BARS", definition: "Behaviorally Anchored Rating Scale — appraisal based on specific observed job behaviours." },
    ],
    examQuestions: [
      "Discuss the importance, types, and methods of training. (Long)",
      "Explain career planning and its significance. (Medium)",
      "Differentiate between promotion, transfer, and demotion. (Short)",
      "Explain the various methods of performance appraisal. (Long)",
      "What is job evaluation? Explain its methods. (Medium)",
      "Differentiate between performance appraisal and job evaluation. (Short)",
    ],
  },
  {
    unitNumber: 4,
    title: "Compensation Management and Employee Relations",
    hours: 9,
    headings: [
      {
        id: "compensation-structure",
        title: "1. Components and Structure of Compensation",
        icon: "IndianRupee",
        blocks: [
          {
            kind: "paragraph",
            text: "Compensation is the total reward — monetary and non-monetary — an employee receives in exchange for their work.",
          },
          { kind: "diagram", diagramId: "compensation-structure", caption: "Fig 4.1 — Components of employee compensation" },
          {
            kind: "table",
            headers: ["Component", "Description"],
            rows: [
              ["Basic Pay", "The fixed base salary for the role"],
              ["Allowances", "Additional fixed payments — house rent allowance (HRA), dearness allowance (DA), conveyance allowance"],
              ["Incentives", "Variable, performance-linked pay — bonuses, commissions, profit-sharing"],
              ["Benefits and Perquisites", "Non-cash or indirect benefits — health insurance, provident fund, company car, stock options"],
            ],
          },
        ],
      },
      {
        id: "compensation-factors",
        title: "2. Factors Affecting Compensation and Incentive Schemes",
        icon: "Scale",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Internal factors: the organisation's ability to pay, job evaluation results, and internal pay equity between roles.",
              "External factors: the labour market rate for similar roles, cost of living, government regulations (like minimum wage laws), and union bargaining power.",
            ],
          },
          {
            kind: "paragraph",
            text: "Employee incentive schemes are designed to motivate specific behaviours or results (directly connecting to the Motivation theories from MCOB, Unit 4 — especially Reinforcement Theory and Equity Theory):",
          },
          {
            kind: "bullets",
            items: [
              "Individual incentive schemes: piece-rate pay, sales commission, individual performance bonus.",
              "Group incentive schemes: team-based bonuses, profit-sharing plans, gain-sharing (rewarding a team for productivity improvements).",
            ],
          },
        ],
      },
      {
        id: "industrial-relations",
        title: "3. Meaning of Compensation Management and Industrial Relations",
        icon: "Handshake",
        blocks: [
          {
            kind: "paragraph",
            text: "Compensation Management is the strategic process of designing and administering pay and benefit systems that are fair, competitive, and aligned with organisational goals — balancing internal equity (fairness between roles inside the firm) with external competitiveness (matching or beating market rates).",
          },
          {
            kind: "paragraph",
            text: "Industrial Relations (IR) refers to the relationship between employers, employees, and their representative bodies (trade unions), and the government — covering collective bargaining, grievance handling, and dispute resolution mechanisms that keep the employment relationship stable and productive.",
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
            title: "Case study — Maruti Suzuki Manesar labour unrest (2012)",
            text: "The 2012 labour unrest at Maruti Suzuki's Manesar plant — stemming from disputes over union recognition and working conditions — is a widely studied Indian industrial relations case, highlighting how compensation and IR issues, if not managed proactively, can escalate into major operational and even safety crises.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Internal Equity", definition: "Fairness in pay between different roles within the same organisation." },
      { term: "Gain-Sharing", definition: "A group incentive scheme rewarding a team for measurable productivity improvements." },
      { term: "Industrial Relations", definition: "The relationship between employers, employees/unions, and government in the employment context." },
    ],
    examQuestions: [
      "Explain the components and structure of employee compensation. (Long)",
      "Discuss the factors affecting employee compensation. (Medium)",
      "Explain individual and group incentive schemes with examples. (Medium)",
      "What is compensation management? Discuss its objectives. (Medium)",
      "Explain the concept of industrial relations and its importance. (Medium)",
    ],
  },
  {
    unitNumber: 5,
    title: "Employee Safety, Health and International HRM",
    hours: 8,
    headings: [
      {
        id: "employee-health",
        title: "1. Employee Health: Needs and Legal Provisions",
        icon: "HeartPulse",
        blocks: [
          {
            kind: "paragraph",
            text: "Employee health provisions ensure a workplace doesn't harm employees' physical or mental wellbeing — a legal and ethical obligation for employers.",
          },
          {
            kind: "bullets",
            items: [
              "Measures to promote employee health: regular health check-ups, ergonomic workstations, mental health support programs, and clean/hygienic work environments.",
              "Legal provisions: in India, laws like the Factories Act, 1948 (and the newer Occupational Safety, Health and Working Conditions Code, 2020) mandate minimum standards for ventilation, lighting, cleanliness, and medical facilities at the workplace.",
            ],
          },
        ],
      },
      {
        id: "employee-safety",
        title: "2. Employee Safety: Purpose, Accidents and Prevention",
        icon: "HardHat",
        blocks: [
          {
            kind: "paragraph",
            text: "The purpose of employee safety programs is to prevent workplace accidents and injuries, reduce associated costs (medical, compensation, lost productivity), and comply with legal requirements.",
          },
          {
            kind: "paragraph",
            text: "Causes of accidents are generally classified as: unsafe conditions (faulty equipment, poor lighting, lack of protective gear) and unsafe acts (employee carelessness, not following safety procedures, fatigue).",
          },
          {
            kind: "paragraph",
            text: "Prevention measures: safety training, providing personal protective equipment (PPE), regular safety audits/inspections, and creating a genuine \"safety culture\" where employees feel empowered to report hazards without fear.",
          },
          {
            kind: "paragraph",
            text: "Effective safety management combines these prevention measures with the legal provisions above into a continuous system, rather than a one-time compliance exercise.",
          },
        ],
      },
      {
        id: "international-hrm",
        title: "3. Basic Concepts Governing International HRM",
        icon: "Globe",
        blocks: [
          {
            kind: "paragraph",
            text: "International HRM (IHRM) deals with managing human resources across multiple countries, adding layers of complexity that domestic HRM doesn't face.",
          },
          {
            kind: "bullets",
            items: [
              "Staffing approaches: Ethnocentric (key positions filled by home-country nationals), Polycentric (host-country nationals manage local operations), and Geocentric (best person for the job, regardless of nationality).",
              "Expatriate management: selecting, preparing (cross-cultural training), and supporting employees sent to work in a foreign subsidiary — including handling \"repatriation\" (their return home) which is often poorly managed by firms.",
              "Cross-cultural challenges: differences in communication styles, work ethics, and management expectations across countries can create friction if not proactively managed (recall cultural factors from Business Environment, Unit 2, and Global Marketing from Marketing Management, Unit 5).",
            ],
          },
          {
            kind: "callout",
            tone: "case",
            title: "Case study — TCS/Infosys expatriate deployment model",
            text: "Indian IT majors like TCS and Infosys manage thousands of employees on international assignments (particularly in the US and Europe) — investing heavily in visa compliance, cross-cultural training, and structured repatriation programs, making them frequently studied examples of large-scale IHRM in practice.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Ethnocentric Staffing", definition: "An international staffing approach where key positions are filled by home-country nationals." },
      { term: "Expatriate", definition: "An employee sent to work in a foreign subsidiary of their organisation." },
      { term: "Repatriation", definition: "The process of an expatriate employee returning to their home country after a foreign assignment." },
    ],
    examQuestions: [
      "Discuss the legal provisions and measures for promoting employee health. (Medium)",
      "Explain the causes of workplace accidents and measures for prevention. (Long)",
      "Discuss the concept of effective safety management. (Medium)",
      "Explain the different staffing approaches in International HRM. (Long)",
      "Discuss the challenges of managing expatriates. (Medium)",
    ],
  },
];
