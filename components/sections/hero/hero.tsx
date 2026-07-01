"use client";

import { motion } from "framer-motion";
import { site } from "@/content/site";
import { HeroActions } from "./hero-actions";
import { ScrollIndicator } from "./scroll-indicator";
export function Hero() {
    return (
        <section className="flex min-h-[100svh] items-center">
            <div className="mx-auto flex w-full max-w-6xl flex-col px-6">

                <motion.h1
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .7 }}
                    className="
            max-w-4xl
            font-semibold
            leading-tight
            tracking-tight
            text-5xl
sm:text-6xl
lg:text-8xl
            
          "
                >
                    {site.headline}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: .3,
                        duration: .8
                    }}
                    className="
            mt-10
            max-w-2xl
            text-xl
            leading-9
            text-[var(--muted)]
          "
                >
                    I'm{" "}
                    <span className="text-[var(--foreground)] font-medium">
                        {site.shortName}
                    </span>
                    , a {site.role} who enjoys turning complex ideas into
                    experiences that feel simple.
                </motion.p>
                <HeroActions />
                <ScrollIndicator />
            </div>

        </section>

    );
}