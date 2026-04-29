"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import Image from "next/image";
import { useTheme } from "@/hooks/useTheme";
import { Award, BookOpen, Shield, Heart } from "lucide-react";

import { content } from "@/constants/content";

export function About() {
  const { theme } = useTheme();
  const { about, brand } = content;

  return (
    <section
      id="about"
      className="py-24 px-4"
      style={{ backgroundColor: theme.surface }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              <div
                className="relative h-full w-full overflow-hidden"
              >
                <Image
                  src="/images/logo_terhfam.png"
                  alt="Logo Terhfam"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{
                backgroundColor: theme.primaryLight,
                color: theme.primaryDark,
              }}
            >
              {about.badge}
            </span>

            <h2
              className="text-4xl md:text-5xl font-serif font-bold mb-2"
              style={{ color: theme.text }}
            >
              {brand.title} <span style={{ color: theme.primary }}>{brand.name}</span>
            </h2>

            <p
              className="text-lg mb-6"
              style={{ color: theme.textMuted }}
            >
              Psicóloga | Cédula Profesional: {brand.license}
            </p>

            <div className="space-y-4 text-lg" style={{ color: theme.textMuted }}>
              {about.description.map((para, i) => (
                <p key={i}>
                  {para.split("**").map((part, index) =>
                    index % 2 === 1 ? <strong key={index} style={{ color: theme.text }}>{part}</strong> :
                    part.includes("*") ?
                      part.split("*").map((sub, j) => j % 2 === 1 ? <em key={j}>{sub}</em> : sub) :
                      part
                  )}
                </p>
              ))}
            </div>

            {/* Specialties */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {about.specialties.map((item, index) => {
                const icons = [Heart, Shield, BookOpen, Award];
                const Icon = icons[index % icons.length];
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 p-3 rounded-xl"
                    style={{ backgroundColor: theme.background }}
                  >
                    <Icon className="w-5 h-5" style={{ color: theme.primary }} />
                    <span className="text-sm font-medium" style={{ color: theme.text }}>
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Credentials */}
            <div className="mt-8">
              <h4
                className="text-sm font-semibold mb-4 uppercase tracking-wider"
                style={{ color: theme.textMuted }}
              >
                Formación Académica
              </h4>
              <div className="space-y-3">
                {about.education.map((edu, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl border-l-4"
                    style={{
                      backgroundColor: theme.background,
                      borderLeftColor: theme.primary,
                    }}
                  >
                    <p className="font-semibold" style={{ color: theme.text }}>
                      {edu.degree}
                    </p>
                    <p className="text-sm" style={{ color: theme.textMuted }}>
                      {edu.institution} • {edu.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages & Recognition */}
            <div className="mt-8 flex flex-wrap gap-4">
              {content.hero.languages.map(lang => (
                <div
                  key={lang}
                  className="px-4 py-2 rounded-full text-sm font-semibold"
                  style={{
                    backgroundColor: theme.primaryLight,
                    color: theme.primaryDark,
                  }}
                >
                  {lang}
                </div>
              ))}
              <div
                className="px-4 py-2 rounded-full text-sm font-semibold"
                style={{
                  backgroundColor: `${theme.accent}22`,
                  color: theme.accent,
                }}
              >
                ⭐ {content.testimonials.stats[0].number} Reseñas Verificadas
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
