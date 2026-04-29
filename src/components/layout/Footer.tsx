"use client";

import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  ChevronRight, 
  Heart, 
  Stethoscope 
} from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/hooks/useTheme";
import { content } from "@/constants/content";

export function Footer() {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();
  const { brand, services, quickLinks, social, contact } = content;

  return (
    <footer
      id="contact"
      className="pt-24 pb-12 px-4 relative overflow-hidden"
      style={{
        backgroundColor: theme.text,
        color: "#FFFFFF",
      }}
    >
      {/* Background decoration */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: theme.primary }}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo_terhfam.png"
                  alt="Logo"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <h2 className="text-3xl font-serif font-bold italic tracking-tight">
                {brand.logo_text}
              </h2>
            </div>
            <p className="opacity-70 leading-relaxed max-w-xs text-sm">
              {brand.tagline}
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ y: -3 }}
                href={social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: `${theme.primary}33` }}
              >
                <Phone className="w-5 h-5" style={{ color: theme.primaryLight }} />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: `${theme.primary}33` }}
              >
                <Instagram className="w-5 h-5" style={{ color: theme.primaryLight }} />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href={social.doctoralia}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
               style={{ backgroundColor: `${theme.primary}33` }}
              >
                <Stethoscope className="w-5 h-5" style={{ color: theme.primaryLight }} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-6 h-1 rounded-full" style={{ backgroundColor: theme.primary }} />
              Explorar
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="opacity-70 hover:opacity-100 transition-opacity flex items-center gap-2"
                  >
                    <ChevronRight className="w-4 h-4" style={{ color: theme.primary }} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-6 h-1 rounded-full" style={{ backgroundColor: theme.primary }} />
              Servicios
            </h3>
            <ul className="space-y-4">
              {services.items.slice(0, 5).map((service: any) => (
                <li key={service.title} className="opacity-70 text-sm">
                  {service.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <span className="w-6 h-1 rounded-full" style={{ backgroundColor: theme.primary }} />
              Contacto
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 shrink-0" style={{ color: theme.primary }} />
                <p className="opacity-70 text-sm leading-relaxed">
                  {contact.location.address}
                </p>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 shrink-0" style={{ color: theme.primary }} />
                <p className="opacity-70 text-sm">
                  {contact.phone.value}
                </p>
              </div>
              <div className="flex gap-3">
                <Mail className="w-5 h-5 shrink-0" style={{ color: theme.primary }} />
                <p className="opacity-70 text-sm">
                  {contact.email.value}
                </p>
              </div>
            </div>
            {/* 
            <a
              href={social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
             className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all hover:shadow-lg hover:scale-105 active:scale-95"
              style={{
                backgroundColor: theme.primary,
                color: theme.text,
              }}
            >
              <Heart className="w-4 h-4" />
              Agendar Cita
            </a>
            */}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full opacity-10 mb-8" style={{ backgroundColor: "#FFFFFF" }} />

        {/* Bottom Credits */}
        <div className="flex flex-col items-center gap-8 text-xs">
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6 opacity-60">
            <p>© {currentYear} {brand.footer_brand}. Todos los derechos reservados.</p>
            <div className="flex gap-8">
              <a href="/aviso-de-privacidad" className="hover:underline">Aviso de Privacidad</a>
              <a href="#" className="hover:underline">Términos de Uso</a>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-3 py-6 border-t border-white/5 w-full">
            <span className="text-xs uppercase tracking-[0.2em] opacity-50">Desarrollado por</span>
            <div className="relative w-48 h-12 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
              <Image
                src="/images/logo_zotek_principal.svg"
                alt="Zotek Solutions IA"
                fill
                className="object-contain"
              />
            </div>
            <a 
              href="mailto:zoteksolucionesia@gmail.com" 
              className="text-white/40 hover:text-white transition-colors"
            >
              Contacto: zoteksolucionesia@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
