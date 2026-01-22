"use client";

import { XCircle, CheckCircle2 } from "lucide-react";

export default function ComparisonSection() {
  const comparisons = [
    {
      old: "Manual Entry (4h/week)",
      new: "Autonomous Sync (0 clicks)",
    },
    {
      old: "Human Errors",
      new: "AI Anomaly Detection",
    },
    {
      old: "Reactive (Too late)",
      new: "Predictive (Just in time)",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(17, 34, 64, 0.15) 0%, #0A192F 60%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why <span className="text-primary">switch</span>?
          </h2>
        </div>

        {/* Two Column Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LEFT COLUMN - "L'Enfer Excel" */}
          <div className="opacity-70">
            <div className="bg-surface/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-400 mb-6 font-mono">
                The Old Way
              </h3>
              <div className="space-y-6">
                {comparisons.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500/70 mt-1 flex-shrink-0" />
                    <p className="text-gray-400 font-mono text-sm leading-relaxed">
                      {item.old}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - "La Sérénité flowStock" */}
          <div className="md:scale-105 md:-translate-y-2">
            <div
              className="bg-surface/50 backdrop-blur-md border border-primary/40 rounded-lg p-8 h-full relative"
              style={{
                boxShadow: "0 0 40px rgba(0, 255, 148, 0.2), 0 10px 30px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* Glow effect */}
              <div
                className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur-sm -z-10"
              />
              
              <h3 className="text-2xl font-bold text-primary mb-6">
                The flowStock Way
              </h3>
              <div className="space-y-6">
                {comparisons.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-text-main leading-relaxed">
                      {item.new}
                    </p>
                  </div>
                ))}
              </div>

              {/* Highlight badge */}
              <div className="mt-8 pt-6 border-t border-primary/20">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-text-muted">
                    Save <span className="text-primary font-semibold">4h/week</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA hint */}
        <div className="text-center mt-12">
          <p className="text-text-muted text-sm">
            Join the <span className="text-primary font-semibold">200+ companies</span> who automated their inventory
          </p>
        </div>
      </div>
    </section>
  );
}
