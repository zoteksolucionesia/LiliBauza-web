"use client";

import { motion } from "framer-motion";
import { Star, Quote, Heart } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { useState } from "react";
import { useTheme } from "@/hooks/useTheme";

export function Testimonials() {
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      text: "Muy contenta con la profesionalismo y objetividad de la Mtra. Liliana Bauza. La terapia nos apoya muchísimo en la vida diaria.",
      author: "Cristina",
      date: "5 de Marzo, 2025",
      rating: 5,
    },
    {
      text: "Una experiencia gratificante y reconfortante. Muy profesional, amable y abierta a las ideas del paciente. La recomiendo ampliamente.",
      author: "Daniel Rincón Avalos",
      date: "2 de Julio, 2024",
      rating: 5,
    },
    {
      text: "Su empatía y paciencia al explicar cada detalle me hace valorarla como mi psicóloga. Me hace sentir cómoda y con confianza.",
      author: "Paulina Sánchez Riverón",
      date: "15 de Marzo, 2024",
      rating: 5,
    },
    {
      text: "Buena amabilidad, preguntas sobre el problema, consejos para mejorar y resultados rápidos de las terapias. Muy recomendada.",
      author: "Paulo Rgez. N.",
      date: "12 de Febrero, 2026",
      rating: 5,
    },
    {
      text: "¡Superó mis expectativas! Muy profesional, comprensiva y respetuosa. ¡Totalmente recomendada!",
      author: "Alejandro Juárez",
      date: "4 de Noviembre, 2025",
      rating: 5,
    },
    {
      text: "La Mtra. Bauza tiene una forma única de hacer sentir escuchado y comprendido. Mi autoestima ha cambiado completamente después de un año de terapia.",
      author: "A. L.",
      date: "Paciente de 1 año",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 px-4 relative overflow-hidden"
      style={{ backgroundColor: theme.surface }}
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: theme.secondary }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{
              backgroundColor: theme.primaryLight,
              color: theme.primaryDark,
            }}
          >
            TESTIMONIOS
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
            style={{ color: theme.text }}
          >
            Historias de{" "}
            <span style={{ color: theme.primary }}>transformación</span>
          </h2>
          <p
            className="text-xl max-w-2xl mx-auto"
            style={{ color: theme.textMuted }}
          >
            Más de 228 reseñas verificadas en Doctoralia.
            Personas que confiaron en mí para acompañarlas en su proceso.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            <GlassCard className="text-center py-12">
              <Quote
                className="w-12 h-12 mx-auto mb-6"
                style={{ color: theme.primary, opacity: 0.3 }}
              />

              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-current"
                    style={{ color: theme.accent }}
                  />
                ))}
              </div>

              <p
                className="text-xl md:text-2xl leading-relaxed mb-8 italic"
                style={{ color: theme.text }}
              >
                "{testimonials[activeIndex].text}"
              </p>

              <div className="flex items-center justify-center gap-2 mb-2">
                <Heart className="w-5 h-5" style={{ color: theme.accent }} />
                <p className="font-semibold" style={{ color: theme.text }}>
                  {testimonials[activeIndex].author}
                </p>
              </div>
              <p className="text-sm" style={{ color: theme.textMuted }}>
                {testimonials[activeIndex].date}
              </p>
            </GlassCard>
          </motion.div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="w-3 h-3 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: index === activeIndex ? theme.primary : `${theme.primary}44`,
                  scale: index === activeIndex ? 1.2 : 1,
                }}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "228+", label: "Reseñas Verificadas" },
            { number: "30+", label: "Años de Experiencia" },
            { number: "1000+", label: "Pacientes Atendidos" },
            { number: "100%", label: "Confidencialidad" },
          ].map((stat) => (
            <GlassCard key={stat.label} className="text-center">
              <p
                className="text-4xl font-bold mb-2"
                style={{ color: theme.primaryDark }}
              >
                {stat.number}
              </p>
              <p className="text-sm" style={{ color: theme.textMuted }}>
                {stat.label}
              </p>
            </GlassCard>
          ))}
        </motion.div>

        {/* Doctoralia Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p
            className="text-sm mb-4"
            style={{ color: theme.textMuted }}
          >
            Perfil verificado en
          </p>
          <a
            href="https://www.doctoralia.com.mx/liliana-bauza/psicologo/villa-de-alvarez"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-full font-semibold transition-all hover:shadow-lg"
            style={{
              backgroundColor: "#00A4BD",
              color: "#FFFFFF",
            }}
          >
            Ver perfil en Doctoralia
          </a>
        </motion.div>
      </div>
    </section>
  );
}
