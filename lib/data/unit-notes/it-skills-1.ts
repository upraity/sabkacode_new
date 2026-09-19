import { UnitNote } from "@/types";

// Detailed, in-app notes for IT Skills-1 (BMB151) — AKTU MBA Sem 1. This
// subject is largely software/how-to focused (Windows, Word, Excel,
// PowerPoint), so content leans more on structured tables/steps than
// conceptual frameworks.
export const itSkills1UnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Conceptual Framework of Computers",
    hours: 5,
    headings: [
      {
        id: "hardware",
        title: "1. Hardware",
        icon: "Cpu",
        blocks: [
          { kind: "diagram", diagramId: "hardware-categories", caption: "Fig 1.1 — Categories of computer hardware" },
          {
            kind: "table",
            headers: ["Category", "Examples"],
            rows: [
              ["Input Devices", "Keyboard, mouse, scanner, MICR, OMR, barcode reader, digital camera, voice speech sensor"],
              ["Output Devices", "Visual Display Unit (monitor), printers, plotters"],
              ["Storage Devices", "Magnetic storage devices (hard disk), optical storage (CD/DVD), flash storage (pen drive/SSD)"],
            ],
          },
        ],
      },
      {
        id: "software",
        title: "2. Software",
        icon: "Code",
        blocks: [
          {
            kind: "table",
            headers: ["Type", "Description", "Example"],
            rows: [
              ["System Software", "Manages the computer's own hardware and provides a platform for other software to run", "Operating System (Windows, Linux), device drivers"],
              ["Application Software", "Performs specific tasks for the end user", "MS Word, MS Excel, web browsers"],
            ],
          },
          {
            kind: "paragraph",
            text: "Programming languages exist in a spectrum from low-level (machine language — directly understood by hardware) to high-level (closer to human language, e.g., Python, Java) — a compiler or interpreter translates high-level code into machine language.",
          },
          {
            kind: "paragraph",
            text: "Operating System functions: process management, memory management, file management, and providing a user interface (GUI or command-line). Elements of a GUI (Graphical User Interface) include windows, icons, menus, and pointers (WIMP).",
          },
        ],
      },
      {
        id: "networks-internet",
        title: "3. Network and Internet Services",
        icon: "Network",
        blocks: [
          {
            kind: "table",
            headers: ["Network Type", "Coverage"],
            rows: [
              ["LAN (Local Area Network)", "A single building or campus"],
              ["MAN (Metropolitan Area Network)", "A city"],
              ["WAN (Wide Area Network)", "Across countries/continents (the Internet is the largest WAN)"],
            ],
          },
          {
            kind: "bullets",
            items: [
              "Domain Names: human-readable addresses (e.g., sabkacode.com) that map to a website's numerical IP address.",
              "Web services: WWW (World Wide Web — the system of linked web pages), FTP (File Transfer Protocol — for transferring files), Telnet (remote login to another computer), Gopher (an older, menu-based document retrieval system, largely obsolete now), URL (Uniform Resource Locator — a web page's specific address).",
            ],
          },
          {
            kind: "paragraph",
            text: "Multimedia and its applications: multimedia combines text, graphics, animation, audio, video, and images into a single interactive format — widely applied in education, entertainment, marketing, and presentations (see Unit 5).",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "GUI", definition: "Graphical User Interface — a visual way of interacting with a computer using windows, icons, and menus." },
      { term: "LAN/MAN/WAN", definition: "Network types by geographic coverage — a building/campus, a city, or across countries respectively." },
      { term: "URL", definition: "Uniform Resource Locator — a web page's specific address." },
    ],
    examQuestions: [
      "Differentiate between input, output, and storage devices with examples. (Medium)",
      "Differentiate between system software and application software. (Short)",
      "Explain the functions of an operating system. (Medium)",
      "Differentiate between LAN, MAN, and WAN. (Short)",
      "Explain the various web services: WWW, FTP, Telnet, and URL. (Medium)",
    ],
  },
  {
    unitNumber: 2,
    title: "Windows and User Interface",
    hours: 7,
    headings: [
      {
        id: "windows-os",
        title: "1. Windows Operating System Characteristics",
        icon: "AppWindow",
        blocks: [
          {
            kind: "paragraph",
            text: "Windows is a GUI-based operating system characterised by: multitasking (running several applications at once, each in its own window), a Start Menu for accessing programs, a Taskbar for switching between open applications, and the Recycle Bin for temporarily holding deleted files before permanent removal.",
          },
        ],
      },
      {
        id: "gui-basics",
        title: "2. Using the GUI: Files, Folders and Windows Explorer",
        icon: "FolderOpen",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Running an application: via the Start Menu, a desktop shortcut, or the Taskbar's pinned icons.",
              "Windows Explorer (File Explorer): the tool for viewing, creating, renaming, moving, copying, and deleting files and folders, organised in a hierarchical (tree) structure of drives and folders.",
              "Menu of Control: right-click context menus provide quick access to common actions (copy, paste, rename, delete, properties) for a selected file/folder.",
            ],
          },
        ],
      },
      {
        id: "control-panel-settings",
        title: "3. Control Panel and Window Settings",
        icon: "Settings",
        blocks: [
          {
            kind: "table",
            headers: ["Setting", "What it Controls"],
            rows: [
              ["Control Panel", "Central location for system settings — display, sound, user accounts, programs, network"],
              ["Wallpaper / Screensaver", "Desktop background image and the idle-screen animation/lock display"],
              ["Sound Settings", "System sound volume, notification sounds, input/output device selection"],
              ["Notepad", "A basic plain-text editor bundled with Windows, useful for quick notes or simple code"],
              ["Windows Accessories", "A set of small bundled utility programs (Calculator, Paint, Snipping Tool, etc.)"],
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Windows Explorer", definition: "The Windows tool for viewing and managing files and folders." },
      { term: "Control Panel", definition: "The central location in Windows for changing system settings." },
      { term: "Recycle Bin", definition: "Temporary holding location for deleted files before permanent removal." },
    ],
    examQuestions: [
      "Explain the key characteristics of the Windows operating system. (Medium)",
      "Explain how to view, create, and organise files/folders using Windows Explorer. (Medium)",
      "Discuss the settings available through the Control Panel. (Short)",
      "What are Windows Accessories? Give examples. (Short)",
    ],
  },
  {
    unitNumber: 3,
    title: "Word Processor Software (Lab Work)",
    hours: 8,
    headings: [
      {
        id: "basic-operations",
        title: "1. Basic Document Operations",
        icon: "FileText",
        blocks: [
          {
            kind: "bullets",
            items: [
              "File operations: opening an existing document, saving (and \"save as\" for a new location/format), and closing a file safely.",
              "Editing text: selecting, cutting, copying, pasting, and using Find and Replace to quickly locate or substitute text across a long document.",
              "Printing documents: setting print range, number of copies, and printer options before printing.",
            ],
          },
        ],
      },
      {
        id: "formatting-layout",
        title: "2. Formatting Text and Page Layout",
        icon: "AlignLeft",
        blocks: [
          {
            kind: "table",
            headers: ["Feature", "Purpose"],
            rows: [
              ["Text Formatting", "Font style/size/colour, bold/italic/underline, alignment (left/right/center/justify)"],
              ["Page Layout", "Margins, orientation (portrait/landscape), page size, headers and footers"],
              ["Character and Paragraph Formatting", "Line spacing, indentation, bullet/numbered lists, paragraph spacing"],
              ["Tables, Charts", "Organising data in rows/columns, or visualising it as a chart, within the document"],
              ["Templates and Wizards", "Pre-built document layouts (a resume template, a letter template) that speed up document creation"],
            ],
          },
          {
            kind: "paragraph",
            text: "Checking and correcting typing mistakes uses built-in Spelling & Grammar check tools, which underline potential errors and suggest corrections — an essential final step before sharing any business document.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Find and Replace", definition: "A word processor tool to quickly locate or substitute text across a document." },
      { term: "Templates", definition: "Pre-built document layouts that speed up creating common document types." },
    ],
    examQuestions: [
      "Explain the steps to create, save, and print a document in a word processor. (Medium)",
      "Discuss the various text formatting and page layout options available in a word processor. (Long)",
      "What are templates and wizards? How do they help a user? (Short)",
      "Explain how to check and correct spelling/grammar mistakes in a document. (Short)",
    ],
  },
  {
    unitNumber: 4,
    title: "Spreadsheet Software (Lab Work)",
    hours: 10,
    headings: [
      {
        id: "spreadsheet-basics",
        title: "1. Spreadsheet Concept and Working Interface",
        icon: "Table",
        blocks: [
          {
            kind: "paragraph",
            text: "A spreadsheet organises data into a grid of rows and columns, with each intersection called a cell — widely used for calculations, data analysis, and record-keeping.",
          },
          {
            kind: "bullets",
            items: [
              "Workbook operations: creating, saving, and editing a workbook; inserting or deleting individual worksheets within it.",
              "Entering and moving data: typing data into a cell, and moving between cells using arrow keys, Tab, or by clicking.",
            ],
          },
        ],
      },
      {
        id: "formulas-functions",
        title: "2. Formulas and Functions",
        icon: "Sigma",
        blocks: [
          {
            kind: "paragraph",
            text: "A formula performs a calculation using cell references (e.g., =A1+A2); a function is a predefined formula for a common calculation, and the Function Wizard helps build complex functions step by step.",
          },
          {
            kind: "table",
            headers: ["Function Category", "Examples"],
            rows: [
              ["Mathematical", "SUM, AVERAGE, ROUND, ABS"],
              ["Logical", "IF, AND, OR"],
              ["Statistical", "COUNT, MAX, MIN, STDEV"],
              ["Text", "CONCATENATE, LEFT, RIGHT, UPPER"],
              ["Financial", "PMT (loan payment), FV (future value), PV (present value)"],
              ["Date & Time", "TODAY, NOW, DATEDIF"],
            ],
          },
        ],
      },
      {
        id: "formatting-charts",
        title: "3. Cell Formatting, Charts and Integration",
        icon: "BarChart3",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Cell formatting: alignment, changing data/number type, currency format, font, and adding borders/colours for readability.",
              "Printing worksheets: setting print area, page breaks, and previewing before printing large spreadsheets.",
              "Charts and graphs: creating, previewing, and modifying visual charts (bar, line, pie) directly from spreadsheet data.",
              "Integration: word processor, spreadsheet, and web page content can be linked or embedded together (e.g., pasting a live-updating Excel chart into a Word report).",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Cell", definition: "The intersection of a row and column in a spreadsheet, where data or a formula is entered." },
      { term: "Function Wizard", definition: "A spreadsheet tool that helps build complex functions step by step." },
      { term: "PMT Function", definition: "A financial function that calculates a loan's periodic payment amount." },
    ],
    examQuestions: [
      "Explain the basic working interface and operations of a spreadsheet. (Medium)",
      "Differentiate between a formula and a function with examples. (Short)",
      "Explain the various categories of spreadsheet functions with examples. (Long)",
      "Discuss cell formatting options available in a spreadsheet. (Medium)",
      "Explain how to create and modify a chart from spreadsheet data. (Medium)",
    ],
  },
  {
    unitNumber: 5,
    title: "Presentation Software (Lab Work)",
    hours: 8,
    headings: [
      {
        id: "presentation-basics",
        title: "1. Interface and Basic Operations",
        icon: "MonitorPlay",
        blocks: [
          {
            kind: "paragraph",
            text: "Presentation software lets a user create a sequence of slides combining text, images, and other media, typically shown on a screen during a talk.",
          },
          {
            kind: "bullets",
            items: [
              "Basic operations: creating, opening, and saving a presentation file.",
              "Working in different views: Normal view (editing individual slides), Slide Sorter view (rearranging slide order), and Slide Show view (full-screen presentation mode).",
            ],
          },
        ],
      },
      {
        id: "slide-design",
        title: "2. Working with Slides: Design, Editing and Objects",
        icon: "LayoutTemplate",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Formatting and editing text, checking and correcting typing mistakes (spell-check).",
              "Making notes pages and handouts: notes pages let the presenter add speaker notes not shown to the audience; handouts are printable summaries of the slides for attendees.",
              "Drawing and working with objects: shapes, text boxes, and diagrams inserted and arranged directly on a slide.",
              "Adding clip art and other pictures to make slides more visually engaging.",
            ],
          },
        ],
      },
      {
        id: "running-slideshow",
        title: "3. Designing and Running a Slide Show",
        icon: "Play",
        blocks: [
          {
            kind: "paragraph",
            text: "Designing a slide show involves choosing consistent slide layouts/themes, transitions between slides, and (where appropriate) animations for objects/text — used carefully so they support the message rather than distract from it (recall the case study on minimal, visual-first slide design in Business Communication, Unit 3).",
          },
          {
            kind: "paragraph",
            text: "Running and controlling a slide show: starting from the current or first slide, navigating forward/backward, using a laser pointer/annotation tool during the talk, and finally printing presentations (as full slides, notes pages, or handouts) as needed.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Slide Sorter View", definition: "A presentation software view for rearranging the order of slides." },
      { term: "Handouts", definition: "Printable summaries of presentation slides given to the audience." },
      { term: "Notes Pages", definition: "Speaker notes attached to a slide, visible to the presenter but not the audience." },
    ],
    examQuestions: [
      "Explain the different views available in presentation software. (Medium)",
      "Discuss how to format slides and work with objects like clip art and shapes. (Medium)",
      "Differentiate between notes pages and handouts. (Short)",
      "Explain the process of designing and running a slide show. (Medium)",
    ],
  },
];
