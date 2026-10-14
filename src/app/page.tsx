import Link from "next/link";
import { 
  Smartphone, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  ExternalLink 
} from "lucide-react";
import { STUDIO_INFO, getAllApps } from "@/data/apps";

export default function Home() {
  const apps = getAllApps();

  const studioValues = [
    {
      title: "Local-First & Modo Offline",
      description: "Nuestras aplicaciones están pensadas para funcionar sin conexión continua. Tus datos y herramientas siempre están disponibles en tu dispositivo.",
      icon: Zap
    },
    {
      title: "Privacidad por Diseño",
      description: "No comerciamos con tu información privada ni tus registros personales. Diseñamos con almacenamiento local y encriptación moderna.",
      icon: ShieldCheck
    },
    {
      title: "IA & Síntesis Neuronal",
      description: "Integramos modelos inteligentes como Kokoro TTS y motores adaptativos de lecciones para brindar experiencias educativas y productivas de vanguardia.",
      icon: Sparkles
    },
    {
      title: "Rendimiento y Fluidez",
      description: "Interfaces optimizadas en React Native que responden en milisegundos, eliminando pantallas de carga innecesarias.",
      icon: Smartphone
    }
  ];

  return (
    <>
      {/* Studio Hero */}
      <section className="container hero">
        <div className="hero-glow" />
        
        <div className="hero-pill">
          <Sparkles size={16} style={{ color: "#818cf8" }} />
          <span>Mobile Software & Indie App Studio</span>
        </div>

        <h1 className="hero-title">
          Construyendo aplicaciones móviles <br />
          <span className="hero-gradient-text">rápidas, privadas e inteligentes</span>
        </h1>

        <p className="hero-subtitle">
          Bienvenido a <strong>{STUDIO_INFO.name}</strong>. Creamos experiencias móviles centradas en el usuario: desde el aprendizaje de idiomas con IA hasta la gestión de finanzas personales sin fricciones.
        </p>

        <div className="hero-actions">
          <Link href="#apps" className="btn-primary">
            <Smartphone size={18} />
            <span>Explorar Aplicaciones</span>
          </Link>
          <a href={`mailto:${STUDIO_INFO.contactEmail}`} className="btn-secondary">
            <span>Contactar al Desarrollador</span>
          </a>
        </div>
      </section>

      {/* Apps Showcase Section */}
      <section id="apps" className="container section">
        <div className="section-header">
          <span className="section-tag">Portafolio Móvil</span>
          <h2 className="section-title">Nuestras Aplicaciones</h2>
          <p className="section-desc">
            Soluciones diseñadas con ingeniería moderna, soporte offline y arquitectura enfocada en el usuario.
          </p>
        </div>

        <div className="apps-grid">
          {apps.map((app) => (
            <div key={app.slug} className="app-card">
              <div 
                className="app-card-glow" 
                style={{ background: app.accentGradient }} 
              />

              <div className="app-card-header">
                <span className="app-badge">{app.category}</span>
                <span 
                  style={{ 
                    fontSize: "0.75rem", 
                    fontWeight: 600, 
                    color: app.accentColor,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem"
                  }}
                >
                  <span 
                    style={{ 
                      width: "6px", 
                      height: "6px", 
                      borderRadius: "50%", 
                      backgroundColor: app.accentColor 
                    }} 
                  />
                  {app.statusLabel}
                </span>
              </div>

              <h3 className="app-title">{app.name}</h3>
              <p className="app-tagline" style={{ color: app.accentColor }}>
                {app.tagline}
              </p>
              
              <p className="app-desc">
                {app.description}
              </p>

              <ul className="app-highlights-list">
                {app.highlights.map((highlight, idx) => (
                  <li key={idx} className="app-highlight-item">
                    <CheckCircle2 size={16} style={{ color: app.accentColor, flexShrink: 0 }} />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="app-card-footer">
                <div className="tech-tags">
                  {app.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="app-footer-actions">
                  <Link 
                    href={`/apps/${app.slug}`} 
                    className="app-btn-main" 
                    style={{ background: app.accentGradient }}
                  >
                    <span>Ver Detalles & Features</span>
                    <ArrowRight size={16} />
                  </Link>

                  <Link 
                    href={`/privacy/${app.slug}`} 
                    className="app-btn-outline"
                    title="Ver Política de Privacidad"
                  >
                    <ShieldCheck size={16} />
                    <span>Legal</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Studio Values / Philosophy */}
      <section className="container section" style={{ paddingTop: "2rem" }}>
        <div className="section-header">
          <span className="section-tag">Filosofía de Ingeniería</span>
          <h2 className="section-title">Por qué elegir las apps de {STUDIO_INFO.name}</h2>
          <p className="section-desc">
            Desarrollamos cada aplicación siguiendo estándares rigurosos de calidad de software y respeto por el usuario.
          </p>
        </div>

        <div className="values-grid">
          {studioValues.map((value, idx) => {
            const Icon = value.icon;
            return (
              <div key={idx} className="value-card">
                <div className="value-icon">
                  <Icon size={22} />
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-desc">{value.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Developer / Studio Contact Banner */}
      <section className="container" style={{ padding: "3rem 1.5rem 6rem" }}>
        <div 
          style={{
            backgroundColor: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            padding: "3rem 2rem",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.25rem",
            position: "relative",
            overflow: "hidden"
          }}
        >
          <div 
            style={{
              position: "absolute",
              bottom: "-50px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "400px",
              height: "150px",
              background: "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
              filter: "blur(40px)",
              pointerEvents: "none"
            }} 
          />
          
          <span className="logo-badge" style={{ padding: "0.3rem 0.8rem" }}>Soporte & Feedback</span>
          
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800 }}>
            ¿Tienes sugerencias, ideas o necesitas soporte técnico?
          </h2>
          
          <p style={{ color: "var(--muted)", maxWidth: "550px", fontSize: "0.95rem" }}>
            Escríbenos directamente para reportar incidentes, sugerir nuevas funciones o consultar dudas sobre nuestras políticas.
          </p>

          <a 
            href={`mailto:${STUDIO_INFO.contactEmail}`} 
            className="btn-primary"
            style={{ marginTop: "0.5rem" }}
          >
            <span>Escribir a {STUDIO_INFO.contactEmail}</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
