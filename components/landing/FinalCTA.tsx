"use client";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Mail } from "lucide-react";
import { useState } from "react";

export default function FinalCTA() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative w-full py-32 flex items-center justify-center overflow-hidden">
      {/* Focused Glow behind the card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-[80px] rounded-full pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        animate={{ y: [0, -10, 0] }} // Floating effect
        // @ts-ignore - Framer motion type fix for transition on animate prop
        transition={{ 
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 0.8 } 
        }}
        className="relative z-10 w-full max-w-xl px-4"
      >
        {/* The "Bubble" Card */}
        <div className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#112240]/95 via-[#0a192f]/95 to-[#020817]/95 text-center shadow-2xl relative overflow-hidden group">
          
          {/* Shine Effect on Hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
          
          {/* Icon Badge */}
          <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Sparkles className="w-8 h-8 text-primary glow-primary" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Join the Exclusive Waitlist
          </h2>
          
          <p className="text-text-muted mb-8 text-lg">
            Be the first to automate your inventory. <br className="hidden md:block"/>
            <span className="text-primary font-medium">Limited spots available for the beta.</span>
          </p>
          
          {/* Email Form */}
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative z-20" onSubmit={(e) => e.preventDefault()}>
            <div className="relative flex-grow">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-surface/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
              />
            </div>
            <button className="btn-primary py-4 px-8 rounded-xl flex items-center justify-center gap-2 whitespace-nowrap group-hover:shadow-[0_0_20px_rgba(0,255,148,0.4)] transition-shadow">
              Join Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
          
          <p className="mt-6 text-sm text-text-muted/60">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
