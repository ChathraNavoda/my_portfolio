import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function PhoneFrame({ children }: Props) {
  return (
    <div
      className="
      mx-auto
      w-[320px]
      rounded-[2.5rem]
      border
      border-[var(--border)]
      bg-[var(--card)]
      p-3
      shadow-sm
      "
    >
      <div className="overflow-hidden rounded-[2rem]">
        {children}
      </div>
    </div>
  );
}