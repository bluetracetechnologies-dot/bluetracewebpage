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
          eyebrow="What we do"
          title={
            <>
              Engineering services for{" "}
              <span className="gradient-text">ambitious teams</span>
            </>
          }
          description="From AI platforms to cloud infrastructure — we ship software that performs at scale and looks the part."
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
                      <p className="mt-2 text-sm leading-relaxed text-white/65">
                        {s.description}
                      </p>
                    </div>
                  </div>
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
