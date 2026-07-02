type Props = {
  label: string;
};

export function TechPill({ label }: Props) {
  return (
    <span
      className="
      rounded-full
      border
      border-[var(--border)]
      px-4
      py-2
      text-sm
      text-[var(--muted)]
      transition-colors
      hover:border-[var(--foreground)]
      hover:text-[var(--foreground)]
      "
    >
      {label}
    </span>
  );
}