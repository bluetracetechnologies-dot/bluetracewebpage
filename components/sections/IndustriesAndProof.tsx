"use client";

import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { industriesServed, proofPoints } from "@/lib/lead";

export function IndustriesAndProof() {
  return (
    <section className="section" id="industries">
      <div className="container-page">
        <SectionHeading
          eyebrow="Industries and Credentials"
          title={
            <>
              Trusted by teams across <span className="gradient-text">multiple sectors</span>
            </>
          }
          description="Bluetrace supports international product teams and Indian institutions with practical, execution-first engineering support."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <MotionReveal>
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display text-xl font-semibold text-white">Industries We Serve</h3>
              <ul className="mt-5 grid grid-cols-1 gap-2 text-sm text-white/70 sm:grid-cols-2">
                {industriesServed.map((industry) => (
                  <li key={industry} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-cyan" />
                    <span>{industry}</span>
                  </li>
                ))}
              </ul>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.06}>
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display text-xl font-semibold text-white">Proof and Credentials</h3>
              <ul className="mt-5 space-y-2 text-sm text-white/70">
                {proofPoints.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-electric" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
