import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowRight, Smartphone } from "lucide-react";
import { getAllApps, STUDIO_INFO } from "@/data/apps";

export const metadata: Metadata = {
  title: "Políticas de Privacidad | felinode Apps",
  description: "Centro de políticas de privacidad para todas las aplicaciones móviles de felinode.",
};

export default function PrivacyHubPage() {
  const apps = getAllApps();
  const currentDate = new Date().toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="container legal-page">
      <div className="legal-header">
        <h1 className="legal-title">Políticas de Privacidad</h1>
        <p className="legal-subtitle">
          En <strong>{STUDIO_INFO.name}</strong> la privacidad de nuestros usuarios es un pilar fundamental. Selecciona una aplicación para consultar su política específica.
        </p>
      </div>

      <div style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.2rem", color: "#e4e4e7", marginBottom: "1rem" }}>
          Políticas por Aplicación
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
          {apps.map((app) => (
            <Link 
              key={app.slug} 
              href={`/privacy/${app.slug}`}
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
              className="app-card-interactive"
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "1.2rem", fontWeight: 700, color: "#ffffff" }}>
                  {app.name}
                </span>
                <ArrowRight size={18} style={{ color: app.accentColor }} />
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--muted)" }}>
                {app.legal.privacyPolicy.summary}
              </p>
              <span style={{ fontSize: "0.75rem", color: app.accentColor, marginTop: "auto", paddingTop: "0.5rem" }}>
                Ver Política de {app.name} &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="legal-content">
        <h2>Declaración General del Estudio ({STUDIO_INFO.name})</h2>
        <p>
          <strong>Última actualización:</strong> {currentDate}
        </p>
        <p>
          Esta declaración de privacidad rige para las aplicaciones móviles desarrolladas y publicadas por {STUDIO_INFO.developer} bajo la marca <strong>{STUDIO_INFO.name}</strong>.
        </p>
        <p>
          Nos comprometemos a:
        </p>
        <ul>
          <li><strong>No vender datos:</strong> Jamás comercializamos, alquilamos ni transferimos información personal de nuestros usuarios a corredores de datos ni redes publicitarias invasivas.</li>
          <li><strong>Minimización de datos:</strong> Solo recopilamos los datos estrictamente necesarios para el funcionamiento de las funciones solicitadas por el usuario.</li>
          <li><strong>Arquitectura Local-First:</strong> Priorizamos el almacenamiento de datos en el propio dispositivo del usuario siempre que sea factible tecnológicamente.</li>
          <li><strong>Transparencia y Control:</strong> Facilitamos mecanismos claros para exportar o eliminar datos de forma definitiva.</li>
        </ul>

        <h2>Contacto de Privacidad</h2>
        <p>
          Para cualquier duda, solicitud de acceso o eliminación de datos respecto a cualquiera de nuestras apps, puedes ponerte en contacto directamente con el responsable:
        </p>
        <p>
          <strong>Desarrollador:</strong> {STUDIO_INFO.developer} ({STUDIO_INFO.name})<br />
          <strong>Ubicación:</strong> {STUDIO_INFO.location}<br />
          <strong>Correo de contacto:</strong> {STUDIO_INFO.contactEmail}
        </p>
      </div>
    </div>
  );
}
