"use client";

import { ArrowUp, Code2 } from "lucide-react";
import { personalDetails } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t-2 border-black py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand Column */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center font-mono font-extrabold text-sm border-2 border-black shadow-outline-sm">
            FH
          </div>
          <div>
            <div className="font-extrabold text-black text-base">
              FUAD HASAN
            </div>
            <p className="text-xs text-neutral-600 font-mono">
              Next.js & WordPress Specialist
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-xs font-mono text-neutral-600 text-center font-semibold">
          © {new Date().getFullYear()} Fuad Hasan. All rights reserved.
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="p-3 bg-neutral-100 text-black border-2 border-black rounded-xl hover:bg-black hover:text-white transition-all shadow-outline-sm flex items-center gap-2 text-xs font-bold"
          aria-label="Back to Top"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
}
