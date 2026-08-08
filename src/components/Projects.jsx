"use client";

import { useState } from "react";
import Image from "next/image";
import { projectsData } from "@/data/portfolioData";
import { ExternalLink, Layers, ArrowUpRight, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Next.js", "WordPress"];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "All") return true;
    return project.category === filter;
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-neutral-100 border-2 border-black rounded-full text-xs font-mono font-bold uppercase tracking-wider text-black shadow-outline-sm">
              <Layers className="w-4 h-4 text-black" />
              <span>Live Work Samples</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight">
              Featured Projects
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 font-medium">
              Real websites designed and built for clients using Next.js and WordPress.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex items-center gap-2 bg-neutral-100 p-2 border-2 border-black rounded-2xl shadow-outline-sm self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all border-2 ${
                  filter === cat
                    ? "bg-black text-white border-black shadow-outline-sm"
                    : "bg-white text-black border-black hover:bg-neutral-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="bg-white border-2 border-black rounded-3xl p-6 sm:p-7 shadow-outline-hover flex flex-col justify-between space-y-6 group"
              >
                {/* Outlined Browser Frame Container */}
                <div className="border-2 border-black rounded-2xl overflow-hidden bg-neutral-50 shadow-outline-sm">
                  
                  {/* Top Window Bar */}
                  <div className="flex items-center justify-between px-3.5 py-2 bg-neutral-100 border-b-2 border-black">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-black" />
                      <div className="w-2.5 h-2.5 rounded-full bg-neutral-300 border border-black" />
                      <div className="w-2.5 h-2.5 rounded-full bg-neutral-200 border border-black" />
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-mono font-bold text-neutral-600 bg-white px-2.5 py-0.5 rounded border border-black max-w-[200px] truncate">
                      <Globe className="w-3 h-3 text-black shrink-0" />
                      <span className="truncate">{project.displayUrl}</span>
                    </div>
                    <span className="text-[10px] font-mono font-extrabold uppercase bg-black text-white px-2 py-0.5 rounded">
                      {project.category}
                    </span>
                  </div>

                  {/* Image Container with Aspect Ratio Crop */}
                  <div className="relative w-full h-56 sm:h-64 bg-neutral-100 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-extrabold text-black group-hover:underline underline-offset-4 decoration-2">
                      {project.title}
                    </h3>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-neutral-100 text-black border-2 border-black rounded-xl hover:bg-black hover:text-white transition-colors shrink-0"
                      aria-label={`Visit ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-sm font-semibold text-neutral-600 font-mono">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-neutral-700 font-medium leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-neutral-50 text-black border border-black rounded-md text-xs font-mono font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Live Link Button */}
                <div className="pt-4 border-t-2 border-black flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs font-mono font-bold text-neutral-600">
                    {project.metrics.map((m, idx) => (
                      <span key={idx}>{m.label}: <strong className="text-black">{m.val}</strong></span>
                    ))}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-black text-white text-xs font-extrabold rounded-xl border-2 border-black shadow-outline-sm hover:bg-neutral-800 transition-all"
                  >
                    <span>Visit Site</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
