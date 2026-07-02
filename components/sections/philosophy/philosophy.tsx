"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const principles = [
  {
    number: "01",
    title: "Solve the real problem",
    description:
      "I focus on understanding the root cause before writing code. The best solution is often the simplest one.",
  },
  {
    number: "02",
    title: "Build for the next developer",
    description:
      "Clean architecture, meaningful names, and consistency make software easier to maintain long after it's shipped.",
  },
  {
    number: "03",
    title: "Make complexity disappear",
    description:
      "Users shouldn't have to think about the engineering behind a product. Great software feels obvious to use.",
  },
];

export function Philosophy() {
  return (
    <Section>
      <Container>
        <Reveal className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">
            How I Work
          </p>

          <h2 className="mt-8 text-4xl font-semibold leading-tight md:text-6xl">
            Software is complicated enough.
            <br />
            I prefer keeping everything else simple.
          </h2>

          <p className="mt-10 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Every project teaches something new, but these principles stay the
            same. They shape how I approach architecture, collaboration, and
            building products people genuinely enjoy using.
          </p>
        </Reveal>

        <div className="mt-24 grid gap-12 md:grid-cols-3">
          {principles.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4 }}
              className="group border-t border-[var(--border)] pt-8"
            >
            <motion.p
  initial={{ opacity: 0, y: 16, scale: 0.9 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true }}
  transition={{
    delay: 0.2 + index * 0.15,
    duration: 0.55,
    ease: [0.22, 1, 0.36, 1],
  }}
  whileHover={{
    scale: 1.08,
    rotate: -2,
  }}
  className="text-5xl font-semibold tracking-tight text-[var(--accent)]"
>
  {item.number}
</motion.p>

              <h3 className="mt-6 text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-[var(--muted)]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}