"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { adminColors as colors } from "@/lib/adminColors";
import { Calendar, Clock, Phone, User, CheckCircle, XCircle, RefreshCw, ExternalLink } from "lucide-react";
import { getAppointments, type ZotekAppointment } from "@/lib/zotekClient";

const ZOTEK_PORTAL = process.env.NEXT_PUBLIC_ZOTEK_API_URL ?? "https://zotek-ia.web.app";

const STATUS_LABEL: Record<string, string> = {
  pending: "Pendiente",
  confirmed: "Confirmada",
  cancelled: "Cancelada",
};

const STATUS_COLOR: Record<string, string> = {
  pending: "#f59e0b",
  confirmed: "#10b981",
  cancelled: "#ef4444",
};

export default function CitasPage() {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [tokenInput, setTokenInput] = useState("");
  const [citas, setCitas] = useState<ZotekAppointment[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Persist token in sessionStorage
  useEffect(() => {
    const saved = sessionStorage.getItem("zotek_admin_token");
    if (saved) { setToken(saved); }
  }, []);

  useEffect(() => {
    if (!token) return;
    setLoading(true);
    setError("");
    getAppointments(token)
      .then(data => setCitas(data.sort((a, b) => new Date(b.date_time).getTime() - new Date(a.date_time).getTime())))
      .catch(e => {
        setError(e.message);
        if (e.message.includes("401") || e.message.includes("403")) {
          setToken("");
          sessionStorage.removeItem("zotek_admin_token");
        }
      })
      .finally(() => setLoading(false));
  }, [token]);

  function handleLogin() {
    if (!tokenInput.trim()) return;
    sessionStorage.setItem("zotek_admin_token", tokenInput.trim());
    setToken(tokenInput.trim());
    setTokenInput("");
  }

  // Login form
  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: colors.background }}>
        <div className="w-full max-w-sm rounded-2xl shadow-xl p-8 space-y-5" style={{ backgroundColor: colors.surface }}>
          <div className="text-center">
            <Calendar className="w-12 h-12 mx-auto mb-3" style={{ color: colors.primary }} />
            <h1 className="text-xl font-bold" style={{ color: colors.text }}>Citas — Zotek</h1>
            <p className="text-sm mt-1" style={{ color: colors.textMuted }}>
              Ingresa tu token de administrador de Zotek para ver las citas.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5" style={{ color: colors.text }}>
              Token de acceso
            </label>
            <input
              type="password"
              value={tokenInput}
              onChange={e => setTokenInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleLogin()}
              placeholder="eyJ..."
              className="w-full px-4 py-2.5 border rounded-xl focus:outline-none focus:ring-2 transition-all"
              style={{ borderColor: `${colors.primary}44`, backgroundColor: colors.background, color: colors.text }}
            />
          </div>

          {error && <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">{error}</p>}

          <button
            onClick={handleLogin}
            disabled={!tokenInput.trim()}
            className="w-full py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90 disabled:opacity-40"
            style={{ backgroundColor: colors.primary }}
          >
            Ver mis citas
          </button>

          <div className="text-center">
            <a
              href={`${ZOTEK_PORTAL}/portal/`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm hover:underline"
              style={{ color: colors.primaryDark }}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Ir al Portal Zotek
            </a>
          </div>

          <button
            onClick={() => router.push("/admin/dashboard")}
            className="w-full text-sm text-center hover:underline"
            style={{ color: colors.textMuted }}
          >
            ← Volver al panel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: colors.background }}>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold" style={{ color: colors.text }}>Mis Citas</h1>
            <p className="text-sm mt-0.5" style={{ color: colors.textMuted }}>
              {citas.length} cita{citas.length !== 1 ? "s" : ""} registrada{citas.length !== 1 ? "s" : ""}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => { setToken(""); sessionStorage.removeItem("zotek_admin_token"); }}
              className="text-sm px-4 py-2 rounded-xl border transition-all hover:bg-red-50"
              style={{ borderColor: "#ef444444", color: "#ef4444" }}
            >
              Cerrar sesión
            </button>
            <button
              onClick={() => setToken(t => t + " ")}
              className="p-2 rounded-xl border transition-all hover:opacity-70"
              style={{ borderColor: `${colors.primary}44`, color: colors.primary }}
              title="Actualizar"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={() => router.push("/admin/dashboard")}
              className="px-4 py-2 rounded-xl text-sm font-medium text-white"
              style={{ backgroundColor: colors.primary }}
            >
              ← Panel
            </button>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="px-4 py-3 rounded-xl text-sm" style={{ backgroundColor: "#fee2e2", color: "#dc2626" }}>
            {error}
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="text-center py-16" style={{ color: colors.textMuted }}>
            <RefreshCw className="w-8 h-8 mx-auto mb-3 animate-spin" style={{ color: colors.primary }} />
            Cargando citas...
          </div>
        )}

        {/* Empty */}
        {!loading && !error && citas.length === 0 && (
          <div className="text-center py-16 rounded-2xl" style={{ backgroundColor: colors.surface }}>
            <Calendar className="w-12 h-12 mx-auto mb-3" style={{ color: colors.primaryLight }} />
            <p style={{ color: colors.textMuted }}>No hay citas registradas aún.</p>
          </div>
        )}

        {/* Citas grid */}
        {!loading && citas.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2">
            {citas.map(c => {
              const dt = new Date(c.date_time);
              const dateLabel = dt.toLocaleDateString("es-MX", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
              const timeLabel = dt.toLocaleTimeString("es-MX", { hour: "2-digit", minute: "2-digit" });
              return (
                <div
                  key={c.id}
                  className="rounded-2xl p-5 shadow-sm border transition-shadow hover:shadow-md"
                  style={{ backgroundColor: colors.surface, borderColor: `${STATUS_COLOR[c.status]}33` }}
                >
                  {/* Status badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ backgroundColor: `${STATUS_COLOR[c.status]}20`, color: STATUS_COLOR[c.status] }}
                    >
                      {c.status === "confirmed" ? <CheckCircle className="w-3 h-3 inline mr-1" /> : c.status === "cancelled" ? <XCircle className="w-3 h-3 inline mr-1" /> : null}
                      {STATUS_LABEL[c.status] ?? c.status}
                    </span>
                    <span className="text-xs" style={{ color: colors.textMuted }}>#{c.id}</span>
                  </div>

                  {/* Patient */}
                  <div className="flex items-start gap-2 mb-2">
                    <User className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.primary }} />
                    <p className="font-semibold text-sm" style={{ color: colors.text }}>{c.name}</p>
                  </div>

                  {/* Contact */}
                  {c.phone && (
                    <div className="flex items-center gap-2 mb-1">
                      <Phone className="w-4 h-4 flex-shrink-0" style={{ color: colors.textMuted }} />
                      <a href={`tel:${c.phone}`} className="text-sm hover:underline" style={{ color: colors.textMuted }}>
                        {c.phone}
                      </a>
                    </div>
                  )}

                  {/* Date & time */}
                  <div className="flex items-center gap-2 mt-3">
                    <Calendar className="w-4 h-4 flex-shrink-0" style={{ color: colors.primary }} />
                    <span className="text-sm capitalize" style={{ color: colors.text }}>{dateLabel}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="w-4 h-4 flex-shrink-0" style={{ color: colors.primary }} />
                    <span className="text-sm" style={{ color: colors.text }}>{timeLabel}</span>
                  </div>

                  {c.notes && (
                    <p className="mt-3 text-xs italic rounded-lg px-3 py-2" style={{ backgroundColor: `${colors.primary}10`, color: colors.textMuted }}>
                      {c.notes}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
