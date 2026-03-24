"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, ExternalLink } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { content } from "@/constants/content";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const { theme } = useTheme();
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const { booking } = content;

  // Reset loaded state when modal closes/opens
  useEffect(() => {
    if (!isOpen) setIframeLoaded(false);
  }, [isOpen]);

  // Cal.com embed URL with locale forced to Spanish
  const calUrl = `${booking.cal_url}?locale=es&theme=light&hideEventTypeDetails=0&layout=month_view`;

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
                  <h3 className="text-xl font-bold">{booking.modal_title}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={booking.cal_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm px-3 py-1 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                    title="Abrir Cal.com directamente"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="hidden sm:inline">Abrir en nueva pestaña</span>
                  </a>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                    aria-label="Cerrar"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Cal.com Embed */}
              <div className="h-[calc(100%-73px)] overflow-auto relative">
                {!iframeLoaded && (
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                    style={{ backgroundColor: theme.background }}
                  >
                    <div
                      className="w-10 h-10 rounded-full animate-pulse"
                      style={{ backgroundColor: theme.primaryLight }}
                    />
                    <p className="text-sm" style={{ color: theme.textMuted }}>
                      {booking.loading_text}
                    </p>
                    <a
                      href={booking.cal_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm underline"
                      style={{ color: theme.primary }}
                    >
                      {booking.fallback_text}
                    </a>
                  </div>
                )}
                <iframe
                  src={calUrl}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  lang="es"
                  title="Selecciona una fecha y hora para tu cita"
                  style={{ backgroundColor: "#ffffff" }}
                  onLoad={() => setIframeLoaded(true)}
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
