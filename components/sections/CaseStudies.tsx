"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { caseStudies } from "@/lib/lead";

export function CaseStudies() {
  return (
    <section className="section" id="case-studies">
      <div className="container-page">
        <SectionHeading
          eyebrow="Case Studies"
          title={
            <>
              Engineering examples and <span className="gradient-text">delivery concepts</span>
            </>
          }
          description="Each card is labeled clearly as completed work, prototype, concept, or case-study placeholder to keep claims accurate."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((study, i) => (
            <MotionReveal key={study.slug} delay={i * 0.03}>
              <article className="glass glass-hover h-full rounded-2xl p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                  {study.status}
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold text-white">{study.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{study.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {study.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/portfolio" className="btn-ghost">
            View full portfolio page <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
