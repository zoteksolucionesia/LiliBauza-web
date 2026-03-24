export const content = {
  brand: {
    title: "Mtra.",
    name: "Liliana Bauza",
    specialty: "Psicóloga Clínica",
    license: "3398478",
    email: "contacto@lilianabauza.com",
    phone: "312 145 6877",
    address: "Ceiba 105, Colonia Leandro Valle, Villa de Álvarez, Colima 28989",
    coords: { lat: 19.2667, lng: -103.7333 },
    logo_text: "Lili Bauza",
    tagline: "Psicoterapia con enfoque humano y profesional. Acompañándote en tu proceso de sanación y crecimiento personal.",
    footer_brand: "Lili Bauza Psicoterapia",
  },
  quickLinks: [
    { label: "Inicio", href: "#hero" },
    { label: "Sobre Mí", href: "#about" },
    { label: "Servicios", href: "#services" },
    { label: "Qué Esperar", href: "#expect" },
    { label: "Testimonios", href: "#testimonials" },
    { label: "Contacto", href: "#contact" },
  ],
  contact: {
    location: {
      address: "Ceiba 105, Colonia Leandro Valle, Villa de Álvarez, Colima 28989",
      googleMaps: "https://goo.gl/maps/example", // Placeholder
    },
    phone: {
      display: "+52 312 145 6877",
      value: "312 145 6877",
    },
    email: {
      display: "contacto@lilianabauza.com",
      value: "contacto@lilianabauza.com",
    }
  },
  hero: {
    badge: "Psicóloga | Cédula: 3398478",
    title: {
      prefix: "Mtra.",
      name: "Liliana Bauza",
    },
    subtitle: "Especialista en trauma y conducta compulsiva",
    description: "Más de 30 años acompañando personas en su proceso de sanación emocional con enfoques basados en evidencia y calidez humana.",
    cta: {
      book: "Agendar Cita - $700 MXN",
      services: "Ver Servicios",
    },
    stats: [
      { label: "Años de experiencia", value: "30+" },
      { label: "Reseñas verificadas", value: "228+" },
      { label: "Confidencial", value: "100%" },
    ],
    languages: ["🇪🇸 Español", "🇺🇸 English"],
    license: {
      label: "Cédula Prof.",
      number: "3398478",
    }
  },
  about: {
    badge: "SOBRE MÍ",
    description: [
      "Soy especialista en trauma y conducta compulsiva, con más de **30 años de experiencia** acompañando a personas en su proceso de sanación emocional.",
      "Mi enfoque combina la Terapia Estratégica, Terapia Sistémica Breve, Terapia Conductual y Terapia Humanista. Creo firmemente que *\"la vida no es una serie de errores, sino oportunidades nuevas para colectar experiencias de madurez, responsabilidad y felicidad.\"*"
    ],
    specialties: [
      { label: "Trauma y Estrés Postraumático" },
      { label: "Conducta Compulsiva" },
      { label: "Terapia Estratégica" },
      { label: "Terapia Familiar" },
    ],
    education: [
      { degree: "Maestría en Terapia Familiar", institution: "CEFAP & Universidad Autónoma de Campeche", year: "2017" },
      { degree: "Diplomado en Intervención de Crisis", institution: "CONTACTO, Jalisco", year: "2017" },
      { degree: "Diplomado en Terapia Breve y MRI", institution: "CEFAP", year: "2015" },
      { degree: "Terapia Humanista Centrada en la Persona", institution: "UVM MÉXICO", year: "1995" },
    ]
  },
  services: {
    badge: "SERVICIOS Y HONORARIOS",
    title: {
      main: "¿Cómo puedo ",
      highlight: "ayudarte",
      suffix: "?"
    },
    description: "Enfoques basados en evidencia con calidez humana. Sesiones individuales, de pareja y familiares.",
    items: [
      {
        title: "Primera Consulta",
        price: "$700 - $800 MXN",
        duration: "2 horas",
        description: "Evaluación inicial completa para entender tu situación y definir objetivos terapéuticos.",
        color: "primary",
      },
      {
        title: "Consultas de Seguimiento",
        price: "$700 MXN",
        duration: "50 min",
        description: "Sesiones continuas para trabajar en tus objetivos y progreso emocional.",
        color: "primary",
      },
      {
        title: "Consulta en Línea",
        price: "$700 MXN",
        duration: "50 min",
        description: "Terapia desde la comodidad de tu hogar vía videollamada segura.",
        color: "secondary",
      },
      {
        title: "Terapia de Pareja",
        price: "$800 MXN",
        duration: "80 min",
        description: "Mejora la comunicación, resuelve conflictos y fortalece el vínculo.",
        color: "accent",
      },
      {
        title: "Terapia Familiar",
        price: "$900 MXN",
        duration: "90 min",
        description: "Trabajo sistémico con familias para sanar dinámicas relacionales.",
        color: "secondary",
      },
      {
        title: "EMDR",
        price: "$700 MXN",
        duration: "50 min",
        description: "Desensibilización y Reprocesamiento por Movimientos Oculares para trauma.",
        color: "accent",
      },
      {
        title: "Estrés Postraumático",
        price: "$700 MXN",
        duration: "50 min",
        description: "Tratamiento especializado para trauma y estrés postraumático.",
        color: "primary",
      },
      {
        title: "Ansiedad y Depresión",
        price: "$700 MXN",
        duration: "50 min",
        description: "Tratamiento basado en evidencia para trastornos de ansiedad y depresión.",
        color: "secondary",
      },
      {
        title: "Autoestima y Crecimiento",
        price: "$700 MXN",
        duration: "50 min",
        description: "Transforma tu relación contigo mismo y desarrolla confianza.",
        color: "accent",
       },
    ],
    payment: {
      methods: "Efectivo, Tarjeta de Crédito/Débito, Transferencia",
      warning: "⚠️ No acepto seguros de gastos médicos mayores. Particular."
    }
  },
  testimonials: {
    badge: "TESTIMONIOS",
    title: {
      main: "Historias de ",
      highlight: "transformación"
    },
    description: "Más de 228 reseñas verificadas en Doctoralia. Personas que confiaron en mí para acompañarlas en su proceso.",
    items: [
      {
        text: "Muy contenta con la profesionalismo y objetividad de la Mtra. Liliana Bauza. La terapia nos apoya muchísimo en la vida diaria.",
        author: "Cristina",
        date: "5 de Marzo, 2025",
        rating: 5,
      },
      {
        text: "Una experiencia gratificante y reconfortante. Muy profesional, amable y abierta a las ideas del paciente. La recomiendo ampliamente.",
        author: "Daniel Rincón Avalos",
        date: "2 de Julio, 2024",
        rating: 5,
      },
      {
        text: "Su empatía y paciencia al explicar cada detalle me hace valorarla como mi psicóloga. Me hace sentir cómoda y con confianza.",
        author: "Paulina Sánchez Riverón",
        date: "15 de Marzo, 2024",
        rating: 5,
      },
      {
        text: "Buena amabilidad, preguntas sobre el problema, consejos para mejorar y resultados rápidos de las terapias. Muy recomendada.",
        author: "Paulo Rgez. N.",
        date: "12 de Febrero, 2026",
        rating: 5,
      },
      {
        text: "¡Superó mis expectativas! Muy profesional, comprensiva y respetuosa. ¡Totalmente recomendada!",
        author: "Alejandro Juárez",
        date: "4 de Noviembre, 2025",
        rating: 5,
      },
      {
        text: "La Mtra. Bauza tiene una forma única de hacer sentir escuchado y comprendido. Mi autoestima ha cambiado completamente después de un año de terapia.",
        author: "A. L.",
        date: "Paciente de 1 año",
        rating: 5,
      },
    ],
    stats: [
      { number: "228+", label: "Reseñas Verificadas" },
      { number: "30+", label: "Años de Experiencia" },
      { number: "1000+", label: "Pacientes Atendidos" },
      { number: "100%", label: "Confidencialidad" },
    ]
  },
  expect: {
    badge: "QUÉ ESPERAR",
    title: {
      main: "Tu primera sesión ",
      highlight: "paso a paso"
    },
    description: "Entiendo que comenzar terapia puede generar ansiedad. Por eso quiero que sepas exactamente qué esperar.",
    steps: [
      {
        step: "01",
        title: "Primer Contacto",
        description: "Agenda tu cita inicial. Puedes hacerlo de forma presencial en Villa de Álvarez o en línea desde cualquier lugar.",
      },
      {
        title: "Evaluación Inicial",
        step: "02",
        description: "Primera consulta de 2 horas ($700-$800 MXN) para conocer tu historia, evaluar tu situación y definir objetivos claros.",
      },
      {
        step: "03",
        title: "Plan Terapéutico",
        description: "Diseño un plan personalizado usando enfoques como EMDR, Terapia Estratégica o Sistémica según tus necesidades.",
      },
      {
        step: "04",
        title: "Seguimiento",
        description: "Sesiones de 50 min ($700 MXN) semanales o quincenales. Verás progreso gradual con herramientas prácticas.",
      },
    ],
    cards: [
      {
        title: "Cancelación Gratuita",
        description: "Cancela hasta 24 horas antes sin costo. Reembolso completo.",
      },
      {
        title: "Confidencialidad Total",
        description: "Tu información está protegida bajo secreto profesional (HIPAA compliant).",
      },
      {
        title: "Pago Seguro",
        description: "Efectivo, tarjeta o transferencia. No acepto seguros de gastos médicos.",
      },
    ],
    quote: "La vida no es una serie de errores, mistakes y malas decisiones; es un conjunto de oportunidades nuevas y cambiantes para colectar experiencias de madurez, responsabilidad y felicidad."
  },
  social: {
    instagram: "https://www.instagram.com/lilianabauza/",
    facebook: "https://www.facebook.com/lilianabauza/",
    linkedin: "https://www.linkedin.com/in/lilianabauza/",
    whatsapp: "https://wa.me/523121456877",
    doctoralia: "https://www.doctoralia.com.mx/liliana-bauza/psicologo/villa-de-alvarez"
  },
  booking: {
    // Cal.com (prueba con cuenta de Omar, cambiar a la cuenta de Lili cuando esté lista)
    // cal_username: "lilibauza" (pendiente)
    cal_url: "https://cal.com/omar-morentin-lopez-ywxs6b/30min",
    modal_title: "Agenda tu Cita",
    loading_text: "Cargando agenda...",
    fallback_text: "¿No carga? Haz clic aquí para abrir el calendario",
  }
};
