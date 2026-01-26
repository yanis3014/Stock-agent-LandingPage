"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface Step {
  id: number;
  title: string;
  description: string;
  features: string[];
}

const steps: Step[] = [
  {
    id: 1,
    title: "Connect & Analyze",
    description: "Import your historical data. Our AI audits your past stock movements, detects seasonality, and sets up your dashboard instantly.",
    features: [
      "CSV/Excel or API Import",
      "Full Audit in < 2 min",
      "Instant Predictions"
    ]
  },
  {
    id: 2,
    title: "Automate Workflows",
    description: "The agent monitors stock levels 24/7. It automatically drafts supplier orders to prevent stockouts before they happen.",
    features: [
      "Autonomous Restocking",
      "1-Click Human Validation",
      "Predictive Alerts"
    ]
  },
  {
    id: 3,
    title: "Chat & Vision",
    description: "Talk to your inventory to get instant answers or scan invoices/delivery notes to update stock levels in real-time.",
    features: [
      "Natural Language Chat",
      "Document Scanning (OCR)",
      "Photo Inventory Correction"
    ]
  }
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={containerRef}>
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-6 tracking-tight"
          >
            How FlowStock Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
             Three simple steps to transform your inventory management into a competitive advantage.
          </motion.p>
        </div>

        <div className="relative">
          
          {/* Timeline Row (Desktop Only) */}
          <div className="hidden md:block relative mb-12">
            
            {/* Connector Line */}
            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 px-16">
               <motion.div 
                 initial={{ scaleX: 0, opacity: 0 }}
                 animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
                 transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                 className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary to-transparent origin-left"
               />
            </div>

            {/* Badges Grid */}
            <div className="grid grid-cols-3 gap-8">
              {steps.map((step) => (
                <div key={step.id} className="flex justify-center relative z-10">
                  <motion.div
                     initial={{ scale: 0, opacity: 0 }}
                     animate={isInView ? { scale: 1, opacity: 1 } : {}}
                     transition={{ duration: 0.4, delay: 0.2 + (step.id * 0.2) }}
                     className="w-12 h-12 rounded-full bg-[#020817] border border-primary/30 flex items-center justify-center text-primary font-bold text-lg shadow-[0_0_15px_rgba(0,255,148,0.3)]"
                  >
                    {step.id}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 items-stretch"
          >
            {steps.map((step) => (
              <motion.div 
                key={step.id}
                variants={itemVariants}
                className="relative h-full"
              >
                <div className="h-full w-full bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/[0.07] transition-colors duration-300 group hover:border-white/20 flex flex-col">
                  
                  {/* Mobile Step Badge */}
                  <div className="md:hidden mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">
                      Step {step.id}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold mb-4 text-white tracking-tight group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-8 leading-relaxed flex-grow">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-3 mt-auto">
                    {step.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-primary/70 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
