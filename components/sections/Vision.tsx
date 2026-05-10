"use client";

import { motion } from "framer-motion";
import { Compass, Rocket, Target } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const pillars = [
  {
    icon: Target,
    title: "Mission",
    body: "Build trustworthy intelligent infrastructure that compounds value for every team that depends on it.",
  },
  {
    icon: Compass,
    title: "Vision",
    body: "A digital economy where AI, automation and software are accessible building blocks — not luxuries.",
  },
  {
    icon: Rocket,
    title: "Approach",
    body: "Senior, opinionated teams. Modern stacks. Production discipline. Outcomes measured in shipped systems.",
  },
];

export function Vision() {
  return (
    <section className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our vision"
          title={
            <>
              A startup engineered like an{" "}
              <span className="gradient-text">enterprise</span>
            </>
          }
          description="Bluetrace is built around long-term technology bets — AI, embedded electronics, IoT infrastructure, and the digital platforms underneath modern products."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="glass glass-hover rounded-2xl p-7"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-cyan/20 via-brand-electric/20 to-brand-purple/20 text-brand-cyan ring-1 ring-white/10">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {p.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
