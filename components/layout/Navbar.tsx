import Link from "next/link";
import { CodeXml } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/notes", label: "Notes" },
  { href: "/papers", label: "Papers" },
  { href: "/projects", label: "Projects" },
  { href: "/tools", label: "Tools" },
  
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-white/90 backdrop-blur">
      <Container className="relative flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-ink-900">
          <CodeXml className="h-5 w-5 text-brand-600" />
          <span>SabkaCode</span>
        </Link>

        <nav className="hidden sm:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-ink-600 hover:bg-ink-50 hover:text-ink-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <MobileMenu />
      </Container>
    </header>
  );
}
