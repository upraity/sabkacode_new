import { Project } from "@/types";

// DEMO DATA — a small sample project per category so the catalogue,
// filters and detail-page layout can all be reviewed end to end.
// Optional fields (demoUrl, githubUrl, files) are left out where no real
// asset exists, and the UI must degrade gracefully rather than invent one.
export const projects: Project[] = [
  {
    id: "p-1",
    slug: "student-management-system",
    title: "Student Management System",
    shortDescription: "A web app to manage student records, attendance and results.",
    fullDescription: "A complete CRUD-based web application for colleges to manage student information in a centralized and organized way. The system includes student admissions, personal and academic records, attendance, marks management, and basic reporting features. Built with a structured relational database, role-based access, and a clean admin-style interface, it provides a practical solution for handling common student management tasks.",
    category: "web-development",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
    courseSlug: "btech",
    universitySlug: "aktu",
    branchSlug: "cse",
    projectType: "major",
    difficulty: "intermediate",
    features: [
      "Add, view, edit and delete student records",
      "Manage student admission and personal details",
      "Maintain course, semester and academic information",
      "Record and track student attendance",
      "Add and manage subject-wise marks",
      "Generate student results and basic academic reports",
      "Role-based login and access for admin and faculty",
      "Search and filter student records",
      "Centralized student database management",
      "Clean and responsive admin-style dashboard",
    ],
    isFree: true,
    featured: true,
    createdAt: "2026-06-01",
    updatedAt: "2026-06-01",
    isDemo: true,
     screenshots: [                      
      "https://drive.google.com/file/d/154AEnNKWcqXcyiOrJdY4IyT8utq2pQQT/view?usp=drive_link",
      "https://drive.google.com/file/d/1muWC2PVoQO5KP1zUzI8uMiRIt7zbDyg2/view?usp=drive_link",
      "https://drive.google.com/file/d/1IkWlOzOAb3jfjtwuwXCrXYKj4KAwmwxy/view?usp=drive_link",
       "https://drive.google.com/file/d/1U53zvoUVDpjhbLwmGtb9ByssSNMNMjvB/view?usp=drive_link",
       "https://drive.google.com/file/d/1PBVgZbUzlH9G-27N6jBR1sDk6dWH7iBB/view?usp=drive_link",
  ],
  demoUrl: "",  
  // githubUrl: "https://github.com/you/repo",       
  files: {
      sourceCode: "https://drive.google.com/file/d/1QTFdu4_D92KA8gyYWCXcKyQUF55i2RY8/view?usp=drive_link",
      // database: "https://drive.google.com/file/d/XXXXX/view",
      report: "https://docs.google.com/document/d/1qJwx-aSLJO6Ta3TWYzr5bvCQMkS62paT/edit?usp=drive_link&ouid=104288118438468355829&rtpof=true&sd=true",
      ppt: "https://docs.google.com/presentation/d/1s2snd00GIP4PGU7EQzZb6KpKMXdedbPJ/edit?usp=drive_link&ouid=104288118438468355829&rtpof=true&sd=true",
      synopsis: "https://docs.google.com/document/d/1tXyK_5B7FpGH2bQwOpYyz8IwayUOvcA4/edit?usp=drive_link&ouid=104288118438468355829&rtpof=true&sd=true",
      // ieeePaper: "https://drive.google.com/file/d/XXXXX/view",
      documentation: "https://drive.google.com/drive/folders/1iiChO_7LVTfHQOG0UNdpzwiXCphf28kv?usp=drive_link",
      vivaQuestions: "https://docs.google.com/document/d/1I8O5HC-KX81Iai31wNdeSifP_13UThpr/edit?usp=drive_link&ouid=104288118438468355829&rtpof=true&sd=true",
    },

  },
  {
    id: "p-2",
    slug: "expense-tracker-python",
    title: "Expense Tracker (Python)",
    shortDescription: "A command-line and GUI tool to track daily expenses.",
   fullDescription:
  "A desktop-based expense tracking application designed to help users record, manage and analyze their daily expenses in an organized way. The application allows users to maintain expense records, categorize transactions, track spending patterns and review their financial activity through a simple and user-friendly interface. It also supports local data storage and CSV export for maintaining and analyzing expense information.",
    category: "python",
    technologies: ["Python", "Tkinter", "SQLite"],
    projectType: "mini",
    difficulty: "beginner",
    features: [
      "Add, view, edit and delete expense records",
      "Record expense amount, category, date and description",
      "Organize expenses into different categories",
      "Track daily and overall spending",
      "View expense history in an organized table",
      "Search and filter expense records",
      "Calculate and display total expenses",
      "Export expense records to CSV format",
      "Store expense data locally using SQLite database",
      "Simple and user-friendly desktop interface",
    ],
    isFree: true,
    featured: true,
    createdAt: "2026-05-10",
    updatedAt: "2026-05-10",
    isDemo: true,
     screenshots: [                      
       "https://drive.google.com/file/d/1M0LWphvmqeQ4Y12CPdGrAf53lzMIkQdD/view?usp=drive_link",
       "https://drive.google.com/file/d/1ESTK7KSKn0_SxiyM32aocV0Yiig5gwii/view?usp=drive_link",
       "https://drive.google.com/file/d/1c83PzpbpI8cRkbCmE7n1oZLpk6iUxi0c/view?usp=drive_link",
       "https://drive.google.com/file/d/1ljNWmST0aDWRIHEqwfeCql7mWzCSXI11/view?usp=drive_link",
       "https://drive.google.com/file/d/1aEEzJayBsljxGh7ZDQjSF5tZWy7oQHF8/view?usp=drive_link",
  ],
      demoUrl: "",  
      // githubUrl: "https://github.com/you/repo",       
      files: {
        sourceCode: "https://drive.google.com/file/d/15Wrk-KtvWc4igjt5GdAaZ_nJ1wsdNrhC/view?usp=drive_link",
        // database: "https://drive.google.com/file/d/XXXXX/view",
        report: "https://docs.google.com/document/d/1DRPlV5j9mF5LLVcrI7Q2yYUAn8Nvxc8q/edit?usp=drive_link&ouid=104288118438468355829&rtpof=true&sd=true",
        ppt: "https://docs.google.com/presentation/d/1y0TwalZs_OknUqBJvu25haWSt6yEdW7e/edit?usp=drive_link&ouid=104288118438468355829&rtpof=true&sd=true",
        synopsis: "https://docs.google.com/document/d/1sWBBRFYiDZKuzGc3FMhHQV6n8haMXmuL/edit?usp=drive_link&ouid=104288118438468355829&rtpof=true&sd=true",
        documentation: "https://drive.google.com/drive/folders/1bcOVTCz25ARuMF2yE9JWf6ReBiV6SR7b?usp=drive_link",
        vivaQuestions: "https://docs.google.com/document/d/1dblxwrh7pV-W4z6P-RCEf9omuXcvIUbA/edit?usp=drive_link&ouid=104288118438468355829&rtpof=true&sd=true",
      },
  },
  {
    id: "p-3",
    slug: "fake-news-detection",
    title: "Fake News Detection",
    shortDescription: "An ML model that classifies news articles as real or fake.",
    fullDescription:
     "A machine learning-based application designed to analyze news articles and predict whether the provided content is likely to be real or fake. The system processes the text using natural language processing techniques and applies a trained machine learning model to classify the news. It provides a simple interface where users can enter or submit news content and receive the predicted result, making it suitable for demonstrating practical applications of NLP and machine learning.",
    category: "ai-ml",
    technologies: ["Python", "scikit-learn", "Pandas", "NLTK"],
    projectType: "major",
    difficulty: "advanced",
   features: [
  "Enter and analyze news article text",
  "Predict whether the news is likely to be real or fake",
  "Text preprocessing using NLP techniques",
  "Machine learning-based text classification",
  "Trained model for fake news prediction",
  "Simple and user-friendly interface",
  "Display prediction results clearly",
  "Process and analyze news text efficiently",
  "Model and dataset included with the project",
  "Suitable for demonstrating practical NLP and machine learning concepts",
],
    isFree: true,
    featured: true,
    createdAt: "2026-04-18",
    updatedAt: "2026-04-18",
    isDemo: true,
     screenshots: [   
       "https://drive.google.com/file/d/1p8XvMvRU2-MkpYdZItn6U94zruAz8K93/view?usp=drive_link",
       "https://drive.google.com/file/d/1R8wzJ85XWc0GQcsHsON_HUU3Qkt5Pb2t/view?usp=drive_link",
      
  ],
      demoUrl: "",  
      // githubUrl: "https://github.com/you/repo",       
      files: {
        // database: "https://drive.google.com/file/d/XXXXX/view",
        sourceCode: "https://drive.google.com/file/d/1sqHGPlobsMKRjhXUjjdrwH2bJZHz68lO/view?usp=drive_link",
        report: "https://docs.google.com/document/d/1nypnqVOt683FOzhQkagV4DzKzwUudLEY/edit?usp=drive_link&ouid=104288118438468355829&rtpof=true&sd=true",
        ppt: "https://docs.google.com/presentation/d/1LlODiYnSc8dGqpnV4RVvBRj-fjf8Lts0/edit?usp=drive_link&ouid=104288118438468355829&rtpof=true&sd=true",
        synopsis: "https://docs.google.com/document/d/1PT4AJT5ZzPxN7qewiYqoyls3SoFsjal2/edit?usp=drive_link&ouid=104288118438468355829&rtpof=true&sd=true",
        documentation: "https://drive.google.com/drive/folders/1-EiNrvUdZ14YS9K6FKicwPo5tWkLetXw?usp=drive_link",
        vivaQuestions: "https://docs.google.com/document/d/1BQ55CHHUYGHXMhsfWAmEVxQHVsDwubTV/edit?usp=drive_link&ouid=104288118438468355829&rtpof=true&sd=true",
        },
    
  },
  {
    id: "p-4",
    slug: "banking-management-system-java",
    title: "Banking Management System",
    shortDescription: "A console-based banking system built in core Java.",
    fullDescription:   "A console-based banking management application designed to simulate basic banking operations in a simple and organized way. The system allows users to manage customer accounts, perform common banking transactions and maintain account information using file-based data storage. Built with Java and file handling concepts, the project provides a practical demonstration of object-oriented programming, data management and transaction-based operations.",
      category: "java",
    technologies: ["Java", "File I/O"],
    projectType: "mini",
    difficulty: "beginner",
    features: [
      "Create and manage customer bank accounts",
      "View and manage account information",
      "Deposit money into customer accounts",
      "Withdraw money from customer accounts",
      "Check account balance",
      "Search and access customer account records",
      "Maintain banking data using file handling",
      "Store and retrieve account information locally",
      "Perform basic banking transactions through a menu-driven interface",
      "Simple console-based user interface",
      "Demonstrates Java OOP and file handling concepts",
    ],
    isFree: true,
    createdAt: "2026-03-02",
    updatedAt: "2026-03-02",
    isDemo: true,
    screenshots: [
      "https://drive.google.com/file/d/1gWg5S7Uw28qjH71V5HHdYgFz-Bf32gR_/view?usp=drive_link",
      "https://drive.google.com/file/d/11epwRJYfDCQgG5IbZDf9VsiW8RNRlK7M/view?usp=drive_link",
    ],

    demoUrl: "",
    // githubUrl: "https://github.com/you/repo",
    files: {
      // database: "https://drive.google.com/file/d/XXXXX/view",
      sourceCode: "https://drive.google.com/file/d/1MWruiEnUfd5cSH8gpxuFD3FKIUW0O_Nm/view?usp=drive_link",
      report: "https://docs.google.com/document/d/1r8GUle1SV4PgTLL7e09o4M4OGpUilQYr/edit?usp=drive_link&ouid=104288118438468355829&rtpof=true&sd=true",
      ppt: "https://docs.google.com/presentation/d/1WWQNqzNEhYCNnfx1drdCAktiyfAkQre8/edit?usp=drive_link&ouid=104288118438468355829&rtpof=true&sd=true",
      synopsis: "https://docs.google.com/document/d/1siXLZ1rhRSAaCyAJaS957FXXb0VkWmmy/edit?usp=drive_link&ouid=104288118438468355829&rtpof=true&sd=true",
      documentation: "https://drive.google.com/drive/folders/1eDSirBiHPvmIQFdN8ZvOPyB-Udyc_sh6?usp=drive_link",
      vivaQuestions: "https://docs.google.com/document/d/1YBCFQvAqvA-kTxXR_mlT6lJo_ika2cN4/edit?usp=drive_link&ouid=104288118438468355829&rtpof=true&sd=true",
    },
  },
  {
    id: "p-5",
    slug: "notes-app-android",
    title: "Notes App",
    shortDescription: "A simple Android notes app with local storage.",
    fullDescription:
      "An Android application for creating, editing and deleting notes, storing them locally on-device with a clean Material-style UI.",
    category: "android",
    technologies: ["Kotlin", "Room Database"],
    projectType: "mini",
    difficulty: "beginner",
    features: ["Create/edit/delete notes", "Local persistence", "Search notes"],
    isFree: true,
    createdAt: "2026-02-14",
    updatedAt: "2026-02-14",
    isDemo: true,
    screenshots: [],
    
    demoUrl: "",
    
    // githubUrl: "https://github.com/you/repo",
    
    files: {
      // database: "https://drive.google.com/file/d/XXXXX/view",
      sourceCode: "",
      report: "",
      ppt: "",
      synopsis: "",
      documentation: "",
      vivaQuestions: "",
    },
  },
  {
    id: "p-6",
    slug: "password-strength-analyzer",
    title: "Password Strength Analyzer",
    shortDescription: "A tool that scores password strength and suggests improvements.",
    fullDescription:
       "A client-side web application designed to analyze the strength and security level of passwords in real time. The application evaluates the entered password based on factors such as length, character variety and overall complexity, then provides a clear strength indication to help users understand whether their password is weak or strong. Built using HTML, CSS and JavaScript, the project provides a simple and interactive way to demonstrate basic password security concepts.",
    category: "cyber-security",
    technologies: ["JavaScript", "HTML", "CSS"],
    projectType: "mini",
    difficulty: "beginner",
    features: [
      "Real-time password strength analysis",
      "Evaluate password length and complexity",
      "Check use of uppercase and lowercase characters",
      "Check use of numbers and special characters",
      "Display password strength level clearly",
      "Provide visual feedback while entering a password",
      "Client-side password analysis without server storage",
      "Simple and interactive user interface",
      "Responsive web design",
      "Built using HTML, CSS and JavaScript",
    ],
    isFree: true,
    createdAt: "2026-01-20",
    updatedAt: "2026-01-20",
    isDemo: true,
    screenshots: [
      "https://drive.google.com/file/d/18fumv9zrZqkee98xj38Sg0MLl6mM_5EW/view?usp=drive_link",
      "https://drive.google.com/file/d/14gSXKpGlfMRNjt720fGiv93209B4Ze45/view?usp=drive_link",
    ],
    
    demoUrl: "",
    
    // githubUrl: "https://github.com/you/repo",
    
    files: {
      // database: "https://drive.google.com/file/d/XXXXX/view",
      sourceCode: "https://drive.google.com/file/d/1mDB4NvGB1CMGFygcX1RyjN044_ciiPFQ/view?usp=drive_link",
      report: "https://docs.google.com/document/d/1QND-0xujVEmg0yPeDv4dTXk_UNVEwcaE/edit?usp=drive_link&ouid=104288118438468355829&rtpof=true&sd=true",
      ppt: "https://docs.google.com/presentation/d/1sOEVLbz_24ccvS6mcG4RjdA6d-7Clj45/edit?usp=drive_link&ouid=104288118438468355829&rtpof=true&sd=true",
      synopsis: "https://docs.google.com/document/d/1vKjNDGJnt181hWoJRajlwTpkjeKIOzbx/edit?usp=drive_link&ouid=104288118438468355829&rtpof=true&sd=true",
      documentation: "https://drive.google.com/drive/folders/1lEIeRhQYGHXVIBxEw15e1S3g_OZVwJg4?usp=drive_link",
      vivaQuestions: "https://docs.google.com/document/d/1cffNmNbFPV03atPNbVYr1SCUXhMjDnCX/edit?usp=drive_link&ouid=104288118438468355829&rtpof=true&sd=true",
    },
  },
  // {
  //   id: "p-7",
  //   slug: "smart-attendance-iot",
  //   title: "Smart Attendance System",
  //   shortDescription: "An RFID-based attendance system using a microcontroller.",
  //   fullDescription:
  //     "An IoT-based attendance system where students tap an RFID card at a reader connected to a microcontroller, which logs attendance to a connected system.",
  //   category: "iot",
  //   technologies: ["Arduino", "RFID Module", "C++"],
  //   projectType: "major",
  //   difficulty: "intermediate",
  //   features: ["RFID-based check-in", "Real-time logging", "Basic dashboard view"],
  //   isFree: false,
  //   createdAt: "2026-07-01",
  //   updatedAt: "2026-07-01",
  //   isDemo: true,
  //   screenshots: [],
    
  //   demoUrl: "",
    
  //   // githubUrl: "https://github.com/you/repo",
    
  //   files: {
  //     // database: "https://drive.google.com/file/d/XXXXX/view",
  //     sourceCode: "",
  //     report: "",
  //     ppt: "",
  //     synopsis: "",
  //     documentation: "",
  //     vivaQuestions: "",
  //   },
  // },

  {
  id: "p-13",
  slug: "college-management-system",
  title: "College Management System",

  shortDescription:
    "A full-stack college management and information system for managing students, faculty, courses, attendance, examinations, results, assignments, library operations and college information.",

  fullDescription:
    "A full-stack College Management System designed as an intermediate-level academic project for BCA students. The system combines a public college website with role-based management portals for administrators, faculty members, students and librarians. It provides modules for student and faculty management, departments, courses, subjects, attendance, marks and results, examination schedules, assignments and submissions, library book management, book issue and return, notices, events, admissions and notifications. The application uses a React-based frontend, Node.js and Express.js backend, JWT-based authentication and a MySQL relational database, providing a practical demonstration of full-stack web development, REST APIs, authentication, database management and role-based access control.",

  category: "web-development",

  technologies: [
    "React.js",
    "Vite",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MySQL",
    "REST API",
    "JWT",
    "HTML5",
    "CSS3"
  ],

  projectType: "major",

  difficulty: "intermediate",

  features: [
    "Responsive public college website",
    "College home page with announcements and highlights",
    "About college and institution information",
    "Mission, vision and principal information",
    "Department and course information",
    "Faculty directory and faculty profiles",
    "College notice and announcement management",
    "College events management",
    "Student admission management",
    "Student profile and academic information management",
    "Faculty management",
    "Department management",
    "Course and subject management",
    "Role-based authentication and authorization",
    "Admin dashboard with college statistics",
    "Faculty dashboard",
    "Student dashboard",
    "Librarian dashboard",
    "Student attendance management",
    "Subject-wise attendance tracking",
    "Attendance percentage calculation",
    "Internal and external marks management",
    "Subject-wise student results",
    "Grade and result management",
    "Examination schedule management",
    "Student examination schedule",
    "Assignment creation and management",
    "Assignment submission and tracking",
    "Library book management",
    "Book search and availability tracking",
    "Book issue and return management",
    "Automatic library fine calculation",
    "Student library records",
    "Notice management with attachments",
    "Event management",
    "Gallery and college media management structure",
    "Dashboard notifications",
    "Student, faculty and book search and filtering",
    "Student report generation",
    "CSV data export",
    "RESTful backend API",
    "JWT-based secure authentication",
    "Password hashing",
    "Protected frontend and backend routes",
    "Role-based access control",
    "Relational MySQL database",
    "Demo database with sample college data",
    "Responsive design for desktop, tablet and mobile",
    "Local development support",
    "Vercel-ready frontend architecture"
  ],

  isFree: false,

  createdAt: "2026-10-04",
  updatedAt: "2026-10-04",

  isDemo: true,

  screenshots: [
      "",
  ],

  demoUrl: "",

  // githubUrl: "https://github.com/you/repo",

  files: {
    // database: "https://drive.google.com/file/d/XXXXX/view",

    sourceCode: "",
    report: "",
    ppt: "",
    synopsis: "",
    documentation: "",
    vivaQuestions: "",
  },
},
      {
  id: "p-11",
  slug: "personal-portfolio-website",
  title: "Personal Portfolio Website",

  shortDescription:
    "A modern responsive portfolio website to showcase personal profile, skills, projects and experience with multiple visual themes.",

  fullDescription:
    "A modern and responsive personal portfolio website designed to present a developer's profile, skills, projects, experience and contact information in a professional and visually appealing way. The website includes a polished home section, about section, skills showcase, project portfolio, experience and education timeline, and contact section. It also provides four selectable visual themes, responsive navigation, smooth scrolling and scroll-based animations. Built using HTML5, CSS3 and vanilla JavaScript, the project is lightweight, easy to customize and suitable for students, developers and professionals who want to create their own personal portfolio website.",

  category: "web-development",

  technologies: [
    "HTML5",
    "CSS3",
    "JavaScript"
  ],

  projectType: "mini",

  difficulty: "beginner",

  features: [
    "Modern and responsive personal portfolio design",
    "Professional home and hero section",
    "Personal introduction and about section",
    "Skills section with skill proficiency indicators",
    "Projects showcase with project details",
    "Experience and education timeline",
    "Contact section with email interaction",
    "Four selectable website themes",
    "Midnight, Paper, Aurora and Sunset themes",
    "Theme preference saved using localStorage",
    "Responsive navigation for mobile, tablet and desktop",
    "Smooth scrolling between website sections",
    "Scroll-based reveal animations",
    "Clean and customizable HTML, CSS and JavaScript code",
    "No backend or database required",
    "Easy to run directly in a web browser",
    "Suitable for students, developers and professionals"
  ],

  isFree: false,

  createdAt: "2025-10-04",
  updatedAt: "2025-10-04",

  isDemo: false,

  screenshots: [
      "https://drive.google.com/file/d/1GXAXuX0mVUWi-7Z5UbC7qdTdZj2eq5Px/view?usp=drive_link",
  ],

  demoUrl: "https://portfolio-topaz-omega-63.vercel.app/",

  // githubUrl: "https://github.com/you/repo",

  files: {
    // database: "https://drive.google.com/file/d/XXXXX/view",

    sourceCode: "",
    report: "",
    ppt: "",
    synopsis: "",
    documentation: "",
    vivaQuestions: "",
  },
},
      {
  id: "p-12",
  slug: "talksta-social-discussion-platform",
  title: "TalkSta - Social Discussion & Messaging Platform",

  shortDescription:
    "A PHP and MySQL based social discussion platform where users can create accounts, participate in discussions, comment on topics, connect with other users and communicate through messaging features.",

  fullDescription:
    "TalkSta is a PHP and MySQL based social discussion and communication platform designed to provide users with a place to create profiles, start discussion topics, participate in conversations, comment on threads, search discussions and interact with other users. The platform includes user registration and login, email verification, password recovery, profile management, user following, discussion threads, comments, search functionality, reporting features, file and image handling, direct messaging and a basic chat interface. User profiles can contain personal information, profile images and external social links, while the discussion system allows users to create and interact with topic-based content. The project uses PHP, MySQL, Bootstrap and PHPMailer and demonstrates practical concepts of authentication, database-driven web applications, user-generated content and communication features.",

  category: "web-development",

  technologies: [
    "PHP",
    "MySQL",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Bootstrap",
    "PHPMailer"
  ],

  projectType: "major",

  difficulty: "intermediate",

  features: [
    "User registration and account creation",
    "User login and logout",
    "Email verification during account registration",
    "Forgot password functionality",
    "Email-based password reset",
    "User profile creation",
    "Profile image upload and management",
    "Profile information editing",
    "Public user profile pages",
    "Username-based profile URLs",
    "Display of user name and profile information",
    "Optional email visibility control",
    "External social profile links",
    "User following functionality",
    "Following list",
    "Discussion thread creation",
    "Discussion topic title and description",
    "User-generated discussion content",
    "Thread and topic viewing",
    "Comment functionality",
    "User interaction through discussion threads",
    "Discussion search functionality",
    "Search results pagination",
    "Search term highlighting",
    "Content reporting functionality",
    "User messaging functionality",
    "Basic real-time-style chat interface",
    "Message storage using MySQL",
    "AJAX/fetch-based message loading",
    "Automatic chat message refresh",
    "File and image upload functionality",
    "Uploaded image listing",
    "Image download functionality",
    "Profile-based content display",
    "Session-based authentication",
    "MySQL database integration",
    "Prepared statements for selected database operations",
    "Bootstrap-based responsive interface",
    "PHPMailer SMTP email integration",
    "Password recovery through email links",
    "User-generated social and discussion platform"
  ],

  isFree: false,

  createdAt: "2024-10-04",
  updatedAt: "2024-10-04",

  isDemo: false,

  screenshots: [],

  demoUrl: "https://talksta.is-best.net",

  // githubUrl: "https://github.com/you/repo",

  files: {
    // database: "https://drive.google.com/file/d/XXXXX/view",

    sourceCode: "",
    report: "",
    ppt: "",
    synopsis: "",
    documentation: "",
    vivaQuestions: "",
  },
}
      
];
