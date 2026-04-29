"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import { adminColors as colors } from "@/lib/adminColors";

export default function AdminDashboard() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    pacientes: 0,
    documentos: 0,
    tests: 0,
    citas: 0,
  });

  useEffect(() => {
    setIsClient(true);
    // checkAuth debe resolverse antes de cargar datos para evitar queries sin sesión
    checkAuth().then((authenticated) => {
      if (authenticated) loadStats();
    });
  }, []);

  if (!isClient) return null;

  async function checkAuth(): Promise<boolean> {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/admin/login");
        return false;
      }
      setLoading(false);
      return true;
    } catch (err) {
      console.error("Error verificando sesión:", err);
      setLoading(false);
      router.push("/admin/login");
      return false;
    }
  }

  async function loadStats() {
    try {
      const [{ count: pacientesCount }, { count: documentosCount }, { count: testsCount }, { count: citasCount }] =
        await Promise.all([
          supabase.from("pacientes").select("*", { count: "exact", head: true }),
          supabase.from("documentos").select("*", { count: "exact", head: true }),
          supabase.from("tests").select("*", { count: "exact", head: true }),
          supabase.from("citas").select("*", { count: "exact", head: true }),
        ]);

      setStats({
        pacientes: pacientesCount || 0,
        documentos: documentosCount || 0,
        tests: testsCount || 0,
        citas: citasCount || 0,
      });
    } catch (err) {
      console.error("Error cargando estadísticas:", err);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: colors.background }}>
        <div className="text-center">
          <div className="w-16 h-16 rounded-full animate-pulse mx-auto mb-4" style={{ backgroundColor: colors.primaryLight }} />
          <p style={{ color: colors.textMuted }}>Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.background }}>
      {/* Header */}
      <header className="shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold" style={{ color: colors.text }}>
                Dashboard Administrativo
              </h1>
              <p className="mt-2" style={{ color: colors.textMuted }}>
                Mtra. Liliana Bauza - Psicóloga Clínica
              </p>
            </div>
            <button
              onClick={() => router.push("/")}
              className="px-4 py-2 rounded-full font-medium transition-all hover:opacity-80"
              style={{ backgroundColor: colors.primaryLight, color: colors.primaryDark }}
            >
              ← Volver al Sitio
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Pacientes"
            value={stats.pacientes}
            href="/admin/pacientes"
            color={colors.primary}
          />
          <StatCard
            title="Documentos"
            value={stats.documentos}
            href="/admin/documentos"
            color={colors.secondary}
          />
          <StatCard
            title="Tests"
            value={stats.tests}
            href="/admin/tests"
            color={colors.accent}
          />
          <StatCard
            title="Citas"
            value={stats.citas}
            href="/admin/primaryDark"
            color={colors.primaryDark}
          />
        </div>

        {/* Quick Actions */}
        <div className="rounded-lg shadow p-6" style={{ backgroundColor: colors.surface }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: colors.text }}>
            Acciones Rápidas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <QuickActionButton
              label="Nuevo Paciente"
              href="/admin/pacientes/nuevo"
              icon="👤"
              colors={colors}
            />
            <QuickActionButton
              label="Nuevo Documento"
              href="/admin/documentos/nuevo"
              icon="📄"
              colors={colors}
            />
            <QuickActionButton
              label="Crear Test"
              href="/admin/tests/crear"
              icon="📋"
              colors={colors}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

function StatCard({ title, value, href, color }: any) {
  return (
    <a
      href={href}
      className="rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p style={{ color: "#6B7280" }} className="text-sm">{title}</p>
          <p className="text-3xl font-bold" style={{ color: "#3D2929" }}>{value}</p>
        </div>
        <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: color }}>
          <span className="text-white text-xl">→</span>
        </div>
      </div>
    </a>
  );
}

function QuickActionButton({ label, href, icon, colors }: any) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 p-4 border-2 rounded-lg transition-all"
      style={{
        borderColor: `${colors.primary}44`,
        backgroundColor: colors.background,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = colors.primary;
        e.currentTarget.style.backgroundColor = colors.primaryLight;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = `${colors.primary}44`;
        e.currentTarget.style.backgroundColor = colors.background;
      }}
    >
      <span className="text-2xl">{icon}</span>
      <span className="font-medium" style={{ color: colors.text }}>{label}</span>
    </a>
  );
}
