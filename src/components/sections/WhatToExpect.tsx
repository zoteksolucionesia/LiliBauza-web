"use client";

import { motion } from "framer-motion";
import { ClipboardList, MessageCircle, TrendingUp, Shield, Clock, CheckCircle } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { useTheme } from "@/hooks/useTheme";
import { content } from "@/constants/content";

export function WhatToExpect() {
  const { theme } = useTheme();
  const { expect } = content;

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
            {expect.badge}
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
            style={{ color: theme.text }}
          >
            {expect.title.main}
            <span style={{ color: theme.primary }}>{expect.title.highlight}</span>
          </h2>
          <p
            className="text-xl max-w-2xl mx-auto"
            style={{ color: theme.textMuted }}
          >
            {expect.description}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expect.steps.map((item: any, index: number) => {
            const icons = [MessageCircle, ClipboardList, TrendingUp, Shield];
            const Icon = icons[index % icons.length];
            return (
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
                    <Icon
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
            );
          })}
        </div>

        {/* Important Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {expect.cards.map((card: any, index: number) => {
            const icons = [Clock, CheckCircle, Shield];
            const Icon = icons[index % icons.length];
            return (
              <GlassCard key={card.title} className="text-center">
                <Icon className="w-8 h-8 mx-auto mb-3" style={{ color: theme.primary }} />
                <h4 className="font-bold mb-2" style={{ color: theme.text }}>
                  {card.title}
                </h4>
                <p className="text-sm" style={{ color: theme.textMuted }}>
                  {card.description}
                </p>
              </GlassCard>
            );
          })}
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
              "{expect.quote}"
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
