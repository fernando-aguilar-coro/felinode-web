import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { Code2, Smartphone, Shield, ArrowUpRight } from "lucide-react";
import { STUDIO_INFO, getAllApps } from "@/data/apps";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://felinode.com'),
  title: `${STUDIO_INFO.name} - Mobile App Studio | Innovación, IA y Privacidad`,
  description: STUDIO_INFO.description,
  keywords: [
    "felinode",
    "Mobile Apps",
    "nekoEnglish",
    "Spent",
    "Expense Tracker",
    "Learn English",
    "AI",
    "Offline First",
    "React Native",
    "Indie Developer"
  ],
  authors: [{ name: STUDIO_INFO.developer }],
  creator: STUDIO_INFO.developer,
  openGraph: {
    type: "website",
    locale: "es_BO",
    url: "/",
    title: `${STUDIO_INFO.name} - Mobile Apps Studio`,
    description: STUDIO_INFO.description,
    siteName: STUDIO_INFO.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${STUDIO_INFO.name} - Mobile Apps Studio`,
    description: STUDIO_INFO.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const apps = getAllApps();

  return (
    <html lang="es">
      <body className={inter.className}>
        <header className="header">
          <div className="container nav">
            <Link href="/" className="logo">
              <Code2 size={24} style={{ color: "var(--primary)" }} />
              <span>{STUDIO_INFO.name}</span>
              <span className="logo-badge">Apps</span>
            </Link>

            <nav className="nav-links">
              <Link href="/#apps" className="nav-link">Aplicaciones</Link>
              <Link href="/privacy" className="nav-link">Privacidad</Link>
              <Link href="/terms" className="nav-link">Términos</Link>
              <Link href="/eliminar-cuenta" className="nav-link">Eliminar Cuenta</Link>
              <a 
                href={`mailto:${STUDIO_INFO.contactEmail}`} 
                className="nav-link nav-cta"
              >
                Contacto
              </a>
            </nav>
          </div>
        </header>

        <main className="main-content">
          {children}
        </main>

        <footer className="footer">
          <div className="container footer-content">
            <div className="footer-top">
              <div className="footer-brand">
                <div className="logo">
                  <Code2 size={22} style={{ color: "var(--primary)" }} />
                  <span>{STUDIO_INFO.name}</span>
                </div>
                <p className="footer-brand-desc">
                  {STUDIO_INFO.description}
                </p>
                <div style={{ marginTop: "0.5rem", fontSize: "0.85rem", color: "var(--muted)" }}>
                  Desarrollado por <strong>{STUDIO_INFO.developer}</strong> &bull; {STUDIO_INFO.location}
                </div>
              </div>

              <div>
                <div className="footer-column-title">Aplicaciones</div>
                <div className="footer-column-links">
                  {apps.map((app) => (
                    <Link key={app.slug} href={`/apps/${app.slug}`} className="footer-link">
                      {app.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <div className="footer-column-title">Legal & Soporte</div>
                <div className="footer-column-links">
                  <Link href="/privacy" className="footer-link">Políticas de Privacidad</Link>
                  <Link href="/terms" className="footer-link">Términos de Servicio</Link>
                  <Link href="/eliminar-cuenta" className="footer-link">Eliminación de Cuenta</Link>
                  <a href={`mailto:${STUDIO_INFO.contactEmail}`} className="footer-link">
                    Soporte Técnico
                  </a>
                </div>
              </div>

              <div>
                <div className="footer-column-title">Privacidad & Calidad</div>
                <p style={{ fontSize: "0.82rem", color: "#71717a", lineHeight: 1.6 }}>
                  Arquitectura local-first y respeto a la privacidad del usuario en cada producto móvil.
                </p>
              </div>
            </div>

            <div className="footer-bottom">
              <div>
                &copy; {new Date().getFullYear()} {STUDIO_INFO.name}. Todos los derechos reservados.
              </div>
              <div style={{ display: "flex", gap: "1rem" }}>
                <Link href="/privacy" className="footer-link">Privacidad</Link>
                <Link href="/terms" className="footer-link">Términos</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
