import { UnitNote } from "@/types";

// Detailed, in-app notes for Business Research Methods (BMB203) — AKTU MBA
// Sem 2.
export const businessResearchMethodsUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Introduction to Research",
    hours: 8,
    headings: [
      {
        id: "meaning-types",
        title: "1. Meaning, Importance, Qualities and Types of Research",
        icon: "Search",
        blocks: [
          {
            kind: "paragraph",
            text: "Research is a systematic, objective process of investigation undertaken to discover new facts, verify existing ones, or find solutions to a problem — the foundation for evidence-based business decisions (as opposed to decisions based purely on intuition).",
          },
          {
            kind: "paragraph",
            text: "Qualities of good research: systematic, objective (free from the researcher's personal bias), logical, replicable (another researcher following the same steps should get similar results), and empirical (grounded in actual, verifiable data).",
          },
          {
            kind: "table",
            headers: ["Type of Research", "Purpose"],
            rows: [
              ["Basic (Pure) Research", "Expands general knowledge/theory, without an immediate commercial application"],
              ["Applied Research", "Solves a specific, practical business problem"],
              ["Descriptive Research", "Describes characteristics of a population or phenomenon (\"what is happening\")"],
              ["Exploratory Research", "Investigates a poorly understood problem to gain insight and generate hypotheses (\"what might be going on\")"],
              ["Causal (Experimental) Research", "Establishes cause-and-effect relationships between variables (\"why is it happening\")"],
            ],
          },
        ],
      },
      {
        id: "scientific-enquiry",
        title: "2. Research and the Scientific Method",
        icon: "FlaskConical",
        blocks: [
          {
            kind: "paragraph",
            text: "The Scientific Method underlies good business research and is characterised by: empirical observation, objectivity, systematic procedure, and the ability to test and potentially disprove (falsify) a hypothesis — this is what separates rigorous research from casual opinion-gathering.",
          },
        ],
      },
      {
        id: "research-process",
        title: "3. Steps in the Research Process",
        icon: "ListOrdered",
        blocks: [
          { kind: "diagram", diagramId: "research-process", caption: "Fig 1.1 — The business research process" },
          {
            kind: "paragraph",
            text: "Formulation of the Research Problem follows a specific narrowing sequence, which is a favourite exam topic:",
          },
          {
            kind: "table",
            headers: ["Stage", "Meaning", "Example"],
            rows: [
              ["Management Question", "The broad business decision management is facing", "\"Why are our sales declining?\""],
              ["Research Question", "The specific question research needs to answer to help that decision", "\"Has customer satisfaction with our product declined in the last 6 months?\""],
              ["Investigative Question", "The precise, measurable sub-questions the researcher must collect data on", "\"What is the current Net Promoter Score, and how does it compare to 6 months ago?\""],
            ],
          },
        ],
      },
      {
        id: "research-proposal",
        title: "4. Research Proposal",
        icon: "FileText",
        blocks: [
          {
            kind: "paragraph",
            text: "A Research Proposal is a document prepared before starting a study, outlining what will be researched, why, and how — used to get approval/funding and to plan the study properly.",
          },
          {
            kind: "bullets",
            items: [
              "Elements of a research proposal: title, statement of the problem, objectives, literature review, proposed methodology, timeline, and budget.",
              "Drafting a research proposal: should clearly justify why the research is needed and how the proposed method will actually answer the research question.",
              "Evaluating a research proposal: assessed on the clarity of the problem statement, appropriateness of the methodology, feasibility (time/cost/access to data), and the significance of the expected findings.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Applied Research", definition: "Research aimed at solving a specific, practical business problem." },
      { term: "Management Question", definition: "The broad business decision management faces, which research is designed to help answer." },
      { term: "Research Proposal", definition: "A planning document outlining what will be researched, why, and how, before a study begins." },
    ],
    examQuestions: [
      "Define research. Discuss its qualities and importance in business. (Medium)",
      "Explain the different types of research with examples. (Long)",
      "Explain the steps involved in the research process. (Long)",
      "Differentiate between a management question, a research question, and an investigative question. (Medium)",
      "Discuss the elements of a good research proposal. (Medium)",
    ],
  },
  {
    unitNumber: 2,
    title: "Research Design",
    hours: 8,
    headings: [
      {
        id: "research-design-concept",
        title: "1. Concept and Features of a Good Research Design",
        icon: "Compass",
        blocks: [
          {
            kind: "paragraph",
            text: "A Research Design is the overall plan/blueprint for conducting a study — specifying how data will be collected and analysed to answer the research question.",
          },
          {
            kind: "paragraph",
            text: "Features of a good research design: flexibility, appropriateness to the research problem, minimal bias, high reliability, and efficiency (getting maximum information at minimum cost and time).",
          },
        ],
      },
      {
        id: "qual-vs-quant",
        title: "2. Qualitative vs. Quantitative Research Approaches",
        icon: "GitCompare",
        blocks: [
          {
            kind: "table",
            headers: ["Aspect", "Qualitative Research", "Quantitative Research"],
            rows: [
              ["Data type", "Non-numerical — words, images, observations", "Numerical — measurable and statistically analysable"],
              ["Sample size", "Small", "Large"],
              ["Purpose", "Explore, understand \"why\" in depth", "Measure, test, and generalise \"how much/how many\""],
              ["Examples", "Focus groups, in-depth interviews", "Surveys, experiments"],
            ],
          },
          {
            kind: "callout",
            tone: "info",
            title: "Pros and cons",
            text: "Qualitative research gives rich, deep insight but is hard to generalise to a whole population and is more subjective to interpret. Quantitative research gives statistically generalisable, more objective results but can miss the \"why\" behind the numbers — which is why many studies use a mixed-methods approach, combining both.",
          },
        ],
      },
      {
        id: "research-design-types",
        title: "3. Exploratory, Descriptive and Experimental Research Design",
        icon: "Layers",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Exploratory Research Design: used when the problem isn't well understood yet. Techniques include literature survey, focus group discussions, in-depth interviews, and projective techniques (indirect methods that reveal underlying attitudes, e.g., word-association tests).",
              "Descriptive Research Design: describes characteristics of a population; can be cross-sectional (data collected at one point in time) or longitudinal (data collected repeatedly over time, tracking the same variables/subjects).",
              "Experimental (Causal) Research Design: establishes cause-and-effect by manipulating an Independent Variable and measuring its effect on a Dependent Variable, while controlling for Extraneous Variables (other factors that could distort the result).",
            ],
          },
          {
            kind: "paragraph",
            text: "Key experimental design concepts: Treatment (the specific intervention applied — e.g., a new ad campaign), Control Group (a comparison group that does NOT receive the treatment, so the researcher can isolate the treatment's true effect).",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Easy example",
            text: "To test whether a new packaging design (independent variable) increases sales (dependent variable), a company might run the new packaging in 20 stores (treatment group) while keeping 20 similar stores on old packaging (control group), then compare sales — isolating the packaging's true effect from other factors like season or location.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Research Design", definition: "The overall plan for conducting a study — how data will be collected and analysed." },
      { term: "Longitudinal Study", definition: "A descriptive study collecting data repeatedly over time from the same subjects." },
      { term: "Control Group", definition: "A comparison group that does not receive the treatment in an experiment." },
    ],
    examQuestions: [
      "Discuss the features of a good research design. (Medium)",
      "Compare qualitative and quantitative research approaches. (Long)",
      "Explain exploratory research design and its techniques. (Medium)",
      "Differentiate between cross-sectional and longitudinal descriptive studies. (Short)",
      "Explain experimental research design with the concepts of independent, dependent, and extraneous variables. (Long)",
    ],
  },
  {
    unitNumber: 3,
    title: "Scaling and Measurement Techniques",
    hours: 8,
    headings: [
      {
        id: "measurement-concept",
        title: "1. Concept of Measurement, Validity and Reliability",
        icon: "Ruler",
        blocks: [
          {
            kind: "paragraph",
            text: "Measurement in research means assigning numbers to objects or events according to specific rules, so characteristics (like satisfaction or brand loyalty) can be analysed systematically.",
          },
          {
            kind: "table",
            headers: ["Concept", "Meaning"],
            rows: [
              ["Validity", "Whether a scale actually measures what it claims to measure"],
              ["Reliability", "Whether a scale produces consistent results if measured repeatedly under the same conditions"],
            ],
          },
          {
            kind: "callout",
            tone: "info",
            title: "Exam tip",
            text: "A common exam trap: a measure can be reliable (consistent) without being valid (accurate) — a weighing scale that consistently reads 2 kg too heavy is reliable but not valid. Validity is harder to achieve than reliability and is the more important of the two.",
          },
        ],
      },
      {
        id: "levels-of-measurement",
        title: "2. Levels of Measurement",
        icon: "SlidersHorizontal",
        blocks: [
          {
            kind: "table",
            headers: ["Scale", "Property", "Example"],
            rows: [
              ["Nominal", "Only categorises, no order or numeric value", "Gender, brand names, yes/no"],
              ["Ordinal", "Categorises AND ranks, but gaps between ranks aren't equal", "Customer satisfaction: poor/average/good/excellent"],
              ["Interval", "Ranked with equal gaps between values, but no true zero", "Temperature in Celsius; a calendar year"],
              ["Ratio", "Ranked, equal gaps, AND a true zero point (allows meaningful ratios)", "Sales revenue, age, weight (₹0 truly means no sales)"],
            ],
          },
        ],
      },
      {
        id: "scaling-techniques",
        title: "3. Attitude Scaling Techniques",
        icon: "BarChart2",
        blocks: [
          {
            kind: "table",
            headers: ["Scale", "How it works"],
            rows: [
              ["Likert Scale", "Respondent rates agreement with a statement, typically on a 5- or 7-point scale (\"Strongly Disagree\" to \"Strongly Agree\")"],
              ["Semantic Differential Scale", "Respondent rates a concept between two opposite adjectives (e.g., \"Cheap ___ ___ ___ ___ ___ Expensive\")"],
              ["Constant Sum Scale", "Respondent divides a fixed total (e.g., 100 points) among several attributes based on their relative importance"],
              ["Graphic Rating Scale", "Respondent marks a point on a continuous graphic line representing the range of possible responses"],
              ["Ranking Scale (Paired Comparison)", "Respondent compares two items at a time and picks a preference, repeated across all possible pairs"],
              ["Ranking Scale (Forced Ranking)", "Respondent ranks all items from most to least preferred in one go, with no ties allowed"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Easy example",
            text: "A market researcher testing 4 new ice cream flavours might use Constant Sum scaling — giving each respondent 100 points to split across the 4 flavours based on preference — a Likert scale alone couldn't capture this kind of relative trade-off between options as cleanly.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Validity", definition: "Whether a scale actually measures what it claims to measure." },
      { term: "Reliability", definition: "Whether a scale produces consistent results under repeated measurement." },
      { term: "Likert Scale", definition: "A scale measuring agreement with a statement, typically on a 5- or 7-point range." },
    ],
    examQuestions: [
      "Explain the concepts of validity and reliability in measurement. (Medium)",
      "Explain the four levels of measurement with examples. (Long)",
      "Explain the Likert scale and semantic differential scale with examples. (Medium)",
      "Differentiate between paired comparison and forced ranking techniques. (Short)",
      "Explain the constant sum scale with an example. (Short)",
    ],
  },
  {
    unitNumber: 4,
    title: "Sampling",
    hours: 8,
    headings: [
      {
        id: "sampling-basics",
        title: "1. Basic Concepts: Universe, Population and Sample",
        icon: "Users",
        blocks: [
          {
            kind: "paragraph",
            text: "The Universe (or Population) is the entire set of items/people the researcher wants to draw conclusions about; a Sample is a smaller subset actually studied, chosen to represent that population.",
          },
          {
            kind: "bullets",
            items: [
              "Sampling Frame: the actual list/source from which the sample is drawn (e.g., a customer database) — ideally it should match the true population exactly.",
              "Characteristics of a good sample: representative of the population, adequate size, and selected without bias.",
              "Sampling Errors: the difference between a sample result and the true population value, arising purely from the fact that a sample (not the whole population) was studied.",
              "Non-Sampling Errors: errors from other sources — poorly worded questions, data entry mistakes, or non-response — these can occur even in a full census, and are often larger and harder to fix than sampling errors.",
              "Reducing errors: using a larger, better-designed sample, clear questionnaire wording, and following up on non-responses.",
            ],
          },
        ],
      },
      {
        id: "probability-sampling",
        title: "2. Probability Sampling Methods",
        icon: "Dice5",
        blocks: [
          {
            kind: "paragraph",
            text: "In probability sampling, every unit in the population has a known, non-zero chance of being selected — allowing results to be statistically generalised to the whole population.",
          },
          {
            kind: "table",
            headers: ["Method", "How it works"],
            rows: [
              ["Simple Random Sampling", "Every unit has an equal chance of selection (e.g., drawing names from a hat, or using a random number generator)"],
              ["Systematic Sampling", "Selecting every k-th unit from a list, after a random starting point"],
              ["Stratified Random Sampling", "Population is divided into meaningful subgroups (strata — e.g., by age group), then randomly sampled within each stratum"],
              ["Area Sampling", "A form of cluster sampling where geographic areas are randomly selected as clusters"],
              ["Cluster Sampling", "Population is divided into clusters (often naturally occurring groups), then entire clusters are randomly selected for study"],
            ],
          },
        ],
      },
      {
        id: "non-probability-sampling",
        title: "3. Non-Probability Sampling Methods",
        icon: "UserX",
        blocks: [
          {
            kind: "paragraph",
            text: "In non-probability sampling, selection is NOT random — units are chosen based on convenience or judgement, so results cannot be statistically generalised with the same confidence, but the methods are faster and cheaper.",
          },
          {
            kind: "table",
            headers: ["Method", "How it works"],
            rows: [
              ["Convenience Sampling", "Selecting whoever is easiest to reach (e.g., surveying people passing by in a mall)"],
              ["Judgment (Purposive) Sampling", "The researcher deliberately selects units believed to be most useful/representative, based on their own judgement"],
              ["Quota Sampling", "Interviewers fill a pre-set quota for each subgroup (like stratified sampling, but selection within the quota isn't random)"],
              ["Snowball Sampling", "Existing study subjects recruit future subjects from among their own acquaintances — useful for hard-to-reach populations"],
            ],
          },
        ],
      },
      {
        id: "sample-size",
        title: "4. Determining Sample Size",
        icon: "Calculator",
        blocks: [
          {
            kind: "paragraph",
            text: "Determining sample size involves balancing statistical precision against cost and time constraints. Key factors: the desired confidence level (typically 95%), the acceptable margin of error, and the expected variability in the population — larger samples reduce sampling error but cost more to collect.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Numerical illustration",
            text: "For estimating a population proportion at a 95% confidence level (Z = 1.96) with a 5% margin of error (e) and assuming maximum variability (p = 0.5), the formula n = (Z² × p × (1−p)) / e² gives n = (1.96² × 0.5 × 0.5) / 0.05² = 0.9604 / 0.0025 ≈ 384. This is why you'll often see 384 quoted as the standard minimum sample size for a large population survey at 95% confidence and 5% margin of error.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Sampling Frame", definition: "The actual list or source from which a sample is drawn." },
      { term: "Stratified Sampling", definition: "Dividing the population into meaningful subgroups and randomly sampling within each." },
      { term: "Non-Sampling Error", definition: "Errors from sources other than sampling itself — poor wording, data entry mistakes, non-response." },
    ],
    examQuestions: [
      "Explain the basic concepts of universe, population, and sample. (Medium)",
      "Differentiate between sampling error and non-sampling error. (Short)",
      "Explain the various probability sampling methods with examples. (Long)",
      "Explain the various non-probability sampling methods with examples. (Long)",
      "Explain the factors determining sample size, with a numerical illustration. (Long)",
    ],
  },
  {
    unitNumber: 5,
    title: "Data Analysis and Report Writing",
    hours: 8,
    headings: [
      {
        id: "data-editing",
        title: "1. Editing, Coding and Tabular Representation of Data",
        icon: "FileSpreadsheet",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Editing: checking collected data for completeness, accuracy, and consistency before analysis.",
              "Coding: assigning numerical codes to responses (especially for qualitative/categorical answers) so they can be processed statistically.",
              "Tabulation: organising coded data into tables, showing frequency distributions (how often each value/category occurs).",
              "Graphical representation of data: bar charts (comparing categories), pie charts (showing proportions of a whole), and histograms (showing the distribution of continuous/numerical data) — recall these from Business Statistics, Unit 1.",
            ],
          },
        ],
      },
      {
        id: "hypothesis-testing-brm",
        title: "2. Hypothesis Testing and Analysis of Variance",
        icon: "FlaskConical",
        blocks: [
          {
            kind: "paragraph",
            text: "Qualities of a good hypothesis: clear and precise, testable with available data, and stated in a way that allows a definite conclusion (recall Null and Alternative Hypotheses from Business Statistics, Unit 5).",
          },
          { kind: "diagram", diagramId: "hypothesis-testing-process", caption: "Fig 5.1 — The hypothesis testing process" },
          {
            kind: "paragraph",
            text: "Analysis of Variance (ANOVA) tests whether there is a statistically significant difference between the means of three or more groups — an extension of the t-test (which only compares two groups).",
          },
          {
            kind: "table",
            headers: ["ANOVA Type", "Used when"],
            rows: [
              ["One-way ANOVA", "Comparing means across groups defined by a single factor (e.g., comparing average sales across 4 different store regions)"],
              ["Two-way ANOVA", "Comparing means across groups defined by two factors simultaneously (e.g., sales across both region AND season), also revealing any interaction effect between the two factors"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Easy example",
            text: "A researcher testing whether 3 different advertising campaigns (A, B, C) produce different average sales would use one-way ANOVA — a series of separate t-tests between each pair (A vs B, B vs C, A vs C) would inflate the chance of a false-positive result, which is exactly the statistical problem ANOVA is designed to avoid.",
          },
        ],
      },
      {
        id: "report-writing",
        title: "3. Mechanism of Report Writing",
        icon: "FileText",
        blocks: [
          {
            kind: "paragraph",
            text: "Report preparation types: technical reports (detailed, for a specialist/academic audience) and popular reports (simplified, for general management/business readers).",
          },
          {
            kind: "table",
            headers: ["Report Section", "Contains"],
            rows: [
              ["Preliminary Section", "Title page, acknowledgements, table of contents, executive summary"],
              ["Main Report", "Introduction, methodology, findings/analysis, conclusions, recommendations"],
              ["End Matter", "Appendices, references/bibliography, limitations of the study"],
            ],
          },
          {
            kind: "paragraph",
            text: "A good research report clearly interprets results in relation to the original research question, offers specific and actionable recommendations for management, and honestly states the limitations of the study (e.g., small sample size, limited geographic scope) — omitting limitations is a common mistake that undermines a report's credibility.",
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
            title: "Illustrative scenario — A/B testing as a mini research study",
            text: "A company running an A/B test on its website (as discussed in Business Statistics, Unit 5) is essentially running a complete mini research project — formulating a hypothesis, using an experimental design with a control group, collecting quantitative data, running a hypothesis test (often a t-test or chi-square test), and then writing up findings and recommendations, exactly following the process taught across this subject.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Coding", definition: "Assigning numerical codes to survey responses so they can be processed statistically." },
      { term: "ANOVA", definition: "Analysis of Variance — a test for statistically significant differences between three or more group means." },
      { term: "Limitations of the Study", definition: "An honest statement of a research report's constraints, such as sample size or scope." },
    ],
    examQuestions: [
      "Explain the process of editing, coding, and tabulating research data. (Medium)",
      "Discuss the graphical methods of representing data. (Short)",
      "Explain the qualities of a good hypothesis. (Medium)",
      "Explain One-way and Two-way ANOVA with examples. (Long)",
      "Discuss the structure of a research report. (Long)",
      "Why is it important to state the limitations of a study in a research report? (Short)",
    ],
  },
];
