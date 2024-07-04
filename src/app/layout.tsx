import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John - Développeur web et application, Lille (59)",
  description:
    "Développeur web et d'applications pour particuliers et entreprises à Lille (59). Spécialisé dans la création de sites web, le référencement, les CMS et les technologies avancées. Contactez-moi !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" type="image/svg+xml" href="/flavicon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
