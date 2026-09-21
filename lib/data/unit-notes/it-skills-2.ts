import { UnitNote } from "@/types";

// Detailed, in-app notes for IT Skills-2 (BMB251) — AKTU MBA Sem 2. Lab-work
// subject with only 2 units, focused entirely on advanced Excel skills.
export const itSkills2UnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Pivot Tables, What-If Analysis and Data Validation",
    hours: 5,
    headings: [
      {
        id: "pivot-tables",
        title: "1. Developing and Analysing Pivot Tables",
        icon: "Table",
        blocks: [
          {
            kind: "paragraph",
            text: "A Pivot Table is an interactive Excel tool that summarises, reorganises, and analyses large data sets quickly — allowing a user to \"pivot\" (rearrange) rows and columns to view the same underlying data from different angles without writing any formulas.",
          },
          {
            kind: "bullets",
            items: [
              "Creating a Pivot Table: selecting the source data range and choosing which fields go into Rows, Columns, Values, and Filters.",
              "Named Scenarios: saved sets of input values that let a user quickly switch between different \"what-if\" situations (e.g., a 'Best Case' vs. 'Worst Case' sales scenario) and see the resulting output recalculate instantly.",
            ],
          },
        ],
      },
      {
        id: "goal-seek-solver",
        title: "2. Goal Seek and Solver",
        icon: "Target",
        blocks: [
          {
            kind: "table",
            headers: ["Tool", "Purpose"],
            rows: [
              ["Goal Seek", "Works backward — given a desired result in one cell, Goal Seek finds the input value in another cell needed to achieve it (e.g., \"what sales volume do I need to hit a target profit of ₹5,00,000?\")"],
              ["Solver", "A more powerful version of Goal Seek — finds the optimal value of an objective cell by adjusting MULTIPLE input cells at once, subject to constraints (essentially solving Linear Programming problems, recall QTM Unit 2, directly inside Excel)"],
            ],
          },
          {
            kind: "paragraph",
            text: "Scenario Manager: lets a user create, edit, and delete multiple named scenarios (different sets of input assumptions) and then generate a Scenario Summary Report — a single table comparing the output results across all scenarios side by side, useful for sensitivity/risk analysis (recall Risk Analysis in investment decisions, Financial Management Unit 2).",
          },
        ],
      },
      {
        id: "validation-auditing",
        title: "3. Data Validation and Auditing",
        icon: "ShieldCheck",
        blocks: [
          {
            kind: "paragraph",
            text: "Data Validation restricts what can be entered into a cell (e.g., only whole numbers between 1 and 100, or only a value from a specific drop-down list) — preventing data-entry errors at the source.",
          },
          {
            kind: "paragraph",
            text: "Auditing tools help trace how a formula's result was calculated and find errors: Trace Precedents (shows which cells feed INTO a formula), Trace Dependents (shows which other cells DEPEND ON a given cell), and identifying cells with missing or inconsistent data using conditional formatting or filters.",
          },
          {
            kind: "paragraph",
            text: "Macros: a recorded (or written) sequence of Excel actions that can be replayed with a single click or keyboard shortcut — used to automate repetitive tasks (e.g., automatically formatting and refreshing a weekly sales report), turning a spreadsheet into a small custom application.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Pivot Table", definition: "An interactive Excel tool for summarising and reorganising large data sets." },
      { term: "Goal Seek", definition: "An Excel tool that works backward from a desired result to find the needed input value." },
      { term: "Solver", definition: "An Excel tool that finds the optimal value of a cell by adjusting multiple inputs, subject to constraints." },
      { term: "Macro", definition: "A recorded sequence of actions that can be replayed to automate repetitive Excel tasks." },
    ],
    examQuestions: [
      "Explain how to create and use a pivot table for data analysis. (Medium)",
      "Differentiate between Goal Seek and Solver. (Medium)",
      "Explain the Scenario Manager and how to generate a scenario summary report. (Medium)",
      "Explain data validation and its usefulness in spreadsheet design. (Short)",
      "What are macros? How do they help automate spreadsheet tasks? (Short)",
    ],
  },
  {
    unitNumber: 2,
    title: "Formatting and Creating Charts",
    hours: 15,
    headings: [
      {
        id: "chart-types",
        title: "1. Understanding Chart Types",
        icon: "BarChart3",
        blocks: [
          {
            kind: "table",
            headers: ["Chart Type", "Best used for"],
            rows: [
              ["Column / Bar Chart", "Comparing values across categories (bar chart is horizontal, column chart is vertical)"],
              ["Line Chart", "Showing trends over time (recall Time Series Analysis, Business Statistics Unit 2)"],
              ["Pie Chart", "Showing proportions of a whole (works best with few categories)"],
              ["XY Scatter Chart", "Showing the relationship between two numeric variables (recall Correlation, Business Statistics Unit 3)"],
              ["Area Chart", "Similar to a line chart, but emphasising the magnitude of change by filling the area beneath the line"],
              ["Bubble Chart", "Like a scatter chart, but with a third dimension shown as the size of each 'bubble'"],
            ],
          },
        ],
      },
      {
        id: "combined-charts",
        title: "2. Combined Charts and Modifying Data Series",
        icon: "LayoutGrid",
        blocks: [
          {
            kind: "paragraph",
            text: "A Combined (Combo) Chart displays two or more chart types together in one chart (e.g., showing monthly sales as columns and the cumulative sales trend as a line) — useful when comparing metrics with very different scales or natures.",
          },
          {
            kind: "bullets",
            items: [
              "Changing chart type for a specific data series: allows one series within a chart to display differently from the others (e.g., only the \"Target\" series shown as a line among column bars).",
              "Adding or deleting a data series: expanding or reducing what the chart displays without rebuilding it from scratch.",
              "Repositioning chart elements: moving the chart title, legend, and data labels to make the chart clearer and less cluttered.",
            ],
          },
        ],
      },
      {
        id: "axis-formatting",
        title: "3. Axis Scaling, Display Units and Chart Formatting",
        icon: "SlidersHorizontal",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Changing the scale of the value axis: setting a custom minimum, maximum, and major interval — useful to zoom in on a meaningful range instead of always starting from zero.",
              "Changing display units: showing large numbers in thousands, or millions, to keep the chart readable (e.g., displaying ₹50,00,000 as simply \"50\" with a \"in Lakhs\" axis label).",
              "Formatting the Plot Area (the region containing the actual chart) and Chart Area (the entire chart object, including titles/legend) separately for visual polish.",
              "Adding an image: inserting a company logo or background image into a chart for branded, presentation-ready reports (directly useful for the presentation skills covered in Business Communication, Unit 3).",
            ],
          },
          {
            kind: "callout",
            tone: "info",
            title: "Why this matters for managers",
            text: "A well-formatted chart with an appropriately scaled axis and clear labels can make the difference between a data insight being noticed by senior management or being lost in a cluttered, poorly-labelled spreadsheet — a genuinely practical skill for any MBA graduate presenting analysis, not just an IT exercise.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Combo Chart", definition: "A chart displaying two or more chart types together, useful for comparing metrics of different scales." },
      { term: "Display Units", definition: "A chart axis setting showing large numbers scaled to thousands or millions for readability." },
      { term: "Plot Area", definition: "The region of a chart containing the actual plotted data, as distinct from the wider chart area." },
    ],
    examQuestions: [
      "Explain the different chart types and when each should be used. (Long)",
      "Explain how to create a combined chart with two different chart types. (Medium)",
      "Explain how to change the scale and display units of a chart's value axis. (Medium)",
      "Discuss the difference between plot area and chart area formatting. (Short)",
      "Why is proper chart formatting important when presenting business data? (Short)",
    ],
  },
];
