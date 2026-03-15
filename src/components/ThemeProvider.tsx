"use client";

import { useTheme } from "@/hooks/useTheme";
import { useEffect } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, isLoaded } = useTheme();

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

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#FAFAFF" }}>
        <div className="animate-pulse text-center">
          <div className="w-16 h-16 rounded-full bg-purple-200 mx-auto mb-4" />
          <p className="text-gray-500">Cargando...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
