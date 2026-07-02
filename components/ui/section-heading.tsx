import { Display, Lead } from "./typography";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[var(--accent)]">
          {eyebrow}
        </p>
      )}

      <Display className="text-4xl lg:text-6xl">
        {title}
      </Display>

      {description && (
        <Lead className="mt-6">
          {description}
        </Lead>
      )}
    </div>
  );
}