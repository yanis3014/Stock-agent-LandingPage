"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const scenarios = [
  { id: "rush", tab: "⚡  Alerte Rush", label: "19h30 — Service en cours" },
  { id: "dlc", tab: "📅  DLC Critique", label: "Lundi matin — Avant les commandes" },
  { id: "suggestion", tab: "✦  Suggestion IA", label: "Plat du jour recommandé" },
] as const;

type ScenarioId = (typeof scenarios)[number]["id"];

// ─── Shared animation variants ───────────────────────────────────────────────
const contentVariants = {
  enter: { opacity: 0, y: 8 },
  center: { opacity: 1, y: 0, transition: { duration: 0.35, ease } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

const staggerList = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const staggerItem = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease } },
};

// ─── Scenario 1: Alerte Rush ─────────────────────────────────────────────────
const rushAlerts = [
  {
    emoji: "🐟",
    name: "Saumon atlantique",
    detail: "Dernière portion servie · 0.8 kg restant",
    status: "CRITIQUE",
    statusColor: "#C1440E",
    statusBg: "#C1440E",
    borderColor: "#C1440E",
    rowBg: "rgba(193,68,14,0.06)",
  },
  {
    emoji: "🥩",
    name: "Filet de bœuf",
    detail: "5 portions restantes · 6 tables en cours",
    status: "FAIBLE",
    statusColor: "#ED8936",
    statusBg: "#ED8936",
    borderColor: "#ED8936",
    rowBg: "rgba(237,137,54,0.06)",
  },
  {
    emoji: "🥗",
    name: "Salade niçoise",
    detail: "Stock suffisant · 18 portions",
    status: "OK",
    statusColor: "#40916C",
    statusBg: "#40916C",
    borderColor: "#40916C",
    rowBg: "rgba(64,145,108,0.06)",
  },
];

function ScenarioRush() {
  return (
    <motion.div
      key="rush"
      variants={contentVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="p-5 space-y-3"
    >
      {/* Status bar */}
      <div
        className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm mb-4"
        style={{
          background: "rgba(193,68,14,0.1)",
          border: "1px solid rgba(193,68,14,0.2)",
          color: "#C1440E",
          fontFamily: "var(--font-family-sans)",
        }}
      >
        <span className="w-2 h-2 rounded-full bg-current animate-pulse flex-shrink-0" />
        Service en cours · 47 couverts · 19h34
      </div>

      {/* Alert list */}
      <motion.div variants={staggerList} initial="hidden" animate="visible" className="space-y-2">
        {rushAlerts.map((alert) => (
          <motion.div
            key={alert.name}
            variants={staggerItem}
            className="flex items-center justify-between px-4 py-3 rounded-xl"
            style={{
              background: alert.rowBg,
              borderLeft: `3px solid ${alert.borderColor}`,
            }}
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className="text-lg flex-shrink-0">{alert.emoji}</span>
              <div className="min-w-0">
                <p
                  className="text-sm font-medium truncate"
                  style={{ color: "#FAF7F2", fontFamily: "var(--font-family-sans)" }}
                >
                  {alert.name}
                </p>
                <p
                  className="text-xs"
                  style={{ color: "#8A9E96", fontFamily: "var(--font-family-sans)" }}
                >
                  {alert.detail}
                </p>
              </div>
            </div>
            <span
              className="text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 ml-3"
              style={{
                background: alert.statusBg,
                color: "#fff",
                fontFamily: "var(--font-family-heading)",
              }}
            >
              {alert.status}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Action button */}
      <div className="pt-2">
        <button
          className="w-full py-2.5 rounded-xl text-sm transition-colors duration-200 cursor-pointer"
          style={{
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#8A9E96",
            fontFamily: "var(--font-family-heading)",
          }}
        >
          Tout acquitter
        </button>
      </div>
    </motion.div>
  );
}

// ─── Scenario 2: DLC Critique ─────────────────────────────────────────────────
const dlcRows = [
  {
    emoji: "🐟",
    name: "Saumon atlantique",
    stock: "0.8 kg",
    dlc: "Aujourd'hui",
    barWidth: 12,
    barColor: "#C1440E",
    status: "CRITIQUE",
    statusColor: "#C1440E",
    statusBg: "rgba(193,68,14,0.15)",
  },
  {
    emoji: "🥩",
    name: "Filet de bœuf",
    stock: "1.2 kg",
    dlc: "+2 jours",
    barWidth: 28,
    barColor: "#ED8936",
    status: "ATTENTION",
    statusColor: "#ED8936",
    statusBg: "rgba(237,137,54,0.15)",
  },
  {
    emoji: "🦆",
    name: "Magret de canard",
    stock: "3.4 kg",
    dlc: "+5 jours",
    barWidth: 65,
    barColor: "#40916C",
    status: "OK",
    statusColor: "#40916C",
    statusBg: "rgba(64,145,108,0.15)",
  },
  {
    emoji: "🧀",
    name: "Burrata",
    stock: "8 pcs",
    dlc: "+3 jours",
    barWidth: 80,
    barColor: "#40916C",
    status: "OK",
    statusColor: "#40916C",
    statusBg: "rgba(64,145,108,0.15)",
  },
];

function ScenarioDLC() {
  return (
    <motion.div
      key="dlc"
      variants={contentVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="p-5"
    >
      {/* KPI row */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        {[
          { label: "Food Cost ce mois", value: "28.4%", delta: "↓ −2.1 pts", deltaColor: "#40916C" },
          { label: "Gaspillage évité", value: "340€", delta: "↑ ce mois", deltaColor: "#40916C" },
        ].map((kpi) => (
          <div
            key={kpi.label}
            className="p-3 rounded-xl"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p className="text-[10px] mb-1" style={{ color: "#8A9E96", fontFamily: "var(--font-family-sans)" }}>
              {kpi.label}
            </p>
            <span className="font-heading font-bold text-lg" style={{ color: "#FAF7F2" }}>
              {kpi.value}
            </span>
            <p className="text-[10px] mt-0.5" style={{ color: kpi.deltaColor, fontFamily: "var(--font-family-sans)" }}>
              {kpi.delta}
            </p>
          </div>
        ))}
      </div>

      {/* Table header */}
      <div
        className="grid grid-cols-[1fr_auto_auto_60px_auto] gap-2 px-3 py-2 mb-1 rounded-lg"
        style={{ background: "rgba(255,255,255,0.03)" }}
      >
        {["Ingrédient", "Stock", "DLC", "Niveau", "Statut"].map((h) => (
          <span
            key={h}
            className="text-[10px] uppercase tracking-wider font-semibold"
            style={{ color: "#8A9E96", fontFamily: "var(--font-family-heading)" }}
          >
            {h}
          </span>
        ))}
      </div>

      {/* Table rows */}
      <motion.div variants={staggerList} initial="hidden" animate="visible" className="space-y-1">
        {dlcRows.map((row, i) => (
          <motion.div
            key={row.name}
            variants={staggerItem}
            className="grid grid-cols-[1fr_auto_auto_60px_auto] gap-2 items-center px-3 py-2.5 rounded-lg"
            style={{
              background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
            }}
          >
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="text-sm flex-shrink-0">{row.emoji}</span>
              <span
                className="text-xs truncate"
                style={{ color: "#FAF7F2", fontFamily: "var(--font-family-sans)" }}
              >
                {row.name}
              </span>
            </div>
            <span className="text-xs" style={{ color: "#8A9E96", fontFamily: "var(--font-family-sans)" }}>
              {row.stock}
            </span>
            <span className="text-xs whitespace-nowrap" style={{ color: row.statusColor, fontFamily: "var(--font-family-sans)" }}>
              {row.dlc}
            </span>
            <div className="progress-bar" style={{ height: "4px", width: "100%" }}>
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${row.barWidth}%` }}
                transition={{ duration: 1.2, ease: "easeOut", delay: i * 0.1 }}
                style={{ background: row.barColor, height: "100%", borderRadius: "999px" }}
              />
            </div>
            <span
              className="text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap"
              style={{ color: row.statusColor, background: row.statusBg, fontFamily: "var(--font-family-heading)" }}
            >
              {row.status}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

// ─── Scenario 3: Suggestion IA ────────────────────────────────────────────────
function ScenarioSuggestion() {
  return (
    <motion.div
      key="suggestion"
      variants={contentVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="p-6 space-y-5"
    >
      {/* Chip */}
      <div
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
        style={{
          background: "rgba(212,168,67,0.1)",
          border: "1px solid rgba(212,168,67,0.25)",
          color: "#D4A843",
          fontFamily: "var(--font-family-heading)",
        }}
      >
        <span>✦</span>
        Suggestion IA · Générée à 7h12
      </div>

      {/* Title */}
      <h3
        className="font-heading font-bold text-xl"
        style={{ color: "#FAF7F2" }}
      >
        Plat du jour recommandé pour ce midi
      </h3>

      {/* Body */}
      <p
        className="text-sm leading-relaxed"
        style={{ color: "#8A9E96", fontFamily: "var(--font-family-sans)" }}
      >
        Basé sur vos invendus et les DLC proches, l&apos;agent recommande un{" "}
        <span style={{ color: "#FAF7F2", fontWeight: 500 }}>
          tartare de saumon
        </span>{" "}
        en entrée et un{" "}
        <span style={{ color: "#FAF7F2", fontWeight: 500 }}>
          risotto de canard
        </span>{" "}
        en plat.
      </p>

      {/* Ingredients */}
      <motion.div
        variants={staggerList}
        initial="hidden"
        animate="visible"
        className="space-y-2 rounded-xl p-4"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
      >
        {[
          { emoji: "🐟", label: "Saumon — à écouler", value: "0.8 kg", valueColor: "#C1440E" },
          { emoji: "🦆", label: "Magret de canard — stock élevé", value: "3.4 kg", valueColor: "#8A9E96" },
          { emoji: "💰", label: "Économie estimée", value: "~65€", valueColor: "#40916C" },
        ].map((item) => (
          <motion.div
            key={item.label}
            variants={staggerItem}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <span>{item.emoji}</span>
              <span
                className="text-sm"
                style={{ color: "#8A9E96", fontFamily: "var(--font-family-sans)" }}
              >
                {item.label}
              </span>
            </div>
            <span
              className="text-sm font-semibold"
              style={{ color: item.valueColor, fontFamily: "var(--font-family-heading)" }}
            >
              {item.value}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Validate button */}
      <motion.button
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4, ease }}
        whileHover={{ scale: 1.01, backgroundColor: "#52B788", y: -1 }}
        className="w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer transition-colors duration-200"
        style={{
          background: "#40916C",
          color: "#FAF7F2",
          fontFamily: "var(--font-family-heading)",
          border: "none",
        }}
      >
        Valider ce plat du jour
        <ArrowRight size={16} />
      </motion.button>
    </motion.div>
  );
}

// ─── Mock Dashboard shell ─────────────────────────────────────────────────────
function MockDashboard({ activeId }: { activeId: ScenarioId }) {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "#111D1C",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 40px 80px rgba(0,0,0,0.4)",
      }}
    >
      {/* Window bar */}
      <div
        className="flex items-center justify-between px-4 py-3"
        style={{ background: "#0E1614", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="flex items-center gap-1.5">
          {["#C1440E", "#ED8936", "#40916C"].map((c) => (
            <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
          ))}
        </div>
        <span
          className="text-xs"
          style={{ color: "#8A9E96", fontFamily: "monospace" }}
        >
          FlowStock — Dashboard
        </span>
        <div
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
          style={{ background: "rgba(64,145,108,0.12)", border: "1px solid rgba(64,145,108,0.2)" }}
        >
          <span className="live-dot" style={{ width: "6px", height: "6px" }} />
          <span
            className="text-[10px] font-semibold"
            style={{ color: "#52B788", fontFamily: "var(--font-family-heading)" }}
          >
            LIVE
          </span>
        </div>
      </div>

      {/* Scenario content */}
      <div style={{ minHeight: "360px" }}>
        <AnimatePresence mode="wait">
          {activeId === "rush" && <ScenarioRush />}
          {activeId === "dlc" && <ScenarioDLC />}
          {activeId === "suggestion" && <ScenarioSuggestion />}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ─── Main DemoSection ─────────────────────────────────────────────────────────
const fadeParts = [
  { delay: 0, type: "title" },
  { delay: 0.1, type: "sub" },
  { delay: 0.2, type: "tabs" },
  { delay: 0.3, type: "dashboard" },
];

export default function DemoSection() {
  const [activeId, setActiveId] = useState<ScenarioId>("rush");

  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease, delay: fadeParts[0].delay }}
          className="font-heading font-extrabold text-center mb-3"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#FAF7F2" }}
        >
          Voyez FlowStock en action.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease, delay: fadeParts[1].delay }}
          className="text-center text-lg mb-10"
          style={{ color: "#8A9E96", fontFamily: "var(--font-family-sans)" }}
        >
          Trois situations réelles. Comment l&apos;agent réagit.
        </motion.p>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease, delay: fadeParts[2].delay }}
          className="flex justify-center mb-8"
        >
          <div
            className="flex gap-1.5 p-1.5 rounded-xl overflow-x-auto"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {scenarios.map((sc) => (
              <button
                key={sc.id}
                onClick={() => setActiveId(sc.id)}
                className="relative flex-shrink-0 px-5 py-2.5 rounded-lg text-sm transition-colors duration-200 cursor-pointer"
                style={{
                  color: activeId === sc.id ? "#FAF7F2" : "#8A9E96",
                  fontFamily: "var(--font-family-sans)",
                  background: "transparent",
                  border: "none",
                  zIndex: 1,
                }}
              >
                {activeId === sc.id && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background: "#1A3C34",
                      border: "1px solid rgba(64,145,108,0.3)",
                      zIndex: -1,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                {sc.tab}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease, delay: fadeParts[3].delay }}
        >
          <MockDashboard activeId={activeId} />
        </motion.div>

        {/* Context label + CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-7 space-y-2"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={activeId}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="text-xs uppercase tracking-widest"
              style={{ color: "#8A9E96", fontFamily: "var(--font-family-heading)" }}
            >
              {scenarios.find((s) => s.id === activeId)?.label}
            </motion.p>
          </AnimatePresence>
          <p style={{ color: "#8A9E96", fontFamily: "var(--font-family-sans)", fontSize: "14px" }}>
            Vous voulez voir ça sur votre restaurant ?{" "}
            <a
              href="#waitlist"
              className="font-medium underline-offset-4 hover:underline"
              style={{ color: "#40916C" }}
            >
              Analyser mes stocks gratuitement →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
