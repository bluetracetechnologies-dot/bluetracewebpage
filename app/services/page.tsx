import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { GlassCard } from "@/components/GlassCard";
import { MotionReveal } from "@/components/MotionReveal";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI solutions, embedded systems, IoT platforms, SaaS development, cloud infrastructure and automation — engineered by Bluetrace Technologies.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            Engineering services across the{" "}
            <span className="gradient-text">modern stack</span>
          </>
        }
        description="From early-stage prototypes to enterprise rollouts — Bluetrace partners with teams to design, build and operate intelligent software systems."
      />

      <section className="section pt-0">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <MotionReveal key={s.slug} delay={i * 0.03}>
                  <GlassCard className="h-full p-6">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-cyan/20 via-brand-electric/20 to-brand-purple/20 text-brand-cyan ring-1 ring-white/10">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">
                      {s.description}
                    </p>
                    <ul className="mt-5 space-y-1.5 text-xs text-white/60">
                      {s.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
