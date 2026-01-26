"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Zap, Sparkles } from "lucide-react";
import Link from "next/link";

const pricingTiers = [
  {
    name: "The Vigilant Assistant",
    target: "For small e-merchants & artisans",
    monthlyPrice: 79,
    annualPrice: 65,
    annualTotal: 790,
    features: [
      "Daily Morning Stock Summary",
      "Unlimited AI Chat",
      "Up to 500 SKUs",
      "1 User",
      "Real-time Monitoring",
    ],
    cta: "Start Monitoring",
    ctaStyle: "secondary",
    popular: false,
  },
  {
    name: "The Proactive Manager",
    target: "For growing SMBs & Wholesalers",
    tagline: "Prevents stockouts before they happen.",
    monthlyPrice: 199,
    annualPrice: 165,
    annualTotal: 1990,
    features: [
      "Everything in Tier 1",
      "Stockout Predictions",
      "Auto-Replenishment Drafts",
      "Multi-warehouse support",
      "Dead Stock Analysis",
      "Up to 3 Users",
    ],
    cta: "Activate Autopilot",
    ctaStyle: "primary",
    popular: true,
  },
  {
    name: "FlowStock Enterprise",
    target: "High volume & complex logistics",
    monthlyPrice: null,
    annualPrice: null,
    customPrice: "Custom",
    features: [
      "Custom ERP API Integrations",
      "Unlimited SKUs",
      "Custom AI Model Training",
      "Dedicated Account Manager",
    ],
    cta: "Contact Sales",
    ctaStyle: "outline",
    popular: false,
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-text-main mb-4"
          >
            Choose Your AI Assistant
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-text-muted max-w-2xl mx-auto"
          >
            From vigilant monitoring to full autopilot—scale as you grow
          </motion.p>

          {/* Monthly/Yearly Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mt-8"
          >
            <span className={`text-sm font-medium ${!isAnnual ? 'text-text-main' : 'text-text-muted'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                isAnnual ? 'bg-primary' : 'bg-border'
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                  isAnnual ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-text-main' : 'text-text-muted'}`}>
              Yearly
            </span>
            {isAnnual && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full"
              >
                2 Months Free
              </motion.span>
            )}
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative ${tier.popular ? 'md:scale-105' : ''}`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <motion.div
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
                >
                  <div className="bg-primary text-background px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                </motion.div>
              )}

              {/* Card */}
              <div
                className={`relative h-full bg-card/40 backdrop-blur-md border rounded-3xl p-8 transition-all duration-300 ${
                  tier.popular
                    ? 'border-primary/50 shadow-[0_0_40px_-10px_rgba(0,255,148,0.3)]'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {/* Tier Name */}
                <h3 className="text-2xl font-bold text-text-main mb-2">
                  {tier.name}
                </h3>

                {/* Target */}
                <p className="text-sm text-text-muted mb-4">{tier.target}</p>

                {/* Tagline (Tier 2 only) */}
                {tier.tagline && (
                  <p className="text-sm text-primary font-semibold mb-4 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    {tier.tagline}
                  </p>
                )}

                {/* Price */}
                <div className="mb-6">
                  {tier.customPrice ? (
                    <div className="text-4xl font-bold text-text-main">
                      {tier.customPrice}
                    </div>
                  ) : (
                    <>
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={isAnnual ? 'annual' : 'monthly'}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="text-4xl font-bold text-text-main"
                        >
                          €{isAnnual ? tier.annualPrice : tier.monthlyPrice}
                          <span className="text-lg text-text-muted font-normal">/mo</span>
                        </motion.div>
                      </AnimatePresence>
                      {isAnnual && tier.annualTotal && (
                        <p className="text-xs text-text-muted mt-1">
                          Billed €{tier.annualTotal} yearly
                        </p>
                      )}
                    </>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link href="/signup" className="block">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      tier.ctaStyle === 'primary'
                        ? 'btn-primary'
                        : tier.ctaStyle === 'secondary'
                        ? 'bg-card border border-border text-text-main hover:border-primary/50'
                        : 'border-2 border-primary text-primary hover:bg-primary/10'
                    }`}
                  >
                    {tier.cta}
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
