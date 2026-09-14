import Link from "next/link";
import { CodeXml } from "lucide-react";
import { Container } from "@/components/ui/Container";

const columns: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Platform",
    links: [
      { href: "/", label: "Home" },
      { href: "/courses", label: "Courses" },
      { href: "/projects", label: "Projects" },
      { href: "/notes", label: "Notes" },
      { href: "/tools", label: "Tools" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/universities", label: "Universities" },
      { href: "/notes", label: "Subjects" },
      { href: "/notes", label: "PYQs" },
      { href: "/notes", label: "Question Banks" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-ink-50/50">
      <Container className="py-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-semibold text-ink-900">
              <CodeXml className="h-5 w-5 text-brand-600" />
              <span>SabkaCode</span>
            </Link>
            <p className="mt-3 text-sm text-ink-500">
              Notes, projects, previous year papers and useful tools for students.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-ink-900">{col.title}</h3>
              <ul className="mt-3 space-y-2">
                {col.links.map((link, i) => (
                  <li key={`${link.href}-${i}`}>
                    <Link href={link.href} className="text-sm text-ink-500 hover:text-brand-600">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-ink-100 pt-6 text-xs text-ink-400">
          © {new Date().getFullYear()} SabkaCode. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
