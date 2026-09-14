import { ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  title?: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Section({ title, description, action, children, className = "" }: SectionProps) {
  return (
    <section className={`py-10 sm:py-12 ${className}`}>
      <Container>
        {(title || action) && (
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              {title && (
                <h2 className="text-xl sm:text-2xl font-semibold text-ink-900">{title}</h2>
              )}
              {description && <p className="mt-1 text-ink-500 text-sm sm:text-base">{description}</p>}
            </div>
            {action}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
