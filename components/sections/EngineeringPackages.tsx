"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { engineeringPackages } from "@/lib/lead";

export function EngineeringPackages() {
  return (
    <section className="section" id="packages">
      <div className="container-page">
        <SectionHeading
          eyebrow="Engineering Packages"
          title={
            <>
              Practical starting offers for <span className="gradient-text">fast execution</span>
            </>
          }
          description="Clear scope, transparent starting price, and realistic delivery planning. Final quote depends on complexity and requirements."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {engineeringPackages.map((pkg, i) => (
            <MotionReveal key={pkg.slug} delay={i * 0.04}>
              <div className="glass glass-hover h-full rounded-2xl p-6">
                <h3 className="font-display text-xl font-semibold text-white">{pkg.title}</h3>
                <p className="mt-2 text-sm font-semibold text-brand-cyan">{pkg.price}</p>
                <ul className="mt-5 space-y-2 text-sm text-white/70">
                  {pkg.deliverables.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-cyan" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-ghost mt-6 w-full justify-center">
                  Request Project Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
