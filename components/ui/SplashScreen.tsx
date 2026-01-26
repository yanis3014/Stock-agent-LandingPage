"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplashScreenProps {
  finishLoading: () => void;
  onTransitionStart?: () => void;
}

export default function SplashScreen({ finishLoading, onTransitionStart }: SplashScreenProps) {
  const [isMounted, setIsMounted] = useState(true);

  const animateExit = () => {
    if (onTransitionStart) onTransitionStart();
    setIsMounted(false);
    setTimeout(() => {
      finishLoading();
    }, 1000); // 1s for exit animation
  };

  useEffect(() => {
    // Determine the total duration of the entrance animations
    // Outline: 1.5s
    // Fill/Text starts at 1.4s
    // Give it a bit more time to settle (e.g. + 1.5s or 2s)
    const timeout = setTimeout(() => {
      animateExit();
    }, 4000); // Total wait before sliding up

    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {isMounted && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020817] overflow-hidden"
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.5, ease: "easeInOut" } }}
        >
          {/* Layer 1: Moving White Grid (Background) */}
          <motion.div 
            className="absolute inset-0 z-0"
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
          >
            <motion.div 
              className="absolute inset-0 opacity-[0.4]"
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
          </motion.div>

          {/* Layer 2: Green Energy Vignette (Foreground Mask) */}
          <div 
            className="absolute inset-0 z-1 pointer-events-none"
            style={{
              background: `radial-gradient(circle at center, rgba(16, 185, 129, 0.2) 0%, rgba(0,0,0,0) 50%, #020817 100%)`
            }}
          />

          <div className="relative z-10 flex items-center gap-8">
            {/* SVG Container */}
            <motion.svg
              width="160"
              height="160"
              viewBox="0 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary"
            >
              <g id="layer1">
                {/* 
                  Merged paths logic as requested. 
                  The user provided an SVG with a single <g> and a complicated <path> d="..." logic. 
                  Actually the provided SVG has multiple sub-paths in one 'd' string or multiple paths.
                  Let's check the user input closely.
                  " <path d="... z M ... z M ... z M ... z " ... /> "
                  It is a single path element with multiple subpaths (M ... z M ... z).
                  This works fine with pathLength.
                */}
                <motion.path
                  d="M 10.005859 0.5 A 0.50083746 0.50083746 0 0 0 9.7539062 0.56445312 L 1.7539062 5.0644531 A 0.50083746 0.50083746 0 0 0 1.5 5.5 L 1.5 14.5 A 0.50083746 0.50083746 0 0 0 1.7539062 14.935547 L 9.7539062 19.435547 A 0.50083746 0.50083746 0 0 0 10.246094 19.435547 L 18.246094 14.935547 A 0.50083746 0.50083746 0 0 0 18.5 14.5 L 18.5 5.5 A 0.50083746 0.50083746 0 0 0 18.246094 5.0644531 L 10.246094 0.56445312 A 0.50083746 0.50083746 0 0 0 10.005859 0.5 z M 10 1.5742188 L 16.978516 5.5 L 10 9.4257812 L 3.0214844 5.5 L 10 1.5742188 z M 2.5 6.3554688 L 9.5 10.292969 L 9.5 18.144531 L 2.5 14.207031 L 2.5 6.3554688 z M 17.5 6.3554688 L 17.5 14.207031 L 10.5 18.144531 L 10.5 10.292969 L 17.5 6.3554688 z "
                  stroke="currentColor"
                  strokeWidth="0.4"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: 1,
                  }}
                  transition={{
                    pathLength: { duration: 1.5, ease: "easeInOut", delay: 1.5 },
                  }}
                />
              </g>
            </motion.svg>

            {/* Text Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.0, duration: 0.5 }}
              className="text-4xl md:text-6xl font-extrabold text-white tracking-tight"
            >
              {Array.from("FlowStock").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 3.0 + index * 0.1, // Typewriter effect starting after lines draw
                    ease: "easeOut",
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
