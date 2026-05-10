"use client";

import { motion } from "framer-motion";
import { FloatingGradients } from "./FloatingGradients";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
};

export function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-10 md:pt-36 md:pb-16">
      <FloatingGradients />
      <div aria-hidden className="absolute inset-0 grid-bg" />
      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-balance md:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-balance text-base text-white/70 md:text-lg">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
