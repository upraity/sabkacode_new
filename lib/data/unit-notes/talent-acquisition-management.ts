import { UnitNote } from "@/types";

// Detailed in-app notes for Talent Acquisition Management (BMB HR 01)
// MBA Semester 3 — Human Resource Management Elective.
// The structure follows the supplied AKTU syllabus: five units covering
// talent management foundations, acquisition/retention, global leadership
// development, performance/rewards, and strategic/contemporary talent issues.

export const talentAcquisitionManagementUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Introduction to Talent Management",
    hours: 6,
    headings: [
      {
        id: "concept-evolution",
        title: "1. Concept and Evolution of Talent Management",
        icon: "History",
        blocks: [
          {
            kind: "paragraph",
            text: "Talent management is the systematic process through which an organisation identifies the people and capabilities it needs, attracts suitable talent, develops employees, deploys them into appropriate roles, engages and retains them, and prepares capable people for future responsibilities. It connects workforce decisions with business strategy rather than treating recruitment, training, performance, and retention as isolated HR activities."
          },
          {
            kind: "paragraph",
            text: "The concept has evolved from traditional personnel administration toward an integrated, strategic approach. Earlier HR practice often concentrated on filling vacancies, maintaining employee records, payroll, and basic training. Modern talent management gives greater attention to critical roles, scarce skills, employee experience, leadership pipelines, internal mobility, workforce analytics, succession, and the changing skills required by technology and business models."
          },
          {
            kind: "table",
            headers: ["Stage", "Typical emphasis", "Key question"],
            rows: [
              ["Traditional personnel administration", "Records, rules, staffing and employee administration", "How do we administer employees effectively?"],
              ["Human resource management", "Recruitment, training, appraisal, compensation and employee relations", "How do we manage people as organisational resources?"],
              ["Strategic HRM", "Alignment of people practices with business strategy", "What capabilities does the strategy require?"],
              ["Integrated talent management", "Acquisition, development, deployment, engagement, retention and succession", "How do we build and sustain the talent pipeline needed for future performance?"],
              ["Talent analytics and technology-enabled HR", "Data, digital platforms, skills intelligence and predictive workforce planning", "What does workforce evidence tell us about current and future talent decisions?"]
            ]
          },
          {
            kind: "callout",
            tone: "example",
            title: "Simple example",
            text: "A growing technology company may need cloud engineers today and AI, cybersecurity, product and leadership capabilities tomorrow. Talent management connects current hiring with development, internal mobility and succession so the organisation is not forced to solve every future capability gap through emergency external hiring."
          },
          {
            kind: "diagram",
            diagramId: "talent-management-cycle",
            caption: "Fig 1.1 — Integrated Talent Management Cycle"
          }
        ]
      },
      {
        id: "talent-value-chain",
        title: "2. Talent Value Chain: Acquisition, Retention & Development",
        icon: "Workflow",
        blocks: [
          {
            kind: "paragraph",
            text: "The talent value chain describes how people-related activities create organisational value. Acquisition brings appropriate capabilities into the organisation; development increases the value of those capabilities; deployment places people where their skills create the greatest contribution; engagement supports sustained discretionary effort; retention protects organisational knowledge; and succession ensures continuity in critical positions."
          },
          {
            kind: "table",
            headers: ["Element", "Meaning", "Typical HR practices", "Business contribution"],
            rows: [
              ["Talent Acquisition", "Attracting and selecting people with required capabilities", "Employer branding, sourcing, assessment, interviews, selection", "Reduces capability gaps and supports growth"],
              ["Talent Development", "Increasing knowledge, skills, behaviours and leadership capacity", "Training, mentoring, coaching, job rotation, projects", "Improves capability and internal mobility"],
              ["Talent Deployment", "Placing people in roles or assignments that fit organisational needs", "Internal mobility, succession moves, project staffing", "Improves utilisation of existing talent"],
              ["Talent Engagement", "Creating conditions in which employees remain committed and contribute effectively", "Manager quality, recognition, meaningful work, communication", "Supports performance and employee experience"],
              ["Talent Retention", "Reducing avoidable loss of valuable employees", "Career opportunities, rewards, learning, retention plans", "Protects knowledge and reduces replacement costs"],
              ["Succession", "Preparing potential successors for critical roles", "Talent reviews, development plans, readiness assessment", "Improves continuity and reduces leadership risk"]
            ]
          },
          {
            kind: "paragraph",
            text: "The value chain is circular rather than linear. Strong development can improve retention; a credible career path can strengthen attraction; effective acquisition can improve the quality of future leadership pipelines; and retention data can reveal weaknesses in managers, rewards, workload, career opportunities or employee experience."
          },
          {
            kind: "callout",
            tone: "info",
            title: "Exam focus",
            text: "In a long-answer response, explain talent management as an integrated system. Do not describe recruitment, training and retention as independent functions; show how one stage affects the next."
          }
        ]
      },
      {
        id: "talent-models",
        title: "3. Talent Management Models",
        icon: "GitBranch",
        blocks: [
          {
            kind: "paragraph",
            text: "Models provide a framework for deciding what talent means, how talent flows through an organisation, and how HR practices should be connected. The syllabus specifically includes the Zinger Model and the Six Principles of TM. These frameworks can be used to organise discussion of talent strategy, employee experience, development and organisational results."
          },
          {
            kind: "table",
            headers: ["Framework", "Central emphasis", "How it can be used"],
            rows: [
              ["Zinger Model", "A holistic view of employee engagement and performance, linking people practices with organisational outcomes", "To connect engagement, leadership, performance, recognition and development into a broader people system"],
              ["Six Principles of Talent Management", "A principle-based approach to making talent management systematic and strategically aligned", "To evaluate whether talent practices are aligned, evidence-based, differentiated where necessary, and connected with organisational needs"]
            ]
          },
          {
            kind: "paragraph",
            text: "A useful way to study talent models is to ask four questions: What is the organisation trying to achieve? What capabilities are required? Which people and roles are strategically important? Which HR interventions will build, attract, deploy or retain those capabilities?"
          },
          {
            kind: "bullets",
            items: [
              "Talent strategy should be linked to business strategy and not designed in isolation.",
              "Critical roles may require differentiated attention because failure in those roles can have disproportionate business consequences.",
              "Employee experience, engagement and development influence the effectiveness of talent systems.",
              "Talent decisions should use evidence such as performance, potential, skills, mobility, retention and workforce requirements rather than relying only on managerial intuition.",
              "The system should include feedback so that outcomes are reviewed and HR practices are improved."
            ]
          }
        ]
      },
      {
        id: "talent-practices",
        title: "4. Talent Practices in India, USA, Europe & Other Asian Countries",
        icon: "Globe2",
        blocks: [
          {
            kind: "paragraph",
            text: "Talent practices differ across countries because labour markets, employment institutions, education systems, cultural expectations, technology adoption, demographic patterns and legal environments differ. The purpose of comparison is not to label one system as universally superior, but to understand how context changes talent-management decisions."
          },
          {
            kind: "table",
            headers: ["Context", "Common talent-management considerations", "Managerial implication"],
            rows: [
              ["India", "Large and diverse talent pool, strong campus hiring in many sectors, rapid digitalisation, growing skills demand and significant competition for specialised talent", "Build scalable sourcing, skills development, career pathways and retention mechanisms"],
              ["USA", "Highly competitive labour markets in many skilled occupations, strong emphasis on employer value proposition, mobility, specialised expertise and data-enabled HR", "Use targeted sourcing, differentiated employee value propositions and skills-based workforce planning"],
              ["Europe", "Greater variation by country, stronger institutional and employee-protection frameworks in many jurisdictions, emphasis on skills, employability and workforce sustainability", "Align talent practices with local employment requirements and longer-term workforce capability"],
              ["Other Asian markets", "Wide variation across economies; family influence, hierarchy, collectivist norms, rapid growth and technology adoption may shape employment expectations differently", "Localise leadership, communication, rewards and development while maintaining core organisational standards"]
            ]
          },
          {
            kind: "callout",
            tone: "info",
            title: "Key principle",
            text: "Global talent management requires a balance between standardisation and localisation: organisations may standardise core talent principles while adapting sourcing, rewards, communication, development and employment practices to local conditions."
          }
        ]
      },
      {
        id: "global-talent-strategy",
        title: "5. Using Talent to Create Competitive Advantage",
        icon: "TrendingUp",
        blocks: [
          {
            kind: "paragraph",
            text: "Talent can contribute to competitive advantage when employee knowledge, skills, relationships, leadership capability and organisational routines are difficult to replicate and are effectively organised. A firm may purchase similar technology to competitors, but specialised expertise, customer knowledge, leadership pipelines and collaborative routines can take much longer to build."
          },
          {
            kind: "table",
            headers: ["Talent capability", "Possible strategic value"],
            rows: [
              ["Specialised expertise", "Supports innovation and complex problem-solving"],
              ["Customer-facing capability", "Improves relationship quality and service delivery"],
              ["Leadership pipeline", "Supports continuity and execution of strategy"],
              ["Learning capability", "Helps the organisation adapt to technological and market changes"],
              ["Internal mobility", "Allows skills to move toward emerging business priorities"],
              ["Knowledge retention", "Reduces disruption when experienced employees leave"]
            ]
          },
          {
            kind: "paragraph",
            text: "Talent becomes strategically important when it is connected to business-critical outcomes. For example, a service organisation may compete through superior customer experience, making frontline capability, service leadership and learning systems strategically important. A technology organisation may compete through innovation, making scarce technical skills and knowledge-sharing capabilities central to its strategy."
          },
          {
            kind: "diagram",
            diagramId: "talent-competitive-advantage",
            caption: "Fig 1.2 — Talent Capability to Competitive Advantage"
          }
        ]
      },
      {
        id: "unit1-cases",
        title: "6. Case Studies & Industry Applications",
        icon: "BriefcaseBusiness",
        blocks: [
          {
            kind: "callout",
            tone: "case",
            title: "Case study — Fast-growing service company",
            text: "A service company grows rapidly and hires many employees, but experienced staff leave because career paths are unclear. A talent-management response would not stop at increasing recruitment. HR would analyse critical roles, strengthen onboarding, create development paths, improve manager capability, identify high-potential employees and build succession plans for key positions."
          },
          {
            kind: "callout",
            tone: "case",
            title: "Industry application — Skills-based talent planning",
            text: "A company introducing automation may map its current skills, identify roles affected by technology, determine future skill requirements, and compare the two. The resulting gap analysis can guide hiring, reskilling, redeployment and succession decisions."
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Talent Management", definition: "An integrated approach to attracting, developing, deploying, engaging and retaining people and capabilities required by an organisation." },
      { term: "Talent Value Chain", definition: "The connected sequence through which talent is acquired, developed, deployed, engaged and retained to create organisational value." },
      { term: "Critical Role", definition: "A role whose effective performance is particularly important to strategic, operational or continuity requirements." },
      { term: "Talent Pipeline", definition: "A pool and progression path of current and potential employees who can fill important roles over time." },
      { term: "Succession", definition: "A planned process of preparing potential successors for critical positions." }
    ],
    examQuestions: [
      "Define talent management and explain its evolution from traditional personnel administration to strategic talent management. (Long)",
      "Explain the talent value chain with suitable examples. (Long)",
      "Discuss major talent management models and their relevance to organisations. (Medium)",
      "Compare talent-management considerations across India, the USA, Europe and other Asian countries. (Long)",
      "Explain how talent can contribute to competitive advantage. (Long)",
      "Write a note on strategic talent management and the importance of a talent pipeline. (Medium)"
    ]
  },

  {
    unitNumber: 2,
    title: "Talent Acquisition & Retention Strategies",
    hours: 10,
    headings: [
      {
        id: "talent-acquisition-lifecycle",
        title: "1. Talent Acquisition Lifecycle",
        icon: "Workflow",
        blocks: [
          {
            kind: "paragraph",
            text: "Talent acquisition is the broader, strategic process of identifying workforce requirements, building an employer value proposition, sourcing potential candidates, assessing them, selecting suitable talent, making offers, and integrating new employees. It is broader than simply filling a vacancy because it considers future capability requirements, labour-market conditions and the organisation's long-term talent pipeline."
          },
          {
            kind: "diagram",
            diagramId: "talent-acquisition-lifecycle",
            caption: "Fig 2.1 — Talent Acquisition Lifecycle"
          },
          {
            kind: "table",
            headers: ["Stage", "Main activities", "Output"],
            rows: [
              ["Workforce/job analysis", "Understand business need, role purpose, responsibilities and required competencies", "Job specification and hiring requirement"],
              ["Sourcing strategy", "Select internal and external channels and build candidate pools", "Qualified applicant pipeline"],
              ["Assessment", "Screening, tests, interviews, work samples and reference checks as appropriate", "Evidence about candidate fit"],
              ["Selection & offer", "Compare evidence against job requirements and make a documented selection", "Offer to selected candidate"],
              ["Pre-boarding & onboarding", "Prepare employee for joining and support early role integration", "Faster adjustment and role clarity"],
              ["Post-hire evaluation", "Review quality of hire, time to productivity and retention", "Feedback for improving acquisition"]
            ]
          }
        ]
      },
      {
        id: "job-analysis",
        title: "2. Job Analysis, Sourcing & Assessment",
        icon: "ClipboardList",
        blocks: [
          {
            kind: "paragraph",
            text: "Job analysis identifies what a job involves and what capabilities are required to perform it. It generally produces information about duties, responsibilities, working conditions, knowledge, skills, abilities and other relevant characteristics. A clear job analysis improves sourcing and assessment because recruiters know what evidence they need from candidates."
          },
          {
            kind: "table",
            headers: ["Component", "Purpose"],
            rows: [
              ["Job description", "Describes duties, responsibilities, reporting relationships and major work activities"],
              ["Job specification", "Describes required qualifications, skills, experience, competencies and other job-related requirements"],
              ["Competency profile", "Defines observable capabilities and behaviours associated with effective performance"],
              ["Sourcing plan", "Identifies where and how suitable candidates can be reached"],
              ["Assessment plan", "Specifies how evidence of job-related capability will be collected and evaluated"]
            ]
          },
          {
            kind: "bullets",
            items: [
              "Internal sourcing: promotions, transfers, internal job postings and employee talent pools.",
              "External sourcing: job portals, professional networks, campus recruitment, recruitment agencies, industry communities and direct applications.",
              "Employee referrals can expand access to candidate networks but should still use consistent assessment standards.",
              "Digital sourcing can improve reach and speed, but candidate quality depends on the relevance of the channel and screening process.",
              "Assessment should be job-related, structured and documented to improve consistency."
            ]
          },
          {
            kind: "callout",
            tone: "example",
            title: "Example",
            text: "For a sales role, a recruiter should not rely only on the candidate's degree. A structured process might assess communication, prospecting ability, product-learning capacity, objection handling and evidence of target-oriented behaviour."
          }
        ]
      },
      {
        id: "recruitment-metrics",
        title: "3. Recruitment Metrics & Psychometric Tools",
        icon: "BarChart3",
        blocks: [
          {
            kind: "paragraph",
            text: "Recruitment metrics convert the hiring process into measurable evidence. Common measures include time-to-fill, cost-per-hire, source effectiveness, offer acceptance rate, quality of hire, early attrition and time-to-productivity. Metrics should be interpreted together rather than used in isolation."
          },
          {
            kind: "table",
            headers: ["Metric", "Basic interpretation"],
            rows: [
              ["Time-to-fill", "Time taken to fill an approved vacancy"],
              ["Cost-per-hire", "Recruitment cost attributable to each hire, using the organisation's defined cost formula"],
              ["Offer acceptance rate", "Proportion of offers accepted by selected candidates"],
              ["Quality of hire", "Post-hire assessment of whether new employees meet expected performance or capability standards"],
              ["Early attrition", "Employees leaving within an organisation-defined early-tenure period"],
              ["Time-to-productivity", "Time required for a new employee to reach an expected level of productive contribution"]
            ]
          },
          {
            kind: "paragraph",
            text: "Psychometric tools are standardised instruments intended to assess characteristics such as cognitive ability, personality, aptitude or other job-relevant attributes. Their usefulness depends on the quality of the instrument, appropriate administration, job relevance, interpretation and ethical use."
          },
          {
            kind: "bullets",
            items: [
              "Use assessments that have a clear job-related purpose.",
              "Do not treat a test score as a complete representation of a candidate.",
              "Combine structured assessment evidence with interviews, work samples or other appropriate evidence.",
              "Maintain confidentiality of assessment information.",
              "Use consistent procedures across candidates to improve fairness and comparability."
            ]
          }
        ]
      },
      {
        id: "retention-evp",
        title: "4. Best Practices in Recruitment of Various MNCs & Employee Retention",
        icon: "UsersRound",
        blocks: [
          {
            kind: "paragraph",
            text: "Large multinational organisations commonly build recruitment systems around a combination of employer branding, digital sourcing, structured assessment, university and experienced-hire pipelines, referral programmes, internal mobility and data-based workforce planning. Exact practices vary by organisation and country."
          },
          {
            kind: "paragraph",
            text: "Employee retention is the systematic effort to reduce avoidable employee turnover and preserve important organisational capability. Retention is not achieved by one benefit alone. Employees may leave because of limited career growth, poor manager relationships, workload, compensation concerns, weak recognition, lack of learning, location issues, mismatch between expectations and reality, or external opportunities."
          },
          {
            kind: "table",
            headers: ["Retention lever", "How it supports retention"],
            rows: [
              ["Career development", "Shows employees credible pathways for growth and internal movement"],
              ["Learning opportunities", "Builds skills while supporting employability and organisational capability"],
              ["Manager effectiveness", "Improves communication, support, feedback and day-to-day employee experience"],
              ["Recognition & rewards", "Acknowledges contribution and reinforces desired performance"],
              ["Meaningful work", "Connects employee effort with useful outcomes and role purpose"],
              ["Flexibility", "Can improve work-life fit where the role and business permit it"],
              ["Retention analytics", "Identifies patterns in turnover and enables targeted interventions"]
            ]
          },
          {
            kind: "callout",
            tone: "info",
            title: "Important distinction",
            text: "Retention should not mean retaining every employee at any cost. Strategic retention focuses on preserving critical capability while maintaining appropriate performance, role fit and organisational requirements."
          }
        ]
      },
      {
        id: "evp",
        title: "5. Employee Value Proposition (EVP)",
        icon: "Gift",
        blocks: [
          {
            kind: "paragraph",
            text: "An Employee Value Proposition is the overall set of tangible and intangible benefits and experiences an organisation offers employees in exchange for their contribution. It can include compensation, career opportunities, learning, work environment, leadership, flexibility, purpose, recognition and organisational culture."
          },
          {
            kind: "table",
            headers: ["EVP dimension", "Illustrative elements"],
            rows: [
              ["Rewards", "Salary, incentives, benefits and recognition"],
              ["Career", "Promotion opportunities, internal mobility and career visibility"],
              ["Development", "Learning, mentoring, coaching and challenging assignments"],
              ["Work environment", "Culture, leadership quality, collaboration and psychological safety"],
              ["Flexibility", "Work-location or schedule flexibility where feasible"],
              ["Purpose", "Connection between the employee's work and organisational or customer outcomes"]
            ]
          },
          {
            kind: "paragraph",
            text: "A credible EVP must match the actual employee experience. If recruitment communication promises rapid career growth but internal opportunities are scarce, the gap can damage trust and increase early turnover."
          }
        ]
      },
      {
        id: "case-exercises-u2",
        title: "6. Case Studies & Exercises",
        icon: "Scale",
        blocks: [
          {
            kind: "callout",
            tone: "case",
            title: "Case study — High offer acceptance, high early attrition",
            text: "A company reports a strong offer acceptance rate but many new employees leave within six months. The problem may not be sourcing. HR should examine job previews, manager expectations, onboarding, role clarity, workload, compensation alignment, development promises and quality-of-hire evidence."
          },
          {
            kind: "callout",
            tone: "example",
            title: "Exercise — Recruitment funnel",
            text: "Create a hiring funnel for a management trainee role: define the job requirements, select sourcing channels, design screening criteria, choose assessment methods, structure interviews, define selection evidence, and specify the metrics that will be reviewed after joining."
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Talent Acquisition", definition: "A strategic process of attracting, assessing, selecting and integrating talent to meet current and future organisational requirements." },
      { term: "Job Analysis", definition: "Systematic collection and analysis of information about job duties, responsibilities and requirements." },
      { term: "Psychometric Assessment", definition: "A standardised assessment designed to measure specified psychological or capability-related characteristics." },
      { term: "EVP", definition: "Employee Value Proposition: the overall employment value and experience offered by an organisation." },
      { term: "Quality of Hire", definition: "A post-hire indicator of how well recruited employees meet expected performance or capability requirements." }
    ],
    examQuestions: [
      "Explain the talent acquisition lifecycle with a suitable diagram. (Long)",
      "Differentiate between job description, job specification and competency profile. (Medium)",
      "Discuss recruitment metrics and explain the importance of quality of hire. (Long)",
      "Explain the role of psychometric tools in talent acquisition. (Medium)",
      "What is an Employee Value Proposition? Explain its role in retention. (Long)",
      "Discuss major causes of employee turnover and strategies for improving retention. (Long)"
    ]
  },

  {
    unitNumber: 3,
    title: "Talent Development for Global Leadership",
    hours: 8,
    headings: [
      {
        id: "development-methods",
        title: "1. Talent Development Methods: Coaching, Mentoring & Training",
        icon: "GraduationCap",
        blocks: [
          {
            kind: "paragraph",
            text: "Talent development is the planned process of building employee capability for current performance and future responsibilities. It can include formal training as well as experience-based and relationship-based methods such as coaching, mentoring, job rotation, action learning and challenging assignments."
          },
          {
            kind: "table",
            headers: ["Method", "Primary purpose", "Typical role"],
            rows: [
              ["Training", "Build defined knowledge or skills", "Structured learning for current or future requirements"],
              ["Coaching", "Improve performance through focused guidance, questioning and feedback", "Usually performance- or capability-focused"],
              ["Mentoring", "Support longer-term growth through experience, guidance and perspective", "Career and developmental support"],
              ["Job rotation", "Expose employees to different functions or contexts", "Broaden business understanding"],
              ["Stretch assignment", "Develop capability through challenging real work", "Prepare talent for greater responsibility"],
              ["Action learning", "Learn by solving real organisational problems", "Combine development with business problem-solving"]
            ]
          },
          {
            kind: "paragraph",
            text: "Effective development begins with a capability gap: what the employee or leadership pipeline can do now versus what the role or strategy will require. Development plans should therefore identify objectives, learning interventions, practice opportunities, support, measures and review dates."
          },
          {
            kind: "diagram",
            diagramId: "talent-development-cycle",
            caption: "Fig 3.1 — Talent Development Cycle"
          }
        ]
      },
      {
        id: "global-leadership",
        title: "2. Global Leadership Competencies",
        icon: "Globe",
        blocks: [
          {
            kind: "paragraph",
            text: "Global leadership requires leaders to operate across national, cultural, functional and organisational boundaries. Beyond technical competence, global leaders need cultural awareness, adaptability, communication skills, strategic thinking, collaboration, ethical judgement and the ability to work with people whose assumptions and communication styles may differ."
          },
          {
            kind: "table",
            headers: ["Competency", "Meaning in a global context"],
            rows: [
              ["Cultural intelligence", "Ability to understand and adapt to culturally different situations without relying on stereotypes"],
              ["Adaptability", "Ability to adjust behaviour and decisions when markets, teams or conditions change"],
              ["Cross-cultural communication", "Ability to communicate clearly while recognising differences in language, norms and context"],
              ["Strategic thinking", "Ability to connect local decisions with broader organisational and market priorities"],
              ["Collaboration", "Ability to coordinate geographically and functionally dispersed stakeholders"],
              ["Ethical judgement", "Ability to make decisions consistent with organisational values and applicable requirements"],
              ["Learning agility", "Ability to learn from unfamiliar situations and apply learning to new contexts"]
            ]
          },
          {
            kind: "callout",
            tone: "example",
            title: "Example",
            text: "A manager leading a team across India, Germany and Singapore may need to adapt meeting practices, communication style and decision processes while maintaining common goals, performance standards and accountability."
          }
        ]
      },
      {
        id: "globe-study-analysis",
        title: "3. GLOBE Study: Case Analysis",
        icon: "BookOpen",
        blocks: [
          {
            kind: "paragraph",
            text: "The GLOBE project is a major cross-cultural leadership research programme that examined relationships among societal culture, organisational practices and leadership attributes across societies. It is useful in talent management because leadership expectations are influenced by cultural context."
          },
          {
            kind: "table",
            headers: ["GLOBE cultural dimension", "Study meaning / exam understanding"],
            rows: [
              ["Power Distance", "Extent to which unequal distribution of power is accepted or expected"],
              ["Uncertainty Avoidance", "Extent to which societies rely on rules, structure and predictability to manage uncertainty"],
              ["Institutional Collectivism", "Degree to which organisational and societal practices encourage collective distribution of resources and collective action"],
              ["In-Group Collectivism", "Degree of pride, loyalty and cohesiveness within family or close groups"],
              ["Gender Egalitarianism", "Extent to which gender role differences are minimised"],
              ["Assertiveness", "Degree to which people are encouraged to be assertive, confrontational or competitive"],
              ["Future Orientation", "Extent to which people engage in future-oriented behaviours such as planning and investing"],
              ["Performance Orientation", "Extent to which performance improvement and excellence are encouraged and rewarded"],
              ["Humane Orientation", "Extent to which fairness, altruism, generosity and care for others are encouraged"]
            ]
          },
          {
            kind: "paragraph",
            text: "For case analysis, avoid assuming that every individual in a country behaves identically. Cultural dimensions describe patterns at societal or organisational levels; they do not determine the behaviour of every person. A global leader should use cultural knowledge as a starting point and then learn the preferences and expectations of the actual team."
          }
        ]
      },
      {
        id: "meta-analysis",
        title: "4. Career Development: Meta-Analysis & Talent Analytics",
        icon: "BarChart4",
        blocks: [
          {
            kind: "paragraph",
            text: "Career development helps employees understand possible career paths, acquire relevant capabilities and obtain experiences that prepare them for future roles. Organisational career systems can include career conversations, individual development plans, mentoring, internal job opportunities, learning pathways, succession planning and leadership programmes."
          },
          {
            kind: "paragraph",
            text: "Meta-analysis combines findings from multiple studies using systematic statistical methods to estimate broader patterns of evidence. In HR and leadership development, meta-analytic evidence can help practitioners understand whether relationships or interventions are consistently observed across studies, while still considering differences in context and study quality."
          },
          {
            kind: "table",
            headers: ["Talent analytics use", "Example question"],
            rows: [
              ["Descriptive", "What is the current distribution of skills, performance or turnover?"],
              ["Diagnostic", "What factors are associated with higher turnover in a particular talent segment?"],
              ["Predictive", "Which patterns may indicate future retention or capability risks?"],
              ["Prescriptive", "Which interventions should be tested or prioritised given the evidence and organisational constraints?"]
            ]
          }
        ]
      },
      {
        id: "succession",
        title: "5. Succession Planning",
        icon: "GitPullRequestArrow",
        blocks: [
          {
            kind: "paragraph",
            text: "Succession planning is a systematic process for ensuring that the organisation has potential successors and development plans for critical roles. It reduces dependence on a single incumbent and creates a structured way to prepare people for future responsibilities."
          },
          {
            kind: "diagram",
            diagramId: "succession-planning",
            caption: "Fig 3.2 — Succession Planning Process"
          },
          {
            kind: "table",
            headers: ["Step", "Key activity"],
            rows: [
              ["Identify critical roles", "Determine positions where continuity and capability are especially important"],
              ["Define success profile", "Specify competencies, experience and behavioural requirements"],
              ["Identify potential successors", "Use evidence from performance, skills, potential and career aspirations"],
              ["Assess readiness", "Classify development needs and time-to-readiness using a defined framework"],
              ["Build development plans", "Use coaching, mentoring, assignments, training and exposure"],
              ["Review pipeline", "Track progress and update plans as business requirements change"]
            ]
          },
          {
            kind: "callout",
            tone: "info",
            title: "Important distinction",
            text: "High performance in a current role does not automatically prove readiness for a larger role. Succession decisions should consider future-role competencies, learning agility, leadership behaviours, experience and development needs."
          }
        ]
      },
      {
        id: "unit3-exercises",
        title: "6. Exercises on Leadership Assessment",
        icon: "ClipboardCheck",
        blocks: [
          {
            kind: "callout",
            tone: "example",
            title: "Exercise — Global leadership assessment",
            text: "Prepare a leadership assessment for a manager being considered for an international assignment. Define five competencies, create behavioural indicators for each, choose evidence sources, and design a development plan for the gaps identified."
          },
          {
            kind: "callout",
            tone: "case",
            title: "Case — Successor without global exposure",
            text: "An employee has strong domestic performance but has never managed a cross-cultural team. Before placing the employee into a global leadership role, the organisation can use a development assignment, mentoring by an international leader, cross-cultural training and measurable readiness criteria."
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Coaching", definition: "A developmental process that uses guidance, questioning, feedback and practice to improve capability or performance." },
      { term: "Mentoring", definition: "A developmental relationship in which a more experienced person supports another person's longer-term growth." },
      { term: "Global Leadership", definition: "Leadership across cultural, national, functional or geographic boundaries." },
      { term: "Talent Analytics", definition: "Use of workforce data and analytical methods to understand and improve talent decisions." },
      { term: "Succession Planning", definition: "A structured process for preparing potential successors for critical roles." }
    ],
    examQuestions: [
      "Differentiate between coaching, mentoring and training. (Medium)",
      "Explain the major competencies required for global leadership. (Long)",
      "Discuss the relevance of the GLOBE study to global leadership. (Long)",
      "Explain the role of talent analytics in career development. (Medium)",
      "What is succession planning? Explain its process with a diagram. (Long)",
      "Why should high performance not be treated as automatic evidence of succession readiness? (Short)"
    ]
  },

  {
    unitNumber: 4,
    title: "Performance Management & Rewards",
    hours: 10,
    headings: [
      {
        id: "performance-management",
        title: "1. Performance Management & Performance Appraisal",
        icon: "Gauge",
        blocks: [
          {
            kind: "paragraph",
            text: "Performance management is a continuous process of clarifying expectations, setting goals, supporting performance, providing feedback, reviewing results and improving capability. Performance appraisal is a more specific formal assessment of employee performance during a defined period. Thus, appraisal is one component of the broader performance-management system."
          },
          {
            kind: "table",
            headers: ["Performance management", "Performance appraisal"],
            rows: [
              ["Continuous process", "Periodic/formal assessment"],
              ["Includes goal setting, coaching, feedback and development", "Focuses on evaluating performance against defined criteria"],
              ["Future and current performance oriented", "Often reviews performance during a specified period"],
              ["Manager-employee dialogue is important", "Uses documented ratings or assessment outcomes where the system requires them"]
            ]
          },
          {
            kind: "diagram",
            diagramId: "performance-management-cycle",
            caption: "Fig 4.1 — Performance Management Cycle"
          }
        ]
      },
      {
        id: "mb0-360",
        title: "2. MBO & 360-Degree Feedback",
        icon: "Target",
        blocks: [
          {
            kind: "paragraph",
            text: "Management by Objectives (MBO) is a goal-oriented approach in which managers and employees establish clear objectives, monitor progress and review results. Effective objectives should be understandable, measurable where appropriate, aligned with organisational priorities and accompanied by periodic review."
          },
          {
            kind: "paragraph",
            text: "360-degree feedback collects structured feedback about an employee from multiple perspectives, which may include the manager, peers, direct reports and sometimes internal or external stakeholders. It is particularly useful for developmental feedback because leadership behaviour can be experienced differently by different stakeholders."
          },
          {
            kind: "table",
            headers: ["Aspect", "MBO", "360-degree feedback"],
            rows: [
              ["Primary focus", "Achievement of agreed objectives", "Perceptions of behaviours and competencies"],
              ["Evidence", "Goals, outcomes and agreed measures", "Structured feedback from multiple sources"],
              ["Typical use", "Goal setting and performance management", "Development, leadership and behavioural improvement"],
              ["Main caution", "Poorly designed goals can distort behaviour", "Feedback can be biased if raters are poorly selected or the process is not confidential"]
            ]
          }
        ]
      },
      {
        id: "compensation",
        title: "3. Compensation & Reward Strategies",
        icon: "WalletCards",
        blocks: [
          {
            kind: "paragraph",
            text: "Compensation is the financial return associated with employment, while rewards can include both financial and non-financial elements. A reward strategy should support the organisation's talent requirements, job structure, performance expectations, market context and employee value proposition."
          },
          {
            kind: "table",
            headers: ["Reward element", "Examples", "Purpose"],
            rows: [
              ["Fixed pay", "Base salary or wages", "Provides predictable direct compensation for the role"],
              ["Variable pay", "Bonus, commission, incentive", "Links part of reward to defined outcomes or performance"],
              ["Benefits", "Insurance, leave, retirement-related benefits where applicable", "Supports broader employment value"],
              ["Recognition", "Awards, appreciation, visibility", "Acknowledges contribution"],
              ["Development rewards", "Learning opportunities, challenging assignments", "Builds capability and supports career growth"],
              ["Non-financial rewards", "Flexibility, autonomy, meaningful work", "Improves employee experience and role value"]
            ]
          },
          {
            kind: "paragraph",
            text: "Reward strategy involves balancing internal equity, external competitiveness, affordability, performance linkage, legal requirements and employee expectations. Excessive complexity can reduce understanding, while poorly designed incentives can encourage narrow short-term behaviour at the expense of broader organisational goals."
          }
        ]
      },
      {
        id: "incentives-contests",
        title: "4. Incentive Design & Employee Motivation",
        icon: "Trophy",
        blocks: [
          {
            kind: "paragraph",
            text: "Incentives are rewards linked to defined performance, contribution or outcomes. Good incentive design starts by identifying the behaviour or result the organisation wants to encourage, defining a measurable basis, selecting an appropriate reward and checking for unintended consequences."
          },
          {
            kind: "table",
            headers: ["Design question", "Why it matters"],
            rows: [
              ["What is being rewarded?", "Prevents ambiguity about desired outcomes"],
              ["Can the employee influence the outcome?", "Improves perceived fairness and controllability"],
              ["Is the measure balanced?", "Reduces gaming or excessive focus on one metric"],
              ["Is the reward meaningful?", "Affects motivational value"],
              ["Is the system understandable?", "Improves transparency and trust"],
              ["Could the incentive create harmful side effects?", "Protects quality, ethics, teamwork and long-term outcomes"]
            ]
          },
          {
            kind: "callout",
            tone: "example",
            title: "Example",
            text: "If a customer-service team is rewarded only for call volume, employees may have an incentive to end calls quickly. Adding service-quality, resolution and customer-outcome measures can create a more balanced performance system."
          }
        ]
      },
      {
        id: "total-rewards",
        title: "5. Total Rewards & Employee Engagement",
        icon: "HeartHandshake",
        blocks: [
          {
            kind: "paragraph",
            text: "A total rewards approach considers the complete set of financial and non-financial returns employees receive from the employment relationship. The idea is to look beyond salary alone and understand how compensation, benefits, recognition, development, work environment, flexibility and career opportunities collectively shape employee experience."
          },
          {
            kind: "bullets",
            items: [
              "Compensation: fixed and variable financial rewards.",
              "Benefits: programmes and provisions that add employment value.",
              "Work-life and flexibility: arrangements that support sustainable work where feasible.",
              "Performance and recognition: feedback, appreciation and visible acknowledgement.",
              "Learning and development: training, coaching, mentoring and career opportunities.",
              "Work environment: leadership, culture, autonomy, inclusion and meaningful work."
            ]
          },
          {
            kind: "paragraph",
            text: "Employee engagement refers to the quality of an employee's connection with work and the organisation. Engagement is influenced by leadership, meaningful work, resources, recognition, fairness, growth opportunities and employee voice. Reward is one contributor rather than the only determinant."
          }
        ]
      },
      {
        id: "coaching-compassion",
        title: "6. Coaching with Compassion: Daniel Goleman's Framework",
        icon: "MessageCircleHeart",
        blocks: [
          {
            kind: "paragraph",
            text: "Compassionate coaching places attention on the employee as a person, not only on performance gaps. In practice, a manager can combine empathy, attentive listening, constructive feedback, support and clear performance expectations. Daniel Goleman's work on emotional intelligence is relevant because self-awareness, empathy, relationship management and emotional regulation influence leadership interactions."
          },
          {
            kind: "table",
            headers: ["Coaching behaviour", "Practical application"],
            rows: [
              ["Listen", "Understand the employee's perspective before prescribing a solution"],
              ["Clarify", "Define the performance issue or development goal using observable evidence"],
              ["Explore", "Ask questions that help the employee identify causes and possible solutions"],
              ["Support", "Provide resources, practice opportunities or guidance"],
              ["Agree", "Set specific next steps and ownership"],
              ["Follow up", "Review progress and reinforce learning"]
            ]
          },
          {
            kind: "callout",
            tone: "info",
            title: "Balance",
            text: "Compassion does not mean avoiding accountability. Effective coaching combines empathy with clear expectations, evidence-based feedback and agreed action."
          }
        ]
      },
      {
        id: "cases-rewards",
        title: "7. Cases on Reward Policies & Performance Reviews",
        icon: "Scale",
        blocks: [
          {
            kind: "callout",
            tone: "case",
            title: "Case — Reward system creates internal competition",
            text: "A team receives individual incentives based entirely on sales, and employees stop sharing leads. A review should examine whether the reward system is unintentionally discouraging teamwork. A balanced design could include individual contribution plus team or customer-outcome measures."
          },
          {
            kind: "callout",
            tone: "case",
            title: "Case — Performance review disagreement",
            text: "An employee challenges a low appraisal rating. The manager should refer to documented objectives, evidence, feedback records and agreed standards. The organisation should provide an appropriate review or grievance mechanism rather than relying on informal argument."
          }
        ]
      },
      {
        id: "unit4-exercise",
        title: "8. Exercises on Performance Reviews & Reward Mapping",
        icon: "ClipboardPenLine",
        blocks: [
          {
            kind: "callout",
            tone: "example",
            title: "Exercise",
            text: "Design a performance system for a customer-support team. Define five objectives, two behavioural competencies, a feedback cycle, a review method and a balanced reward structure. Explain how your design avoids rewarding speed at the expense of service quality."
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Performance Management", definition: "A continuous process of goal setting, performance support, feedback, review and development." },
      { term: "MBO", definition: "Management by Objectives: a goal-oriented approach based on setting, monitoring and reviewing agreed objectives." },
      { term: "360-Degree Feedback", definition: "Structured feedback collected from multiple workplace perspectives around an employee." },
      { term: "Total Rewards", definition: "The combined financial and non-financial value employees receive from the employment relationship." },
      { term: "Variable Pay", definition: "Compensation that changes according to defined performance, results or other specified conditions." }
    ],
    examQuestions: [
      "Differentiate between performance management and performance appraisal. (Long)",
      "Explain MBO and 360-degree feedback with suitable examples. (Long)",
      "Discuss major elements of a compensation and reward strategy. (Long)",
      "What are the principles of effective incentive design? (Medium)",
      "Explain the total rewards approach and its role in employee engagement. (Long)",
      "Discuss compassionate coaching and the role of emotional intelligence in managerial coaching. (Medium)"
    ]
  },

  {
    unitNumber: 5,
    title: "Strategic Talent Management & Contemporary Issues",
    hours: 6,
    headings: [
      {
        id: "strategic-workforce-planning",
        title: "1. Strategic Workforce Planning",
        icon: "Compass",
        blocks: [
          {
            kind: "paragraph",
            text: "Strategic workforce planning aligns workforce supply with the organisation's future business requirements. It asks what the organisation is trying to achieve, what roles and skills will be required, what talent is currently available, what gaps or surpluses may arise, and which actions should close those gaps."
          },
          {
            kind: "diagram",
            diagramId: "strategic-workforce-planning",
            caption: "Fig 5.1 — Strategic Workforce Planning Process"
          },
          {
            kind: "table",
            headers: ["Stage", "Key question"],
            rows: [
              ["Business outlook", "What strategic changes are expected?"],
              ["Workforce demand", "Which roles, skills and workforce capacity will be needed?"],
              ["Workforce supply", "What talent and skills are currently available?"],
              ["Gap analysis", "Where are shortages, surpluses or capability risks?"],
              ["Action plan", "Should the organisation hire, develop, redeploy, automate or redesign work?"],
              ["Monitoring", "Are workforce assumptions and outcomes changing?"]
            ]
          }
        ]
      },
      {
        id: "talent-drivers",
        title: "2. Talent Success Drivers & Talent-Powered Organisations",
        icon: "Rocket",
        blocks: [
          {
            kind: "paragraph",
            text: "Talent success depends on more than attracting talented individuals. Organisational systems must enable people to use their capabilities. Important drivers include leadership quality, role clarity, learning, internal mobility, employee experience, appropriate rewards, collaboration, technology, workforce planning and a culture that supports learning and responsible performance."
          },
          {
            kind: "table",
            headers: ["Driver", "Why it matters"],
            rows: [
              ["Leadership", "Shapes priorities, culture, development and employee experience"],
              ["Capability building", "Ensures people can meet changing business requirements"],
              ["Internal mobility", "Moves existing talent toward opportunities and reduces unnecessary external hiring"],
              ["Data & analytics", "Improves visibility of skills, performance, turnover and workforce trends"],
              ["Technology", "Supports scalable recruiting, learning, performance and workforce processes"],
              ["Culture", "Influences how employees collaborate, learn, take responsibility and respond to change"]
            ]
          },
          {
            kind: "paragraph",
            text: "A talent-powered organisation treats workforce capability as part of strategy execution. The emphasis is on creating systems in which people, technology and organisational processes reinforce one another."
          }
        ]
      },
      {
        id: "big-data-ai",
        title: "3. Big Data & AI for Talent Management",
        icon: "BrainCircuit",
        blocks: [
          {
            kind: "paragraph",
            text: "Big data and AI can support talent management by processing large volumes of workforce information, identifying patterns, automating administrative tasks, matching skills to roles and supporting workforce planning. Examples include candidate sourcing support, skills inference, learning recommendations, workforce dashboards and analysis of turnover patterns."
          },
          {
            kind: "table",
            headers: ["Application", "Possible use"],
            rows: [
              ["Recruitment", "Candidate search, job matching and workflow automation"],
              ["Learning", "Personalised learning recommendations and skills-gap analysis"],
              ["Workforce planning", "Scenario analysis and skills-demand forecasting"],
              ["Retention analytics", "Identification of patterns associated with turnover"],
              ["Internal mobility", "Matching employees' skills with internal opportunities"],
              ["Performance analytics", "Aggregating performance evidence and identifying development needs"]
            ]
          },
          {
            kind: "callout",
            tone: "info",
            title: "Responsible AI principle",
            text: "AI output should not automatically be treated as objective or error-free. Talent decisions can affect employment opportunities, so organisations should consider data quality, explainability, privacy, human review, bias risks, security and applicable legal requirements."
          }
        ]
      },
      {
        id: "future-work",
        title: "4. Talent Management Challenges: Ethical Considerations & Future of Work",
        icon: "Scale",
        blocks: [
          {
            kind: "paragraph",
            text: "Contemporary talent management must respond to changing technology, remote and hybrid work, skills shortages, demographic shifts, employee expectations, platform work, automation and evolving career patterns. These changes affect how organisations define jobs, acquire skills, develop leaders and design employee experiences."
          },
          {
            kind: "table",
            headers: ["Challenge", "Talent-management question"],
            rows: [
              ["Automation & AI", "Which tasks change, which skills become more valuable, and how can employees be reskilled or redeployed?"],
              ["Hybrid work", "How should collaboration, performance, inclusion and employee experience be managed across locations?"],
              ["Skills disruption", "How quickly can the organisation identify and close emerging skill gaps?"],
              ["Employee data", "What information is necessary, how is it protected, and who should have access?"],
              ["Algorithmic decision-making", "How are AI-supported employment decisions validated and reviewed?"],
              ["Changing careers", "How can organisations support internal mobility and continuous learning?"]
            ]
          },
          {
            kind: "paragraph",
            text: "Ethical talent management requires respect for dignity, privacy, fairness, transparency and non-discrimination. Organisations should ensure that talent policies do not create avoidable harm and should provide appropriate human oversight for consequential decisions."
          }
        ]
      },
      {
        id: "employee-to-consultation",
        title: "5. Employee-to-Consultation Shifts",
        icon: "MessagesSquare",
        blocks: [
          {
            kind: "paragraph",
            text: "The syllabus highlights employee-to-consultation shifts as part of contemporary talent management. This can be understood as a movement toward more continuous employee listening, consultation and participation rather than relying only on occasional formal HR interactions."
          },
          {
            kind: "bullets",
            items: [
              "Pulse surveys and regular listening mechanisms.",
              "Structured employee feedback on workplace practices.",
              "Manager-led conversations about career, workload and development.",
              "Employee participation in change and work-design discussions.",
              "Use of feedback data with clear communication about what action will follow."
            ]
          },
          {
            kind: "callout",
            tone: "example",
            title: "Practical example",
            text: "Instead of waiting for an annual engagement survey to identify workload concerns, an organisation can use shorter periodic listening mechanisms, manager check-ins and team discussions, then communicate which issues will be addressed and why."
          }
        ]
      },
      {
        id: "contemporary-cases",
        title: "6. Cases & Latest-Update Exercises",
        icon: "Newspaper",
        blocks: [
          {
            kind: "callout",
            tone: "case",
            title: "Case — AI-enabled recruitment",
            text: "An organisation introduces an AI screening tool that reduces recruiter workload. Before relying on it for selection, HR should define the job-related purpose, validate performance, examine data quality and potential disparate impacts, protect candidate data, maintain human oversight and document governance procedures."
          },
          {
            kind: "callout",
            tone: "case",
            title: "Case — Future skills shortage",
            text: "A business expects demand for a new digital skill to grow quickly. A strategic talent response can combine internal upskilling, targeted external hiring, partnerships, internal mobility and redesign of selected tasks rather than relying on one talent source."
          },
          {
            kind: "callout",
            tone: "example",
            title: "Exercise — Talent strategy",
            text: "Choose a hypothetical organisation and prepare a one-page strategic talent plan: identify three business priorities, five critical skills, current talent gaps, acquisition and development actions, retention risks, one AI/analytics application, and three measures for tracking results."
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Strategic Workforce Planning", definition: "A process of aligning future workforce demand and available talent with business strategy." },
      { term: "Skills Gap", definition: "The difference between skills currently available and skills required for present or future work." },
      { term: "Talent-Powered Organisation", definition: "An organisation that deliberately aligns people capability, leadership, culture, technology and processes with strategy execution." },
      { term: "Human Oversight", definition: "Meaningful review and accountability by people when technology or AI supports consequential talent decisions." },
      { term: "Future of Work", definition: "The changing nature of jobs, skills, work arrangements and organisational practices driven by technology, markets and social factors." }
    ],
    examQuestions: [
      "Explain strategic workforce planning and its major stages. (Long)",
      "Discuss the major drivers of talent success in a talent-powered organisation. (Long)",
      "Explain applications and limitations of Big Data and AI in talent management. (Long)",
      "What ethical issues arise from AI-supported HR and talent decisions? (Medium)",
      "Discuss major talent-management challenges associated with the future of work. (Long)",
      "Explain the importance of employee listening and consultation in contemporary talent management. (Medium)"
    ]
  }
];
