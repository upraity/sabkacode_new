import { Mail, MessageCircle, Send, Linkedin, Instagram, Twitter, Facebook, Github } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us",
  description: "Get in touch with the SabkaCode team via WhatsApp, Telegram, email or social media.",
  path: "/contact",
});

const channels = [
  { label: "WhatsApp Channel", sub: "Updates, new papers & announcements", href: "https://chat.whatsapp.com/JUE7O4DHVC2DnqYj6hLfug", icon: MessageCircle },
  { label: "Telegram", sub: "@sabkacode", href: "https://t.me/sabkacode", icon: Send },
  { label: "LinkedIn", sub: "SabkaCode", href: "https://www.linkedin.com/in/sabkacode/", icon: Linkedin },
  { label: "Instagram", sub: "@sabkacode", href: "https://instagram.com/sabkacode", icon: Instagram },
  { label: "X (Twitter)", sub: "@sabkacode", href: "https://x.com/sabkacode", icon: Twitter },
  { label: "Facebook", sub: "SabkaCode", href: "https://facebook.com/share/18CZX8i4gd", icon: Facebook },
  { label: "GitHub", sub: "upraity", href: "https://github.com/upraity", icon: Github },
];

const faqs = [
  {
    q: "Are all notes and papers free?",
    a: "Yes! Everything on SabkaCode — notes, previous papers, and exam solutions — is 100% free with no registration required.",
  },
  {
    q: "Which universities are covered?",
    a: "Currently AKTU, CSJMU, DBRAU and CCSU are covered. More universities are being added regularly.",
  },
  {
    q: "How do I request content removal?",
    a: 'Send an email to sabkacode@gmail.com with the subject "Copyright / Content Removal". We will take action within 24–48 hours.',
  },
  {
    q: "Can I suggest new content?",
    a: "Absolutely! Send us a message on WhatsApp or Telegram. We welcome all suggestions from students.",
  },
  {
    q: "How can I collaborate with SabkaCode?",
    a: "For collaboration or partnership enquiries, send an email to sabkacode@gmail.com and we will get back to you.",
  },
  {
    q: "How long does it take to get a reply?",
    a: "We aim to reply on social media within 2–6 hours and respond to emails within 24–48 hours on working days.",
  },
];

export default function ContactPage() {
  return (
    <Section>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />

      <div className="text-center">
        <p className="text-sm font-semibold text-brand-600">✦ Get in Touch</p>
        <h1 className="mt-2 text-2xl sm:text-3xl font-bold text-ink-900">We&apos;re Here to Help You</h1>
        <p className="mx-auto mt-3 max-w-xl text-ink-500">
          Have a question, suggestion, or feedback? Reach out to us on any platform — we respond
          quickly and are happy to help.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="rounded-card border border-ink-100 bg-white p-4 text-center shadow-card">
          <p className="font-semibold text-ink-900">Social Media Response</p>
          <p className="text-sm text-ink-500">Within 2–6 Hours</p>
        </div>
        <div className="rounded-card border border-ink-100 bg-white p-4 text-center shadow-card">
          <p className="font-semibold text-ink-900">Email Response</p>
          <p className="text-sm text-ink-500">Within 24–48 Hours</p>
        </div>
        <div className="rounded-card border border-ink-100 bg-white p-4 text-center shadow-card">
          <p className="font-semibold text-ink-900">Content Removal</p>
          <p className="text-sm text-ink-500">Within 48 Hours</p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-lg font-semibold text-ink-900">Connect Directly</h2>
        <p className="mt-1 text-ink-500">
          Choose your preferred platform — we are active on all of them and respond promptly.
        </p>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-card border border-ink-100 bg-white p-4 shadow-card hover:border-brand-300"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                <c.icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="truncate font-medium text-ink-900">{c.label}</p>
                <p className="truncate text-sm text-ink-500">{c.sub}</p>
              </div>
            </a>
          ))}
          <a
            href="mailto:sabkacode@gmail.com"
            className="flex items-center gap-3 rounded-card border border-ink-100 bg-white p-4 shadow-card hover:border-brand-300"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-600">
              <Mail className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="truncate font-medium text-ink-900">Email Us</p>
              <p className="truncate text-sm text-ink-500">sabkacode@gmail.com</p>
            </div>
          </a>
        </div>
      </div>

      <div className="mt-14">
        <h2 className="text-lg font-semibold text-ink-900">Frequently Asked Questions</h2>
        <p className="mt-1 text-ink-500">Quick answers to the most common questions we receive.</p>
        <div className="mt-4 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-card border border-ink-100 bg-white p-4 shadow-card">
              <summary className="cursor-pointer list-none font-medium text-ink-900">{f.q}</summary>
              <p className="mt-2 text-sm text-ink-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
