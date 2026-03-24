"use client";

import { motion } from "framer-motion";
import { Heart, Users, Brain, Sparkles, Clock, Shield, Eye, Home, Phone } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { useTheme } from "@/hooks/useTheme";

import { content } from "@/constants/content";

export function Services() {
  const { theme } = useTheme();
  const { services } = content;

  const getIconColor = (color: string) => {
    switch (color) {
      case "primary":
        return theme.primary;
      case "secondary":
        return theme.secondary;
      case "accent":
        return theme.accent;
      default:
        return theme.primary;
    }
  };

  const getIcon = (title: string) => {
    const iconMap: Record<string, any> = {
      "Primera Consulta": Heart,
      "Consultas de Seguimiento": Clock,
      "Consulta en Línea": Phone,
      "Terapia de Pareja": Users,
      "Terapia Familiar": Home,
      "EMDR": Eye,
      "Estrés Postraumático": Shield,
      "Ansiedad y Depresión": Brain,
      "Autoestima y Crecimiento": Sparkles,
    };
    return iconMap[title] || Heart;
  };

  return (
    <section
      id="services"
      className="py-24 px-4 relative"
      style={{ backgroundColor: theme.background }}
    >
      {/* Background decoration */}
      <div
        className="absolute top-1/2 left-0 w-72 h-72 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: theme.primaryLight }}
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
            {services.badge}
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
            style={{ color: theme.text }}
          >
            {services.title.main}
            <span style={{ color: theme.primary }}>{services.title.highlight}</span>
            {services.title.suffix}
          </h2>
          <p
            className="text-xl max-w-2xl mx-auto"
            style={{ color: theme.textMuted }}
          >
            {services.description}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.items.map((service, index) => {
            const Icon = getIcon(service.title);
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="h-full">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${getIconColor(service.color)}22` }}
                  >
                    <Icon
                      className="w-7 h-7"
                      style={{ color: getIconColor(service.color) }}
                    />
                  </div>

                  <div className="flex justify-between items-start mb-3">
                    <h3
                      className="text-xl font-bold"
                      style={{ color: theme.text }}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <div className="mb-3">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-sm font-bold"
                      style={{
                        backgroundColor: getIconColor(service.color),
                        color: "#FFFFFF",
                      }}
                    >
                      {service.price}
                    </span>
                  </div>

                  <p className="text-sm mb-2" style={{ color: theme.textMuted }}>
                    <Clock className="w-4 h-4 inline mr-1" />
                    {service.duration}
                  </p>

                  <p style={{ color: theme.textMuted }}>
                    {service.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Payment Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <GlassCard>
            <p className="text-lg mb-4" style={{ color: theme.text }}>
              <strong>Métodos de Pago:</strong> {services.payment.methods}
            </p>
            <p className="text-sm" style={{ color: theme.textMuted }}>
              {services.payment.warning}
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
