"use client";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

// Data updated with Step 05 (Visual Reception)
const steps = [
  {
    step: "01",
    title: "Connect your ecosystem",
    description: "No code, no complex ERP migration. We use official, secure APIs to connect to your existing stack (Shopify, Amazon, NetSuite).",
    detail: "We start with Read-Only access to audit your data. Connection takes less than 2 minutes and is encrypted via AES-256 standards.",
  },
  {
    step: "02",
    title: "The Agent learns your patterns",
    description: "FlowStock doesn't use generic models. It trains specifically on your historical data to understand your unique business rhythm.",
    detail: "It analyzes 24 months of sales history, factoring in seasonality, supplier lead times (real vs. promised), and marketing spikes.",
  },
  {
    step: "03",
    title: "You validate, it executes",
    description: "The AI monitors stock levels 24/7. When reordering is needed, it prepares everything—you just have to sign off.",
    detail: "The Agent creates a Draft Purchase Order in your system and sends you a Slack/Email alert. You review the quantity, click 'Approve', and the order is sent. You maintain 100% financial control.",
  },
  {
    step: "04",
    title: "Continuous Optimization loop",
    description: "The system improves with every interaction. It tracks its own accuracy and adjusts based on your feedback.",
    detail: "Did you change a suggested quantity? The AI analyzes 'why' (e.g., you knew about a promo coming up) and incorporates that logic for next time.",
  },
  {
    step: "05",
    title: "Visual Reception & Conformity",
    description: "Forget manual data entry. Just snap a photo of the delivery slip or invoice when goods arrive.",
    detail: "The Vision AI extracts SKUs, updates stock levels instantly, and automatically cross-checks received items against the original Purchase Order to flag errors.",
  }
];

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-transparent pt-32 pb-20 px-6 overflow-hidden">
        {/* HERO */}
        <section className="max-w-4xl mx-auto text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            From Chaos to <span className="text-primary">Autonomy</span>.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-muted leading-relaxed"
          >
            We built FlowStock to be powerful enough for enterprise, but simple enough to set up in a coffee break. Here is exactly how it works.
          </motion.p>
        </section>

        {/* TIMELINE STEPS - AUTOMATIC ALTERNATING LAYOUT */}
        <section className="max-w-6xl mx-auto relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:-translate-x-1/2" />
          <div className="space-y-16 md:space-y-24">
            {steps.map((s, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  // On desktop: If odd, reverse flex direction to put content on right
                  className={`relative flex flex-col md:flex-row ${!isEven ? 'md:flex-row-reverse' : ''} items-start md:items-center gap-8 group`}
                >
                  {/* Central Number Bubble */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 rounded-full bg-[#0a192f] border-2 border-primary flex items-center justify-center z-10 shadow-[0_0_20px_rgba(0,255,148,0.2)] group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <span className="text-primary font-mono font-bold text-lg">{s.step}</span>
                  </div>
                  
                  {/* Content Card Container */}
                  <div className={`flex-1 pl-20 md:pl-0 w-full ${isEven ? 'md:pr-24 md:text-right' : 'md:pl-24 md:text-left'}`}>
                    <div className="glass-card p-8 hover:border-primary/30 transition-colors relative">
                       {/* Decorative connecting line from bubble to card on desktop */}
                       <div className={`hidden md:block absolute top-1/2 h-[2px] w-10 bg-primary/30 ${isEven ? '-right-10' : '-left-10'}`} />
                      <h3 className="text-2xl font-bold text-white mb-4">{s.title}</h3>
                      <p className="text-text-main mb-4 font-medium leading-relaxed">{s.description}</p>
                      <p className="text-sm text-text-muted leading-relaxed border-t border-white/5 pt-4">
                        {s.detail}
                      </p>
                    </div>
                  </div>
                  
                  {/* Empty Spacer for balance */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* SECURITY / TRUST SECTION */}
        <section className="max-w-4xl mx-auto mt-32">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 border-primary/20 bg-primary/5"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="p-4 bg-primary/10 rounded-full">
                <ShieldCheck className="w-10 h-10 text-primary" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Enterprise-Grade Security</h3>
                <p className="text-text-muted mb-4">
                  Your data never trains public models. We operate on isolated instances with strict SOC-2 Type II compliance standards.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-primary font-medium">
                  <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> AES-256 Encryption</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Read-Only Mode</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Data Isolation</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* BOTTOM CTA */}
        <section className="text-center mt-24">
          <Link href="/signup">
            <button className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2 group">
              Start the setup
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </section>
      </main>
    </>
  );
}
