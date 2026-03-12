"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Settings, Clock, ShieldCheck, ArrowRight } from "lucide-react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const faqs = [
  {
    question: "Est-ce que je dois changer mon logiciel de caisse ?",
    answer:
      "Non. FlowStock se connecte à votre caisse existante via API sécurisée en lecture seule. Compatible Lightspeed, Zelty, L'Addition, Square, et d'autres sur demande. Vous ne touchez à rien dans votre setup actuel.",
    Icon: Zap,
  },
  {
    question: "Que se passe-t-il si mon logiciel de caisse n'est pas compatible ?",
    answer:
      "Vous pouvez importer vos données manuellement via CSV ou Excel. Ce n'est pas idéal, mais ça marche dès le premier jour. La compatibilité native avec d'autres caisses est notre priorité de développement.",
    Icon: Settings,
  },
  {
    question: "L'essai gratuit, ça dure combien de temps ?",
    answer:
      "14 jours complets, toutes fonctionnalités incluses, sans carte bancaire. Vous décidez de continuer seulement si vous voyez un impact réel sur votre food cost.",
    Icon: Clock,
  },
  {
    question: "Est-ce que mes données restent confidentielles ?",
    answer:
      "Vos données sont hébergées en France, chiffrées, et ne sont jamais partagées ni vendues. FlowStock n'accède à vos données que pour faire fonctionner le service. Aucun modèle public n'est entraîné sur vos informations.",
    Icon: ShieldCheck,
  },
  {
    question: "Puis-je annuler à tout moment ?",
    answer:
      "Oui, sans frais ni engagement. Vous annulez depuis votre espace client en 2 clics. Votre accès reste actif jusqu'à la fin de la période payée.",
    Icon: ArrowRight,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export default function PricingFAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-14"
        >
          <h2
            className="font-heading font-bold"
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.2rem)",
              color: "#FAF7F2",
            }}
          >
            Questions fréquentes
          </h2>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-6"
        >
          {/* Left — question list */}
          <div className="space-y-1">
            {faqs.map((faq, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="w-full text-left px-4 py-4 rounded-xl flex items-start gap-3 transition-all duration-200 cursor-pointer"
                style={{
                  background:
                    activeIndex === i
                      ? "rgba(64,145,108,0.1)"
                      : "transparent",
                  border:
                    activeIndex === i
                      ? "1px solid rgba(64,145,108,0.2)"
                      : "1px solid transparent",
                }}
              >
                <faq.Icon
                  size={15}
                  style={{
                    color: activeIndex === i ? "#40916C" : "#8A9E96",
                    flexShrink: 0,
                    marginTop: "2px",
                    transition: "color 0.2s",
                  }}
                />
                <span
                  className="text-sm leading-relaxed"
                  style={{
                    color: activeIndex === i ? "#FAF7F2" : "#8A9E96",
                    fontFamily: "var(--font-family-sans)",
                    transition: "color 0.2s",
                  }}
                >
                  {faq.question}
                </span>
              </button>
            ))}
          </div>

          {/* Right — terminal answer panel */}
          <div
            className="rounded-xl overflow-hidden"
            style={{
              background: "#0E1614",
              border: "1px solid rgba(255,255,255,0.08)",
              minHeight: "240px",
            }}
          >
            {/* Terminal header */}
            <div
              className="flex items-center justify-between px-4 py-3"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="flex items-center gap-1.5">
                {["#C1440E", "#ED8936", "#40916C"].map((color, i) => (
                  <div
                    key={i}
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: color }}
                  />
                ))}
              </div>
              <span
                className="text-xs"
                style={{ color: "#8A9E96", fontFamily: "monospace" }}
              >
                flowstock_agent.ts
              </span>
              <div style={{ width: "52px" }} />
            </div>

            {/* Answer content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease }}
                className="p-6"
              >
                {/* Prompt line */}
                <div
                  className="flex items-center gap-2 mb-4"
                  style={{ fontFamily: "monospace" }}
                >
                  <span style={{ color: "#40916C", fontSize: "12px" }}>▶</span>
                  <span style={{ color: "#8A9E96", fontSize: "12px" }}>
                    agent.answer(
                    <span style={{ color: "#52B788" }}>
                      &quot;{faqs[activeIndex].question.slice(0, 28)}…&quot;
                    </span>
                    )
                  </span>
                </div>

                {/* Answer text */}
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#FAF7F2",
                    fontFamily: "var(--font-family-sans)",
                    lineHeight: 1.75,
                  }}
                >
                  {faqs[activeIndex].answer}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
