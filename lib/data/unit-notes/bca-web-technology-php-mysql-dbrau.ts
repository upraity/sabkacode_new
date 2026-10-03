import { UnitNote } from "@/types";

export const BcaWebTechnologyPhpMysqlDbrauUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Introduction to PHP",
    hours: 8,
    headings: [
      {
        id: "php-introduction",
        title: "1. Introduction to PHP",
        icon: "Code2",
        blocks: [
          { kind: "paragraph", text: "PHP is the scripting language studied in this unit for building dynamic web pages and server-side web applications. In a typical PHP request, a browser sends a request to a web server, the PHP code is processed on the server, and the resulting response is returned to the browser." },
          { kind: "diagram", diagramId: "bca-php-request-response", caption: "Basic PHP request-response flow between browser, web server and PHP processing." },
          { kind: "table", headers: ["Stage", "What happens"], rows: [
            ["1. Request", "The browser requests a PHP-enabled page."],
            ["2. Server processing", "The web server passes the PHP code for processing."],
            ["3. PHP execution", "PHP statements are evaluated and produce output."],
            ["4. Response", "The generated output is sent back to the browser."]
          ]}
        ]
      },
      {
        id: "evaluation-of-php",
        title: "2. Evaluation of PHP",
        icon: "Play",
        blocks: [
          { kind: "paragraph", text: "Evaluation of PHP can be understood as the process in which the PHP interpreter processes PHP statements and expressions and produces a result or output. PHP code is normally embedded in a web document using PHP opening and closing tags. The browser receives the generated output rather than the original server-side PHP statements." },
          { kind: "callout", tone: "example", title: "Simple example", text: "A PHP statement such as echo \"Hello\"; is evaluated on the server. The resulting text Hello can appear in the HTTP response sent to the browser." }
        ]
      },
      {
        id: "php-basic-syntax",
        title: "3. Basic Syntax",
        icon: "Braces",
        blocks: [
          { kind: "paragraph", text: "PHP statements are commonly written inside PHP tags. Statements normally end with a semicolon. Variables begin with the dollar sign ($). PHP also supports comments, strings, operators, conditions, loops and functions. Correct use of delimiters, quotes, semicolons and variable names is essential for avoiding syntax errors." },
          { kind: "callout", tone: "example", title: "Basic PHP structure", text: "<?php echo \"Welcome to PHP\"; ?>" },
          { kind: "table", headers: ["Construct", "Purpose"], rows: [
            ["<?php ... ?>", "Marks a PHP code region in a PHP-enabled document."],
            ["echo", "Outputs a value or text."],
            ["$variable", "Represents a PHP variable."],
            [";", "Terminates a PHP statement in normal statement syntax."],
            ["// or /* ... */", "Used for comments."]
          ]}
        ]
      },
      {
        id: "variables-constants-data-types",
        title: "4. Defining Variables, Constants and Data Types",
        icon: "Database",
        blocks: [
          { kind: "paragraph", text: "A variable stores a value that can be used and changed during program execution. In PHP, a variable name starts with $. A constant represents a named value intended to remain constant after definition. Data types describe the kind of value stored or handled by the program." },
          { kind: "table", headers: ["Concept", "Example", "Purpose"], rows: [
            ["Variable", "$name = \"Aman\";", "Stores a value that can be reassigned."],
            ["Integer", "$age = 20;", "Represents a whole-number value."],
            ["Float", "$price = 99.50;", "Represents a fractional numeric value."],
            ["String", "$city = \"Agra\";", "Represents text."],
            ["Boolean", "$loggedIn = true;", "Represents true/false state."],
            ["Array", "$marks = [70, 80, 90];", "Stores multiple values."],
            ["Constant", "define(\"COLLEGE\", \"DBRAU\");", "Defines a named constant value."]
          ]},
          { kind: "callout", tone: "example", title: "Variable example", text: "$marks = 85; $marks = 90; echo $marks; — the final value printed is 90 because the variable was reassigned." }
        ]
      },
      {
        id: "operators-expressions",
        title: "5. Operator and Expression",
        icon: "Calculator",
        blocks: [
          { kind: "paragraph", text: "An expression combines values, variables, operators and function calls to produce a value. Operators perform operations such as arithmetic, comparison, assignment and logical evaluation." },
          { kind: "table", headers: ["Operator group", "Examples", "Purpose"], rows: [
            ["Arithmetic", "+, -, *, /, %", "Perform numeric calculations."],
            ["Assignment", "=, +=, -=, *=", "Assign or update values."],
            ["Comparison", "==, ===, !=, <, >", "Compare values or relationships."],
            ["Logical", "&&, ||, !", "Combine or negate logical conditions."],
            ["String", ".", ".=", "Concatenate strings."]
          ]},
          { kind: "callout", tone: "example", title: "Expression example", text: "$total = $price * $quantity; is an expression used to calculate a total from two variables." }
        ]
      },
      {
        id: "decision-and-looping",
        title: "6. Decisions and Looping",
        icon: "GitBranch",
        blocks: [
          { kind: "paragraph", text: "Decision statements select code according to a condition. Looping statements repeat a block of code. The syllabus specifically includes decision and looping concepts as part of PHP basics." },
          { kind: "table", headers: ["Construct", "Use"], rows: [
            ["if", "Executes a block when a condition is true."],
            ["if...else", "Selects between two alternatives."],
            ["switch", "Selects among multiple matching cases."],
            ["for", "Repeats using an initialization, condition and update pattern."],
            ["while", "Repeats while a condition remains true."],
            ["foreach", "Conveniently iterates through array elements."]
          ]},
          { kind: "callout", tone: "example", title: "Decision example", text: "if ($marks >= 40) { echo \"Pass\"; } else { echo \"Fail\"; } — the output depends on the value of $marks." }
        ]
      },
      {
        id: "functions",
        title: "7. Function",
        icon: "FunctionSquare",
        blocks: [
          { kind: "paragraph", text: "A function is a named block of reusable code. Functions can receive parameters, perform processing and return a value. Using functions reduces repetition and makes a program easier to organize and maintain." },
          { kind: "callout", tone: "example", title: "Function example", text: "function add($a, $b) { return $a + $b; } — calling add(10, 20) returns 30." },
          { kind: "table", headers: ["Part", "Meaning"], rows: [
            ["Function name", "Identifies the reusable operation."],
            ["Parameter", "Input received by the function."],
            ["Function body", "Statements executed when the function is called."],
            ["return", "Sends a result back to the caller."]
          ]}
        ]
      },
      {
        id: "call-by-reference-recursion",
        title: "8. Call by Reference, Recursion and Function",
        icon: "Repeat",
        blocks: [
          { kind: "paragraph", text: "Call by reference allows a function to work with the referenced variable so that changes made through the reference can affect the original variable. Recursion occurs when a function calls itself to solve a problem by reducing it to smaller instances of the same problem. A recursive function needs a base condition so that recursion eventually stops." },
          { kind: "callout", tone: "example", title: "Reference example", text: "function increase(&$x) { $x++; } — the & before $x indicates that the function parameter is passed by reference." },
          { kind: "callout", tone: "example", title: "Recursion example", text: "A factorial function can define factorial(1) = 1 as a base case and factorial(n) = n × factorial(n-1) for larger n." },
          { kind: "diagram", diagramId: "bca-php-recursion", caption: "Conceptual recursive call flow showing reduction toward a base case." }
        ]
      },
      {
        id: "string-functions",
        title: "9. String Creation, Searching, Replacing and Formatting",
        icon: "Text",
        blocks: [
          { kind: "paragraph", text: "Strings are sequences of characters. PHP provides string-related functions for creating and manipulating text, including operations for searching, replacing, measuring and formatting strings. The syllabus specifically requires string creation, searching and replacing, formatting and string-related library functions." },
          { kind: "table", headers: ["Operation", "Common PHP function", "Purpose"], rows: [
            ["Length", "strlen()", "Returns the length of a string."],
            ["Search", "strpos()", "Finds the position of a substring."],
            ["Replace", "str_replace()", "Replaces matching text."],
            ["Substring", "substr()", "Extracts part of a string."],
            ["Lowercase", "strtolower()", "Converts text to lowercase."],
            ["Uppercase", "strtoupper()", "Converts text to uppercase."],
            ["Trim", "trim()", "Removes whitespace from the ends of a string."]
          ]},
          { kind: "callout", tone: "example", title: "String replacement example", text: "$text = \"Hello PHP\"; $text = str_replace(\"PHP\", \"MySQL\", $text); — the resulting string is Hello MySQL." }
        ]
      }
    ],
    keyTerms: [
      { term: "PHP", definition: "Server-side scripting language used in the syllabus for dynamic web programming." },
      { term: "Variable", definition: "Named storage used to hold a value during program execution." },
      { term: "Constant", definition: "Named value intended to remain fixed after definition." },
      { term: "Expression", definition: "Combination of values, variables and operators that produces a value." },
      { term: "Operator", definition: "Symbol or construct used to perform an operation on values." },
      { term: "Function", definition: "Reusable named block of program statements." },
      { term: "Recursion", definition: "Technique in which a function calls itself with a smaller or simpler problem." },
      { term: "String", definition: "Sequence of characters used to represent text." },
      { term: "Call by Reference", definition: "Parameter-passing approach in which a function works with a reference to the original variable." },
      { term: "strpos()", definition: "PHP string function used to search for the position of a substring." },
      { term: "str_replace()", definition: "PHP function used to replace matching text in a string." }
    ],
    examQuestions: [
      "Explain PHP and its basic execution/evaluation process with a diagram. (Long)",
      "Explain PHP syntax and write a simple PHP program. (Medium)",
      "Explain variables, constants and PHP data types with examples. (Long)",
      "Explain operators and expressions in PHP with suitable examples. (Long)",
      "Explain decision and looping statements in PHP. (Long)",
      "What is a function? Explain parameters and return values with an example. (Medium)",
      "Explain call by reference and recursion with examples. (Long)",
      "Explain PHP string creation, searching, replacing and formatting functions. (Long)",
      "Write short notes on strlen(), strpos(), substr() and str_replace(). (Medium)"
    ]
  },
  {
    unitNumber: 2,
    title: "Arrays, HTML Forms and File Handling",
    hours: 8,
    headings: [
      {
        id: "array-introduction",
        title: "1. Introduction to Array",
        icon: "List",
        blocks: [
          { kind: "paragraph", text: "An array stores multiple values under one variable name. PHP arrays can be indexed or associative. Indexed arrays use numeric indexes, while associative arrays use named keys." },
          { kind: "callout", tone: "example", title: "Indexed array", text: "$marks = [70, 82, 91]; — $marks[0] is 70, $marks[1] is 82 and $marks[2] is 91." },
          { kind: "callout", tone: "example", title: "Associative array", text: "$student = [\"name\" => \"Aman\", \"course\" => \"BCA\"]; — values are accessed using named keys." }
        ]
      },
      {
        id: "creating-indexed-associative-arrays",
        title: "2. Creating Indexed and Associative Arrays",
        icon: "Brackets",
        blocks: [
          { kind: "paragraph", text: "Indexed arrays are suitable when values are naturally ordered. Associative arrays are suitable when each value is identified by a meaningful key. PHP also supports nested arrays, allowing arrays to contain other arrays." },
          { kind: "table", headers: ["Array type", "Example", "Access"], rows: [
            ["Indexed", "$colors = [\"red\", \"blue\"];", "$colors[0]"],
            ["Associative", "$user = [\"name\" => \"Riya\"];", "$user[\"name\"]"],
            ["Nested", "$data = [[1,2],[3,4]];", "$data[0][1]"]
          ]},
          { kind: "diagram", diagramId: "bca-php-array-structure", caption: "Indexed and associative array structure with keys and values." }
        ]
      },
      {
        id: "array-access-looping",
        title: "3. Accessing Array Elements and Looping",
        icon: "Repeat",
        blocks: [
          { kind: "paragraph", text: "Array elements can be accessed by their index or key. Loops are used to process all or selected elements. The foreach construct is especially convenient for iterating through PHP arrays." },
          { kind: "callout", tone: "example", title: "foreach example", text: "foreach ($marks as $mark) { echo $mark; } — the loop processes each value stored in the $marks array." }
        ]
      },
      {
        id: "array-functions",
        title: "4. Array Functions",
        icon: "ListChecks",
        blocks: [
          { kind: "paragraph", text: "PHP provides library functions for counting, sorting, searching, adding, removing and combining array elements. The exact function selected depends on the required operation." },
          { kind: "table", headers: ["Function", "Purpose"], rows: [
            ["count()", "Returns the number of elements."],
            ["sort()", "Sorts an indexed array in ascending order."],
            ["rsort()", "Sorts an indexed array in descending order."],
            ["array_push()", "Adds one or more elements to the end."],
            ["array_pop()", "Removes and returns the last element."],
            ["in_array()", "Checks whether a value exists in an array."],
            ["array_merge()", "Combines arrays."]
          ]}
        ]
      },
      {
        id: "html-form-php-capturing",
        title: "5. HTML Form and PHP Capturing Form",
        icon: "ClipboardEdit",
        blocks: [
          { kind: "paragraph", text: "An HTML form collects user input and submits it to a server-side program. PHP can read submitted form values using the request data made available by the form method. The syllabus includes handling HTML forms and capturing form data in PHP." },
          { kind: "diagram", diagramId: "bca-php-form-flow", caption: "HTML form submission and PHP processing flow." },
          { kind: "callout", tone: "example", title: "Form processing example", text: "A form can contain a name field. When submitted, PHP can read the submitted value and generate a response such as a greeting or validation message." },
          { kind: "table", headers: ["Form method", "General idea"], rows: [
            ["GET", "Form data is included in the request URL/query portion."],
            ["POST", "Form data is sent in the request body."]
          ]}
        ]
      },
      {
        id: "multi-value-file-generated-form",
        title: "6. Dealing with Multi-value Field and Generated File Upload Form",
        icon: "Upload",
        blocks: [
          { kind: "paragraph", text: "A multi-value form field can submit more than one value, such as a group of checkboxes. PHP can process submitted values as arrays when the form is designed accordingly. File upload forms require a suitable form encoding and an input of file type; the server-side PHP code then handles the uploaded file information and processing." },
          { kind: "callout", tone: "example", title: "Multi-value example", text: "A form may allow a user to select multiple subjects. The selected values can be submitted as a group and processed in PHP using a loop." },
          { kind: "callout", tone: "info", title: "File-upload exam point", text: "A file-upload workflow should validate the submitted file information before storing or processing it. The syllabus requires the concept of a generated file upload form and PHP handling." }
        ]
      }
    ],
    keyTerms: [
      { term: "Array", definition: "Data structure that stores multiple values under one variable." },
      { term: "Indexed Array", definition: "Array whose elements are accessed using numeric indexes." },
      { term: "Associative Array", definition: "Array whose elements are accessed using named keys." },
      { term: "foreach", definition: "PHP loop construct commonly used to iterate through array elements." },
      { term: "count()", definition: "Function used to obtain the number of elements in an array." },
      { term: "HTML Form", definition: "Web form used to collect user input." },
      { term: "GET", definition: "HTTP request method in which submitted form data is included in the request URL/query." },
      { term: "POST", definition: "HTTP request method in which submitted form data is sent in the request body." },
      { term: "File Upload", definition: "Process of transferring a selected local file from a client form to server-side handling." }
    ],
    examQuestions: [
      "Define an array and explain indexed and associative arrays with examples. (Long)",
      "Explain how array elements are accessed and processed using loops. (Medium)",
      "Explain important PHP array functions with examples. (Long)",
      "Explain HTML forms and how PHP captures submitted form data. (Long)",
      "Differentiate GET and POST methods. (Medium)",
      "Explain multi-value form fields with a suitable example. (Medium)",
      "Explain the basic workflow for a PHP file-upload form. (Long)",
      "Write a PHP example using foreach to display array elements. (Medium)"
    ]
  },
  {
    unitNumber: 3,
    title: "Working with Files and Directories",
    hours: 8,
    headings: [
      {
        id: "file-directory-basics",
        title: "1. Understanding Files and Directories",
        icon: "Folder",
        blocks: [
          { kind: "paragraph", text: "A file stores data in a named location, while a directory organizes files and other directories. PHP provides file and directory functions that allow a server-side application to inspect, create, read, write, copy, rename and delete file-system resources." },
          { kind: "diagram", diagramId: "bca-php-file-directory-flow", caption: "Conceptual PHP file and directory operation flow." }
        ]
      },
      {
        id: "opening-closing-files",
        title: "2. Opening and Closing a File",
        icon: "FileOpen",
        blocks: [
          { kind: "paragraph", text: "Before performing many file operations, a program can open a file and obtain a file handle. After the required work is complete, the file should be closed. PHP's fopen() function can open a file using a specified mode and fclose() closes the opened file." },
          { kind: "table", headers: ["Function", "Purpose"], rows: [
            ["fopen()", "Opens a file and returns a file handle on success."],
            ["fclose()", "Closes an opened file handle."],
            ["fread()", "Reads a specified amount of data from an open file."],
            ["fwrite()", "Writes data to an open file."]
          ]},
          { kind: "callout", tone: "example", title: "Basic workflow", text: "$handle = fopen(\"notes.txt\", \"r\"); → read/process data → fclose($handle);." }
        ]
      },
      {
        id: "copy-rename-delete-files",
        title: "3. Copying, Renaming and Deleting a File",
        icon: "Files",
        blocks: [
          { kind: "paragraph", text: "PHP includes file-management functions for copying, renaming and deleting files. These operations should be performed only on paths the application is authorized to access." },
          { kind: "table", headers: ["Function", "Operation"], rows: [
            ["copy()", "Copies a file to another location."],
            ["rename()", "Renames or moves a file."],
            ["unlink()", "Deletes a file."]
          ]},
          { kind: "callout", tone: "example", title: "File-management example", text: "copy(\"old.txt\", \"backup.txt\"); creates a copy, rename(\"old.txt\", \"new.txt\"); changes the name/path, and unlink(\"new.txt\"); removes the file." }
        ]
      },
      {
        id: "directories",
        title: "4. Working with Directories",
        icon: "FolderTree",
        blocks: [
          { kind: "paragraph", text: "Directory operations include creating, opening, reading and deleting directories. PHP provides directory functions for managing these operations. A directory may contain files and subdirectories, so applications often inspect directory contents before performing deletion." },
          { kind: "table", headers: ["Function", "Purpose"], rows: [
            ["mkdir()", "Creates a directory."],
            ["rmdir()", "Removes a directory when the required conditions are satisfied."],
            ["opendir()", "Opens a directory for reading."],
            ["readdir()", "Reads an entry from an opened directory."],
            ["closedir()", "Closes an opened directory handle."]
          ]},
          { kind: "callout", tone: "example", title: "Directory example", text: "mkdir(\"uploads\"); can create an uploads directory. opendir(\"uploads\") can then be used to inspect directory entries." }
        ]
      },
      {
        id: "file-upload-download",
        title: "5. File Uploading and Downloading",
        icon: "ArrowDownToLine",
        blocks: [
          { kind: "paragraph", text: "File uploading transfers a file from a client to the server, while downloading sends a file from the server to the client. A PHP application can implement these workflows using an HTML form and server-side file handling." },
          { kind: "diagram", diagramId: "bca-php-upload-download", caption: "Conceptual upload and download paths between browser and server storage." },
          { kind: "table", headers: ["Operation", "Direction"], rows: [
            ["Upload", "Client → Server"],
            ["Download", "Server → Client"]
          ]}
        ]
      }
    ],
    keyTerms: [
      { term: "File", definition: "Named storage resource containing data." },
      { term: "Directory", definition: "File-system structure used to organize files and other directories." },
      { term: "fopen()", definition: "PHP function used to open a file and obtain a file handle." },
      { term: "fclose()", definition: "PHP function used to close an opened file handle." },
      { term: "fread()", definition: "PHP function used to read data from an open file." },
      { term: "fwrite()", definition: "PHP function used to write data to an open file." },
      { term: "copy()", definition: "PHP function used to copy a file." },
      { term: "rename()", definition: "PHP function used to rename or move a file." },
      { term: "unlink()", definition: "PHP function used to delete a file." },
      { term: "mkdir()", definition: "PHP function used to create a directory." },
      { term: "Upload", definition: "Transfer of a file from a client to a server." },
      { term: "Download", definition: "Transfer of a file from a server to a client." }
    ],
    examQuestions: [
      "Explain files and directories in PHP. (Medium)",
      "Explain opening, reading, writing and closing a file with PHP functions. (Long)",
      "Explain copy, rename and delete operations on files. (Medium)",
      "Explain directory creation, opening, reading and deletion. (Long)",
      "Explain file uploading and downloading in PHP with a diagram. (Long)",
      "Write short notes on fopen(), fclose(), fread() and fwrite(). (Medium)",
      "Write short notes on mkdir(), opendir(), readdir() and rmdir(). (Medium)"
    ]
  },
  {
    unitNumber: 4,
    title: "Session and Cookie",
    hours: 8,
    headings: [
      {
        id: "session-control",
        title: "1. Introduction to Session Control",
        icon: "ShieldCheck",
        blocks: [
          { kind: "paragraph", text: "HTTP requests are independent by default, so a web application needs a mechanism to maintain state across multiple requests. Session control provides a way to associate multiple requests with the same user interaction. Cookies can also store selected information on the client side and help the application recognize a returning browser." },
          { kind: "diagram", diagramId: "bca-php-session-cookie-flow", caption: "Conceptual relationship between browser, cookie and server-side session data." }
        ]
      },
      {
        id: "session-functionality",
        title: "2. Session Functionality",
        icon: "UserRound",
        blocks: [
          { kind: "paragraph", text: "A PHP session allows application data to be maintained across requests. A common workflow is to start or resume a session, store values in session variables, use those values in later requests, and eventually remove session data or destroy the session when it is no longer needed." },
          { kind: "table", headers: ["Operation", "Concept"], rows: [
            ["Start/resume", "Begin or continue a session."],
            ["Store", "Assign application data to session variables."],
            ["Read", "Use session variables on subsequent requests."],
            ["Remove", "Unset selected session values when required."],
            ["Destroy", "End the session and remove its server-side session data according to the application workflow."]
          ]},
          { kind: "callout", tone: "example", title: "Login example", text: "After successful login, an application can store a user identifier in a session variable. Subsequent protected pages can check that session value before displaying user-specific content." }
        ]
      },
      {
        id: "cookie",
        title: "3. What is a Cookie?",
        icon: "Cookie",
        blocks: [
          { kind: "paragraph", text: "A cookie is a small piece of information associated with a web domain and stored by the browser. The browser can send the cookie information back with later requests according to its rules. Cookies are commonly used for preferences, identifiers and other client-side state." },
          { kind: "table", headers: ["Aspect", "Cookie"], rows: [
            ["Storage", "Stored by the browser/client."],
            ["Purpose", "Can preserve selected information across requests."],
            ["Scope", "Associated with domain/path and other cookie attributes."],
            ["Lifetime", "Can be session-oriented or configured with an expiry."]
          ]}
        ]
      },
      {
        id: "setting-cookies-php",
        title: "4. Setting Cookies with PHP",
        icon: "Settings2",
        blocks: [
          { kind: "paragraph", text: "PHP provides cookie-related functions for sending cookie instructions to the browser. A cookie can be given a name, value and lifetime, along with other attributes supported by the implementation." },
          { kind: "callout", tone: "example", title: "Cookie example", text: "setcookie(\"theme\", \"dark\", time() + 3600); requests a cookie named theme with value dark and an expiry approximately one hour in the future." }
        ]
      },
      {
        id: "cookies-with-sessions",
        title: "5. Using Cookies with Sessions",
        icon: "Link",
        blocks: [
          { kind: "paragraph", text: "Cookies and sessions solve related but different state-management problems. A session is primarily a server-side mechanism for retaining application state, while a cookie is stored by the browser. A web application can use a browser-side identifier to associate a request with server-side session data." },
          { kind: "table", headers: ["Feature", "Session", "Cookie"], rows: [
            ["Main storage", "Server-side application session data", "Client/browser"],
            ["Typical role", "Maintain application state across requests", "Store small client-associated information"],
            ["Example", "Logged-in user identifier", "Theme or preference"]
          ]}
        ]
      },
      {
        id: "deleting-cookies",
        title: "6. Deleting Cookies",
        icon: "Trash2",
        blocks: [
          { kind: "paragraph", text: "A cookie can be removed by sending a cookie instruction that causes the browser to expire or otherwise discard the stored cookie. The application should use the same identifying attributes required to target the intended cookie." },
          { kind: "callout", tone: "example", title: "Deletion concept", text: "To delete a cookie, PHP can send the same cookie name with an expiry time in the past so that the browser removes it." }
        ]
      },
      {
        id: "register-session-variables",
        title: "7. Registering Session Variables",
        icon: "Variable",
        blocks: [
          { kind: "paragraph", text: "PHP session variables are stored in the session data associated with the current session. A program can assign values to session variables after starting the session and then access those values on later requests belonging to the same session." },
          { kind: "callout", tone: "example", title: "Session variable example", text: "After session_start(), assigning $_SESSION[\"user\"] = \"Aman\" stores a user value in the current session." }
        ]
      },
      {
        id: "destroying-session",
        title: "8. Destroying Sessions",
        icon: "LogOut",
        blocks: [
          { kind: "paragraph", text: "Destroying a session is useful when the application wants to end the current session, such as after logout. Session variables can be cleared and the session can be terminated according to the application's session-management workflow." },
          { kind: "callout", tone: "case", title: "Logout case", text: "A logout process can clear the current user's session data so that later requests are no longer treated as authenticated through that session." }
        ]
      },
      {
        id: "session-variable-destroy-session",
        title: "9. Session Variables and Destroying the Session",
        icon: "ShieldOff",
        blocks: [
          { kind: "paragraph", text: "There is an important distinction between removing selected session variables and destroying the entire session. Removing one variable affects one piece of session state, whereas destroying the session is a broader operation intended to end the session." },
          { kind: "table", headers: ["Action", "Effect"], rows: [
            ["Unset selected variable", "Removes one selected item from session state."],
            ["Clear session data", "Removes session values according to the application's workflow."],
            ["Destroy session", "Ends the session as a whole."]
          ]}
        ]
      },
      {
        id: "session-connectivity",
        title: "10. Connectivity with Variables, Destroying Variables and Session",
        icon: "Workflow",
        blocks: [
          { kind: "paragraph", text: "Session connectivity with variables means that application variables and session variables participate in the same request-processing workflow. A value can be assigned to a session variable, used in another request and later removed when the application no longer needs it. Proper lifecycle management avoids retaining obsolete state." },
          { kind: "diagram", diagramId: "bca-php-session-lifecycle", caption: "Session lifecycle from creation through use, variable removal and destruction." }
        ]
      }
    ],
    keyTerms: [
      { term: "Session", definition: "Server-side mechanism for maintaining application state across related web requests." },
      { term: "Cookie", definition: "Small piece of browser-stored information associated with a web domain." },
      { term: "Session Variable", definition: "Value stored in the current PHP session and available to later requests in that session." },
      { term: "session_start()", definition: "PHP function used to start or resume a session." },
      { term: "setcookie()", definition: "PHP function used to send cookie information to the browser." },
      { term: "Session Control", definition: "Management of user-related state across multiple HTTP requests." },
      { term: "Session Destruction", definition: "Process of ending the current session and clearing session state according to the application workflow." }
    ],
    examQuestions: [
      "Explain session control and why it is required in web applications. (Long)",
      "What is a session? Explain session functionality in PHP. (Long)",
      "What is a cookie? Explain its purpose and characteristics. (Medium)",
      "Explain how cookies are set and deleted using PHP. (Medium)",
      "Differentiate sessions and cookies. (Long)",
      "Explain registering and using session variables with an example. (Medium)",
      "Explain how a PHP session can be destroyed during logout. (Medium)",
      "Explain session variables, cookie interaction and the complete session lifecycle. (Long)"
    ]
  },
  {
    unitNumber: 5,
    title: "MySQL",
    hours: 8,
    headings: [
      {
        id: "mysql-rdbms-introduction",
        title: "1. Introduction to RDBMS and MySQL",
        icon: "Database",
        blocks: [
          { kind: "paragraph", text: "A Relational Database Management System (RDBMS) organizes data into related tables. MySQL is the database system studied in this unit for storing and retrieving application data. A PHP application can connect to a MySQL database, execute SQL statements and use returned results in a web page." },
          { kind: "diagram", diagramId: "bca-php-mysql-architecture", caption: "Basic PHP application, MySQL database and SQL request-response architecture." },
          { kind: "table", headers: ["Component", "Role"], rows: [
            ["PHP application", "Receives web input and controls application logic."],
            ["Database connection", "Provides communication between PHP and MySQL."],
            ["MySQL database", "Stores structured application data."],
            ["SQL", "Language used to create, read, update and manipulate database data."]
          ]}
        ]
      },
      {
        id: "mysql-connection",
        title: "2. Connection with MySQL Database",
        icon: "PlugZap",
        blocks: [
          { kind: "paragraph", text: "Before executing SQL statements, the PHP application must establish a database connection. The syllabus expects connection with the MySQL database as part of PHP-MySQL programming. A connection should be checked for failure and closed when it is no longer required, according to the chosen PHP database API." },
          { kind: "callout", tone: "example", title: "Connection workflow", text: "Application → create database connection → verify connection → execute SQL → process result → close connection." }
        ]
      },
      {
        id: "basic-dml",
        title: "3. Basic Database Operations: Insert, Delete, Update, Select",
        icon: "Table2",
        blocks: [
          { kind: "paragraph", text: "The syllabus includes basic database operations using SQL Data Manipulation Language (DML). INSERT adds rows, SELECT retrieves rows, UPDATE modifies existing rows and DELETE removes rows." },
          { kind: "table", headers: ["Operation", "Purpose", "Illustrative SQL"], rows: [
            ["INSERT", "Add a row", "INSERT INTO students(name) VALUES ('Aman');"],
            ["SELECT", "Read rows", "SELECT * FROM students;"],
            ["UPDATE", "Modify rows", "UPDATE students SET name='Riya' WHERE id=1;"],
            ["DELETE", "Remove rows", "DELETE FROM students WHERE id=1;"]
          ]},
          { kind: "callout", tone: "example", title: "CRUD example", text: "A student-management application can INSERT a new student, SELECT the student list, UPDATE a student's name and DELETE a student record." }
        ]
      },
      {
        id: "join-inner-outer",
        title: "4. Join Operations: Inner, Outer and Self Joins",
        icon: "Combine",
        blocks: [
          { kind: "paragraph", text: "A JOIN combines rows from related tables according to a specified relationship or matching condition. An inner join returns rows satisfying the join condition. Outer joins preserve unmatched rows from one or both sides according to the selected type. A self join joins a table with itself using different table aliases." },
          { kind: "diagram", diagramId: "bca-mysql-joins", caption: "Conceptual view of inner, outer and self join relationships." },
          { kind: "table", headers: ["Join", "Core idea"], rows: [
            ["INNER JOIN", "Returns matching rows from both participating tables."],
            ["LEFT OUTER JOIN", "Keeps all rows from the left table and matching rows from the right where available."],
            ["RIGHT OUTER JOIN", "Keeps all rows from the right table and matching rows from the left where available."],
            ["FULL OUTER JOIN", "Conceptually preserves rows from both sides, matching where possible; exact support depends on the SQL system/approach."],
            ["SELF JOIN", "Joins a table to itself using aliases."]
          ]},
          { kind: "callout", tone: "example", title: "Self-join example", text: "An employee table can be joined to itself using one alias for an employee and another alias for the employee's manager when the table contains a manager relationship." }
        ]
      },
      {
        id: "exception-handling",
        title: "5. Exception Handling",
        icon: "TriangleAlert",
        blocks: [
          { kind: "paragraph", text: "Exception handling provides a structured way to respond to exceptional conditions during program execution. PHP supports try, catch and throw constructs for handling exceptions. The application can catch an exception, report an appropriate message and perform required cleanup or recovery." },
          { kind: "callout", tone: "example", title: "Exception example", text: "try { /* database operation */ } catch (Exception $e) { /* handle the exception */ } — the catch block handles an exception raised in the try block." },
          { kind: "table", headers: ["Construct", "Purpose"], rows: [
            ["try", "Contains code that may produce an exception."],
            ["throw", "Creates/raises an exception."],
            ["catch", "Handles an exception of the relevant type."]
          ]}
        ]
      },
      {
        id: "error-try-catch-debugging",
        title: "6. Error, Try, Catch, Throw, Error Tracking and Debugging",
        icon: "Bug",
        blocks: [
          { kind: "paragraph", text: "Errors and exceptions can prevent an application from completing the intended operation. Debugging is the systematic process of locating and correcting defects. Error tracking means observing and recording failures so that the cause can be investigated. The syllabus specifically includes error, try, catch, throw, error tracking and debugging." },
          { kind: "table", headers: ["Concept", "Meaning"], rows: [
            ["Error", "Problem or failure condition that affects program execution."],
            ["Try", "Code region in which an exception may occur."],
            ["Catch", "Handler that receives a matching exception."],
            ["Throw", "Statement/operation used to raise an exception."],
            ["Error tracking", "Recording or monitoring failures for investigation."],
            ["Debugging", "Finding and fixing the cause of incorrect behavior."]
          ]},
          { kind: "diagram", diagramId: "bca-php-error-debug-flow", caption: "Exception and debugging workflow from operation through detection, handling and correction." }
        ]
      }
    ],
    keyTerms: [
      { term: "RDBMS", definition: "Relational Database Management System that organizes data in related tables." },
      { term: "MySQL", definition: "Database system used in the syllabus for relational data storage and SQL operations." },
      { term: "SQL", definition: "Structured Query Language used to work with relational database data." },
      { term: "INSERT", definition: "SQL operation used to add rows to a table." },
      { term: "SELECT", definition: "SQL operation used to retrieve data." },
      { term: "UPDATE", definition: "SQL operation used to modify existing rows." },
      { term: "DELETE", definition: "SQL operation used to remove rows." },
      { term: "INNER JOIN", definition: "Join that returns rows satisfying the join condition on both participating tables." },
      { term: "OUTER JOIN", definition: "Join that can preserve unmatched rows from one or both participating sides depending on the type." },
      { term: "SELF JOIN", definition: "Join in which a table is joined to itself using aliases." },
      { term: "Exception", definition: "Exceptional condition handled through structured exception-handling mechanisms." },
      { term: "Debugging", definition: "Process of locating and correcting defects in a program." }
    ],
    examQuestions: [
      "Explain RDBMS and MySQL and their role in a PHP web application. (Long)",
      "Explain how PHP connects with a MySQL database. (Medium)",
      "Explain INSERT, SELECT, UPDATE and DELETE operations with examples. (Long)",
      "Explain INNER JOIN, OUTER JOIN and SELF JOIN with suitable examples. (Long)",
      "What is exception handling? Explain try, catch and throw in PHP. (Long)",
      "Explain error tracking and debugging in PHP applications. (Medium)",
      "Write a short note on CRUD operations. (Medium)",
      "Explain a PHP-MySQL application architecture with a diagram. (Long)"
    ]
  }
];
