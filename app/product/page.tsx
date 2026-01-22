import Navbar from "@/components/layout/Navbar";
import FeaturesSection from "@/components/landing/FeaturesSection";
import DemoSection from "@/components/landing/DemoSection";

export default function ProductPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-32 pb-20">
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-6">
              The AI that manages your inventory
            </h1>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Autonomous monitoring, predictive analytics, and automated ordering. 
              All in one intelligent platform.
            </p>
          </div>
        </div>

        {/* Demo Section */}
        <DemoSection />

        {/* Features Section */}
        <FeaturesSection />
      </main>
    </>
  );
}
