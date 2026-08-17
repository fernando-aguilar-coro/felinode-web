import { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";
import { getAllApps, STUDIO_INFO } from "@/data/apps";

export const metadata: Metadata = {
  title: "Términos y Condiciones | felinode Apps",
  description: "Centro de términos y condiciones de servicio para todas las aplicaciones móviles de felinode.",
};

export default function TermsHubPage() {
  const apps = getAllApps();
  const currentDate = new Date().toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="container legal-page">
      <div className="legal-header">
        <h1 className="legal-title">Términos y Condiciones</h1>
        <p className="legal-subtitle">
          Condiciones de uso y licencias aplicables al software y aplicaciones móviles publicadas por <strong>{STUDIO_INFO.name}</strong>.
        </p>
      </div>

      <div style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.2rem", color: "#e4e4e7", marginBottom: "1rem" }}>
          Términos por Aplicación
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
          {apps.map((app) => (
            <Link 
              key={app.slug} 
              href={`/terms/${app.slug}`}
              style={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                transition: "all 0.2s ease",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "1.2rem", fontWeight: 700, color: "#ffffff" }}>
                  {app.name}
                </span>
                <ArrowRight size={18} style={{ color: app.accentColor }} />
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--muted)" }}>
                {app.legal.termsOfService.summary}
              </p>
              <span style={{ fontSize: "0.75rem", color: app.accentColor, marginTop: "auto", paddingTop: "0.5rem" }}>
                Ver Términos de {app.name} &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="legal-content">
        <h2>Términos Generales de Uso ({STUDIO_INFO.name})</h2>
        <p>
          <strong>Última actualización:</strong> {currentDate}
        </p>
        <p>
          Al descargar, instalar o utilizar cualquiera de las aplicaciones desarrolladas por {STUDIO_INFO.developer} ({STUDIO_INFO.name}), usted acepta cumplir y estar sujeto a estos términos.
        </p>

        <h2>Propiedad Intelectual</h2>
        <p>
          Todo el código fuente, diseño gráfico, logos, marcas y algoritmos propietarios son propiedad exclusiva de {STUDIO_INFO.developer}. Queda prohibida la reproducción no autorizada, desensamblado o ingeniería inversa sin consentimiento previo por escrito.
        </p>

        <h2>Soporte y Contacto</h2>
        <p>
          Si tiene consultas legales o técnicas respecto al uso de nuestras aplicaciones:
        </p>
        <p>
          <strong>Desarrollador:</strong> {STUDIO_INFO.developer} ({STUDIO_INFO.name})<br />
          <strong>Correo:</strong> {STUDIO_INFO.contactEmail}
        </p>
      </div>
    </div>
  );
}
