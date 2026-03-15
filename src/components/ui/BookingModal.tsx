"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, User, Mail, Phone, MessageCircle, Video, Home } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState<"type" | "modality" | "form">("type");
  const [appointmentType, setAppointmentType] = useState<string | null>(null);
  const [modality, setModality] = useState<"presencial" | "online" | null>(null);

  const appointmentTypes = [
    {
      id: "primera",
      title: "Primera Consulta",
      price: "$700 - $800 MXN",
      duration: "2 horas",
      description: "Evaluación inicial completa para conocer tu historia y definir objetivos.",
      icon: Calendar,
    },
    {
      id: "seguimiento",
      title: "Consulta de Seguimiento",
      price: "$700 MXN",
      duration: "50 min",
      description: "Sesión continua para trabajar en tus objetivos terapéuticos.",
      icon: Clock,
    },
    {
      id: "pareja",
      title: "Terapia de Pareja",
      price: "$800 MXN",
      duration: "80 min",
      description: "Sesión para trabajar en la comunicación y el vínculo.",
      icon: User,
    },
    {
      id: "familiar",
      title: "Terapia Familiar",
      price: "$900 MXN",
      duration: "90 min",
      description: "Trabajo sistémico con familias para sanar dinámicas.",
      icon: Home,
    },
    {
      id: "emdr",
      title: "EMDR",
      price: "$700 MXN",
      duration: "50 min",
      description: "Desensibilización y Reprocesamiento por Movimientos Oculares.",
      icon: Video,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your booking system
    // For now, just show success
    alert("¡Gracias! La Mtra. Liliana Bauza te contactará pronto al teléfono o email proporcionado para confirmar tu cita.");
    onClose();
    setStep("type");
    setAppointmentType(null);
    setModality(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ pointerEvents: "none" }}
          >
            <div
              className="w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden"
              style={{
                backgroundColor: "var(--color-surface)",
                pointerEvents: "auto",
              }}
            >
              {/* Header */}
              <div
                className="px-6 py-4 flex items-center justify-between"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "#FFFFFF",
                }}
              >
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Agendar Cita</h3>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Cerrar"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Progress indicator */}
              <div className="px-6 py-3" style={{ backgroundColor: "var(--color-background)" }}>
                <div className="flex items-center justify-between">
                  {["Tipo", "Modalidad", "Datos"].map((label, index) => {
                    const currentStep = step === "type" ? 0 : step === "modality" ? 1 : 2;
                    const isActive = index <= currentStep;
                    const isCurrent = index === currentStep;

                    return (
                      <div key={label} className="flex items-center flex-1">
                        <div
                          className="flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold transition-all"
                          style={{
                            backgroundColor: isActive ? "var(--color-primary)" : "var(--color-primary)33",
                            color: isActive ? "#FFFFFF" : "var(--color-text-muted)",
                          }}
                        >
                          {index + 1}
                        </div>
                        <span
                          className="ml-2 text-xs font-medium hidden sm:inline"
                          style={{
                            color: isCurrent ? "var(--color-text)" : "var(--color-text-muted)",
                          }}
                        >
                          {label}
                        </span>
                        {index < 2 && (
                          <div
                            className="flex-1 h-1 mx-2 rounded"
                            style={{
                              backgroundColor: index < currentStep ? "var(--color-primary)" : "var(--color-primary)33",
                            }}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 max-h-[60vh] overflow-y-auto">
                {step === "type" ? (
                  <div className="space-y-3">
                    <p
                      className="text-center mb-4"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      Selecciona el tipo de sesión que deseas agendar
                    </p>

                    {appointmentTypes.map((type) => (
                      <motion.button
                        key={type.id}
                        onClick={() => {
                          setAppointmentType(type.id);
                          if (type.id === "pareja" || type.id === "familiar") {
                            setStep("form");
                          } else {
                            setStep("modality");
                          }
                        }}
                        className="w-full p-4 rounded-2xl border-2 text-left transition-all duration-300 hover:shadow-lg"
                        style={{
                          borderColor: "var(--color-primary)44",
                          backgroundColor: "var(--color-background)",
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4
                            className="text-lg font-bold"
                            style={{ color: "var(--color-text)" }}
                          >
                            {type.title}
                          </h4>
                          <span
                            className="px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap"
                            style={{
                              backgroundColor: "var(--color-primary)",
                              color: "#FFFFFF",
                            }}
                          >
                            {type.price}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm mb-2" style={{ color: "var(--color-text-muted)" }}>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {type.duration}
                          </span>
                        </div>
                        <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                          {type.description}
                        </p>
                      </motion.button>
                    ))}
                  </div>
                ) : step === "modality" ? (
                  <div className="space-y-4">
                    <p
                      className="text-center mb-4"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      ¿Cómo prefieres tu sesión?
                    </p>

                    <motion.button
                      onClick={() => {
                        setModality("presencial");
                        setStep("form");
                      }}
                      className="w-full p-6 rounded-2xl border-2 text-left transition-all duration-300 hover:shadow-lg"
                      style={{
                        borderColor: "var(--color-primary)44",
                        backgroundColor: "var(--color-background)",
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className="w-14 h-14 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: "var(--color-primary)22" }}
                        >
                          <Home className="w-7 h-7" style={{ color: "var(--color-primary)" }} />
                        </div>
                        <div>
                          <h4
                            className="text-lg font-bold"
                            style={{ color: "var(--color-text)" }}
                          >
                            Presencial
                          </h4>
                          <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                            Ceiba 105, Col. Leandro Valle, Villa de Álvarez
                          </p>
                        </div>
                      </div>
                    </motion.button>

                    <motion.button
                      onClick={() => {
                        setModality("online");
                        setStep("form");
                      }}
                      className="w-full p-6 rounded-2xl border-2 text-left transition-all duration-300 hover:shadow-lg"
                      style={{
                        borderColor: "var(--color-primary)44",
                        backgroundColor: "var(--color-background)",
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className="w-14 h-14 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: "var(--color-primary)22" }}
                        >
                          <Video className="w-7 h-7" style={{ color: "var(--color-primary)" }} />
                        </div>
                        <div>
                          <h4
                            className="text-lg font-bold"
                            style={{ color: "var(--color-text)" }}
                          >
                            En Línea
                          </h4>
                          <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                            Videollamada segura desde cualquier lugar
                          </p>
                        </div>
                      </div>
                    </motion.button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <p
                      className="text-center mb-4"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      Completa tus datos para reservar
                    </p>

                    {/* Summary */}
                    <div
                      className="p-4 rounded-xl mb-4"
                      style={{ backgroundColor: "var(--color-primary)11" }}
                    >
                      <p className="font-semibold" style={{ color: "var(--color-text)" }}>
                        {appointmentTypes.find(t => t.id === appointmentType)?.title}
                      </p>
                      <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                        {modality === "presencial" ? "📍 Presencial" : "💻 En Línea"} •{" "}
                        {appointmentTypes.find(t => t.id === appointmentType)?.price}
                      </p>
                    </div>

                    <div>
                      <label
                        className="block text-sm font-medium mb-2"
                        style={{ color: "var(--color-text)" }}
                      >
                        Nombre completo
                      </label>
                      <div className="relative">
                        <User
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
                          style={{ color: "var(--color-text-muted)" }}
                        />
                        <input
                          type="text"
                          required
                          className="w-full pl-12 pr-4 py-3 rounded-xl border-2 focus:outline-none transition-colors"
                          style={{
                            borderColor: "var(--color-primary)44",
                            backgroundColor: "var(--color-background)",
                            color: "var(--color-text)",
                          }}
                          placeholder="Tu nombre"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        className="block text-sm font-medium mb-2"
                        style={{ color: "var(--color-text)" }}
                      >
                        Email
                      </label>
                      <div className="relative">
                        <Mail
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
                          style={{ color: "var(--color-text-muted)" }}
                        />
                        <input
                          type="email"
                          required
                          className="w-full pl-12 pr-4 py-3 rounded-xl border-2 focus:outline-none transition-colors"
                          style={{
                            borderColor: "var(--color-primary)44",
                            backgroundColor: "var(--color-background)",
                            color: "var(--color-text)",
                          }}
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        className="block text-sm font-medium mb-2"
                        style={{ color: "var(--color-text)" }}
                      >
                        Teléfono
                      </label>
                      <div className="relative">
                        <Phone
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
                          style={{ color: "var(--color-text-muted)" }}
                        />
                        <input
                          type="tel"
                          required
                          className="w-full pl-12 pr-4 py-3 rounded-xl border-2 focus:outline-none transition-colors"
                          style={{
                            borderColor: "var(--color-primary)44",
                            backgroundColor: "var(--color-background)",
                            color: "var(--color-text)",
                          }}
                          placeholder="312 XXX XXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        className="block text-sm font-medium mb-2"
                        style={{ color: "var(--color-text)" }}
                      >
                        Mensaje (opcional)
                      </label>
                      <div className="relative">
                        <MessageCircle
                          className="absolute left-4 top-4 w-5 h-5"
                          style={{ color: "var(--color-text-muted)" }}
                        />
                        <textarea
                          rows={3}
                          className="w-full pl-12 pr-4 py-3 rounded-xl border-2 focus:outline-none transition-colors resize-none"
                          style={{
                            borderColor: "var(--color-primary)44",
                            backgroundColor: "var(--color-background)",
                            color: "var(--color-text)",
                          }}
                          placeholder="Cuéntame brevemente qué te trae a terapia..."
                        />
                      </div>
                    </div>

                    <p className="text-xs text-center" style={{ color: "var(--color-text-muted)" }}>
                      🔒 Tus datos están protegidos bajo confidencialidad profesional
                    </p>

                    <div className="flex gap-3 pt-4">
                      <button
                        type="button"
                        onClick={() => setStep("modality")}
                        className="flex-1 px-6 py-3 rounded-full font-semibold border-2 transition-all"
                        style={{
                          borderColor: "var(--color-primary)",
                          color: "var(--color-text)",
                        }}
                      >
                        Atrás
                      </button>
                      <button
                        type="submit"
                        className="flex-1 px-6 py-3 rounded-full font-semibold transition-all hover:shadow-lg"
                        style={{
                          backgroundColor: "var(--color-primary)",
                          color: "#FFFFFF",
                        }}
                      >
                        Solicitar Cita
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
