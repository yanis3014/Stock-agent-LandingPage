"use client";

import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  color: string;
  initials: string;
}

const col1: Testimonial[] = [
  {
    quote:
      "On avait entre 12 et 15% de food cost non contrôlé. Le premier mois avec FlowStock, on a retrouvé 6 points. C'est 800€ de récupérés.",
    name: "Karim B.",
    role: "Chef-propriétaire",
    company: "Bistrot 45 couverts, Lyon",
    color: "#40916C",
    initials: "KB",
  },
  {
    quote:
      "Le mode Rush, c'est ce dont j'avais besoin sans le savoir. En plein service, je vois ce qui reste d'un coup d'œil. Plus de panique.",
    name: "Aurélie M.",
    role: "Directrice de salle",
    company: "Brasserie familiale, Bordeaux",
    color: "#3B82F6",
    initials: "AM",
  },
  {
    quote:
      "J'ai photographié ma carte un dimanche soir. Le lundi matin j'avais toutes mes fiches techniques. J'ai failli pleurer.",
    name: "Thomas D.",
    role: "Restaurateur indépendant",
    company: "Restaurant gastronomique, Paris",
    color: "#8B5CF6",
    initials: "TD",
  },
];

const col2: Testimonial[] = [
  {
    quote:
      "Avant FlowStock, je découvrais qu'il me manquait du saumon quand le client le commandait. Maintenant je sais 48h avant.",
    name: "Sarah L.",
    role: "Gérante",
    company: "Restaurant de poisson, Marseille",
    color: "#14B8A6",
    initials: "SL",
  },
  {
    quote:
      "La suggestion de plat du jour basée sur mes DLC, c'est du génie. Ça m'a permis d'arrêter de jeter des produits chaque semaine.",
    name: "Mehdi A.",
    role: "Chef de cuisine",
    company: "Restauration rapide haut de gamme, Toulouse",
    color: "#F97316",
    initials: "MA",
  },
  {
    quote:
      "Mon comptable m'a demandé ce que j'avais changé. Je lui ai montré le tableau de bord FlowStock. Il était stupéfait.",
    name: "Isabelle R.",
    role: "Propriétaire",
    company: "Restaurant bistronomique, Nantes",
    color: "#EC4899",
    initials: "IR",
  },
];

const col3: Testimonial[] = [
  {
    quote:
      "Trois restaurants, une seule vue. Je savais pas que c'était possible sans un logiciel à 1500€/mois et 6 mois d'intégration.",
    name: "Alexandre T.",
    role: "Directeur multi-sites",
    company: "Groupe de 3 restaurants, Nice",
    color: "#6366F1",
    initials: "AT",
  },
  {
    quote:
      "On a réduit notre gaspillage de 40% en 2 mois. Ce n'est pas juste de l'argent économisé — c'est aussi une vraie démarche éco-responsable.",
    name: "Julie V.",
    role: "Responsable qualité",
    company: "Restaurant institutionnel, Rennes",
    color: "#06B6D4",
    initials: "JV",
  },
  {
    quote:
      "Je pensais que c'était un outil pour les grands groupes. En fait c'est fait pour moi. Simple, rapide, et ça marche vraiment.",
    name: "Marc F.",
    role: "Chef-propriétaire",
    company: "Brasserie 70 couverts, Strasbourg",
    color: "#D97706",
    initials: "MF",
  },
];

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div
      className="rounded-2xl p-6 mb-4 transition-all duration-300 group cursor-default"
      style={{
        background: "rgba(26,60,52,0.6)",
        border: "1px solid rgba(255,255,255,0.06)",
        backdropFilter: "blur(12px)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "rgba(64,145,108,0.4)";
        el.style.background = "rgba(64,145,108,0.08)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "rgba(255,255,255,0.06)";
        el.style.background = "rgba(26,60,52,0.6)";
      }}
    >
      {/* Quote marks */}
      <div
        className="text-3xl leading-none mb-3 select-none"
        style={{ color: "rgba(64,145,108,0.3)", fontFamily: "Georgia, serif" }}
      >
        «
      </div>

      {/* Quote text */}
      <p
        className="text-sm leading-relaxed italic mb-5"
        style={{ color: "#D4D4D4", fontFamily: "var(--font-family-sans)" }}
      >
        {t.quote}&nbsp;»
      </p>

      {/* Separator */}
      <div
        className="w-full h-px mb-4"
        style={{ background: "rgba(255,255,255,0.06)" }}
      />

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
          style={{
            background: t.color,
            color: "#fff",
            fontFamily: "var(--font-family-heading)",
          }}
        >
          {t.initials}
        </div>
        <div className="min-w-0">
          <p
            className="text-sm font-semibold leading-tight truncate"
            style={{ color: "#FAF7F2", fontFamily: "var(--font-family-heading)" }}
          >
            {t.name}
          </p>
          <p
            className="text-xs leading-tight truncate"
            style={{ color: "#8A9E96", fontFamily: "var(--font-family-sans)" }}
          >
            {t.role} · {t.company}
          </p>
        </div>
      </div>
    </div>
  );
}

function ScrollColumn({
  testimonials,
  direction,
  duration,
}: {
  testimonials: Testimonial[];
  direction: "up" | "down";
  duration: number;
}) {
  const doubled = [...testimonials, ...testimonials];

  return (
    <div className="overflow-hidden h-full" style={{ maxHeight: "600px" }}>
      <motion.div
        animate={{
          y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} t={t} />
        ))}
      </motion.div>
    </div>
  );
}

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export default function Testimonials() {
  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <h2
            className="font-heading font-extrabold mb-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#FAF7F2",
            }}
          >
            Ils ont arrêté de jeter.
          </h2>
          <p
            className="text-lg max-w-lg mx-auto"
            style={{
              color: "#8A9E96",
              fontFamily: "var(--font-family-sans)",
            }}
          >
            Plus de 200 restaurants font confiance à FlowStock pour piloter
            leurs stocks sans stress.
          </p>
        </motion.div>

        {/* Columns */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 relative"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <ScrollColumn testimonials={col1} direction="up" duration={45} />
          <ScrollColumn testimonials={col2} direction="down" duration={50} />
          <div className="hidden md:block">
            <ScrollColumn testimonials={col3} direction="up" duration={48} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
