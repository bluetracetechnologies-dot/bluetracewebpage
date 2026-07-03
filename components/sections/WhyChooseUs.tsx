"use client";

import { Zap, Cpu, Lock, Users, LineChart, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { MotionReveal } from "@/components/MotionReveal";

const reasons = [
  {
    icon: Zap,
    title: "Practical engineering approach",
    body: "From spec to working bench prototype in days — schematic, breadboard or dev-board build, firmware sketch and bring-up handled in-house.",
  },
  {
    icon: Cpu,
    title: "Hardware + firmware + software capability",
    body: "One team can review hardware, implement firmware, and deliver cloud or dashboard layers so execution does not fragment across vendors.",
  },
  {
    icon: Lock,
    title: "Startup-friendly execution",
    body: "We work with prototype realities, budget limits, and evolving requirements while keeping delivery disciplined and transparent.",
  },
  {
    icon: ShieldCheck,
    title: "Prototype to deployment support",
    body: "From architecture and board bring-up to deployment and handover, we keep projects moving through each stage with practical milestones.",
  },
  {
    icon: Users,
    title: "International and local client readiness",
    body: "Our communication and process fit global startups as well as Indian schools, hospitals, and local businesses.",
  },
  {
    icon: LineChart,
    title: "Outcome-focused planning",
    body: "We map each engagement to clear deliverables, risk checkpoints, and technical next steps so decisions are fast and informed.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why Bluetrace"
          title={
            <>
              Why clients choose <span className="gradient-text">Bluetrace</span>
            </>
          }
          description="Trusted engineering delivery for embedded products, IoT systems, and automation initiatives."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <MotionReveal key={r.title} delay={i * 0.04}>
                <div className="glass glass-hover h-full rounded-2xl p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-cyan/20 via-brand-electric/20 to-brand-purple/20 text-brand-cyan ring-1 ring-white/10">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-base font-semibold text-white">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {r.body}
                  </p>
                </div>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
