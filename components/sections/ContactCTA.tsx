"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site";

export function ContactCTA() {
  return (
    <section className="section">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-10 md:p-16"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-brand-electric/30 blur-[120px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-brand-purple/30 blur-[120px]"
          />

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <span className="eyebrow">Let&apos;s build</span>
              <h3 className="mt-5 font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
                Have a system to design,{" "}
                <span className="gradient-text">scale or rescue?</span>
              </h3>
              <p className="mt-4 text-base text-white/65 md:text-lg">
                Talk to us about your roadmap. We respond within one business day.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Contact us <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`mailto:${siteConfig.emails.primary}`}
                className="btn-ghost"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.emails.primary}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
