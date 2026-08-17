import { Metadata } from "next";
import WebDeletion from "./WebDeletion";
import { STUDIO_INFO, getAllApps } from "@/data/apps";
import Link from "next/link";
import { Info, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Eliminación de Cuenta | felinode Apps",
  description: "Pasos e instrucciones para eliminar tu cuenta y datos personales en las aplicaciones de felinode.",
};

export default function AccountDeletionPage() {
  const apps = getAllApps();
  const onlineApps = apps.filter((a) => a.hasAccountDeletion);
  const localApps = apps.filter((a) => !a.hasAccountDeletion);

  return (
    <div className="container legal-page">
      <div className="legal-header">
        <h1 className="legal-title">Eliminación de Cuenta y Datos</h1>
        <p className="legal-subtitle">
          En <strong>{STUDIO_INFO.name}</strong> valoramos y respetamos tu privacidad. Puedes solicitar o ejecutar la eliminación definitiva de tus datos en cualquier momento.
        </p>
      </div>

      <div className="legal-content">
        {/* Apps with local-first notice */}
        {localApps.length > 0 && (
          <div 
            style={{
              backgroundColor: "rgba(16, 185, 129, 0.08)",
              border: "1px solid rgba(16, 185, 129, 0.25)",
              borderRadius: "var(--radius)",
              padding: "1.25rem 1.5rem",
              marginBottom: "2rem",
              display: "flex",
              gap: "0.8rem",
              alignItems: "flex-start"
            }}
          >
            <Info size={20} style={{ color: "var(--accent-spent)", flexShrink: 0, marginTop: "0.15rem" }} />
            <div>
              <strong style={{ color: "#ffffff" }}>
                Aplicaciones 100% Locales ({localApps.map(a => a.name).join(", ")}):
              </strong>
              <p style={{ margin: "0.4rem 0 0", fontSize: "0.9rem", color: "#d4d4d8" }}>
                Estas aplicaciones no requieren la creación de una cuenta en servidores remotos. Todos tus datos están guardados exclusivamente en la memoria de tu dispositivo. Para eliminarlos, basta con usar la opción <em>"Restablecer datos"</em> en los Ajustes de la aplicación o desinstalar la app de tu teléfono.
              </p>
            </div>
          </div>
        )}

        <h2>Aplicaciones con Cuenta en la Nube (ej. nekoEnglish)</h2>
        <p>
          Para las aplicaciones que disponen de inicio de sesión y sincronización en la nube (como <strong>nekoEnglish</strong>), dispones de dos opciones inmediatas:
        </p>

        <h2>Opción 1: Eliminar cuenta desde la propia aplicación móvil</h2>
        <p>Esta es la forma más rápida y directa de eliminar tu cuenta y todos tus datos personales de nuestros servidores.</p>
        <ol>
          <li>Abre la aplicación (ej. <strong>nekoEnglish</strong>) en tu dispositivo.</li>
          <li>Inicia sesión en la cuenta que deseas eliminar (si no lo has hecho ya).</li>
          <li>Dirígete a la pestaña de <strong>Perfil</strong>.</li>
          <li>Toca el icono de <strong>Ajustes</strong> (engranaje) en la esquina superior.</li>
          <li>Desplázate hacia abajo y selecciona <strong>"Eliminar cuenta"</strong>.</li>
          <li>Confirma tu decisión. La sesión se cerrará de inmediato y tus registros serán eliminados de manera permanente.</li>
        </ol>

        <h2>Opción 2: Eliminar cuenta de nekoEnglish desde esta web</h2>
        <p>Si no dispones de la aplicación a mano, puedes iniciar sesión con tu cuenta de nekoEnglish aquí mismo para ejecutar la eliminación:</p>
        <WebDeletion />

        <h2 style={{ marginTop: "3rem" }}>¿Qué datos se eliminan definitivamente?</h2>
        <p>Al procesar la eliminación, se borrarán de forma irreversible de nuestras bases de datos de Supabase:</p>
        <ul>
          <li>Tu información de perfil (correo electrónico, identificador único).</li>
          <li>Tu progreso de aprendizaje, monedas, estadísticas y lecciones.</li>
          <li>Cualquier información de sesión o copia sincronizada en la nube.</li>
        </ul>

        <h2>Soporte Manual</h2>
        <p>
          Si experimentas cualquier dificultad, también puedes enviar una solicitud manual de eliminación por correo electrónico a:
        </p>
        <p>
          <strong>Correo de soporte:</strong> {STUDIO_INFO.contactEmail}<br />
          <strong>Asunto:</strong> Solicitud de Eliminación de Cuenta - [Nombre de la App]
        </p>
      </div>
    </div>
  );
}
