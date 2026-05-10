import type { ReactNode } from "react";

export function LegalContent({ children }: { children: ReactNode }) {
  return (
    <div className="prose-legal mx-auto max-w-3xl text-white/75">
      {children}
    </div>
  );
}

LegalContent.Section = function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-xl font-semibold text-white md:text-2xl">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed md:text-base">
        {children}
      </div>
    </section>
  );
};
