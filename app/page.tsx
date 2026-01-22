import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import TrustSection from "@/components/landing/TrustSection";
import FinalCTA from "@/components/landing/FinalCTA";
import { TrendingUp, Eye, Bot } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      icon: TrendingUp,
      title: "Sales Forecasting",
      description: "AI predicts what will sell",
    },
    {
      icon: Eye,
      title: "24/7 Monitoring",
      description: "Never miss a stockout",
    },
    {
      icon: Bot,
      title: "Auto-Replenishment",
      description: "Orders draft themselves",
    },
  ];

  return (
    <>
      <Navbar />
      <Hero />

      {/* Simplified Features Summary */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center group cursor-pointer"
                >
                  <div className="inline-flex p-4 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-main mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text-muted text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/product"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200 font-semibold"
            >
              Explore all features →
            </Link>
          </div>
        </div>
      </section>

      <TrustSection />
      <FinalCTA />
    </>
  );
}
