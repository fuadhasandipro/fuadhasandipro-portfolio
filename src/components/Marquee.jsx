"use client";

import { marqueeTech } from "@/data/portfolioData";
import { Sparkles } from "lucide-react";

export default function Marquee() {
  const items = [...marqueeTech, ...marqueeTech];

  return (
    <div className="py-6 bg-black text-white border-b-2 border-black overflow-hidden select-none">
      <div className="animate-marquee flex items-center gap-8">
        {items.map((tech, idx) => (
          <div key={idx} className="flex items-center gap-6 whitespace-nowrap">
            <span className="text-sm sm:text-base font-extrabold tracking-wider uppercase font-mono">
              {tech}
            </span>
            <Sparkles className="w-4 h-4 text-neutral-400 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
