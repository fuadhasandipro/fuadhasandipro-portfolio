"use client";

import { testimonials } from "@/data/portfolioData";
import { Quote, Star, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-8 bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-neutral-100 border-2 border-black rounded-full text-xs font-mono font-bold uppercase tracking-wider text-black shadow-outline-sm">
            <Star className="w-4 h-4 text-black fill-black" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight">
            What Clients Say
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 font-medium">
            Feedback from founders, management leads, and brand owners who achieved rapid growth with my web engineering.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="bg-neutral-50 border-2 border-black rounded-3xl p-6 sm:p-8 shadow-outline-hover flex flex-col justify-between space-y-6 relative"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-black opacity-30" />
                <p className="text-sm sm:text-base text-neutral-800 font-medium leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t-2 border-black flex items-center justify-between">
                <div>
                  <div className="font-extrabold text-black text-sm flex items-center gap-1.5">
                    <span>{t.author}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-black" />
                  </div>
                  <div className="text-xs font-mono text-neutral-600">{t.role}</div>
                </div>

                <span className="text-[11px] font-mono font-bold bg-white text-black px-2.5 py-1 rounded-md border border-black shadow-outline-sm">
                  {t.project}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
