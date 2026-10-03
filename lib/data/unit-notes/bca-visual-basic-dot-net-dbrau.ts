import { UnitNote } from "@/types";

export const BcaVisualBasicDotNetDbrauUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Visual Basic .NET and the .NET Framework",
    hours: 8,
    headings: [
      {
        id: "dotnet-intro",
        title: "1. Introduction to the .NET Framework",
        icon: "BookOpen",
        blocks: [
          { kind: "paragraph", text: "The .NET Framework is a software development platform that provides a managed execution environment, a common type system, reusable class libraries and language support. Visual Basic .NET (VB.NET) is a programming language that uses these facilities to build Windows, web and other applications." },
          { kind: "diagram", diagramId: "bca-dotnet-framework-overview", caption: "Conceptual view of VB.NET working with the .NET Framework, CLR and Framework Class Library." },
          { kind: "table", headers: ["Component", "Role"], rows: [
            ["VB.NET", "Programming language used to write application code."],
            ["CLR", "Common Language Runtime that manages execution of managed code."],
            ["Framework Class Library", "Reusable classes and APIs for common programming tasks."],
            ["Application", "Program developed using the language and framework services."]
          ]}
        ]
      },
      {
        id: "dotnet-features",
        title: "2. Features of the .NET Framework",
        icon: "Sparkles",
        blocks: [
          { kind: "paragraph", text: "The .NET platform is designed around managed execution, language interoperability and reusable libraries. Its features support application development through common runtime services, structured type information, exception handling, security mechanisms and class libraries." },
          { kind: "table", headers: ["Feature", "Explanation"], rows: [
            ["Managed execution", "The CLR provides runtime services for managed applications."],
            ["Language interoperability", "Different .NET languages can work with common runtime and type-system rules."],
            ["Class libraries", "Pre-built classes reduce the need to implement common functionality from scratch."],
            ["Exception handling", "Structured mechanisms are available for handling runtime errors."],
            ["Common type system", "Provides common rules for representing and using types."],
            ["Component-oriented development", "Classes and reusable components can be combined to build applications."]
          ]}
        ]
      },
      {
        id: "clr",
        title: "3. Common Language Runtime (CLR)",
        icon: "Cpu",
        blocks: [
          { kind: "paragraph", text: "The Common Language Runtime is the execution environment for managed .NET code. It provides services such as memory management, exception handling, type safety and other runtime facilities. Source code is compiled into an intermediate representation and is then executed by the runtime." },
          { kind: "diagram", diagramId: "bca-clr-execution-flow", caption: "Simplified VB.NET compilation and CLR execution flow." },
          { kind: "table", headers: ["CLR responsibility", "Meaning"], rows: [
            ["Execution", "Loads and executes managed code."],
            ["Memory management", "Provides automatic managed memory management through garbage collection."],
            ["Exception handling", "Supports structured runtime error handling."],
            ["Type safety", "Uses common type information to support safer execution."],
            ["Runtime services", "Provides services required by managed applications."]
          ]}
        ]
      },
      {
        id: "framework-class-library",
        title: "4. Framework Class Library (FCL)",
        icon: "Library",
        blocks: [
          { kind: "paragraph", text: "The Framework Class Library is the reusable collection of classes provided by the .NET platform. Instead of implementing every low-level operation independently, a programmer can use library classes for strings, collections, files, forms, controls, networking and many other tasks." },
          { kind: "callout", tone: "example", title: "Example", text: "A VB.NET program that needs to work with files can use .NET file-system classes rather than implementing its own operating-system file access mechanism." },
          { kind: "table", headers: ["Library area", "Typical use"], rows: [
            ["System", "Core types and basic runtime functionality."],
            ["Collections", "Working with groups of objects."],
            ["IO", "Files, directories and streams."],
            ["Windows Forms", "Windows graphical user-interface development."],
            ["Data access", "Database connectivity and data handling."]
          ]}
        ]
      },
      {
        id: "visual-studio",
        title: "5. Visual Studio .NET IDE",
        icon: "PanelsTopLeft",
        blocks: [
          { kind: "paragraph", text: "Visual Studio provides an integrated development environment for creating, editing, designing, building and debugging .NET applications. The syllabus specifically includes IDE features such as IDE components, Toolbars, Solution Explorer, Object Browser, Toolbox, Class View, Properties Window, Server Explorer, Task List and Output Window." },
          { kind: "diagram", diagramId: "bca-vs-ide-components", caption: "Major Visual Studio IDE windows and their roles." },
          { kind: "table", headers: ["IDE component", "Use"], rows: [
            ["Toolbox", "Provides controls and components that can be placed on a designer."],
            ["Solution Explorer", "Shows projects, files and solution structure."],
            ["Properties Window", "Displays and edits properties of the selected object."],
            ["Object Browser", "Explores types, members and library information."],
            ["Class View", "Shows classes and their members in the project."],
            ["Server Explorer", "Provides access to configured data and server-related resources."],
            ["Task List", "Displays tasks and reminders associated with development."],
            ["Output Window", "Shows build and other diagnostic output."]
          ]}
        ]
      },
      {
        id: "windows-forms",
        title: "6. Windows Form, Controls and Properties",
        icon: "SquareStack",
        blocks: [
          { kind: "paragraph", text: "A Windows Form is a graphical user-interface container. Controls such as buttons, labels and text boxes are placed on a form to receive input or display information. Properties determine the appearance and behavior of the form or control, while events represent actions to which code can respond." },
          { kind: "diagram", diagramId: "bca-windows-form-controls", caption: "Example structure of a Windows Form containing common controls." },
          { kind: "callout", tone: "example", title: "Example", text: "A Login form may contain Label controls for captions, TextBox controls for user input and a Button whose Click event performs the login action." }
        ]
      },
      {
        id: "server-explorer-tools",
        title: "7. Server Explorer, Task List and Output Window",
        icon: "Wrench",
        blocks: [
          { kind: "paragraph", text: "Server Explorer is used to browse and work with configured server and data resources. Task List helps track tasks and development items. Output Window displays build, debugging and other messages generated by the development environment." },
          { kind: "table", headers: ["Window", "Exam-ready description"], rows: [
            ["Server Explorer", "Tool for viewing and interacting with configured server/data resources."],
            ["Task List", "Window for recording and tracking development tasks."],
            ["Output Window", "Window that presents compiler, build and diagnostic output."]
          ]}
        ]
      },
      {
        id: "vbnet-history",
        title: "8. Visual Basic .NET Development Background",
        icon: "History",
        blocks: [
          { kind: "paragraph", text: "Visual Basic .NET belongs to the Visual Basic family but uses the .NET runtime and object-oriented programming model. The move to the .NET platform brought managed execution, a common framework library and broader language/runtime capabilities. For exam purposes, remember the transition from traditional Visual Basic development to the managed VB.NET environment." }
        ]
      }
    ],
    keyTerms: [
      { term: ".NET Framework", definition: "Software development platform providing runtime services, libraries and language support." },
      { term: "CLR", definition: "Common Language Runtime that executes managed .NET code and provides runtime services." },
      { term: "FCL", definition: "Framework Class Library containing reusable .NET classes and APIs." },
      { term: "VB.NET", definition: "Visual Basic language used for developing applications on the .NET platform." },
      { term: "IDE", definition: "Integrated Development Environment used to develop, build, debug and manage applications." },
      { term: "Solution Explorer", definition: "Visual Studio window showing the solution, projects and files." },
      { term: "Toolbox", definition: "IDE window containing controls and components for application design." },
      { term: "Object Browser", definition: "Tool for examining types and members available to a project or library." },
      { term: "Properties Window", definition: "Window used to inspect and edit properties of a selected object." }
    ],
    examQuestions: [
      "Define the .NET Framework and explain its major features. (Long)",
      "Explain CLR and its major responsibilities. (Long)",
      "What is the Framework Class Library? Explain its importance. (Medium)",
      "Explain Visual Studio .NET IDE and its major components. (Long)",
      "Explain Toolbox, Solution Explorer, Object Browser and Properties Window. (Medium)",
      "Explain Windows Forms, controls, properties and events. (Long)"
    ]
  },
  {
    unitNumber: 2,
    title: "Programming in Visual Basic .NET",
    hours: 8,
    headings: [
      {
        id: "data-types",
        title: "1. Data Types",
        icon: "Binary",
        blocks: [
          { kind: "paragraph", text: "A data type determines the kind of value that a variable can hold and the operations that can be performed on it. VB.NET provides numeric, character, string, Boolean and other data types. Choosing an appropriate data type makes the program clearer and helps represent data correctly." },
          { kind: "table", headers: ["Type category", "Example use"], rows: [
            ["Integer types", "Whole-number values such as counts."],
            ["Floating-point types", "Values containing fractional parts."],
            ["Decimal", "Decimal-oriented numerical calculations where appropriate."],
            ["Boolean", "True/False conditions."],
            ["Char", "A single character."],
            ["String", "A sequence of characters."],
            ["Date/Time", "Date and time values."]
          ]}
        ]
      },
      {
        id: "keywords-identifiers",
        title: "2. Keywords and Identifiers",
        icon: "KeyRound",
        blocks: [
          { kind: "paragraph", text: "Keywords are reserved words with predefined meaning in the VB.NET language, while identifiers are names chosen by the programmer for variables, procedures, classes and other program elements. An identifier should be meaningful and follow the language's naming rules." },
          { kind: "callout", tone: "example", title: "Example", text: "In Dim totalMarks As Integer, Dim and As are language keywords, while totalMarks is the programmer-defined identifier." }
        ]
      },
      {
        id: "variables-constants",
        title: "3. Declaring Variables and Constants",
        icon: "Variable",
        blocks: [
          { kind: "paragraph", text: "Variables store values that may change during program execution. Constants represent values intended to remain fixed after declaration. VB.NET uses declarations such as Dim for variables and Const for constants." },
          { kind: "formula", title: "Basic declaration examples", text: "Dim age As Integer = 20   |   Dim name As String = \"Asha\"   |   Const PI As Double = 3.14159" },
          { kind: "callout", tone: "info", title: "Exam point", text: "A variable is used for changing data; a constant is used for a fixed value within the scope in which it is declared." }
        ]
      },
      {
        id: "operators",
        title: "4. Operators and Expressions",
        icon: "Calculator",
        blocks: [
          { kind: "paragraph", text: "Operators perform operations on values and expressions. VB.NET includes arithmetic, comparison, logical and other operators. An expression combines values, variables, operators and function calls to produce a result." },
          { kind: "table", headers: ["Category", "Examples"], rows: [
            ["Arithmetic", "+, -, *, /"],
            ["Integer division/modulus", "\\, Mod"],
            ["Comparison", "=, <>, <, >, <=, >="],
            ["Logical", "And, Or, Not, Xor"],
            ["String concatenation", "&"]
          ]},
          { kind: "callout", tone: "example", title: "Example", text: "If a = 10 and b = 3, then a + b gives 13, a > b gives True, and a Mod b gives 1." }
        ]
      },
      {
        id: "conditional-statements",
        title: "5. Conditional Statements",
        icon: "GitBranch",
        blocks: [
          { kind: "paragraph", text: "Conditional statements execute different blocks of code depending on whether a condition is satisfied. The syllabus includes If-Then, If-Then-Else, Nested If and Select Case." },
          { kind: "diagram", diagramId: "bca-vbnet-condition-flow", caption: "Conceptual flow of conditional execution in VB.NET." },
          { kind: "callout", tone: "example", title: "Example", text: "If marks >= 40 Then the program can display Pass; otherwise it can display Fail. Select Case is useful when one expression must be compared against several alternatives." }
        ]
      },
      {
        id: "loops",
        title: "6. Looping Statements",
        icon: "Repeat2",
        blocks: [
          { kind: "paragraph", text: "Looping statements repeat a block of code while a condition or iteration rule is satisfied. The syllabus includes Do Loop, For Loop, For Each, Next Loop and While Loop." },
          { kind: "table", headers: ["Loop", "Typical purpose"], rows: [
            ["For...Next", "Repeat a known or controlled number of iterations."],
            ["For Each", "Process each element in a collection or array."],
            ["While", "Repeat while a condition remains True."],
            ["Do...Loop", "Flexible condition-controlled repetition; the condition can be tested according to the chosen form."]
          ]},
          { kind: "callout", tone: "example", title: "Example", text: "For i = 1 To 5 can be used to repeat an operation for five integer values. For Each item In items is suitable when processing each item of a collection." }
        ]
      },
      {
        id: "arrays",
        title: "7. Arrays",
        icon: "Rows3",
        blocks: [
          { kind: "paragraph", text: "An array stores multiple values of a related type under one array variable. Elements are accessed by index. Arrays are useful when a program needs to process a sequence of related values such as marks, prices or names." },
          { kind: "diagram", diagramId: "bca-vbnet-array", caption: "Conceptual indexed array showing elements and their positions." },
          { kind: "callout", tone: "example", title: "Example", text: "Dim marks() As Integer = {72, 65, 81, 90} creates an integer array containing four values. A loop can process the elements one by one." }
        ]
      },
      {
        id: "functions-procedures",
        title: "8. Functions and Procedures",
        icon: "FunctionSquare",
        blocks: [
          { kind: "paragraph", text: "A procedure is a reusable block of code that performs an operation. A Sub procedure performs an action without returning a function result, while a Function can return a value. Parameters allow data to be passed into reusable procedures." },
          { kind: "diagram", diagramId: "bca-vbnet-procedure-flow", caption: "Procedure/function flow from call to parameter processing and return." },
          { kind: "callout", tone: "example", title: "Example", text: "A Function CalculateTotal(price, quantity) can calculate and return a total, while a Sub DisplayMessage(message) can display text without returning a calculated value." }
        ]
      },
      {
        id: "dynamic-variables",
        title: "9. Dynamic Variables",
        icon: "RefreshCw",
        blocks: [
          { kind: "paragraph", text: "The syllabus lists dynamic variables as a programming topic. In exam answers, explain that variables can be declared and used with values that change during program execution, while the exact behavior of late binding or loosely typed declarations depends on the VB.NET language settings and version being used. A good program should use explicit, appropriate types whenever possible." }
        ]
      }
    ],
    keyTerms: [
      { term: "Variable", definition: "Named storage location whose value can change during execution." },
      { term: "Constant", definition: "Named value intended to remain fixed after declaration." },
      { term: "Identifier", definition: "Programmer-defined name for a program element." },
      { term: "Keyword", definition: "Reserved language word with predefined meaning." },
      { term: "Expression", definition: "Combination of values, variables, operators and calls that produces a result." },
      { term: "Array", definition: "Indexed collection of related values." },
      { term: "Procedure", definition: "Reusable block of program statements performing a defined operation." },
      { term: "Function", definition: "Reusable procedure that returns a value." },
      { term: "Conditional Statement", definition: "Statement that selects execution based on a condition." }
    ],
    examQuestions: [
      "Explain VB.NET data types with examples. (Long)",
      "Differentiate keywords and identifiers. (Short)",
      "Explain variable and constant declarations with examples. (Medium)",
      "Explain operators and expressions in VB.NET. (Long)",
      "Explain If-Then, If-Then-Else, Nested If and Select Case. (Long)",
      "Explain Do Loop, For Loop, For Each and While Loop. (Long)",
      "What is an array? Explain with an example. (Medium)",
      "Differentiate Sub procedures and Functions. (Medium)"
    ]
  },
  {
    unitNumber: 3,
    title: "Functions, Built-in Dialog Boxes, Menus and Toolbar",
    hours: 8,
    headings: [
      {
        id: "built-in-functions",
        title: "1. Built-in Functions",
        icon: "FunctionSquare",
        blocks: [
          { kind: "paragraph", text: "VB.NET provides built-in functions for common operations such as string processing, numeric calculations, date/time processing and type conversion. Using built-in functions reduces repetitive code and makes programs easier to maintain." },
          { kind: "table", headers: ["Function area", "Example use"], rows: [
            ["String functions", "Find length, extract portions or change string representation."],
            ["Numeric functions", "Perform common mathematical calculations."],
            ["Date/Time functions", "Read or manipulate date and time values."],
            ["Conversion functions", "Convert a value from one representation/type to another where valid."]
          ]},
          { kind: "callout", tone: "example", title: "Example", text: "Len(\"Visual Basic\") returns the number of characters in the supplied string. Conversion functions can be used when input data must be converted into an appropriate numeric or other type." }
        ]
      },
      {
        id: "dialog-boxes",
        title: "2. Built-in Dialog Boxes",
        icon: "MessageSquare",
        blocks: [
          { kind: "paragraph", text: "Dialog boxes provide standard user interaction for opening files, saving files, selecting colors and selecting fonts. The syllabus includes Open File Dialog, Save File Dialog, Font Dialog, Color Dialog, Print Dialog and Input Box." },
          { kind: "table", headers: ["Dialog", "Purpose"], rows: [
            ["Open File Dialog", "Allows the user to select a file to open."],
            ["Save File Dialog", "Allows the user to choose a file name and location for saving."],
            ["Font Dialog", "Allows selection of font-related settings."],
            ["Color Dialog", "Allows selection of a color."],
            ["Print Dialog", "Provides print-related user interaction."],
            ["Input Box", "Provides a simple prompt for user input."]
          ]},
          { kind: "diagram", diagramId: "bca-vbnet-dialogs", caption: "Common built-in dialog boxes and their application uses." }
        ]
      },
      {
        id: "menus",
        title: "3. Menus and Menu Strip",
        icon: "Menu",
        blocks: [
          { kind: "paragraph", text: "Menus provide organized commands through a menu hierarchy. A MenuStrip control is used to place menus on a Windows Form. A menu can contain top-level items and sub-items, and selecting a menu item can trigger an event handler." },
          { kind: "callout", tone: "example", title: "Example", text: "A typical application may have File, Edit and Help menus. File can contain New, Open, Save and Exit commands, while Edit can contain Copy, Cut and Paste." }
        ]
      },
      {
        id: "toolbars",
        title: "4. Toolbars",
        icon: "PanelTop",
        blocks: [
          { kind: "paragraph", text: "A toolbar provides quick access to frequently used commands through buttons or other controls. It improves usability by reducing the number of steps needed to access common operations available through menus." },
          { kind: "table", headers: ["Menu", "Toolbar"], rows: [
            ["Organizes commands in hierarchical lists.", "Provides quick-access controls for frequently used commands."],
            ["Useful for discovering grouped commands.", "Useful for rapid repeated operations."],
            ["Often contains text labels.", "Often uses compact buttons or icons."]
          ]}
        ]
      },
      {
        id: "status-strip",
        title: "5. Status Strip",
        icon: "PanelBottom",
        blocks: [
          { kind: "paragraph", text: "A status strip is an interface area used to display application status or contextual information. It can communicate information such as current mode, progress or other short status messages to the user." }
        ]
      },
      {
        id: "dialog-events",
        title: "6. Dialogs, Input Boxes and Events",
        icon: "MousePointerClick",
        blocks: [
          { kind: "paragraph", text: "Dialog-based interaction is event-driven. A user action such as clicking a button or selecting a menu item causes an event, and the application executes the corresponding event-handler code. The Input Box is useful when a small amount of direct user input is required." },
          { kind: "diagram", diagramId: "bca-vbnet-event-driven-flow", caption: "Event-driven interaction: user action produces an event and the handler executes application logic." }
        ]
      },
      {
        id: "functions-procedures-deep",
        title: "7. User-Defined Functions and Procedures",
        icon: "Code2",
        blocks: [
          { kind: "paragraph", text: "User-defined procedures divide an application into reusable logical units. Parameters make procedures general-purpose, and a function can return a computed value. This improves modularity, readability, testing and maintenance." },
          { kind: "callout", tone: "example", title: "Example", text: "Instead of repeating tax calculation code at several places, create CalculateTax(amount, rate) and call it whenever the application needs the same calculation." }
        ]
      },
      {
        id: "string-functions",
        title: "8. String Functions",
        icon: "TextCursorInput",
        blocks: [
          { kind: "paragraph", text: "String functions operate on text values. Common operations include determining length, searching for text, extracting a substring, changing case, trimming unwanted spaces and replacing text. The exact function used depends on the operation required." },
          { kind: "table", headers: ["Operation", "Purpose"], rows: [
            ["Length", "Find the number of characters."],
            ["Search", "Locate a character or substring."],
            ["Extraction", "Obtain a portion of a string."],
            ["Replacement", "Replace one text pattern with another."],
            ["Formatting", "Present text in a desired representation."]
          ]}
        ]
      },
      {
        id: "math-functions",
        title: "9. Mathematical Functions",
        icon: "Sigma",
        blocks: [
          { kind: "paragraph", text: "Mathematical functions provide ready-made operations for common numeric calculations. They are useful for reducing manual formula implementation and for making numerical code more readable." },
          { kind: "callout", tone: "example", title: "Example", text: "A mathematical function can be used to calculate an absolute value, square-root-related result or rounded value instead of writing the underlying calculation manually." }
        ]
      }
    ],
    keyTerms: [
      { term: "Built-in Function", definition: "Predefined function supplied by the programming environment for a common operation." },
      { term: "OpenFileDialog", definition: "Standard dialog used to let a user select a file to open." },
      { term: "SaveFileDialog", definition: "Standard dialog used to choose a file and location for saving." },
      { term: "FontDialog", definition: "Dialog for selecting font settings." },
      { term: "ColorDialog", definition: "Dialog for selecting a color." },
      { term: "PrintDialog", definition: "Dialog for print-related interaction." },
      { term: "MenuStrip", definition: "Windows Forms control used to create application menus." },
      { term: "ToolStrip", definition: "Windows Forms control used to provide toolbar-style commands." },
      { term: "StatusStrip", definition: "Control used to display status information at the bottom or designated area of a form." },
      { term: "InputBox", definition: "Simple dialog-style mechanism for requesting user input." }
    ],
    examQuestions: [
      "Explain built-in functions in VB.NET with suitable examples. (Long)",
      "Explain Open File, Save File, Font, Color and Print dialogs. (Long)",
      "Explain MenuStrip and ToolStrip with differences. (Medium)",
      "What is StatusStrip? Explain its use. (Short)",
      "Explain event-driven handling of menu and dialog actions. (Medium)",
      "Explain user-defined functions and procedures. (Long)",
      "Explain important categories of string and mathematical functions. (Medium)"
    ]
  },
  {
    unitNumber: 4,
    title: "Elements of Visual Basic .NET",
    hours: 8,
    headings: [
      {
        id: "form-properties",
        title: "1. Properties of a Form",
        icon: "PanelsTopLeft",
        blocks: [
          { kind: "paragraph", text: "A Windows Form has properties that control its appearance, position, size, title and behavior. Properties are edited through the Properties Window or programmatically. The syllabus includes properties and related form elements such as label, text box, list box and combo box." },
          { kind: "table", headers: ["Element", "Typical role"], rows: [
            ["Form", "Main container for Windows user-interface controls."],
            ["Label", "Displays non-editable text or captions."],
            ["TextBox", "Accepts or displays editable text."],
            ["ListBox", "Displays a list of selectable items."],
            ["ComboBox", "Combines a list-style selection with a compact input interface."]
          ]}
        ]
      },
      {
        id: "events-methods",
        title: "2. Events and Methods of a Form",
        icon: "Zap",
        blocks: [
          { kind: "paragraph", text: "An event is a notification that something has happened, such as a click, load or change. A method is an operation defined by a class or object. In Windows Forms, event handlers connect user or system events with the application code that should execute." },
          { kind: "diagram", diagramId: "bca-vbnet-form-event-model", caption: "Form controls expose properties, methods and events that work together in an event-driven application." },
          { kind: "callout", tone: "example", title: "Example", text: "When a user clicks a Button, its Click event can invoke an event handler that reads a TextBox and displays a result in a Label." }
        ]
      },
      {
        id: "button-checkbox-picture",
        title: "3. Button, Check Box and Picture Box",
        icon: "SquareMousePointer",
        blocks: [
          { kind: "paragraph", text: "Button controls initiate commands when activated. CheckBox controls represent independent yes/no or on/off choices. PictureBox controls display images in a Windows Form." },
          { kind: "table", headers: ["Control", "Typical use"], rows: [
            ["Button", "Start an action such as Save, Calculate or Exit."],
            ["CheckBox", "Represent an independent selectable option."],
            ["PictureBox", "Display an image."]
          ]}
        ]
      },
      {
        id: "hscroll-vscroll",
        title: "4. HScrollBar and VScrollBar",
        icon: "MoveHorizontal",
        blocks: [
          { kind: "paragraph", text: "Horizontal and vertical scroll bars allow the user to adjust a value or navigate horizontally or vertically through content. Their value can be read by application code and used to change a displayed position or another numeric setting." }
        ]
      },
      {
        id: "groupbox-tooltip-timer",
        title: "5. GroupBox, ToolTip and Timer",
        icon: "Timer",
        blocks: [
          { kind: "paragraph", text: "A GroupBox visually and logically groups related controls. A ToolTip displays explanatory text when the pointer is placed over a control. A Timer raises events at configured intervals, allowing an application to perform periodic actions." },
          { kind: "diagram", diagramId: "bca-vbnet-form-controls-grouping", caption: "Grouping controls with GroupBox and providing assistance with ToolTip and periodic behavior with Timer." },
          { kind: "callout", tone: "example", title: "Example", text: "A registration form can group address fields inside a GroupBox, show a ToolTip explaining a field and use a Timer for a periodic status update." }
        ]
      },
      {
        id: "controls-summary",
        title: "6. Common Windows Form Controls — Exam Summary",
        icon: "TableProperties",
        blocks: [
          { kind: "table", headers: ["Control", "Main purpose"], rows: [
            ["Label", "Display text."],
            ["TextBox", "Input/display text."],
            ["ListBox", "Select from a list."],
            ["ComboBox", "Compact list/input selection."],
            ["Button", "Trigger an action."],
            ["CheckBox", "Independent selection."],
            ["PictureBox", "Display image."],
            ["HScrollBar", "Horizontal scroll/value adjustment."],
            ["VScrollBar", "Vertical scroll/value adjustment."],
            ["GroupBox", "Group related controls."],
            ["ToolTip", "Display contextual help."],
            ["Timer", "Generate periodic timer events."]
          ]}
        ]
      }
    ],
    keyTerms: [
      { term: "Form", definition: "Windows user-interface container in a Windows Forms application." },
      { term: "Property", definition: "Attribute of an object that controls its state, appearance or behavior." },
      { term: "Event", definition: "Notification that an action or occurrence has happened." },
      { term: "Method", definition: "Operation defined by a class or object." },
      { term: "Label", definition: "Control used to display text." },
      { term: "TextBox", definition: "Control used to enter or display text." },
      { term: "ListBox", definition: "Control that displays selectable list items." },
      { term: "ComboBox", definition: "Control providing a compact list/input selection interface." },
      { term: "CheckBox", definition: "Control representing an independent selectable option." },
      { term: "PictureBox", definition: "Control used to display images." },
      { term: "ToolTip", definition: "Contextual help text associated with a control." },
      { term: "Timer", definition: "Component that raises events at time intervals." }
    ],
    examQuestions: [
      "Explain properties, events and methods of a Windows Form. (Long)",
      "Explain Label, TextBox, ListBox and ComboBox. (Medium)",
      "Explain Button, CheckBox and PictureBox. (Medium)",
      "What are HScrollBar and VScrollBar? (Short)",
      "Explain GroupBox, ToolTip and Timer. (Medium)",
      "Write an exam-oriented note on common Windows Forms controls. (Long)"
    ]
  },
  {
    unitNumber: 5,
    title: "Advanced Concepts in VB.NET and Data Access",
    hours: 8,
    headings: [
      {
        id: "oop",
        title: "1. Object-Oriented Programming in VB.NET",
        icon: "Boxes",
        blocks: [
          { kind: "paragraph", text: "Object-oriented programming organizes software around classes and objects. A class defines data and behavior, while an object is an instance of a class. Important OOP concepts include encapsulation, abstraction, inheritance and polymorphism. VB.NET supports object-oriented development through classes, constructors, properties, methods and inheritance mechanisms." },
          { kind: "diagram", diagramId: "bca-vbnet-oop-model", caption: "Conceptual object-oriented model showing class, object, properties and methods." },
          { kind: "table", headers: ["Concept", "Meaning"], rows: [
            ["Class", "Blueprint defining data and behavior."],
            ["Object", "Instance created from a class."],
            ["Encapsulation", "Combining data and related operations while controlling access."],
            ["Inheritance", "Creating a class based on an existing class to reuse or extend behavior."],
            ["Polymorphism", "Allowing a common interface or operation to work with different object forms."],
            ["Abstraction", "Focusing on essential behavior while hiding unnecessary implementation detail."]
          ]}
        ]
      },
      {
        id: "constructors-destructors",
        title: "2. Constructors and Destructors",
        icon: "Construction",
        blocks: [
          { kind: "paragraph", text: "A constructor is used when an object is initialized. In VB.NET, constructors are commonly declared using Sub New. Object cleanup in a managed environment is associated with garbage collection; older finalization concepts may be represented through a Finalize mechanism, but developers generally rely on managed resource-management patterns rather than manually destroying ordinary managed objects." },
          { kind: "callout", tone: "info", title: "Exam point", text: "A constructor initializes an object. In managed .NET, memory reclamation is handled by the runtime's garbage collector; resource cleanup should use appropriate disposal patterns for disposable resources." }
        ]
      },
      {
        id: "structures",
        title: "3. Structures",
        icon: "Box",
        blocks: [
          { kind: "paragraph", text: "A structure is a value type that can group related data and members. Structures are useful when a lightweight value-like representation is required. A structure can contain fields, properties and methods." },
          { kind: "callout", tone: "example", title: "Example", text: "A Point-like structure can contain X and Y values together so that one variable represents a coordinate pair." }
        ]
      },
      {
        id: "exception-handling",
        title: "4. Exception Handling",
        icon: "ShieldAlert",
        blocks: [
          { kind: "paragraph", text: "Exception handling provides a structured way to deal with abnormal runtime conditions. VB.NET uses Try, Catch and Finally blocks. Code that may raise an exception is placed in Try, handling logic is written in Catch, and cleanup code that should execute regardless of success or failure can be placed in Finally." },
          { kind: "diagram", diagramId: "bca-vbnet-exception-flow", caption: "Try-Catch-Finally exception-handling flow." },
          { kind: "callout", tone: "example", title: "Example", text: "When converting user input to a number, invalid text can cause an exception. The Catch block can show an appropriate message instead of allowing the application to terminate unexpectedly." }
        ]
      },
      {
        id: "file-handling",
        title: "5. File Handling",
        icon: "Files",
        blocks: [
          { kind: "paragraph", text: "File handling allows an application to store and retrieve data from files. Common operations include creating/opening a file, reading, writing, appending and closing. Stream-based classes provide a structured way to work with file data." },
          { kind: "table", headers: ["Operation", "Purpose"], rows: [
            ["Open/Create", "Establish access to a file."],
            ["Read", "Retrieve stored data."],
            ["Write", "Store new data."],
            ["Append", "Add data to existing content."],
            ["Close/Dispose", "Release the file resource after use."]
          ]}
        ]
      },
      {
        id: "file-streams",
        title: "6. File Streams and StreamReader/StreamWriter",
        icon: "FileInput",
        blocks: [
          { kind: "paragraph", text: "A stream represents a sequence of data that can be read or written. StreamReader is designed for reading text from a stream, while StreamWriter is designed for writing text to a stream. Correct resource handling is important so that file handles are released after operations complete." },
          { kind: "diagram", diagramId: "bca-vbnet-stream-reader-writer", caption: "Text file flow using StreamReader for reading and StreamWriter for writing." },
          { kind: "callout", tone: "example", title: "Example", text: "A student-record application can use StreamWriter to save lines of text and StreamReader to read those lines back for display or processing." }
        ]
      },
      {
        id: "access-files",
        title: "7. Reading and Writing Text Using Stream Reader/Writer",
        icon: "FileText",
        blocks: [
          { kind: "paragraph", text: "A text-processing program normally opens a file, creates the appropriate reader or writer, performs the required read/write operations and then closes or disposes the stream. Reading may be performed line by line, while writing can output individual strings or lines." },
          { kind: "table", headers: ["Class", "Typical operation"], rows: [
            ["StreamReader", "Read characters or lines from text streams."],
            ["StreamWriter", "Write characters or lines to text streams."]
          ]}
        ]
      },
      {
        id: "ado-net",
        title: "8. ADO.NET and Database Connectivity",
        icon: "Database",
        blocks: [
          { kind: "paragraph", text: "ADO.NET is the .NET data-access technology used to work with data sources. It provides objects for establishing connections, executing commands and working with retrieved data. The syllabus specifically includes ADO.NET, database access, Server Explorer, Data Adapter, Data Sets, ADO.NET Objects and Basic SQL." },
          { kind: "diagram", diagramId: "bca-ado-net-architecture", caption: "Conceptual ADO.NET data-access flow from application to provider/database and DataSet/DataAdapter." },
          { kind: "table", headers: ["Object/concept", "Purpose"], rows: [
            ["Connection", "Represents a connection to a data source."],
            ["Command", "Represents a database command such as a SQL statement."],
            ["DataReader", "Provides forward, read-oriented access to query results."],
            ["DataAdapter", "Transfers data between a data source and a DataSet."],
            ["DataSet", "In-memory representation of data that can contain tables and relationships."]
          ]}
        ]
      },
      {
        id: "ado-objects",
        title: "9. ADO.NET Objects and Basic SQL",
        icon: "DatabaseZap",
        blocks: [
          { kind: "paragraph", text: "Database applications commonly use SQL to retrieve and manipulate relational data. SELECT retrieves rows, INSERT adds rows, UPDATE modifies existing rows and DELETE removes rows. In ADO.NET, the application sends commands through the appropriate provider objects." },
          { kind: "callout", tone: "example", title: "Example", text: "A student application can execute a parameterized SELECT query to retrieve a student's record, display the result in a form and use INSERT or UPDATE commands to store changes." },
          { kind: "callout", tone: "info", title: "Good practice", text: "Database input should be handled with parameterized commands rather than constructing SQL by concatenating untrusted user input." }
        ]
      },
      {
        id: "web-data-applications",
        title: "10. Creating Windows/Web Applications with Databases",
        icon: "Globe",
        blocks: [
          { kind: "paragraph", text: "Database-backed applications combine a user interface, application logic and a data-access layer. A Windows application may use Windows Forms, while a web application uses a web application architecture. In both cases, database access should be separated logically from presentation code so that the application is easier to maintain." },
          { kind: "diagram", diagramId: "bca-vbnet-database-application", caption: "Three-layer conceptual structure of a database-backed VB.NET application." },
          { kind: "table", headers: ["Layer", "Responsibility"], rows: [
            ["Presentation", "Forms/web pages and user interaction."],
            ["Application logic", "Validation, calculations and business rules."],
            ["Data access", "Connections, commands, adapters and data retrieval."],
            ["Database", "Persistent storage of application data."]
          ]}
        ]
      }
    ],
    keyTerms: [
      { term: "Object-Oriented Programming", definition: "Programming approach organized around classes, objects and their behavior." },
      { term: "Class", definition: "Blueprint that defines data and behavior for objects." },
      { term: "Object", definition: "Instance of a class." },
      { term: "Constructor", definition: "Special member used to initialize an object." },
      { term: "Structure", definition: "Value type used to group related data and members." },
      { term: "Exception", definition: "Abnormal condition represented during program execution." },
      { term: "Try-Catch-Finally", definition: "Structured VB.NET mechanism for detecting, handling and cleaning up after exceptions." },
      { term: "Stream", definition: "Sequence-based abstraction for reading or writing data." },
      { term: "StreamReader", definition: "Class used for reading text from a stream." },
      { term: "StreamWriter", definition: "Class used for writing text to a stream." },
      { term: "ADO.NET", definition: ".NET technology for accessing and working with data sources." },
      { term: "DataAdapter", definition: "ADO.NET object that transfers data between a data source and a DataSet." },
      { term: "DataSet", definition: "In-memory representation of data containing tables and related information." },
      { term: "SQL", definition: "Language used to define, retrieve and manipulate relational database data." }
    ],
    examQuestions: [
      "Explain OOP concepts in VB.NET. (Long)",
      "Differentiate class and object. Explain constructors. (Medium)",
      "Explain structures and their uses. (Short/Medium)",
      "Explain exception handling using Try, Catch and Finally. (Long)",
      "Explain file handling and file streams in VB.NET. (Long)",
      "Differentiate StreamReader and StreamWriter. (Medium)",
      "Explain ADO.NET architecture and important objects. (Long)",
      "Explain DataAdapter and DataSet. (Medium)",
      "Explain basic SQL operations used in a database application. (Medium)",
      "Explain how a Windows/Web application can be connected with a database. (Long)"
    ]
  }
];
