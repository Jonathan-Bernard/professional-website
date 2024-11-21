import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John - Développeur web et application, Lille (59)",
  description:
    "Développeur web et d'applications pour particuliers et entreprises à Lille (59). Spécialisé dans la création de sites web, le référencement naturel, les CMS et les technologies avancées. Contactez-moi !",
  keywords: [
    "développeur web",
    "Lille",
    "SEO",
    "création de sites",
    "applications sur mesure",
    "CMS",
    "freelance",
    "React",
    "Next.js",
    "technologies avancées",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://john-dev.fr" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "John Dev",
              url: "https://john-dev.fr",
              description:
                "Développeur web freelance à Lille. Création de sites web sur mesure, SEO et applications modernes.",
              author: {
                "@type": "Person",
                name: "John Dev",
              },
              sameAs: [
                "https://www.linkedin.com/in/john-dev/",
                "https://github.com/john-dev",
              ],
              potentialAction: {
                "@type": "SearchAction",
                target: "https://john-dev.fr/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
