"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Zap, Network, ShieldCheck, Box, RefreshCw, Lock, Activity } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

const features = [
  {
    title: "Predictive Engine",
    description: "Our Transformer-based models analyze 24 months of historical sales, seasonality, and market trends to forecast demand with 94% accuracy.",
    icon: BrainCircuit,
    delay: 0.1
  },
  {
    title: "Auto-Replenishment",
    description: "The agent monitors safety stock levels in real-time and autonomously drafts Purchase Orders for your approval before you run out.",
    icon: Zap,
    delay: 0.2
  },
  {
    title: "Multi-Channel Sync",
    description: "Unified inventory layer. If you sell an item on Amazon, your Shopify stock updates instantly. No more overselling.",
    icon: Network,
    delay: 0.3
  },
  {
    title: "Anomaly Detection",
    description: "AI watches for irregularities—sudden drops in stock, supplier delays, or phantom inventory—and alerts your ops team via Slack.",
    icon: ShieldCheck,
    delay: 0.4
  }
];

const integrations = [
  "Shopify", "WooCommerce", "Magento", "Amazon FBA", "NetSuite", "SAP", "Slack", "Gmail"
];

export default function ProductPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-transparent pt-32 pb-20 px-6 overflow-hidden">
        
        {/* 1. HERO SECTION */}
        <section className="max-w-5xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Autonomy</span>.
            </h1>
            <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
              FlowStock isn't just a dashboard. It's an intelligent agent that actively manages your supply chain operations, 24/7.
            </p>
          </motion.div>
        </section>

        {/* 2. CORE CAPABILITIES GRID */}
        <section className="max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: f.delay, duration: 0.5 }}
                className="glass-card p-10 group hover:border-primary/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <f.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{f.title}</h3>
                <p className="text-text-muted leading-relaxed text-lg">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. TECH SPECS & SECURITY */}
        <section className="max-w-7xl mx-auto mb-32">
          <div className="glass-card p-12 border-primary/20 bg-surface/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="p-4">
                <Activity className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">&lt; 200ms</div>
                <div className="text-sm text-text-muted uppercase tracking-wider">Sync Latency</div>
              </div>
              <div className="p-4">
                <RefreshCw className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">99.99%</div>
                <div className="text-sm text-text-muted uppercase tracking-wider">Uptime SLA</div>
              </div>
              <div className="p-4">
                <Lock className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">SOC-2</div>
                <div className="text-sm text-text-muted uppercase tracking-wider">Type II Compliant</div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. INTEGRATIONS */}
        <section className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-12">Seamlessly Integrated</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {integrations.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FINAL CTA MINI */}
        <section className="mt-32 text-center">
           <Link href="/signup">
              <button className="btn-primary text-lg px-10 py-4">
                See the Agent in Action
              </button>
           </Link>
        </section>
      </main>
    </>
  );
}
