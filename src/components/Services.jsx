"use client";

import { servicesData } from "@/data/portfolioData";
import { Rocket, Zap, ShoppingCart, Code, ShieldCheck, Sparkles, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const getServiceIcon = (name) => {
    switch (name) {
      case "Rocket":
        return <Rocket className="w-7 h-7" />;
      case "Zap":
        return <Zap className="w-7 h-7" />;
      case "ShoppingCart":
        return <ShoppingCart className="w-7 h-7" />;
      case "Code":
        return <Code className="w-7 h-7" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-7 h-7" />;
      case "Sparkles":
        return <Sparkles className="w-7 h-7" />;
      default:
        return <Code className="w-7 h-7" />;
    }
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-8 bg-neutral-50 border-b-2 border-black bg-grid-pattern">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border-2 border-black rounded-full text-xs font-mono font-bold uppercase tracking-wider text-black shadow-outline-sm">
            <span>Core Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight">
            Services & Solutions
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 font-medium">
            Building fast Next.js applications and designing high-performing WordPress websites.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-black rounded-3xl p-6 sm:p-8 shadow-outline-hover flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="p-3.5 bg-neutral-100 text-black border-2 border-black rounded-2xl w-fit group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  {getServiceIcon(service.icon)}
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-black tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-700 font-medium leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t-2 border-neutral-100 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-neutral-500 uppercase">
                  Service 0{index + 1}
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-bold text-black group-hover:underline underline-offset-4"
                >
                  <span>Inquire Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
