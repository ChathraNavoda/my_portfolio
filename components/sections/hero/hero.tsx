"use client";

import { motion } from "framer-motion";

import { site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Display, Lead } from "@/components/ui/typography";

import { HeroActions } from "./hero-actions";
import { ScrollIndicator } from "./scroll-indicator";

export function Hero() {
  return (
    <Section className="flex min-h-[100svh] items-center">
      <Container className="flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Display>
            {site.headline}
          </Display>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Lead className="mt-8">
            I'm <strong>{site.shortName}</strong>, a {site.role} who enjoys
            turning complex ideas into experiences that feel simple. I care
            about clean architecture, maintainable software, and creating
            products people genuinely enjoy using.
          </Lead>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.45,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <HeroActions />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.9,
            duration: 0.8,
          }}
        >
          <ScrollIndicator />
        </motion.div>
      </Container>
    </Section>
  );
}