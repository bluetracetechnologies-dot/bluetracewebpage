"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { ParticleField } from "@/components/ParticleField";
import { FloatingGradients } from "@/components/FloatingGradients";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 md:pt-36">
      <FloatingGradients />
      <div aria-hidden className="absolute inset-0 grid-bg" />
      <ParticleField className="opacity-70" />

      <div className="container-page relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5 text-brand-cyan" />
              Bluetrace Technologies Private Limited
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance md:text-7xl"
          >
            Embedded, IoT &amp; PCB Engineering for{" "}
            <span className="gradient-text">Smart Connected Products</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-balance text-base text-white/70 md:text-lg"
          >
            We help startups, schools, hospitals, and businesses design,
            prototype, debug, and deploy firmware, PCB, IoT, automation, and
            software systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Link href="/contact" className="btn-primary">
              Book Free Technical Review <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="btn-ghost">
              Request Project Quote
            </Link>
            <a
              href="https://wa.me/919462225303"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Bluetrace
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4"
          >
            {[
              { k: "Firmware", v: "Debug to deployment" },
              { k: "PCB", v: "Review and bring-up" },
              { k: "IoT", v: "Device to cloud" },
              { k: "Automation", v: "Schools to hospitals" },
            ].map((s) => (
              <div
                key={s.k}
                className="glass rounded-xl px-4 py-3 text-left"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                  {s.k}
                </p>
                <p className="mt-1 text-sm font-medium text-white">{s.v}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-brand-ink"
      />
    </section>
  );
}
