"use client";

import React from "react";
import { motion } from "framer-motion";

// --- Types & Data ---

type Testimonial = {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  color: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "FlowStock cut our weekly inventory checks by 15 hours. The predictive alerts are spot on.",
    name: "Sarah Jenkins",
    role: "Ops Manager",
    company: "GearSupply Co.",
    initials: "SJ",
    color: "bg-blue-500",
  },
  {
    id: 2,
    quote: "We haven't had a single stockout since switching. ROI was visible in the first month.",
    name: "Michael Ross",
    role: "Founder",
    company: "UrbanHype",
    initials: "MR",
    color: "bg-emerald-500",
  },
  {
    id: 3,
    quote: "The interface is beautiful and the data is actually actionable. Huge upgrade for us.",
    name: "Elena Drago",
    role: "Head of Logistics",
    company: "LuxDeco",
    initials: "ED",
    color: "bg-purple-500",
  },
  {
    id: 4,
    quote: "Integrating with Shopify took minutes. Finally, a tool that just works.",
    name: "David Kim",
    role: "CTO",
    company: "FastFashion Inc.",
    initials: "DK",
    color: "bg-indigo-500",
  },
  {
    id: 5,
    quote: "Automated reordering saved my sanity during Q4. Highly recommended.",
    name: "Alex Patel",
    role: "E-com Director",
    company: "GreenLife",
    initials: "AP",
    color: "bg-yellow-500",
  },
  {
    id: 6,
    quote: "Support is fantastic, but the platform is so intuitive we rarely need help.",
    name: "Jessica Miller",
    role: "Owner",
    company: "PetGalaxy",
    initials: "JM",
    color: "bg-pink-500",
  },
  {
    id: 7,
    quote: "We scaled to 3 new warehouses seamlessly thanks to FlowStock's multi-location support.",
    name: "Tom Harris",
    role: "Supply Chain Lead",
    company: "BuildRight",
    initials: "TH",
    color: "bg-red-500",
  },
  {
    id: 8,
    quote: "The forecasting accuracy is scary good. It predicts demand spikes before we see them.",
    name: "Rachel Foster",
    role: "COO",
    company: "DesignMasters",
    initials: "RF",
    color: "bg-teal-500",
  },
  {
    id: 9,
    quote: "Best investment we made for our operations this year. Hands down.",
    name: "Chris Baker",
    role: "VP Operations",
    company: "GlobalTrade",
    initials: "CB",
    color: "bg-orange-500",
  },
];

// Helper to distribute data into columns for the 3-column layout
const COLUMN_1 = [TESTIMONIALS[0], TESTIMONIALS[3], TESTIMONIALS[6]];
const COLUMN_2 = [TESTIMONIALS[1], TESTIMONIALS[4], TESTIMONIALS[7]];
const COLUMN_3 = [TESTIMONIALS[2], TESTIMONIALS[5], TESTIMONIALS[8]];

// --- Components ---

const TestimonialCard = ({ data }: { data: Testimonial }) => (
  <div className="w-full p-6 mb-6 break-inside-avoid rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_30px_-5px_rgba(0,255,148,0.4)]">
    <p className="text-gray-300 mb-4 leading-relaxed text-sm">"{data.quote}"</p>
    <div className="flex items-center gap-3">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs ${data.color}`}>
        {data.initials}
      </div>
      <div>
        <h4 className="text-white font-semibold text-sm">{data.name}</h4>
        <p className="text-gray-500 text-xs">{data.role}, {data.company}</p>
      </div>
    </div>
  </div>
);

const InfiniteColumn = ({
  data,
  direction = "up",
  duration = 20,
}: {
  data: Testimonial[];
  direction?: "up" | "down";
  duration?: number;
}) => {
  // Triple the data to ensure smooth infinite looping without gaps
  const items = [...data, ...data, ...data];

  return (
    <div className="relative flex flex-col overflow-hidden h-full">
      <motion.div
        className="flex flex-col"
        animate={{
          y: direction === "up" ? ["-33.33%", "0%"] : ["0%", "-33.33%"],
        }}
        transition={{
          duration: duration,
          ease: "linear",
          repeat: Infinity,
        }}
        // Initial position handling can vary, but for infinite loop we just need
        // the seamless repeat. If "up", we move the content up (negative Y).
        // Correction: If scrolling UP, we want content to move upwards, so y goes from 0 to negative.
        // If scrolling DOWN, we want content to move downwards, so y goes from negative to 0 (or similar).
        // Let's adjust logic:
        // UP: items move UP visually. y: 0 -> -33.33%
        // DOWN: items move DOWN visually. y: -33.33% -> 0%
      >
        {items.map((item, idx) => (
          <TestimonialCard key={`${item.id}-${idx}`} data={item} />
        ))}
      </motion.div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-transparent">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Loved by <span className="text-gradient-primary">Growth Teams</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Join hundreds of fast-scaling brands that trust FlowStock to manage their inventory intelligence.
          </p>
        </div>

        {/* 
          The "Wall of Love" Grid 
          - Fixed height container: h-[600px]
          - Gradient Mask for smooth fade in/out
        */}
        <div className="relative h-[600px] grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,rgba(0,0,0,1)_10%,rgba(0,0,0,1)_90%,transparent)]">
          
          {/* Column 1: Scrolls UP */}
          {/* animate y: 0 -> -33.33% */}
          <div className="relative flex flex-col overflow-hidden h-full">
             <motion.div
                className="flex flex-col"
                animate={{ y: ["0%", "-33.33%"] }}
                transition={{ duration: 45, ease: "linear", repeat: Infinity }}
             >
                {[...COLUMN_1, ...COLUMN_1, ...COLUMN_1].map((item, idx) => (
                  <TestimonialCard key={`col1-${idx}`} data={item} />
                ))}
             </motion.div>
          </div>

          {/* Column 2: Scrolls DOWN */}
          {/* animate y: -33.33% -> 0% */}
          <div className="relative flex flex-col overflow-hidden h-full">
             <motion.div
                className="flex flex-col"
                animate={{ y: ["-33.33%", "0%"] }}
                transition={{ duration: 50, ease: "linear", repeat: Infinity }}
             >
                {[...COLUMN_2, ...COLUMN_2, ...COLUMN_2].map((item, idx) => (
                  <TestimonialCard key={`col2-${idx}`} data={item} />
                ))}
             </motion.div>
          </div>

          {/* Column 3: Scrolls UP */}
          <div className="relative flex flex-col overflow-hidden h-full">
             <motion.div
                className="flex flex-col"
                animate={{ y: ["0%", "-33.33%"] }}
                transition={{ duration: 48, ease: "linear", repeat: Infinity }}
             >
                {[...COLUMN_3, ...COLUMN_3, ...COLUMN_3].map((item, idx) => (
                  <TestimonialCard key={`col3-${idx}`} data={item} />
                ))}
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
