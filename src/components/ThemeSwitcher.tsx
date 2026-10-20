"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? (resolvedTheme || theme) === "dark" : false;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#E8DCC8] dark:bg-[#332E2A] border border-ink/20 dark:border-white/25 shadow-sm transition-all duration-300 hover:scale-110 active:scale-95 group overflow-hidden cursor-pointer shrink-0"
      aria-label="Toggle Dark Mode"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div 
        className={`absolute inset-0 transition-all duration-500 flex items-center justify-center ${
          isDark ? "translate-y-0 rotate-0 opacity-100" : "translate-y-10 rotate-90 opacity-0"
        }`}
      >
        <Moon size={19} className="text-amber-200 fill-amber-200/30" />
      </div>
      
      <div 
        className={`absolute inset-0 transition-all duration-500 flex items-center justify-center ${
          isDark ? "-translate-y-10 -rotate-90 opacity-0" : "translate-y-0 rotate-0 opacity-100"
        }`}
      >
        <Sun size={19} className="text-amber-600 fill-amber-500/20" />
      </div>
    </button>
  );
};
