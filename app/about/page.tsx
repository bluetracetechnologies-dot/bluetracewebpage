import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Vision } from "@/components/sections/Vision";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { GlassCard } from "@/components/GlassCard";
import { MotionReveal } from "@/components/MotionReveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bluetrace Technologies is an engineering-first company building AI platforms, embedded electronics, IoT infrastructure and scalable digital products for modern businesses and startups.",
  alternates: { canonical: "/about" },
};

const stats = [
  { k: "Founded", v: String(siteConfig.legal.foundingYear) },
  { k: "HQ", v: "Parbhani · India" },
  { k: "Focus", v: "AI · Embedded · IoT" },
  { k: "Engagements", v: "Senior-only teams" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Bluetrace"
        title={
          <>
            An engineering-first technology company.
          </>
        }
        description="Bluetrace Technologies Private Limited is on a mission to build the intelligent digital infrastructure that powers the next generation of products."
      />

      <section className="section pt-0">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
            {stats.map((s, i) => (
              <MotionReveal key={s.k} delay={i * 0.04}>
                <GlassCard className="p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                    {s.k}
                  </p>
                  <p className="mt-2 font-display text-lg font-semibold text-white">
                    {s.v}
                  </p>
                </GlassCard>
              </MotionReveal>
            ))}
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            <MotionReveal>
              <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
                Who we are
              </h2>
              <p className="mt-4 text-white/70">
                Bluetrace is a small, deeply technical team focused on building
                durable systems — across software and hardware. We pair the
                discipline of enterprise engineering with the speed of a modern
                startup, shipping AI platforms, embedded electronics, IoT
                infrastructure and digital products that scale.
              </p>
              <p className="mt-4 text-white/70">
                We work alongside founders, product leaders and engineering
                executives — owning architecture, delivery and operations end-to-end.
              </p>
            </MotionReveal>
            <MotionReveal delay={0.05}>
              <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
                What we believe
              </h2>
              <ul className="mt-4 space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-cyan" />
                  Software is infrastructure — design it for ten years, not ten weeks.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-electric" />
                  AI is a substrate, not a feature — build it into the core of the system.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-purple" />
                  Small senior teams ship better systems than large generalist ones.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-cyan" />
                  Quality compounds — boring fundamentals win in the long run.
                </li>
              </ul>
            </MotionReveal>
          </div>

          <div className="mt-14">
            <MotionReveal>
              <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
                Leadership
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
                {siteConfig.directors.map((d, i) => (
                  <MotionReveal key={d.name} delay={i * 0.05}>
                    <GlassCard className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-brand-electric/30 to-brand-purple/30 ring-1 ring-white/10">
                          <span className="font-display text-base font-bold text-white">
                            {d.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .replace(/\./g, "")
                              .slice(0, 2)}
                          </span>
                        </div>
                        <div>
                          <p className="font-display text-base font-semibold text-white">
                            {d.name}
                          </p>
                          <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                            {d.role}
                          </p>
                        </div>
                      </div>
                    </GlassCard>
                  </MotionReveal>
                ))}
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      <Vision />
      <WhyChooseUs />
      <ContactCTA />
    </>
  );
}
