"use client";

import { motion } from "framer-motion";
import { TrendingUp, Eye, Bot, Cpu, Zap, CreditCard, Database } from "lucide-react";
import Link from "next/link";
import SpotlightCard from "@/components/ui/SpotlightCard";


const techStack = [
  { name: "OpenAI", icon: Cpu, color: "#10a37f" },
  { name: "Next.js", icon: Zap, color: "#ffffff" },
  { name: "Stripe", icon: CreditCard, color: "#635bff" },
  { name: "Supabase", icon: Database, color: "#3ecf8e" },
];

export default function BentoGrid() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Item 1: Sales Forecasting - Large (2 columns) */}
          <SpotlightCard className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border/50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-primary/5 to-transparent group"
            >
            <div className="flex flex-col h-full">
              <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6 w-fit group-hover:bg-primary/20 transition-colors duration-300">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-text-main mb-3">
                AI Demand Prediction
              </h3>
              <p className="text-text-muted text-base leading-relaxed">
                Stop guessing about your inventory. Our AI analyzes your past sales and market trends to accurately predict your future needs.
Turn your historical data into future revenue. Anticipate demand before it even happens.
              </p>
              <div className="mt-auto pt-6">
                <Link
                  href="/product"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200 font-semibold text-sm"
                >
                  Learn more →
                </Link>
              </div>
            </div>
            </motion.div>
          </SpotlightCard>

          {/* Item 2: 24/7 Monitoring - Square */}
          <SpotlightCard>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card border border-border/50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 group"
            >
            <div className="flex flex-col h-full">
              <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6 w-fit group-hover:bg-primary/20 transition-colors duration-300">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">
                24/7 Monitoring
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Never miss a sale. The agent monitors stock levels in real-time and alerts you the moment action is needed.
              </p>
            </div>
            </motion.div>
          </SpotlightCard>

          {/* Item 3: Auto-Replenishment - Square */}
          <SpotlightCard>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border border-border/50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex flex-col h-full">
                <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6 w-fit group-hover:bg-primary/20 transition-colors duration-300">
                  <Bot className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text-main mb-3">
                  Smart Restocking
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Restocking on autopilot. The AI drafts optimized purchase orders for you—simply click to approve.
                </p>
              </div>
            </motion.div>
          </SpotlightCard>

          {/* Item 4: Tech Stack - Wide (2 columns) */}
          <SpotlightCard className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card border border-border/50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                {/* Text Content - Left Side (2/3) */}
                <div className="flex-1 md:w-2/3">
                  <h3 className="text-lg font-semibold text-text-main mb-2">
                    Enterprise-Grade Infrastructure
                  </h3>
                  <p className="text-text-muted text-sm">
                    Built for speed and security. Scalable architecture designed to handle thousands of SKUs without compromise.
                  </p>
                </div>

                {/* Logos Grid - Right Side (1/3) */}
                <div className="md:w-1/3">
                  <div className="grid grid-cols-2 gap-4">
                    {techStack.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                        className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-xl"
                      >
                        <tech.icon
                          className="w-8 h-8 opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                          style={{ color: tech.color }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}

