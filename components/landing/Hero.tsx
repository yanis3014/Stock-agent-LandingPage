"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, Play, CheckCircle, TrendingDown, ArrowUpRight, Sparkles } from "lucide-react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const stockItems = [
  {
    name: "Saumon atlantique",
    stock: "0.8 kg",
    dlc: "Auj.",
    status: "CRITIQUE",
    statusColor: "#C1440E",
    statusBg: "rgba(193,68,14,0.15)",
    barColor: "#C1440E",
    barWidth: "16%",
  },
  {
    name: "Filet de bœuf",
    stock: "1.2 kg",
    dlc: "+2j",
    status: "ATTENTION",
    statusColor: "#ED8936",
    statusBg: "rgba(237,137,54,0.15)",
    barColor: "#ED8936",
    barWidth: "24%",
  },
  {
    name: "Magret de canard",
    stock: "3.4 kg",
    dlc: "+5j",
    status: "OK",
    statusColor: "#40916C",
    statusBg: "rgba(64,145,108,0.15)",
    barColor: "#40916C",
    barWidth: "68%",
  },
];

const kpis = [
  { label: "Food Cost", value: "28.4%", delta: "−2.1 pts", deltaColor: "#40916C", icon: <TrendingDown size={12} /> },
  { label: "Gaspillage évité", value: "340€", delta: "↑ ce mois", deltaColor: "#40916C", icon: null },
  { label: "Ruptures évitées", value: "7", delta: "↑ semaine", deltaColor: "#40916C", icon: null },
  { label: "Couverts", value: "186", delta: "hier soir", deltaColor: "#8A9E96", icon: null },
];

const microProofs = [
  "Mise en place en 10 minutes",
  "Aucune installation logicielle",
  "Données sécurisées, 100% privées",
];

export default function Hero() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [barsVisible, setBarsVisible] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setBarsVisible(true), 900);
    return () => clearTimeout(t);
  }, []);

  const dashboardRotate = isDesktop ? -2 : 0;

  return (
    <section
      className="relative min-h-screen flex items-center pt-28 pb-20 px-6"
      style={{ overflow: "hidden" }}
    >
      {/* Hero ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 60% 40%, rgba(64,145,108,0.06), transparent)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* ── LEFT COLUMN ────────────────────────────────────── */}
          <div className="flex-1 min-w-0 lg:max-w-[55%]">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-7"
              style={{
                border: "1px solid rgba(64,145,108,0.35)",
                background: "rgba(64,145,108,0.08)",
              }}
            >
              <span style={{ color: "#40916C", fontSize: "11px" }}>✦</span>
              <span
                className="text-sm font-medium"
                style={{
                  color: "#52B788",
                  fontFamily: "var(--font-family-heading)",
                }}
              >
                Agent IA pour la restauration
              </span>
            </motion.div>

            {/* H1 */}
            <h1
              className="font-heading font-extrabold leading-none mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease, delay: 0.15 }}
                style={{ color: "#FAF7F2" }}
              >
                Chaque semaine, vous jetez
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease, delay: 0.23 }}
                style={{ color: "#40916C" }}
              >
                de l&apos;argent à la poubelle.
              </motion.span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.35 }}
              className="text-lg leading-relaxed mb-9"
              style={{
                color: "#8A9E96",
                fontFamily: "var(--font-family-sans)",
                maxWidth: "540px",
              }}
            >
              FlowStock analyse vos stocks en temps réel, prédit les ruptures
              avant le service et vous suggère comment écouler vos produits
              proches de la DLC.{" "}
              <span style={{ color: "rgba(138,158,150,0.7)" }}>
                Fini les carnets papier, fini les mauvaises surprises à&nbsp;19h30.
              </span>
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-9"
            >
              <motion.a
                href="#waitlist"
                className="btn-primary group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Analyser mes stocks gratuitement
                <motion.span
                  className="inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </motion.a>

              <motion.a
                href="#demo"
                className="btn-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play size={16} style={{ color: "#8A9E96" }} />
                Voir la démo (1 min)
              </motion.a>
            </motion.div>

            {/* Micro-preuves */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.65 }}
              className="flex flex-wrap gap-x-6 gap-y-2"
            >
              {microProofs.map((proof) => (
                <div key={proof} className="flex items-center gap-2">
                  <CheckCircle
                    size={14}
                    style={{ color: "#40916C", flexShrink: 0 }}
                  />
                  <span
                    className="text-sm"
                    style={{
                      color: "#8A9E96",
                      fontFamily: "var(--font-family-sans)",
                    }}
                  >
                    {proof}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN — DASHBOARD MOCK ──────────────────── */}
          <div className="flex-1 lg:max-w-[45%] w-full relative">
            {/* Floating badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 30, delay: 1.2 }}
              className="absolute -top-4 -right-2 z-10 flex items-center gap-2 px-4 py-2.5 rounded-full"
              style={{
                background: "rgba(26,60,52,0.95)",
                border: "1px solid rgba(64,145,108,0.4)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(64,145,108,0.15)",
                backdropFilter: "blur(12px)",
              }}
            >
              <ArrowUpRight size={14} style={{ color: "#40916C", transform: "rotate(180deg)" }} />
              <span
                className="text-sm font-semibold"
                style={{ color: "#52B788", fontFamily: "var(--font-family-heading)" }}
              >
                −18% food cost ce mois
              </span>
            </motion.div>

            {/* Dashboard card */}
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1, rotate: dashboardRotate }}
              whileHover={{ y: -8, rotate: dashboardRotate }}
              transition={{ duration: 0.9, ease, delay: 0.3 }}
              style={{
                background: "rgba(26,60,52,0.7)",
                border: "1px solid rgba(64,145,108,0.3)",
                borderRadius: "20px",
                backdropFilter: "blur(20px)",
                boxShadow:
                  "0 40px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(64,145,108,0.2)",
                willChange: "transform",
              }}
            >
              {/* Dashboard header */}
              <div
                className="flex items-center justify-between px-5 py-4"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-6 h-6 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(64,145,108,0.2)" }}
                  >
                    <span style={{ color: "#40916C", fontSize: "12px" }}>◈</span>
                  </div>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "#FAF7F2", fontFamily: "var(--font-family-heading)" }}
                  >
                    FlowStock
                  </span>
                  <span
                    className="text-xs px-2"
                    style={{
                      color: "#8A9E96",
                      borderLeft: "1px solid rgba(255,255,255,0.1)",
                      paddingLeft: "8px",
                    }}
                  >
                    Dashboard
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full"
                  style={{ background: "rgba(64,145,108,0.12)", border: "1px solid rgba(64,145,108,0.25)" }}
                >
                  <span className="live-dot" />
                  <span
                    className="text-xs font-semibold"
                    style={{ color: "#52B788", fontFamily: "var(--font-family-heading)" }}
                  >
                    LIVE
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-4">
                {/* KPI row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {kpis.map((kpi) => (
                    <div
                      key={kpi.label}
                      className="p-3 rounded-xl"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <p
                        className="text-[10px] mb-1.5 truncate"
                        style={{
                          color: "#8A9E96",
                          fontFamily: "var(--font-family-sans)",
                        }}
                      >
                        {kpi.label}
                      </p>
                      <div className="flex items-baseline gap-1">
                        <span
                          className="font-heading font-bold text-base"
                          style={{ color: "#FAF7F2" }}
                        >
                          {kpi.value}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        {kpi.icon && (
                          <span style={{ color: kpi.deltaColor }}>{kpi.icon}</span>
                        )}
                        <span
                          className="text-[10px]"
                          style={{
                            color: kpi.deltaColor,
                            fontFamily: "var(--font-family-sans)",
                          }}
                        >
                          {kpi.delta}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stock table */}
                <div
                  className="rounded-xl overflow-hidden"
                  style={{ border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  {/* Table header */}
                  <div
                    className="grid grid-cols-[1fr_auto_auto_auto] gap-3 px-4 py-2.5"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {["Ingrédient", "Stock", "DLC", "Statut"].map((h) => (
                      <span
                        key={h}
                        className="text-[10px] font-semibold uppercase tracking-wider"
                        style={{ color: "#8A9E96", fontFamily: "var(--font-family-heading)" }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Stock rows */}
                  {stockItems.map((item, i) => (
                    <div
                      key={item.name}
                      className="px-4 py-3"
                      style={{
                        borderBottom:
                          i < stockItems.length - 1
                            ? "1px solid rgba(255,255,255,0.04)"
                            : "none",
                      }}
                    >
                      <div className="grid grid-cols-[1fr_auto_auto_auto] gap-3 items-center mb-1.5">
                        <span
                          className="text-xs truncate"
                          style={{
                            color: "#FAF7F2",
                            fontFamily: "var(--font-family-sans)",
                          }}
                        >
                          {item.name}
                        </span>
                        <span
                          className="text-xs"
                          style={{
                            color: "#8A9E96",
                            fontFamily: "var(--font-family-sans)",
                          }}
                        >
                          {item.stock}
                        </span>
                        <span
                          className="text-xs"
                          style={{
                            color: item.statusColor,
                            fontFamily: "var(--font-family-sans)",
                          }}
                        >
                          {item.dlc}
                        </span>
                        <span
                          className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                          style={{
                            color: item.statusColor,
                            background: item.statusBg,
                            fontFamily: "var(--font-family-heading)",
                          }}
                        >
                          {item.status}
                        </span>
                      </div>
                      {/* Progress bar */}
                      <div className="progress-bar" style={{ height: "3px" }}>
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: barsVisible ? item.barWidth : "0%" }}
                          transition={{
                            duration: 1.2,
                            ease: "easeOut",
                            delay: 0.1 * i,
                          }}
                          style={{
                            background: item.barColor,
                            height: "100%",
                            borderRadius: "999px",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* AI suggestion */}
                <div
                  className="rounded-xl p-4"
                  style={{
                    background: "rgba(212,168,67,0.07)",
                    border: "1px solid rgba(212,168,67,0.2)",
                  }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <Sparkles size={12} style={{ color: "#D4A843", flexShrink: 0 }} />
                        <span
                          className="text-xs font-semibold"
                          style={{
                            color: "#D4A843",
                            fontFamily: "var(--font-family-heading)",
                          }}
                        >
                          Suggestion IA
                        </span>
                      </div>
                      <p
                        className="text-xs leading-relaxed"
                        style={{
                          color: "#FAF7F2",
                          fontFamily: "var(--font-family-sans)",
                        }}
                      >
                        Plat du jour recommandé :{" "}
                        <strong>Tartare de saumon</strong>
                        <br />
                        <span style={{ color: "#8A9E96" }}>
                          Économie estimée ~65€
                        </span>
                      </p>
                    </div>
                    <button
                      className="flex-shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all hover:scale-105"
                      style={{
                        background: "rgba(64,145,108,0.2)",
                        border: "1px solid rgba(64,145,108,0.3)",
                        color: "#52B788",
                        fontFamily: "var(--font-family-heading)",
                      }}
                    >
                      Valider
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
