"use client";

import { Box } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar({ isLoaded = true }: { isLoaded?: boolean }) {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navItems = [
    { name: "Product", href: "/product" },
    { name: "How it works", href: "/how-it-works" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <motion.nav
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isLoaded ? 0 : -100, opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 1.2, ease: "easeOut", delay : isLoaded ? 1 : 0}}
    >
      <div className="navbar-floating backdrop-blur-xl bg-black/40 border border-white/10 rounded-full px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Box className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-base font-bold">
            Flow<span className="text-primary">Stock</span>
          </span>
        </Link>

        {/* Center Navigation Links with Sliding Hover */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium transition-colors duration-200"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Sliding Background Bubble */}
              {hoveredIndex === index && (
                <motion.span
                  layoutId="hover-bubble"
                  className="absolute inset-0 -z-10 bg-white/10 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              
              {/* Active State Background */}
              {pathname === item.href && (
                <span className="absolute inset-0 -z-10 bg-white/5 rounded-full" />
              )}
              
              {/* Link Text */}
              <span
                className={`relative z-10 ${
                  pathname === item.href
                    ? "text-white"
                    : hoveredIndex === index
                    ? "text-white"
                    : "text-text-muted"
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Ghost Log In Button with Sliding Hover */}
          <motion.button
            className="hidden sm:block relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200"
            onMouseEnter={() => setHoveredIndex(999)} // Use unique index for login button
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Sliding Background Bubble */}
            {hoveredIndex === 999 && (
              <motion.span
                layoutId="hover-bubble"
                className="absolute inset-0 -z-10 bg-white/10 rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            
            {/* Button Text */}
            <span
              className={`relative z-10 ${
                hoveredIndex === 999 ? "text-white" : "text-text-muted"
              }`}
            >
              Log in
            </span>
          </motion.button>

          {/* Super CTA - Get Started with Shimmer */}
          <motion.button
            className="relative px-6 py-2.5 text-sm font-semibold text-black rounded-full overflow-hidden
                       bg-gradient-to-r from-[#00FF94] to-[#00D97E]
                       shadow-[0_0_15px_rgba(0,255,148,0.3)]
                       hover:shadow-[0_0_25px_rgba(0,255,148,0.6)]
                       transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Shimmer Effect */}
            <div
              className="absolute inset-0 -translate-x-full animate-shimmer"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                animation: "shimmer 3s infinite",
              }}
            />
            <span className="relative z-10">Get Started</span>
          </motion.button>
        </div>
      </div>

      {/* Shimmer Animation Keyframes */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </motion.nav>
  );
}
