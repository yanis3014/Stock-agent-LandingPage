"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function FeaturesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      title: "AI Predictive Engine",
      description: "Our algorithms analyze 12+ variables to forecast demand.",
      visual: "chart",
    },
    {
      title: "Real-time Watchtower",
      description: "Monitor stock levels across all channels instantly.",
      visual: "radar",
    },
    {
      title: "Smart Procurement",
      description: "Drafts purchase orders automatically based on lead times.",
      visual: "document",
    },
  ];

  const techStack = [
    { name: "OpenAI", tooltip: "Powering our LLM core", logo: "🤖" },
    { name: "PostgreSQL", tooltip: "Enterprise data storage", logo: "🐘" },
    { name: "Redis", tooltip: "Real-time caching", logo: "⚡" },
    { name: "Docker", tooltip: "Containerized deployment", logo: "🐳" },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse at bottom, rgba(17, 34, 64, 0.2) 0%, #0A192F 50%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            An artificial brain for your{" "}
            <span className="text-primary">logistics.</span>
          </h2>
          <p className="text-xl text-text-muted">
            3 pillars to secure your growth.
          </p>
        </div>

        {/* Rich Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] transition-all group cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ y: -5 }}
            >
              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-text-muted leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Micro-Visualization */}
              <div className="h-24 flex items-end justify-center">
                {feature.visual === "chart" && (
                  <svg className="w-full h-full" viewBox="0 0 200 80">
                    <motion.path
                      d="M 10 70 Q 50 20, 100 40 T 190 10"
                      stroke="#00FF94"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: hoveredCard === index ? 1 : 0.7 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    <motion.circle
                      cx="190"
                      cy="10"
                      r="4"
                      fill="#00FF94"
                      initial={{ scale: 0 }}
                      animate={{ scale: hoveredCard === index ? 1.5 : 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </svg>
                )}

                {feature.visual === "radar" && (
                  <div className="relative w-20 h-20">
                    <div className="absolute inset-0 border-2 border-primary/30 rounded-full" />
                    <div className="absolute inset-2 border border-primary/20 rounded-full" />
                    <motion.div
                      className="absolute inset-0"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-transparent origin-left" />
                    </motion.div>
                    <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full animate-pulse" />
                  </div>
                )}

                {feature.visual === "document" && (
                  <motion.div className="relative w-16 h-20">
                    <motion.div
                      className="absolute inset-0 bg-white/10 rounded-lg border border-white/20"
                      animate={{
                        opacity: hoveredCard === index ? 0 : 1,
                        scale: hoveredCard === index ? 0.8 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute top-2 left-2 right-2 h-1 bg-white/30 rounded" />
                      <div className="absolute top-5 left-2 right-4 h-1 bg-white/20 rounded" />
                      <div className="absolute top-8 left-2 right-6 h-1 bg-white/20 rounded" />
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: hoveredCard === index ? 1 : 0,
                        scale: hoveredCard === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
                        <motion.path
                          d="M20 6L9 17L4 12"
                          stroke="#00FF94"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: hoveredCard === index ? 1 : 0 }}
                          transition={{ duration: 0.5 }}
                        />
                      </svg>
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack - Infrastructure DNA */}
        <div className="mb-20">
          <p className="text-xs uppercase tracking-widest text-text-muted text-center mb-6">
            Built on Enterprise-Grade Infrastructure
          </p>
          <div className="flex items-center justify-center gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="group relative"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-4xl opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                  {tech.logo}
                </div>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black/90 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {tech.tooltip}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Founder Quote - Signature Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-gradient-to-r from-white/[0.02] to-transparent border-l-4 border-primary rounded-2xl p-8">
            <div className="flex items-start gap-6">
              {/* Avatar with rotating gradient */}
              <div className="relative flex-shrink-0">
                <div
                  className="absolute inset-0 rounded-full animate-spin"
                  style={{
                    background: "conic-gradient(from 0deg, #00FF94, #00BFFF, #00FF94)",
                    animationDuration: "3s",
                  }}
                />
                <div className="relative w-16 h-16 rounded-full bg-gray-700 m-1 flex items-center justify-center text-2xl">
                  👤
                </div>
              </div>

              {/* Quote */}
              <div className="flex-1">
                <p className="text-lg italic text-white/90 mb-4 leading-relaxed">
                  "We built flowStock because we were tired of seeing businesses struggle with inventory chaos. 
                  Our AI doesn't just predict—it thinks ahead."
                </p>
                <div>
                  <p className="text-white font-semibold">Jean Dupont</p>
                  <p className="text-text-muted text-sm">Founder & CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
