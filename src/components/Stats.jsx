"use client";

import { useEffect, useState, useRef } from "react";
import { statsData } from "@/data/portfolioData";
import { Award, Briefcase, Users, Gauge } from "lucide-react";
import { motion, useInView } from "framer-motion";

function CounterItem({ stat }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = stat.value;
      const duration = 1500;
      const incrementTime = 30;
      const steps = Math.ceil(duration / incrementTime);
      const stepValue = end / steps;

      const timer = setInterval(() => {
        start += stepValue;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, stat.value]);

  const getIcon = (id) => {
    switch (id) {
      case "exp":
        return <Award className="w-6 h-6" />;
      case "projects":
        return <Briefcase className="w-6 h-6" />;
      case "clients":
        return <Users className="w-6 h-6" />;
      case "speed":
        return <Gauge className="w-6 h-6" />;
      default:
        return <Award className="w-6 h-6" />;
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className="bg-white border-2 border-black rounded-3xl p-6 sm:p-8 shadow-outline-hover flex flex-col justify-between space-y-6 relative overflow-hidden group"
    >
      {/* Top Header Row */}
      <div className="flex items-center justify-between">
        <div className="p-3 bg-neutral-100 text-black border-2 border-black rounded-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
          {getIcon(stat.id)}
        </div>
        <span className="text-xs font-mono font-bold uppercase tracking-wider bg-neutral-100 text-black px-3 py-1 rounded-full border border-black">
          {stat.tag}
        </span>
      </div>

      {/* Main Counter Display */}
      <div className="space-y-1">
        <div className="font-extrabold text-5xl sm:text-6xl text-black tracking-tight font-mono">
          {stat.prefix || ""}
          {count}
          {stat.suffix || ""}
        </div>
        <div className="font-bold text-lg sm:text-xl text-black tracking-tight">
          {stat.label}
        </div>
      </div>

      {/* Subtext Footer */}
      <p className="text-xs sm:text-sm text-neutral-600 font-medium pt-2 border-t-2 border-neutral-100">
        {stat.subtext}
      </p>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="py-20 px-4 sm:px-8 bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-neutral-100 border-2 border-black rounded-full text-xs font-mono font-bold uppercase tracking-wider text-black">
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight">
            Numbers That Define My Work
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 font-medium">
            Consistently delivering high-performing websites and digital experiences for clients worldwide.
          </p>
        </div>

        {/* Counter Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat) => (
            <CounterItem key={stat.id} stat={stat} />
          ))}
        </div>

      </div>
    </section>
  );
}
