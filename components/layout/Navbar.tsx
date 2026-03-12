"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Box, ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Le produit", href: "/product" },
  { label: "Comment ça marche", href: "/how-it-works" },
  { label: "Tarifs", href: "/pricing" },
];

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface NavbarProps {
  isLoaded?: boolean;
}

export default function Navbar({ isLoaded = true }: NavbarProps) {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu au scroll
  useEffect(() => {
    if (menuOpen && scrolled) setMenuOpen(false);
  }, [scrolled, menuOpen]);

  // Bloquer le scroll body quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <AnimatePresence>
      {isLoaded && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease }}
          className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
        >
          {/* ── Pill navbar ── */}
          <nav
            className="navbar-floating flex items-center gap-2 px-4 py-2.5 rounded-full w-full max-w-fit"
            style={{
              background: scrolled || menuOpen
                ? "rgba(28,43,42,0.97)"
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
              <Box size={20} style={{ color: "#40916C" }} strokeWidth={2.5} />
              <span
                className="font-heading font-bold text-sm tracking-tight"
                style={{ color: "#FAF7F2" }}
              >
                Flow<span style={{ color: "#40916C" }}>Stock</span>
              </span>
            </a>

            {/* Separator — desktop only */}
            <div
              className="hidden md:block w-px h-5 mx-2"
              style={{ background: "rgba(255,255,255,0.1)" }}
            />

            {/* Nav links — desktop */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-3.5 py-1.5 text-sm rounded-full transition-colors duration-200"
                  style={{
                    color: hoveredLink === link.href ? "#FAF7F2" : "#8A9E96",
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

            {/* Separator — desktop only */}
            <div
              className="hidden md:block w-px h-5 mx-2"
              style={{ background: "rgba(255,255,255,0.1)" }}
            />

            {/* Actions — desktop */}
            <div className="hidden md:flex items-center gap-2">
              <a
                href="#"
                className="px-3.5 py-1.5 text-sm rounded-full transition-colors duration-200"
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
                className="flex items-center gap-1.5 px-4 py-1.5 text-sm rounded-full font-semibold transition-all duration-200 hover:scale-105"
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

            {/* CTA mobile (toujours visible) + burger */}
            <div className="flex md:hidden items-center gap-2 ml-1">
              <a
                href="#waitlist"
                className="flex items-center gap-1 px-3 py-1.5 text-xs rounded-full font-semibold"
                style={{
                  background: "linear-gradient(135deg, #40916C 0%, #2D6A4F 100%)",
                  color: "#FAF7F2",
                  textDecoration: "none",
                  fontFamily: "var(--font-family-heading)",
                }}
              >
                Essayer
                <ArrowRight size={12} />
              </a>

              {/* Burger button */}
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200 cursor-pointer"
                style={{
                  background: menuOpen
                    ? "rgba(64,145,108,0.15)"
                    : "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#FAF7F2",
                }}
                aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {menuOpen ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                    >
                      <X size={16} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                    >
                      <Menu size={16} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </nav>

          {/* ── Menu mobile drawer ── */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -12, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.97 }}
                transition={{ duration: 0.25, ease }}
                className="absolute top-[calc(100%+8px)] left-4 right-4 rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(20,36,34,0.97)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 24px 48px rgba(0,0,0,0.5)",
                }}
              >
                {/* Links */}
                <nav className="p-3 space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.25, ease }}
                      className="flex items-center justify-between px-4 py-3.5 rounded-xl transition-colors duration-150"
                      style={{
                        color: "#FAF7F2",
                        textDecoration: "none",
                        fontFamily: "var(--font-family-sans)",
                        fontSize: "15px",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = "rgba(255,255,255,0.05)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "transparent")
                      }
                    >
                      {link.label}
                      <ArrowRight size={14} style={{ color: "#8A9E96" }} />
                    </motion.a>
                  ))}
                </nav>

                {/* Divider */}
                <div
                  className="mx-4"
                  style={{ height: "1px", background: "rgba(255,255,255,0.06)" }}
                />

                {/* Bottom actions */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.25 }}
                  className="p-3 space-y-2"
                >
                  <a
                    href="#"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-center w-full py-3 rounded-xl text-sm transition-colors duration-150"
                    style={{
                      color: "#8A9E96",
                      textDecoration: "none",
                      fontFamily: "var(--font-family-sans)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    Se connecter
                  </a>
                  <a
                    href="#waitlist"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-150 hover:scale-[1.01]"
                    style={{
                      background: "linear-gradient(135deg, #40916C 0%, #2D6A4F 100%)",
                      color: "#FAF7F2",
                      textDecoration: "none",
                      fontFamily: "var(--font-family-heading)",
                      boxShadow: "0 4px 16px rgba(64,145,108,0.3)",
                    }}
                  >
                    Essayer gratuitement
                    <ArrowRight size={15} />
                  </a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
