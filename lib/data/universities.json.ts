import { University } from "@/types";

// Universities actually covered by SabkaCode's original content, migrated
// from the previous site. CCSU is referenced on the original About/Contact
// pages but had no notes content yet, so it's listed as "coming-soon".
export const universities: University[] = [
  {
    id: "u-aktu",
    slug: "aktu",
    name: "Dr. A.P.J. Abdul Kalam Technical University",
    shortName: "AKTU",
    description: "A state technical university based in Lucknow, Uttar Pradesh.",
    location: "Lucknow, Uttar Pradesh",
    websiteUrl: "https://aktu.ac.in",
    status: "active",
  },
  {
    id: "u-dbrau",
    slug: "dbrau",
    name: "Dr. Bhimrao Ambedkar University",
    shortName: "DBRAU",
    description: "A state university based in Agra, Uttar Pradesh, offering BCA and other programmes.",
    location: "Agra, Uttar Pradesh",
    status: "active",
  },
  {
    id: "u-csjmu",
    slug: "csjmu",
    name: "Chhatrapati Shahu Ji Maharaj University",
    shortName: "CSJMU",
    description: "A state university based in Kanpur, Uttar Pradesh, offering BCA and other programmes.",
    location: "Kanpur, Uttar Pradesh",
    status: "active",
  },
  {
    id: "u-ccsu",
    slug: "ccsu",
    name: "Chaudhary Charan Singh University",
    shortName: "CCSU",
    description: "A state university based in Meerut, Uttar Pradesh.",
    location: "Meerut, Uttar Pradesh",
    status: "coming-soon",
  },
];
