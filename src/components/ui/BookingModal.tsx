"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle, ChevronLeft } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import {
  getSchedules,
  createAppointment,
  generateTimeSlots,
  type ZotekSchedule,
  type BookedSlot,
} from "@/lib/zotekClient";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = "info" | "datetime" | "success";

interface FormState {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  notes: string;
}

const EMPTY_FORM: FormState = { name: "", phone: "", email: "", date: "", time: "", notes: "" };

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const { theme } = useTheme();
  const [step, setStep] = useState<Step>("info");
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [schedules, setSchedules] = useState<ZotekSchedule[]>([]);
  const [booked, setBooked] = useState<BookedSlot[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const reset = useCallback(() => {
    setStep("info");
    setForm(EMPTY_FORM);
    setError("");
  }, []);

  useEffect(() => {
    if (!isOpen) { reset(); return; }
    getSchedules()
      .then(({ schedules, booked }) => {
        setSchedules(schedules);
        setBooked(booked);
      })
      .catch(() => {
        setSchedules([]);
        setBooked([]);
      });
  }, [isOpen, reset]);

  // Dates that have at least one schedule slot
  const availableDates = [...new Set(
    schedules
      .filter(s => s.schedule_date >= new Date().toISOString().slice(0, 10))
      .map(s => s.schedule_date)
  )].sort();

  // Time slots for the selected date, excluyendo los ya reservados
  const bookedTimesForDate = new Set(
    booked.filter(b => b.date === form.date).map(b => b.time)
  );
  const timeSlotsForDate = [...new Set(
    schedules
      .filter(s => s.schedule_date === form.date)
      .flatMap(s => generateTimeSlots(s.start_time, s.end_time))
  )]
    .filter(t => !bookedTimesForDate.has(t))
    .sort();

  function field(key: keyof FormState, value: string) {
    setForm(f => ({ ...f, [key]: value }));
    if (key === "date") setForm(f => ({ ...f, date: value, time: "" }));
  }

  function canGoNext() {
    if (step === "info") return form.name.trim() && form.phone.trim() && form.email.includes("@");
    if (step === "datetime") return form.date && form.time;
    return false;
  }

  async function handleSubmit() {
    setLoading(true);
    setError("");
    try {
      await createAppointment({
        customer_name: form.name,
        phone_number: form.phone,
        email: form.email,
        appointment_date: form.date,
        appointment_time: form.time,
        notes: form.notes || undefined,
      });
      setStep("success");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error al agendar. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  const inputStyle = {
    borderColor: `${theme.primary}55`,
    backgroundColor: theme.background,
    color: theme.text,
  } as React.CSSProperties;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ pointerEvents: "none" }}
          >
            <div
              className="w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden"
              style={{ backgroundColor: theme.surface, pointerEvents: "auto" }}
            >
              {/* Header */}
              <div className="px-6 py-4 flex items-center justify-between" style={{ backgroundColor: theme.primary, color: "#fff" }}>
                <div className="flex items-center gap-3">
                  {step === "datetime" && (
                    <button onClick={() => setStep("info")} className="p-1 hover:bg-white/20 rounded-full transition-colors">
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                  )}
                  <Calendar className="w-5 h-5" />
                  <h3 className="text-lg font-bold">Agenda tu Cita</h3>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Progress bar */}
              {step !== "success" && (
                <div className="h-1 w-full" style={{ backgroundColor: `${theme.primaryLight}44` }}>
                  <div
                    className="h-full transition-all duration-300"
                    style={{ width: step === "info" ? "50%" : "100%", backgroundColor: theme.primary }}
                  />
                </div>
              )}

              <div className="p-6">
                {/* STEP 1: Personal info */}
                {step === "info" && (
                  <div className="space-y-4">
                    <p className="text-sm font-medium" style={{ color: theme.textMuted }}>Paso 1 de 2 — Tus datos</p>

                    <label className="block">
                      <span className="text-sm font-medium flex items-center gap-2 mb-1" style={{ color: theme.text }}>
                        <User className="w-4 h-4" /> Nombre completo
                      </span>
                      <input
                        type="text" value={form.name} onChange={e => field("name", e.target.value)}
                        placeholder="Ej. María González"
                        className="w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 transition-all"
                        style={inputStyle}
                      />
                    </label>

                    <label className="block">
                      <span className="text-sm font-medium flex items-center gap-2 mb-1" style={{ color: theme.text }}>
                        <Phone className="w-4 h-4" /> Teléfono
                      </span>
                      <input
                        type="tel" value={form.phone} onChange={e => field("phone", e.target.value)}
                        placeholder="+52 312 000 0000"
                        className="w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 transition-all"
                        style={inputStyle}
                      />
                    </label>

                    <label className="block">
                      <span className="text-sm font-medium flex items-center gap-2 mb-1" style={{ color: theme.text }}>
                        <Mail className="w-4 h-4" /> Correo electrónico
                      </span>
                      <input
                        type="email" value={form.email} onChange={e => field("email", e.target.value)}
                        placeholder="correo@ejemplo.com"
                        className="w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 transition-all"
                        style={inputStyle}
                      />
                    </label>

                    <label className="block">
                      <span className="text-sm font-medium mb-1 block" style={{ color: theme.text }}>
                        Motivo de consulta <span style={{ color: theme.textMuted }}>(opcional)</span>
                      </span>
                      <textarea
                        value={form.notes} onChange={e => field("notes", e.target.value)}
                        placeholder="Ej. Ansiedad, estrés laboral, duelo..."
                        rows={2}
                        className="w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 transition-all resize-none"
                        style={inputStyle}
                      />
                    </label>

                    <button
                      onClick={() => setStep("datetime")}
                      disabled={!canGoNext()}
                      className="w-full py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90 disabled:opacity-40"
                      style={{ backgroundColor: theme.primary }}
                    >
                      Elegir fecha y hora →
                    </button>
                  </div>
                )}

                {/* STEP 2: Date + time */}
                {step === "datetime" && (
                  <div className="space-y-4">
                    <p className="text-sm font-medium" style={{ color: theme.textMuted }}>Paso 2 de 2 — Fecha y hora</p>

                    <label className="block">
                      <span className="text-sm font-medium flex items-center gap-2 mb-1" style={{ color: theme.text }}>
                        <Calendar className="w-4 h-4" /> Fecha disponible
                      </span>
                      {availableDates.length > 0 ? (
                        <div className="grid grid-cols-3 gap-2 max-h-40 overflow-y-auto pr-1">
                          {availableDates.map(d => {
                            const dt = new Date(d + "T12:00:00");
                            const label = dt.toLocaleDateString("es-MX", { weekday: "short", day: "numeric", month: "short" });
                            return (
                              <button
                                key={d} onClick={() => field("date", d)}
                                className="px-3 py-2 rounded-xl text-xs font-medium border transition-all"
                                style={{
                                  borderColor: form.date === d ? theme.primary : `${theme.primary}33`,
                                  backgroundColor: form.date === d ? theme.primary : "transparent",
                                  color: form.date === d ? "#fff" : theme.text,
                                }}
                              >
                                {label}
                              </button>
                            );
                          })}
                        </div>
                      ) : (
                        <input
                          type="date" value={form.date}
                          min={new Date().toISOString().slice(0, 10)}
                          onChange={e => field("date", e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border focus:outline-none transition-all"
                          style={inputStyle}
                        />
                      )}
                    </label>

                    {form.date && (
                      <label className="block">
                        <span className="text-sm font-medium flex items-center gap-2 mb-1" style={{ color: theme.text }}>
                          <Clock className="w-4 h-4" /> Hora
                        </span>
                        {timeSlotsForDate.length > 0 ? (
                          <div className="grid grid-cols-4 gap-2">
                            {timeSlotsForDate.map(t => (
                              <button
                                key={t} onClick={() => field("time", t)}
                                className="py-2 rounded-xl text-sm font-medium border transition-all"
                                style={{
                                  borderColor: form.time === t ? theme.primary : `${theme.primary}33`,
                                  backgroundColor: form.time === t ? theme.primary : "transparent",
                                  color: form.time === t ? "#fff" : theme.text,
                                }}
                              >
                                {t}
                              </button>
                            ))}
                          </div>
                        ) : (
                          <input
                            type="time" value={form.time}
                            onChange={e => field("time", e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl border focus:outline-none transition-all"
                            style={inputStyle}
                          />
                        )}
                      </label>
                    )}

                    {error && (
                      <p className="text-sm rounded-xl px-4 py-2" style={{ backgroundColor: "#fee2e2", color: "#dc2626" }}>
                        {error}
                      </p>
                    )}

                    <button
                      onClick={handleSubmit}
                      disabled={!canGoNext() || loading}
                      className="w-full py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90 disabled:opacity-40"
                      style={{ backgroundColor: theme.primary }}
                    >
                      {loading ? "Agendando..." : "Confirmar cita"}
                    </button>
                  </div>
                )}

                {/* STEP 3: Success */}
                {step === "success" && (
                  <div className="text-center py-4 space-y-4">
                    <CheckCircle className="w-16 h-16 mx-auto" style={{ color: theme.primary }} />
                    <h4 className="text-xl font-bold" style={{ color: theme.text }}>¡Cita agendada!</h4>
                    <p className="text-sm" style={{ color: theme.textMuted }}>
                      Hemos registrado tu cita para el{" "}
                      <strong>{new Date(form.date + "T12:00:00").toLocaleDateString("es-MX", { weekday: "long", day: "numeric", month: "long" })}</strong>{" "}
                      a las <strong>{form.time}</strong>.
                      <br />
                      Recibirás confirmación por WhatsApp o correo.
                    </p>
                    <button
                      onClick={onClose}
                      className="px-8 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90"
                      style={{ backgroundColor: theme.primary }}
                    >
                      Cerrar
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
