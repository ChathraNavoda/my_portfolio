import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, ReactNode } from "react";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  children: ReactNode;
};

export function Section({
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      {...props}
      className={cn(
        "py-32 md:py-40",
        className
      )}
    >
      {children}
    </section>
  );
}