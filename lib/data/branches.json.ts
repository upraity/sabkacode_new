import { Branch } from "@/types";

// DEMO DATA — branches are database-driven, not hardcoded into any page.
// `courseSlug` + `universitySlug` scope which branches apply where.
export const branchLinks: {
  courseSlug: string;
  universitySlug: string;
  branch: Branch;
}[] = [
  {
    courseSlug: "btech",
    universitySlug: "aktu",
    branch: { id: "b-cse", slug: "cse", name: "Computer Science & Engineering" },
  },
  {
    courseSlug: "btech",
    universitySlug: "aktu",
    branch: { id: "b-it", slug: "it", name: "Information Technology" },
  },
  {
    courseSlug: "btech",
    universitySlug: "aktu",
    branch: { id: "b-ece", slug: "ece", name: "Electronics & Communication Engineering" },
  },
  {
    courseSlug: "btech",
    universitySlug: "aktu",
    branch: { id: "b-me", slug: "me", name: "Mechanical Engineering" },
  },
  {
    courseSlug: "btech",
    universitySlug: "vtu",
    branch: { id: "b-cse-vtu", slug: "cse", name: "Computer Science & Engineering" },
  },
];
