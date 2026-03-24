import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso de Privacidad | Mtra. Liliana Bauza",
  description: "Consulta el aviso de privacidad de Mtra. Liliana Bauza, Psicóloga Clínica.",
};

export default function AvisoDePrivacidad() {
  const fechaActualizacion = "24 de marzo de 2026";

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Aviso de Privacidad</h1>
        <p className="text-gray-500 mb-8 text-sm">Última actualización: {fechaActualizacion}</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Responsable del tratamiento</h2>
            <p>
              Mtra. <strong>Liliana Bauza</strong>, con domicilio en Villa de Álvarez, Colima, México, es
              responsable del tratamiento de sus datos personales en términos de la{" "}
              <strong>Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</strong>.
            </p>
            <p className="mt-2">
              Correo de contacto:{" "}
              <a href="mailto:lili.bauza@gmail.com" className="text-purple-600 underline">
                lili.bauza@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Datos personales recabados</h2>
            <p>
              A través de este sitio web y del servicio de citas en línea (Calendly), podemos recabar
              los siguientes datos personales:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Nombre completo</li>
              <li>Correo electrónico</li>
              <li>Número telefónico</li>
              <li>Fecha y hora de la cita seleccionada</li>
            </ul>
            <p className="mt-3">
              No se recaban datos personales sensibles (salud, origen étnico, creencias religiosas, etc.)
              a través de este sitio web. La información clínica se gestiona de manera confidencial
              en sesión y fuera de este sistema.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Finalidades del tratamiento</h2>
            <p>Sus datos se utilizan exclusivamente para:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Confirmar y gestionar citas psicológicas</li>
              <li>Enviar recordatorios de su cita</li>
              <li>Responder consultas enviadas por correo o teléfono</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Transferencia de datos</h2>
            <p>
              Sus datos personales no serán transferidos a terceros sin su consentimiento, salvo las
              excepciones previstas en el artículo 37 de la LFPDPPP. La plataforma de agendamiento
              utilizada (Calendly) cuenta con su propia política de privacidad disponible en{" "}
              <a
                href="https://calendly.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 underline"
              >
                calendly.com/privacy
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Derechos ARCO</h2>
            <p>
              Usted puede ejercer sus derechos de <strong>Acceso, Rectificación, Cancelación u Oposición (ARCO)</strong>{" "}
              enviando una solicitud a:{" "}
              <a href="mailto:lili.bauza@gmail.com" className="text-purple-600 underline">
                lili.bauza@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Cambios al aviso de privacidad</h2>
            <p>
              Cualquier modificación a este aviso de privacidad será publicada en este sitio web con
              al menos 5 días de anticipación a su entrada en vigor.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <a href="/" className="text-purple-600 hover:underline text-sm">
            ← Regresar al sitio principal
          </a>
        </div>
      </div>
    </div>
  );
}
