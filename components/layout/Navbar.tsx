"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Box, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Le produit", href: "/product" },
  { label: "Comment ça marche", href: "/how-it-works" },
  { label: "Tarifs", href: "/pricing" },
];

interface NavbarProps {
  isLoaded?: boolean;
}

export default function Navbar({ isLoaded = true }: NavbarProps) {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isLoaded && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
        >
          <nav
            className="navbar-floating flex items-center gap-2 px-4 py-2.5 rounded-full"
            style={{
              background: scrolled
                ? "rgba(28,43,42,0.92)"
                : "rgba(28,43,42,0.85)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.06)",
              transition: "background 0.3s ease",
            }}
          >
            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-2 mr-2"
              style={{ textDecoration: "none" }}
            >
              <Box
                size={20}
                style={{ color: "#40916C" }}
                strokeWidth={2.5}
              />
              <span
                className="font-heading font-bold text-sm tracking-tight"
                style={{ color: "#FAF7F2" }}
              >
                Flow
                <span style={{ color: "#40916C" }}>Stock</span>
              </span>
            </a>

            {/* Separator */}
            <div
              className="w-px h-5 mx-2"
              style={{ background: "rgba(255,255,255,0.1)" }}
            />

            {/* Nav links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-3.5 py-1.5 text-sm rounded-full transition-colors duration-200"
                  style={{
                    color:
                      hoveredLink === link.href
                        ? "#FAF7F2"
                        : "#8A9E96",
                    textDecoration: "none",
                    fontFamily: "var(--font-family-sans)",
                  }}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {hoveredLink === link.href && (
                    <motion.span
                      layoutId="nav-bubble"
                      className="absolute inset-0 rounded-full"
                      style={{ background: "rgba(255,255,255,0.06)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              ))}
            </div>

            {/* Separator */}
            <div
              className="hidden md:block w-px h-5 mx-2"
              style={{ background: "rgba(255,255,255,0.1)" }}
            />

            {/* Actions */}
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="hidden md:block px-3.5 py-1.5 text-sm rounded-full transition-colors duration-200"
                style={{
                  color: "#8A9E96",
                  textDecoration: "none",
                  fontFamily: "var(--font-family-sans)",
                }}
              >
                Se connecter
              </a>
              <a
                href="#waitlist"
                className="relative overflow-hidden flex items-center gap-1.5 px-4 py-1.5 text-sm rounded-full font-semibold transition-all duration-200 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #40916C 0%, #2D6A4F 100%)",
                  color: "#FAF7F2",
                  textDecoration: "none",
                  fontFamily: "var(--font-family-heading)",
                  boxShadow: "0 4px 16px rgba(64,145,108,0.25)",
                }}
              >
                Essayer gratuitement
                <ArrowRight size={14} />
              </a>
            </div>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
