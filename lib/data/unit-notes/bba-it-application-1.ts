import { UnitNote } from "@/types";

// Detailed, in-app notes for IT Application-I (BBA106) — AKTU BBA Sem 1.
export const bbaItApplication1UnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "IT for Business Intelligence",
    hours: 8,
    headings: [
      {
        id: "data-hardware",
        title: "1. Data, Information and Computer Hardware",
        icon: "Cpu",
        blocks: [
          {
            kind: "paragraph",
            text: "Data is raw, unprocessed facts (e.g., individual sales figures); Information is data that has been processed and organised to be meaningful and useful for decision-making (e.g., a monthly sales trend report).",
          },
          { kind: "diagram", diagramId: "hardware-categories", caption: "Fig 1.1 — Categories of computer hardware" },
          {
            kind: "paragraph",
            text: "The CPU (Central Processing Unit) is the computer's \"brain,\" executing instructions; Memory (RAM) temporarily holds data/programs currently in use; Storage Devices (hard disk, SSD) permanently retain data even when the computer is powered off.",
          },
        ],
      },
      {
        id: "software-database",
        title: "2. System and Application Software, Database Fundamentals",
        icon: "Database",
        blocks: [
          {
            kind: "table",
            headers: ["Type", "Description", "Example"],
            rows: [
              ["System Software", "Manages the computer's own hardware and provides a platform for other software", "Operating System (Windows), device drivers"],
              ["Application Software", "Performs specific tasks for the end user", "MS Word, MS Excel, Tableau"],
            ],
          },
          {
            kind: "paragraph",
            text: "A Database is an organised collection of related data; a Data Warehouse is a large, centralised repository consolidating data from multiple sources across an organisation, optimised for analysis and reporting rather than daily transactions.",
          },
        ],
      },
      {
        id: "networks-bi",
        title: "3. Internet, Intranet, Extranet and Business Intelligence",
        icon: "Network",
        blocks: [
          {
            kind: "table",
            headers: ["Network", "Who Can Access"],
            rows: [
              ["Internet", "Publicly accessible, global network"],
              ["Intranet", "Private network accessible only within a single organisation"],
              ["Extranet", "A controlled private network extended to specific external parties (e.g., suppliers, partners)"],
            ],
          },
          {
            kind: "paragraph",
            text: "Business Intelligence (BI) is the practice of using data, analytics tools, and technology to drive better business decisions — turning raw data into actionable insight. Salient features of MS Office, Power BI, and Tableau: MS Office (Word/Excel/PowerPoint) handles everyday documents and basic analysis, while Power BI and Tableau are specialised BI tools for building interactive dashboards and advanced visualisations from large data sets.",
          },
          {
            kind: "paragraph",
            text: "Introduction to AI and ML: Artificial Intelligence (AI) refers to computer systems performing tasks that normally require human intelligence; Machine Learning (ML) is a subset of AI where systems learn patterns from data to improve their performance without being explicitly programmed for every scenario — both are increasingly embedded in modern business software (recommendation engines, fraud detection, chatbots).",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Business Intelligence (BI)", definition: "The practice of using data, analytics, and technology to drive better business decisions." },
      { term: "Intranet", definition: "A private network accessible only within a single organisation." },
      { term: "Machine Learning", definition: "A subset of AI where systems learn patterns from data to improve performance." },
    ],
    examQuestions: [
      "Differentiate between data and information. (Short)",
      "Explain the categories of computer hardware. (Medium)",
      "Differentiate between system software and application software. (Short)",
      "Differentiate between the Internet, Intranet, and Extranet. (Medium)",
      "Explain the concept of Business Intelligence and the role of tools like Power BI and Tableau. (Medium)",
      "Explain the basic concepts of AI and ML in business. (Short)",
    ],
  },
  {
    unitNumber: 2,
    title: "MS Word",
    hours: 8,
    headings: [
      {
        id: "word-basics",
        title: "1. Templates and Basic Document Operations",
        icon: "FileText",
        blocks: [
          {
            kind: "paragraph",
            text: "Templates are pre-built document layouts (a resume, a letter, a report cover page) that speed up document creation by providing a consistent, professional starting structure.",
          },
          {
            kind: "paragraph",
            text: "Working with a document: editing text, using Find and Replace to quickly locate or substitute text, spell check and autocorrect for catching errors automatically.",
          },
        ],
      },
      {
        id: "formatting-tables",
        title: "2. Formatting, Tables and Media",
        icon: "Table",
        blocks: [
          {
            kind: "table",
            headers: ["Feature", "Purpose"],
            rows: [
              ["Bullets & Numbering", "Organising list items clearly"],
              ["Tabs, Paragraph Formatting, Indent", "Controlling text alignment and spacing"],
              ["Page Formatting, Header/Footer", "Controlling overall page layout and repeated content (like page numbers)"],
              ["Inserting and Formatting a Table", "Organising data into rows and columns within a document"],
              ["Inserting Pictures and Video", "Adding visual content to enhance a document"],
            ],
          },
        ],
      },
      {
        id: "mailmerge-printing",
        title: "3. Mail Merge, Linking and Printing",
        icon: "Send",
        blocks: [
          {
            kind: "paragraph",
            text: "Mail Merge automatically generates personalised copies of a document (like a letter) by combining a template with a data source (like an Excel spreadsheet of names and addresses) — very useful for sending bulk, personalised business correspondence.",
          },
          {
            kind: "paragraph",
            text: "Linking databases and spreadsheet files lets a Word document automatically update when the source data changes, rather than requiring manual re-entry.",
          },
          {
            kind: "paragraph",
            text: "Printing and protecting documents: setting print options, and applying password protection or restricted editing to secure sensitive business documents.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Mail Merge", definition: "Automatically generating personalised document copies by combining a template with a data source." },
      { term: "Template", definition: "A pre-built document layout that speeds up creating common document types." },
    ],
    examQuestions: [
      "Explain the use of templates in MS Word. (Short)",
      "Discuss the formatting features available in MS Word. (Medium)",
      "Explain the Mail Merge feature with its use case. (Medium)",
      "Explain how to protect a Word document. (Short)",
    ],
  },
  {
    unitNumber: 3,
    title: "MS PowerPoint",
    hours: 8,
    headings: [
      {
        id: "presentation-design",
        title: "1. Concepts and Criteria for Effective Presentation",
        icon: "Presentation",
        blocks: [
          {
            kind: "paragraph",
            text: "An effective presentation balances clear content, appropriate visual design (not overcrowded with text), and confident delivery — the slides should support the speaker, not replace them.",
          },
          {
            kind: "paragraph",
            text: "Templates and design themes provide a consistent, professional visual style (fonts, colours, layouts) across all slides in a presentation.",
          },
        ],
      },
      {
        id: "working-with-slides",
        title: "2. Working with Slides: Fonts, Drawing and Editing",
        icon: "LayoutTemplate",
        blocks: [
          {
            kind: "paragraph",
            text: "Working with presentations involves managing individual slides, choosing appropriate fonts for readability, and using drawing tools to add shapes/diagrams directly on a slide.",
          },
          {
            kind: "paragraph",
            text: "Inserting elements: tables (for organised data), images (for visual interest), text boxes, symbols, hyperlinks (linking to a website or another slide), and media (audio/video clips).",
          },
        ],
      },
      {
        id: "transition-animation",
        title: "3. Transitions, Animation and Slideshow",
        icon: "Play",
        blocks: [
          {
            kind: "paragraph",
            text: "Transitions control how one slide changes to the next (e.g., fade, wipe); Animations control how individual elements appear/move within a single slide — both should be used sparingly and purposefully, since excessive animation can distract from the content.",
          },
          {
            kind: "paragraph",
            text: "Running the Slideshow: presenting in full-screen mode, navigating between slides, and using presenter view (which shows speaker notes to the presenter while the audience only sees the slide).",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Transition", definition: "The visual effect controlling how one slide changes to the next." },
      { term: "Animation", definition: "The visual effect controlling how an individual element appears or moves within a slide." },
    ],
    examQuestions: [
      "Explain the criteria for an effective presentation. (Medium)",
      "Discuss the elements that can be inserted into a PowerPoint slide. (Medium)",
      "Differentiate between slide transitions and animations. (Short)",
      "Explain how to run and control a slideshow effectively. (Short)",
    ],
  },
  {
    unitNumber: 4,
    title: "Basics of MS Excel",
    hours: 8,
    headings: [
      {
        id: "spreadsheet-basics",
        title: "1. Characteristics of a Spreadsheet and Worksheet Management",
        icon: "Table",
        blocks: [
          {
            kind: "paragraph",
            text: "A spreadsheet organises data into a grid of rows and columns (cells), widely used for calculations, data analysis, and record-keeping.",
          },
          {
            kind: "paragraph",
            text: "Managing worksheets includes: formatting cells, applying conditional formatting (automatically highlighting cells that meet a condition, e.g., sales below target shown in red), entering and editing data, and printing/protecting worksheets.",
          },
        ],
      },
      {
        id: "formulas-multiple-sheets",
        title: "2. Handling Operators in Formulas and Multiple Worksheets",
        icon: "Sigma",
        blocks: [
          {
            kind: "paragraph",
            text: "Excel formulas use arithmetic operators (+, −, ×, ÷), comparison operators (=, &gt;, &lt;), and reference operators (like the colon in A1:A10 for a range) to perform calculations across cells.",
          },
          {
            kind: "paragraph",
            text: "Working with multiple worksheets allows a workbook to organise related data (e.g., one sheet per month) while formulas can reference cells across different sheets within the same workbook.",
          },
        ],
      },
      {
        id: "customize-views",
        title: "3. Customizing Options and Views",
        icon: "SlidersHorizontal",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Controlling worksheet views: zoom level, freezing panes (keeping headers visible while scrolling), and split views.",
              "Naming cells and cell ranges: assigning a memorable name (e.g., \"SalesTarget\") to a cell/range, making formulas easier to read and maintain.",
              "Hide/unhide worksheets, columns, and rows: useful for organising a workbook without deleting data.",
              "Customizing the Quick Access Toolbar: adding frequently used commands for faster access.",
              "Modifying document properties: editing metadata like author name, title, and keywords for a workbook.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Conditional Formatting", definition: "Automatically formatting cells that meet a specified condition." },
      { term: "Named Range", definition: "A memorable name assigned to a cell or range of cells, improving formula readability." },
    ],
    examQuestions: [
      "Explain the characteristics of a spreadsheet. (Short)",
      "Explain conditional formatting with an example use case. (Medium)",
      "Discuss how to work with multiple worksheets in a workbook. (Medium)",
      "Explain how to name cells and cell ranges, and their benefit. (Short)",
    ],
  },
  {
    unitNumber: 5,
    title: "Data Management and Charts in MS Excel",
    hours: 8,
    headings: [
      {
        id: "excel-tables",
        title: "1. Creating and Managing Excel Tables",
        icon: "Table2",
        blocks: [
          {
            kind: "paragraph",
            text: "An Excel Table converts a plain cell range into a structured table with built-in filtering, sorting, and automatic formatting/formula extension as new rows are added.",
          },
          {
            kind: "bullets",
            items: [
              "Creating an Excel table from a cell range, and converting a table back to a plain cell range when needed.",
              "Adding or removing table rows and columns.",
              "Managing table styles and options for a consistent, professional appearance.",
            ],
          },
        ],
      },
      {
        id: "data-management",
        title: "2. Filtering, Sorting and Cleaning Data",
        icon: "Filter",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Filtering records: displaying only rows that meet specific criteria.",
              "Sorting data by multiple columns: e.g., sorting first by region, then by sales value within each region.",
              "Changing sort order: ascending or descending.",
              "Removing duplicate records: cleaning a data set by eliminating repeated entries.",
            ],
          },
        ],
      },
      {
        id: "charts",
        title: "3. Working with Charts",
        icon: "BarChart3",
        blocks: [
          {
            kind: "paragraph",
            text: "Excel supports various chart types (column, bar, line, pie) each suited to different data stories (recall Chart Types from IT Skills courses) — choosing the right chart type and options (labels, legends, axis scaling) makes business data far easier for decision-makers to interpret quickly.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Excel Table", definition: "A structured range with built-in filtering, sorting, and formatting features." },
      { term: "Data Sorting", definition: "Arranging data in a specified order, based on one or more columns." },
    ],
    examQuestions: [
      "Explain how to create and manage an Excel table. (Medium)",
      "Discuss the process of filtering and sorting data in Excel. (Medium)",
      "How can duplicate records be removed in Excel? (Short)",
      "Discuss the different chart types available in Excel and their uses. (Medium)",
    ],
  },
];
