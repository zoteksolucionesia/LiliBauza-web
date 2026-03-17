"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  const { theme } = useTheme();

  return (
    <motion.div
      className={cn(
        "rounded-3xl p-6 md:p-8 backdrop-blur-xl border transition-all duration-500",
        hover && "hover:scale-[1.02] hover:shadow-2xl",
        className
      )}
      style={{
        backgroundColor: `${theme.surface}E6`,
        borderColor: `${theme.primary}33`,
        boxShadow: `0 8px 32px ${theme.primary}15`,
      }}
      whileHover={hover ? { y: -4 } : {}}
    >
      {children}
    </motion.div>
  );
}
