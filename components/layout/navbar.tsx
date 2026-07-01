"use client";

import Link from "next/link";

import { useScroll } from "@/hooks/use-scroll";
import { ThemeToggle } from "../ui/theme-toggle";

const links = [
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Journey",
    href: "#journey",
  },
  {
    label: "Thoughts",
    href: "#thoughts",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export function Navbar() {
  const scrolled = useScroll();

  return (
    <header
      className={`
fixed
top-0
left-0
right-0
z-50
transition-all
duration-300
${
  scrolled
    ? "backdrop-blur-md bg-[var(--background)]/70 border-b border-[var(--border)]"
    : ""
}
`}
    >
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">

        <Link
          href="/"
          className="
font-semibold
tracking-tight
text-lg
hover:text-[var(--accent)]
transition-colors
"
        >
          CHATHRA
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
text-sm
text-[var(--muted)]
transition-colors
hover:text-[var(--foreground)]
"
            >
              {item.label}
            </a>
          ))}
        </div>

        <ThemeToggle />

      </nav>
    </header>
  );
}