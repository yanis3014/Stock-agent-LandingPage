"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ─── CountUp helper ──────────────────────────────────────────────────────────
function CountUp({
  to,
  prefix = "",
  suffix = "",
  index = 0,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  index?: number;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;
    const start = Date.now();
    const duration = 1200;
    const tick = () => {
      const progress = Math.min((Date.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * to));
      if (progress < 1) requestAnimationFrame(tick);
    };
    setTimeout(() => requestAnimationFrame(tick), index * 150);
  }, [isInView, to, index]);

  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

// ─── PricingHero ─────────────────────────────────────────────────────────────
interface ToggleProps {
  isAnnual: boolean;
  setIsAnnual: (v: boolean) => void;
}

export function PricingHero({ isAnnual, setIsAnnual }: ToggleProps) {
  return (
    <section className="pt-40 pb-16 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
        className="inline-block mb-7"
      >
        <span
          className="px-4 py-1.5 rounded-full text-xs"
          style={{
            border: "1px solid rgba(255,255,255,0.12)",
            color: "#8A9E96",
            fontFamily: "var(--font-family-heading)",
            letterSpacing: "0.1em",
          }}
        >
          Tarifs transparents · Sans surprise
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.1 }}
        className="font-heading font-extrabold mb-5"
        style={{
          fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
          letterSpacing: "-0.03em",
          color: "#FAF7F2",
        }}
      >
        Choisissez votre formule.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.2 }}
        className="text-lg mx-auto mb-10"
        style={{
          color: "#8A9E96",
          fontFamily: "var(--font-family-sans)",
          maxWidth: "560px",
          lineHeight: 1.7,
        }}
      >
        Un restaurant qui perd 800€/mois en gaspillage récupère son abonnement
        en moins d&apos;une semaine. Le calcul est simple.
      </motion.p>

      {/* Toggle */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.3 }}
        className="inline-flex items-center gap-1 p-1.5 rounded-full"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <button
          onClick={() => setIsAnnual(false)}
          className="px-5 py-2 rounded-full text-sm transition-all duration-200"
          style={{
            background: !isAnnual ? "#40916C" : "transparent",
            color: !isAnnual ? "#FAF7F2" : "#8A9E96",
            fontFamily: "var(--font-family-heading)",
            fontWeight: !isAnnual ? 600 : 400,
          }}
        >
          Mensuel
        </button>
        <button
          onClick={() => setIsAnnual(true)}
          className="flex items-center gap-2 px-5 py-2 rounded-full text-sm transition-all duration-200"
          style={{
            background: isAnnual ? "#40916C" : "transparent",
            color: isAnnual ? "#FAF7F2" : "#8A9E96",
            fontFamily: "var(--font-family-heading)",
            fontWeight: isAnnual ? 600 : 400,
          }}
        >
          Annuel
          <span
            className="text-xs px-2 py-0.5 rounded-full font-bold"
            style={{
              background: "rgba(212,168,67,0.15)",
              color: "#D4A843",
              fontFamily: "var(--font-family-heading)",
            }}
          >
            -20%
          </span>
        </button>
      </motion.div>
    </section>
  );
}

// ─── Plan data ────────────────────────────────────────────────────────────────
const plans = [
  {
    id: "standard",
    name: "Standard",
    subtitle: "Pour les restaurants indépendants",
    monthlyPrice: 149,
    annualPrice: 119,
    cta: "Démarrer l'essai gratuit",
    ctaVariant: "ghost" as const,
    badge: null,
    features: [
      { text: "1 établissement", highlight: false },
      { text: "Connexion caisse (Lightspeed, Zelty, L'Addition, Square)", highlight: false },
      { text: "Photo carte → fiches techniques IA", highlight: false },
      { text: "Alertes ruptures en temps réel", highlight: false },
      { text: "Food cost automatique", highlight: false },
      { text: "Support chat (réponse sous 24h)", highlight: false },
    ],
    note: "Accès complet · Sans engagement · Annulable à tout moment",
  },
  {
    id: "premium",
    name: "Premium",
    subtitle: "Pour les restaurants qui veulent piloter sérieusement",
    monthlyPrice: 249,
    annualPrice: 199,
    cta: "Démarrer l'essai gratuit",
    ctaVariant: "filled" as const,
    badge: "Recommandé",
    features: [
      { text: "Tout le plan Standard", highlight: false },
      { text: "Multi-établissement (jusqu'à 3 restaurants)", highlight: true },
      { text: "Export bon de commande fournisseur PDF", highlight: false },
      { text: "Tableau de bord analytique avancé", highlight: false },
      { text: "Accès API", highlight: false },
      { text: "Support prioritaire (réponse sous 2h)", highlight: false },
    ],
    note: null,
  },
  {
    id: "enterprise",
    name: "Entreprise",
    subtitle: "Pour les groupes et chaînes de restaurants",
    monthlyPrice: null,
    annualPrice: null,
    cta: "Nous contacter",
    ctaVariant: "dark" as const,
    badge: null,
    features: [
      { text: "Établissements illimités", highlight: false },
      { text: "Tout le plan Premium", highlight: false },
      { text: "Intégration ERP / logiciel de gestion sur mesure", highlight: false },
      { text: "Modèle IA entraîné sur vos données", highlight: false },
      { text: "Account manager dédié", highlight: false },
      { text: "SLA garanti", highlight: false },
    ],
    note: null,
  },
];

// ─── Pricing cards ────────────────────────────────────────────────────────────
interface PricingProps {
  isAnnual: boolean;
}

export default function Pricing({ isAnnual }: PricingProps) {
  return (
    <section className="pb-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {plans.map((plan, i) => {
          const isPremium = plan.id === "premium";
          const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

          const ctaStyle =
            plan.ctaVariant === "filled"
              ? {
                  background: "linear-gradient(135deg, #40916C 0%, #2D6A4F 100%)",
                  color: "#FAF7F2",
                  boxShadow: "0 8px 24px rgba(64,145,108,0.3)",
                  border: "none",
                }
              : plan.ctaVariant === "ghost"
              ? {
                  background: "transparent",
                  color: "#40916C",
                  border: "1px solid #40916C",
                }
              : {
                  background: "transparent",
                  color: "#FAF7F2",
                  border: "1px solid rgba(255,255,255,0.15)",
                };

          return (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className={`relative rounded-2xl p-8 ${isPremium ? "md:scale-105 md:-translate-y-2" : ""}`}
              style={{
                background: isPremium
                  ? "rgba(26,60,52,0.9)"
                  : "rgba(255,255,255,0.03)",
                border: isPremium
                  ? "1px solid rgba(64,145,108,0.35)"
                  : "1px solid rgba(255,255,255,0.08)",
                boxShadow: isPremium
                  ? "0 0 0 1px rgba(64,145,108,0.1), 0 24px 48px rgba(0,0,0,0.3)"
                  : "0 8px 32px rgba(0,0,0,0.15)",
                backdropFilter: "blur(16px)",
              }}
            >
              {/* Badge Recommandé */}
              {plan.badge && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap"
                  style={{
                    top: "-14px",
                    background: "#D4A843",
                    color: "#1C2B2A",
                    fontFamily: "var(--font-family-heading)",
                  }}
                >
                  {plan.badge}
                </div>
              )}

              {/* Plan name */}
              <p
                className="font-heading font-bold text-xl mb-1"
                style={{ color: "#FAF7F2" }}
              >
                {plan.name}
              </p>
              <p
                className="text-sm mb-7"
                style={{
                  color: "#8A9E96",
                  fontFamily: "var(--font-family-sans)",
                  lineHeight: 1.5,
                }}
              >
                {plan.subtitle}
              </p>

              {/* Price */}
              <div className="mb-8 min-h-[52px] flex items-end">
                {price !== null ? (
                  <div className="flex items-end gap-1.5">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={isAnnual ? `${plan.id}-a` : `${plan.id}-m`}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="font-heading font-extrabold"
                        style={{
                          fontSize: "3rem",
                          color: "#FAF7F2",
                          lineHeight: 1,
                        }}
                      >
                        {price}€
                      </motion.span>
                    </AnimatePresence>
                    <span
                      className="text-sm pb-1"
                      style={{
                        color: "#8A9E96",
                        fontFamily: "var(--font-family-sans)",
                      }}
                    >
                      /mois
                    </span>
                  </div>
                ) : (
                  <span
                    className="font-heading font-extrabold"
                    style={{
                      fontSize: "2.25rem",
                      color: "#FAF7F2",
                      lineHeight: 1,
                    }}
                  >
                    Sur devis
                  </span>
                )}
              </div>

              {/* CTA */}
              <button
                className="w-full py-3.5 rounded-xl text-sm font-semibold mb-7 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
                style={{
                  fontFamily: "var(--font-family-heading)",
                  ...ctaStyle,
                }}
              >
                {plan.cta}
              </button>

              {/* Divider */}
              <div
                className="w-full h-px mb-6"
                style={{ background: "rgba(255,255,255,0.06)" }}
              />

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={15}
                      style={{
                        color: "#40916C",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <span
                      className="text-sm leading-relaxed"
                      style={{
                        color: feat.highlight ? "#FAF7F2" : "#8A9E96",
                        fontWeight: feat.highlight ? 600 : 400,
                        fontFamily: "var(--font-family-sans)",
                      }}
                    >
                      {feat.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Note */}
              {plan.note && (
                <p
                  className="text-xs italic mt-6"
                  style={{
                    color: "#8A9E96",
                    fontFamily: "var(--font-family-sans)",
                  }}
                >
                  {plan.note}
                </p>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

// ─── PricingROI ───────────────────────────────────────────────────────────────
const roiSteps = [
  {
    isCountUp: true,
    prefix: "~",
    to: 8,
    suffix: "%",
    static: "",
    label: "de food cost non contrôlé en moyenne",
    sublabel: "= entre 600€ et 1 200€/mois selon votre volume",
    accentColor: "#C1440E",
    bg: "rgba(193,68,14,0.08)",
    border: "rgba(193,68,14,0.2)",
  },
  {
    isCountUp: true,
    prefix: "-",
    to: 18,
    suffix: "%",
    static: "",
    label: "de gaspillage en moyenne dès le 1er mois",
    sublabel: "Basé sur nos données bêta",
    accentColor: "#40916C",
    bg: "rgba(64,145,108,0.08)",
    border: "rgba(64,145,108,0.2)",
  },
  {
    isCountUp: false,
    prefix: "",
    to: 0,
    suffix: "",
    static: "< 1 sem.",
    label: "pour rentabiliser votre abonnement",
    sublabel: "149€/mois · Résultat visible en 30 jours",
    accentColor: "#D4A843",
    bg: "rgba(212,168,67,0.08)",
    border: "rgba(212,168,67,0.2)",
  },
];

function ROIStep({
  step,
  index,
}: {
  step: (typeof roiSteps)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, ease, delay: index * 0.15 }}
      className="p-8 rounded-2xl text-center"
      style={{ background: step.bg, border: `1px solid ${step.border}` }}
    >
      <div
        className="font-heading font-extrabold mb-3"
        style={{ fontSize: "3rem", color: step.accentColor, lineHeight: 1 }}
      >
        {step.isCountUp ? (
          <CountUp
            to={step.to}
            prefix={step.prefix}
            suffix={step.suffix}
            index={index}
          />
        ) : (
          step.static
        )}
      </div>
      <p
        className="text-sm font-medium mb-2"
        style={{ color: "#FAF7F2", fontFamily: "var(--font-family-sans)" }}
      >
        {step.label}
      </p>
      <p
        className="text-xs"
        style={{ color: "#8A9E96", fontFamily: "var(--font-family-sans)" }}
      >
        {step.sublabel}
      </p>
    </motion.div>
  );
}

export function PricingROI() {
  return (
    <section
      className="py-20 px-6"
      style={{
        background: "rgba(26,60,52,0.4)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="font-heading font-bold text-center mb-14"
          style={{
            fontSize: "clamp(1.8rem, 3vw, 2.2rem)",
            color: "#FAF7F2",
          }}
        >
          Le calcul est simple.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roiSteps.map((step, i) => (
            <ROIStep key={i} step={step} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-sm italic mt-8 pt-8"
          style={{
            color: "#8A9E96",
            fontFamily: "var(--font-family-sans)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          Si FlowStock ne vous fait pas économiser au moins 150€ le premier
          mois, on vous rembourse. Sans question.
        </motion.p>
      </div>
    </section>
  );
}

// ─── PricingCTA ───────────────────────────────────────────────────────────────
export function PricingCTA() {
  return (
    <section className="py-24 px-6 text-center">
      <div className="max-w-xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="font-heading font-bold mb-4"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.2rem)", color: "#FAF7F2" }}
        >
          Prêt à récupérer votre food cost&nbsp;?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="text-sm mb-8"
          style={{
            color: "#8A9E96",
            fontFamily: "var(--font-family-sans)",
            letterSpacing: "0.05em",
          }}
        >
          14 jours gratuits · Sans carte bancaire · Résultats en 30 jours
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
        >
          <motion.a
            href="#waitlist"
            className="btn-primary inline-flex"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Démarrer mon essai gratuit
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
