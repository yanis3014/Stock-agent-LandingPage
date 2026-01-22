"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, CreditCard, Database } from "lucide-react";

const techStack = [
  { name: "OpenAI", icon: Cpu, color: "#10a37f" },
  { name: "Next.js", icon: Zap, color: "#ffffff" },
  { name: "Stripe", icon: CreditCard, color: "#635bff" },
  { name: "Supabase", icon: Database, color: "#3ecf8e" },
];

export default function TrustSection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-xl text-text-muted mb-8">
            Powered by cutting-edge technology.
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex flex-col items-center gap-3"
              >
                <tech.icon
                  className="w-12 h-12 text-text-muted/40 group-hover:text-text-main transition-all duration-300"
                  style={{
                    filter: "grayscale(100%)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = "grayscale(0%)";
                    e.currentTarget.style.color = tech.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = "grayscale(100%)";
                    e.currentTarget.style.color = "";
                  }}
                />
                <span className="text-sm font-medium text-text-muted group-hover:text-text-main transition-colors duration-300">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Founder's Message */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-surface/60 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 md:p-12 hover:border-primary/40 transition-colors duration-300">
            {/* Quote Mark */}
            <div className="absolute top-6 left-6 text-6xl text-primary/20 font-serif">
              "
            </div>

            {/* Message */}
            <div className="relative z-10">
              <p className="text-lg md:text-xl text-text-main leading-relaxed mb-8 italic">
                I'm building flowStock in public because I'm tired of seeing SMBs
                lose money on silly errors. Try it. If you don't save 2h in the
                first week, I'll personally help you set up your inventory.
              </p>

              {/* Signature */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">Y</span>
                </div>
                <div>
                  <p className="text-text-main font-semibold">
                    Yanis, Founder
                  </p>
                  <p className="text-text-muted text-sm">
                    Building in public 🚀
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
