"use client";

import { site } from "@/content/site";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Display, Lead } from "@/components/ui/typography";
import { Reveal } from "@/components/ui/reveal";

import { HeroActions } from "./hero-actions";

export function Hero() {
  return (
    <Section className="flex min-h-screen items-center">
      <Container>

        <Reveal>
          <Display className="max-w-5xl">
            {site.headline}
          </Display>
        </Reveal>

        <Reveal delay={0.15}>
          <Lead className="mt-8">
            I'm <strong>{site.shortName}</strong>, a {site.role} focused on
            building maintainable software, thoughtful user experiences, and
            products people genuinely enjoy using.
          </Lead>
        </Reveal>

        <Reveal delay={0.3}>
          <HeroActions />
        </Reveal>

      </Container>
    </Section>
  );
}