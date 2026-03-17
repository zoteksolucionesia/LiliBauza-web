"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Award, Star } from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/hooks/useTheme";

export function Footer() {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="py-16 px-4"
      style={{ backgroundColor: theme.background }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3
              className="text-2xl font-serif font-bold mb-4"
              style={{ color: theme.text }}
            >
              Mtra. <span style={{ color: theme.primary }}>Liliana Bauza</span>
            </h3>
            <p className="text-base leading-relaxed mb-4" style={{ color: theme.textMuted }}>
              Psicóloga | Cédula Profesional: 3398478
            </p>
            <p className="text-sm leading-relaxed" style={{ color: theme.textMuted }}>
              Especialista en trauma y conducta compulsiva. Más de 30 años
              acompañando personas en su sanación emocional.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <Star className="w-4 h-4" style={{ color: theme.accent }} />
              <span className="text-sm font-semibold" style={{ color: theme.text }}>
                228+ reseñas verificadas
              </span>
            </div>
          </div>

          {/* Contact Info - NAP */}
          <div>
            <h4
              className="text-lg font-semibold mb-4"
              style={{ color: theme.text }}
            >
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: theme.primary }} />
                <span style={{ color: theme.textMuted }}>
                  Ceiba 105, Colonia Leandro Valle<br />
                  Villa de Álvarez, Colima 28989
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" style={{ color: theme.primary }} />
                <a
                  href="tel:+523121456877"
                  className="hover:underline"
                  style={{ color: theme.textMuted }}
                >
                  312 145 6877
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" style={{ color: theme.primary }} />
                <a
                  href="mailto:contacto@lilianabauza.com"
                  className="hover:underline"
                  style={{ color: theme.textMuted }}
                >
                  contacto@lilianabauza.com
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4
              className="text-lg font-semibold mb-4"
              style={{ color: theme.text }}
            >
              Servicios
            </h4>
            <ul className="space-y-2">
              {[
                "Primera Consulta ($700-$800)",
                "Terapia Individual ($700)",
                "Terapia de Pareja ($800)",
                "Terapia Familiar ($900)",
                "EMDR ($700)",
                "Consulta en Línea ($700)",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="hover:underline transition-colors text-sm"
                    style={{ color: theme.textMuted }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Credentials */}
          <div>
            <h4
              className="text-lg font-semibold mb-4"
              style={{ color: theme.text }}
            >
              Credenciales
            </h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" style={{ color: theme.primary }} />
                <span className="text-sm" style={{ color: theme.textMuted }}>
                  Maestría en Terapia Familiar
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" style={{ color: theme.primary }} />
                <span className="text-sm" style={{ color: theme.textMuted }}>
                  Especialista en Trauma
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" style={{ color: theme.primary }} />
                <span className="text-sm" style={{ color: theme.textMuted }}>
                  Terapia Sistémica
                </span>
              </div>
            </div>

            <h4
              className="text-lg font-semibold mb-4"
              style={{ color: theme.text }}
            >
              Sígueme
            </h4>
            <div className="flex gap-4 mb-6">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                  style={{
                    backgroundColor: theme.primaryLight,
                    color: theme.primaryDark
                  }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Zotek Logo Section - Full width, centered at bottom */}
        <div
          className="mt-16 pt-8 border-t flex flex-col items-center justify-center"
          style={{ borderColor: `${theme.primary}22` }}
        >
          <p className="text-xs font-semibold mb-2" style={{ color: theme.textMuted }}>
            Desarrollo por
          </p>
          <div className="mb-3">
            <Image
              src="/images/logo_zotek_principal.svg"
              alt="Zotek Soluciones IA"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>
          <p className="text-xs" style={{ color: theme.textMuted }}>
            Contacto: zoteksolucionesia@gmail.com
          </p>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: `${theme.primary}22` }}
        >
          <p className="text-sm" style={{ color: theme.textMuted }}>
            © {currentYear} Mtra. Liliana Bauza. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm hover:underline" style={{ color: theme.textMuted }}>
              Aviso de Privacidad
            </a>
            <a href="#" className="text-sm hover:underline" style={{ color: theme.textMuted }}>
              Términos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
