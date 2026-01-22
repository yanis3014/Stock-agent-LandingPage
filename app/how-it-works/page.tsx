import Navbar from "@/components/layout/Navbar";
import ComparisonSection from "@/components/landing/ComparisonSection";

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-32 pb-20">
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-6">
              How flowStock works
            </h1>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              See the difference between traditional inventory management and 
              the AI-powered approach.
            </p>
          </div>
        </div>

        {/* Comparison Section */}
        <ComparisonSection />

        {/* Additional Context */}
        <div className="max-w-4xl mx-auto px-6 mt-20">
          <div className="bg-surface/40 border border-primary/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-text-main mb-6">
              The flowStock difference
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                Traditional inventory management relies on manual data entry, 
                spreadsheets, and reactive decision-making. This leads to errors, 
                stockouts, and wasted time.
              </p>
              <p>
                flowStock's AI agent works autonomously in the background, 
                continuously monitoring your inventory levels, analyzing patterns, 
                and predicting future needs. When action is required, it alerts 
                you with specific recommendations—or handles it automatically 
                if you prefer.
              </p>
              <p className="text-primary font-semibold">
                The result? More time for growth, less time fighting fires.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
