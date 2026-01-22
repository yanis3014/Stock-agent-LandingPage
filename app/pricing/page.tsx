"use client";

import { Check, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import { useState } from "react";

const pricingTiers = [
  {
    name: "Pilot",
    subtitle: "The Entry",
    monthlyPrice: 0,
    annualPrice: 0,
    period: "/ mo",
    description: "To audit your stock and test the agent.",
    features: [
      "1 Data source",
      "Past errors audit",
      "Manual alerts",
    ],
    cta: "Start (Free)",
    highlighted: false,
    variant: "outline",
  },
  {
    name: "Autopilot",
    subtitle: "The Core",
    monthlyPrice: 49,
    annualPrice: 39,
    period: "/ mo",
    description: "For growing SMBs who want peace of mind.",
    features: [
      "Everything in Pilot",
      "Unlimited AI predictions",
      "Auto supplier orders",
      "Priority Support",
    ],
    cta: "Activate Autopilot",
    highlighted: true,
    badge: "Most Popular",
    variant: "primary",
  },
  {
    name: "Fleet",
    subtitle: "Enterprise",
    monthlyPrice: null,
    annualPrice: null,
    customPrice: "Custom",
    period: "",
    description: "For high volume & multi-warehouse.",
    features: [
      "Custom API integrations",
      "Dedicated Agent",
      "SLA Guaranteed",
      "Assisted setup",
    ],
    cta: "Talk to Founder",
    highlighted: false,
    variant: "outline",
  },
];

const comparisonFeatures = [
  {
    category: "Features",
    features: [
      {
        name: "Scan frequency",
        pilote: "Weekly",
        autopilote: "Daily",
        fleet: "Real-time",
      },
      {
        name: "Data sources",
        pilote: "1 source",
        autopilote: "3 sources",
        fleet: "Unlimited",
      },
      {
        name: "AI Predictions",
        pilote: "Basic",
        autopilote: "Advanced",
        fleet: "Custom",
      },
      {
        name: "Support",
        pilote: "Email",
        autopilote: "Priority Chat",
        fleet: "Dedicated Agent",
      },
      {
        name: "Accounting export",
        pilote: false,
        autopilote: true,
        fleet: "API",
      },
      {
        name: "Auto alerts",
        pilote: false,
        autopilote: true,
        fleet: true,
      },
      {
        name: "Auto orders",
        pilote: false,
        autopilote: true,
        fleet: true,
      },
    ],
  },
];

const faqs = [
  {
    question: "Can the AI make mistakes?",
    answer:
      "Yes, like any AI system, our agent can make mistakes. That's why we always recommend human validation for critical decisions. The agent alerts you and suggests actions, but you keep final control. Over time, the AI learns from your validations and becomes increasingly accurate.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. All your data is end-to-end encrypted (AES-256) and stored on GDPR-compliant European servers. We never share your data with third parties. You can export or delete your data at any time.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, with no strings attached. All our plans are commitment-free. You can cancel your subscription anytime from your dashboard. For annual subscriptions, you keep access until the end of the paid period.",
  },
  {
    question: "What integrations are available?",
    answer:
      "We currently support Shopify, WooCommerce, Excel/CSV, and custom REST APIs. Other integrations (Prestashop, Magento, SAP) are in development. The Fleet plan allows custom integrations tailored to your needs.",
  },
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-text-main mb-6"
            >
              Pays for itself with the first avoided stockout.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-text-muted"
            >
              Transparent pricing. No commitment. Scalable.
            </motion.p>
          </div>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <span
              className={`text-lg font-medium transition-colors duration-200 ${
                !isAnnual ? "text-text-main" : "text-text-muted"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 bg-surface border border-primary/30 rounded-full transition-colors duration-300 hover:border-primary/50"
            >
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute top-1 w-6 h-6 bg-primary rounded-full shadow-[0_0_10px_rgba(0,255,148,0.5)]"
                style={{
                  left: isAnnual ? "calc(100% - 28px)" : "4px",
                }}
              />
            </button>
            <div className="flex items-center gap-2">
              <span
                className={`text-lg font-medium transition-colors duration-200 ${
                  isAnnual ? "text-text-main" : "text-text-muted"
                }`}
              >
                Yearly
              </span>
              {isAnnual && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="px-2 py-1 bg-primary/20 border border-primary/40 rounded-full text-xs font-semibold text-primary"
                >
                  Save 20%
                </motion.span>
              )}
            </div>
          </motion.div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {pricingTiers.map((tier, index) => {
              const displayPrice = tier.customPrice
                ? tier.customPrice
                : isAnnual
                ? tier.annualPrice
                : tier.monthlyPrice;

              return (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                  className={`
                    relative rounded-2xl p-8 backdrop-blur-sm
                    ${
                      tier.highlighted
                        ? "bg-surface/80 border-2 border-primary shadow-[0_0_40px_rgba(0,255,148,0.2)] scale-105"
                        : "bg-surface/40 border border-primary/20"
                    }
                    hover:border-primary/40 transition-all duration-300
                  `}
                >
                  {/* Badge */}
                  {tier.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-background px-4 py-1 rounded-full text-sm font-semibold">
                        {tier.badge}
                      </span>
                    </div>
                  )}

                  {/* Header */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-text-main mb-1">
                      {tier.name}
                    </h3>
                    <p className="text-sm text-text-muted mb-4">
                      {tier.subtitle}
                    </p>
                    <div className="flex items-baseline justify-center gap-1">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={isAnnual ? "annual" : "monthly"}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="text-4xl font-bold text-primary"
                        >
                          {typeof displayPrice === "number"
                            ? `$${displayPrice}`
                            : displayPrice}
                        </motion.span>
                      </AnimatePresence>
                      {tier.period && (
                        <span className="text-text-muted">{tier.period}</span>
                      )}
                    </div>
                    {isAnnual && tier.annualPrice && tier.monthlyPrice > 0 && (
                      <p className="text-xs text-text-muted mt-2">
                        Billed ${tier.annualPrice * 12}/year
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-text-muted text-center mb-6 min-h-[3rem]">
                    {tier.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-text-main">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className={`
                      w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300
                      ${
                        tier.variant === "primary"
                          ? "bg-primary text-background hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(0,255,148,0.4)]"
                          : "border-2 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50"
                      }
                    `}
                  >
                    {tier.cta}
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-text-main text-center mb-12">
              Detailed comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-primary/20">
                    <th className="text-left py-4 px-6 text-text-main font-semibold">
                      Feature
                    </th>
                    <th className="text-center py-4 px-6 text-text-main font-semibold">
                      Pilot
                    </th>
                    <th className="text-center py-4 px-6 text-text-main font-semibold">
                      Autopilot
                    </th>
                    <th className="text-center py-4 px-6 text-text-main font-semibold">
                      Fleet
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures[0].features.map((feature, index) => (
                    <tr
                      key={feature.name}
                      className={`border-b border-primary/10 ${
                        index % 2 === 0 ? "bg-surface/20" : "bg-transparent"
                      } hover:bg-surface/40 transition-colors duration-200`}
                    >
                      <td className="py-4 px-6 text-text-main">
                        {feature.name}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof feature.pilote === "boolean" ? (
                          feature.pilote ? (
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-text-muted/40 mx-auto" />
                          )
                        ) : (
                          <span className="text-text-muted">
                            {feature.pilote}
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof feature.autopilote === "boolean" ? (
                          feature.autopilote ? (
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-text-muted/40 mx-auto" />
                          )
                        ) : (
                          <span className="text-text-muted">
                            {feature.autopilote}
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof feature.fleet === "boolean" ? (
                          feature.fleet ? (
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-text-muted/40 mx-auto" />
                          )
                        ) : (
                          <span className="text-text-muted">
                            {feature.fleet}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-text-main text-center mb-12">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-primary/20 rounded-lg bg-surface/40 backdrop-blur-sm overflow-hidden hover:border-primary/40 transition-colors duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="text-lg font-semibold text-text-main pr-4">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFaqIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-text-muted leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
