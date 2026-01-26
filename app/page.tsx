"use client";

import { motion, AnimatePresence } from "framer-motion"; // Ajout de AnimatePresence pour être propre
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import BentoGrid from "@/components/landing/BentoGrid";
import TrustSection from "@/components/landing/TrustSection";
import FinalCTA from "@/components/landing/FinalCTA";
import SplashScreen from "@/components/ui/SplashScreen";

export default function Home() {
  // On garde uniquement ces deux états, isLoading est inutile ici
  const [showSplash, setShowSplash] = useState(true);
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    // On utilise showSplash comme condition de blocage
    if (showSplash) {
      // 1. Bloquer le scroll TANT que le Splash est là
      document.body.style.overflow = "hidden";
      
      // 2. Forcer la position tout en haut
      window.scrollTo(0, 0);
    } else {
      // 3. Réactiver le scroll DÈS que le Splash disparaît
      document.body.style.overflow = "unset";
    }
  }, [showSplash]); // Le useEffect réagit au changement de showSplash

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen 
            finishLoading={() => setShowSplash(false)} 
            onTransitionStart={() => setShowHome(true)} 
          />
        )}
      </AnimatePresence>
      

      {/* 1. Global Background (Fixed Layer 0) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
          className="absolute inset-0 opacity-[0.8]"
          animate={{ 
            backgroundPosition: ["0px 0px", "60px 60px"] 
          }}
          transition={{ 
            duration: 20, 
            ease: "linear", 
            repeat: Infinity 
          }}
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px"
          }}
        />
      </div>

<Navbar isLoaded={showHome} />
      {/* 2. Scrollable Content (Layer 10) */}
      <motion.div
        initial={{ y: 100, scale: 0.98, opacity: 0 }}
        animate={{ 
          y: showHome ? 0 : 100, 
          scale: showHome ? 1 : 0.98, 
          opacity: showHome ? 1 : 0 
        }}
        transition={{ duration: 0.8, ease: "easeOut" }} // Un peu plus lent pour la douceur (0.8s)
        className="relative z-10"
      >
        
        <Hero />
        <BentoGrid />
        <FinalCTA />
      </motion.div>
    </div>
  );
}