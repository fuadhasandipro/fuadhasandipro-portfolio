"use client";

import { useState } from "react";
import { specializationsData } from "@/data/portfolioData";
import { Code2, Cpu, CheckCircle2, ArrowUpRight, Zap, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Specializations() {
  const [activeTab, setActiveTab] = useState("nextjs");

  const currentSpec = specializationsData.find((item) => item.id === activeTab);

  return (
    <section id="specialization" className="py-24 px-4 sm:px-8 bg-neutral-50 border-b-2 border-black bg-dot-pattern">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border-2 border-black rounded-full text-xs font-mono font-bold uppercase tracking-wider text-black shadow-outline-sm">
              <Cpu className="w-4 h-4 text-black" />
              <span>Core Skills</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight">
              Next.js & WordPress Development
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 font-medium">
              Clean, fast, and maintainable web applications built with Next.js or custom WordPress.
            </p>
          </div>

          {/* Stack Selector Pills */}
          <div className="flex items-center gap-2 bg-white p-2 border-2 border-black rounded-2xl shadow-outline-sm self-start md:self-auto">
            <button
              onClick={() => setActiveTab("nextjs")}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 border-2 ${
                activeTab === "nextjs"
                  ? "bg-black text-white border-black shadow-outline-sm"
                  : "bg-transparent text-black border-transparent hover:bg-neutral-100"
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span>Next.js Stack</span>
            </button>
            <button
              onClick={() => setActiveTab("wordpress")}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 border-2 ${
                activeTab === "wordpress"
                  ? "bg-black text-white border-black shadow-outline-sm"
                  : "bg-transparent text-black border-transparent hover:bg-neutral-100"
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>WordPress Engine</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="bg-white border-2 border-black rounded-3xl p-6 sm:p-10 shadow-outline-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-extrabold uppercase bg-neutral-100 text-black px-3 py-1 rounded-lg border-2 border-black">
                    {currentSpec.badge}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-black">
                  {currentSpec.title}
                </h3>
                <p className="text-neutral-700 text-base leading-relaxed font-medium">
                  {currentSpec.description}
                </p>
              </div>

              {/* Skill List */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">
                  Technical Skills
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentSpec.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-neutral-50 border-2 border-black rounded-xl flex items-start gap-3 hover:bg-neutral-100 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-bold text-black leading-snug">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-5 bg-black text-white rounded-2xl p-6 border-2 border-black space-y-6 flex flex-col justify-between h-full shadow-outline">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                  <span className="font-mono text-xs text-neutral-400 font-bold uppercase">
                    Development Approach
                  </span>
                  <Zap className="w-4 h-4 text-white" />
                </div>
                
                <h4 className="text-xl font-extrabold text-white">
                  {activeTab === "nextjs" ? "Fast Next.js Apps" : "Clean WordPress & WooCommerce"}
                </h4>

                <p className="text-sm text-neutral-300 leading-relaxed font-medium">
                  {activeTab === "nextjs"
                    ? "Building fast React & Next.js web applications with clean code, sub-second load times, and custom payment integrations like Iteratio."
                    : "Custom themes and WooCommerce stores built from scratch without heavy page builders or unnecessary plugins."}
                </p>

                <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-xl space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-neutral-400">Page Speed Target</span>
                    <span className="font-bold text-white">99 / 100</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-white h-full w-[99%]" />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400">Have a project?</span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold bg-white text-black px-3.5 py-2 rounded-lg border border-white hover:bg-neutral-200 transition-colors"
                >
                  <span>Get In Touch</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
