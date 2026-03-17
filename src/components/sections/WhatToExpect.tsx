"use client";

import { motion } from "framer-motion";
import { ClipboardList, MessageCircle, TrendingUp, Shield, Clock, CheckCircle } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { useTheme } from "@/hooks/useTheme";

export function WhatToExpect() {
  const { theme } = useTheme();

  const steps = [
    {
      icon: MessageCircle,
      step: "01",
      title: "Primer Contacto",
      description: "Agenda tu cita inicial. Puedes hacerlo de forma presencial en Villa de Álvarez o en línea desde cualquier lugar.",
    },
    {
      icon: ClipboardList,
      title: "Evaluación Inicial",
      step: "02",
      description: "Primera consulta de 2 horas ($700-$800 MXN) para conocer tu historia, evaluar tu situación y definir objetivos claros.",
    },
    {
      icon: TrendingUp,
      step: "03",
      title: "Plan Terapéutico",
      description: "Diseño un plan personalizado usando enfoques como EMDR, Terapia Estratégica o Sistémica según tus necesidades.",
    },
    {
      icon: Shield,
      step: "04",
      title: "Seguimiento",
      description: "Sesiones de 50 min ($700 MXN) semanales o quincenales. Verás progreso gradual con herramientas prácticas.",
    },
  ];

  return (
    <section
      id="expect"
      className="py-24 px-4 relative"
      style={{ backgroundColor: theme.background }}
    >
      <div className="max-w-7xl mx-auto">
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
            QUÉ ESPERAR
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
            style={{ color: theme.text }}
          >
            Tu primera sesión{" "}
            <span style={{ color: theme.primary }}>paso a paso</span>
          </h2>
          <p
            className="text-xl max-w-2xl mx-auto"
            style={{ color: theme.textMuted }}
          >
            Entiendo que comenzar terapia puede generar ansiedad.
            Por eso quiero que sepas exactamente qué esperar.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              <GlassCard className="text-center h-full">
                {/* Step number */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold"
                  style={{
                    backgroundColor: theme.primary,
                    color: "#FFFFFF",
                  }}
                >
                  {item.step}
                </div>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${theme.primary}22` }}
                >
                  <item.icon
                    className="w-6 h-6"
                    style={{ color: theme.primaryDark }}
                  />
                </div>

                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: theme.text }}
                >
                  {item.title}
                </h3>
                <p style={{ color: theme.textMuted }}>
                  {item.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Important Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <GlassCard className="text-center">
            <Clock className="w-8 h-8 mx-auto mb-3" style={{ color: theme.primary }} />
            <h4 className="font-bold mb-2" style={{ color: theme.text }}>
              Cancelación Gratuita
            </h4>
            <p className="text-sm" style={{ color: theme.textMuted }}>
              Cancela hasta 24 horas antes sin costo. Reembolso completo.
            </p>
          </GlassCard>

          <GlassCard className="text-center">
            <CheckCircle className="w-8 h-8 mx-auto mb-3" style={{ color: theme.primary }} />
            <h4 className="font-bold mb-2" style={{ color: theme.text }}>
              Confidencialidad Total
            </h4>
            <p className="text-sm" style={{ color: theme.textMuted }}>
              Tu información está protegida bajo secreto profesional (HIPAA compliant).
            </p>
          </GlassCard>

          <GlassCard className="text-center">
            <Shield className="w-8 h-8 mx-auto mb-3" style={{ color: theme.primary }} />
            <h4 className="font-bold mb-2" style={{ color: theme.text }}>
              Pago Seguro
            </h4>
            <p className="text-sm" style={{ color: theme.textMuted }}>
              Efectivo, tarjeta o transferencia. No acepto seguros de gastos médicos.
            </p>
          </GlassCard>
        </motion.div>

        {/* Reassurance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p
            className="text-lg max-w-3xl mx-auto italic"
            style={{ color: theme.textMuted }}
          >
            <span style={{ color: theme.primary, fontWeight: 600 }}>
              "La vida no es una serie de errores, mistakes y malas decisiones;
              es un conjunto de oportunidades nuevas y cambiantes para colectar
              experiencias de madurez, responsabilidad y felicidad."
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
