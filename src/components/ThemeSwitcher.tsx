"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />; // Placeholder to prevent layout shift
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center justify-center w-10 h-10 rounded-full bg-paper dark:bg-[#2A2622] border border-ink/10 dark:border-cream/20 shadow-sm transition-all duration-300 hover:scale-110 active:scale-95 group overflow-hidden"
      aria-label="Toggle Dark Mode"
    >
      <div className={`absolute inset-0 transition-transform duration-500 flex items-center justify-center ${isDark ? 'translate-y-0 rotate-0' : 'translate-y-10 rotate-90'}`}>
        <Moon size={20} className="text-cream" />
      </div>
      <div className={`absolute inset-0 transition-transform duration-500 flex items-center justify-center ${isDark ? '-translate-y-10 -rotate-90' : 'translate-y-0 rotate-0'}`}>
        <Sun size={20} className="text-ink" />
      </div>
    </button>
  );
};
