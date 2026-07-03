import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { GlassCard } from "@/components/GlassCard";
import { MotionReveal } from "@/components/MotionReveal";
import { siteConfig } from "@/lib/site";
import { proofPoints } from "@/lib/lead";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Bluetrace Technologies Private Limited, an engineering and technology company focused on embedded systems, IoT, firmware, PCB, automation, and software solutions.",
  alternates: { canonical: "/about" },
};

const stats = [
  { k: "Founded", v: String(siteConfig.legal.foundingYear) },
  { k: "HQ", v: "Parbhani · India" },
  { k: "Focus", v: "Embedded · IoT · PCB · Automation" },
  { k: "Delivery", v: "Prototype to deployment" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Bluetrace"
        title={
          <>
            Engineering partner for connected products and automation systems.
          </>
        }
        description="Bluetrace Technologies Private Limited helps startups, schools, hospitals, and businesses ship reliable firmware, PCB, IoT, and software solutions."
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
                Company overview
              </h2>
              <p className="mt-4 text-white/70">
                Bluetrace Technologies Private Limited is an engineering and technology
                company focused on embedded systems, firmware, PCB design review,
                IoT device-to-cloud integration, and business automation software.
              </p>
              <p className="mt-4 text-white/70">
                Our approach combines practical hardware and firmware execution with
                scalable software implementation, making us a strong fit for both
                international product teams and Indian institutions.
              </p>
            </MotionReveal>
            <MotionReveal delay={0.05}>
              <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
                Engineering approach
              </h2>
              <ul className="mt-4 space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-cyan" />
                  Practical engineering decisions over flashy but fragile implementations.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-electric" />
                  Hardware + firmware + software capability under one execution flow.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-purple" />
                  Startup-friendly delivery with realistic timelines and scope control.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-cyan" />
                  Support from prototype and debugging through deployment readiness.
                </li>
              </ul>
            </MotionReveal>
          </div>

          <div className="mt-14">
            <MotionReveal>
              <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
                Credentials area
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                {proofPoints.map((item, i) => (
                  <MotionReveal key={item} delay={i * 0.05}>
                    <GlassCard className="p-6">
                      <p className="text-sm text-white/75">{item}</p>
                    </GlassCard>
                  </MotionReveal>
                ))}
              </div>
            </MotionReveal>

            <MotionReveal delay={0.06}>
              <h2 className="mt-14 font-display text-2xl font-bold text-white md:text-3xl">
                Founder and leadership
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
                {siteConfig.directors.map((d, i) => (
                  <MotionReveal key={d.name} delay={i * 0.05}>
                    <GlassCard className="p-6">
                      <p className="font-display text-base font-semibold text-white">{d.name}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/50">{d.role}</p>
                    </GlassCard>
                  </MotionReveal>
                ))}
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <ContactCTA />
    </>
  );
}
