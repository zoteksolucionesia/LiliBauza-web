"use client";

import { useTheme } from "@/hooks/useTheme";
import { themeColors, type ThemeName } from "@/types/theme";
import { Palette } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeSwitcher() {
  const { theme, themeName, setTheme, isLoaded } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  if (!isLoaded) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
        style={{
          borderColor: theme.primary,
          backgroundColor: theme.primaryLight,
          color: theme.primaryDark,
        }}
        aria-label="Cambiar colores del tema"
        aria-expanded={isOpen}
      >
        <Palette className="w-5 h-5" />
        <span className="text-sm font-medium hidden sm:inline">{theme.name}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute right-0 top-full mt-2 p-3 rounded-2xl shadow-xl border z-50 min-w-[200px]"
            style={{
              backgroundColor: theme.surface,
              borderColor: theme.primary,
            }}
          >
            <p
              className="text-xs font-semibold mb-2 px-2"
              style={{ color: theme.textMuted }}
            >
              ELIGE TU PALETA
            </p>
            <div className="space-y-2">
              {(Object.entries(themeColors) as [keyof typeof themeColors, typeof themeColors.lila][]).map(([key, color]) => (
                <button
                  key={key}
                  onClick={() => {
                    setTheme(key);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-200",
                    themeName === key ? "ring-2 ring-offset-2" : "hover:opacity-80"
                  )}
                  style={{
                    backgroundColor: themeName === key ? color.primaryLight : color.surface,
                    border: `1px solid ${color.primary}44`,
                    ['--tw-ring-color' as string]: color.primary,
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: color.primary }}
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: color.accent }}
                    />
                  </div>
                  <span className="text-sm font-medium" style={{ color: color.text }}>
                    {color.name}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
