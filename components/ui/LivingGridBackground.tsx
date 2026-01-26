"use client";

import { motion } from "framer-motion";

export default function LivingGridBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Grille infinie simple (Style Splash Screen) */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        animate={{ 
          backgroundPosition: ["0px 0px", "40px 40px"] 
        }}
        transition={{ 
          duration: 4, 
          ease: "linear", 
          repeat: Infinity 
        }}
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 255, 148, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 255, 148, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px"
        }}
      />
      
      {/* Vignette subtile pour fondre les bords (Optionnel) */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at center, transparent 0%, #020817 100%)"
        }} 
      />
    </div>
  );
}