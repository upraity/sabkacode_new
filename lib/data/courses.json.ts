import { Course } from "@/types";

export const courses: Course[] = [
  // {
  //   id: "c-btech",
  //   slug: "btech",
  //   name: "B.Tech",
  //   fullName: "Bachelor of Technology",
  //   description:
  //     "A 4-year undergraduate engineering degree covering branches like Computer Science, IT, Electronics and more.",
  //   hasBranches: true,
  //   totalSemesters: 8,
  // },
  // {
  //   id: "c-mtech",
  //   slug: "mtech",
  //   name: "M.Tech",
  //   fullName: "Master of Technology",
  //   description:
  //     "A postgraduate engineering degree focused on advanced technical knowledge, research and specialisation.",
  //   hasBranches: true,
  //   totalSemesters: 4,
  // },
  {
    id: "c-bca",
    slug: "bca",
    name: "BCA",
    fullName: "Bachelor of Computer Applications",
    description:
      "A 3-year undergraduate degree focused on computer applications and programming.",
    hasBranches: false,
    totalSemesters: 6,
    longDescription: `BCA is a 3-year, 6-semester undergraduate degree built around programming and computer applications, without the broader engineering-maths load of a B.Tech. Early semesters cover C, C++ and mathematics fundamentals; the middle semesters move into data structures, DBMS, operating systems and computer networks; later semesters typically add web technologies, Java, and electives like AI, cyber security or data science depending on the university.
It's a common path into software development roles straight after graduation, or into an MCA for students who want to go deeper into computer science before entering the industry.`,
  
  },
  {
    id: "c-bba",
    slug: "bba",
    name: "BBA",
    fullName: "Bachelor of Business Administration",
    description:
      "An undergraduate degree focused on business administration, management and organisational practices.",
    hasBranches: false,
    totalSemesters: 6,
    longDescription: `BBA is a 3-year, 6-semester undergraduate management degree. It starts with broad foundations — principles of management, business communication, financial accounting, business mathematics and statistics — before introducing marketing, HR, and business law in the middle semesters.
Many BBA graduates go on to an MBA to specialise further (finance, HR, marketing, operations), while others move directly into entry-level management, sales, or operations roles, or into family businesses.`,
 
  },
  {
    id: "c-mca",
    slug: "mca",
    name: "MCA",
    fullName: "Master of Computer Applications",
    description:
      "A postgraduate degree for students aiming to specialise in computer applications.",
    hasBranches: false,
    totalSemesters: 4,
    longDescription: `MCA is a postgraduate computer applications degree, commonly run as a 2-year, 4-semester programme under the newer structure (some universities still follow an older 3-year format), typically taken after a BCA, B.Sc, or equivalent background.
It builds on undergraduate programming foundations with more advanced coursework — data structures, DBMS, software engineering, and specialisation electives — aimed at students heading into software development, systems design, or further research in computer science.`,
 
  },
  // {
  //   id: "c-mcaint",
  //   slug: "mcaint",
  //   name: "MCA Integrated",
  //   fullName: "Integrated Master of Computer Applications",
  //   description:
  //     "An integrated undergraduate and postgraduate programme combining foundational and advanced computer applications.",
  //   hasBranches: false,
  //   totalSemesters: 10,
  //   longDescription: `Integrated MCA combines the undergraduate and postgraduate computer applications curriculum into a single extended programme taken directly after Class 12 — skipping a separate bachelor's degree before the MCA.
//Early semesters cover the same programming and mathematics fundamentals as a BCA; later semesters move into advanced coursework without a break between degrees. Subject content here currently covers the first two semesters, with more being added.`,
  
  // },
  {
    id: "c-mba",
    slug: "mba",
    name: "MBA",
    fullName: "Master of Business Administration",
    description:
      "A postgraduate management degree covering finance, HR, marketing and operations.",
    hasBranches: false,
    totalSemesters: 4,
        longDescription: `MBA is a 2-year, 4-semester postgraduate management degree. The first year (semesters 1–2) covers common core subjects shared by every student — management concepts, managerial economics, accounting, business statistics, marketing and HR fundamentals — regardless of specialisation.
From the third semester, students pick a specialisation — common choices include Finance, HR, Marketing, Operations, IT, and International Business — and take electives built around it, alongside a mini/major project each semester.`,
  },
  // {
  //   id: "c-mbaint",
  //   slug: "mbaint",
  //   name: "MBA Integrated",
  //   fullName: "Integrated Master of Business Administration",
  //   description:
  //     "An integrated management programme combining undergraduate business education with postgraduate management studies.",
  //   hasBranches: false,
  //   totalSemesters: 10,
//       longDescription: `Integrated MBA combines undergraduate business education with postgraduate management study in a single extended programme taken directly after Class 12, rather than doing a BBA and MBA separately.
// The structure mirrors a BBA followed by an MBA without a break between the two — foundational business subjects early on, moving toward management specialisation later. Subject content here currently covers the first four semesters, with more being added.`,
 
  // },

//     {
//     id: "c-barch",
//     slug: "barch",
//     name: "B.Arch",
//     fullName: "Bachelor of Architecture",
//     description:
//       "An undergraduate professional degree in architecture, covering design, construction and architectural history.",
//     hasBranches: false,
//     // Only Semesters 1–4 have subject data so far — raise this once later
//     // semesters are added (B.Arch is typically a 5-year, 10-semester
//     // programme), so every visible semester tab has real content.
//     totalSemesters: 4,
//     longDescription: `B.Arch is a professional undergraduate architecture degree (typically 5 years in India), combining studio-based architectural design with construction technology, structures, building services, and the history of architecture.
// Each semester is built around a core Architectural Design studio subject, paired with construction & materials, structures, and drawing/graphics courses. Subject content here currently covers the first four semesters, with more being added.`,
//   },
  // {
  //   id: "c-bpharm",
  //   slug: "bpharm",
  //   name: "B.Pharm",
  //   fullName: "Bachelor of Pharmacy",
  //   description:
  //     "A 4-year undergraduate degree in pharmaceutical sciences.",
  //   hasBranches: false,
  //   totalSemesters: 8,
  // },
];
