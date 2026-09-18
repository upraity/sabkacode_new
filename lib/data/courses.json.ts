import { Course } from "@/types";

export const courses: Course[] = [
  {
    id: "c-btech",
    slug: "btech",
    name: "B.Tech",
    fullName: "Bachelor of Technology",
    description:
      "A 4-year undergraduate engineering degree covering branches like Computer Science, IT, Electronics and more.",
    hasBranches: true,
    totalSemesters: 8,
  },
  {
    id: "c-mtech",
    slug: "mtech",
    name: "M.Tech",
    fullName: "Master of Technology",
    description:
      "A postgraduate engineering degree focused on advanced technical knowledge, research and specialisation.",
    hasBranches: true,
    totalSemesters: 4,
  },
  {
    id: "c-bca",
    slug: "bca",
    name: "BCA",
    fullName: "Bachelor of Computer Applications",
    description:
      "A 3-year undergraduate degree focused on computer applications and programming.",
    hasBranches: false,
    totalSemesters: 6,
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
  },
  {
    id: "c-mcaint",
    slug: "mcaint",
    name: "MCA Integrated",
    fullName: "Integrated Master of Computer Applications",
    description:
      "An integrated undergraduate and postgraduate programme combining foundational and advanced computer applications.",
    hasBranches: false,
    totalSemesters: 10,
  },
  {
    id: "c-mba",
    slug: "mba",
    name: "MBA",
    fullName: "Master of Business Administration",
    description:
      "A postgraduate management degree covering finance, HR, marketing and operations.",
    hasBranches: false,
    totalSemesters: 4,
  },
  {
    id: "c-mbaint",
    slug: "mbaint",
    name: "MBA Integrated",
    fullName: "Integrated Master of Business Administration",
    description:
      "An integrated management programme combining undergraduate business education with postgraduate management studies.",
    hasBranches: false,
    totalSemesters: 10,
  },
  {
    id: "c-bpharm",
    slug: "bpharm",
    name: "B.Pharm",
    fullName: "Bachelor of Pharmacy",
    description:
      "A 4-year undergraduate degree in pharmaceutical sciences.",
    hasBranches: false,
    totalSemesters: 8,
  },
];
