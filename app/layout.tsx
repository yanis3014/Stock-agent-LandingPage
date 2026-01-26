import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import LivingGridBackground from "@/components/ui/LivingGridBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "flowStock - Agent IA de Gestion de Stock",
  description: "Automatisez votre gestion de stock avec l'intelligence artificielle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Global Living Grid Background */}
        <LivingGridBackground />
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
