"use client";

import { motion } from "framer-motion";

export default function AiOrb() {
  return (
    <div className="relative w-[500px] h-[500px] flex items-center justify-center">
      {/* Outer glow - largest blur */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0, 255, 148, 0.3) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Middle glow */}
      <motion.div
        className="absolute inset-[50px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0, 255, 148, 0.5) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Rotating ring 1 - outer */}
      <motion.div
        className="absolute inset-[80px] rounded-full border-2 border-primary/30"
        style={{
          filter: "blur(2px)",
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute top-0 left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 shadow-[0_0_20px_rgba(0,255,148,0.8)]" />
      </motion.div>

      {/* Rotating ring 2 - middle */}
      <motion.div
        className="absolute inset-[120px] rounded-full border-2 border-primary/40"
        style={{
          filter: "blur(1px)",
        }}
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-primary rounded-full -translate-x-1/2 shadow-[0_0_15px_rgba(0,255,148,0.8)]" />
      </motion.div>

      {/* Core - pulsing center */}
      <motion.div
        className="absolute inset-[160px] rounded-full"
        style={{
          background: "radial-gradient(circle, #00FF94 0%, rgba(0, 255, 148, 0.6) 40%, transparent 70%)",
          filter: "blur(20px)",
          boxShadow: "0 0 60px rgba(0, 255, 148, 0.8), inset 0 0 40px rgba(0, 255, 148, 0.5)",
        }}
        animate={{
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Inner core - brightest */}
      <motion.div
        className="absolute inset-[190px] rounded-full bg-primary"
        style={{
          filter: "blur(10px)",
          boxShadow: "0 0 40px rgba(0, 255, 148, 1), inset 0 0 20px rgba(255, 255, 255, 0.8)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Rotating ring 3 - inner fast */}
      <motion.div
        className="absolute inset-[140px] rounded-full border border-primary/50"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute top-1/2 right-0 w-2 h-2 bg-primary rounded-full -translate-y-1/2 shadow-[0_0_10px_rgba(0,255,148,0.9)]" />
      </motion.div>
    </div>
  );
}
