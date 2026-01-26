"use client";

import { motion } from "framer-motion";

export default function TrustSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Founder's Message */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card relative p-8 md:p-12">
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
