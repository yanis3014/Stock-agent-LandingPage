"use client";

import { Box } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black/20 border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <Box className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-xl font-bold">
                flow<span className="text-primary">Stock</span>
              </span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed">
              Inventory AI for the bold.
            </p>
          </div>

          {/* Column 2: Product */}
          <div>
            <h4 className="text-text-main font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/product"
                  className="text-text-muted hover:text-primary transition-colors duration-200 text-sm"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-text-muted hover:text-primary transition-colors duration-200 text-sm"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-text-muted hover:text-primary transition-colors duration-200 text-sm"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-text-muted hover:text-primary transition-colors duration-200 text-sm"
                >
                  Log in
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 className="text-text-main font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-text-muted hover:text-primary transition-colors duration-200 text-sm"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-text-muted hover:text-primary transition-colors duration-200 text-sm"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-text-muted hover:text-primary transition-colors duration-200 text-sm"
                >
                  Legal Notice
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div>
            <h4 className="text-text-main font-semibold mb-4">Social</h4>
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-surface/40 border border-primary/20 flex items-center justify-center hover:border-primary/50 hover:bg-surface/60 transition-all duration-300 group"
              >
                <svg
                  className="w-5 h-5 text-text-muted group-hover:text-primary transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-surface/40 border border-primary/20 flex items-center justify-center hover:border-primary/50 hover:bg-surface/60 transition-all duration-300 group"
              >
                <svg
                  className="w-5 h-5 text-text-muted group-hover:text-primary transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/10">
          <p className="text-center text-text-muted text-sm">
            © 2024 flowStock. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
