"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/products";
import { SectionHeading } from "@/components/SectionHeading";
import { MotionReveal } from "@/components/MotionReveal";

const statusStyles: Record<string, string> = {
  Live: "bg-emerald-500/15 text-emerald-300 ring-emerald-400/30",
  Beta: "bg-amber-500/15 text-amber-300 ring-amber-400/30",
  "Coming Soon": "bg-white/10 text-white/70 ring-white/20",
};

export function FeaturedProducts() {
  const featured = products.slice(0, 3);
  return (
    <section id="products" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Featured products"
          title={
            <>
              Products built in-house at <span className="gradient-text">Bluetrace</span>
            </>
          }
          description="A growing portfolio of platforms, toolkits and live systems engineered by our team."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {featured.map((p, i) => {
            const Icon = p.icon;
            return (
              <MotionReveal key={p.slug} delay={i * 0.05}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]">
                  <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-brand-electric/30 via-brand-purple/20 to-transparent blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-60" />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-cyan/20 via-brand-electric/20 to-brand-purple/20 text-brand-cyan ring-1 ring-white/10">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ring-1 ${
                          statusStyles[p.status]
                        }`}
                      >
                        {p.status}
                      </span>
                    </div>
                    <p className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-white/50">
                      {p.category}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-semibold text-white">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-sm text-white/70">{p.tagline}</p>
                    <p className="mt-4 text-sm leading-relaxed text-white/60">
                      {p.description}
                    </p>
                    <ul className="mt-5 space-y-1.5 text-xs text-white/60">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </MotionReveal>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/products" className="btn-ghost">
            See all products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
