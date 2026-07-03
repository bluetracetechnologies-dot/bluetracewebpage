"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";
import { MotionReveal } from "@/components/MotionReveal";

export function ServicesOverview() {
  const featured = services.slice(0, 6);

  return (
    <section id="services" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Core Services"
          title={
            <>
              Engineering services for <span className="gradient-text">products and automation</span>
            </>
          }
          description="Hardware, firmware, IoT, AI automation, and software delivery organized around clear problems, practical technologies, and real deliverables."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((s, i) => {
            const Icon = s.icon;
            return (
              <MotionReveal key={s.slug} delay={i * 0.05}>
                <GlassCard className="h-full p-6">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-cyan/20 via-brand-electric/20 to-brand-purple/20 text-brand-cyan ring-1 ring-white/10">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/70">
                        {s.description}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-xs uppercase tracking-[0.16em] text-white/45">
                    Problem solved
                  </p>
                  <p className="mt-2 text-sm text-white/65">{s.problemSolved}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.technologies.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/70"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <Link href="/contact" className="btn-ghost mt-5 w-full justify-center">
                    {s.ctaLabel}
                  </Link>
                </GlassCard>
              </MotionReveal>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/services" className="btn-ghost">
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
