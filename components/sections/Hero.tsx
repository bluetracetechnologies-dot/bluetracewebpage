"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
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
              Specialized Embedded &amp; IoT Studio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance md:text-7xl"
          >
            Building{" "}
            <span className="gradient-text">Intelligent Digital</span>{" "}
            Infrastructure
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-balance text-base text-white/70 md:text-lg"
          >
            We design and engineer AI platforms, embedded electronics, IoT
            infrastructure, and scalable digital products for modern businesses
            and startups — from prototype to planet-scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Link href="/contact" className="btn-primary">
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/products" className="btn-ghost">
              Explore Products
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4"
          >
            {[
              { k: "AI", v: "Production" },
              { k: "Embedded", v: "PCB-ready" },
              { k: "IoT", v: "Low-power" },
              { k: "Cloud", v: "Edge-native" },
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
