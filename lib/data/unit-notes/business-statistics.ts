import { UnitNote } from "@/types";

// Detailed, in-app notes for Business Statistics & Analytics (BMB104) —
// AKTU MBA Sem 1.
export const businessStatisticsUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Descriptive Statistics",
    hours: 10,
    headings: [
      {
        id: "meaning-scope",
        title: "1. Meaning, Scope, Types, Functions and Limitations",
        icon: "BarChart3",
        blocks: [
          {
            kind: "paragraph",
            text: "Statistics is the science of collecting, organising, analysing, and interpreting numerical data to support decision-making. In business, it's split into Descriptive Statistics (summarising and describing data — this unit) and Inferential Statistics (drawing conclusions about a population from a sample — Unit 5).",
          },
          {
            kind: "bullets",
            items: [
              "Functions: simplifies complex data, helps compare, tests hypotheses, aids forecasting, and supports formulation of policy.",
              "Limitations: statistics deals only with numerical/quantifiable data, can be misused to mislead, and results are based on averages/aggregates so may not hold for every individual case.",
            ],
          },
        ],
      },
      {
        id: "central-tendency",
        title: "2. Measures of Central Tendency",
        icon: "Target",
        blocks: [
          {
            kind: "table",
            headers: ["Measure", "Meaning", "Best used when"],
            rows: [
              ["Mean", "Sum of all values ÷ number of values", "Data has no extreme outliers"],
              ["Median", "The middle value when data is arranged in order", "Data has outliers/is skewed"],
              ["Mode", "The most frequently occurring value", "Categorical or discrete data (e.g., most common shoe size sold)"],
            ],
          },
        ],
      },
      {
        id: "dispersion",
        title: "3. Measures of Dispersion",
        icon: "MoveHorizontal",
        blocks: [
          {
            kind: "paragraph",
            text: "While central tendency shows a data set's \"typical\" value, dispersion shows how spread out the values are around it — two data sets can have the same mean but very different spreads.",
          },
          {
            kind: "table",
            headers: ["Measure", "Meaning"],
            rows: [
              ["Range", "Highest value minus lowest value — simplest but most sensitive to outliers"],
              ["Quartiles / Inter-quartile Range", "Divides data into four equal parts; the inter-quartile range (Q3 − Q1) shows the spread of the \"middle 50%\", ignoring extreme values"],
              ["Mean Deviation", "The average of the absolute differences of each value from the mean (or median)"],
              ["Standard Deviation", "The most widely used measure — the square root of the average squared deviation from the mean; larger SD means more spread out data"],
              ["Variance", "Standard deviation squared"],
              ["Coefficient of Variation (CV)", "Standard Deviation ÷ Mean, expressed as a percentage — used to compare the relative variability of two data sets with different units or averages"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Easy example",
            text: "Two salespeople might both average ₹1,00,000 in monthly sales (same mean), but if one salesperson's sales range from ₹95,000-₹1,05,000 every month while the other swings between ₹40,000 and ₹1,60,000, the standard deviation reveals the second salesperson is far less consistent — information the mean alone completely hides.",
          },
        ],
      },
      {
        id: "skewness-kurtosis",
        title: "4. Skewness and Kurtosis",
        icon: "Waves",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Skewness: measures the asymmetry of a data distribution. Positive (right) skew means a longer tail on the right (a few very high values pull the mean above the median); negative (left) skew means a longer tail on the left; zero skew means a symmetric distribution.",
              "Kurtosis: measures how \"peaked\" or \"flat\" a distribution is compared to a normal distribution — leptokurtic (more peaked, fatter tails), platykurtic (flatter), or mesokurtic (normal peakedness).",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Descriptive Statistics", definition: "Statistics used to summarise and describe the features of a data set." },
      { term: "Standard Deviation", definition: "A measure of dispersion — how spread out data values are around the mean." },
      { term: "Coefficient of Variation", definition: "Standard Deviation divided by Mean, used to compare relative variability across data sets." },
      { term: "Skewness", definition: "A measure of the asymmetry of a data distribution." },
    ],
    examQuestions: [
      "Discuss the scope, functions, and limitations of statistics. (Medium)",
      "Explain mean, median, and mode with an example each. (Medium)",
      "Explain the various measures of dispersion. (Long)",
      "What is the coefficient of variation? Why is it useful? (Short)",
      "Explain skewness and kurtosis with examples. (Medium)",
    ],
  },
  {
    unitNumber: 2,
    title: "Time Series & Index Numbers",
    hours: 8,
    headings: [
      {
        id: "time-series",
        title: "1. Time Series Analysis",
        icon: "LineChart",
        blocks: [
          {
            kind: "paragraph",
            text: "A time series is a set of observations recorded at successive points in time (e.g., monthly sales for 3 years). Time series analysis breaks this data down into four components:",
          },
          {
            kind: "table",
            headers: ["Component", "Meaning"],
            rows: [
              ["Trend (T)", "The long-term general direction (upward, downward, or stable) of the data"],
              ["Seasonal Variation (S)", "Regular, predictable fluctuations that repeat within a fixed period (e.g., a year) — like higher ice cream sales every summer"],
              ["Cyclical Variation (C)", "Longer-term wave-like fluctuations tied to the business cycle, lasting more than a year"],
              ["Irregular/Random Variation (I)", "Unpredictable, one-off fluctuations (e.g., a natural disaster or sudden policy change)"],
            ],
          },
          {
            kind: "bullets",
            items: [
              "Additive Model: Y = T + S + C + I — used when seasonal variation stays roughly constant in absolute size over time.",
              "Multiplicative Model: Y = T × S × C × I — used when seasonal variation grows/shrinks proportionally with the trend.",
            ],
          },
          {
            kind: "paragraph",
            text: "Trend analysis methods: the Least Square Method fits the \"best-fit\" trend line/curve mathematically (minimising the sum of squared distances from actual points), for both linear equations (straight-line trend) and non-linear equations (curved trend, for data that grows/declines at a changing rate).",
          },
        ],
      },
      {
        id: "index-numbers",
        title: "2. Index Numbers",
        icon: "Hash",
        blocks: [
          {
            kind: "paragraph",
            text: "An index number is a statistical measure that shows the relative change in a variable (price, quantity, or volume) over time, compared to a base period (set at 100).",
          },
          {
            kind: "bullets",
            items: [
              "Types: Price index numbers (e.g., the Consumer Price Index / Wholesale Price Index), Quantity index numbers, and Volume index numbers.",
              "Uses: measuring inflation (via price indices), adjusting wages/pensions for cost of living, deflating nominal figures (like GDP) into real terms, and comparing business performance over time.",
            ],
          },
          {
            kind: "table",
            headers: ["Method", "Meaning"],
            rows: [
              ["Fixed Base Method", "All index numbers are calculated relative to one single, fixed base year throughout the series"],
              ["Chain Base Method", "Each period's index is calculated relative to the immediately preceding period, not a fixed year — better for capturing recent changes but harder to compare distant periods directly"],
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Time Series", definition: "A set of observations recorded at successive points in time." },
      { term: "Seasonal Variation", definition: "Regular, predictable fluctuations in data that repeat within a fixed period." },
      { term: "Index Number", definition: "A statistical measure of the relative change in a variable compared to a base period." },
      { term: "Chain Base Method", definition: "An index number method where each period is compared to the immediately preceding period." },
    ],
    examQuestions: [
      "Explain the components of a time series with examples. (Long)",
      "Differentiate between the additive and multiplicative models of time series. (Medium)",
      "Explain the least square method of trend fitting. (Medium)",
      "What are index numbers? Discuss their uses in business decision-making. (Medium)",
      "Differentiate between the fixed base method and the chain base method. (Short)",
    ],
  },
  {
    unitNumber: 3,
    title: "Correlation & Regression Analysis",
    hours: 6,
    headings: [
      {
        id: "correlation",
        title: "1. Correlation Analysis",
        icon: "GitCompareArrows",
        blocks: [
          {
            kind: "paragraph",
            text: "Correlation measures the strength and direction of the linear relationship between two variables (e.g., advertising spend and sales).",
          },
          {
            kind: "bullets",
            items: [
              "Karl Pearson's Coefficient of Correlation (r): a value between −1 and +1. r close to +1 means strong positive correlation (both variables rise together); r close to −1 means strong negative correlation (one rises as the other falls); r close to 0 means little to no linear relationship.",
              "Spearman's Rank Correlation Method: used when data is ranked/ordinal (e.g., ranking candidates) rather than exact numerical values.",
            ],
          },
          {
            kind: "paragraph",
            text: "Properties of correlation: it measures only the strength and direction of a linear relationship (not causation!), is unaffected by a change of scale/origin, and lies strictly between −1 and +1.",
          },
          {
            kind: "callout",
            tone: "info",
            title: "Correlation ≠ Causation",
            text: "Ice cream sales and drowning incidents are positively correlated — but ice cream doesn't cause drowning. Both rise because of a third factor: hot summer weather. This is the single most important warning in this topic, and a favourite exam/viva question.",
          },
        ],
      },
      {
        id: "regression",
        title: "2. Regression Analysis",
        icon: "TrendingUp",
        blocks: [
          {
            kind: "paragraph",
            text: "While correlation only measures the strength of a relationship, regression analysis goes further — it fits a mathematical equation (a regression line) that can be used to actually predict the value of one variable from another.",
          },
          {
            kind: "bullets",
            items: [
              "The regression line of Y on X: Y = a + bX, used to predict Y (the dependent variable) from a given value of X (the independent variable).",
              "Regression Coefficients: 'a' is the intercept, 'b' is the slope — showing how much Y changes for a one-unit change in X.",
            ],
          },
          {
            kind: "paragraph",
            text: "Relationship between regression and correlation: both are based on the same underlying data and are mathematically related (the correlation coefficient r is the geometric mean of the two regression coefficients, byx and bxy) — but correlation only tells you how strongly two variables move together, while regression tells you exactly how much one changes when the other changes, letting you make a specific numerical prediction.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Karl Pearson's Coefficient", definition: "A measure (r, between −1 and +1) of the strength and direction of linear correlation between two variables." },
      { term: "Spearman's Rank Correlation", definition: "A correlation method used for ranked/ordinal data." },
      { term: "Regression Line", definition: "The equation (Y = a + bX) used to predict one variable from another." },
    ],
    examQuestions: [
      "Explain Karl Pearson's coefficient of correlation with its properties. (Long)",
      "Explain the Rank Method (Spearman's) of correlation. When is it used? (Medium)",
      "Fit a regression line and explain how it is interpreted. (Long)",
      "Explain the relationship between correlation and regression. (Medium)",
      "\"Correlation does not imply causation.\" Explain with an example. (Short)",
    ],
  },
  {
    unitNumber: 4,
    title: "Probability Theory & Distribution",
    hours: 8,
    headings: [
      {
        id: "probability-theory",
        title: "1. Theory of Probability",
        icon: "Dice5",
        blocks: [
          {
            kind: "paragraph",
            text: "Probability measures the likelihood of an event occurring, expressed as a value between 0 (impossible) and 1 (certain).",
          },
          {
            kind: "bullets",
            items: [
              "Addition Law: P(A or B) = P(A) + P(B) − P(A and B) — used to find the probability that at least one of two events occurs.",
              "Multiplication Law: P(A and B) = P(A) × P(B|A) — used to find the probability that both events occur together (P(B|A) is the probability of B given A has already occurred).",
              "Bayes' Theorem: a formula to update the probability of an event based on new evidence — revising an initial (\"prior\") probability into an updated (\"posterior\") probability once new information is known.",
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Easy example (Bayes' theorem)",
            text: "A company knows 2% of its products are defective, and a quality test correctly flags 95% of defective products but also wrongly flags 3% of good products. Bayes' theorem is used to calculate: \"given that a product was flagged by the test, what's the actual probability it's really defective?\" — often surprisingly lower than intuition suggests.",
          },
        ],
      },
      {
        id: "distributions",
        title: "2. Probability Theoretical Distributions",
        icon: "BarChart2",
        blocks: [
          {
            kind: "table",
            headers: ["Distribution", "Used for", "Example"],
            rows: [
              ["Binomial Distribution", "A fixed number of independent trials, each with only two outcomes (success/failure)", "Probability of getting exactly 3 defective items out of 20 produced"],
              ["Poisson Distribution", "The number of times a rare event occurs in a fixed interval of time/space", "Number of customer complaints received per day"],
              ["Normal Distribution", "Continuous data that clusters symmetrically around a mean — the famous \"bell curve\"", "Heights, exam scores, measurement errors"],
            ],
          },
          { kind: "diagram", diagramId: "normal-distribution", caption: "Fig 4.1 — The Normal Distribution curve" },
          {
            kind: "paragraph",
            text: "Introduction to bivariate and multivariate analysis: bivariate data involves two variables studied together (as in correlation/regression above); multivariate data involves three or more variables analysed together — techniques include Cluster Analysis (grouping similar observations/customers together, e.g., for market segmentation) and Factor Analysis (reducing many related variables down to a few underlying \"factors\").",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Bayes' Theorem", definition: "A formula for updating the probability of an event based on new evidence." },
      { term: "Binomial Distribution", definition: "A probability distribution for a fixed number of independent trials with two possible outcomes." },
      { term: "Cluster Analysis", definition: "A multivariate technique that groups similar observations together." },
      { term: "Factor Analysis", definition: "A multivariate technique that reduces many related variables to a few underlying factors." },
    ],
    examQuestions: [
      "State and explain the addition and multiplication laws of probability. (Medium)",
      "Explain Bayes' Theorem with an example. (Long)",
      "Explain the Binomial distribution with its assumptions. (Medium)",
      "Explain the Poisson distribution with an example. (Medium)",
      "Explain the properties of the Normal distribution. (Medium)",
      "What is cluster analysis and factor analysis? (Short)",
    ],
  },
  {
    unitNumber: 5,
    title: "Hypothesis Testing & Business Analytics",
    hours: 8,
    headings: [
      {
        id: "hypothesis-testing",
        title: "1. Hypothesis Testing",
        icon: "FlaskConical",
        blocks: [
          {
            kind: "paragraph",
            text: "Hypothesis testing is a statistical procedure to decide, based on sample data, whether to accept or reject a claim (hypothesis) about a population.",
          },
          { kind: "diagram", diagramId: "hypothesis-testing-process", caption: "Fig 5.1 — The hypothesis testing process" },
          {
            kind: "bullets",
            items: [
              "Null Hypothesis (H0): the default assumption of \"no effect\" or \"no difference\" (e.g., \"the new packaging has no effect on sales\").",
              "Alternative Hypothesis (H1): what you're actually trying to find evidence for (e.g., \"the new packaging does affect sales\").",
              "Type I Error: rejecting a true null hypothesis (a \"false positive\" — concluding there's an effect when there isn't one).",
              "Type II Error: failing to reject a false null hypothesis (a \"false negative\" — missing a real effect).",
            ],
          },
          {
            kind: "table",
            headers: ["Test", "Used when"],
            rows: [
              ["Z-Test", "Large sample size (typically n > 30), population standard deviation known"],
              ["t-Test", "Small sample size (n ≤ 30), population standard deviation unknown"],
              ["F-Test", "Comparing the variances of two populations/samples"],
              ["Chi-Square Test", "Testing relationships between categorical variables, or goodness of fit"],
            ],
          },
        ],
      },
      {
        id: "business-analytics",
        title: "2. Concept of Business Analytics",
        icon: "Brain",
        blocks: [
          {
            kind: "paragraph",
            text: "Business Analytics is the practice of using data, statistical analysis, and technology to drive business decisions — moving from raw data to actionable insight.",
          },
          {
            kind: "table",
            headers: ["Type", "Question it answers"],
            rows: [
              ["Descriptive Analytics", "\"What happened?\" — summarising historical data (e.g., last quarter's sales report)"],
              ["Predictive Analytics", "\"What is likely to happen?\" — using statistical models to forecast future outcomes (e.g., predicting next quarter's demand)"],
              ["(Also commonly taught) Prescriptive Analytics", "\"What should we do about it?\" — recommending specific actions based on the predictions"],
            ],
          },
          {
            kind: "paragraph",
            text: "In practice, spreadsheets (Excel) are widely used as an entry point into business analytics — using pivot tables, built-in statistical functions, and charts to move from raw transactional data to descriptive summaries and simple predictive models (like trend-based forecasts).",
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
            title: "Case study — A/B testing as applied hypothesis testing",
            text: "When an e-commerce company tests two versions of a webpage (A/B testing) to see which gets more conversions, it is literally running a hypothesis test: H0 is \"there's no difference in conversion rate between version A and B,\" and the company uses a Z-test or t-test on the collected click/conversion data to decide whether to reject H0 and roll out the better-performing version.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Null Hypothesis (H0)", definition: "The default assumption of no effect or no difference, tested against sample data." },
      { term: "Type I Error", definition: "Incorrectly rejecting a true null hypothesis (a false positive)." },
      { term: "Type II Error", definition: "Incorrectly failing to reject a false null hypothesis (a false negative)." },
      { term: "Predictive Analytics", definition: "Using statistical models on data to forecast likely future outcomes." },
    ],
    examQuestions: [
      "Explain the process of hypothesis testing with an example. (Long)",
      "Differentiate between Type I and Type II errors. (Short)",
      "When would you use a Z-test versus a t-test? Explain. (Medium)",
      "Explain the Chi-Square test and its applications. (Medium)",
      "What is Business Analytics? Differentiate between descriptive and predictive analytics. (Medium)",
      "Explain the role of spreadsheets in business analytics. (Short)",
    ],
  },
];
