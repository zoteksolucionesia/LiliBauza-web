"use client";

import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from "react";
import { themeColors, type ThemeName, type ThemeColor } from "@/types/theme";

interface ThemeContextType {
  theme: ThemeColor;
  themeName: ThemeName;
  setTheme: (name: ThemeName) => void;
  isLoaded: boolean;
  themes: ThemeName[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeName, setThemeName] = useState<ThemeName>("rosa");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("lilibauza-theme") as ThemeName;
    if (saved && themeColors[saved]) {
      setThemeName(saved);
    }
    setIsLoaded(true);
  }, []);

  const theme = themeColors[themeName];

  useEffect(() => {
    if (isLoaded) {
      const root = document.documentElement;

      // Apply CSS custom properties for dynamic theming
      root.style.setProperty("--color-primary", theme.primary);
      root.style.setProperty("--color-primary-light", theme.primaryLight);
      root.style.setProperty("--color-primary-dark", theme.primaryDark);
      root.style.setProperty("--color-secondary", theme.secondary);
      root.style.setProperty("--color-secondary-light", theme.secondaryLight);
      root.style.setProperty("--color-accent", theme.accent);
      root.style.setProperty("--color-background", theme.background);
      root.style.setProperty("--color-surface", theme.surface);
      root.style.setProperty("--color-surface-transparent", `${theme.surface}E6`);
      root.style.setProperty("--color-text", theme.text);
      root.style.setProperty("--color-text-muted", theme.textMuted);

      // Apply background to body
      document.body.style.backgroundColor = theme.background;
      document.body.style.color = theme.text;
    }
  }, [theme, isLoaded]);

  const setTheme = useCallback((name: ThemeName) => {
    setThemeName(name);
    localStorage.setItem("lilibauza-theme", name);
  }, []);

  const value = {
    theme,
    themeName,
    setTheme,
    isLoaded,
    themes: Object.keys(themeColors) as ThemeName[],
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#FDF8F8" }}>
        <div className="animate-pulse text-center">
          <div className="w-16 h-16 rounded-full bg-pink-200 mx-auto mb-4" />
          <p className="text-gray-500">Cargando...</p>
        </div>
      </div>
    );
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
}
