import Link from "next/link";
import { site } from "@/content/site";

const links = [
  {
    label: "Resume",
    href: site.resume,
  },
  {
    label: "GitHub",
    href: site.github,
  },
  {
    label: "LinkedIn",
    href: site.linkedin,
  },
  {
    label: "Email",
    href: `mailto:${site.email}`,
  },
];

export function HeroActions() {
  return (
    <div className="mt-12 flex flex-wrap gap-8 text-sm">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={
            link.href.startsWith("http")
              ? "noopener noreferrer"
              : undefined
          }
          className="
            relative
            text-[var(--muted)]
            transition-colors
            duration-300
            hover:text-[var(--foreground)]
            after:absolute
            after:left-0
            after:-bottom-1
            after:h-px
            after:w-0
            after:bg-[var(--foreground)]
            after:transition-all
            after:duration-300
            hover:after:w-full
          "
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}