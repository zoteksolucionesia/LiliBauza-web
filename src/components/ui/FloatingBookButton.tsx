"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

interface FloatingBookButtonProps {
  onClick: () => void;
}

export function FloatingBookButton({ onClick }: FloatingBookButtonProps) {
  const { theme } = useTheme();

  return (
    <>
      {/* Floating button - visible on scroll */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-3 px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
        style={{
          backgroundColor: theme.primary,
          color: "#FFFFFF",
        }}
        aria-label="Reservar cita ahora"
      >
        <Calendar className="w-6 h-6" />
        <span className="font-semibold hidden sm:inline">Reservar Cita</span>
      </motion.button>

      {/* Mobile-only close/top button alternative */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
        className="fixed bottom-6 right-6 z-40 sm:hidden w-14 h-14 rounded-full shadow-2xl flex items-center justify-center"
        style={{
          backgroundColor: theme.primary,
          color: "#FFFFFF",
        }}
        aria-label="Reservar cita"
      >
        <Calendar className="w-7 h-7" />
      </motion.button>
    </>
  );
}
