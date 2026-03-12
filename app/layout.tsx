import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import WarmBackground from "@/components/ui/WarmBackground";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FlowStock — Agent IA de Gestion de Stock pour Restaurants",
  description:
    "FlowStock analyse vos stocks en temps réel, prédit les ruptures et réduit votre gaspillage. Fait pour les restaurateurs indépendants.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body
        className={`${sora.variable} ${dmSans.variable} font-sans antialiased`}
      >
        <WarmBackground />
        {children}
        <Footer />
      </body>
    </html>
  );
}
