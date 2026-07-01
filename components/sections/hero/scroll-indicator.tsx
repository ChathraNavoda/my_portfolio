"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: [0, 8, 0],
      }}
      transition={{
        delay: 1.2,
        duration: 2,
        repeat: Infinity,
      }}
      className="mt-20 flex justify-center"
    >
      <ChevronDown
        size={22}
        className="text-[var(--muted)]"
      />
    </motion.div>
  );
}