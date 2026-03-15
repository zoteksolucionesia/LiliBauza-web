"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calendar } from "lucide-react";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onBookClick: () => void;
}

export function Header({ onBookClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Inicio", href: "#hero" },
    { label: "Sobre Mí", href: "#about" },
    { label: "Servicios", href: "#services" },
    { label: "Qué Esperar", href: "#expect" },
    { label: "Testimonios", href: "#testimonials" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-3" : "py-5"
      )}
      style={{
        backgroundColor: isScrolled ? theme.surface : `${theme.background}F2`,
        backdropFilter: isScrolled ? "blur(20px)" : "blur(10px)",
        borderBottom: isScrolled ? `1px solid ${theme.primary}33` : `1px solid ${theme.primary}11`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="text-2xl md:text-3xl font-serif font-bold"
            style={{ color: theme.text }}
            whileHover={{ scale: 1.02 }}
          >
            Lili<span style={{ color: theme.primary }}>Bauza</span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-sm font-medium px-4 py-2 rounded-full transition-all duration-300"
                style={{
                  color: hoveredItem === item.label ? theme.primaryDark : theme.text,
                  backgroundColor: hoveredItem === item.label ? theme.primaryLight : "transparent",
                }}
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <ThemeSwitcher />

            <motion.button
              onClick={onBookClick}
              className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: theme.primary,
                color: "#FFFFFF",
              }}
              whileHover={{ scale: 1.05, backgroundColor: theme.primaryDark }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-4 h-4" />
              Reservar Cita
            </motion.button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg"
              style={{ color: theme.text }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ backgroundColor: theme.surface }}
          >
            <nav className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setHoveredItem(null);
                  }}
                  className="block py-3 px-4 rounded-xl text-lg font-medium transition-all duration-300"
                  style={{
                    color: hoveredItem === item.label ? theme.primaryDark : theme.text,
                    backgroundColor: hoveredItem === item.label ? theme.primaryLight : "transparent",
                  }}
                  onMouseEnter={() => setHoveredItem(item.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.button
                onClick={() => {
                  onBookClick();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold mt-4"
                style={{
                  backgroundColor: theme.primary,
                  color: "#FFFFFF",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Calendar className="w-5 h-5" />
                Reservar Cita
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
