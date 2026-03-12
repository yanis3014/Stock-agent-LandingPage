"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import PainSection from "@/components/landing/PainSection";
import HowItWorks from "@/components/landing/HowItWorks";
import DemoSection from "@/components/landing/DemoSection";
import Testimonials from "@/components/landing/Testimonials";
import FinalCTA from "@/components/landing/FinalCTA";
import SplashScreen from "@/components/ui/SplashScreen";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showSplash]);

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

      <Navbar isLoaded={showHome} />

      <motion.main
        initial={{ y: 100, scale: 0.98, opacity: 0 }}
        animate={{
          y: showHome ? 0 : 100,
          scale: showHome ? 1 : 0.98,
          opacity: showHome ? 1 : 0,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <Hero />
        <PainSection />
        <HowItWorks />
        <DemoSection />
        <Testimonials />
        <FinalCTA />
      </motion.main>
    </div>
  );
}
