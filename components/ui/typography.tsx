import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  className?: string;
};

export function Display({
  children,
  className,
}: TextProps) {
  return (
    <h1
      className={cn(
        "text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function Lead({
  children,
  className,
}: TextProps) {
  return (
    <p
      className={cn(
        "max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl",
        className
      )}
    >
      {children}
    </p>
  );
}