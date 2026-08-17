import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, FileText } from "lucide-react";
import { getAppBySlug, getAllApps, STUDIO_INFO } from "@/data/apps";

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
      title: "Política de Privacidad | felinode",
    };
  }

  return {
    title: `Política de Privacidad | ${app.name} - felinode`,
    description: `Política de Privacidad y tratamiento de datos para la aplicación móvil ${app.name}.`,
  };
}

export default async function AppPrivacyPage({ params }: Props) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    notFound();
  }

  const allApps = getAllApps();
  const privacyData = app.legal.privacyPolicy;

  return (
    <div className="container legal-page">
      {/* Navigation */}
      <div style={{ marginBottom: "1.5rem" }}>
        <Link 
          href="/privacy" 
          style={{ 
            display: "inline-flex", 
            alignItems: "center", 
            gap: "0.4rem", 
            color: "var(--muted)", 
            fontSize: "0.9rem" 
          }}
        >
          <ArrowLeft size={16} />
          <span>Ver todas las políticas de felinode</span>
        </Link>
      </div>

      <div className="legal-header">
        <div 
          style={{
            display: "inline-block",
            fontSize: "0.8rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: app.accentColor,
            marginBottom: "0.5rem"
          }}
        >
          Aplicación: {app.name}
        </div>
        <h1 className="legal-title">Política de Privacidad</h1>
        <p className="legal-subtitle">
          {privacyData.summary}
        </p>
      </div>

      {/* Switcher tabs between apps */}
      <div className="legal-tabs">
        {allApps.map((a) => (
          <Link
            key={a.slug}
            href={`/privacy/${a.slug}`}
            className={`legal-tab ${a.slug === app.slug ? "active" : ""}`}
            style={a.slug === app.slug ? { borderColor: app.accentColor, color: "#ffffff" } : {}}
          >
            {a.name}
          </Link>
        ))}
      </div>

      <div className="legal-content">
        <p>
          <strong>Última actualización:</strong> {privacyData.lastUpdated}
        </p>

        <p>
          Gracias por utilizar <strong>{app.name}</strong>. Esta Política de Privacidad describe de manera transparente cómo se manejan, almacenan y protegen sus datos al utilizar la aplicación móvil en Android ("la App").
        </p>

        {privacyData.sections.map((section, idx) => (
          <div key={idx}>
            <h2>{section.title}</h2>
            <p>{section.content}</p>
            {section.items && (
              <ul>
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <h2>Responsable del Tratamiento y Contacto</h2>
        <p>
          <strong>{app.name}</strong> es una aplicación desarrollada por {STUDIO_INFO.developer} bajo el estudio <strong>{STUDIO_INFO.name}</strong>. Si tiene cualquier duda o inquietud con respecto al tratamiento de sus datos, puede comunicarse directamente con nosotros:
        </p>
        <p>
          <strong>Desarrollador:</strong> {STUDIO_INFO.developer} ({STUDIO_INFO.name})<br />
          <strong>Ubicación:</strong> {STUDIO_INFO.location}<br />
          <strong>Correo de contacto:</strong> {STUDIO_INFO.contactEmail}
        </p>

        <div style={{ marginTop: "3rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link href={`/apps/${app.slug}`} className="btn-secondary">
            <span>Conocer más sobre {app.name}</span>
          </Link>
          <Link href={`/terms/${app.slug}`} className="btn-secondary">
            <span>Términos y Condiciones de {app.name}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
