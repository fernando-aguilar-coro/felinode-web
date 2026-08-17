import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
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
      title: "Términos y Condiciones | felinode",
    };
  }

  return {
    title: `Términos y Condiciones | ${app.name} - felinode`,
    description: `Términos y condiciones de uso para la aplicación móvil ${app.name}.`,
  };
}

export default async function AppTermsPage({ params }: Props) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    notFound();
  }

  const allApps = getAllApps();
  const termsData = app.legal.termsOfService;

  return (
    <div className="container legal-page">
      {/* Navigation */}
      <div style={{ marginBottom: "1.5rem" }}>
        <Link 
          href="/terms" 
          style={{ 
            display: "inline-flex", 
            alignItems: "center", 
            gap: "0.4rem", 
            color: "var(--muted)", 
            fontSize: "0.9rem" 
          }}
        >
          <ArrowLeft size={16} />
          <span>Ver todos los términos de felinode</span>
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
        <h1 className="legal-title">Términos y Condiciones</h1>
        <p className="legal-subtitle">
          {termsData.summary}
        </p>
      </div>

      {/* Switcher tabs between apps */}
      <div className="legal-tabs">
        {allApps.map((a) => (
          <Link
            key={a.slug}
            href={`/terms/${a.slug}`}
            className={`legal-tab ${a.slug === app.slug ? "active" : ""}`}
            style={a.slug === app.slug ? { borderColor: app.accentColor, color: "#ffffff" } : {}}
          >
            {a.name}
          </Link>
        ))}
      </div>

      <div className="legal-content">
        <p>
          <strong>Última actualización:</strong> {termsData.lastUpdated}
        </p>

        <p>
          Al descargar o utilizar la aplicación móvil <strong>{app.name}</strong>, estos términos se aplicarán automáticamente a usted. Por favor, léalos detenidamente.
        </p>

        {termsData.sections.map((section, idx) => (
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

        <h2>Contacto Legal y Soporte</h2>
        <p>
          Para cualquier consulta relacionada con los términos de uso de <strong>{app.name}</strong>:
        </p>
        <p>
          <strong>Desarrollador:</strong> {STUDIO_INFO.developer} ({STUDIO_INFO.name})<br />
          <strong>Correo de soporte:</strong> {STUDIO_INFO.contactEmail}
        </p>

        <div style={{ marginTop: "3rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link href={`/apps/${app.slug}`} className="btn-secondary">
            <span>Conocer más sobre {app.name}</span>
          </Link>
          <Link href={`/privacy/${app.slug}`} className="btn-secondary">
            <span>Política de Privacidad de {app.name}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
