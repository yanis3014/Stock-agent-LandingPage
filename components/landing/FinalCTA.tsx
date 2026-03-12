"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Sparkles, Mail, ArrowRight, CheckCircle2 } from "lucide-react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleSubmit = () => {
    if (!email.includes("@")) return;
    setSubmitted(true);
  };

  return (
    <section
      id="waitlist"
      className="relative z-10 py-32 px-6 overflow-hidden"
      style={{ background: "rgba(26,60,52,0.3)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(64,145,108,0.15), transparent)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative max-w-lg mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          animate={
            submitted
              ? {}
              : {
                  y: [0, -8, 0],
                  transition: {
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                  },
                }
          }
          className="rounded-3xl p-10 md:p-14 text-center"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(64,145,108,0.25)",
            backdropFilter: "blur(20px)",
            boxShadow:
              "0 0 80px rgba(64,145,108,0.12), 0 40px 80px rgba(0,0,0,0.25)",
          }}
        >
          {submitted ? (
            /* Success state */
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease }}
              className="flex flex-col items-center gap-4"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: "rgba(64,145,108,0.15)" }}
              >
                <CheckCircle2 size={32} style={{ color: "#40916C" }} />
              </div>
              <h3
                className="font-heading font-bold text-2xl"
                style={{ color: "#FAF7F2" }}
              >
                Vous êtes sur la liste&nbsp;!
              </h3>
              <p
                className="text-sm"
                style={{
                  color: "#8A9E96",
                  fontFamily: "var(--font-family-sans)",
                }}
              >
                On vous écrit dès que votre accès est prêt. D&apos;ici là,
                parlez-en à un autre restaurateur 👨‍🍳
              </p>
            </motion.div>
          ) : (
            <>
              {/* Icon badge */}
              <div className="flex justify-center mb-6">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(212,168,67,0.12)" }}
                >
                  <Sparkles size={26} style={{ color: "#D4A843" }} />
                </div>
              </div>

              {/* Title */}
              <h2
                className="font-heading font-bold mb-3"
                style={{
                  fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
                  color: "#FAF7F2",
                  lineHeight: 1.25,
                }}
              >
                Votre prochain service sans rupture commence ici.
              </h2>

              {/* Subtitle */}
              <p
                className="text-sm mb-8"
                style={{
                  color: "#8A9E96",
                  fontFamily: "var(--font-family-sans)",
                }}
              >
                Accès bêta gratuit · Mise en place en 10 minutes · Aucune carte
                bancaire requise
              </p>

              {/* Form */}
              <div className="space-y-3">
                {/* Email input */}
                <div className="relative">
                  <Mail
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2"
                    style={{ color: "#8A9E96" }}
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                    placeholder="votre@restaurant.fr"
                    className="w-full pl-11 pr-4 py-4 rounded-xl outline-none transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#FAF7F2",
                      fontFamily: "var(--font-family-sans)",
                      fontSize: "15px",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(64,145,108,0.5)";
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(64,145,108,0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255,255,255,0.1)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Submit button */}
                <motion.button
                  onClick={handleSubmit}
                  onHoverStart={() => setHovered(true)}
                  onHoverEnd={() => setHovered(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full relative overflow-hidden flex items-center justify-center gap-2 py-4 rounded-xl font-semibold transition-all duration-200"
                  style={{
                    background:
                      "linear-gradient(135deg, #40916C 0%, #2D6A4F 100%)",
                    color: "#FAF7F2",
                    fontFamily: "var(--font-family-heading)",
                    fontSize: "15px",
                    boxShadow: hovered
                      ? "0 8px 32px rgba(64,145,108,0.4)"
                      : "0 4px 16px rgba(64,145,108,0.2)",
                  }}
                >
                  {/* Shimmer on hover */}
                  {hovered && (
                    <motion.span
                      className="absolute inset-0"
                      initial={{ x: "-100%" }}
                      animate={{ x: "200%" }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
                      }}
                    />
                  )}
                  <span className="relative z-10">
                    Rejoindre la liste d&apos;attente
                  </span>
                  <ArrowRight size={18} className="relative z-10" />
                </motion.button>
              </div>

              {/* Reassurance */}
              <p
                className="text-xs mt-5"
                style={{
                  color: "rgba(138,158,150,0.6)",
                  fontFamily: "var(--font-family-sans)",
                }}
              >
                Pas de spam. Pas de carte bleue. On vous écrit quand votre accès
                est prêt.
              </p>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
