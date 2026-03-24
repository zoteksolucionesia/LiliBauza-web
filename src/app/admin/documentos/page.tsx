"use client";

import { useRouter } from "next/navigation";
import { adminColors as colors } from "@/lib/adminColors";
import { FileText } from "lucide-react";

export default function DocumentosPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: colors.background }}>
      <div className="text-center p-12 rounded-3xl shadow-lg" style={{ backgroundColor: colors.surface }}>
        <FileText className="w-16 h-16 mx-auto mb-4" style={{ color: colors.primary }} />
        <h1 className="text-2xl font-bold mb-2" style={{ color: colors.text }}>Módulo de Documentos</h1>
        <p className="mb-6" style={{ color: colors.textMuted }}>Esta sección está en construcción.</p>
        <button
          onClick={() => router.push("/admin/dashboard")}
          className="px-6 py-2 rounded-full text-white font-medium"
          style={{ backgroundColor: colors.primary }}
        >
          Volver al Panel
        </button>
      </div>
    </div>
  );
}
