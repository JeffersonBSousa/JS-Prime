import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JS Prime Manutenção e Instalação",
  description: "Instalação e manutenção de fogões, tubulações de gás e coifas com atendimento profissional e segurança.",
  icons: {
    icon: "/img/LOGOSITE.JPEG",
    apple: "/img/LOGOSITE.JPEG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-10976263576"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-10976263576');
            `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "JS Prime Manutenção e Instalação",
              description: "Manutenção e instalação de fogões, tubulações de gás e coifas.",
              knowsAbout: ["Instalação de fogões", "Tubulações de gás", "Instalação de coifas"],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
