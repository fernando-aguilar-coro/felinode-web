import { Metadata } from "next";
import WebDeletion from "./WebDeletion";
import { STUDIO_INFO } from "@/data/apps";

export const metadata: Metadata = {
  title: "Eliminar cuenta de Grammar AI | QuantumLoop Labs",
  description: "Solicita la eliminación de tu cuenta y los datos asociados a Grammar AI: Conversa y aprende (com.felinode.app), de QuantumLoop Labs.",
};

export default function AccountDeletionPage() {
  return (
    <div className="container legal-page">
      <div className="legal-header">
        <h1 className="legal-title">Eliminar cuenta de Grammar AI</h1>
        <p className="legal-subtitle">
          Esta página es para <strong>Grammar AI: Conversa y aprende</strong> (paquete <strong>com.felinode.app</strong>), publicada por <strong>QuantumLoop Labs</strong>. Aquí puedes eliminar tu cuenta y los datos asociados a ella.
        </p>
      </div>

      <div className="legal-content">

        <h2>Eliminar tu cuenta de Grammar AI</h2>
        <p>
          Puedes eliminarla desde la aplicación o solicitar la eliminación desde esta página. La solicitud elimina permanentemente la cuenta autenticada y los datos asociados en nuestros servicios.
        </p>

        <h2>Opción 1: Desde Grammar AI</h2>
        <p>Abre Grammar AI: Conversa y aprende e inicia sesión con la cuenta que deseas eliminar.</p>
        <ol>
          <li>Abre el perfil o los ajustes de tu cuenta.</li>
          <li>Selecciona la opción para eliminar la cuenta y confirma la solicitud.</li>
        </ol>

        <h2>Opción 2: Desde esta página</h2>
        <p>Si no puedes acceder a la aplicación, inicia sesión con la cuenta de Grammar AI que quieres eliminar:</p>
        <WebDeletion />

        <h2 style={{ marginTop: "3rem" }}>¿Qué se elimina?</h2>
        <p>Al confirmar la eliminación, se borrarán de forma irreversible la cuenta y los datos asociados almacenados en nuestros servicios:</p>
        <ul>
          <li>La información de la cuenta, como el correo electrónico y el identificador de usuario.</li>
          <li>El progreso y otros datos vinculados a tu cuenta de Grammar AI.</li>
          <li>La sesión y los datos de la cuenta almacenados en la nube.</li>
        </ul>

        <h2>Soporte Manual</h2>
        <p>
          Si experimentas cualquier dificultad, también puedes enviar una solicitud manual de eliminación por correo electrónico a:
        </p>
        <p>
          <strong>Correo de soporte:</strong> {STUDIO_INFO.contactEmail}<br />
          <strong>Asunto:</strong> Eliminación de cuenta de Grammar AI (com.felinode.app)
        </p>
      </div>
    </div>
  );
}
