import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  Download, 
  ArrowLeft, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  Trash2, 
  Sparkles
} from "lucide-react";
import { getAppBySlug, getAllApps } from "@/data/apps";
import { DynamicIcon } from "@/components/DynamicIcon";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const apps = getAllApps();
  return apps.map((app) => ({
    slug: app.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    return {
      title: "App no encontrada | felinode",
    };
  }

  return {
    title: `${app.name} - ${app.tagline} | felinode`,
    description: app.description,
    openGraph: {
      title: `${app.name} - ${app.tagline}`,
      description: app.description,
      type: "website",
    },
  };
}

export default async function AppPage({ params }: Props) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    notFound();
  }

  return (
    <div className="container" style={{ paddingBottom: "5rem" }}>
      {/* Back navigation */}
      <div style={{ paddingTop: "2rem" }}>
        <Link 
          href="/" 
          style={{ 
            display: "inline-flex", 
            alignItems: "center", 
            gap: "0.4rem", 
            color: "var(--muted)", 
            fontSize: "0.9rem",
            transition: "color 0.2s"
          }}
        >
          <ArrowLeft size={16} />
          <span>Volver al Hub de felinode</span>
        </Link>
      </div>

      {/* Hero Section of the App */}
      <section className="app-detail-hero">
        <div 
          style={{
            position: "absolute",
            top: "20%",
            left: "20%",
            width: "350px",
            height: "200px",
            background: app.accentGradient,
            opacity: 0.15,
            filter: "blur(60px)",
            pointerEvents: "none"
          }} 
        />

        <div 
          className="app-detail-badge" 
          style={{ 
            backgroundColor: app.iconBg, 
            color: app.accentColor,
            border: `1px solid ${app.accentColor}40`
          }}
        >
          <Sparkles size={14} />
          <span>{app.badge}</span>
        </div>

        <h1 className="app-detail-title">
          {app.name}
        </h1>

        <p className="app-detail-tagline" style={{ color: app.accentColor }}>
          {app.tagline}
        </p>

        <p className="app-detail-desc">
          {app.longDescription}
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <a 
            href={app.googlePlayUrl} 
            className="btn-primary"
            style={{ background: app.accentGradient }}
          >
            <Download size={18} />
            <span>{app.statusLabel}</span>
          </a>

          <Link href={`/privacy/${app.slug}`} className="btn-secondary">
            <ShieldCheck size={18} />
            <span>Política de Privacidad</span>
          </Link>

          <Link href={`/terms/${app.slug}`} className="btn-secondary">
            <FileText size={18} />
            <span>Términos y Condiciones</span>
          </Link>

          {app.hasAccountDeletion && (
            <Link href="/eliminar-cuenta" className="btn-secondary">
              <Trash2 size={18} />
              <span>Eliminar Cuenta</span>
            </Link>
          )}
        </div>
      </section>

      {/* Highlights / Quick stats */}
      <section style={{ margin: "2rem 0 4rem" }}>
        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1rem",
            backgroundColor: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            padding: "1.5rem"
          }}
        >
          {app.highlights.map((item, idx) => (
            <div key={idx} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.92rem", color: "#e4e4e7" }}>
              <CheckCircle2 size={18} style={{ color: app.accentColor, flexShrink: 0 }} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="section" style={{ padding: "0 0 4rem" }}>
        <div className="section-header">
          <span className="section-tag" style={{ color: app.accentColor }}>Funcionalidades</span>
          <h2 className="section-title">¿Qué hace a {app.name} único?</h2>
          <p className="section-desc">
            Cada detalle ha sido diseñado para ofrecerte la máxima velocidad, fiabilidad y comodidad.
          </p>
        </div>

        <div className="features-grid">
          {app.features.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <div 
                className="feature-icon-wrapper" 
                style={{ backgroundColor: app.iconBg, color: app.accentColor }}
              >
                <DynamicIcon name={feature.iconName} size={24} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Breakdown */}
      <section 
        style={{
          backgroundColor: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-lg)",
          padding: "2.5rem 2rem",
          marginBottom: "3rem"
        }}
      >
        <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.75rem" }}>
          Tecnología & Arquitectura
        </h3>
        <p style={{ color: "var(--muted)", fontSize: "0.92rem", marginBottom: "1.25rem" }}>
          Construida con los frameworks más avanzados para asegurar un funcionamiento óptimo y seguro en Android.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
          {app.techStack.map((tech, idx) => (
            <span 
              key={idx} 
              style={{
                fontSize: "0.85rem",
                padding: "0.4rem 0.8rem",
                borderRadius: "var(--radius-sm)",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid var(--border)",
                color: "#e4e4e7"
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
