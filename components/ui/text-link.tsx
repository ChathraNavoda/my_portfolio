import Link from "next/link";
import { cn } from "@/lib/utils";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function TextLink({
  href,
  children,
  className,
}: TextLinkProps) {
  const external =
    href.startsWith("http") || href.startsWith("mailto");

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        `
        relative
        w-fit
        text-sm
        text-[var(--muted)]
        transition-colors
        duration-300
        hover:text-[var(--foreground)]

        after:absolute
        after:left-0
        after:-bottom-1
        after:h-px
        after:w-0
        after:bg-current
        after:transition-all
        after:duration-300

        hover:after:w-full
        `,
        className
      )}
    >
      {children}
    </Link>
  );
}