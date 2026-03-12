"use client";

import { motion } from "framer-motion";
import { Trash2, AlertTriangle, Clock } from "lucide-react";

const pains = [
  {
    icon: <Trash2 size={24} />,
    iconColor: "#C1440E",
    iconBg: "rgba(193,68,14,0.12)",
    accentColor: "#C1440E",
    title: "Le gaspillage silencieux",
    desc: "Chaque semaine, des produits finissent à la poubelle. Pas par négligence — par manque de visibilité.",
  },
  {
    icon: <AlertTriangle size={24} />,
    iconColor: "#ED8936",
    iconBg: "rgba(237,137,54,0.12)",
    accentColor: "#ED8936",
    title: "La rupture au mauvais moment",
    desc: "Un client commande le saumon. Il n'y en a plus. Vous l'avez su trop tard.",
  },
  {
    icon: <Clock size={24} />,
    iconColor: "#40916C",
    iconBg: "rgba(64,145,108,0.12)",
    accentColor: "#40916C",
    title: "Des heures perdues chaque semaine",
    desc: "Carnets papier, tableurs, WhatsApp fournisseurs. Votre temps vaut mieux que ça.",
  },
];

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function PainSection() {
  return (
    <section
      className="relative z-10 py-20 px-6"
      style={{
        background: "rgba(26,60,52,0.4)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-14"
        >
          <h2
            className="font-heading font-bold mb-4"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              color: "#FAF7F2",
            }}
          >
            Vous vous reconnaissez&nbsp;?
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {pains.map((pain) => (
            <motion.div
              key={pain.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative rounded-2xl p-7"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(16px)",
                borderLeft: `3px solid ${pain.accentColor}`,
                boxShadow: `0 20px 60px rgba(0,0,0,0.15)`,
              }}
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: pain.iconBg,
                  color: pain.iconColor,
                }}
              >
                {pain.icon}
              </div>

              {/* Content */}
              <h3
                className="font-heading font-semibold text-lg mb-3"
                style={{ color: "#FAF7F2" }}
              >
                {pain.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "#8A9E96",
                  fontFamily: "var(--font-family-sans)",
                }}
              >
                {pain.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Transition phrase */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mt-12 text-base italic"
          style={{
            color: "#8A9E96",
            fontFamily: "var(--font-family-sans)",
          }}
        >
          FlowStock a été conçu pour résoudre exactement ces trois problèmes.
        </motion.p>
      </div>
    </section>
  );
}
