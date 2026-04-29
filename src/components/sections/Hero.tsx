"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/hooks/useTheme";
import { content } from "@/constants/content";

interface HeroProps {
  onBookClick: () => void;
}

export function Hero({ onBookClick }: HeroProps) {
  const { theme } = useTheme();
  const shouldReduceMotion = useReducedMotion();
  const { hero } = content;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20 pb-16 px-4 relative overflow-hidden"
      style={{ backgroundColor: theme.background }}
    >
      {/* Background decorative elements */}
      <div
        className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-30 blur-3xl"
        style={{ backgroundColor: theme.primaryLight }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: theme.secondaryLight }}
      />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                <Image
                  src="/images/logo_terhfam.png"
                  alt="Logo Oficial Mtra. Liliana Bauza"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{
                backgroundColor: theme.primaryLight,
                color: theme.primaryDark,
              }}
            >
              {hero.badge}
            </motion.span>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6"
              style={{ color: theme.text }}
            >
              {hero.title.prefix} <span style={{ color: theme.primary }}>{hero.title.name}</span>
            </h1>

            <p
              className="text-2xl md:text-3xl font-medium leading-relaxed mb-4"
              style={{ color: theme.text }}
            >
              {hero.subtitle}
            </p>

            <p
              className="text-xl md:text-2xl leading-relaxed mb-8"
              style={{ color: theme.textMuted }}
            >
              {hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={onBookClick}
                className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl"
                style={{
                  backgroundColor: theme.primary,
                  color: "#FFFFFF",
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {hero.cta.book}
              </motion.button>

              <motion.a
                href="#services"
                className="px-8 py-4 rounded-full font-semibold text-lg border-2 transition-all duration-300 text-center"
                style={{
                  borderColor: theme.primary,
                  color: theme.text,
                }}
                whileHover={{ scale: 1.02, backgroundColor: theme.primaryLight }}
                whileTap={{ scale: 0.98 }}
              >
                {hero.cta.services}
              </motion.a>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center gap-6">
              {hero.stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-6">
                  <div>
                    <p
                      className="text-3xl font-bold"
                      style={{ color: theme.primaryDark }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-sm" style={{ color: theme.textMuted }}>
                      {stat.label}
                    </p>
                  </div>
                  {i < hero.stats.length - 1 && (
                    <div
                      className="w-px h-12"
                      style={{ backgroundColor: theme.primary }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-8 flex items-center gap-4">
              <span className="text-sm font-semibold" style={{ color: theme.textMuted }}>
                Idiomas:
              </span>
              {hero.languages.map((lang) => (
                <div
                  key={lang}
                  className="px-3 py-1 rounded-full text-sm font-semibold"
                  style={{
                    backgroundColor: theme.primaryLight,
                    color: theme.primaryDark,
                  }}
                >
                  {lang}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              {/* Decorative frame */}
              <div
                className="absolute inset-0 rounded-3xl transform rotate-3"
                style={{ backgroundColor: theme.primaryLight }}
              />

              {/* Main image container */}
              <div
                className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  backgroundColor: theme.surface,
                  border: `3px solid ${theme.primary}33`,
                }}
              >
                <Image
                  src="/images/LiliBauza.png"
                  alt="Mtra. Liliana Bauza - Psicóloga Clínica Certificada en Villa de Álvarez, Colima"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 px-6 py-4 rounded-2xl shadow-xl"
                style={{
                  backgroundColor: theme.surface,
                  border: `2px solid ${theme.primary}33`,
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: theme.primary }}
                  >
                    <span className="text-white text-xl">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: theme.text }}>
                      Cédula Prof.
                    </p>
                    <p className="text-sm" style={{ color: theme.textMuted }}>
                      3398478
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2 cursor-pointer"
            style={{ color: theme.textMuted }}
            animate={{ y: shouldReduceMotion ? 0 : [0, 8, 0] }}
            transition={shouldReduceMotion ? {} : { duration: 1.5, repeat: Infinity }}
          >
            <span className="text-sm">Explora más</span>
            <ArrowDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
