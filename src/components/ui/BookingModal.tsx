"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const { theme } = useTheme();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ pointerEvents: "none" }}
          >
            <div
              className="w-full max-w-4xl h-[700px] rounded-3xl shadow-2xl overflow-hidden"
              style={{
                backgroundColor: theme.surface,
                pointerEvents: "auto",
              }}
            >
              {/* Header */}
              <div
                className="px-6 py-4 flex items-center justify-between"
                style={{
                  backgroundColor: theme.primary,
                  color: "#FFFFFF",
                }}
              >
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Agenda tu Cita</h3>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Cerrar"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Calendly Embed */}
              <div className="h-[calc(100%-73px)] overflow-auto">
                <iframe
                  src="https://calendly.com/lilibauza/30min?hide_gdpr_banner=1&text_color=1e1b4b&primary_color=a78bfa"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Selecciona una fecha y hora para tu cita"
                  style={{ backgroundColor: "transparent" }}
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
