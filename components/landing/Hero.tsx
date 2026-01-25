"use client";

import { Play } from "lucide-react";
import AiParticleSphere from "./AiParticleSphere";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(17, 34, 64, 0.4) 0%, #0A192F 70%)",
        }}
      />

      {/* AI Particle Sphere - living energy visualization */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-70">
        <AiParticleSphere />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
          Stop managing inventory.{" "}
          <span 
            className="text-primary"
            style={{
              filter: "drop-shadow(0 0 20px rgba(0, 255, 148, 0.6))",
            }}
          >
            Let AI do it.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-text-muted mb-12 max-w-3xl mx-auto leading-relaxed">
          Connect your data in 2 clicks. Our autonomous agent monitors stock 24/7, 
          predicts shortages, and drafts supplier orders. No complex formulas.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary CTA */}
          <button className="btn-primary text-lg">
            Start Free Analysis
          </button>

          {/* Secondary CTA */}
          <button className="glass-card group px-8 py-4 text-text-main font-semibold text-lg flex items-center gap-2 hover:scale-105 active:scale-95">
            <Play className="w-5 h-5 group-hover:text-primary transition-colors" />
            Watch Demo (1 min)
          </button>
        </div>

        {/* Optional: Social proof or trust indicators */}
        <div className="mt-16 flex items-center justify-center gap-8 text-text-muted text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span>Real-time analysis</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
            <span>100% automated</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
            <span>Secure & compliant</span>
          </div>
        </div>
      </div>
    </section>
  );
}
