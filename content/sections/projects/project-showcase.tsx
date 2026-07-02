"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { Project } from "@/types/project";

import { Reveal } from "@/components/ui/reveal";
import { Divider } from "@/components/ui/divider";
import { PhoneFrame } from "@/components/sections/projects/phone-frame";
import { TechPill } from "@/components/sections/projects/tech-pill";



type Props = {
  project: Project;
  index: number;
};

export function ProjectShowcase({
  project,
  index,
}: Props) {
  return (
    <article className="py-24 md:py-32">

      <Reveal>

        <p
          className="
          text-sm
          font-medium
          uppercase
          tracking-[0.35em]
          text-[var(--accent)]
          "
        >
          {String(index + 1).padStart(2, "0")}
        </p>

        <h2
          className="
          mt-6
          max-w-4xl
          text-5xl
          font-semibold
          tracking-tight
          leading-tight
          md:text-7xl
          "
        >
          {project.title}
        </h2>

        <p
          className="
          mt-4
          text-lg
          text-[var(--muted)]
          md:text-xl
          "
        >
          {project.tagline}
        </p>

      </Reveal>

      <Reveal delay={0.15}>

        <div className="mt-20 flex justify-center">

          <motion.div
            whileHover={{
              y: -6,
            }}
            transition={{
              duration: .25,
            }}
          >
            <PhoneFrame>

              <Image
                src={project.image}
                alt={project.title}
                width={420}
                height={900}
                priority={index === 0}
                className="h-auto w-full"
              />

            </PhoneFrame>

          </motion.div>

        </div>

      </Reveal>

      <Divider />

      <div className="grid gap-14 lg:grid-cols-2">

        <Reveal>

          <section>

            <p
              className="
              text-sm
              uppercase
              tracking-[0.25em]
              text-[var(--muted)]
              "
            >
              Challenge
            </p>

            <p
              className="
              mt-5
              leading-8
              text-[var(--foreground)]
              "
            >
              {project.challenge}
            </p>

          </section>

        </Reveal>

        <Reveal delay={0.1}>

          <section>

            <p
              className="
              text-sm
              uppercase
              tracking-[0.25em]
              text-[var(--muted)]
              "
            >
              Solution
            </p>

            <p
              className="
              mt-5
              leading-8
              text-[var(--foreground)]
              "
            >
              {project.solution}
            </p>

          </section>

        </Reveal>

      </div>

      <Divider />

      <Reveal>

        <section className="max-w-3xl">

          <p
            className="
            text-sm
            uppercase
            tracking-[0.25em]
            text-[var(--muted)]
            "
          >
            Behind the Build
          </p>

          <p
            className="
            mt-5
            text-lg
            leading-9
            text-[var(--foreground)]
            "
          >
            {project.learnings}
          </p>

        </section>

      </Reveal>

      <Divider />

      <Reveal>

        <div className="flex flex-wrap gap-3">

          {project.technologies.map((tech) => (
            <TechPill
              key={tech}
              label={tech}
            />
          ))}

        </div>

      </Reveal>

      {(project.github || project.live) && (

        <>
          <Divider />

          <Reveal>

            <div className="flex flex-wrap gap-8">

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  text-sm
                  font-medium
                  transition-colors
                  hover:text-[var(--accent)]
                  "
                >
                  View Source →
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  text-sm
                  font-medium
                  transition-colors
                  hover:text-[var(--accent)]
                  "
                >
                  Live Demo →
                </a>
              )}

            </div>

          </Reveal>

        </>

      )}

    </article>
  );
}