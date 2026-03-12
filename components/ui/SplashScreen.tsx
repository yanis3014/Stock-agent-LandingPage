"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplashScreenProps {
  finishLoading: () => void;
  onTransitionStart?: () => void;
}

export default function SplashScreen({
  finishLoading,
  onTransitionStart,
}: SplashScreenProps) {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit">("enter");

  // Stocker les callbacks en refs pour éviter de les mettre en deps
  // et ainsi ne jamais redéclencher l'effet (fix StrictMode double-mount)
  const finishLoadingRef = useRef(finishLoading);
  const onTransitionStartRef = useRef(onTransitionStart);
  useEffect(() => {
    finishLoadingRef.current = finishLoading;
    onTransitionStartRef.current = onTransitionStart;
  });

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 1400);
    const t2 = setTimeout(() => {
      setPhase("exit");
      onTransitionStartRef.current?.();
    }, 2800);
    const t3 = setTimeout(() => finishLoadingRef.current(), 3650);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isExiting = phase === "exit";

  const snapEase = [0.76, 0, 0.24, 1] as const;
  const springEase = [0.22, 1, 0.36, 1] as const;

  return (
    <div
      className="fixed inset-0 z-[9999] overflow-hidden"
      style={{ background: "#1C2B2A" }}
    >
      {/* Panneau gauche */}
      <motion.div
        className="absolute inset-y-0 left-0 w-1/2"
        style={{ background: "#0E1614", zIndex: 10 }}
        animate={{ x: isExiting ? "-100%" : 0 }}
        transition={{ duration: 0.8, ease: snapEase }}
      />

      {/* Panneau droit */}
      <motion.div
        className="absolute inset-y-0 right-0 w-1/2"
        style={{ background: "#1A3C34", zIndex: 10 }}
        animate={{ x: isExiting ? "100%" : 0 }}
        transition={{ duration: 0.8, ease: snapEase }}
      />

      {/* Ligne séparatrice centrale */}
      <motion.div
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2"
        style={{
          width: 1,
          zIndex: 20,
          transformOrigin: "center",
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(64,145,108,0.5) 20%, rgba(82,183,136,0.9) 50%, rgba(64,145,108,0.5) 80%, transparent 100%)",
        }}
        initial={{ scaleY: 0, opacity: 0 }}
        animate={isExiting ? { opacity: 0 } : { scaleY: 1, opacity: 1 }}
        transition={{
          duration: isExiting ? 0.15 : 0.5,
          ease: springEase,
          delay: isExiting ? 0 : 0.05,
        }}
      />

      {/* Contenu centré */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{ zIndex: 30 }}
      >
        {/* Logo bloc */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={
            isExiting ? { opacity: 0, scale: 1.06 } : { opacity: 1, scale: 1 }
          }
          transition={{
            duration: isExiting ? 0.3 : 0.6,
            ease: springEase,
            delay: isExiting ? 0 : 0.22,
          }}
        >
          {/* Icône */}
          <div className="relative">
            <div
              className="absolute inset-0 scale-[2]"
              style={{
                background:
                  "radial-gradient(circle, rgba(64,145,108,0.35) 0%, transparent 65%)",
                pointerEvents: "none",
              }}
            />
            <svg
              width="56"
              height="56"
              viewBox="0 0 20 20"
              fill="none"
              className="relative"
            >
              <path
                d="M10.006.5a.501.501 0 00-.252.065l-8 4.5A.501.501 0 001.5 5.5v9a.501.501 0 00.254.435l8 4.5a.501.501 0 00.492 0l8-4.5A.501.501 0 0018.5 14.5v-9a.501.501 0 00-.254-.435L10.246.565A.501.501 0 0010.006.5zM10 1.574l6.978 3.926L10 9.426 3.022 5.5 10 1.574zM2.5 6.355l7 3.938v7.852l-7-3.938V6.355zm8 11.79V10.29l7-3.938v7.852l-7 3.938z"
                fill="#40916C"
              />
            </svg>
          </div>

          {/* Wordmark */}
          <div className="flex items-baseline">
            <span
              style={{
                fontFamily: "var(--font-sora), sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                letterSpacing: "-0.03em",
                color: "#FAF7F2",
                lineHeight: 1,
              }}
            >
              Flow
            </span>
            <span
              style={{
                fontFamily: "var(--font-sora), sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                letterSpacing: "-0.03em",
                color: "#40916C",
                lineHeight: 1,
              }}
            >
              Stock
            </span>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={isExiting ? { opacity: 0 } : { opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: springEase,
            delay: isExiting ? 0 : 0.57,
          }}
          style={{
            fontFamily: "var(--font-dm), sans-serif",
            fontWeight: 300,
            fontSize: "0.72rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(138,158,150,0.85)",
            marginTop: "1.1rem",
          }}
        >
          Agent IA pour la restauration
        </motion.p>

        {/* Badge stat animé */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isExiting ? { opacity: 0 } : { opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: springEase,
            delay: isExiting ? 0 : 0.78,
          }}
          style={{ marginTop: "2rem" }}
        >
          <AnimatedCounter />
        </motion.div>
      </div>

      {/* Coins décoratifs */}
      {(["tl", "br"] as const).map((pos) => (
        <motion.div
          key={pos}
          className="absolute"
          style={{
            ...(pos === "tl"
              ? { top: 24, left: 24 }
              : { bottom: 24, right: 24 }),
            zIndex: 40,
          }}
          initial={{ opacity: 0 }}
          animate={isExiting ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.4, delay: isExiting ? 0 : 0.85 }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              borderTop:
                pos === "tl" ? "1px solid rgba(64,145,108,0.4)" : "none",
              borderLeft:
                pos === "tl" ? "1px solid rgba(64,145,108,0.4)" : "none",
              borderBottom:
                pos === "br" ? "1px solid rgba(64,145,108,0.4)" : "none",
              borderRight:
                pos === "br" ? "1px solid rgba(64,145,108,0.4)" : "none",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

function AnimatedCounter() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const delay = setTimeout(() => {
      const start = Date.now();
      const duration = 800;
      const target = 18;
      const tick = () => {
        const progress = Math.min((Date.now() - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(eased * target));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, 900);
    return () => clearTimeout(delay);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        padding: "0.55rem 1.2rem",
        background: "rgba(64,145,108,0.12)",
        border: "1px solid rgba(64,145,108,0.28)",
        borderRadius: "999px",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-sora), sans-serif",
          fontWeight: 700,
          fontSize: "1.05rem",
          color: "#52B788",
        }}
      >
        -{value}%
      </span>
      <span
        style={{
          fontFamily: "var(--font-dm), sans-serif",
          fontSize: "0.78rem",
          color: "rgba(138,158,150,0.85)",
          letterSpacing: "0.04em",
        }}
      >
        de gaspillage en moyenne
      </span>
    </div>
  );
}
