export interface AppFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface AppLegalInfo {
  privacyPolicy: {
    lastUpdated: string;
    summary: string;
    sections: {
      title: string;
      content: string;
      items?: string[];
    }[];
  };
  termsOfService: {
    lastUpdated: string;
    summary: string;
    sections: {
      title: string;
      content: string;
      items?: string[];
    }[];
  };
}

export interface FelinodeApp {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: "Educación & IA" | "Finanzas & Productividad" | "Utilidades" | "Estilo de Vida";
  badge: string;
  status: "available" | "coming_soon" | "beta";
  statusLabel: string;
  googlePlayUrl?: string;
  hasAccountDeletion: boolean;
  accentColor: string;
  accentGradient: string;
  iconBg: string;
  features: AppFeature[];
  highlights: string[];
  techStack: string[];
  legal: AppLegalInfo;
}

export const APPS_DATA: Record<string, FelinodeApp> = {
  "grammarAI": {
    slug: "grammarAI",
    name: "grammarAI",
    tagline: "Aprende inglés de forma inteligente e interactiva",
    description: "Domina el inglés estés donde estés con lecciones adaptativas creadas por IA, desafíos interactivos y análisis de pronunciación avanzado.",
    longDescription: "grammarAI es una aplicación móvil diseñada para revolucionar la forma en que aprendes inglés. Combina algoritmos de inteligencia artificial para personalizar cada lección a tu ritmo, síntesis de voz neuronal de alta fidelidad para afinar tu oído y un modelo local-first que te permite aprender incluso sin conexión a internet.",
    category: "Educación & IA",
    badge: "IA + Aprendizaje Offline",
    status: "coming_soon",
    statusLabel: "Próximamente en Google Play",
    googlePlayUrl: "#",
    hasAccountDeletion: true,
    accentColor: "#3b82f6",
    accentGradient: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
    iconBg: "rgba(59, 130, 246, 0.15)",
    highlights: [
      "100% Funcional sin conexión a internet",
      "Ejercicios impulsados por Inteligencia Artificial",
      "Síntesis de voz ultra realista con Kokoro TTS",
      "Gamificación con rachas, niveles y retos diarios"
    ],
    techStack: ["React Native", "Expo", "Supabase", "Kokoro TTS", "AI Engine"],
    features: [
      {
        title: "Modo 100% Offline",
        description: "Descarga tus lecciones y practica sin necesidad de conexión a internet. grammarAI sincronizará tu progreso en la nube cuando vuelvas a estar conectado gracias a su tecnología local-first.",
        iconName: "WifiOff"
      },
      {
        title: "Motor IA Integrado",
        description: "Ejercicios dinámicos generados al instante por IA. Cada sesión de estudio es distinta, adaptándose en tiempo real para reforzar tus puntos débiles.",
        iconName: "Sparkles"
      },
      {
        title: "Pronunciación Nativa (TTS)",
        description: "Escucha ejemplos con audio de altísima calidad impulsados por Kokoro TTS y obtén feedback gracias al acceso por micrófono para pulir tu pronunciación.",
        iconName: "Mic"
      },
      {
        title: "Gamificación y Retos",
        description: "Aprender nunca fue tan divertido. Acumula rachas, mantén tus vidas a salvo en el modo infinito y mide tu progreso conforme subes de nivel resolviendo desafíos.",
        iconName: "Trophy"
      }
    ],
    legal: {
      privacyPolicy: {
        lastUpdated: "17 de agosto de 2026",
        summary: "grammarAI prioriza la privacidad del estudiante. Tu progreso se procesa de forma local y solo se sincronizan datos esenciales cuando creas una cuenta.",
        sections: [
          {
            title: "1. Información que Recopilamos",
            content: "Al utilizar grammarAI, recopilamos diferentes tipos de información para proporcionarle un mejor servicio educativo:",
            items: [
              "Información de Cuenta: Recopilamos su dirección de correo electrónico cuando se registra o inicia sesión en la aplicación, la cual es gestionada a través de Supabase como proveedor seguro de autenticación.",
              "Datos de Progreso: Guardamos su progreso de aprendizaje, puntajes y racha dentro de la aplicación para sincronizarlos en la nube y permitirle mantener su avance de forma offline.",
              "Audio y Micrófono: grammarAI puede requerir permisos de micrófono con fines estrictamente educativos (ej. ejercicios de pronunciación). Los audios se procesan habitualmente de manera local o segura y no se almacenan ni se asocian a su perfil para otros fines que no sean el feedback en tiempo real."
            ]
          },
          {
            title: "2. Uso de la Información",
            content: "Utilizamos la información recopilada exclusivamente para:",
            items: [
              "Proveer, mantener y mejorar la funcionalidad de la App.",
              "Sincronizar su progreso entre dispositivos o prevenir la pérdida de datos y sesiones.",
              "Responder a sus comentarios o correos de soporte técnico de forma adecuada."
            ]
          },
          {
            title: "3. Servicios de Terceros",
            content: "La Aplicación utiliza servicios externos de confianza:",
            items: [
              "Supabase: Utilizado como nuestra base de datos remota para autenticar su cuenta y sincronizar de forma segura el estado de sus lecciones.",
              "Google Play Services: Servicios estándar requeridos por el ecosistema Android y Google Play Store."
            ]
          },
          {
            title: "4. Seguridad y Derechos del Usuario",
            content: "Valoramos su confianza al proporcionarnos su Información Personal. Utilizamos encriptación en tránsito y bases de datos seguras en la nube. Como usuario, usted tiene el derecho a requerir la eliminación total de su cuenta y sus datos vinculados en cualquier momento directamente desde la app o nuestra sección web de Eliminación de Cuenta."
          }
        ]
      },
      termsOfService: {
        lastUpdated: "17 de agosto de 2026",
        summary: "Términos y condiciones para el uso de la aplicación móvil grammarAI.",
        sections: [
          {
            title: "1. Uso de la Aplicación",
            content: "grammarAI es una aplicación de aprendizaje desarrollada por Fabrizio Fernando Aguilar Coro (felinode). La aplicación se proporciona 'tal cual' y no podemos garantizar que su uso nunca tendrá interrupciones o que estará completamente libre de errores. Usted es el responsable de mantener seguro su dispositivo móvil y credenciales."
          },
          {
            title: "2. Propiedad Intelectual",
            content: "No se le permite copiar o modificar la aplicación, parte de ella o nuestras marcas de ninguna manera. No debe intentar extraer el código fuente, traducir la aplicación a otros idiomas ni crear versiones derivadas de forma comercial sin autorización."
          },
          {
            title: "3. Modificaciones al Servicio",
            content: "grammarAI está sujeto a constantes actualizaciones de contenido y funcionalidad orientadas a mejorar su modelo educativo de inteligencia artificial. Nos reservamos el derecho de realizar cambios o actualizaciones para enriquecer el servicio."
          }
        ]
      }
    }
  },
  "spent": {
    slug: "spent",
    name: "Spent",
    tagline: "Control de gastos rápido, privado e inteligente",
    description: "Toma el control absoluto de tus finanzas personales. Registra ingresos y gastos al instante, analiza presupuestos por categorías y mantén tus datos 100% privados.",
    longDescription: "Spent es la herramienta definitiva para quienes buscan administrar su dinero sin fricciones. Diseñada bajo la filosofía offline-first y privacidad total: no vincula tus cuentas bancarias ni vende tu información financiera. Con una interfaz ultrarrápida, gráficos intuitivos y control presupuestario mensual, entender a dónde va cada centavo nunca fue tan fácil.",
    category: "Finanzas & Productividad",
    badge: "100% Privado & Offline-First",
    status: "coming_soon",
    statusLabel: "Próximamente en Google Play",
    googlePlayUrl: "#",
    hasAccountDeletion: false,
    accentColor: "#10b981",
    accentGradient: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
    iconBg: "rgba(16, 185, 129, 0.15)",
    highlights: [
      "Registro de gastos en menos de 3 segundos",
      "Tus datos financieros nunca salen de tu dispositivo",
      "Límites de presupuesto y alertas personalizadas",
      "Gráficos interactivos de balance y categorías"
    ],
    techStack: ["React Native", "Local SQLite / WatermelonDB", "Fast UI", "Offline Engine"],
    features: [
      {
        title: "Registro Ultrarrápido",
        description: "Añade un gasto o ingreso con monto, categoría y nota en segundos. Cero pantallas innecesarias o tiempos de carga molestos.",
        iconName: "Zap"
      },
      {
        title: "Privacidad Total (Zero-Knowledge)",
        description: "Spent no requiere credenciales bancarias ni recopila tus montos financieros en servidores externos. Toda tu información se almacena localmente en tu teléfono.",
        iconName: "ShieldCheck"
      },
      {
        title: "Control de Presupuestos y Categorías",
        description: "Define límites de gasto por categoría (comida, transporte, ocio, servicios) y recibe alertas antes de excederte de tu meta mensual.",
        iconName: "PieChart"
      },
      {
        title: "Exportación y Respaldo Local",
        description: "Exporta tus reportes en formatos estándar (CSV/JSON) cuando lo desees para revisarlos en hojas de cálculo o guardar tus copias de seguridad personales.",
        iconName: "Wallet"
      }
    ],
    legal: {
      privacyPolicy: {
        lastUpdated: "17 de agosto de 2026",
        summary: "Spent es una aplicación diseñada con privacidad desde su raíz. No recopilamos, no vendemos ni transmitimos tus registros financieros a servidores propios ni de terceros.",
        sections: [
          {
            title: "1. Privacidad y Almacenamiento Local",
            content: "En Spent creemos firmemente que tu dinero es asunto tuyo:",
            items: [
              "Almacenamiento en el Dispositivo: Todos los registros de ingresos, gastos, notas y categorías se almacenan de manera local y encriptada en la base de datos de tu teléfono móvil.",
              "Sin Cuentas Bancarias Vinculadas: Spent nunca te solicitará números de tarjeta, credenciales de banca online ni tokens de acceso financiero.",
              "Modo Sin Registro: La aplicación no requiere crear una cuenta con correo ni contraseña para funcionar en su totalidad."
            ]
          },
          {
            title: "2. Permisos del Dispositivo",
            content: "Spent solo solicita los permisos estrictamente necesarios para su funcionamiento:",
            items: [
              "Almacenamiento / Archivos: Opcional, únicamente requerido si decides exportar tus reportes en CSV o importar una copia de seguridad.",
              "Notificaciones: Opcional, para recordatorios diarios de registro o alertas de límite de presupuesto que configures."
            ]
          },
          {
            title: "3. Servicios de Terceros",
            content: "Spent no integra rastreadores invasivos de comportamiento financiero. Puede interactuar con Google Play Services exclusivamente para la distribución de actualizaciones y gestión de compras dentro de la app si aplicaran."
          },
          {
            title: "4. Eliminación de Datos",
            content: "Dado que Spent almacena tus datos únicamente de forma local en tu dispositivo, tú tienes control absoluto. Para borrar todos tus datos de inmediato, puedes utilizar la opción 'Restablecer datos' dentro de los Ajustes de la App o simplemente desinstalar la aplicación de tu dispositivo."
          }
        ]
      },
      termsOfService: {
        lastUpdated: "17 de agosto de 2026",
        summary: "Términos y condiciones para el uso de la aplicación móvil de finanzas Spent.",
        sections: [
          {
            title: "1. Finalidad de la Aplicación",
            content: "Spent es una herramienta de registro personal y organización financiera desarrollada por Fabrizio Fernando Aguilar Coro (felinode). Spent no es una entidad bancaria, ni un asesor financiero certificado. La app está orientada a la autogestión de presupuestos personales."
          },
          {
            title: "2. Responsabilidad de los Datos y Respaldos",
            content: "Al tratarse de una aplicación offline-first, usted es el único responsable de generar copias de seguridad de sus archivos de exportación en caso de cambio o formateo de su dispositivo móvil."
          },
          {
            title: "3. Propiedad y Licencia",
            content: "felinode le otorga una licencia personal, no exclusiva y no transferible para utilizar Spent de acuerdo a estos términos. Queda prohibida la descompilación o redistribución comercial no autorizada."
          }
        ]
      }
    }
  }
};

export const STUDIO_INFO = {
  name: "felinode",
  tagline: "Mobile App Studio & Engineering",
  description: "Desarrollo de aplicaciones móviles modernas, fluidas y centradas en la privacidad, combinando arquitectura local-first con inteligencia artificial.",
  developer: "Fabrizio Fernando Aguilar Coro",
  location: "Sucre, Bolivia",
  contactEmail: "fernandoaguilarcoro@gmail.com",
  socials: {
    github: "https://github.com",
    googlePlay: "#"
  }
};

export function getAllApps(): FelinodeApp[] {
  return Object.values(APPS_DATA);
}

export function getAppBySlug(slug: string): FelinodeApp | undefined {
  return APPS_DATA[slug];
}
