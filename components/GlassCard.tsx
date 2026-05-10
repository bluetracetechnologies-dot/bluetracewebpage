"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradientBorder?: boolean;
};

export function GlassCard({
  children,
  className = "",
  hover = true,
  gradientBorder = false,
}: Props) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={`glass ${hover ? "glass-hover" : ""} ${
        gradientBorder ? "gradient-border" : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
