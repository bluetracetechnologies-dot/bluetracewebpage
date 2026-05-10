"use client";

import { Zap, Cpu, Lock, Users, LineChart, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { MotionReveal } from "@/components/MotionReveal";

const reasons = [
  {
    icon: Zap,
    title: "Fast prototyping",
    body: "From spec to working bench prototype in days — schematic, breadboard or dev-board build, firmware sketch and bring-up handled in-house.",
  },
  {
    icon: Cpu,
    title: "Manufacturing-ready PCB",
    body: "DFM-checked schematics, Gerbers, BOM and assembly drawings — boards engineered to be ordered, populated and shipped without rework.",
  },
  {
    icon: Lock,
    title: "NDA-safe development",
    body: "Mutual NDAs, isolated repos, signed builds and IP-clean handover. Your designs and firmware remain yours, fully transferred on closeout.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-grade engineering",
    body: "Security, observability and resilience are first-class on every cloud, SaaS and AI platform we ship — not afterthoughts.",
  },
  {
    icon: Users,
    title: "Senior-only delivery",
    body: "Engineers, designers and architects who have shipped at scale own your project end-to-end — no juniors hidden behind a brand.",
  },
  {
    icon: LineChart,
    title: "Built to scale",
    body: "Systems designed for 100x — load tested, instrumented and cost-aware from day one, whether on-device or in the cloud.",
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
              The advantages of working with{" "}
              <span className="gradient-text">our team</span>
            </>
          }
          description="We are intentionally small, deeply technical and built to deliver outcomes — not deliverables."
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
