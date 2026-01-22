"use client";

import { TrendingUp, Eye, Bot } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: TrendingUp,
      title: "Sales Forecasting",
      description:
        "Don't tie up cash unnecessarily. AI analyzes history and seasonality to predict exactly what will sell.",
    },
    {
      icon: Eye,
      title: "24/7 Monitoring",
      description:
        "The agent never sleeps. It watches stock levels in real-time and detects anomalies before they become critical.",
    },
    {
      icon: Bot,
      title: "Auto-Replenishment",
      description:
        "No more paperwork. The agent drafts supplier emails for you. You just click 'Send'.",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse at bottom, rgba(17, 34, 64, 0.2) 0%, #0A192F 50%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            An artificial brain for your{" "}
            <span className="text-primary">logistics.</span>
          </h2>
          <p className="text-xl text-text-muted">
            3 pillars to secure your growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-surface border border-white/10 rounded-lg p-8 hover:border-primary hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                style={{
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div
                    className="inline-flex p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300"
                    style={{
                      boxShadow: "0 0 20px rgba(0, 255, 148, 0.2)",
                    }}
                  >
                    <Icon className="w-12 h-12 text-primary" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-text-main mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA hint */}
        <div className="text-center mt-16">
          <p className="text-text-muted">
            Everything is connected.{" "}
            <span className="text-primary font-semibold">
              No manual action required.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
