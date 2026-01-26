"use client";

import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";

export default function DemoSection() {
  const [animationKey, setAnimationKey] = useState(0);

  // Reset animation every 6 seconds for infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Subtle background removed for LivingGrid visibility */}

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Raw data to{" "}
            <span className="text-primary">instant decision.</span>
          </h2>
          <p className="text-xl text-text-muted">
            AI analyzes your CSVs, ERP, or Shopify data in real-time.
          </p>
        </div>

        {/* Animation Pipeline Container */}
        <div className="relative h-64 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={animationKey}
              className="absolute inset-0 flex items-center justify-between"
            >
              {/* LEFT: Raw Data Entry */}
              <motion.div
                className="absolute left-0"
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="bg-surface/80 backdrop-blur-sm border border-red-500/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-red-400 mb-1">ERR_STOCK_NEG</div>
                  <div className="text-text-muted">SKU_2847: -12 units</div>
                  <div className="text-text-muted">Last_Update: 23:47</div>
                </div>
              </motion.div>

              {/* CENTER: Scanner/Processor */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="relative w-32 h-32 flex items-center justify-center">
                  {/* Outer glow */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "radial-gradient(circle, rgba(0, 255, 148, 0.4) 0%, transparent 70%)",
                      filter: "blur(30px)",
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.4, 0.6, 0.4],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  {/* Scanning line */}
                  <motion.div
                    className="absolute inset-4 border-2 border-primary rounded-full"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary rounded-full -translate-x-1/2 shadow-[0_0_10px_rgba(0,255,148,0.8)]" />
                  </motion.div>

                  {/* Core */}
                  <div className="absolute inset-8 rounded-full bg-primary/30 backdrop-blur-sm" />
                </div>
              </motion.div>

              {/* RIGHT: Clean Output Card */}
              <motion.div
                className="absolute right-0"
                initial={{ x: 0, opacity: 0, scale: 0.8 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
              >
                <div
                  className="bg-surface/50 backdrop-blur-md border border-primary/30 rounded-lg p-6 min-w-[280px]"
                  style={{
                    boxShadow: "0 0 30px rgba(0, 255, 148, 0.1)",
                  }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <AlertTriangle className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-text-main mb-1">
                        Stockout Risk
                      </h3>
                      <p className="text-sm text-text-muted">
                        SKU_2847 - Dans 48h
                      </p>
                    </div>
                  </div>
                  <button className="w-full px-4 py-2 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Order Now
                  </button>
                </div>
              </motion.div>

              {/* Connection lines (optional visual enhancement) */}
              <motion.div
                className="absolute left-[35%] top-1/2 w-[15%] h-0.5 bg-gradient-to-r from-red-500/50 to-primary/50"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                style={{ transformOrigin: "left" }}
              />
              <motion.div
                className="absolute right-[35%] top-1/2 w-[15%] h-0.5 bg-gradient-to-r from-primary/50 to-primary/30"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 2.2, duration: 0.5 }}
                style={{ transformOrigin: "left" }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom text */}
        <div className="text-center mt-16">
          <p className="text-text-muted">
            <span className="text-primary font-semibold">Automatic.</span> No manual setup.
          </p>
        </div>
      </div>
    </section>
  );
}
