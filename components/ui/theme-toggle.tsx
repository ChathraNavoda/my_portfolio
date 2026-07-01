"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-10 w-10 rounded-full border border-[var(--border)]" />
    );
  }

  const dark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="
      flex
      h-10
      w-10
      items-center
      justify-center
      rounded-full
      border
      border-[var(--border)]
      bg-[var(--card)]
      transition-all
      duration-300
      hover:scale-105
      hover:border-[var(--accent)]
      "
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}