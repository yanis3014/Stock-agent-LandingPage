"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const steps = [
  {
    num: "01",
    chip: "Étape 01",
    title: "Connectez votre caisse en 2 clics",
    desc: "FlowStock se connecte à votre logiciel de caisse (Lightspeed, Zelty, L'Addition, Square...) via une API sécurisée. Vos ventes alimentent automatiquement vos niveaux de stock, en temps réel.",
    features: [
      "Compatible avec les principales caisses du marché",
      "Connexion lecture seule — on ne touche à rien",
      "Aucune saisie manuelle requise",
    ],
    visual: (
      <div className="flex flex-wrap gap-2 mt-4">
        {["LS", "ZT", "LA", "SQ", "SU"].map((abbr, i) => (
          <div
            key={i}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold"
            style={{
              background: "rgba(64,145,108,0.12)",
              border: "1px solid rgba(64,145,108,0.25)",
              color: "#52B788",
              fontFamily: "var(--font-family-heading)",
            }}
          >
            {abbr}
          </div>
        ))}
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center text-xs"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "#8A9E96",
          }}
        >
          +12
        </div>
      </div>
    ),
  },
  {
    num: "02",
    chip: "Étape 02",
    title: "Photographiez votre carte",
    desc: "Prenez une photo de votre menu. L'IA génère automatiquement les fiches techniques de chaque plat : ingrédients, grammages, coût matière. Vous corrigez en 2 touches si besoin.",
    features: [
      "Reconnaissance visuelle du menu (OCR + IA)",
      "Fiches techniques générées en 30 secondes",
      "Éditables à tout moment depuis le téléphone",
    ],
    visual: (
      <div
        className="flex items-center gap-3 mt-4 p-3 rounded-xl"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
          style={{ background: "rgba(64,145,108,0.12)" }}
        >
          📷
        </div>
        <div>
          <p className="text-xs font-semibold" style={{ color: "#FAF7F2", fontFamily: "var(--font-family-heading)" }}>
            Menu scanné
          </p>
          <p className="text-xs" style={{ color: "#52B788", fontFamily: "var(--font-family-sans)" }}>
            ✓ 12 fiches techniques générées
          </p>
        </div>
      </div>
    ),
  },
  {
    num: "03",
    chip: "Étape 03",
    title: "FlowStock gère. Vous cuisinez.",
    desc: "L'agent surveille vos stocks 24h/24. Il vous alerte avant une rupture, suggère un plat du jour pour écouler vos produits proches de la DLC, et vous donne votre food cost en temps réel.",
    features: [
      "Alertes push avant le service, pas pendant",
      "Suggestion plat du jour basée sur vos invendus",
      "Food cost automatique, sans calculatrice",
    ],
    visual: (
      <div
        className="flex items-center gap-3 mt-4 p-3 rounded-xl"
        style={{
          background: "rgba(193,68,14,0.08)",
          border: "1px solid rgba(193,68,14,0.2)",
        }}
      >
        <span className="text-lg flex-shrink-0">⚡</span>
        <div>
          <p className="text-xs font-semibold" style={{ color: "#FAF7F2", fontFamily: "var(--font-family-heading)" }}>
            Saumon — dernière portion dans 2h
          </p>
          <p className="text-xs" style={{ color: "#ED8936", fontFamily: "var(--font-family-sans)" }}>
            Recommander au service ?
          </p>
        </div>
      </div>
    ),
  },
];

const reassuranceBadges = [
  "CSV / Excel ou API · On s'adapte à vos outils",
  "Audit complet en < 2 minutes",
  "Prédictions dès le 1er jour",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="rounded-2xl p-8"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(16px)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      {/* Chip */}
      <span
        className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-5"
        style={{
          background: "rgba(64,145,108,0.12)",
          border: "1px solid rgba(64,145,108,0.25)",
          color: "#52B788",
          fontFamily: "var(--font-family-heading)",
        }}
      >
        {step.chip}
      </span>

      {/* Title */}
      <h3
        className="font-heading font-bold text-xl mb-3"
        style={{ color: "#FAF7F2" }}
      >
        {step.title}
      </h3>

      {/* Desc */}
      <p
        className="text-sm leading-relaxed mb-5"
        style={{ color: "#8A9E96", fontFamily: "var(--font-family-sans)" }}
      >
        {step.desc}
      </p>

      {/* Features */}
      <ul className="space-y-2.5 mb-4">
        {step.features.map((feat) => (
          <li key={feat} className="flex items-start gap-2.5">
            <CheckCircle2
              size={15}
              style={{ color: "#40916C", flexShrink: 0, marginTop: "2px" }}
            />
            <span
              className="text-sm"
              style={{ color: "#FAF7F2", fontFamily: "var(--font-family-sans)" }}
            >
              {feat}
            </span>
          </li>
        ))}
      </ul>

      {/* Visual */}
      {step.visual}
    </motion.div>
  );
}

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 30%"],
  });
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="relative z-10 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
          {/* ── LEFT — sticky title + timeline ─────────────────── */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <h2
                className="font-heading font-bold mb-4"
                style={{
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  color: "#FAF7F2",
                  lineHeight: 1.15,
                }}
              >
                Comment FlowStock fonctionne
              </h2>
              <p
                className="text-sm leading-relaxed mb-10"
                style={{
                  color: "#8A9E96",
                  fontFamily: "var(--font-family-sans)",
                  maxWidth: "320px",
                }}
              >
                Pas de formation, pas d&apos;intégration ERP, pas de consultant.
                Connectez votre caisse, photographiez votre carte, c&apos;est
                tout.
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative pl-7 hidden lg:block">
              {/* Background line */}
              <div
                className="absolute left-[11px] top-0 bottom-0 w-0.5"
                style={{ background: "rgba(255,255,255,0.08)", height: "172px" }}
              />
              {/* Animated fill line */}
              <motion.div
                className="absolute left-[11px] top-0 w-0.5 origin-top"
                style={{
                  scaleY: lineScaleY,
                  background: "linear-gradient(to bottom, #40916C, #52B788)",
                  height: "172px",
                }}
              />

              {/* Step dots */}
              {steps.map((step, i) => (
                <div key={step.num} className="flex items-center gap-4 mb-10 last:mb-0">
                  <motion.div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 relative z-10"
                    style={{
                      background: "#1C2B2A",
                      border: "2px solid rgba(64,145,108,0.5)",
                      color: "#40916C",
                      fontFamily: "var(--font-family-heading)",
                      marginLeft: "-11px",
                    }}
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, duration: 0.4, ease }}
                  >
                    {i + 1}
                  </motion.div>
                  <span
                    className="text-sm"
                    style={{
                      color: "#8A9E96",
                      fontFamily: "var(--font-family-sans)",
                    }}
                  >
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT — step cards ─────────────────────────────── */}
          <div className="space-y-6">
            {steps.map((step, i) => (
              <StepCard key={step.num} step={step} index={i} />
            ))}

            {/* Reassurance badges */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-wrap gap-3 justify-center pt-4"
            >
              {reassuranceBadges.map((badge) => (
                <span
                  key={badge}
                  className="text-xs px-4 py-2 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#8A9E96",
                    fontFamily: "var(--font-family-sans)",
                  }}
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
