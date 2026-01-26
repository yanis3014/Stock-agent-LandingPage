"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ArrowRight, ShieldCheck, Zap, AlertCircle } from "lucide-react";

const faqs = [
  {
    question: "Do I need to migrate my data manually?",
    answer: "Absolutely not. FlowStock connects directly to your existing ecosystem (Shopify, Amazon, NetSuite) via secure APIs. The initial sync takes about 2 minutes and runs in the background.",
    icon: Zap
  },
  {
    question: "What happens if the AI makes a mistake?",
    answer: "You are always in control. By default, the Agent operates in 'Draft Mode'. It prepares the Purchase Orders, but you must click 'Approve' to send them. You can switch to full Autopilot only when you are ready.",
    icon: AlertCircle
  },
  {
    question: "Is my business data secure?",
    answer: "Security is our priority. We are SOC-2 Type II compliant. Your data is processed in isolated containers and is never used to train our public models or shared with other clients.",
    icon: ShieldCheck
  },
  {
    question: "Can I handle multiple warehouses?",
    answer: "Yes. The Pro and Enterprise plans support multi-location inventory. The AI optimizes stock transfers between warehouses to reduce shipping zones and costs.",
    icon: Terminal
  },
  {
    question: "How does the billing work?",
    answer: "We bill based on your GMV (Gross Merchandise Value) tier. If you have a seasonal spike, we don't automatically upgrade you unless the volume sustains for 3 consecutive months.",
    icon: ArrowRight
  }
];

export default function PricingFAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Frequently Answered <span className="text-gradient-primary">Questions</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        
        {/* LEFT COLUMN: Questions List */}
        <div className="md:col-span-5 flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)} // For mobile/touch
              className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border backdrop-blur-sm relative overflow-hidden group ${
                activeIndex === index 
                  ? "bg-primary/10 border-primary/50 shadow-[0_0_20px_rgba(0,255,148,0.1)]" 
                  : "bg-surface/30 border-white/5 hover:bg-white/5 hover:border-white/10"
              }`}
            >
              <div className="flex items-center gap-4 relative z-10">
                <span className={`text-sm font-mono transition-colors ${activeIndex === index ? "text-primary" : "text-text-muted"}`}>
                  0{index + 1}
                </span>
                <h3 className={`font-semibold text-lg transition-colors ${activeIndex === index ? "text-white" : "text-text-muted group-hover:text-white"}`}>
                  {faq.question}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN: Interactive Answer Screen (Sticky) */}
        <div className="md:col-span-7 hidden md:block relative h-full min-h-[400px]">
          <div className="sticky top-10">
            <div className="glass-card w-full h-full min-h-[300px] p-10 border-primary/20 bg-[#0a192f]/80 relative overflow-hidden flex flex-col justify-center">
              
              {/* Decorative Terminal Header */}
              <div className="absolute top-0 left-0 w-full h-10 bg-black/20 border-b border-white/5 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <div className="ml-4 text-xs font-mono text-primary/50">agent_response.ts</div>
              </div>

              {/* Content Transition */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="pt-8"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    {/* Dynamic Icon Rendering */}
                    {(() => {
                      const Icon = faqs[activeIndex].icon;
                      return <Icon className="w-6 h-6 text-primary" />;
                    })()}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-6">
                    {faqs[activeIndex].question}
                  </h3>
                  
                  <div className="text-lg text-text-muted leading-relaxed font-light border-l-2 border-primary/30 pl-6">
                    {faqs[activeIndex].answer}
                  </div>
                  
                  <div className="mt-8 flex items-center gap-2 text-sm text-primary/60 font-mono">
                    <span className="w-2 h-4 bg-primary/60 animate-pulse" />
                    Awaiting input...
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* MOBILE ONLY ANSWER (Fallback) */}
        <div className="md:hidden col-span-1 mt-4">
          <motion.div 
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-6 border-primary/20 bg-primary/5"
          >
            <h4 className="text-primary font-bold mb-2 flex items-center gap-2">
              {(() => {
                const Icon = faqs[activeIndex].icon;
                return <Icon className="w-4 h-4" />;
              })()}
              Answer:
            </h4>
            <p className="text-text-muted leading-relaxed">{faqs[activeIndex].answer}</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
