"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import Image from "next/image";
import { Award, BookOpen, Shield, Heart } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="py-24 px-4"
      style={{ backgroundColor: "var(--color-surface)" }}
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
            <div className="relative aspect-square max-w-md mx-auto">
              <div
                className="absolute inset-0 rounded-full opacity-20"
                style={{ backgroundColor: "var(--color-primary)" }}
              />
              <div
                className="absolute inset-4 rounded-full overflow-hidden"
                style={{
                  border: `3px solid var(--color-primary)44`,
                }}
              >
                <Image
                  src="/images/LiliBauza.png"
                  alt="Mtra. Liliana Bauza - Psicóloga Certificada"
                  fill
                  className="object-cover"
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
                backgroundColor: "var(--color-primary-light)",
                color: "var(--color-primary-dark)",
              }}
            >
              SOBRE MÍ
            </span>

            <h2
              className="text-4xl md:text-5xl font-serif font-bold mb-2"
              style={{ color: "var(--color-text)" }}
            >
              Mtra. <span style={{ color: "var(--color-primary)" }}>Liliana Bauza</span>
            </h2>

            <p
              className="text-lg mb-6"
              style={{ color: "var(--color-text-muted)" }}
            >
              Psicóloga Clínica | Cédula Profesional: 3398478
            </p>

            <div className="space-y-4 text-lg" style={{ color: "var(--color-text-muted)" }}>
              <p>
                Soy especialista en trauma y conducta compulsiva, con más de
                <strong style={{ color: "var(--color-text)" }}> 30 años de experiencia</strong> acompañando
                a personas en su proceso de sanación emocional.
              </p>
              <p>
                Mi enfoque combina la Terapia Estratégica, Terapia Sistémica Breve,
                Terapia Conductual y Terapia Humanista. Creo firmemente que
                <em> "la vida no es una serie de errores, sino oportunidades nuevas para
                  colectar experiencias de madurez, responsabilidad y felicidad."</em>
              </p>
            </div>

            {/* Specialties */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { icon: Heart, label: "Trauma y Estrés Postraumático" },
                { icon: Shield, label: "Conducta Compulsiva" },
                { icon: BookOpen, label: "Terapia Estratégica" },
                { icon: Award, label: "EMDR Certificado" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 p-3 rounded-xl"
                  style={{ backgroundColor: "var(--color-background)" }}
                >
                  <item.icon className="w-5 h-5" style={{ color: "var(--color-primary)" }} />
                  <span className="text-sm font-medium" style={{ color: "var(--color-text)" }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Credentials */}
            <div className="mt-8">
              <h4
                className="text-sm font-semibold mb-4 uppercase tracking-wider"
                style={{ color: "var(--color-text-muted)" }}
              >
                Formación Académica
              </h4>
              <div className="space-y-3">
                {[
                  { degree: "Maestría en Terapia Familiar", institution: "CEFAP & Universidad Autónoma de Campeche", year: "2017" },
                  { degree: "Diplomado en Intervención de Crisis", institution: "CONTACTO, Jalisco", year: "2017" },
                  { degree: "Diplomado en Terapia Breve y MRI", institution: "CEFAP", year: "2015" },
                  { degree: "Terapia Humanista Centrada en la Persona", institution: "UVM MÉXICO", year: "1995" },
                ].map((edu, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl border-l-4"
                    style={{
                      backgroundColor: "var(--color-background)",
                      borderLeftColor: "var(--color-primary)",
                    }}
                  >
                    <p className="font-semibold" style={{ color: "var(--color-text)" }}>
                      {edu.degree}
                    </p>
                    <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                      {edu.institution} • {edu.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages & Recognition */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div
                className="px-4 py-2 rounded-full text-sm font-semibold"
                style={{
                  backgroundColor: "var(--color-primary-light)",
                  color: "var(--color-primary-dark)",
                }}
              >
                🇪🇸 Español
              </div>
              <div
                className="px-4 py-2 rounded-full text-sm font-semibold"
                style={{
                  backgroundColor: "var(--color-primary-light)",
                  color: "var(--color-primary-dark)",
                }}
              >
                🇺🇸 English
              </div>
              <div
                className="px-4 py-2 rounded-full text-sm font-semibold"
                style={{
                  backgroundColor: "var(--color-accent)22",
                  color: "var(--color-accent)",
                }}
              >
                ⭐ 228+ Reseñas Verificadas
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
