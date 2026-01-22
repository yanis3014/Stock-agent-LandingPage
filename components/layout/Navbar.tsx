"use client";

import { Box } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Product", href: "/product" },
    { name: "How it works", href: "/how-it-works" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
      <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-full px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Box className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-base font-bold">
            flow<span className="text-primary">Stock</span>
          </span>
        </Link>

        {/* Center Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${
                  pathname === link.href
                    ? "bg-white/10 text-text-main"
                    : "text-text-muted hover:bg-white/5 hover:text-text-main"
                }
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:block px-4 py-2 text-sm text-text-muted hover:text-text-main transition-colors duration-200">
            Log in
          </button>
          <button className="px-5 py-2 bg-primary text-background text-sm font-semibold rounded-full hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(0,255,148,0.4)] transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
