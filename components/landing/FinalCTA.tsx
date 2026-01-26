"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative py-32 px-6 bg-background border-t border-white/5 overflow-hidden">
      {/* Subtle Radial Gradient Background */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"
      />
      
      {/* Centered Content */}
      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-10"
        >
          {/* Large Headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-text-main leading-tight max-w-3xl">
            Ready to stop losing money on inventory errors?
          </h2>

          {/* CTA Button */}
          <div className="flex flex-col items-center">
            <Link href="/signup">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary group text-lg px-8 py-4"
              >
                <span className="flex items-center gap-3">
                  Get Started for Free
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </span>
              </motion.button>
            </Link>

            {/* Subtext */}
            <p className="text-sm text-text-muted mt-4">
              No credit card required • Cancel anytime
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
