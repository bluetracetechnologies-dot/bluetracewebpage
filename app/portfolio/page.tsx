import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { MotionReveal } from "@/components/MotionReveal";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { caseStudies } from "@/lib/lead";

export const metadata: Metadata = {
  title: "Portfolio / Case Studies",
  description:
    "Portfolio and case studies from Bluetrace Technologies across BLE wearable monitoring, ESP32 energy systems, PCB review, and automation concepts.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title={
          <>
            Case studies, prototypes, and <span className="gradient-text">concept work</span>
          </>
        }
        description="Truthful project summaries with clear status labels. Items marked concept/prototype/case study placeholder are intentionally identified as such."
      />

      <section className="section pt-0">
        <div className="container-page grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((study, i) => (
            <MotionReveal key={study.slug} delay={i * 0.03}>
              <article className="glass glass-hover h-full rounded-2xl p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                  {study.status}
                </p>
                <h2 className="mt-3 font-display text-xl font-semibold text-white">{study.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{study.summary}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
                  Technology used
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {study.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/75"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link href="/contact" className="btn-ghost mt-6 w-full justify-center">
                  Request Similar Project <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            </MotionReveal>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
